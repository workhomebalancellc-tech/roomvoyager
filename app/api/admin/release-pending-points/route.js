/**
 * POST /api/admin/release-pending-points
 *
 * Called by GitHub Actions daily cron (or manually).
 * Finds all bookings with pointsStatus = 'pending' whose releaseDate
 * has passed (today >= releaseDate), then moves points from
 * pendingPoints → points on the user document.
 *
 * Auth: x-admin-secret header OR body.secret
 */

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

const IMPORT_SECRET = process.env.EXPEDIA_IMPORT_SECRET;

export async function POST(req) {
  // Auth
  const body   = await req.json().catch(() => ({}));
  const secret = body.secret || req.headers.get("x-admin-secret");
  if (!secret || secret !== IMPORT_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
  console.log(`→ Releasing pending points for bookings with releaseDate <= ${today}`);

  // Query all pending bookings whose release date has arrived
  const snap = await adminDb.collection("bookings")
    .where("pointsStatus", "==", "pending")
    .where("releaseDate",  "<=", today)
    .get();

  if (snap.empty) {
    console.log("→ No pending points to release today.");
    return Response.json({ ok: true, released: [], count: 0 });
  }

  console.log(`→ Found ${snap.docs.length} booking(s) to release`);

  const released = [];
  const errors   = [];

  for (const doc of snap.docs) {
    const booking = doc.data();
    const uid     = booking.uid;
    const pts     = booking.pendingPoints || booking.pts || 0;

    if (!uid || pts < 1) {
      errors.push({ id: doc.id, reason: "missing uid or pts" });
      continue;
    }

    try {
      await adminDb.runTransaction(async (tx) => {
        const userRef = adminDb.collection("users").doc(uid);
        const bookingRef = adminDb.collection("bookings").doc(doc.id);

        // Move points: pendingPoints → points
        tx.update(userRef, {
          points:        FieldValue.increment(pts),
          pendingPoints: FieldValue.increment(-pts),
          updatedAt:     FieldValue.serverTimestamp(),
        });

        // Mark booking as redeemable
        tx.update(bookingRef, {
          pointsStatus:  "redeemable",
          pendingPoints: 0,
          releasedAt:    FieldValue.serverTimestamp(),
        });
      });

      released.push({
        bookingId: doc.id,
        uid,
        email:     booking.email || "",
        pts,
        product:   booking.product || "unknown",
        releaseDate: booking.releaseDate,
      });
      console.log(`  ✅ Released ${pts} pts for ${booking.email} (${booking.product} · released ${booking.releaseDate})`);
    } catch (err) {
      console.error(`  ✗ Error releasing pts for ${doc.id}:`, err.message);
      errors.push({ id: doc.id, uid, error: err.message });
    }
  }

  // Optionally: notify users their points are now redeemable
  const siteUrl = process.env.NEXTAUTH_URL || "https://www.roomvoyagertravel.com";
  for (const r of released) {
    if (!r.email) continue;
    // Get updated balance for notification
    const userSnap = await adminDb.collection("users").doc(r.uid).get().catch(() => null);
    const balance  = userSnap?.data()?.points || r.pts;
    await fetch(`${siteUrl}/api/booking-points-notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:      r.email,
        name:       "",
        product:    r.product === "flight" ? "Flight" : "Hotel",
        amount:     "0",
        pts:        r.pts,
        cash:       (r.pts / 1000).toFixed(2),
        newBalance: balance,
        notes:      `Your ${r.pts.toLocaleString()} points are now redeemable! Your 45-day waiting period has ended. Visit roomvoyagertravel.com/rewards to redeem for cash.`,
        pending:    false,
      }),
    }).catch(() => {});
  }

  return Response.json({
    ok: true,
    today,
    count:    released.length,
    released,
    errors,
  });
}

// GET for easy manual trigger
export async function GET(req) {
  const secret = new URL(req.url).searchParams.get("secret");
  if (!secret || secret !== IMPORT_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return POST(new Request(req.url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify({ secret }),
  }));
}
