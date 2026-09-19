"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=700&fit=crop&auto=format"
            alt="London"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Alhambra Hotel vs. Tavistock Hotel.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $82 or $119 a night. Seven nights in Bloomsbury — the most affordable deal in this entire London set.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Bloomsbury in late March is London at its quietest and most livable. The British Museum is a ten-minute walk. Russell Square is blooming. The Piccadilly line from Russell Square station runs direct to Heathrow and direct into the West End. It's a neighborhood that rewards the kind of traveler who wants access to everything but doesn't need to be in the middle of it all — and for a week from March 27 to April 3, it's one of the smartest bases in the city.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal puts two Bloomsbury stalwarts side by side at the sharpest price points in our entire London deal set. The Alhambra Hotel at $82 a night is the budget anchor — one of the cheapest well-reviewed hotels in central London. The Tavistock Hotel at $119 a night is a step up: Art Deco architecture, a proper bar and restaurant, and a better guest satisfaction score. Over seven nights, the $37 gap adds up to $259.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $82 or $119. Bloomsbury budget or Art Deco step-up. Seven London nights, $259 apart total.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=450&fit=crop&auto=format"
              alt="Alhambra Hotel London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Alhambra Hotel — Budget Bloomsbury at $82 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$82 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $82 a night, the Alhambra Hotel is one of the cheapest well-reviewed hotels in central London — currently on sale with $143 off its usual rate. Rated 8.2 Very Good across 1,638 reviews, it's a no-frills Bloomsbury property that delivers exactly what the price promises: a clean room in an excellent location, steps from King's Cross and the British Museum. The Piccadilly line is right there for Heathrow connections, and the neighborhood's independent restaurants and pubs are some of the best value eating in central London.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Seven nights at $82 is $574 total for accommodation — a genuinely remarkable number for a central London week. The $259 you save over the Tavistock is easily the difference between a budget trip and a trip where you eat and drink like you mean it. Borough Market, a West End show, a river cruise — the savings fund the real London experience.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-first travelers who want a central London base and plan to spend their money on the city, not the room.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london1_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Alhambra Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=450&fit=crop&auto=format"
              alt="Tavistock Hotel London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Tavistock Hotel — Art Deco Bloomsbury at $119 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$119 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Tavistock Hotel is an Art Deco property on Tavistock Square in Bloomsbury — one of London's most architecturally beautiful residential squares. On sale at $119 a night (down from its regular rack rate), it offers a proper bar and restaurant, bigger rooms than most budget options in the area, and a 8.6 Excellent rating across 1,985 reviews. The Tavistock carries a bit of old-London character that chain hotels simply can't manufacture — and at this price, it represents genuine value for the quality.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $119 a night for seven nights, the Tavistock is the smart upgrade from the Alhambra. The $37 per night extra buys you Art Deco atmosphere, a better guest satisfaction score, and a hotel that feels like a proper London stay rather than a budget layover. For a week, that's worth considering.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a step up from bare-budget — Art Deco charm, on-site dining, and a better review score, still at a fraction of average London hotel prices.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london1_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Tavistock Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Alhambra Hotel</strong> if $82 a night for a central London week sounds as good as it is. Put the $259 savings toward Borough Market, West End theatre, and proper fish and chips.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Tavistock Hotel</strong> if Art Deco Bloomsbury atmosphere and a better guest satisfaction score is worth $37 more per night. Still an exceptional value for a London week.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Alhambra Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Tavistock Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Seven London nights in Bloomsbury. From $82. That's the whole deal. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
