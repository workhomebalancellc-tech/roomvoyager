"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function CancunDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1600&h=700&fit=crop&auto=format"
            alt="Cancún beach resort pool"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Cancún</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Both Under $200. Which One Delivers More?
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two all-inclusives, two strong reputations, one clear budget. The tiebreaker is everything else.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            A mid-November trip to the Riviera Maya — November 15th through the 18th — and this week's deal offers two solid all-inclusive options in the same region. One sits in Playa del Carmen, about an hour south of the airport. The other is right on Cancún's Hotel Zone. Same general coastline, two very different settings.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Wyndham Alltra is in Playa del Carmen — more boutique in scale, walkable to 5th Avenue's restaurants and shops, with a beachfront all-inclusive setup at $262 a night. Fiesta Americana Condesa is in Cancún's Hotel Zone, a well-regarded Mexican brand with 9 restaurants and a gorgeous beach at $535 a night. The question is how much the location and the step-up in amenities matters to you.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            5th Avenue or the Hotel Zone. Same coastline, completely different vibe.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Wyndham Alltra Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&h=520&fit=crop&auto=format"
              alt="Wyndham Alltra Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Wyndham Alltra Playa del Carmen — Value All-Inclusive, No Compromises
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$262 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Wyndham Alltra is the brand's all-inclusive line, and the Playa del Carmen location is one of their standout properties. Beachfront access right off 5th Avenue, multiple pools, solid dining, and the full all-inclusive package — meals, drinks, and activities — for $262 a night. It's not trying to out-luxury the five-star resorts. It's trying to deliver a genuinely good stay at a price that makes the trip easy to justify, in a town with great restaurants and nightlife right outside the gates.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Playa del Carmen has a different energy than the Cancún Hotel Zone — more walkable, more local character, more of a town feel. The Wyndham Alltra lets you tap into that while still having an all-inclusive to come home to. November 15th through the 18th at $262 a night is solid value for what you're getting.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want an all-inclusive base in Playa del Carmen — walkable to 5th Avenue, solid beach, and a Wyndham-backed experience at a price that makes the math easy.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun6_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Wyndham Alltra Cancún →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Fiesta Americana Condesa Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&h=520&fit=crop&auto=format"
              alt="Fiesta Americana Condesa Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Fiesta Americana Condesa — Mexican Hospitality at Its Finest
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$535 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Fiesta Americana is one of Mexico's most respected homegrown hospitality brands, and the Condesa property on Cancún's Hotel Zone is one of their flagship locations. The resort sits on a wide, beautiful stretch of beach with multiple pools, a full spa, several restaurants, and the kind of warm, attentive service that comes from a brand with deep roots in Mexican hospitality. It feels distinctly Mexican in a way that the international chains often don't — and that's a genuine differentiator.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $535 a night all-inclusive, the Condesa is firmly in premium territory — a fuller resort experience on Cancún's Hotel Zone beach with 9 restaurants, multiple pools, and the brand's signature Mexican hospitality. For November 15th through the 18th, this is the option if you want the Cancún Hotel Zone specifically and a resort that's built for more than just the basics.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a step up in quality without breaking the budget — a well-regarded Mexican brand, great beach, and a full resort experience under $200 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun6_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Fiesta Americana Condesa →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Wyndham Alltra Playa del Carmen</strong> if you want a solid all-inclusive in a walkable beach town — $262 a night for an adults-only property steps from 5th Avenue is hard to argue with.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Fiesta Americana Condesa</strong> if you want the Hotel Zone experience — a beloved Mexican hospitality brand, 9 restaurants, a premier beach, and the kind of warmth that makes Cancún feel like more than just another resort strip.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun6_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Wyndham Alltra Cancún →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun6_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Fiesta Americana Condesa →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Playa del Carmen or the Hotel Zone — both are a great call in November. 🌊
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
