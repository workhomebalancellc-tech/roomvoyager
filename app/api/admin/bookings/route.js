// Bookings API — admin creates bookings, customers read their own
// POST { action: "create", uid, email, product, amount, destination, startDate, endDate, reference, notes, status, double }
// GET  ?uid=USER_UID  → returns bookings array for that user

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

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
    .orderBy("createdAt", "desc")
    .limit(50)
    .get();

  const bookings = snap.docs.map(d => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() }));
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
    const rate  = (useDouble && rates.dbl) ? rates.dbl : rates.std;
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
      double:      useDouble   || false,
      pts, rate,
      source:      "admin",
      createdAt:   FieldValue.serverTimestamp(),
    };

    const docRef = await adminDb.collection("bookings").add(doc);
    return Response.json({ ok: true, id: docRef.id, reference: doc.reference, pts });
  }

  if (action === "review_request") {
    // Customer requests booking review — notify admin via EmailJS
    const { uid, email, name, message } = body;
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
          message:     `Customer ${name || email} (${uid}) has requested a review of their booking points.\n\nMessage: ${message || "No message provided."}\n\nPlease review their account in the admin panel.`,
        },
      }),
    }).catch(e => console.warn("EmailJS error:", e));

    return Response.json({ ok: true });
  }

  return Response.json({ error: "Unknown action" }, { status: 400 });
}
