import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

// Referral bonus points by product type
const REFERRAL_PTS = { flight: 200, hotel: 350, cruise: 500, package: 500 };

function generateReferralCode(name) {
  const prefix = (name || "USER").replace(/[^a-zA-Z]/g, "").slice(0, 5).toUpperCase() || "USER";
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}${num}`;
}

async function ensureUniqueCode(name) {
  let code, exists;
  let attempts = 0;
  do {
    code = generateReferralCode(name);
    const snap = await adminDb.collection("referralCodes").doc(code).get();
    exists = snap.exists;
    attempts++;
  } while (exists && attempts < 10);
  return code;
}

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
        const code = await ensureUniqueCode(name);
        await ref.set({
          uid,
          name:           name  || "",
          email:          (email || "").toLowerCase(),
          points:         0,
          lifetimePoints: 0,
          referralCode:   code,
          referredBy:     null,
          referralBonusAwarded: false,
          createdAt:      FieldValue.serverTimestamp(),
          updatedAt:      FieldValue.serverTimestamp(),
        });
        // Register code for reverse lookup
        await adminDb.collection("referralCodes").doc(code).set({ uid, createdAt: FieldValue.serverTimestamp() });
      } else if (!snap.data().referralCode) {
        // Backfill code for existing users who don't have one
        const code = await ensureUniqueCode(snap.data().name || name);
        await ref.update({ referralCode: code, updatedAt: FieldValue.serverTimestamp() });
        await adminDb.collection("referralCodes").doc(code).set({ uid, createdAt: FieldValue.serverTimestamp() });
      }
      const latest = (await ref.get()).data();
      return Response.json({ ok: true, referralCode: latest.referralCode });
    }

    // ── lookupReferralCode: given a code, return the owner uid ─────────────
    if (action === "lookupReferralCode") {
      const { code } = body;
      if (!code) return Response.json({ error: "code required" }, { status: 400 });
      const snap = await adminDb.collection("referralCodes").doc(code.trim().toUpperCase()).get();
      if (!snap.exists) return Response.json({ error: "invalid_code" }, { status: 404 });
      return Response.json({ ok: true, referrerUid: snap.data().uid });
    }

    // ── saveReferral: store referredBy on a newly signed-up user ───────────
    if (action === "saveReferral") {
      const { uid, referralCode } = body;
      if (!uid || !referralCode) return Response.json({ error: "uid and referralCode required" }, { status: 400 });
      const codeSnap = await adminDb.collection("referralCodes").doc(referralCode.trim().toUpperCase()).get();
      if (!codeSnap.exists) return Response.json({ error: "invalid_code" }, { status: 404 });
      const referrerUid = codeSnap.data().uid;
      if (referrerUid === uid) return Response.json({ error: "cannot_refer_self" }, { status: 400 });
      const userRef = adminDb.collection("users").doc(uid);
      const userSnap = await userRef.get();
      if (userSnap.exists && userSnap.data().referredBy) {
        return Response.json({ ok: true, already: true }); // already referred, skip
      }
      await userRef.update({ referredBy: referrerUid, referralBonusAwarded: false, updatedAt: FieldValue.serverTimestamp() });
      return Response.json({ ok: true, referrerUid });
    }

    // ── awardReferralBonus: fire when referred user's first booking is added ─
    if (action === "awardReferralBonus") {
      const { uid, product } = body;
      if (!uid) return Response.json({ error: "uid required" }, { status: 400 });
      const userRef  = adminDb.collection("users").doc(uid);
      const userSnap = await userRef.get();
      if (!userSnap.exists) return Response.json({ ok: false, reason: "user_not_found" });
      const userData = userSnap.data();
      if (!userData.referredBy || userData.referralBonusAwarded) {
        return Response.json({ ok: false, reason: "no_referral_or_already_awarded" });
      }
      const pts = REFERRAL_PTS[product] || REFERRAL_PTS.hotel;
      const batch = adminDb.batch();
      // Award referred user
      batch.update(userRef, { points: FieldValue.increment(pts), lifetimePoints: FieldValue.increment(pts), referralBonusAwarded: true, updatedAt: FieldValue.serverTimestamp() });
      // Award referrer
      const referrerRef = adminDb.collection("users").doc(userData.referredBy);
      batch.update(referrerRef, { points: FieldValue.increment(pts), lifetimePoints: FieldValue.increment(pts), updatedAt: FieldValue.serverTimestamp() });
      // Log it
      const logRef = adminDb.collection("referralBonuses").doc();
      batch.set(logRef, { referredUid: uid, referrerUid: userData.referredBy, product, pts, awardedAt: FieldValue.serverTimestamp() });
      await batch.commit();
      return Response.json({ ok: true, pts, referrerUid: userData.referredBy });
    }

    // ── listReferrals: admin panel — show all referral relationships ────────
    if (action === "listReferrals") {
      const snap = await adminDb.collection("referralBonuses").orderBy("awardedAt", "desc").limit(50).get();
      const bonuses = snap.docs.map(d => ({ id: d.id, ...d.data(), awardedAt: d.data().awardedAt?.toDate?.()?.toISOString() }));
      // Also get pending referrals (referredBy set but bonus not yet awarded)
      const pendingSnap = await adminDb.collection("users").where("referredBy", "!=", null).where("referralBonusAwarded", "==", false).limit(50).get();
      const pending = pendingSnap.docs.map(d => ({ uid: d.id, email: d.data().email, name: d.data().name, referredBy: d.data().referredBy }));
      return Response.json({ ok: true, bonuses, pending });
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
