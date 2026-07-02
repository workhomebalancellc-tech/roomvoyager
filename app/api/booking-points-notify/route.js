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
      service_id:   EJ_SERVICE,
      template_id:  EJ_TEMPLATE,
      user_id:      EJ_PUBLIC,
      ...(EJ_PRIVATE ? { accessToken: EJ_PRIVATE } : {}),
      template_params: {
        to_email:    email,
        from_name:   "RoomVoyager Rewards",
        from_email:  "admin@roomvoyagertravel.com",
        name:        name || "there",
        pts:         `+${Number(pts).toLocaleString()}`,
        notes:       `Your RoomVoyager Rewards balance has been updated.\n\nPoints added: +${Number(pts).toLocaleString()} pts\nNew balance: ${Number(newBalance).toLocaleString()} pts\n\nBooking: ${product}${amount ? ` — $${Number(amount).toFixed(2)}` : ""}${notes ? `\nNote: ${notes}` : ""}\n\nPoints may take up to 7 days to appear after your booking is confirmed. If you have questions, reply to this email.\n\nThank you for saving and earning points with RoomVoyager!`,
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
