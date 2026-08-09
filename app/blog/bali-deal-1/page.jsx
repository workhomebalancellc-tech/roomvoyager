"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function BaliDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/31/bali_destination.jpg"
            alt="Bali rice terraces and temples"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Bali</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Bali Under $15 a Night. Yes, Really.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Six nights in Kuta, two very different stays, and a price that changes everything about the trip.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            September 6th through the 12th — six nights in Bali at the tail end of the dry season. The light is golden, the rice paddies are green, and the island is still running at full energy before the shoulder season slows things down. Kuta sits at the heart of it all: the beach, the nightlife, the surf, the chaos — all of it within walking distance of wherever you lay your head.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is Bali at its most affordable. Dee Mansion Bali comes in at $10 a night — a boutique guesthouse experience in the thick of Kuta at a price that seems impossible until you book it. POP! Hotel Kuta Beach Bali is the branded play at $13 a night — a well-run budget chain property with a strong reputation and direct access to Kuta Beach. Three dollars a night apart, and six nights in Bali for under $80 total in accommodation. The rest of the budget is yours.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $10 or $13 a night. Six nights in Kuta under $80 total. Bali in September is the move.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Dee Mansion Bali */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/31/deemansionbali1.jpg"
              alt="Dee Mansion Bali"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Dee Mansion Bali — Boutique Kuta at $10 a Night
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$10 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Dee Mansion Bali is the kind of find that makes you feel like you've cracked the travel code. A boutique guesthouse in the heart of Kuta at $10 a night — with the character and warmth that chain hotels at triple the price can't replicate. Balinese hospitality at this price point is one of the island's greatest gifts to budget travelers: clean, comfortable, genuinely cared-for, and right in the middle of everything Kuta has to offer.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Six nights here costs $60. That's the entire accommodation budget for a week in Bali — which means every other dollar you brought goes toward sunset dinners, surf lessons, temple visits, Ubud day trips, and the kind of experiences that are the actual reason you went to Bali in the first place.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-conscious travelers who want boutique Balinese character — $10 a night in Kuta frees up the entire trip budget for the experiences that make Bali unforgettable.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/bali1_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Dee Mansion Bali →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — POP! Hotel Kuta Beach */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/31/pophotelkutabeach1.jpg"
              alt="POP! Hotel Kuta Beach Bali"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                POP! Hotel Kuta Beach Bali — The Reliable Brand Right on the Strip
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$13 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              POP! Hotel is an Indonesian budget brand that has figured out exactly what travelers need in Kuta: a clean, well-run, cheerfully designed property steps from the beach at a price that doesn't require a second thought. The Kuta Beach location puts you right on the action — Bali's most famous stretch of sand, the surf break, the beach bars, and the legendary Kuta sunset all within easy reach. At $13 a night, six nights costs $78.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              POP! delivers consistency, which matters when you're in an unfamiliar place. The brand is known across Indonesia, the reviews are strong, and the beachfront location is one of the best positions you can take in Kuta at any price. For travelers who want a reliable, well-located base with a bit more brand assurance, POP! at $13 a night is the smart call.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a reliable branded property steps from Kuta Beach — consistent quality, great location, and $13 a night for six nights in Bali.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/bali1_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book POP! Hotel Kuta Beach Bali →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Dee Mansion Bali</strong> if you want boutique Balinese character at the absolute floor — $10 a night with the warmth and personality that makes budget travel in Bali genuinely wonderful.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>POP! Hotel Kuta Beach Bali</strong> if you want a reliable, well-located branded property steps from the beach — $13 a night, strong reviews, and Kuta's best sunset right outside.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Dee Mansion Bali →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>POP! Hotel Kuta Beach →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Six nights in Bali for under $80. September is the window. 🌴</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
