import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      firstName, lastName, email, phone,
      destination, travelers, budget, travelFrom, travelTo,
      cabin, notes,
    } = data;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    const results = { airtable: false, email: false };

    // 1. Log to Airtable (your admin dashboard)
    const AIRTABLE_KEY  = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID;

    if (AIRTABLE_KEY && AIRTABLE_BASE) {
      try {
        const atRes = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/Quotes`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              "First Name":   firstName  || "",
              "Last Name":    lastName   || "",
              "Email":        email,
              "Phone":        phone      || "",
              "Destination":  destination || "Flexible",
              "Travelers":    parseInt(travelers) || 2,
              "Budget":       budget     || "Flexible",
              "Travel From":  travelFrom || "",
              "Travel To":    travelTo   || "",
              "Cabin":        cabin      || "any",
              "Notes":        notes      || "",
              "Submitted At": new Date().toISOString(),
              "Status":       "New",
            },
          }),
        });
        results.airtable = atRes.ok;
        if (!atRes.ok) {
          const err = await atRes.text();
          console.warn("Airtable error:", err);
        }
      } catch (atErr) {
        console.warn("Airtable fetch failed:", atErr.message);
      }
    }

    // 2. Send email notification via Resend
    const RESEND_KEY = process.env.RESEND_API_KEY;
    if (RESEND_KEY) {
      const emailText = [
        "New Cruise Quote Request",
        "─────────────────────────",
        `Name:           ${firstName} ${lastName}`,
        `Email:          ${email}`,
        `Phone:          ${phone || "Not provided"}`,
        `Destination:    ${destination || "Flexible"}`,
        `Travelers:      ${travelers}`,
        `Budget/person:  ${budget || "Flexible"}`,
        `Travel Dates:   ${travelFrom || "TBD"} – ${travelTo || "TBD"}`,
        `Cabin:          ${cabin}`,
        `Notes:          ${notes || "None"}`,
        "",
        `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST`,
      ].join("\n");

      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "RoomVoyager Quotes <onboarding@resend.dev>",
            to:   ["workhomebalancellc@gmail.com"],
            subject: `🚢 New Quote: ${firstName} ${lastName} — ${destination || "Flexible"}`,
            text: emailText,
          }),
        });
        results.email = emailRes.ok;
        if (!emailRes.ok) {
          const err = await emailRes.text();
          console.warn("Resend error:", err);
        }
      } catch (emailErr) {
        console.warn("Resend fetch failed:", emailErr.message);
      }
    }

    return NextResponse.json({ success: true, ...results });
  } catch (err) {
    console.error("Quote submission error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
