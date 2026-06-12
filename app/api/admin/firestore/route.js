import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req) {
  try {
    const body = await req.json();
    const { action } = body;

    // ── initUser: called on every login to ensure user doc exists ──────────
    if (action === "initUser") {
      const { uid, name, email } = body;
      if (!uid) return Response.json({ ok: true });
      const ref = adminDb.collection("users").doc(uid);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set({
          uid,
          name:           name  || "",
          email:          (email || "").toLowerCase(),
          points:         0,
          lifetimePoints: 0,
          createdAt:      FieldValue.serverTimestamp(),
          updatedAt:      FieldValue.serverTimestamp(),
        });
      }
      return Response.json({ ok: true });
    }

    // ── All other actions require email ────────────────────────────────────
    const normalizedEmail = (body.email || "").trim().toLowerCase();

    if (action === "lookup" || action === "create") {
      const snap = await adminDb.collection("users")
        .where("email", "==", normalizedEmail)
        .limit(1)
        .get();

      if (!snap.empty) {
        const d = snap.docs[0];
        return Response.json({ uid: d.id, name: d.data().name || "", email: d.data().email, points: d.data().points || 0 });
      }

      if (action === "lookup") {
        return Response.json({ error: "not_found" }, { status: 404 });
      }

      // Create new doc with admin-assigned ID
      const uid = "admin_" + normalizedEmail.replace(/[^a-z0-9]/g, "_");
      await adminDb.collection("users").doc(uid).set({
        uid,
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
      const pts = parseInt(body.amount, 10);
      if (isNaN(pts) || pts < 0) return Response.json({ error: "invalid_amount" }, { status: 400 });

      const snap = await adminDb.collection("users")
        .where("email", "==", normalizedEmail)
        .limit(1)
        .get();
      if (snap.empty) return Response.json({ error: "not_found" }, { status: 404 });

      const ref     = snap.docs[0].ref;
      const current = snap.docs[0].data().points || 0;

      if (action === "deductPoints" && current < pts) {
        return Response.json({ error: "insufficient_points" }, { status: 400 });
      }

      const update =
        action === "setPoints"    ? { points: pts,                        updatedAt: FieldValue.serverTimestamp() } :
        action === "addPoints"    ? { points: FieldValue.increment(pts),   lifetimePoints: FieldValue.increment(pts), updatedAt: FieldValue.serverTimestamp() } :
                                    { points: FieldValue.increment(-pts),  updatedAt: FieldValue.serverTimestamp() };

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
