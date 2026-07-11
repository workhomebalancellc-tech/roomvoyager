// Admin settings API — stores promo and booking-tracking config in Firestore
// GET  → returns current settings
// POST { adminEmail, ...settings } → saves settings (admin only)

import { adminDb } from "../../../../lib/firebase-admin";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com", "rhemaleverett@protonmail.com"];

export async function GET(req) {
  // Optional ?checkDate=YYYY-MM-DD — returns whether double points was active on that date
  const { searchParams } = new URL(req.url);
  const checkDate = searchParams.get("checkDate");
  if (checkDate) {
    const isDouble = await isPromoActiveAt(new Date(checkDate + "T12:00:00"));
    return Response.json({ doublePoints: isDouble });
  }
  const doc = await adminDb.collection("settings").doc("promo").get();
  return Response.json(doc.exists ? doc.data() : { doublePointsOn: false, bookingTracking: true });
}

export async function POST(req) {
  const body = await req.json();
  const { adminEmail, ...settings } = body;

  if (!ALLOWED_EMAILS.includes(adminEmail)) {
    return Response.json({ error: "Not authorized" }, { status: 403 });
  }

  await adminDb.collection("settings").doc("promo").set({
    ...settings,
    updatedAt: new Date().toISOString(),
  });

  return Response.json({ ok: true });
}

// ── Exported helpers — call from other API routes ────────────────────────────

// Returns true if double-points promo is on AND current time is within the window
export async function isPromoActive() {
  return isPromoActiveAt(new Date());
}

// Returns true if a given date falls within the stored promo window.
// Uses the booking date — NOT the current time — so imports run after
// a promo ends still correctly award double points for bookings made during it.
export async function isPromoActiveAt(date) {
  try {
    const doc = await adminDb.collection("settings").doc("promo").get();
    if (!doc.exists) return false;

    const { doublePointsOn, promoStartDate, promoStartTime, promoEndDate, promoEndTime } = doc.data();
    if (!doublePointsOn) return false;

    const check = date instanceof Date ? date : new Date(date);

    if (promoStartDate) {
      const start = new Date(`${promoStartDate}T${promoStartTime || "00:00"}:00`);
      if (check < start) return false;
    }

    if (promoEndDate) {
      const end = new Date(`${promoEndDate}T${promoEndTime || "23:59"}:00`);
      if (check > end) return false;
    }

    return true;
  } catch {
    return false;
  }
}
