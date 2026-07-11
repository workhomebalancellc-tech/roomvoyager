/**
 * Email Blast — POST /api/admin/send-blast
 *
 * Auth: body.adminEmail in ALLOWED_EMAILS  OR  x-admin-secret header
 *
 * Body:
 *   { adminEmail, subject, messageBody, audience, manualEmails? }
 *
 * audience options:
 *   "all"            → all registered users + active subscribers (deduped)
 *   "users"          → all registered users only
 *   "subscribers"    → newsletter subscribers only
 *   "customers"      → users who have at least one booking
 *   "points"         → users with redeemable points > 0
 *   "manual"         → only the emails listed in body.manualEmails[]
 */

import { adminDb } from "../../../../lib/firebase-admin";

export const dynamic = "force-dynamic";

const IMPORT_SECRET = process.env.EXPEDIA_IMPORT_SECRET;
const SENDGRID_KEY  = process.env.SENDGRID_API_KEY;
const FROM_EMAIL    = process.env.SENDGRID_FROM_EMAIL || "noreply@roomvoyagertravel.com";
const FROM_NAME     = "RoomVoyager Rewards";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com", "rhemaleverett@protonmail.com"];

function isAuthorized(body, headers) {
  if (body.adminEmail && ALLOWED_EMAILS.includes(body.adminEmail)) return true;
  const secret = body.secret || headers?.get?.("x-admin-secret");
  return !!(secret && secret === IMPORT_SECRET);
}

// ── Collect recipients ────────────────────────────────────────────────────────

async function getRecipients(audience = "all", manualEmails = []) {
  const seen = new Map(); // email → { email, name }

  const addUser = (d) => {
    const email = (d.email || "").toLowerCase();
    // Respect opt-out flag set by unsubscribe endpoint
    if (email && !seen.has(email) && !d.emailOptOut) {
      seen.set(email, { email, name: d.displayName || d.name || "" });
    }
  };

  if (audience === "manual") {
    // Only send to the explicitly listed emails
    for (const raw of manualEmails) {
      const email = (raw || "").trim().toLowerCase();
      if (email) seen.set(email, { email, name: "" });
    }
    return Array.from(seen.values());
  }

  if (audience === "all" || audience === "users") {
    const snap = await adminDb.collection("users").get();
    snap.forEach(doc => addUser(doc.data()));
  }

  if (audience === "all" || audience === "subscribers") {
    const snap = await adminDb.collection("subscribers").where("active", "==", true).get();
    snap.forEach(doc => addUser(doc.data()));
  }

  if (audience === "customers") {
    // Users who appear in the bookings collection at least once
    const bookingSnap = await adminDb.collection("bookings").get();
    const uids = new Set();
    bookingSnap.forEach(doc => { const uid = doc.data().uid; if (uid) uids.add(uid); });
    for (const uid of uids) {
      const userDoc = await adminDb.collection("users").doc(uid).get();
      if (userDoc.exists) addUser(userDoc.data());
    }
  }

  if (audience === "points") {
    // Users with redeemable points > 0
    const snap = await adminDb.collection("users").where("points", ">", 0).get();
    snap.forEach(doc => addUser(doc.data()));
  }

  return Array.from(seen.values());
}

// ── Send via SendGrid ─────────────────────────────────────────────────────────

async function sendEmail({ to, name, subject, htmlBody, textBody }) {
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to, name }] }],
      from: { email: FROM_EMAIL, name: FROM_NAME },
      subject,
      content: [
        { type: "text/plain", value: textBody || subject },
        { type: "text/html",  value: htmlBody },
      ],
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => String(res.status));
    throw new Error(`SendGrid ${res.status}: ${txt}`);
  }
}

// ── Build branded HTML email ──────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.roomvoyagertravel.com";

function buildHtml({ name, subject, body, email }) {
  const greeting = name ? `Hi ${name},` : "Hi there,";
  const unsubLink = `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email)}`;
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F0F4FF;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4FF;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#003B95 0%,#0052CC 100%);padding:28px 32px;text-align:center;">
            <p style="color:#FF6600;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 8px;">RoomVoyager Rewards</p>
            <h1 style="color:#fff;font-size:24px;font-weight:800;margin:0;line-height:1.2;">${subject}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="color:#374151;font-size:15px;margin:0 0 16px;">${greeting}</p>
            <div style="color:#374151;font-size:15px;line-height:1.7;">${body.replace(/\n/g, "<br>")}</div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 32px;text-align:center;">
            <a href="https://roomvoyagertravel.com/hotels" style="display:inline-block;background:#FF6600;color:#fff;font-weight:800;font-size:15px;padding:14px 32px;border-radius:12px;text-decoration:none;">
              Book Now &amp; Earn Points →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F8FAFF;padding:20px 32px;text-align:center;border-top:1px solid #E5E7EB;">
            <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px;">RoomVoyager · Travel Rewards for Everyone</p>
            <p style="color:#9CA3AF;font-size:11px;margin:0;">
              You're receiving this because you signed up for RoomVoyager Rewards.
              Questions? Reply to this email.
            </p>
            <p style="color:#9CA3AF;font-size:11px;margin:8px 0 0;">
              <a href="${unsubLink}" style="color:#9CA3AF;">Unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req) {
  const body = await req.json().catch(() => ({}));

  if (!isAuthorized(body, req.headers)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!SENDGRID_KEY) {
    return Response.json({ error: "SENDGRID_API_KEY not configured" }, { status: 500 });
  }

  const { subject, messageBody, audience = "all", manualEmails = [] } = body;
  if (!subject || !messageBody) {
    return Response.json({ error: "subject and messageBody are required" }, { status: 400 });
  }

  const recipients = await getRecipients(audience, manualEmails);
  if (recipients.length === 0) {
    return Response.json({ ok: true, sent: 0, failed: 0, message: "No recipients found" });
  }

  let sent = 0, failed = 0;
  const errors = [];

  for (const r of recipients) {
    try {
      await sendEmail({
        to:       r.email,
        name:     r.name,
        subject,
        htmlBody: buildHtml({ name: r.name, subject, body: messageBody, email: r.email }),
        textBody: `${r.name ? `Hi ${r.name},\n\n` : ""}${messageBody}\n\nBook now at roomvoyagertravel.com`,
      });
      sent++;
      await new Promise(res => setTimeout(res, 50));
    } catch (err) {
      failed++;
      errors.push({ email: r.email, error: err.message });
      console.error(`Blast failed for ${r.email}:`, err.message);
    }
  }

  await adminDb.collection("email_blasts").add({
    subject,
    audience,
    manualEmails: audience === "manual" ? manualEmails : [],
    recipientCount: recipients.length,
    sent,
    failed,
    sentAt: new Date().toISOString(),
    sentBy: body.adminEmail || "api",
  });

  return Response.json({ ok: true, sent, failed, total: recipients.length, errors: errors.slice(0, 10) });
}

// GET: preview recipient count
export async function GET(req) {
  const url    = new URL(req.url);
  const secret = url.searchParams.get("secret");
  const email  = url.searchParams.get("adminEmail");

  if (!isAuthorized({ secret, adminEmail: email }, req.headers)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const audience   = url.searchParams.get("audience") || "all";
  const recipients = await getRecipients(audience);
  return Response.json({ ok: true, count: recipients.length, audience });
}
