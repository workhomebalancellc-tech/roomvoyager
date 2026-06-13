import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req) {
  try {
    const { uid, name } = await req.json();
    if (!uid || !name?.trim()) {
      return Response.json({ error: "uid and name required" }, { status: 400 });
    }
    await adminDb.collection("users").doc(uid).update({
      name:      name.trim(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    return Response.json({ ok: true });
  } catch (e) {
    console.error("user/profile error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
