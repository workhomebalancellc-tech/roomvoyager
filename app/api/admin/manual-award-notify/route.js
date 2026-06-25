// POST /api/admin/manual-award-notify
// Logs a manual point award to Airtable and emails the customer.
// Used by the Award/Adjust Points form (which updates Firestore separately).
// Body: { adminEmail, guestEmail, name, pts, newBalance, notes }

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { adminEmail, guestEmail, name, pts, newBalance, notes } = body;

    if (!ALLOWED_EMAILS.includes(adminEmail)) {
      return Response.json({ error: "Not authorized" }, { status: 403 });
    }
    if (!guestEmail || !pts || pts <= 0) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const normalizedEmail = guestEmail.trim().toLowerCase();

    // ── 1. Send email via EmailJS ────────────────────────────────────────────
    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    let emailOk = false;
    if (EJ_SERVICE && EJ_TEMPLATE && EJ_PUBLIC) {
      const balance = Number(newBalance || 0);
      const emailPayload = {
        service_id:   EJ_SERVICE,
        template_id:  EJ_TEMPLATE,
        user_id:      EJ_PUBLIC,
        ...(EJ_PRIVATE ? { accessToken: EJ_PRIVATE } : {}),
        template_params: {
          to_email:   normalizedEmail,
          from_name:  "RoomVoyager Rewards",
          from_email: "roomvoyager@protonmail.com",
          name:       name || "there",
          pts:        Number(pts).toLocaleString(),
          notes:      `Great news! ${Number(pts).toLocaleString()} points have been added to your RoomVoyager Rewards account.\n\nYour current points balance: ${balance.toLocaleString()} pts\n\nThank you for booking with RoomVoyager!\n\n${notes ? `Note: ${notes}` : ""}`,
        },
      };

      console.log("[manual-award-notify] sending email to", normalizedEmail);
      const ejRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(emailPayload),
      });
      const ejText = await ejRes.text();
      console.log("[manual-award-notify] EmailJS response:", ejRes.status, ejText);
      emailOk = ejRes.ok;
    } else {
      console.warn("[manual-award-notify] EmailJS not configured — skipping email");
    }

    return Response.json({ ok: true, emailOk });

  } catch (e) {
    console.error("[manual-award-notify] error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
