"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Honolulu Waikiki" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Waikiki Beach or Downtown? Under $90 Either Way.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two very different versions of Honolulu, both under $100 a night in December.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 10th through the 13th — three nights in Honolulu, under $90 a night for both options. This week's deal is really a question about how you want to experience the city: from the sand, or from the streets. Waikiki and downtown Honolulu are two completely different places separated by a fifteen-minute drive — one built entirely around the beach and the resort experience, the other a working Hawaiian city with local restaurants, the Chinatown arts scene, and the kind of neighborhood life that disappears the moment you step onto Kalakaua Avenue.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Waikiki Sand Villa Hotel at $89 a night puts you in the heart of Waikiki with easy beach access and everything that comes with it. Pagoda Hotel at $79 a night gives you a local Honolulu address — a mid-century property with its own floating restaurant, in the neighborhood where residents actually live. Three nights total: $267 at the Sand Villa, $237 at the Pagoda. Both are genuinely good deals for December in Hawaii.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            The beach or the city. Both under $90 a night. December Honolulu at its most affordable.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&h=500&fit=crop&auto=format" alt="Waikiki Sand Villa Hotel" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Waikiki Sand Villa Hotel — Beach Access at $89</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$89 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Waikiki Sand Villa Hotel is one of the better-kept secrets in the neighborhood: a clean, reliable property at the quieter Ala Wai end of Waikiki, with a rooftop pool, comfortable rooms, and walking distance to the beach for $89 a night in December. Waikiki at this price doesn't happen often — the resort corridor charges $300+ for comparable access, and the Sand Villa delivers the Waikiki experience without the Waikiki markup. Three nights for $267 and you wake up to the warmest December mornings in America.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Ala Wai location means a slightly calmer street scene than the heart of Waikiki — still walkable to the beach, the restaurants, and the International Market Place, but removed enough from the tourist epicenter to feel like you have some breathing room. For the beach-focused traveler who wants a budget win, this is the one.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Waikiki beach access at a budget price — $89 a night, rooftop pool, and walking distance to everything without the resort rate.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Waikiki Sand Villa Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Pagoda Hotel Honolulu" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Pagoda Hotel — Downtown Local at $79</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$79 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Pagoda Hotel is a Honolulu institution — a mid-century property in the Moili'ili neighborhood between Waikiki and downtown, known locally for its floating restaurant set on a koi pond, its longtime local clientele, and the kind of no-nonsense Hawaiian hospitality that never needed a TripAdvisor badge. At $79 a night, it's one of the most affordable proper hotels in the city, and it gives you access to the Honolulu that exists beyond the resort strip: local ramen shops, Chinatown markets, the Bishop Museum, and the Oahu neighborhoods where the real city lives.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The beach is a short bus or rideshare away. The local color is right outside the door. Three nights here costs $237 — and you leave with a better understanding of Honolulu than most visitors who stay twice as long at twice the price in Waikiki.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the local side of Honolulu — $79 a night at a city institution with Chinatown, downtown, and real Hawaiian neighborhood life at the door.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Pagoda Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Waikiki Sand Villa Hotel</strong> if the beach is the priority — $89 a night, walking distance to Waikiki, and a rooftop pool for three nights in December.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Pagoda Hotel</strong> for the real Honolulu experience — $79 a night at a local institution in the neighborhood between Waikiki and downtown where the city actually lives.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Waikiki Sand Villa Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Pagoda Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Three nights in Honolulu under $90. December never looked this good. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
