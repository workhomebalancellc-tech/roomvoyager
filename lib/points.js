import { doc, getDoc, setDoc, updateDoc, increment, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// Create user doc on first sign-in (safe to call every login — skips if exists)
export async function initUserDoc(uid, name, email) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      name:           name  || "",
      email:          email || "",
      points:         0,
      lifetimePoints: 0,
      createdAt:      serverTimestamp(),
      updatedAt:      serverTimestamp(),
    });
  }
}

// Read current points balance
export async function getUserPoints(uid) {
  const ref  = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data().points || 0) : 0;
}

// Add points (bookings, referrals, bonuses)
export async function addPoints(uid, amount) {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    points:         increment(amount),
    lifetimePoints: increment(amount),
    updatedAt:      serverTimestamp(),
  });
}

// Deduct points (redemptions)
export async function deductPoints(uid, amount) {
  const ref  = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("User not found");
  const current = snap.data().points || 0;
  if (current < amount) throw new Error("Insufficient points");
  await updateDoc(ref, {
    points:    increment(-amount),
    updatedAt: serverTimestamp(),
  });
}

// Directly set a points balance (admin use)
export async function setPoints(uid, amount) {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    points:    amount,
    updatedAt: serverTimestamp(),
  });
}
