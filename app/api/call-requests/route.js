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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Call request error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
