"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Waikiki Honolulu mid-range hotels" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $199 or $265 a Night. Sheraton vs. Hyatt in December Waikiki.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two mid-range heavyweights. Both in the heart of Waikiki. Three nights, two very different vibes.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 6th through the 9th — three nights in Waikiki during the early-December sweet spot, when the holiday spirit has arrived but the Christmas week surge hasn't yet. This is the mid-range matchup: two well-known hotel brands, both delivering the full Waikiki experience, at prices that get you genuine amenities without requiring you to mortgage the trip.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Sheraton Princess Kaiulani at $199 a night is the classic Waikiki choice — a historic property named after the beloved Hawaiian princess, centrally located on Kalakaua Avenue with a pool, multiple dining options, and the full Sheraton infrastructure. Hyatt Regency Waikiki Beach Resort at $265 a night takes the next step up: a twin-tower property directly across from the beach with one of the most dramatic lobbies in Waikiki and the kind of ocean-view rooms that make arriving feel like an event. The gap is $66 a night — $198 over three nights.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $199 or $265. Sheraton history or Hyatt's beachfront towers. Both are the real deal in December Waikiki.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Sheraton Princess Kaiulani Honolulu" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sheraton Princess Kaiulani — Waikiki Icon at $199</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$199 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Sheraton Princess Kaiulani occupies a spot in Waikiki history that goes beyond hotel reviews: the property sits on the former estate of Princess Ka'iulani, the last heir to the Hawaiian throne, and opened in 1955 as one of the first major postwar hotels on the strip. Today it's a full-service Sheraton with a large outdoor pool, the Pikake Pavilion restaurant, and a location on Kalakaua Avenue that puts you in the center of everything — the beach, the International Market Place, and the evening street scene that defines Waikiki December nights. At $199 a night, three nights totals $597 — competitive for what the Sheraton delivers.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Sheraton Kaiulani is the dependable mid-range option for travelers who want a brand they trust, amenities they'll actually use, and a location that doesn't require planning to get anywhere. Everything in Waikiki is walking distance. December here is warm, the pools are open, and the luau scene at the neighboring Sheraton Waikiki is a five-minute walk.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want dependable Sheraton quality in the absolute center of Waikiki — history, amenities, and location at $199 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sheraton Princess Kaiulani →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=500&fit=crop&auto=format" alt="Hyatt Regency Waikiki Beach Resort" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hyatt Regency Waikiki Beach Resort — Beachfront Towers at $265</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$265 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hyatt Regency Waikiki Beach Resort is the twin-tower landmark directly across from Waikiki Beach — and that positioning changes everything. The open-air atrium lobby rising forty stories, the rooftop pool and fitness center, the ocean-facing rooms where you can watch the sun set from the bed — the Hyatt earns its premium through location and scale in ways that most Waikiki hotels can't match. At $265 a night, three nights comes to $795, and the beachfront access makes every dollar feel justified.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Hyatt's 1,230-room scale means the amenities are extensive: multiple restaurants including the popular Shor American Seafood Grill, a retail arcade, and the kind of staffing that keeps a property this size running smoothly. For December in Waikiki, this is the mid-range option where the property itself becomes part of the experience.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want ocean views, beachfront access, and full resort amenities at the mid-range price point — the Hyatt's twin towers directly across from Waikiki Beach.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hyatt Regency Waikiki Beach Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sheraton Princess Kaiulani</strong> for a historic Waikiki property with a central location and full Sheraton amenities at $199 a night — $198 less than the Hyatt over three nights.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hyatt Regency Waikiki Beach Resort</strong> for twin-tower beachfront positioning, ocean-view rooms, and the full resort experience directly across from the water at $265 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sheraton Princess Kaiulani →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hyatt Regency Waikiki →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Early December in Waikiki. The island at its most golden. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
