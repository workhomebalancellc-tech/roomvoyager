import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// POST /api/admin/firestore
// body: { action: "lookup" | "create" | "setPoints" | "addPoints" | "deductPoints", email, amount }
export async function POST(req) {
  try {
    const { action, email, amount } = await req.json();
    const normalizedEmail = email?.trim().toLowerCase();

    if (action === "lookup" || action === "create") {
      // Find existing user doc by email
      const snap = await adminDb.collection("users")
        .where("email", "==", normalizedEmail)
        .limit(1)
        .get();

      if (!snap.empty) {
        const d = snap.docs[0];
        return Response.json({ uid: d.id, ...d.data(), points: d.data().points || 0 });
      }

      if (action === "lookup") {
        return Response.json({ error: "not_found" }, { status: 404 });
      }

      // Create new doc
      const uid = "admin_" + normalizedEmail.replace(/[^a-z0-9]/g, "_");
      await adminDb.collection("users").doc(uid).set({
        email:          normalizedEmail,
        name:           "",
        points:         0,
        lifetimePoints: 0,
        createdAt:      FieldValue.serverTimestamp(),
        updatedAt:      FieldValue.serverTimestamp(),
        source:         "admin_created",
      });
      return Response.json({ uid, email: normalizedEmail, points: 0, name: "" });
    }

    if (action === "setPoints" || action === "addPoints" || action === "deductPoints") {
      const pts = parseInt(amount, 10);
      if (isNaN(pts) || pts < 0) return Response.json({ error: "invalid_amount" }, { status: 400 });

      const snap = await adminDb.collection("users")
        .where("email", "==", normalizedEmail)
        .limit(1)
        .get();
      if (snap.empty) return Response.json({ error: "not_found" }, { status: 404 });

      const ref = snap.docs[0].ref;
      const current = snap.docs[0].data().points || 0;

      if (action === "deductPoints" && current < pts) {
        return Response.json({ error: "insufficient_points" }, { status: 400 });
      }

      const update =
        action === "setPoints"   ? { points: pts,                    updatedAt: FieldValue.serverTimestamp() } :
        action === "addPoints"   ? { points: FieldValue.increment(pts),  lifetimePoints: FieldValue.increment(pts), updatedAt: FieldValue.serverTimestamp() } :
                                   { points: FieldValue.increment(-pts), updatedAt: FieldValue.serverTimestamp() };

      await ref.update(update);
      const updated = (await ref.get()).data().points || 0;
      return Response.json({ uid: snap.docs[0].id, email: normalizedEmail, points: updated });
    }

    return Response.json({ error: "unknown_action" }, { status: 400 });
  } catch (e) {
    console.error("admin/firestore error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
