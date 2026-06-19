"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";
import PromoBanner from "../../components/PromoBanner";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const HOTELS = [
  {
    name: "Luxor Hotel & Casino",
    emoji: "🔺",
    vibe: "Best value on the Strip",
    price: "From $69/night",
    photo: "/luxor1.jpg",
    blurb: "The iconic pyramid is Vegas's best-kept budget secret. You're right in the middle of the Strip, steps from MGM and Mandalay Bay, with a massive casino floor, multiple restaurants, and rooms that punch way above their price point. If you want the full Vegas experience without the luxury hotel bill, this is your spot.",
    perks: ["Center Strip location", "Large casino floor", "Multiple dining options", "Easy tram access"],
    link: "https://expedia.com/affiliates/workhomebalance_llc/vegasdeal1_99",
  },
  {
    name: "Fontainebleau Las Vegas",
    emoji: "✨",
    vibe: "New luxury on the Strip",
    price: "From $199/night",
    photo: "/Fontainebleau1.jpg",
    blurb: "Opened in 2023, Fontainebleau is the freshest thing on the Strip. 67 floors of panoramic views, a world-class pool complex, celebrity chef restaurants, and nightlife that rivals any Vegas staple. If you're celebrating or just ready to splurge, there's no better address in the city right now.",
    perks: ["67-story tower with Strip views", "Massive pool complex", "Celebrity chef dining", "Premium spa & nightlife"],
    link: "https://expedia.com/affiliates/workhomebalance_llc/vegasdeal1_470",
  },
];

function openHotel(link) {
  window.open(
    `/redirect?to=${encodeURIComponent(link)}&partner=Expedia&product=hotel`,
    "_blank",
    "noopener,noreferrer"
  );
}

export default function LasVegasDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />
        <PromoBanner />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&h=500&fit=crop&auto=format"
            alt="Las Vegas Strip at night"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deal of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Las Vegas</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Two ways to do Vegas — budget icon or luxury newcomer.</p>
          </div>
        </div>

        {/* ARTICLE */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Intro */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
              <span style={{ background: ORANGE, color: "#fff", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase" }}>Deal of the Week</span>
              <span style={{ fontSize: "12px", color: "#9CA3AF" }}>Las Vegas · Hotels · June 18, 2026</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: "800", color: "#111827", margin: "0 0 14px", lineHeight: 1.25 }}>
              Luxor vs. Fontainebleau — Two Ways to Do Vegas
            </h2>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
              Whether you're watching your budget or ready to go all out, Las Vegas has you covered this week. We're spotlighting two Strip hotels at opposite ends of the spectrum — both worth booking right now.
            </p>
          </div>

          {/* Hotel cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "32px" }}>
            {HOTELS.map((hotel, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "18px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,59,149,0.07)" }}>
                <div style={{ position: "relative", height: "200px" }}>
                  <img src={hotel.photo} alt={hotel.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: "14px", left: "18px", right: "18px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <p style={{ color: "#fff", fontWeight: "800", fontSize: "18px", margin: 0, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{hotel.emoji} {hotel.name}</p>
                      <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: "2px 0 0" }}>{hotel.vibe}</p>
                    </div>
                    <span style={{ background: ORANGE, color: "#fff", fontSize: "13px", fontWeight: "700", padding: "5px 12px", borderRadius: "8px", flexShrink: 0 }}>{hotel.price}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 22px 22px" }}>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.75, margin: "0 0 16px" }}>{hotel.blurb}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                    {hotel.perks.map((perk, j) => (
                      <span key={j} style={{ background: LIGHT_BLUE, color: NAVY, fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "6px" }}>✓ {perk}</span>
                    ))}
                  </div>
                  <button onClick={() => openHotel(hotel.link)}
                    style={{ width: "100%", background: NAVY, color: "#fff", border: "none", borderRadius: "10px", padding: "13px", fontSize: "14px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,59,149,0.2)" }}>
                    View Rates on Expedia →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}40`, borderRadius: "14px", padding: "18px 20px", display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "28px" }}>
            <span style={{ fontSize: "22px", flexShrink: 0 }}>💡</span>
            <p style={{ fontSize: "14px", color: "#374151", margin: 0, lineHeight: 1.7 }}>
              <strong>Pro tip:</strong> Split your stay — Luxor for the first two nights, Fontainebleau for the last. You get the full Vegas experience without blowing your whole budget on one hotel.
            </p>
          </div>

          {/* Rewards + back */}
          <div style={{ background: LIGHT_BLUE, borderRadius: "14px", padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <p style={{ fontWeight: "700", color: NAVY, fontSize: "14px", margin: "0 0 2px" }}>🏆 Earn rewards on these bookings</p>
              <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>5 pts per $1 · Cash back via Zelle, Cash App, or Venmo</p>
            </div>
            <a href="/rewards" style={{ background: NAVY, color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: "700", padding: "9px 18px", borderRadius: "8px", whiteSpace: "nowrap" }}>Learn more →</a>
          </div>

          <p style={{ textAlign: "center", marginTop: "32px", fontSize: "13px", color: "#9CA3AF" }}>
            ← <a href="/deals" style={{ color: NAVY, fontWeight: "600" }}>Back to all deals</a>
          </p>

        </div>
      </div>
      <Footer />
      <FloatingChat />
    </>
  );
}
