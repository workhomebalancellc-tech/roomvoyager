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
              $243 or $484 a Night. Sheraton vs. Hyatt in December Waikiki.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two 4-star Waikiki institutions. Both steps from the beach. Very different prices.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 6th through the 9th — three nights in Waikiki during the early-December sweet spot, when the holiday spirit has arrived but the Christmas week surge hasn't yet. This is the 4-star matchup: two well-established hotel brands with strong reputations, both delivering the full Waikiki experience, at prices that reflect their very different positioning on the strip.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Sheraton Princess Kaiulani at $243 a night sits two minutes from Waikiki Beach with a 8.6 out of 10 on Expedia from over 1,500 reviews — excellent for a busy Waikiki property. Hyatt Regency Waikiki Beach Resort & Spa at $484 a night is directly across from the beach on Kalakaua Avenue, rated 9.0 out of 10, with twin towers, ocean views, and the kind of resort scale that justifies a premium. The gap is $241 a night — over three nights, that's $724.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $243 or $484. Sheraton history or Hyatt's beachfront towers. $724 separates them over three nights.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Sheraton Princess Kaiulani Honolulu" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sheraton Princess Kaiulani — Waikiki Icon at $243</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$243 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Sheraton Princess Kaiulani sits at 120 Kaiulani Avenue — two minutes on foot to Waikiki Beach, seven minutes to the Royal Hawaiian Center, and positioned in the heart of the strip with a 4-star rating and an 8.6 out of 10 from over 1,500 Expedia guests. The property is named after Princess Ka'iulani, the last heir to the Hawaiian throne, and has been a Waikiki fixture since 1955. It delivers the full Sheraton infrastructure — outdoor pool, fitness center, on-site dining, limo service — at a price that's nearly half the Hyatt directly across the street from the beach.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Three nights at $243 totals $728. That's real money saved for early December in Waikiki while still staying in a trusted 4-star property two minutes from the water. The Sheraton's two-minute walk to the beach and 8.6 rating tell you everything: this is a reliable, well-run hotel in an excellent location at a price that leaves room for the rest of the trip.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a trusted 4-star name two minutes from Waikiki Beach — 8.6-rated, well-located, and $724 less than the Hyatt over three nights.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sheraton Princess Kaiulani →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=500&fit=crop&auto=format" alt="Hyatt Regency Waikiki Beach Resort" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hyatt Regency Waikiki Beach Resort & Spa — Beachfront Towers at $484</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$484 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hyatt Regency Waikiki Beach Resort & Spa sits at 2424 Kalakaua Avenue — one minute to Waikiki Beach, three minutes to Kuhio Beach, and rated 9.0 out of 10 from over 5,300 Expedia reviews. That score on that volume is rare: the Hyatt is consistently delivering at a level that justifies its position as one of the most reviewed hotels in all of Waikiki. The twin-tower property offers ocean views, an outdoor pool, hot tub, and on-site car rental — resort infrastructure that matches the premium rate.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Three nights at $484 totals $1,452. The beachfront address, 9.0 rating, and scale of the Hyatt's amenities make it the clear upgrade — but the Sheraton's 8.6 rating two minutes away at almost half the price makes the value calculus genuinely competitive. Both are 4-star properties. The difference is location precision and resort scale.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want one-minute beach access, a 9.0 rating from 5,300+ guests, and the full Hyatt resort experience in the heart of Waikiki.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hyatt Regency Waikiki Beach Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sheraton Princess Kaiulani</strong> for a 4-star Waikiki icon two minutes from the beach — 8.6-rated, centrally located, and $724 less than the Hyatt over three nights.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hyatt Regency Waikiki Beach Resort & Spa</strong> for one-minute beachfront positioning, a 9.0 rating from 5,300+ guests, and the highest-rated resort experience in this price tier.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sheraton Princess Kaiulani →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hyatt Regency Waikiki →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Early December in Waikiki. Before the Christmas rush. This is the window. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
