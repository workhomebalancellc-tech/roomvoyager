import { NextResponse } from "next/server";

export async function GET() {
  const AIRTABLE_KEY  = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID;

  if (!AIRTABLE_KEY || !AIRTABLE_BASE) {
    return NextResponse.json({ error: "Missing env vars", key: !!AIRTABLE_KEY, base: !!AIRTABLE_BASE });
  }

  const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/Quotes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        "First Name":   "Test",
        "Last Name":    "User",
        "Email":        "test@test.com",
        "Phone":        "555-1234",
        "Destination":  "Test Destination",
        "Travelers":    "2",
        "Budget":       "Flexible",
        "Travel From":  "2026-07-01",
        "Travel To":    "2026-07-08",
        "Cabin":        "any",
        "Notes":        "Debug test entry",
        "Submitted At": new Date().toISOString(),
        "Status":       "New",
      },
    }),
  });

  const body = await res.json();
  return NextResponse.json({ status: res.status, ok: res.ok, body });
}
