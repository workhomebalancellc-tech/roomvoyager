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
            Labor Day week in Cancún — September 6th through the 13th — is one of the best-kept secrets in travel. Summer crowds have thinned out, the weather is still excellent, and the Hotel Zone runs at a pace that actually lets you enjoy it. Better yet, shoulder season pricing means more resort for your dollar than you'd get in peak months.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is a true head-to-head: Wyndham Alltra Cancún and Fiesta Americana Condesa Cancún. Both all-inclusive. Both well under $200 a night. Both legitimate options on the Hotel Zone. The question isn't whether either one is worth it — it's which one is worth it more for the kind of trip you have in mind.
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
                Wyndham Alltra Cancún — Value All-Inclusive, No Compromises
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>~$130 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Wyndham Alltra is the brand's all-inclusive line, and the Cancún property makes a strong case for what the formula can deliver at the right price point. Beachfront location, multiple pools, solid dining options, and the full all-inclusive package — meals, drinks, and activities — for around $130 a night. It's not trying to out-luxury the five-star resorts. It's trying to deliver a genuinely good week at a price that makes the trip possible for a lot more people.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Wyndham name means something here — consistent standards, reliable service, and a property that runs smoothly. For Labor Day week when the resort isn't at peak capacity, you're getting solid all-inclusive value in a calmer environment than peak season would offer. Less crowd, same beach, better rate. That's the shoulder season advantage, and Alltra is a smart way to use it.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-conscious travelers and families who want a reliable beachfront all-inclusive — solid food, great location, and a Wyndham-backed experience at a price that makes the math easy.
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
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>~$175 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Fiesta Americana is one of Mexico's most respected homegrown hospitality brands, and the Condesa property on Cancún's Hotel Zone is one of their flagship locations. The resort sits on a wide, beautiful stretch of beach with multiple pools, a full spa, several restaurants, and the kind of warm, attentive service that comes from a brand with deep roots in Mexican hospitality. It feels distinctly Mexican in a way that the international chains often don't — and that's a genuine differentiator.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At around $175 a night all-inclusive, the step up from Alltra is real and noticeable — better dining variety, more resort amenities, and a property that carries a bit more character. For Labor Day week, the Condesa gives you a complete resort experience at a price that still qualifies as one of the better deals in the zone. If the $45-a-night difference buys you a noticeably better stay, it usually does here.
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
              Choose <strong>Wyndham Alltra Cancún</strong> if keeping the budget tight is the priority — a reliable all-inclusive on a great beach at $130 a night is genuinely hard to beat, especially in shoulder season.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Fiesta Americana Condesa</strong> if you want the best value under $200 — a beloved Mexican hospitality brand, a fuller resort experience, and the kind of warmth and character that makes Cancún feel like more than just a hotel zone.
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
              Shoulder season. Full resort. Better rate. 🙌
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
