// CJ Affiliates postback webhook
// CJ fires: GET /api/webhooks/cj?sid=USER_UID&amount=SALE_AMOUNT&oid=ORDER_ID&aid=ACTION_ID&currency=USD
//
// To register in CJ dashboard:
//   Account → Web Services → Publisher Postback URL →
//   https://www.roomvoyagertravel.com/api/webhooks/cj?sid=%%SID%%&amount=%%AMOUNT%%&oid=%%OID%%&aid=%%ACTIONID%%&currency=%%CURRENCY%%

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

const CRUISE_PTS_RATE = 10; // 10 pts per $1
const SECRET          = process.env.CJ_WEBHOOK_SECRET; // optional security token

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Optional: verify secret token so only CJ can trigger this
    if (SECRET && searchParams.get("secret") !== SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    const sid      = searchParams.get("sid")      || "";
    const amount   = parseFloat(searchParams.get("amount") || "0");
    const orderId  = searchParams.get("oid")      || "";
    const actionId = searchParams.get("aid")      || "";
    const currency = searchParams.get("currency") || "USD";
    const product  = searchParams.get("product")  || "cruise"; // we'll pass this ourselves

    if (!sid || amount <= 0) {
      return new Response("Missing sid or amount", { status: 400 });
    }

    // Prevent duplicate processing — check if this order ID was already processed
    if (orderId) {
      const existing = await adminDb.collection("postback_log")
        .where("orderId", "==", orderId)
        .limit(1)
        .get();
      if (!existing.empty) {
        console.log("Duplicate postback ignored:", orderId);
        return new Response("Already processed", { status: 200 });
      }
    }

    // Look up user by UID (sid = uid we passed in the link)
    const userSnap = await adminDb.collection("users").doc(sid).get();
    if (!userSnap.exists) {
      console.warn("Postback: no user found for sid:", sid);
      // Log the miss so we can investigate
      await adminDb.collection("postback_log").add({
        sid, amount, orderId, actionId, currency, product,
        status:    "user_not_found",
        createdAt: FieldValue.serverTimestamp(),
      });
      return new Response("User not found", { status: 200 }); // return 200 so CJ doesn't retry
    }

    const userData = userSnap.data();
    const pts      = Math.round(amount * CRUISE_PTS_RATE);

    // Award points
    await adminDb.collection("users").doc(sid).update({
      points:         FieldValue.increment(pts),
      lifetimePoints: FieldValue.increment(pts),
      updatedAt:      FieldValue.serverTimestamp(),
    });

    // Log this postback so we have a full audit trail
    await adminDb.collection("postback_log").add({
      uid: sid, email: userData.email || "", name: userData.name || "",
      amount, pts, orderId, actionId, currency, product,
      status:    "awarded",
      createdAt: FieldValue.serverTimestamp(),
    });

    // Notify customer by email
    const newBalance = (userData.points || 0) + pts;
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.roomvoyagertravel.com"}/api/booking-points-notify`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:      userData.email,
        name:       userData.name || "",
        product:    product.charAt(0).toUpperCase() + product.slice(1),
        amount:     amount.toFixed(2),
        pts,
        cash:       (pts / 1000).toFixed(2),
        newBalance,
        notes:      `Order ID: ${orderId}`,
      }),
    });

    console.log(`Postback awarded: ${pts} pts to ${userData.email} (order ${orderId})`);
    return new Response("OK", { status: 200 });

  } catch (e) {
    console.error("CJ postback error:", e);
    return new Response("Server error", { status: 500 });
  }
}
