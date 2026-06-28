import { NextResponse } from "next/server";

// List type → env var mapping
const LIST_MAP = {
  "searcher-hotel":   "BREVO_SEARCHERS_LIST_ID",
  "searcher-flight":  "BREVO_FLIGHT_SEARCHERS_LIST_ID",
  "searcher-cruise":  "BREVO_CRUISE_SEARCHERS_LIST_ID",
  "account-created":  "BREVO_ACCOUNT_CREATED_LIST_ID",
};

// Adds a new contact to a Brevo list
// listType: "searcher-hotel" | "searcher-flight" | "searcher-cruise" | "account-created"
export async function POST(request) {
  try {
    const { email, firstName, listType, listId } = await request.json();

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      return NextResponse.json({ success: true, note: "Brevo not configured" });
    }

    // Resolve list ID — prefer listType lookup, fall back to explicit listId
    const envKey = LIST_MAP[listType];
    const targetList = envKey
      ? parseInt(process.env[envKey] || "0", 10)
      : parseInt(listId || "0", 10);

    if (!targetList) {
      return NextResponse.json({ success: true, note: "No list ID resolved" });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key":      BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName || "" },
        listIds:    [targetList],
        updateEnabled: false, // don't overwrite existing contacts
      }),
    });

    // 204 = created, 400 with "Contact already exist" is fine — not a real error
    if (!res.ok) {
      const err = await res.text();
      if (err.includes("Contact already exist")) {
        return NextResponse.json({ success: true, note: "Contact already exists" });
      }
      console.error("Brevo add-contact error:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("brevo/add-contact route error:", err);
    return NextResponse.json({ success: true, note: "Error caught but continuing" });
  }
}
