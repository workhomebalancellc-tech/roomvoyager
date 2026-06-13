import { NextResponse } from "next/server";
import { adminDb, adminAuth } from "../../../../lib/firebaseAdmin";

export async function POST(req) {
  try {
    const { uid } = await req.json();
    if (!uid) return NextResponse.json({ error: "Missing uid" }, { status: 400 });

    const db = adminDb();
    const batch = db.batch();

    // Delete user doc
    batch.delete(db.collection("users").doc(uid));

    // Delete bookings
    const bookings = await db.collection("bookings").where("uid", "==", uid).get();
    bookings.forEach(doc => batch.delete(doc.ref));

    // Delete redemptions
    const redemptions = await db.collection("redemptions").where("uid", "==", uid).get();
    redemptions.forEach(doc => batch.delete(doc.ref));

    // Unsubscribe from email list
    const subs = await db.collection("subscribers").where("email", "==", uid).get();
    subs.forEach(doc => batch.update(doc.ref, { active: false, deletedAt: new Date().toISOString() }));

    await batch.commit();

    // Delete Firebase Auth user
    const auth = adminAuth();
    await auth.deleteUser(uid);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("delete-account error:", err);
    return NextResponse.json({ error: "Failed to delete account" }, { status: 500 });
  }
}
