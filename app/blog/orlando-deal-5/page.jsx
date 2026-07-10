"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function OrlandoDeal5Blog() {
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
              Same Family. Two Different Orlandos.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both Marriott. $14 apart. Completely different sides of the city.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            August 13th through the 21st — and this week Marriott is competing against itself. Element by Marriott sits near Universal, designed for travelers who want more than a standard room. Aloft by Marriott puts you in Downtown Orlando, in the heart of the city's arts and nightlife scene. Both carry the Marriott name. Both deliver well. The $14 difference almost isn't the point — the real question is which Orlando you're actually going to.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Parks crowd or city crowd. Extended-stay comfort or boutique energy. Here's the breakdown.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Element by Marriott Orlando */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/14/elementbymarriottorlando1.jpg"
              alt="Element by Marriott Orlando"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Element by Marriott Orlando — Room to Breathe
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$163 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Element is Marriott's extended-stay brand, and it shows in all the right ways. Think full kitchenettes, more living space than a standard hotel room, and a design that actually accounts for the fact that you might be here more than two nights. Near Universal Studios and the International Drive corridor, you're well-positioned for the parks without being locked into the tourist bubble when you don't want to be.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $163 a night, Element is the slightly pricier option — but you're getting more room for your money. If you're staying a week, want a kitchen to cut down on restaurant spending, or just want space to actually unpack and settle in, this is the smarter long-game choice. The $14 premium disappears quickly when you're making breakfast in your room instead of paying Orlando resort prices for eggs.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Longer stays, families who want kitchen facilities, travelers near Universal who want more living space.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando5_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Element by Marriott Orlando →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Aloft by Marriott Orlando Downtown */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/14/Aloftbymarriottorlando1.jpg"
              alt="Aloft by Marriott Orlando Downtown"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Aloft by Marriott Orlando Downtown — City Energy
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$149 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Aloft is Marriott's answer to the boutique hotel crowd — design-forward, lively, and built around the vibe of the neighborhood it's in. Downtown Orlando is a different city from the theme park corridor: the Dr. Phillips Center for the Performing Arts, Lake Eola Park, the restaurant and bar scene that locals actually go to. If your August trip is more about the city than the parks, Aloft Downtown plants you right in the middle of it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $149 a night — $14 less than Element — Aloft is the value play in this matchup and the better address if Downtown is where you want to be. The WXYZ Bar, the loft-style rooms, the walkability to Orlando's best neighborhoods: this is the hotel for the traveler who wants Orlando beyond the tourist trail.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> City explorers, couples, anyone who wants nightlife, dining, and arts over theme parks.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando5_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Aloft by Marriott Orlando Downtown →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Element by Marriott Orlando</strong> if you're staying a while and want the kitchen, the space, and Universal Blvd proximity. The $14 extra pays for itself fast.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Aloft by Marriott Orlando Downtown</strong> if the city is the plan — walkable, design-forward, $149 a night, and right in the Orlando that locals actually love.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando5_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Element by Marriott →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando5_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Aloft Orlando Downtown →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Same family. Two different Orlandos. 🏙️
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
