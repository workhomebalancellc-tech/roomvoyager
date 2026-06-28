import { NextResponse } from "next/server";

// List type → env var mapping
const LIST_MAP = {
  "searcher-hotel":    "BREVO_SEARCHERS_LIST_ID",          // 2
  "searcher-flight":   "BREVO_FLIGHT_SEARCHERS_LIST_ID",   // 4
  "searcher-cruise":   "BREVO_CRUISE_SEARCHERS_LIST_ID",   // 6
  "account-hotel":     "BREVO_ACCOUNT_HOTEL_LIST_ID",      // 9
  "account-cruise":    "BREVO_ACCOUNT_CRUISE_LIST_ID",     // 10
  "account-flight":    "BREVO_ACCOUNT_FLIGHT_LIST_ID",     // 11
  "account-created":   "BREVO_ACCOUNT_CREATED_LIST_ID",    // 12 universal
};

// All searcher list IDs — used to remove contact when they upgrade to account
const ALL_SEARCHER_IDS = [
  parseInt(process.env.BREVO_SEARCHERS_LIST_ID         || "2",  10),
  parseInt(process.env.BREVO_FLIGHT_SEARCHERS_LIST_ID  || "4",  10),
  parseInt(process.env.BREVO_CRUISE_SEARCHERS_LIST_ID  || "6",  10),
];

// Adds a new contact to a Brevo list, optionally removing from old lists
// listType: "searcher-hotel" | "searcher-flight" | "searcher-cruise"
//         | "account-hotel"  | "account-flight"  | "account-cruise" | "account-created"
// upgrade: true → also removes contact from all searcher lists (called on signup)
export async function POST(request) {
  try {
    const { email, firstName, listType, listId, upgrade } = await request.json();

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      return NextResponse.json({ success: true, note: "Brevo not configured" });
    }

    // Resolve target list ID
    const envKey = LIST_MAP[listType];
    const targetList = envKey
      ? parseInt(process.env[envKey] || "0", 10)
      : parseInt(listId || "0", 10);

    if (!targetList) {
      return NextResponse.json({ success: true, note: "No list ID resolved" });
    }

    if (upgrade) {
      // Move contact: add to account list + remove from all searcher lists in one PUT call
      const res = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
        method: "PUT",
        headers: {
          "api-key":      BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attributes:    { FIRSTNAME: firstName || "" },
          listIds:       [targetList],
          unlinkListIds: ALL_SEARCHER_IDS,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        // Contact may not exist yet — fall through to POST to create + add
        if (!err.includes("Contact does not exist")) {
          console.error("Brevo upgrade error:", err);
          return NextResponse.json({ success: true, note: "Upgrade failed but continuing" });
        }
      } else {
        return NextResponse.json({ success: true });
      }
    }

    // Standard add (new contact or fallback from upgrade)
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key":      BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes:    { FIRSTNAME: firstName || "" },
        listIds:       [targetList],
        updateEnabled: false,
      }),
    });

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
