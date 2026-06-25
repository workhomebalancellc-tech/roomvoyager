import { NextResponse } from "next/server";

// POST /api/booking-points-notify
// Sends a "you earned points!" email to the customer via EmailJS
export async function POST(req) {
  try {
    const { email, name, product, amount, pts, cash, newBalance, notes } = await req.json();

    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    if (!EJ_SERVICE || !EJ_TEMPLATE || !EJ_PUBLIC) {
      return NextResponse.json({ ok: false, error: "EmailJS not configured" });
    }

    const payload = {
      service_id:  EJ_SERVICE,
      template_id: EJ_TEMPLATE,
      user_id:     EJ_PUBLIC,
      template_params: {
        to_email:    email,
        from_name:   "RoomVoyager Rewards",
        from_email:  "roomvoyager@protonmail.com",
        name:        name || "there",
        pts:         Number(pts).toLocaleString(),
        notes:       `Great news! You've earned ${Number(pts).toLocaleString()} points ($${cash}) on your recent ${product} booking of $${Number(amount).toFixed(2)} through RoomVoyager.\n\nYour new points balance: ${Number(newBalance).toLocaleString()} pts\n\nPlease note: points may take up to 7 days to appear in your account after your booking is confirmed in our system. If you don't see them after 7 days, reply to this email and we'll look into it.\n\nThank you for booking with RoomVoyager!\n\n${notes ? `Booking notes: ${notes}` : ""}`,
      },
    };

    console.log("[booking-points-notify] sending to EmailJS", {
      service_id:  EJ_SERVICE,
      template_id: EJ_TEMPLATE,
      user_id:     EJ_PUBLIC ? EJ_PUBLIC.slice(0, 6) + "…" : "MISSING",
      to_email:    email,
    });

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseText = await res.text();
    console.log("[booking-points-notify] EmailJS response", res.status, responseText);

    return NextResponse.json({ ok: res.ok, status: res.status, response: responseText });
  } catch (e) {
    console.error("booking-points-notify error:", e);
    return NextResponse.json({ ok: false, error: e.message });
  }
}
