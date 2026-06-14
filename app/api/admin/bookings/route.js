// Bookings API — admin creates bookings, customers read their own
// POST { action: "create", uid, email, product, amount, destination, startDate, endDate, reference, notes, status, double }
// GET  ?uid=USER_UID  → returns bookings array for that user

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { isPromoActive } from "../settings/route";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

const PTS_RATES = {
  cruise:  { std: 10, dbl: 20 },
  hotel:   { std: 5,  dbl: 10 },
  package: { std: 10, dbl: 20 },
  flight:  { std: 5,  dbl: null },
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid");
  if (!uid) return Response.json({ error: "uid required" }, { status: 400 });

  const snap = await adminDb.collection("bookings")
    .where("uid", "==", uid)
    .limit(50)
    .get();

  const bookings = snap.docs
    .map(d => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() }))
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  return Response.json({ bookings });
}

export async function POST(req) {
  const body = await req.json();
  const { action } = body;

  if (action === "create") {
    // Admin only
    const { adminEmail, uid, email, product, amount, destination, startDate, endDate, reference, notes, status, double: useDouble } = body;
    if (!ALLOWED_EMAILS.includes(adminEmail)) {
      return Response.json({ error: "Not authorized" }, { status: 403 });
    }

    const rates = PTS_RATES[product] || PTS_RATES.cruise;
    // promoActive overrides manual double flag — if promo is live, everyone gets double
    const promoActive = await isPromoActive();
    const applyDouble = promoActive || useDouble;
    const rate  = (applyDouble && rates.dbl) ? rates.dbl : rates.std;
    const pts   = Math.round((parseFloat(amount) || 0) * rate);
    const bookingRef = `RV-${Date.now().toString(36).toUpperCase()}`;

    const doc = {
      uid, email, product, amount: parseFloat(amount) || 0,
      destination: destination || "",
      startDate:   startDate   || "",
      endDate:     endDate     || "",
      reference:   reference   || bookingRef,
      notes:       notes       || "",
      status:      status      || "upcoming",
      double:      applyDouble || false,
      promoApplied: promoActive || false,
      pts, rate,
      source:      "admin",
      createdAt:   FieldValue.serverTimestamp(),
    };

    const docRef = await adminDb.collection("bookings").add(doc);

    // Award points to user
    await adminDb.collection("users").doc(uid).update({
      points:         FieldValue.increment(pts),
      lifetimePoints: FieldValue.increment(pts),
      updatedAt:      FieldValue.serverTimestamp(),
    }).catch(() => {}); // silent if user doc missing

    // Email customer
    const newBalanceSnap = await adminDb.collection("users").doc(uid).get().catch(() => null);
    const newBalance = newBalanceSnap?.data()?.points || pts;
    const siteUrl = process.env.NEXTAUTH_URL || "https://www.roomvoyagertravel.com";
    await fetch(`${siteUrl}/api/booking-points-notify`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:      email,
        name:       "",
        product:    product.charAt(0).toUpperCase() + product.slice(1),
        amount:     (parseFloat(amount) || 0).toFixed(2),
        pts,
        cash:       (pts / 1000).toFixed(2),
        newBalance,
        notes:      notes || "",
      }),
    }).catch(e => console.warn("Email notify error:", e));

    // Auto-award referral bonus on first booking if applicable
    const siteUrl2 = process.env.NEXTAUTH_URL || "https://www.roomvoyagertravel.com";
    fetch(`${siteUrl2}/api/admin/firestore`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "awardReferralBonus", uid, product }),
    }).catch(() => {});

    return Response.json({ ok: true, id: docRef.id, reference: doc.reference, pts });
  }

  if (action === "review_request") {
    const { uid, email, name, message, product, dateBooked, destination, nights, amount, reference, comment } = body;

    // 1. Email admin via EmailJS
    const EMAILJS_SERVICE  = process.env.EMAILJS_SERVICE_ID  || "service_roomvoyager";
    const EMAILJS_TEMPLATE = process.env.EMAILJS_TEMPLATE_ID || "template_contact";
    const EMAILJS_KEY      = process.env.EMAILJS_PUBLIC_KEY  || "";

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id:  EMAILJS_SERVICE,
        template_id: EMAILJS_TEMPLATE,
        user_id:     EMAILJS_KEY,
        template_params: {
          to_email:    "workhomebalancellc@gmail.com",
          from_name:   name || email,
          from_email:  email,
          subject:     "📋 Booking Review Request",
          message:     `Customer ${name || email} (UID: ${uid}) submitted a booking review request.\n\n${message || "No details provided."}\n\nReview their account in the admin panel.`,
        },
      }),
    }).catch(e => console.warn("EmailJS error:", e));

    // 2. Log to Airtable — "Booking Review Requests" table
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE  = process.env.AIRTABLE_BASE_ID;
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE) {
      console.warn("Airtable env vars missing — skipping Booking Review Requests log");
    } else {
      const fields = {
        "Name":           name || email,
        "Email":          email,
        "User UID":       uid  || "",
        "Product Type":   product     || "",
        "Destination":    destination || "",
        "Confirmation #": reference   || "",
        "Comments":       comment     || "",
        "Status":         "Pending",
        // Date fields must be YYYY-MM-DD for Airtable
        "Submitted At":   new Date().toISOString().split("T")[0],
      };
      // Only include date if it looks like YYYY-MM-DD (from date input)
      if (dateBooked) fields["Date Booked"] = dateBooked;
      // Only include numbers if they have values — Airtable rejects empty number fields
      if (nights)     fields["Nights"]         = Number(nights);
      if (amount)     fields["Approx. Amount"] = Number(amount);

      try {
        const atRes = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE}/Booking%20Review%20Requests`,
          {
            method:  "POST",
            headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}`, "Content-Type": "application/json" },
            body: JSON.stringify({ fields }),
          }
        );
        if (!atRes.ok) {
          const errText = await atRes.text();
          console.error("Airtable Booking Review error:", atRes.status, errText);
        }
      } catch (e) {
        console.error("Airtable fetch failed:", e);
      }
    }

    return Response.json({ ok: true });
  }

  if (action === "cancel") {
    // Admin cancels a booking — marks it cancelled and deducts points
    const { adminEmail, bookingId } = body;
    if (!ALLOWED_EMAILS.includes(adminEmail)) {
      return Response.json({ error: "Not authorized" }, { status: 403 });
    }
    if (!bookingId) return Response.json({ error: "bookingId required" }, { status: 400 });

    const bookingSnap = await adminDb.collection("bookings").doc(bookingId).get();
    if (!bookingSnap.exists) return Response.json({ error: "Booking not found" }, { status: 404 });

    const bData = bookingSnap.data();
    // Don't double-cancel
    if (bData.status === "cancelled") return Response.json({ ok: true, alreadyCancelled: true });

    // Mark booking cancelled
    await adminDb.collection("bookings").doc(bookingId).update({
      status: "cancelled",
      cancelledAt: FieldValue.serverTimestamp(),
    });

    // Deduct points if they were awarded
    const ptsToDeduct = bData.pts || 0;
    if (ptsToDeduct > 0 && bData.uid) {
      await adminDb.collection("users").doc(bData.uid).update({
        points: FieldValue.increment(-ptsToDeduct),
        updatedAt: FieldValue.serverTimestamp(),
      }).catch(() => {});
    }

    return Response.json({ ok: true, ptsDeducted: ptsToDeduct });
  }

  if (action === "delete") {
    const { adminEmail, bookingId } = body;
    if (!ALLOWED_EMAILS.includes(adminEmail)) {
      return Response.json({ error: "Not authorized" }, { status: 403 });
    }
    if (!bookingId) return Response.json({ error: "bookingId required" }, { status: 400 });
    await adminDb.collection("bookings").doc(bookingId).delete();
    return Response.json({ ok: true });
  }

  return Response.json({ error: "Unknown action" }, { status: 400 });
}
