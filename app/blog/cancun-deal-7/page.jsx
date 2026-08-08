"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function CancunDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format"
            alt="Cancún turquoise water and white sand"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Cancún</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Brand Name vs. Boutique Exclusivity.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              A trusted luxury name and a secluded boutique. Two ways to do Cancún at the top of the market.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Early November in Cancún — checking in November 6th, out on the 9th — hits at a perfect moment in the season. The late-summer crowds have cleared entirely, the weather is excellent, and the Hotel Zone properties are showing competitive rates on three-night stays. The only thing left to decide is which version of luxury you're after.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's comparison is at the top of the market, and the two properties couldn't approach luxury differently. The Marriott Cancún Resort is the reliable gold standard — a world-class all-inclusive on one of the best stretches of beach, with every amenity you'd expect from the name. Nizuc Resort & Spa is something else entirely: a secluded boutique property at the southern tip of the Hotel Zone with private beach access, a world-class spa, and the kind of personalized experience that only works at small scale. Same destination, completely different philosophy.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            The gold standard or the best-kept secret. Early November, top of the market.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Marriott Cancún Resort */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=520&fit=crop&auto=format"
              alt="Marriott Cancún Resort"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Marriott Cancún Resort — The Gold Standard on the Strip
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$525 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Marriott Cancún Resort sits on a prime slice of Hotel Zone beachfront and delivers the kind of luxury experience the brand has spent decades perfecting. Multiple pools, a full-service spa, well-appointed rooms with ocean views, and a level of service that leaves nothing to chance. It's not all-inclusive — you pay as you go — which for fall travel when you want to explore the best of the Hotel Zone's restaurants and the surrounding area is exactly the right setup.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $525 a night, the Marriott delivers high-end all-inclusive comfort on one of the best Hotel Zone beaches. November is when Cancún's best restaurants, Isla Mujeres day trips, and Tulum excursions are most enjoyable — and staying at the Marriott gives you the perfect home base for all of it. Famously reliable, beautifully maintained, and exactly what you expect when you need the trip to go right.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want polished, reliable luxury on the Hotel Zone — great beach, top-tier service, and the freedom to explore Cancún beyond the resort gates.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun7_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Marriott Cancún Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Nizuc Resort & Spa */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=520&fit=crop&auto=format"
              alt="Nizuc Resort & Spa Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Nizuc Resort & Spa — Where the Hotel Zone Gets Quiet
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$789 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Nizuc sits at the southern tip of the Hotel Zone on a secluded stretch of beach and lagoon — set apart from the strip in a way that feels intentional and luxurious rather than inconvenient. The property is small by Cancún standards, which is the whole point: a boutique resort with private beach access, multiple pools, a Guerlain spa, and the kind of personalized attention that only works when the guest-to-staff ratio is kept deliberately low. It consistently earns recognition as one of the finest resorts in all of Mexico.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For a November trip when quiet and seclusion are the goal, Nizuc makes a compelling case that fewer guests, a world-class spa, and beautifully designed casitas surrounded by nature are worth the premium. At $789 a night, the rate reflects a property where personalized service and a 9.2 Expedia rating back up every dollar. This is the version of Cancún for people who've already done the Hotel Zone and want something entirely different.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want privacy, a world-class spa, and a boutique experience far removed from the Hotel Zone's energy — a Cancún trip that feels like a secret.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun7_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Nizuc Resort & Spa →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Marriott Cancún Resort</strong> if you want dependable luxury on the Hotel Zone — a beautiful beach, flawless service, and the freedom to use the resort as a base for exploring everything Cancún has to offer in fall.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Nizuc Resort & Spa</strong> if this trip is about getting away from everything — a secluded boutique, a Guerlain spa, private beach access, and the kind of quiet, unhurried luxury that reminds you why you came to Mexico in the first place.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun7_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Marriott Cancún Resort →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun7_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Nizuc Resort & Spa →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Early November in Cancún. The sweet spot nobody talks about. 🌊
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
