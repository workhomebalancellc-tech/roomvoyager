/**
 * Newsletter Subscriber Opt-In
 * POST /api/subscribe
 * Body: { email, name? }
 * Stores to Firestore `subscribers` collection, deduplicates by email.
 */

import { adminDb } from "../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const email = (body.email || "").trim().toLowerCase();
  const name  = (body.name  || "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Valid email required" }, { status: 400 });
  }

  // Use email as doc ID so re-subscribing is idempotent
  const docId  = email.replace(/[.#$/\[\]]/g, "_");
  const docRef = adminDb.collection("subscribers").doc(docId);
  const existing = await docRef.get();

  if (existing.exists) {
    return Response.json({ ok: true, alreadySubscribed: true });
  }

  await docRef.set({
    email,
    name: name || "",
    source: body.source || "website",
    subscribedAt: FieldValue.serverTimestamp(),
    active: true,
  });

  return Response.json({ ok: true, alreadySubscribed: false });
}
