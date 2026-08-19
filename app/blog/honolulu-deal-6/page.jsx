"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Waikiki Marriott hotels comparison" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Marriott vs. Marriott. Same Brand, Very Different Price.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Courtyard or Waikiki Beach Marriott. One name, two very different Waikiki experiences.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 12th through the 16th — four nights in Honolulu, and this week's deal is about brand loyalty put to the test. Both hotels are Marriott properties. Both are in Waikiki. Both earn the same loyalty points. But they are not the same hotel — not by $140 a night.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Courtyard by Marriott Waikiki Beach at $189 a night is the practical Marriott: clean, reliable, points-eligible, and positioned well without the resort markup. Waikiki Beach Marriott Resort & Spa at $329 a night is the flagship version — a full-scale beachfront resort with multiple pools, a spa, rooftop bars, and ocean views that the Courtyard can't offer. The gap is $140 a night, which over four nights is $560. The question isn't which hotel is better. It's which version of the trip you want to take.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Same brand, same loyalty points. $189 or $329. Marriott's two faces in December Waikiki.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&h=500&fit=crop&auto=format" alt="Courtyard by Marriott Waikiki Beach" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Courtyard by Marriott Waikiki Beach — Smart Loyalty at $189</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$189 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Courtyard by Marriott Waikiki Beach is the points-smart choice for Marriott loyalists who want the brand without paying resort rates. At $189 a night, four nights totals $756 — you earn full Marriott Bonvoy points, get the Courtyard's reliable service and clean rooms, and keep $560 in your pocket versus the flagship resort next door. The location puts you close to the beach without the beachfront premium, and the property's amenities cover everything most travelers actually use: a pool, on-site dining, and proximity to everything in Waikiki.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For Marriott Elite members, the Courtyard delivers the same status benefits at a meaningfully lower rate. If you're accumulating nights toward status, four nights here at $189 is the efficient play — same brand, same credit, significantly less spend.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Marriott loyalists who want the brand and the points without the resort premium — $189 a night, four nights, $560 saved versus the flagship.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Courtyard Waikiki Beach →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&h=500&fit=crop&auto=format" alt="Waikiki Beach Marriott Resort and Spa" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Waikiki Beach Marriott Resort & Spa — Flagship Beachfront at $329</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$329 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Waikiki Beach Marriott Resort & Spa is the full version of what Marriott can offer in Hawaii: two towers on the eastern end of Waikiki Beach, directly across from the ocean, with five restaurants and bars including the rooftop Kā'ana Kitchen, a spa, multiple pools, and the kind of resort programming that makes four nights feel like a full vacation rather than just a place to sleep. At $329 a night, four nights totals $1,316.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The flagship delivers what the Courtyard can't: ocean-view rooms where you wake up to the Pacific, beachfront positioning at the quieter Diamond Head end of the strip, and a spa that transforms a December afternoon into something genuinely memorable. Elite members get enhanced upgrade opportunities that can push already-good ocean-view rooms into something spectacular.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the full Marriott resort experience in Waikiki — beachfront positioning, ocean views, five dining options, and a spa at $329 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Waikiki Beach Marriott Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Courtyard by Marriott Waikiki Beach</strong> for the smart loyalty play — same brand, same points, $189 a night, and $560 saved over four nights to spend on Honolulu itself.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Waikiki Beach Marriott Resort & Spa</strong> for the full beachfront flagship experience — ocean views, five dining venues, a spa, and Marriott's best in Hawaii at $329 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Courtyard Waikiki Beach →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Waikiki Beach Marriott →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Same brand. Different Waikiki. Pick your version of December. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
