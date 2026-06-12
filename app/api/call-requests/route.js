import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, date, time } = data;

    if (!email || !date || !time) {
      return NextResponse.json({ success: false, error: "Email, date, and time are required" }, { status: 400 });
    }

    const AIRTABLE_KEY  = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID;

    if (!AIRTABLE_KEY || !AIRTABLE_BASE) {
      return NextResponse.json({ success: false, error: "Airtable not configured" }, { status: 500 });
    }

    const atRes = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/Phone%20Call%20Requests`, {
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
          "Date":         date,
          "Time":         time,
          "Submitted At": new Date().toISOString(),
          "Status":       "New",
        },
      }),
    });

    if (!atRes.ok) {
      const err = await atRes.text();
      console.warn("Airtable error:", err);
      return NextResponse.json({ success: false, error: "Airtable save failed" }, { status: 500 });
    }

    // 2. Send email notification via EmailJS
    const EJ_SERVICE  = process.env.EMAILJS_SERVICE_ID;
    const EJ_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
    const EJ_PUBLIC   = process.env.EMAILJS_PUBLIC_KEY;
    const EJ_PRIVATE  = process.env.EMAILJS_PRIVATE_KEY;

    if (EJ_SERVICE && EJ_TEMPLATE && EJ_PUBLIC) {
      try {
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id:   EJ_SERVICE,
            template_id:  EJ_TEMPLATE,
            user_id:      EJ_PUBLIC,
            ...(EJ_PRIVATE && { accessToken: EJ_PRIVATE }),
            template_params: {
              to_email:    "workhomebalancellc@gmail.com",
              from_name:   `${firstName || ""} ${lastName || ""}`.trim() || "Customer",
              from_email:  email,
              phone:       phone || "Not provided",
              destination: `📞 Call Request — ${date} at ${time}`,
              travelers:   "N/A",
              budget:      "N/A",
              travel_from: date,
              travel_to:   time,
              cabin:       "N/A",
              notes:       `Phone: ${phone || "Not provided"}`,
              submitted_at: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) + " EST",
            },
          }),
        });
      } catch (emailErr) {
        console.warn("EmailJS fetch failed:", emailErr.message);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Call request error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
