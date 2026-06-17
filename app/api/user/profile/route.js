import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req) {
  try {
    const body = await req.json();
    const { uid, name, birthday } = body;
    if (!uid) return Response.json({ error: "uid required" }, { status: 400 });

    const updates = { updatedAt: FieldValue.serverTimestamp() };
    if (name?.trim()) updates.name = name.trim();
    if (birthday !== undefined) updates.birthday = birthday;

    if (Object.keys(updates).length === 1) {
      return Response.json({ error: "nothing to update" }, { status: 400 });
    }

    await adminDb.collection("users").doc(uid).update(updates);
    return Response.json({ ok: true });
  } catch (e) {
    console.error("user/profile error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
