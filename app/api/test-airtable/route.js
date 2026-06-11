import { NextResponse } from "next/server";

export async function GET() {
  const AIRTABLE_KEY  = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID;

  if (!AIRTABLE_KEY || !AIRTABLE_BASE) {
    return NextResponse.json({ error: "Missing env vars", key: !!AIRTABLE_KEY, base: !!AIRTABLE_BASE });
  }

  const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/Contact%20Messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        "Name":         "Test User",
        "Email":        "test@test.com",
        "Subject":      "Test Subject",
        "Message":      "Debug test entry",
        "Submitted At": new Date().toISOString(),
        "Status":       "New",
      },
    }),
  });

  const body = await res.json();
  return NextResponse.json({ status: res.status, ok: res.ok, body });
}
