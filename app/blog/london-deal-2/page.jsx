"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1600&h=700&fit=crop&auto=format"
            alt="Tower Bridge London"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              The Tower Hotel vs. citizenM Tower of London.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $149 or $185 a night. Seven nights with Tower Bridge as the backdrop — classic riverside or smart hotel with a rooftop bar.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Tower Bridge is one of those London landmarks that never gets old. You can have seen it a hundred times and still stop to look when the light hits it right on a spring evening. Both hotels in this deal are positioned to give you that view — not as a background novelty but as a daily fixture of your week in London. March 27 through April 3 is one of the better times to be in this part of the city: the tourists haven't fully arrived yet, Borough Market is buzzing, and the walks along the South Bank are genuinely pleasant.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            The Tower Hotel by Thistle at $149 a night is the classic option — a traditional full-service hotel next to Tower Bridge with 10,668 reviews behind it, the most-reviewed hotel in our entire London deal set. citizenM Tower of London at $185 a night is the modern play: compact XL king rooms, a rooftop bar with Tower Bridge directly below you at drinks height, and the slick citizenM smart-hotel experience. Seven nights, $252 between them.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Tower Bridge, two ways. Classic riverside or rooftop bar above the bridge. $36 per night apart.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=450&fit=crop&auto=format"
              alt="The Tower Hotel by Thistle"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Tower Hotel by Thistle — Classic Riverside at $149 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$149 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Tower Hotel by Thistle sits directly next to Tower Bridge on the north bank of the Thames — a traditional full-service hotel with a British restaurant, a bar, and rooms that look out over the river or the bridge itself. With 10,668 reviews at 8.4 Very Good, it's the most-reviewed hotel in this entire London deal set and has been consistently delivering a solid London experience for decades. Breakfast service, 24-hour front desk, and the kind of polished British hospitality that the Thistle brand is known for.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $149 a night for seven nights, the Tower Hotel is the dependable classic at a very reasonable price for the location. You're paying less than the citizenM and getting more square footage per room, a full restaurant, and 10,000+ reviews of track record to lean on. For a traditional London hotel experience at a Tower Bridge address, it's hard to argue with.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Traditional hotel lovers who want proven reliability, a full restaurant, and the most-reviewed hotel in our London deal set at a Tower Bridge address.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london2_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Tower Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=450&fit=crop&auto=format"
              alt="citizenM Tower of London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>citizenM Tower of London — Rooftop Bar Above the Bridge at $185 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$185 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              citizenM Tower of London is the smart hotel play done right. The rooms are compact but highly designed — XL king beds, blackout blinds, a massive tablet controlling everything, and rain showers. The cloudM rooftop bar puts you above Tower Bridge with a cocktail in hand, which is a different category of experience from looking at it from ground level. Rated 9.2 Wonderful across 1,993 reviews, with just 5 rooms left at this price. citizenM's self-check-in, 24-hour canteen, and modern co-working lobby make it feel more like a boutique lifestyle hotel than a budget smart property.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $185 a night — $36 more than The Tower Hotel — citizenM delivers a meaningfully different experience. The rooftop bar alone is worth the premium if you're going to use it. Seven nights is plenty of time to make that cloudM bar your evening ritual.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Design-forward travelers who want a rooftop bar above Tower Bridge, a higher review score, and the modern citizenM smart-hotel experience.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london2_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book citizenM Tower of London →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Tower Hotel by Thistle</strong> if you want the most-reviewed Tower Bridge hotel in our deal set, a full restaurant, and traditional British hospitality at $149. Proven, reliable, and well-priced.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>citizenM Tower of London</strong> if you want a rooftop cocktail above Tower Bridge, a higher Wonderful rating, and the modern design-forward hotel experience. At $36 more per night, the rooftop bar alone makes the case.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Tower Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>citizenM Tower of London →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Seven nights. Tower Bridge out the window every morning. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
