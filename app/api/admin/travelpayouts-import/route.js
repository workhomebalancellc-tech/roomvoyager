/**
 * Travelpayouts → RoomVoyager Flight Booking Import
 *
 * Called by the GitHub Actions daily cron (or manually from admin).
 * Fetches yesterday's confirmed flight bookings from the Travelpayouts
 * Statistics API, matches each booking to a flight_click in Firestore,
 * and awards 5 pts per $1 in commission to the matched user.
 *
 * Auth: POST with JSON body { secret: EXPEDIA_IMPORT_SECRET }
 *       OR via X-Admin-Secret header (same value)
 */

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { isPromoActiveAt } from "../settings/route";

export const dynamic = "force-dynamic";

const IMPORT_SECRET  = process.env.EXPEDIA_IMPORT_SECRET; // reuse same secret
const TP_TOKEN       = process.env.TRAVELPAYOUTS_TOKEN;
const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

function isAuthorized(body, headers) {
  if (body.adminEmail && ALLOWED_EMAILS.includes(body.adminEmail)) return true;
  const secret = body.secret || headers?.get?.("x-admin-secret");
  return !!(secret && secret === IMPORT_SECRET);
}

const PTS_PER_DOLLAR = 5;

// ── Points release helpers ────────────────────────────────────────────────────
function getReleaseDate(endDateStr) {
  if (!endDateStr || endDateStr === "no-return" || endDateStr === "anytime") return null;
  const d = new Date(endDateStr + (endDateStr.includes("T") ? "" : "T12:00:00Z"));
  if (isNaN(d)) return null;
  d.setDate(d.getDate() + 45);
  return d.toISOString().split("T")[0];
}
function isPending(releaseDateStr) {
  if (!releaseDateStr) return true;
  return new Date(releaseDateStr + "T00:00:00Z") > new Date();
}

// ── Travelpayouts Statistics API ────────────────────────────────────────────

async function fetchTPBookings(dateFrom, dateTo) {
  // Finance endpoint — returns individual bookings with commission amounts
  const finUrl = new URL("https://api.travelpayouts.com/finance/v2/get_user_actions_affecting_balance");
  finUrl.searchParams.set("date_from", dateFrom);
  finUrl.searchParams.set("date_to",   dateTo);
  finUrl.searchParams.set("page",      "0");
  finUrl.searchParams.set("limit",     "200");

  const finRes = await fetch(finUrl.toString(), {
    headers: { "X-Access-Token": TP_TOKEN },
  });

  if (!finRes.ok) {
    const txt = await finRes.text();
    throw new Error(`TP finance API ${finRes.status}: ${txt}`);
  }

  const finData = await finRes.json();
  console.log("TP finance response:", JSON.stringify(finData).slice(0, 600));

  return { statsData: null, finData };
}

// ── Match a TP booking to a Firestore flight_click ──────────────────────────

async function matchFlightClick(booking) {
  // A TP booking has limited info — primarily date and commission amount.
  // We match on: booking date falls within 24 hrs of a flight_click,
  // and the click hasn't already been matched.
  // If multiple unmatched clicks exist, pick the most recent.

  const bookingDate = new Date(booking.date || booking.created_at);
  const windowStart = new Date(bookingDate);
  windowStart.setDate(windowStart.getDate() - 1); // click could be 1 day before
  const windowEnd   = new Date(bookingDate);
  windowEnd.setDate(windowEnd.getDate() + 1);     // or same day

  const snap = await adminDb.collection("flight_clicks")
    .where("matched", "==", false)
    .where("clickedAtISO", ">=", windowStart.toISOString())
    .where("clickedAtISO", "<=", windowEnd.toISOString())
    .orderBy("clickedAtISO", "desc")
    .limit(1)
    .get();

  if (snap.empty) return null;
  return { id: snap.docs[0].id, ...snap.docs[0].data() };
}

// ── Award points to a user ───────────────────────────────────────────────────

async function awardPoints(uid, pts, reason, bookingRef, returnDate, isDouble = false, rate = PTS_PER_DOLLAR) {
  const releaseDate = getReleaseDate(returnDate);
  const pending     = isPending(releaseDate);
  const userRef     = adminDb.collection("users").doc(uid);

  await adminDb.runTransaction(async (tx) => {
    const userDoc = await tx.get(userRef);
    if (userDoc.exists) {
      if (pending) {
        tx.update(userRef, {
          pendingPoints:  FieldValue.increment(pts),
          lifetimePoints: FieldValue.increment(pts),
        });
      } else {
        tx.update(userRef, {
          points:         FieldValue.increment(pts),
          lifetimePoints: FieldValue.increment(pts),
        });
      }
    } else {
      tx.set(userRef, pending
        ? { pendingPoints: pts, lifetimePoints: pts, points: 0 }
        : { points: pts, lifetimePoints: pts, pendingPoints: 0 }
      );
    }
    tx.set(adminDb.collection("bookings").doc(), {
      uid,
      source:       "travelpayouts",
      product:      "flight",
      pts,
      points:       pts,
      rate,
      double:       isDouble,
      reason,
      bookingRef,
      returnDate:   returnDate || "",
      pointsStatus: pending ? "pending" : "redeemable",
      pendingPoints: pending ? pts : 0,
      releaseDate:  releaseDate || "",
      awardedAt:    FieldValue.serverTimestamp(),
    });
  });
}

// ── Main handler ─────────────────────────────────────────────────────────────

