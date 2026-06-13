// Expedia CSV Import — parses Expedia Creator bookings export,
// matches rows to hotel_clicks by destination + time window, returns candidates
//
// POST { adminEmail, csvText }          → { rows: [...] }  (parse + match, no DB write)
// POST { adminEmail, action:"award", row, uid, email, name } → awards points + creates booking
//
// CSV columns (Expedia Creator export):
//   0  Booked date
//   1  Booked product
//   2  Destination city
//   3  Brand
//   4  Affiliate link (link name)
//   5  Commission amount
//   6  Trip status
//   7  Payment status
//   8  Start date
//   9  End date
//   10 Trip element (Lodging / Air)
//   11 Company
//   12 Destination country
//   13 Travelers
//   14 Booking amount

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// Auth helpers — accepts either admin email OR the server automation secret
function isAuthorized(body) {
  const { adminEmail, secret } = body;
  if (ALLOWED_EMAILS.includes(adminEmail)) return true;
  if (secret && secret === process.env.EXPEDIA_IMPORT_SECRET) return true;
  return false;
}

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

// Points rate for hotels
const PTS_PER_DOLLAR = 5;

// How many hours before/after booking date to look for a matching click
const MATCH_WINDOW_HOURS = 72;

export const dynamic = "force-dynamic";

