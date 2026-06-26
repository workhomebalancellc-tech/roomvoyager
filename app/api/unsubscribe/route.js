/**
 * Unsubscribe — GET /api/unsubscribe?email=...
 * Sets subscriber.active = false and returns a confirmation page.
 * CAN-SPAM requires a one-click unsubscribe mechanism in all bulk emails.
 */

import { adminDb } from "../../../lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = (searchParams.get("email") || "").trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(html("Invalid unsubscribe link.", false), {
      headers: { "Content-Type": "text/html" },
    });
  }

  try {
    const docId  = email.replace(/[.#$/\[\]]/g, "_");
    const docRef = adminDb.collection("subscribers").doc(docId);
    const snap   = await docRef.get();

    if (snap.exists) {
      await docRef.update({ active: false, unsubscribedAt: new Date().toISOString() });
    }

    // Also mark user account if one exists
    const userSnap = await adminDb.collection("users")
      .where("email", "==", email)
      .limit(1)
      .get();
    if (!userSnap.empty) {
      await userSnap.docs[0].ref.update({ emailOptOut: true });
    }

    return new Response(html(`You've been unsubscribed. You will no longer receive marketing emails from RoomVoyager.`, true), {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return new Response(html("Something went wrong. Please email us at admin@roomvoyagertravel.com to unsubscribe.", false), {
      headers: { "Content-Type": "text/html" },
    });
  }
}

function html(message, success) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unsubscribe — RoomVoyager</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f8f9fa; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
    .card { background: #fff; border-radius: 14px; padding: 40px; max-width: 480px; text-align: center; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
    .icon { font-size: 48px; margin-bottom: 16px; }
    h1 { color: #003B95; font-size: 22px; margin: 0 0 12px; }
    p { color: #555; font-size: 15px; line-height: 1.6; }
    a { color: #003B95; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${success ? "✅" : "⚠️"}</div>
    <h1>${success ? "Unsubscribed" : "Oops"}</h1>
    <p>${message}</p>
    <p style="margin-top:24px"><a href="https://www.roomvoyagertravel.com">← Return to RoomVoyager</a></p>
  </div>
</body>
</html>`;
}
