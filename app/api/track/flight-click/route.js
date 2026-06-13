import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const { uid, email, name, from, to, fromKiwi, toKiwi, depart, ret, pax } = await req.json();
  if (!uid) return Response.json({ error: "uid required" }, { status: 400 });

  await adminDb.collection("flight_clicks").add({
    uid,
    email:    email    || "",
    name:     name     || "",
    from:     from     || "",
    to:       to       || "",
    fromKiwi: fromKiwi || "",
    toKiwi:   toKiwi   || "",
    depart:   depart   || "",
    ret:      ret      || "",
    pax:      pax      || 1,
    clickedAt:    FieldValue.serverTimestamp(),
    clickedAtISO: new Date().toISOString(),
    matched: false,
  });

  return Response.json({ ok: true });
}
