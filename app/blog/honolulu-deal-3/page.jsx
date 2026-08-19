"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Waikiki Honolulu luxury" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $139 or $529 a Night. Waikiki's Biggest Price Gap.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              A smart boutique or Honolulu's most legendary 5-star. December. You decide.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 17th through the 21st — four nights in Honolulu as the holiday season peaks. This is the week the city gets decorated, the surf at the North Shore reaches its best, and Waikiki's evening scene takes on a warmth that has nothing to do with the weather. December 17th through the 21st lands in the sweet spot: past the early-December shoulder and just ahead of the Christmas rush that sends prices into the stratosphere.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Vive Hotel Waikiki at $139 a night is the smart play — a boutique hotel that punches well above its price point with thoughtful design, great reviews, and a location that puts you in the middle of Waikiki without the resort markup. Halekulani at $529 a night is the other end of the spectrum entirely: one of the most celebrated hotels in the Pacific, a Waikiki institution since 1907, with orchid-patterned pool mosaics and service that has made it the reference point for Hawaiian luxury for over a century. The gap between them is $390 a night — over four nights, that's $1,560.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $139 or $529. Boutique smart money or Honolulu's most legendary hotel. Both in December Waikiki.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&h=500&fit=crop&auto=format" alt="Vive Hotel Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Vive Hotel Waikiki — Boutique Smart Money at $139</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$139 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Vive Hotel Waikiki is the boutique play that consistently outperforms its price tag. Well-designed, well-reviewed, and positioned on Waikiki's main strip, the Vive delivers a genuinely comfortable, stylish hotel experience at a price that makes the resort corridor look like it's charging for the name rather than the room. At $139 a night for four nights in mid-December, this is $556 total for a real hotel in the heart of Honolulu's most famous neighborhood — and that number is hard to argue with.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Vive is the kind of hotel that earns its reviews by actually delivering on the basics: clean rooms, good location, staff who know what they're doing. In a neighborhood full of properties that trade on brand recognition rather than actual quality, the Vive's reputation comes from the stay itself. Four nights here leaves you $1,560 ahead of the Halekulani comparison — enough to fund an entire additional trip.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a genuinely good boutique hotel in Waikiki without the resort markup — $139 a night, great reviews, and the real Waikiki experience.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Vive Hotel Waikiki →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=500&fit=crop&auto=format" alt="Halekulani Hotel Honolulu" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Halekulani — Honolulu's Most Legendary Hotel at $529</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$529 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Halekulani translates from Hawaiian as "House Befitting Heaven" — and the hotel has spent more than a century making sure that name isn't marketing hyperbole. Established in 1907 on a prime stretch of Waikiki beachfront, Halekulani is not just a hotel — it's a reference point for what Hawaiian hospitality at the highest level looks like. The pool's famous orchid mosaic visible from beneath the surface, the House Without a Key beachside bar where Hawaii Five-O was filmed, the Orchids restaurant overlooking the ocean — everything here has been refined over decades into something that doesn't need to explain itself.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $529 a night in mid-December, four nights at the Halekulani comes to $2,116. It's a significant number — but for travelers who have been planning a once-in-a-decade Hawaii trip, the Halekulani is the answer to the question of where to stay when the stay itself is part of the memory.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the definitive Honolulu luxury experience — a century-old institution, beachfront Waikiki, and service that has set the Hawaiian standard for generations.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Halekulani →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Vive Hotel Waikiki</strong> for boutique quality in the heart of Waikiki — $139 a night, consistently great reviews, and $1,560 saved over four nights versus the Halekulani.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Halekulani</strong> if this is the Hawaii trip — a century of legendary service, beachfront Waikiki, and the most celebrated hotel in the Pacific at $529 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Vive Hotel Waikiki →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Halekulani →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Mid-December in Waikiki. Before the Christmas crowds. This is the window. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