export async function POST(req) {
  // Auth check
  const body = await req.json().catch(() => ({}));
  if (!isAuthorized(body, req.headers)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!TP_TOKEN) {
    return Response.json({ error: "TRAVELPAYOUTS_TOKEN not configured" }, { status: 500 });
  }

  // Date range: yesterday by default, or override via body
  const today     = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const fmt = (d) => d.toISOString().split("T")[0];

  const dateFrom = body.dateFrom || fmt(yesterday);
  const dateTo   = body.dateTo   || fmt(today);

  console.log(`→ Fetching TP bookings ${dateFrom} → ${dateTo}`);

  let statsData, finData;
  try {
    ({ statsData, finData } = await fetchTPBookings(dateFrom, dateTo));
  } catch (err) {
    return Response.json({ error: err.message }, { status: 502 });
  }

  // Build a list of bookings from whichever endpoint has usable data
  const bookings = [];

  // Try finance endpoint first (has commission amounts per booking)
  if (finData?.data && Array.isArray(finData.data)) {
    for (const item of finData.data) {
      const commissionUSD = parseFloat(item.amount_usd || item.commission || 0);
      if (commissionUSD <= 0) continue;
      bookings.push({
        date:          item.date || item.created_at,
        commissionUSD,
        currency:      item.currency || "USD",
        ref:           item.id || item.marker || "unknown",
        source:        "finance",
      });
    }
  }

  // Fall back to stats if finance had nothing
  if (bookings.length === 0 && statsData?.data && Array.isArray(statsData.data)) {
    for (const row of statsData.data) {
      const sales = parseInt(row.sales || row.confirmed || 0, 10);
      if (sales <= 0) continue;
      // stats are aggregated — create one synthetic entry per sale
      const commissionUSD = parseFloat(row.profit || row.revenue || 0) / (sales || 1);
      for (let i = 0; i < sales; i++) {
        bookings.push({
          date:          row.date,
          commissionUSD,
          currency:      "USD",
          ref:           `stats-${row.date}-${i}`,
          source:        "stats",
        });
      }
    }
  }

  console.log(`→ Found ${bookings.length} bookings to process`);

  const awarded  = [];
  const skipped  = [];

  for (const booking of bookings) {
    // Check if already imported
    const alreadySnap = await adminDb.collection("bookings")
      .where("bookingRef", "==", booking.ref)
      .where("source", "==", "travelpayouts")
      .limit(1)
      .get();
    if (!alreadySnap.empty) {
      skipped.push({ ref: booking.ref, reason: "already_imported" });
      continue;
    }

    const click = await matchFlightClick(booking);
    if (!click) {
      skipped.push({ ref: booking.ref, reason: "no_matching_click", date: booking.date });
      console.log(`  ⚠ No matching click for booking ${booking.ref} (${booking.date})`);
      continue;
    }

    const isDouble = await isPromoActiveAt(new Date(booking.date));
    const rate     = isDouble ? PTS_PER_DOLLAR * 2 : PTS_PER_DOLLAR;
    const pts      = Math.round(booking.commissionUSD * rate);
    if (pts < 1) {
      skipped.push({ ref: booking.ref, reason: "commission_too_small", commissionUSD: booking.commissionUSD });
      continue;
    }

    try {
      await awardPoints(
        click.uid,
        pts,
        `Flight ${click.from || "?"} → ${click.to || "?"} via Kiwi.com`,
        booking.ref,
        click.ret,  // return date from flight_click (e.g. "2026-07-15" or "no-return")
        isDouble,
        rate
      );

      // Mark the click as matched
      await adminDb.collection("flight_clicks").doc(click.id).update({
        matched:       true,
        matchedBooking: booking.ref,
        matchedAt:     FieldValue.serverTimestamp(),
      });

      // Email customer
      const siteUrl    = process.env.NEXTAUTH_URL || "https://www.roomvoyagertravel.com";
      const userSnap   = await adminDb.collection("users").doc(click.uid).get().catch(() => null);
      const newBalance = userSnap?.data()?.points || pts;
      await fetch(`${siteUrl}/api/booking-points-notify`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email:      click.email,
          name:       click.name || "",
          product:    "Flight",
          amount:     booking.commissionUSD.toFixed(2),
          pts,
          cash:       (pts / 1000).toFixed(2),
          newBalance,
          notes:      `${click.from || "?"} → ${click.to || "?"} via Kiwi.com`,
        }),
      }).catch(e => console.warn("Email notify error:", e));

      awarded.push({
        uid:    click.uid,
        email:  click.email,
        name:   click.name,
        from:   click.from,
        to:     click.to,
        pts,
        rate,
        double: isDouble,
        commissionUSD: booking.commissionUSD,
        ref:    booking.ref,
      });
      console.log(`  ✅ Awarded ${pts} pts to ${click.email} (${click.from} → ${click.to})`);
    } catch (err) {
      console.error(`  ✗ Error awarding points for ${booking.ref}:`, err.message);
      skipped.push({ ref: booking.ref, reason: "error", error: err.message });
    }
  }

  return Response.json({
    ok: true,
    dateRange:       { from: dateFrom, to: dateTo },
    bookingsFound:   bookings.length,
    awarded,
    skipped,
  });
}

// ── GET: manual trigger from admin panel ────────────────────────────────────

export async function GET(req) {
  const secret = new URL(req.url).searchParams.get("secret");
  if (!isAuthorized({ secret }, req.headers)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  // Forward to POST handler
  const fakeReq = new Request(req.url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-secret": secret },
    body: JSON.stringify({ secret }),
  });
  return POST(fakeReq);
}
