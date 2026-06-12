import { adminDb } from "../../../../lib/firebase-admin";

// GET /api/user/points?uid=xxx
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");
    if (!uid) return Response.json({ points: 0 });

    const snap = await adminDb.collection("users").doc(uid).get();
    if (snap.exists) {
      const data = snap.data();
      return Response.json({
        points:         data.points         || 0,
        lifetimePoints: data.lifetimePoints || 0,
      });
    }
    return Response.json({ points: 0, lifetimePoints: 0 });
  } catch (e) {
    console.error("user/points error:", e);
    return Response.json({ points: 0 });
  }
}
