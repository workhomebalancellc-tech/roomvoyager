/**
 * Fix Points Status — POST /api/admin/fix-points-status
 *
 * Scans every booking in Firestore and corrects any that are in the
 * wrong points bucket:
 *   - If releaseDate is in the future  → should be pending
 *   - If releaseDate is today or past  → should be redeemable
 *
 * For each mismatch it:
 *   1. Moves pts on the user doc (pendingPoints ↔ points)
 *   2. Updates booking's pointsStatus
 *
 * Auth: adminEmail in ALLOWED_EMAILS OR x-admin-secret header
 */

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

const IMPORT_SECRET  = process.env.EXPEDIA_IMPORT_SECRET;
const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

function isAuthorized(body, headers) {
  if (body.adminEmail && ALLOWED_EMAILS.includes(body.adminEmail)) return true;
  const secret = body.secret || headers?.get?.("x-admin-secret");
  return !!(secret && secret === IMPORT_SECRET);
}

function isPending(releaseDateStr) {
  if (!releaseDateStr) return false;
  return new Date(releaseDateStr + "T00:00:00Z") > new Date();
}

function getReleaseDate(endDateStr) {
  if (!endDateStr || endDateStr === "no-return" || endDateStr === "anytime") return null;
  const d = new Date(endDateStr + (endDateStr.includes("T") ? "" : "T12:00:00Z"));
  if (isNaN(d)) return null;
  d.setDate(d.getDate() + 45);
  return d.toISOString().split("T")[0];
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  if (!isAuthorized(body, req.headers)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dryRun = body.dryRun === true; // pass dryRun: true to preview without changing anything
  const snap   = await adminDb.collection("bookings").get();

  const fixed   = [];
  const skipped = [];

  for (const doc of snap.docs) {
    const b = doc.data();
    const pts = b.pts || b.points || 0;
    if (!pts || !b.uid) { skipped.push({ id: doc.id, reason: "no pts or uid" }); continue; }

    // Skip cancelled bookings — their points have already been removed
    if (b.status === "cancelled" || b.pointsStatus === "cancelled") {
      skipped.push({ id: doc.id, reason: "cancelled", destination: b.destination });
      continue;
    }

    // Determine what the release date should be
    const endDate    = b.endDate || b.returnDate || b.checkOut || "";
    const releaseDate = b.releaseDate || getReleaseDate(endDate);
    const shouldBePending    = isPending(releaseDate);
    const currentlyPending   = b.pointsStatus === "pending";
    const currentlyRedeemable = b.pointsStatus === "redeemable";

    // Already correct
    if (shouldBePending && currentlyPending)    { skipped.push({ id: doc.id, reason: "already_pending",    destination: b.destination }); continue; }
    if (!shouldBePending && currentlyRedeemable) { skipped.push({ id: doc.id, reason: "already_redeemable", destination: b.destination }); continue; }

    const action = shouldBePending ? "redeemable→pending" : "pending→redeemable";

    if (!dryRun) {
      const userRef = adminDb.collection("users").doc(b.uid);
      await adminDb.runTransaction(async (tx) => {
        if (shouldBePending) {
          // Move from redeemable → pending
          tx.update(userRef, {
            points:        FieldValue.increment(-pts),
            pendingPoints: FieldValue.increment(pts),
          });
        } else {
          // Move from pending → redeemable
          tx.update(userRef, {
            points:        FieldValue.increment(pts),
            pendingPoints: FieldValue.increment(-pts),
          });
        }
        tx.update(doc.ref, {
          pointsStatus: shouldBePending ? "pending" : "redeemable",
          releaseDate:  releaseDate || "",
        });
      });
    }

    fixed.push({
      id:          doc.id,
      destination: b.destination || b.reason || "unknown",
      uid:         b.uid,
      pts,
      action,
      releaseDate: releaseDate || "none",
    });
  }

  return Response.json({ ok: true, dryRun, fixed, skipped: skipped.length, total: snap.size });
}
