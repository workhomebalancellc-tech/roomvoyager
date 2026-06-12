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
              "Travelers":    String(travelers || "2"),
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

    // 2. Send email notification via EmailJS
    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    if (EJ_SERVICE && EJ_TEMPLATE && EJ_PUBLIC) {
      try {
        const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id:   EJ_SERVICE,
            template_id:  EJ_TEMPLATE,
            user_id:      EJ_PUBLIC,
            ...(EJ_PRIVATE && { accessToken: EJ_PRIVATE }),
            template_params: {
              to_email:    "roomvoyager@protonmail.com",
              from_name:   `${firstName} ${lastName}`,
              from_email:  email,
              phone:       phone       || "Not provided",
              destination: destination || "Flexible",
              travelers,
              budget:      budget      || "Flexible",
              travel_from: travelFrom  || "TBD",
              travel_to:   travelTo    || "TBD",
              cabin,
              notes:       notes       || "None",
              submitted_at: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) + " EST",
            },
          }),
        });
        results.email = emailRes.ok;
        if (!emailRes.ok) {
          const err = await emailRes.text();
          console.warn("EmailJS error:", err);
        }
      } catch (emailErr) {
        console.warn("EmailJS fetch failed:", emailErr.message);
      }
    }

    return NextResponse.json({ success: true, ...results });
  } catch (err) {
    console.error("Quote submission error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
