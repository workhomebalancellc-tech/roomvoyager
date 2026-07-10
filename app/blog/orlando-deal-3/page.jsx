"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function OrlandoDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=1600&h=700&fit=crop&auto=format"
            alt="Luxury resort Orlando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✨ Luxury Deal · Orlando</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              The New Luxury vs. The Gold Standard
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              When only the best will do — which Orlando luxury resort is actually worth it?
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            August 20th through the 22nd — this is the luxury edition. Two nights, two world-class resorts, and a $262-a-night gap that flips everything you'd expect. The Ritz-Carlton Orlando, Grande Lakes comes in at $387 a night. Evermore Orlando Resort — the newer, splashier contender — runs $649. The name you know costs less. The name you're still learning about costs more. So what's the deal?
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week we break down both: the timeless Ritz experience versus the all-out resort world that Evermore is building from scratch. One delivers the polish of a century-old brand. The other delivers something you genuinely can't find anywhere else in Orlando.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Evermore Orlando Resort */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/orlando-deal-3/Evermoreorlando1.jpg"
              alt="Evermore Orlando Resort"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Evermore Orlando Resort — The New Standard
              </h2>
              <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$649 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Evermore is what happens when someone decides to build a resort from the ground up with no compromises. A 20-acre crystalline lagoon with white sand beaches. A water park. Private cabanas. Hundreds of acres of resort community built specifically to be the most complete Orlando experience outside the theme parks themselves. This isn't a hotel with a pool — it's a destination within a destination.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The $649-a-night price tag reflects all of that. For two nights in August you're spending $1,298 on the room alone — and the honest pitch is that at Evermore, the resort itself is the attraction. If you're the kind of traveler who wants to spend a full day at the lagoon, never leave the property, and experience something genuinely new, this is the move. The premium is real, and so is the experience.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the resort to be the experience — beach days, water parks, and luxury amenities without leaving the property.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando3_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Evermore Orlando Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — The Ritz-Carlton Orlando */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/orlando-deal-3/theritzcarltonorlando1.jpg"
              alt="The Ritz-Carlton Orlando Grande Lakes"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Ritz-Carlton Orlando, Grande Lakes — The Gold Standard
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$387 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Ritz-Carlton doesn't need to introduce itself. What it does at Grande Lakes in Orlando is deliver the full Ritz experience — impeccable service, a world-class spa, championship golf, fine dining, and the kind of quiet, refined luxury that the brand has spent over a century perfecting. On 500 acres of lush Central Florida landscape, you're removed from the noise of the tourist corridor while remaining close to everything.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Here's the twist: at $387 a night, the Ritz-Carlton Orlando is actually the more affordable option in this week's deal. That's $524 less than Evermore over two nights — which, at the Ritz, could mean a spa day, a tee time, or a dinner at Norman's that you'll still be talking about on the flight home. The brand delivers. The price, in this case, is the bargain.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples, golfers, spa seekers, and anyone who wants timeless luxury with service that justifies every dollar.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando3_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Ritz-Carlton Orlando →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Evermore Orlando Resort</strong> if you want the resort to be the destination — the lagoon, the beach, the water park, the full experience without leaving the property. At $649 a night, you're paying for something genuinely new in Orlando.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Ritz-Carlton Orlando, Grande Lakes</strong> if you want the gold standard of luxury at the more reasonable rate — $387 a night for service, refinement, and a brand that has never let anyone down.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando3_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Evermore Orlando Resort →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando3_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                The Ritz-Carlton Orlando →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              When only the best will do — choose wisely. ✨
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
