// Daily cron: poll CJ Commission Detail API, award points for new sales
// Vercel cron calls GET /api/cron/cj-commissions once per day
// Required env vars:
//   CJ_API_TOKEN  — Personal Access Token from developers.cj.com
//   CRON_SECRET   — optional, set same value in vercel.json cron headers to block outside calls

import { adminDb } from "../../../../lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

const CJ_CID        = "7939822";   // Account CID (requestor-cid)
const CJ_WEBSITE_ID = "101734691"; // Publisher website ID used in click URLs
const PTS_PER_DOLLAR = 10;         // 10 pts per $1 for cruises

export const dynamic = "force-dynamic";

export async function GET(req) {
  // Optional: block calls that don't come from Vercel cron
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  try {
    const token = process.env.CJ_API_TOKEN;
    if (!token) {
      console.error("CJ_API_TOKEN not set");
      return Response.json({ error: "CJ_API_TOKEN not configured" }, { status: 500 });
    }

    // Query the last 2 days to catch any stragglers (CJ can be slow to post)
    const now    = new Date();
    const start  = new Date(now);
    start.setDate(start.getDate() - 2);
    const startStr = start.toISOString().split("T")[0]; // YYYY-MM-DD
    const endStr   = now.toISOString().split("T")[0];

    const url = `https://commission-detail.api.cj.com/v3/commissions` +
      `?requestor-cid=${CJ_CID}` +
      `&date-type=posting` +
      `&start-date=${startStr}` +
      `&end-date=${endStr}` +
      `&website-ids=${CJ_WEBSITE_ID}` +
      `&action-types=sale` +
      `&action-status=new`;

    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("CJ API error:", resp.status, text);
      return Response.json({ error: "CJ API returned " + resp.status }, { status: 502 });
    }

    // CJ returns XML by default; with Accept: application/json it may return JSON
    // Handle both by trying JSON first, falling back to XML parse
    const contentType = resp.headers.get("content-type") || "";
    let commissions = [];

    if (contentType.includes("json")) {
      const data = await resp.json();
      commissions = data?.commissions?.commission || [];
      if (!Array.isArray(commissions)) commissions = [commissions].filter(Boolean);
    } else {
      // Parse XML
      const xml = await resp.text();
      commissions = parseXmlCommissions(xml);
    }

    console.log(`CJ cron: fetched ${commissions.length} commissions for ${startStr} to ${endStr}`);

    let awarded = 0, skipped = 0, errors = 0;

    for (const c of commissions) {
      const commissionId = c["commission-id"] || c.commissionId || "";
      const sid          = (c.sid || "").trim();         // user UID we passed in the link
      const saleAmount   = parseFloat(c["sale-amount"] || c.saleAmount || "0");
      const orderId      = c["order-id"] || c.orderId || commissionId;
      const status       = c["action-status"] || c.actionStatus || "";

      // Skip if no sid — can't attribute to a user
      if (!sid) { skipped++; continue; }

      // Prevent duplicate processing
      if (commissionId) {
        const existing = await adminDb.collection("cj_commission_log")
          .where("commissionId", "==", commissionId)
          .limit(1).get();
        if (!existing.empty) { skipped++; continue; }
      }

      try {
        // Look up user by UID
        const userSnap = await adminDb.collection("users").doc(sid).get();
        if (!userSnap.exists) {
          console.warn("CJ cron: no user for sid", sid);
          await adminDb.collection("cj_commission_log").add({
            commissionId, sid, saleAmount, orderId, status,
            result: "user_not_found",
            processedAt: FieldValue.serverTimestamp(),
          });
          skipped++;
          continue;
        }

        const userData = userSnap.data();
        const pts = Math.round(saleAmount * PTS_PER_DOLLAR);
        if (pts <= 0) { skipped++; continue; }

        // Award points
        await adminDb.collection("users").doc(sid).update({
          points:         FieldValue.increment(pts),
          lifetimePoints: FieldValue.increment(pts),
          updatedAt:      FieldValue.serverTimestamp(),
        });

        // Log it
        await adminDb.collection("cj_commission_log").add({
          commissionId, sid,
          email: userData.email || "",
          name:  userData.name  || "",
          saleAmount, pts, orderId, status,
          result: "awarded",
          processedAt: FieldValue.serverTimestamp(),
        });

        // Email customer
        const newBalance = (userData.points || 0) + pts;
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.roomvoyagertravel.com";
        await fetch(`${siteUrl}/api/booking-points-notify`, {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email:      userData.email,
            name:       userData.name || "",
            product:    "Cruise",
            amount:     saleAmount.toFixed(2),
            pts,
            cash:       (pts / 1000).toFixed(2),
            newBalance,
            notes:      `CJ Commission ID: ${commissionId}`,
          }),
        }).catch(e => console.warn("Email error:", e));

        awarded++;
        console.log(`CJ cron: awarded ${pts} pts to ${userData.email} (commission ${commissionId})`);
      } catch (e) {
        console.error("CJ cron: error processing commission", commissionId, e);
        errors++;
      }
    }

    return Response.json({
      ok: true,
      total: commissions.length,
      awarded,
      skipped,
      errors,
      dateRange: `${startStr} to ${endStr}`,
    });

  } catch (e) {
    console.error("CJ cron fatal error:", e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}

// Simple XML parser for CJ commission records
function parseXmlCommissions(xml) {
  const commissions = [];
  // Match each <commission> block
  const matches = xml.match(/<commission>([\s\S]*?)<\/commission>/gi) || [];
  for (const block of matches) {
    const record = {};
    // Extract each field
    const fields = block.match(/<([a-z-]+)>([^<]*)<\/\1>/gi) || [];
    for (const field of fields) {
      const m = field.match(/<([a-z-]+)>([^<]*)<\/\1>/i);
      if (m) record[m[1]] = m[2].trim();
    }
    commissions.push(record);
  }
  return commissions;
}
