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
              Two iconic 4.5-star resorts. Christmas week. The Pacific at your doorstep.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 22nd through the 28th — six nights in Honolulu spanning Christmas Eve, Christmas Day, and the days immediately after. This is the premium window, and the prices reflect it: Christmas week in Waikiki is peak season pricing for two of the most celebrated resorts in Hawaii. If you're going to do it, this is the week you'll remember.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hilton Hawaiian Village Waikiki Beach Resort at $742 a night is the city-within-a-city option — a 4.5-star beachfront resort with five outdoor pools, on-beach access, and more on-property dining than most neighborhoods. Moana Surfrider, A Westin Resort & Spa at $977 a night is Waikiki's most storied hotel: open since 1901, oceanfront, rated 9.0 out of 10 from over 1,600 guests, with five restaurants and a spa. Christmas week pricing puts both at the top of the Honolulu market — the gap is $235 a night, $1,411 over six nights.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $742 or $977. Christmas week in Waikiki — at either resort, this becomes the trip you talk about for years.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Hilton Hawaiian Village Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hilton Hawaiian Village — Waikiki's Largest Resort at $742</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$742 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hilton Hawaiian Village sits at 2005 Kalia Road — a 4.5-star beachfront resort rated 8.4 out of 10 from nearly 10,000 Expedia guests. The largest resort in Hawaii, it operates at a scale that most properties can't touch: five outdoor pools, a hot tub, on-beach access, multiple American restaurants, and programming that makes Christmas week feel like an event the property has been planning all year. Six nights at $742 totals $4,449 — peak Christmas pricing for one of the most recognizable resorts in the Pacific.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Hilton's scale is its advantage: enough pools, restaurants, and on-property entertainment to make six nights fly by without needing to leave. The Friday night fireworks show from the beach is a highlight the kids and the adults both remember. Christmas here has been elevated to an art form over decades of hosting families for the holiday.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Families and groups who want the full resort experience at Christmas — five pools, on-beach access, and the largest resort footprint in Hawaii at $742 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hilton Hawaiian Village →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=500&fit=crop&auto=format" alt="Moana Surfrider Westin Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Moana Surfrider, A Westin Resort & Spa — Waikiki's First Lady at $977</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$977 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Moana Surfrider, A Westin Resort & Spa sits at 2365 Kalakaua Avenue — two minutes from Waikiki Beach, two minutes from the International Market Place, rated 9.0 out of 10 from over 1,600 Expedia guests. Opened in 1901 as the first hotel on Waikiki Beach, the "First Lady of Waikiki" has had 120 years to get this right. Five restaurants, an outdoor pool, a spa, and colonial-era architecture that nothing built in the last fifty years can replicate — all at a Christmas week rate of $977 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Six nights at $977 totals $5,860. The Moana Surfrider's 9.0 rating on 1,600+ reviews tells you it consistently delivers at that price — the guests who pay this for Christmas week come back. For travelers who have been planning a landmark Hawaii trip, Christmas under the banyan courtyard at the Moana Surfrider is the trip that earns its own chapter.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Waikiki's most iconic hotel at Christmas — 120 years of history, a 9.0 rating, five restaurants, and the beachfront address that defines Hawaiian luxury.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Moana Surfrider →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hilton Hawaiian Village</strong> for the full Christmas resort experience at scale — five pools, on-beach access, 8.4-rated, and $1,411 less than the Moana Surfrider over six nights.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Moana Surfrider</strong> for Waikiki's most historic and highest-rated beachfront property — 120 years of tradition, a 9.0 rating, five restaurants, and Christmas in a hotel that has been perfecting this for over a century.
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
