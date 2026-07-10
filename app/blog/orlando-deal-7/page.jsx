"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function OrlandoDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=1600&h=700&fit=crop&auto=format"
            alt="Orlando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Orlando</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Resort Scale vs. Suite Value
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $71 a night separates a massive Marriott resort from a spacious I-Drive suite. Here's the math.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            August 8th through the 16th — peak summer Orlando, and two very different ways to spend it. Orlando World Center Marriott is one of the largest hotels in the United States: 200 acres, a resort-scale pool complex with waterslides, and Disney on your doorstep at $176 a night. staySky Suites on International Drive gives you a full suite — real living space, a kitchen, I-Drive's entire entertainment corridor outside your door — at $105 a night.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            That's $71 a night. Over a week, that's nearly $500. Here's what you're trading.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Orlando World Center Marriott */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/16/orlandoworldcenter1.jpg"
              alt="Orlando World Center Marriott"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Orlando World Center Marriott — Go Big or Go Home
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$176 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Orlando World Center Marriott isn't a hotel — it's a destination. Spread across 200 acres near Walt Disney World, this is one of the largest hotels in the country with over 2,000 rooms and a resort infrastructure to match. The pool complex alone — with multiple pools, lazy river, and waterslides — is the kind of amenity that keeps families on property for an entire day. Add a golf course, multiple restaurants, a full spa, and everything you'd expect from a flagship Marriott, and you have a trip within a trip.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $176 a night during peak August, this is genuinely competitive pricing for what it delivers. You're near Disney, you have resort amenities that rival the parks themselves, and the Marriott name ensures the experience holds up. If the hotel is part of the vacation — not just a place to sleep — this is worth every dollar.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Families who want resort amenities, travelers near Disney, anyone who wants the hotel to be part of the experience.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando7_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Orlando World Center Marriott →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — staySky Suites I Drive Orlando */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/16/staysky1.jpg"
              alt="staySky Suites I Drive Orlando"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                staySky Suites I Drive Orlando — Suite Smart
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$105 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              International Drive is Orlando's entertainment backbone — restaurants, mini-golf, dinner shows, the Orlando Eye, shopping, and easy access to both Universal Studios and the convention center, all within walking distance or a short drive. staySky Suites puts you right in the middle of it at $105 a night in a full suite, not a standard room. Living space, kitchen facilities, and actual room to spread out make this one of the best value plays on the I-Drive corridor.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The $71 a night you save over the World Center Marriott adds up to nearly $500 over a week — that's a Universal Express Pass, a character dining experience at Disney, or simply more breathing room in your trip budget. If your days are spent at the parks and you want a comfortable, spacious base to come back to without paying resort prices, staySky delivers exactly that.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-smart travelers, I-Drive explorers, families who want suite space without resort pricing.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando7_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book staySky Suites I Drive Orlando →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Orlando World Center Marriott</strong> if the resort is part of the vacation — 200 acres, a waterslide pool complex, and Disney proximity at $176/night is a genuinely good deal for what you get.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>staySky Suites I Drive Orlando</strong> if the parks are the trip and you want a spacious, well-located suite at $105/night — and nearly $500 more in your pocket over a week.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando7_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Orlando World Center Marriott →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando7_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                staySky Suites I Drive →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Resort scale or suite value — $71 a night makes the call. 🏨
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
