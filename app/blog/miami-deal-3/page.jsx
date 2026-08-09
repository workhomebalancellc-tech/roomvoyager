"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/40/miami_destination.jpg"
            alt="South Beach Miami"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              South Beach Luxury. $130 Apart.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              The Ritz-Carlton name or a boutique icon steps from the same ocean. October South Beach, top of the market.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Mid-October on South Beach — October 15th through the 18th — is Miami at its most appealing. The summer heat is fully gone, the snowbird season hasn't started yet, and Ocean Drive is actually enjoyable to walk. Three nights on South Beach in October is the trip that reminds you why Miami became Miami.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal stays firmly in luxury territory, with two properties that represent South Beach at its finest. The Ritz-Carlton, South Beach is the global gold standard — a landmark property on one of the world's most famous stretches of sand at $520 a night. The Alexander Hotel is a South Beach icon in its own right — an all-suite boutique property steps from the ocean at $390 a night. Same neighborhood, $130 apart, and the gap narrows fast when you look at what both actually deliver.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            The name everyone knows or the one locals love. South Beach luxury, your call.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Ritz-Carlton South Beach */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/40/ritzcarltonsouthbeach1.jpg"
              alt="The Ritz-Carlton South Beach"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Ritz-Carlton, South Beach — The Gold Standard on the Strip
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$520 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Ritz-Carlton, South Beach occupies a landmark Art Deco building directly on the beach and delivers exactly what the name promises — impeccable service, beautifully appointed rooms, and the kind of effortless luxury that makes three nights feel like a full vacation. The beach butler service, the rooftop pool, the spa, and the dining are all exactly what you'd expect from the world's most trusted luxury brand. This is South Beach at its most polished.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $520 a night for October 15th through the 18th, the Ritz-Carlton delivers an experience that justifies every dollar. Three nights here is a genuine splurge — but it's also a South Beach trip that will be remembered. October is the ideal window: perfect weather, thinner crowds, and the full resort experience without peak-season chaos.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the definitive South Beach luxury experience — oceanfront Ritz-Carlton service, a landmark Art Deco property, and a trip that delivers on every expectation.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami3_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Ritz-Carlton, South Beach →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Alexander Hotel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/40/alexanderhotel1.jpg"
              alt="Alexander Hotel South Beach"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Alexander Hotel — South Beach's All-Suite Secret
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$390 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Alexander Hotel is a South Beach institution — an all-suite oceanfront property that has been quietly delivering one of the best stays on the beach for decades. Every room is a suite, which means you're getting living space, a kitchen or kitchenette, and significantly more room than a standard hotel room for $130 less per night than the Ritz. The oceanfront location puts you steps from the same ocean, the same sand, and the same South Beach energy.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $390 a night, the Alexander delivers real South Beach luxury in a format that's hard to find — genuine suite space, ocean views, and a property with the kind of history and character that newer hotels can't manufacture. For three nights in October, saving $390 over the Ritz while still staying on the beach in an all-suite property is a compelling case.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want oceanfront suite space on South Beach at a meaningful discount — more room, more character, same incredible beach.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami3_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Alexander Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Ritz-Carlton, South Beach</strong> if you want the name, the service, and the certainty — a landmark oceanfront property where every detail is handled and the experience delivers on every expectation.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Alexander Hotel</strong> if you want all-suite space on the same beach at $130 less per night — more room, more character, and a South Beach institution that earns its reputation without the Ritz price tag.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Ritz-Carlton South Beach →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Alexander Hotel →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              October on South Beach. The smartest time to go. 🌊
            </p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              Learn about RoomVoyager Rewards →
            </a>
          </div>

        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
