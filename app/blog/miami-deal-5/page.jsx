"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/42/miami_destination.jpg"
            alt="Miami Design District"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Design District Style Under $100.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Miami's most creative neighborhood, priced right for a Halloween weekend stay.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            October 28th through the 31st in Miami — Halloween weekend — is one of those trips that plans itself. The city goes all in on the occasion: South Beach parties, Wynwood block events, Design District installations, and an energy that makes a four-night October stay feel completely different from any other time of year.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal keeps the budget firmly in check with two well-positioned Miami hotels both under $100 a night. Atrium Design District brings Art Deco character to the edge of one of Miami's most exciting neighborhoods at $93 a night. Jefferson Hotel comes in even lower at $72 a night — a classic Miami property that delivers comfort and location without the boutique markup. Same great Halloween weekend, $21 a night apart.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Design District energy, Halloween weekend, and both under $100. Easy decision.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Atrium Design District */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/42/atriumdesign1.jpg"
              alt="Atrium Design District Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Atrium Design District — Where Art Deco Meets Miami's Creative Core
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$93 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Atrium Design District puts you at the edge of one of Miami's most dynamic neighborhoods — a short walk from the luxury shops, galleries, and restaurants that have made the Design District a destination in its own right. The property brings Art Deco character to the address, with the kind of personality that fits right in with the neighborhood's design-conscious energy. Wynwood is minutes away, Brickell is a straight shot south, and the whole city is accessible from here.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $93 a night for Halloween weekend, Atrium Design District is the kind of find that makes Miami feel genuinely affordable. Four nights for around $372 in one of the city's most coveted neighborhoods — while the city celebrates around you — is a deal that's hard to argue with.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to be in Miami's most creative neighborhood — Art Deco character, walkable to the Design District and Wynwood, under $100 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami5_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Atrium Design District →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Jefferson Hotel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/42/jefferson1.jpg"
              alt="Jefferson Hotel Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Jefferson Hotel — Classic Miami at a Price That Makes Sense
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$72 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Jefferson Hotel is a Miami classic — a well-run property with a loyal following that delivers comfort and location without the boutique premium. At $72 a night, four nights over Halloween weekend totals around $288. That's a Miami trip that leaves room for everything: the parties, the restaurants, the beach days, and whatever else the city decides to throw at you for Halloween. The Jefferson keeps it straightforward and does it well.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For travelers who prioritize experience over accommodation — who want to spend Halloween weekend in Miami rather than at the hotel — the Jefferson is the play that makes the budget work. $72 a night in this city, at this time of year, is genuinely hard to beat.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a comfortable Miami base at the lowest sensible price — $72 a night frees up the budget for what Halloween weekend in Miami is actually about.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami5_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Jefferson Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Atrium Design District</strong> if you want neighborhood character with your budget stay — Art Deco personality, steps from the Design District and Wynwood, at $93 a night that still feels like a deal.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Jefferson Hotel</strong> if keeping the trip budget as low as possible is the priority — $72 a night for a reliable, comfortable Miami base that leaves Halloween weekend wide open.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Atrium Design District →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Jefferson Hotel →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Halloween in Miami. There's nowhere better. 🎃
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
