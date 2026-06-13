/**
 * POST /api/redemptions/complete
 *
 * Called by an Airtable Automation when a redemption record's Status
 * changes to "Paid". Sends a payment-confirmation email to the member
 * via EmailJS.
 *
 * Airtable sends JSON like:
 * {
 *   "secret": "<REDEMPTION_WEBHOOK_SECRET>",
 *   "name": "Jane Doe",
 *   "email": "jane@example.com",
 *   "pointsRedeemed": 1000,
 *   "cashValue": 10,
 *   "paymentMethod": "Zelle",
 *   "paymentHandle": "jane@example.com"
 * }
 *
 * Required Vercel env vars:
 *   EMAILJS_SERVICE_ID
 *   EMAILJS_TEMPLATE_ID
 *   EMAILJS_PUBLIC_KEY
 *   EMAILJS_PRIVATE_KEY   (optional but recommended)
 *   REDEMPTION_WEBHOOK_SECRET  (set same value in Airtable automation)
 */

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();

    // ── Auth: shared secret set in Airtable automation body ────────────────
    const WEBHOOK_SECRET = process.env.REDEMPTION_WEBHOOK_SECRET;
    if (WEBHOOK_SECRET && body.secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      name,
      email,
      pointsRedeemed,
      cashValue,
      paymentMethod,
      paymentHandle,
    } = body;

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    // ── Send confirmation email to the member ───────────────────────────────
    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    if (!EJ_SERVICE || !EJ_TEMPLATE || !EJ_PUBLIC) {
      return NextResponse.json({ ok: false, error: "EmailJS not configured" }, { status: 500 });
    }

    const ptsFormatted  = Number(pointsRedeemed).toLocaleString();
    const cashFormatted = `$${Number(cashValue).toFixed(2)}`;
    const greeting      = name ? `Hi ${name.split(" ")[0]}` : "Hi there";

    const emailBody = [
      `${greeting},`,
      "",
      `Great news — your RoomVoyager Rewards payment of ${cashFormatted} has been sent!`,
      "",
      `Payment details:`,
      `  • Amount:  ${cashFormatted}`,
      `  • Method:  ${paymentMethod || "N/A"}`,
      `  • Sent to: ${paymentHandle || "N/A"}`,
      `  • Points redeemed: ${ptsFormatted} pts`,
      "",
      `Please allow a few minutes for the payment to arrive. If you don't receive it within 24 hours, reply to this email and we'll look into it right away.`,
      "",
      `Thank you for being a RoomVoyager member — we appreciate you!`,
      "",
      `— The RoomVoyager Team`,
      `roomvoyagertravel.com`,
    ].join("\n");

    const ejRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id:  EJ_SERVICE,
        template_id: EJ_TEMPLATE,
        user_id:     EJ_PUBLIC,
        ...(EJ_PRIVATE && { accessToken: EJ_PRIVATE }),
        template_params: {
          to_email:    email,
          from_name:   "RoomVoyager Rewards",
          from_email:  "roomvoyager@protonmail.com",
          destination: `💸 Your ${cashFormatted} payment has been sent!`,
          travelers:   name || email,
          budget:      cashFormatted,
          travel_from: paymentMethod || "N/A",
          travel_to:   paymentHandle || "N/A",
          cabin:       `${ptsFormatted} pts redeemed`,
          notes:       emailBody,
          submitted_at: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) + " ET",
          phone:       "N/A",
        },
      }),
    });

    if (!ejRes.ok) {
      const errText = await ejRes.text();
      console.error("EmailJS error:", errText);
      return NextResponse.json({ ok: false, error: "EmailJS failed", detail: errText }, { status: 502 });
    }

    console.log(`✅ Sent redemption completion email to ${email} (${ptsFormatted} pts → ${cashFormatted} via ${paymentMethod})`);
    return NextResponse.json({ ok: true, email, cashValue, paymentMethod });

  } catch (err) {
    console.error("redemptions/complete error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
