import { NextResponse } from "next/server";

// Adds a new contact to a Brevo list
// Called on account creation to trigger the "Account Created — No Booking" sequence
export async function POST(request) {
  try {
    const { email, firstName, listId } = await request.json();

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const DEFAULT_LIST_ID = parseInt(process.env.BREVO_ACCOUNT_CREATED_LIST_ID || "0", 10);

    if (!BREVO_API_KEY) {
      return NextResponse.json({ success: true, note: "Brevo not configured" });
    }

    const targetList = listId || DEFAULT_LIST_ID;
    if (!targetList) {
      return NextResponse.json({ success: true, note: "No list ID provided" });
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
