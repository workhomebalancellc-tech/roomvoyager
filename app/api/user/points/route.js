import { adminDb } from "../../../../lib/firebase-admin";

// GET /api/user/points?uid=xxx
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");
    if (!uid) return Response.json({ points: 0 });

    const snap = await adminDb.collection("users").doc(uid).get();
    if (snap.exists) {
      return Response.json({ points: snap.data().points || 0 });
    }
    return Response.json({ points: 0 });
  } catch (e) {
    console.error("user/points error:", e);
    return Response.json({ points: 0 });
  }
}
