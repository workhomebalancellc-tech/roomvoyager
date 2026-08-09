"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function BaliDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/37/bali_destination.jpg" alt="Bali Legian beach sunset" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Bali</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $15 or $18 in Legian. Bali's Best-Value Beach Stretch.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Kuta's quieter neighbor. Four nights in September for under $80 total.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            September 6th through the 10th — four nights in Legian at the beginning of the dry season's final stretch. Legian is the neighborhood between Kuta and Seminyak: less chaotic than the former, less expensive than the latter, and with its own stretch of beach that catches the same legendary Bali sunset without the markup. It's the spot that budget-savvy travelers have been quietly choosing for years while everyone else argues about Kuta versus Seminyak.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Legian Paradiso Hotel at $18 a night and Cara Cara Inn at $15 a night. Four nights in Bali for $60 or $72 total in accommodation. The difference between these two properties over four nights is $12 — less than a cocktail on Seminyak's main strip. What matters is that both put you in the right part of Bali at the right time of year, with essentially your entire travel budget available for the experiences that are the actual point of the trip.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Legian at $15 or $18. Four nights. The sunset is the same either way.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/37/legian1.jpg" alt="Legian Paradiso Hotel" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Legian Paradiso Hotel — Character and Location at $18</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$18 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Legian Paradiso Hotel is the kind of budget property that earns its name: a genuine paradiso at $18 a night in a location that gets everything right. Legian's streets are filled with good warungs, surf rental shops, and the kind of neighborhood energy that Kuta used to have before it became entirely transactional. The beach is a short walk. The nightlife of Kuta and the boutiques of Seminyak are both reachable on foot. Four nights here costs $72 — the accommodation budget for a week in most of Europe.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              September brings dry, clear weather to Legian and the beach at its absolute best: long golden afternoons, the famous Bali sunset across the Indian Ocean, and warm enough evenings to be outside until midnight without a second thought. $18 a night for this location in this weather is not a deal — it's a gift.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Legian's beach access and neighborhood character — $18 a night, four nights, perfectly positioned between Kuta and Seminyak.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Legian Paradiso Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/37/caracarainn1.jpg" alt="Cara Cara Inn Bali" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Cara Cara Inn — The Floor Price in Legian at $15</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$15 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Cara Cara Inn is $15 a night in Legian. Four nights costs $60. There is almost nowhere on earth — certainly not anywhere near a surf beach in a destination travelers spend hundreds of dollars flying to reach — where you can make the accommodation line of your travel budget read $60 for four nights and feel good about what you got. Cara Cara Inn is that place: clean, welcoming, and positioned in one of Bali's most beloved beach neighborhoods.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Cara Cara name suggests the warmth and hospitality that defines the best of Bali's small inns — places that run on genuine care rather than corporate efficiency. For $15 a night, four nights in Legian, the entire remaining travel budget is available for the island. Surfing lessons, temple visits, sunset cocktails, Ubud day trips — none of that costs extra when the room already costs next to nothing.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want Legian's beach and neighborhood at the absolute floor — $15 a night, $60 for four nights, the rest of the budget goes to Bali itself.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Cara Cara Inn →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Legian Paradiso Hotel</strong> for Legian character, beach access, and the kind of neighborhood energy that Bali's south coast does best — $18 a night and everything is walkable.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Cara Cara Inn</strong> if $60 for four nights in Bali sounds like the best travel decision you can make — because at $15 a night in Legian, it probably is.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Legian Paradiso Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Cara Cara Inn →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Legian in September. Four nights for $60. The sunset is on the house. 🌅</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
