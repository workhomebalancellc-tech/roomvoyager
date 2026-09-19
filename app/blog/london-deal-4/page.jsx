"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1600&h=700&fit=crop&auto=format"
            alt="Kensington London"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Bob W Kensington vs. The Cura Hotel.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $106 or $171 a night. Four Kensington nights — apartment-style or Marriott Tribute boutique with Italian dining.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Kensington is the kind of London neighborhood that doesn't shout about itself. The Victoria and Albert Museum is a ten-minute walk. Hyde Park is right there. The High Street is one of the best shopping corridors in the city. And the residential streets around the area have the kind of white stucco terraces and well-maintained garden squares that make you understand why people pay so much to live in London. Four nights from March 27 is a good window: long enough to settle into Kensington's pace, short enough to make every day feel purposeful.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Both hotels in this deal are in Kensington — same neighborhood, $65 apart per night. Bob W London Kensington at $106 is an apartment-style hotel currently on sale with $422 off its regular rate. The Cura Hotel Kensington at $171 is a Marriott Tribute Portfolio boutique with an Italian restaurant, VIP Access status on Expedia, and 9.0 Wonderful reviews from a well-curated property that opened recently. Four nights means the gap is $260.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Kensington, same neighborhood. Apartment-style deal or Tribute Portfolio boutique. $65 apart per night.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop&auto=format"
              alt="Bob W London Kensington"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Bob W London Kensington — Apartment-Style on Sale at $106 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$106 / night · $422 off</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Bob W is a Scandinavian-founded apartment-style hotel brand that operates in prime city locations across Europe. The Kensington property is currently on sale at $106 a night — $422 off its regular rack rate, with 7 rooms left. The apartment-style format gives you more space than a standard hotel room, a kitchenette for light cooking, and a home-base feel that four nights in a new city genuinely benefits from. Rated 7.8 Good across 109 reviews, it's a newer property still building its review base.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $106 a night for four nights, Bob W Kensington is the value-forward choice — a $422 sale in one of London's most desirable neighborhoods. The $260 you save over The Cura is a proper dinner at a Michelin-starred Kensington restaurant, with change left over.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Value-driven travelers who want apartment-style flexibility in Kensington at a significantly reduced rate.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london4_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Bob W London Kensington →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=450&fit=crop&auto=format"
              alt="The Cura Hotel Kensington"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Cura Hotel Kensington — Marriott Tribute Boutique at $171 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$171 / night · VIP Access</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Cura Hotel is a Marriott Tribute Portfolio property — meaning it's independently designed and positioned as a boutique experience, with the Bonvoy points infrastructure behind it. Rated 9.0 Wonderful across 87 reviews, it has an Italian restaurant on site (a genuine one, not a hotel café), a bar and lounge, and VIP Access status on Expedia — meaning you get perks that standard bookings don't. With only 5 rooms left at this price, it's one of the deal set's tighter availability situations.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $171 a night, The Cura is the boutique premium play in Kensington. Bonvoy points, a proper Italian restaurant downstairs, and a higher review score than Bob W. For four nights, the $260 extra buys you meaningful upgrades if the boutique hotel experience and Marriott points matter to you.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Bonvoy members who want a curated boutique Kensington experience with an Italian restaurant and a higher review score.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london4_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Cura Hotel Kensington →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Bob W London Kensington</strong> if the $422 sale price and apartment-style layout make the value case obvious. Four nights in Kensington at $106 is genuinely excellent.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Cura Hotel Kensington</strong> if Bonvoy points, a better review score, a proper Italian restaurant, and the Tribute Portfolio boutique experience justify $65 more per night. Only 5 rooms left.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Bob W Kensington →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Cura Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Four nights in Kensington. Museums, Hyde Park, and two smart ways to stay. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
