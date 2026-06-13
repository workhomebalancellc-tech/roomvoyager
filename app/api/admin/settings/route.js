// Admin settings API — stores promo and booking-tracking config in Firestore
// GET  → returns current settings
// POST { adminEmail, ...settings } → saves settings (admin only)

import { adminDb } from "../../../../lib/firebase-admin";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

export async function GET() {
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

// ── Exported helper — call from other API routes ──────────────────────────────
// Returns true if double-points promo is on AND current time is within the window
export async function isPromoActive() {
  try {
    const doc = await adminDb.collection("settings").doc("promo").get();
    if (!doc.exists) return false;

    const { doublePointsOn, promoStartDate, promoStartTime, promoEndDate, promoEndTime } = doc.data();
    if (!doublePointsOn) return false;

    const now = new Date();

    if (promoStartDate) {
      const start = new Date(`${promoStartDate}T${promoStartTime || "00:00"}:00`);
      if (now < start) return false;
    }

    if (promoEndDate) {
      const end = new Date(`${promoEndDate}T${promoEndTime || "23:59"}:00`);
      if (now > end) return false;
    }

    return true;
  } catch {
    return false;
  }
}
