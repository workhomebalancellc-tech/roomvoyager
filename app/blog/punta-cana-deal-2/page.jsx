"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana beach and water"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Near Cortecito Beach vs. Bávaro Town.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both under $30 a night. The most affordable real hotels in Punta Cana, compared.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Punta Cana doesn't have to cost a fortune. While the destination is famous for its sprawling all-inclusive resorts, the area also has local hotels that offer a genuine Caribbean stay at prices that are almost hard to believe. This week's deal puts the two most affordable legitimate hotel options head to head — both under $30 a night, one closer to the beach, one closer to the town center.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hotel Maracas Punta Cana comes in at $28 a night — a local hotel that's a five-minute walk from Cortecito Beach, with a poolside bar, restaurant, and outdoor pool. Hotel Marimba Punta Cana lands at $27 a night — a slightly cheaper option in the Bávaro area with its own bar, restaurant, and spa services. The $1-a-night price difference makes this deal almost entirely about location preference. Beach proximity or town center access — both for under $30.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $1 apart. Cortecito Beach on foot or Bávaro town life. Punta Cana's most affordable local hotels.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop&auto=format"
              alt="Hotel Maracas Punta Cana near beach"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Maracas Punta Cana — Five Minutes from Cortecito Beach
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$28 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hotel Maracas Punta Cana puts you five minutes on foot from Cortecito Beach — one of the main public beach access points in the Bávaro-Punta Cana corridor. It's a local hotel rather than a resort, which means a simpler experience, but the on-site poolside bar, restaurant, and outdoor pool give you a comfortable base from which to explore the area. A beach shuttle rounds out the beach access when you want to go further afield.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $28 a night, Hotel Maracas is remarkable value for a Caribbean stay with genuine beach proximity. The February dates from Feb 7–14 give you a full week in the Dominican Republic's best weather window. Seven nights here totals approximately $196 — freeing up your entire vacation budget for the things Punta Cana does best: boat trips, diving, excursions, beach club days, and fresh seafood.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want genuine beach proximity — a five-minute walk to Cortecito Beach, a pool and bar on-site, and $28 a night that makes the whole week affordable.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/pca2_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Maracas →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&h=450&fit=crop&auto=format"
              alt="Hotel Marimba Punta Cana Bávaro"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Marimba Punta Cana — Bávaro Town Center at $27 a Night
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$27 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hotel Marimba Punta Cana is based in the Bávaro area — the commercial and residential heart of the tourist zone that connects to the resort corridor. It comes with a bar, full restaurant, and spa services that give it a step up in amenities compared to some other budget options. At just $27 a night, the Marimba is the cheapest well-equipped hotel in this entire market.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Bávaro location gives you access to local markets, pharmacies, local restaurants, and the day-to-day rhythm of Punta Cana as a real town rather than just a resort bubble. For travelers who want to feel more like a resident than a tourist — or who simply want the cheapest possible base with real amenities — Hotel Marimba at $27 a night is hard to argue with.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want to be in the Bávaro town rhythm — local restaurants, markets, spa on-site, and the lowest nightly rate of any equipped hotel in the area.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/pca2_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Marimba →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Maracas</strong> if beach proximity matters — a five-minute walk to Cortecito Beach with a pool and bar on-site at $28 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hotel Marimba</strong> if you want the Bávaro town experience — local market access, a spa on-site, and the absolute lowest nightly rate in the market at $27.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/pca2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hotel Maracas →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/pca2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hotel Marimba →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              $1 apart. The Dominican Republic in February for under $30 a night. 🌊
            </p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              Learn about RoomVoyager Rewards →
            </a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
