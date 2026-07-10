"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function OrlandoDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=1600&h=700&fit=crop&auto=format"
            alt="Walt Disney World Orlando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🏰 Disney Deals · Orlando</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Same Disney Perks. Very Different Price.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both are official Disney World hotels. So what does the extra $89 a night actually buy you?
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            August 27th through the 29th — and this week's deal asks a question that matters if you're doing Disney right. Both the Walt Disney World Swan Reserve and the Signia by Hilton Orlando are official Disney World hotels. That means both get you Early Theme Park Entry, Disney transportation, and the full on-property experience. The difference is $89 a night — $178 over two nights.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            So the real question isn't which hotel is on Disney property. They both are. The question is what you get for the upgrade — and whether it's worth it for a late August weekend.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Walt Disney World Swan Reserve */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/orlando-deal-4/swanreserve1.jpg"
              alt="Walt Disney World Swan Reserve"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Walt Disney World Swan Reserve — The Smart Disney Stay
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$233 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Walt Disney World Swan Reserve sits on Disney property, steps from EPCOT and Hollywood Studios, and delivers everything that matters for a Disney trip — Early Theme Park Entry, Disney's Magical Express transportation, and the kind of modern luxury that the Swan & Dolphin complex has quietly perfected over decades. At 20 stories with a massive pool complex, this is a serious hotel that happens to also be the smarter value in this week's matchup.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $233 a night, you're getting the full official Disney hotel experience for $89 less per night than the Signia. Over two nights, that's $178 back in your pocket — which, at Disney, is real money. Every perk that matters, every morning advantage at the parks, and $178 more for everything else.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Disney families who want every on-property perk while keeping the budget where it belongs — in the parks.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando4_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Walt Disney World Swan Reserve →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Signia by Hilton Orlando */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/orlando-deal-4/signia1.jpg"
              alt="Signia by Hilton Orlando"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Signia by Hilton Orlando — Disney's Premium Address
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$322 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Signia is Hilton's premium convention and resort brand, and its Orlando location is an official Walt Disney World hotel — which means all the same Disney perks as the Swan Reserve, plus a step up in scale and amenities. Multiple pools, upscale dining, a spa, and the kind of resort feel that makes a late-August weekend feel like a genuine getaway rather than just a base camp for the parks.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $322 a night, the $89 premium over the Swan Reserve buys you the Signia's broader resort experience — more dining options, more pool space, more of everything. If your August 27th weekend is as much about the hotel as it is the parks, and you want the Disney magic to follow you back to the room, this is where you go.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a full resort experience alongside Disney access — multiple pools, upscale dining, and a stay that feels as good as the parks.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando4_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Signia by Hilton Orlando →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Walt Disney World Swan Reserve</strong> if you want every Disney perk at the smarter price — $233/night, Early Theme Park Entry, on-property transportation, and $178 more to spend in the parks over two nights.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Signia by Hilton Orlando</strong> if you want the full resort upgrade — more pools, more dining, more amenities — alongside every official Disney World benefit, at $322/night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando4_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Walt Disney World Swan Reserve →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando4_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Signia by Hilton Orlando →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Same Disney magic. You decide how much to spend on the pillow. 🏰
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
