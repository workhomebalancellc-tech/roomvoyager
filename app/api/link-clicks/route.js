import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { partner, product, url, userEmail, userName, utmSource, utmMedium, utmCampaign, searchData } = await request.json();

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE  = process.env.AIRTABLE_BASE_ID;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE) {
      // Silently succeed if Airtable isn't configured — don't block the redirect
      return NextResponse.json({ success: true, note: "Airtable not configured" });
    }

    const fields = {
      "Partner":        partner    || "Unknown",
      "Product":        product    || "Unknown",
      "Destination URL": url       || "",
      "User Email":     userEmail  || "Guest",
      "User Name":      userName   || "",
      "Clicked At":     new Date().toISOString(),
      "Status":         "Clicked",
      // Only include UTM fields if they have values — avoids Airtable rejecting
      // the record if the columns don't exist yet in the table
      ...(utmSource   ? { "UTM Source":   utmSource }   : {}),
      ...(utmMedium   ? { "UTM Medium":   utmMedium }   : {}),
      ...(utmCampaign ? { "UTM Campaign": utmCampaign } : {}),
      ...(searchData && Object.keys(searchData).length ? { "Search Intent": JSON.stringify(searchData) } : {}),
    };

    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/Link%20Clicks`,
      {
        method:  "POST",
        headers: {
          "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type":  "application/json",
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Airtable link-click error:", err);
      // Still return success — don't block the user from continuing
      return NextResponse.json({ success: true, note: "Airtable write failed but continuing" });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("link-clicks route error:", err);
    // Never block the redirect
    return NextResponse.json({ success: true, note: "Error caught but continuing" });
  }
}
