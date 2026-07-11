// Expedia Cancellation Import — matches canceled bookings against awarded points,
// allows retracting points for canceled bookings.
//
// POST { adminEmail, csvText }                         → { rows: [...] }  (parse + match)
// POST { adminEmail, action:"retract", dedupKey, uid, email, name, pts } → retracts points

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com", "rhemaleverett@protonmail.com"];

function isAuthorized(body) {
  const { adminEmail, secret } = body;
  if (ALLOWED_EMAILS.includes(adminEmail)) return true;
  if (secret && secret === process.env.EXPEDIA_IMPORT_SECRET) return true;
  return false;
}

export const dynamic = "force-dynamic";

// Simple CSV parser (handles quoted fields with commas)
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  return lines.map(line => {
    const fields = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === "," && !inQuotes) {
        fields.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    fields.push(current.trim());
    return fields;
  });
}

export async function POST(req) {
  const body = await req.json();
  const { adminEmail, action } = body;

  if (!isAuthorized(body)) {
    return Response.json({ error: "Not authorized" }, { status: 403 });
  }

  // ── PARSE + MATCH (no DB writes) ─────────────────────────────────────────
  if (!action || action === "parse") {
    const { csvText } = body;
    if (!csvText) return Response.json({ error: "csvText required" }, { status: 400 });

    const rows = parseCSV(csvText);
    const dataRows = rows.slice(1).filter(r => r.length >= 10 && r[0]);

    const results = [];

    for (const row of dataRows) {
      const bookedDate      = row[0] || "";
      const product         = row[1] || "";
      const destinationCity = row[2] || "";
      const tripStatus      = row[6] || "";
      const startDate       = row[8] || "";
      const endDate         = row[9] || "";
      const tripElement     = row[10] || "";
      const company         = row[11] || "";

      // Only process Lodging cancellations
      if (tripElement === "Air") continue;
      if (tripStatus !== "CANCELED") continue;

      const dedupKey = `${bookedDate}__${product}`;

      // Check if this booking was ever awarded points
      const importSnap = await adminDb.collection("expedia_imports")
        .where("dedupKey", "==", dedupKey)
        .limit(1).get();

      if (importSnap.empty) {
        // No points were awarded for this booking — nothing to retract
        results.push({
          dedupKey, bookedDate, product, destinationCity, startDate, endDate, company,
          awarded: false,
          alreadyRetracted: false,
          email: null, name: null, uid: null, pts: 0,
          importId: null,
        });
        continue;
      }

      const importDoc  = importSnap.docs[0];
      const importData = importDoc.data();

      // Check if already retracted
      const retractSnap = await adminDb.collection("expedia_cancellations")
        .where("dedupKey", "==", dedupKey)
        .limit(1).get();
      const alreadyRetracted = !retractSnap.empty;

      results.push({
        dedupKey,
        bookedDate,
        product,
        destinationCity,
        startDate,
        endDate,
        company,
        awarded: true,
        alreadyRetracted,
        email:    importData.email    || "",
        name:     importData.name     || "",
        uid:      importData.uid      || "",
        pts:      importData.pts      || 0,
        importId: importDoc.id,
      });
    }

    return Response.json({ ok: true, rows: results });
  }

  // ── RETRACT points for one canceled booking ───────────────────────────────
  if (action === "retract") {
    const { dedupKey, uid, email, name, pts, importId } = body;
    if (!dedupKey || !uid || !pts) {
      return Response.json({ error: "dedupKey, uid, and pts required" }, { status: 400 });
    }

    // Double-check not already retracted
    const retractSnap = await adminDb.collection("expedia_cancellations")
      .where("dedupKey", "==", dedupKey).limit(1).get();
    if (!retractSnap.empty) {
      return Response.json({ error: "Already retracted", alreadyRetracted: true }, { status: 409 });
    }

    // Deduct points — don't go below 0
    const userSnap = await adminDb.collection("users").doc(uid).get().catch(() => null);
    const userData = userSnap?.data() || {};

    // Retract from pending first, then redeemable
    const currentPending     = userData.pendingPoints  || 0;
    const currentRedeemable  = userData.points         || 0;
    const currentLifetime    = userData.lifetimePoints || 0;

    const retractFromPending    = Math.min(pts, currentPending);
    const retractFromRedeemable = Math.min(pts - retractFromPending, currentRedeemable);

    const pointsUpdate = {
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (retractFromPending > 0)    pointsUpdate.pendingPoints  = FieldValue.increment(-retractFromPending);
    if (retractFromRedeemable > 0) pointsUpdate.points         = FieldValue.increment(-retractFromRedeemable);
    // Also reduce lifetime by the amount actually retracted
    const totalRetracted = retractFromPending + retractFromRedeemable;
    if (totalRetracted > 0)        pointsUpdate.lifetimePoints = FieldValue.increment(-totalRetracted);

    await adminDb.collection("users").doc(uid).update(pointsUpdate).catch(() => {});

    // Log the retraction
    await adminDb.collection("expedia_cancellations").add({
      dedupKey,
      uid,
      email,
      name:          name || "",
      ptsRetracted:  totalRetracted,
      ptsRequested:  pts,
      importId:      importId || null,
      retractedAt:   FieldValue.serverTimestamp(),
      retractedBy:   body.adminEmail || "admin",
    });

    // Update the original import record to mark as canceled + grab Airtable record ID
    let airtableBookingsLogId = null;
    if (importId) {
      const importSnap = await adminDb.collection("expedia_imports").doc(importId).get().catch(() => null);
      airtableBookingsLogId = importSnap?.data()?.airtableBookingsLogId || null;
      await adminDb.collection("expedia_imports").doc(importId).update({
        canceled: true,
        canceledAt: FieldValue.serverTimestamp(),
      }).catch(() => {});
    }

    // Update Airtable Bookings Log status to Cancelled
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE    = process.env.AIRTABLE_BASE_ID;
    if (AIRTABLE_API_KEY && AIRTABLE_BASE && airtableBookingsLogId) {
      await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/Booking%20Logs/${airtableBookingsLogId}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type":  "application/json",
        },
        body: JSON.stringify({ fields: { "Status": "Cancelled" } }),
      }).catch(e => console.warn("[expedia-cancel] Airtable update error:", e));
    }

    // Get updated balance for response
    const updatedSnap = await adminDb.collection("users").doc(uid).get().catch(() => null);
    const newBalance  = updatedSnap?.data()?.points || 0;

    return Response.json({ ok: true, ptsRetracted: totalRetracted, newBalance });
  }

  return Response.json({ error: "Unknown action" }, { status: 400 });
}
