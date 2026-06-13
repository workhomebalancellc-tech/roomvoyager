// Log a hotel affiliate click for a logged-in user
// POST { uid, email, name, destination, checkIn, checkOut }
// Stored in Firestore: hotel_clicks collection
// Used later to match against Expedia CSV exports

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { uid, email, name, destination, checkIn, checkOut } = await req.json();

    if (!uid) return Response.json({ error: "uid required" }, { status: 400 });

    await adminDb.collection("hotel_clicks").add({
      uid,
      email:       email       || "",
      name:        name        || "",
      destination: destination || "",
      checkIn:     checkIn     || "",
      checkOut:    checkOut    || "",
      clickedAt:   FieldValue.serverTimestamp(),
      // ISO string for easy CSV matching
      clickedAtISO: new Date().toISOString(),
      matched:     false, // set to true once matched to an Expedia booking
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("hotel-click track error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
