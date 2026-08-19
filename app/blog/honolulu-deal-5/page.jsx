"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Honolulu luxury resort Waikiki" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Hilton or Moana Surfrider. Six Nights of Waikiki at Its Best.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two iconic 4 and 5-star resorts. Both in Waikiki. Christmas week.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 22nd through the 28th — six nights in Honolulu spanning Christmas Eve, Christmas Day, and the days immediately after. This is the premium window: Christmas week in Waikiki brings the full resort experience to life, with decorated lobbies, beachside holiday events, and the particular magic of spending Christmas morning with the Pacific Ocean visible from your balcony.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hilton Hawaiian Village Waikiki Beach Resort at $295 a night is the city-within-a-city option — the largest resort on Waikiki Beach with five towers, a private lagoon, and enough on-property restaurants and pools to justify never leaving. Moana Surfrider, A Westin Resort & Spa at $395 a night is something else entirely: the oldest hotel in Waikiki, opened in 1901, with a colonial-era grandeur and beachfront positioning that makes it arguably the most romanticized property in all of Hawaii. The gap is $100 a night — $600 over six nights.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $295 or $395. Christmas week in Waikiki — at either resort, you'll remember this trip for years.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Hilton Hawaiian Village Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hilton Hawaiian Village — Waikiki's Largest Resort at $295</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$295 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hilton Hawaiian Village is not just a hotel — it's the largest resort in Hawaii, a 22-acre compound at the western end of Waikiki Beach with five towers, a private lagoon pool, more than twenty restaurants and bars, and its own Friday night fireworks show. At $295 a night for six nights in Christmas week, the total is $1,770 — competitive pricing for the scale of what the Hilton delivers. The Rainbow Tower's famous mural is the most recognizable image on the Waikiki skyline. The lagoon pool is where kids and adults both lose track of time.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Christmas at the Hilton Hawaiian Village is an experience the resort takes seriously: decorated common areas, holiday programming, and a fireworks show on Christmas Eve that can be watched from the beach. For families or groups who want everything in one place over the holiday week, the Village's scale is an asset rather than an obstacle.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Families or groups who want the full Waikiki resort experience — multiple pools, private lagoon, twenty-plus dining options, and the largest resort footprint in Hawaii.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hilton Hawaiian Village →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=500&fit=crop&auto=format" alt="Moana Surfrider Westin Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Moana Surfrider, A Westin Resort — Waikiki's First Lady at $395</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$395 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Moana Surfrider opened in 1901 as the first hotel on Waikiki Beach — over 120 years ago, when the strip was lined with coconut palms and the guests arrived by steamship. Known as "The First Lady of Waikiki," the property's colonnaded white facade, oceanfront banyan tree courtyard, and historic veranda dining have made it the romantic reference point for Hawaiian resort life. As a Westin, it delivers modern luxury inside a century-old shell that nothing else in Waikiki can replicate.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Six nights at $395 totals $2,370. Christmas under the banyan tree at the Moana Surfrider, with the ocean twenty feet away and a hotel that has hosted guests for over a century — this is the Waikiki trip that becomes the story people tell. The premium over the Hilton is $600 over six nights. Whether that's worth it depends entirely on whether the history matters to you.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the most iconic hotel experience in Hawaii — 120 years of history, beachfront Waikiki, and a property that makes Christmas feel genuinely legendary.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Moana Surfrider →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hilton Hawaiian Village</strong> for the full resort experience at scale — multiple pools, a private lagoon, twenty dining options, and Christmas fireworks on the beach at $295 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Moana Surfrider</strong> for Waikiki's most historic and romanticized property — 120 years of beachfront history, the iconic banyan courtyard, and a Christmas week that becomes a lifelong memory at $395 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hilton Hawaiian Village →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Moana Surfrider →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Christmas in Waikiki. The Pacific at your doorstep. No white Christmas required. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