// ── Simple CSV parser (handles quoted fields with commas) ──────────────────────
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

  // ── AUTO-IMPORT (used by GitHub Actions cron — parses + awards best match) ─
  if (action === "auto-import") {
    const { csvText } = body;
    if (!csvText) return Response.json({ error: "csvText required" }, { status: 400 });

    const rows = parseCSV(csvText);
    const dataRows = rows.slice(1).filter(r => r.length >= 10 && r[0]);

    const clicksSnap = await adminDb.collection("hotel_clicks")
      .where("matched", "==", false).get();
    const clicks = clicksSnap.docs.map(d => ({ id: d.id, ...d.data() }));

    const awarded = [], skipped = [], alreadyDone = [];

    for (const row of dataRows) {
      const tripElement = row[10] || "";
      if (tripElement === "Air") continue;

      const bookedDate   = row[0] || "";
      const product      = row[1] || "";
      const destinationCity = row[2] || "";
      const commission   = parseFloat(row[5]) || 0;
      const tripStatus   = row[6] || "";
      const startDate    = row[8] || "";
      const endDate      = row[9] || "";
      const company      = row[11] || "";
      const country      = row[12] || "";
      const travelers    = parseInt(row[13]) || 1;
      const bookingAmount = parseFloat(row[14]) || 0;
      const dedupKey     = `${bookedDate}__${product}`;

      // Dedup check
      const existing = await adminDb.collection("expedia_imports")
        .where("dedupKey", "==", dedupKey).limit(1).get();
      if (!existing.empty) { alreadyDone.push(dedupKey); continue; }

      // Match clicks
      const bookedMs = new Date(bookedDate).getTime();
      const windowMs = MATCH_WINDOW_HOURS * 60 * 60 * 1000;
      const matches = clicks.filter(c => {
        const clickMs = c.clickedAt?.toMillis?.() || new Date(c.clickedAtISO || 0).getTime();
        if (Math.abs(bookedMs - clickMs) > windowMs) return false;
        const dest = destinationCity.toLowerCase();
        const cd   = (c.destination || "").toLowerCase();
        if (!dest || !cd) return true;
        return dest.includes(cd.split(",")[0]) || cd.includes(dest.split(",")[0]) ||
               dest.split(" ")[0] === cd.split(" ")[0];
      }).sort((a, b) => {
        // Prefer closer in time
        const ams = a.clickedAt?.toMillis?.() || new Date(a.clickedAtISO || 0).getTime();
        const bms = b.clickedAt?.toMillis?.() || new Date(b.clickedAtISO || 0).getTime();
        return Math.abs(bookedMs - ams) - Math.abs(bookedMs - bms);
      });

      if (matches.length === 0) {
        skipped.push({ dedupKey, product, destinationCity, reason: "no_match" });
        continue;
      }

      // Take best match
      const best = matches[0];
      const pts  = Math.round(bookingAmount * PTS_PER_DOLLAR);

      await adminDb.collection("users").doc(best.uid).update({
        points:         FieldValue.increment(pts),
        lifetimePoints: FieldValue.increment(pts),
        updatedAt:      FieldValue.serverTimestamp(),
      }).catch(() => {});

      const bookingRef = `EXP-${Date.now().toString(36).toUpperCase()}`;
      await adminDb.collection("bookings").add({
        uid: best.uid, email: best.email, product: "hotel",
        amount: bookingAmount, destination: destinationCity || product,
        startDate, endDate, reference: bookingRef,
        notes: `Expedia: ${product}${company ? ` · ${company}` : ""}`,
        status: tripStatus === "COMPLETED" ? "completed" : "upcoming",
        pts, rate: PTS_PER_DOLLAR, source: "expedia_auto_import",
        createdAt: FieldValue.serverTimestamp(),
      });

      await adminDb.collection("expedia_imports").add({
        dedupKey, uid: best.uid, email: best.email, name: best.name || "",
        bookedDate, product, destination: destinationCity,
        bookingAmount, commission, pts, matchConfidence: matches.length === 1 ? "high" : "medium",
        importedAt: FieldValue.serverTimestamp(),
      });

      await adminDb.collection("hotel_clicks").doc(best.id).update({
        matched: true, matchedAt: FieldValue.serverTimestamp(), matchedToBooking: bookingRef,
      }).catch(() => {});

      // Notify customer
      const siteUrl = process.env.NEXTAUTH_URL || "https://www.roomvoyagertravel.com";
      const userSnap = await adminDb.collection("users").doc(best.uid).get().catch(() => null);
      const newBalance = userSnap?.data()?.points || pts;
      await fetch(`${siteUrl}/api/booking-points-notify`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: best.email, name: best.name || "", product: "Hotel",
          amount: bookingAmount.toFixed(2), pts, cash: (pts / 1000).toFixed(2),
          newBalance, notes: product,
        }),
      }).catch(() => {});

      awarded.push({ dedupKey, product, destinationCity, uid: best.uid, email: best.email, pts });
    }

    return Response.json({ ok: true, awarded, skipped, alreadyDone });
  }

  // ── PARSE + MATCH (no DB writes) ──────────────────────────────────────────
  if (!action || action === "parse") {
    const { csvText } = body;
    if (!csvText) return Response.json({ error: "csvText required" }, { status: 400 });

    const rows = parseCSV(csvText);
    // Skip header row
    const dataRows = rows.slice(1).filter(r => r.length >= 10 && r[0]);

    // Load all unmatched hotel clicks from the last 90 days
    const since = new Date();
    since.setDate(since.getDate() - 90);
    const clicksSnap = await adminDb.collection("hotel_clicks")
      .where("matched", "==", false)
      .get();
    const clicks = clicksSnap.docs.map(d => ({ id: d.id, ...d.data() }));

    const results = [];

    for (const row of dataRows) {
      const bookedDate      = row[0] || "";
      const product         = row[1] || "";
      const destinationCity = row[2] || "";
      const brand           = row[3] || "";
      const affiliateLink   = row[4] || "";
      const commission      = parseFloat(row[5]) || 0;
      const tripStatus      = row[6] || "";
      const paymentStatus   = row[7] || "";
      const startDate       = row[8] || "";
      const endDate         = row[9] || "";
      const tripElement     = row[10] || "";
      const company         = row[11] || "";
      const country         = row[12] || "";
      const travelers       = parseInt(row[13]) || 1;
      const bookingAmount   = parseFloat(row[14]) || 0;

      // Skip flights (Air) — only process Lodging
      if (tripElement === "Air") continue;

      // Build a dedup key: bookedDate + product (so we don't re-import)
      const dedupKey = `${bookedDate}__${product}`;
      const existing = await adminDb.collection("expedia_imports")
        .where("dedupKey", "==", dedupKey)
        .limit(1).get();
      const alreadyImported = !existing.empty;

      // Find matching clicks within MATCH_WINDOW_HOURS of bookedDate
      const bookedMs = new Date(bookedDate).getTime();
      const windowMs = MATCH_WINDOW_HOURS * 60 * 60 * 1000;

      const matchingClicks = clicks.filter(c => {
        const clickMs = c.clickedAt?.toMillis?.() || new Date(c.clickedAtISO || 0).getTime();
        const timeDiff = Math.abs(bookedMs - clickMs);
        if (timeDiff > windowMs) return false;

        // Loose destination match — check if city appears in either
        const dest = destinationCity.toLowerCase();
        const clickDest = (c.destination || "").toLowerCase();
        if (!dest || !clickDest) return true; // no dest data, include anyway
        return dest.includes(clickDest.split(",")[0]) ||
               clickDest.includes(dest.split(",")[0]) ||
               dest.split(" ")[0] === clickDest.split(" ")[0];
      });

      const pts = Math.round(bookingAmount * PTS_PER_DOLLAR);

      results.push({
        bookedDate,
        product,
        destinationCity,
        brand,
        affiliateLink,
        commission,
        tripStatus,
        paymentStatus,
        startDate,
        endDate,
        company,
        country,
        travelers,
        bookingAmount,
        pts,
        dedupKey,
        alreadyImported,
        matchingClicks: matchingClicks.map(c => ({
          clickId: c.id,
          uid:     c.uid,
          email:   c.email,
          name:    c.name,
          destination: c.destination,
          clickedAt:   c.clickedAtISO || "",
        })),
      });
    }

    return Response.json({ ok: true, rows: results });
  }

  // ── AWARD points for one confirmed row ────────────────────────────────────
  if (action === "award") {
    const { row, uid, email, name, clickId } = body;
    if (!uid || !row) return Response.json({ error: "uid and row required" }, { status: 400 });

    // Double-check dedup
    const existing = await adminDb.collection("expedia_imports")
      .where("dedupKey", "==", row.dedupKey)
      .limit(1).get();
    if (!existing.empty) {
      return Response.json({ error: "Already imported", alreadyImported: true }, { status: 409 });
    }

    const pts = row.pts || Math.round((row.bookingAmount || 0) * PTS_PER_DOLLAR);

    // Award points to user
    await adminDb.collection("users").doc(uid).update({
      points:         FieldValue.increment(pts),
      lifetimePoints: FieldValue.increment(pts),
      updatedAt:      FieldValue.serverTimestamp(),
    }).catch(() => {});

    // Create booking record
    const bookingRef = `EXP-${Date.now().toString(36).toUpperCase()}`;
    await adminDb.collection("bookings").add({
      uid,
      email,
      product:     "hotel",
      amount:      row.bookingAmount || 0,
      destination: row.destinationCity || row.product || "",
      startDate:   row.startDate || "",
      endDate:     row.endDate   || "",
      reference:   bookingRef,
      notes:       `Expedia: ${row.product}${row.company ? ` · ${row.company}` : ""}`,
      status:      row.tripStatus === "COMPLETED" ? "completed" : "upcoming",
      pts,
      rate:        PTS_PER_DOLLAR,
      source:      "expedia_import",
      createdAt:   FieldValue.serverTimestamp(),
    });

    // Log the import
    await adminDb.collection("expedia_imports").add({
      dedupKey:    row.dedupKey,
      uid,
      email,
      name:        name || "",
      bookedDate:  row.bookedDate,
      product:     row.product,
      destination: row.destinationCity,
      bookingAmount: row.bookingAmount,
      commission:  row.commission,
      pts,
      importedAt:  FieldValue.serverTimestamp(),
    });

    // Mark the click as matched
    if (clickId) {
      await adminDb.collection("hotel_clicks").doc(clickId).update({
        matched: true,
        matchedAt: FieldValue.serverTimestamp(),
        matchedToBooking: bookingRef,
      }).catch(() => {});
    }

    // Email customer
    const siteUrl = process.env.NEXTAUTH_URL || "https://www.roomvoyagertravel.com";
    const userSnap = await adminDb.collection("users").doc(uid).get().catch(() => null);
    const newBalance = userSnap?.data()?.points || pts;

    await fetch(`${siteUrl}/api/booking-points-notify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name:    name || "",
        product: "Hotel",
        amount:  (row.bookingAmount || 0).toFixed(2),
        pts,
        cash:    (pts / 1000).toFixed(2),
        newBalance,
        notes:   row.product || "",
      }),
    }).catch(e => console.warn("Email notify error:", e));

    return Response.json({ ok: true, pts, bookingRef });
  }

  return Response.json({ error: "Unknown action" }, { status: 400 });
}
