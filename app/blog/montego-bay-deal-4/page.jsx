"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/62/montegobay_destination.jpg" alt="Jamaica resort" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $245 or $440. Ocho Rios Villa or MoBay All-Inclusive.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Five nights in Jamaica. Two very different ways to experience the island.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 18th through the 23rd — five nights in Jamaica, with this deal offering two genuinely different experiences of the island. One option takes you east to Ocho Rios, where Jamaica's lush interior meets the sea at a villa-style property that feels nothing like a standard resort. The other keeps you in Montego Bay with the full all-inclusive package. Same dates. Very different trips.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Mystic Ridge Paradise in Ocho Rios at $245 a night is the explorer's pick — a villa-style property in one of Jamaica's most naturally spectacular settings, with Dunn's River Falls nearby, Blue Mountain views, and the quieter, greener version of Jamaica that Ocho Rios delivers. Deja Resort All-Inclusive in Montego Bay at $440 a night is the resort version: beachfront, all-inclusive, everything handled, in MoBay's most convenient location. Five nights. $975 between them. Two very different answers to what Jamaica means.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $245 or $440. Ocho Rios villa or Montego Bay all-inclusive — five nights, two Jamaicas.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/62/mysticridgeparadise1.jpg" alt="Mystic Ridge Paradise Ocho Rios" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Mystic Ridge Paradise — Ocho Rios Villa at $245</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$245 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Mystic Ridge Paradise sits in Ocho Rios — a different Jamaica than Montego Bay, and deliberately so. Ocho Rios is where the island's lush interior and coastline converge: Dunn's River Falls, Blue Hole, Mystic Mountain, and the kind of green, verdant scenery that reminds you Jamaica is one of the most naturally beautiful islands in the world. At $245 a night, five nights here is $1,225 — a villa-style property in one of the Caribbean's most striking settings at a mid-range price point.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Ocho Rios is about two hours from Montego Bay airport — factor in the drive, but it's a scenic one. For travelers who want to see more of Jamaica than the resort corridor, Mystic Ridge makes Ocho Rios a compelling home base. January's dry season keeps the waterfalls and hiking trails in prime condition, and the Blue Mountain views on clear mornings are genuinely extraordinary.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to explore Jamaica's natural side — Dunn's River Falls, Blue Mountains, and Ocho Rios in a villa-style property at $245 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Mystic Ridge Paradise →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/62/dejaresort1.jpg" alt="Deja Resort All-Inclusive Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Deja Resort All-Inclusive — MoBay Beachfront at $440</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$440 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Deja Resort All-Inclusive is Montego Bay's beachfront all-inclusive option in the heart of the action — a resort that puts you directly on the water with meals, drinks, and entertainment wrapped into the daily rate. At $440 a night, five nights is $2,200 all-inclusive, meaning food, drinks, beach access, pools, and activities are all covered from check-in to checkout. For travelers who want to land in MoBay, drop their bags, and spend five days between the beach and the bar without making decisions, Deja delivers exactly that.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Montego Bay location means easy airport transfers (MBJ is one of the most convenient international airports in the Caribbean), proximity to the Hip Strip, and access to everything the city offers without leaving the resort if you prefer not to. January is prime MoBay season: warm, dry, and calm enough to make the beachfront position worth every dollar.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a classic beachfront all-inclusive in Montego Bay — easy airport access, everything included, at $440 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Deja Resort All-Inclusive →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Mystic Ridge Paradise</strong> if you want to see Jamaica — Ocho Rios, Dunn's River Falls, Blue Mountain views, and a villa-style setting at $245 a night, with $975 saved over five nights compared to the Deja.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Deja Resort All-Inclusive</strong> for the classic Montego Bay experience — beachfront, all-inclusive, easy airport access, and five days of zero decisions at $440 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Mystic Ridge Paradise →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Deja Resort All-Inclusive →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Five nights in January. Explore Jamaica or let Jamaica come to you. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
