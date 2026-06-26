// POST /api/admin/manual-award
// Awards points, logs to Airtable, and emails the customer — all server-side.
// Body: { adminEmail, guestEmail, name, product, productLabel, amount, pts, cash, double, notes }

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { adminEmail, guestEmail, name, productLabel, amount, pts, cash, notes } = body;

    if (!ALLOWED_EMAILS.includes(adminEmail)) {
      return Response.json({ error: "Not authorized" }, { status: 403 });
    }
    if (!guestEmail || !pts || pts <= 0) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const normalizedEmail = guestEmail.trim().toLowerCase();

    // ── 1. Award points in Firestore ────────────────────────────────────────
    const snap = await adminDb.collection("users")
      .where("email", "==", normalizedEmail)
      .limit(1).get();

    if (snap.empty) {
      return Response.json({ error: "Member not found" }, { status: 404 });
    }

    const ref = snap.docs[0].ref;
    await ref.update({
      points:         FieldValue.increment(pts),
      lifetimePoints: FieldValue.increment(pts),
      updatedAt:      FieldValue.serverTimestamp(),
    });

    const updated = (await ref.get()).data().points || 0;

    // ── 2. Send email via EmailJS ────────────────────────────────────────────
    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    let emailOk = false;
    if (EJ_SERVICE && EJ_TEMPLATE && EJ_PUBLIC) {
      const emailPayload = {
        service_id:   EJ_SERVICE,
        template_id:  EJ_TEMPLATE,
        user_id:      EJ_PUBLIC,
        ...(EJ_PRIVATE ? { accessToken: EJ_PRIVATE } : {}),
        template_params: {
          to_email:  normalizedEmail,
          from_name: "RoomVoyager Rewards",
          from_email: "admin@roomvoyagertravel.com",
          name:      name || "there",
          pts:       `+${Number(pts).toLocaleString()}`,
          notes:     `Your RoomVoyager Rewards balance has been updated.\n\nPoints added: +${Number(pts).toLocaleString()} pts\nNew balance: ${Number(updated).toLocaleString()} pts\n\nBooking: ${productLabel}${amount ? ` — $${Number(amount).toFixed(2)}` : ""}${notes ? `\nNote: ${notes}` : ""}\n\nPoints may take up to 7 days to appear after your booking is confirmed. If you have questions, reply to this email.\n\nThank you for booking with RoomVoyager!`,
        },
      };

      console.log("[manual-award] sending email to", normalizedEmail, "via EmailJS");
      const ejRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(emailPayload),
      });
      const ejText = await ejRes.text();
      console.log("[manual-award] EmailJS response:", ejRes.status, ejText);
      emailOk = ejRes.ok;
    } else {
      console.warn("[manual-award] EmailJS not configured — skipping email");
    }

    return Response.json({ ok: true, points: updated, emailOk });

  } catch (e) {
    console.error("[manual-award] error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
