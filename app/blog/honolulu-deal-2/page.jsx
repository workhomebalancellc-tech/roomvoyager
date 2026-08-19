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
              Waikiki Beach or Downtown? Two Very Different Honolulus.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Kuhio Ave near the beach or Moili'ili local life. Three nights, December, under $150.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 10th through the 13th — three nights in Honolulu, and this week's deal is a question about how you want to experience the city. Waikiki and downtown Honolulu are two completely different places separated by a fifteen-minute drive — one built entirely around the beach and the resort experience, the other a working Hawaiian city with local restaurants, the Chinatown arts scene, and the kind of neighborhood life that disappears the moment you step onto Kalakaua Avenue.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Kuhio Banyan Club at $141 a night sits on Kuhio Avenue in the heart of Waikiki — five minutes on foot to the beach, one minute to the International Market Place, and five restaurants on-site. Pagoda Hotel at $79 a night gives you a local Honolulu address — a mid-century institution between Waikiki and downtown with its famous floating restaurant, in the neighborhood where residents actually live. Three nights total: $423 at the Kuhio Banyan Club, $237 at the Pagoda. Same city. Two completely different trips.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Beach access or local Honolulu. $141 or $79. December in the city that has room for both.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&h=500&fit=crop&auto=format" alt="Kuhio Banyan Club Honolulu" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Kuhio Banyan Club — Waikiki Beach Access at $141</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$141 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Kuhio Banyan Club sits at 2310 Kuhio Avenue — one of the main arteries of Waikiki, a one-minute walk from the International Market Place and five minutes from the beach. With five restaurants on-site, connecting rooms, and a location that puts you in the middle of everything Waikiki has to offer, this is the beach-access option for travelers who want to be close to the water without paying the beachfront premium. At $141 a night, three nights totals $423 — a reasonable price for central Waikiki in December.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Kuhio Avenue is where Waikiki's supporting cast lives: local restaurants that aren't resort-priced, convenience stores, and the everyday rhythm of a neighborhood that caters to actual visitors rather than just resort guests. You're five minutes from the sand, surrounded by dining options, and close enough to everything to not need a plan.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to be in the middle of Waikiki — beach five minutes away, International Market Place around the corner, five dining options on-site at $141 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Kuhio Banyan Club →
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
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Pagoda Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Kuhio Banyan Club</strong> for central Waikiki with beach five minutes away — $141 a night, five restaurants on-site, and the International Market Place around the corner.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Pagoda Hotel</strong> for the real Honolulu experience — $79 a night at a local institution in the neighborhood between Waikiki and downtown where the city actually lives.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Kuhio Banyan Club →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Pagoda Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Three nights in Honolulu. Two very different cities waiting for you. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
