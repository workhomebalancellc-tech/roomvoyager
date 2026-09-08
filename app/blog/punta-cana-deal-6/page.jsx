"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana resort pool and beach"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Tracadero vs. The Westin Puntacana.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Same Marriott Bonvoy points. $149 apart. Entry-level Marriott resort or the Westin upgrade.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Marriott's brand portfolio gives travelers a powerful tool: the ability to earn the same Bonvoy points at properties ranging from budget-friendly Tracadero to full-service Westin resorts. In Punta Cana, both brands have strong representations — and this week's deal puts them head to head for Feb 7–14. Same loyalty currency. Very different hotel experiences.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Tracadero Punta Cana comes in at $137 a night — a 9.0-rated resort with a full pool, spa, and Bonvoy loyalty integration in Punta Cana Village near the international airport. The Westin Puntacana Resort lands at $286 a night — a 9.0-rated full-service resort with the Westin's signature wellness positioning, superior amenities, and a setting that delivers the premium Caribbean experience the brand is known for. Same guest rating, $149 more per night. The question is what that $149 buys.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Bonvoy points either way. Tracadero value at $137 or Westin resort experience at $286. Same 9.0 rating. Different worlds.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=450&fit=crop&auto=format"
              alt="Tracadero Punta Cana"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Tracadero Punta Cana — Marriott Resort Quality at the Entry Level
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$137 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Tracadero Punta Cana delivers exactly what the brand promises: a reliable, well-run Marriott-family resort that earns Bonvoy points on every stay without requiring a flagship price tag. Located in Punta Cana Village adjacent to the international airport, it offers a full pool, spa, on-site dining, and the service consistency that has made Tracadero one of Marriott's most trusted mid-range brands globally. The 9.0 guest rating from over 1,000 reviews confirms it consistently delivers.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $137 a night for February 7–14, Tracadero is the smart Bonvoy play for travelers who want Marriott quality in Punta Cana without the Westin premium. The savings versus the Westin — $149 per night, over $1,000 for the full week — can fund a Saona Island day trip, a catamaran excursion, and some of the best seafood restaurants in the Bávaro area. Points on every night accelerate toward future Bonvoy rewards.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Bonvoy members who want Marriott reliability in Punta Cana at the best entry-level price — pool, spa, 9.0-rated, at $137 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta6_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Tracadero →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=450&fit=crop&auto=format"
              alt="The Westin Puntacana Resort"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Westin Puntacana Resort — The Full-Service Caribbean Westin Experience
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$286 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Westin Puntacana Resort brings the brand's signature wellness positioning to the Caribbean in full. The Westin is known for its Heavenly Bed program, sophisticated spa and fitness programming, and a resort experience that feels elevated at every touchpoint — from the quality of the pool areas to the caliber of the dining program. It's the kind of hotel where you feel the difference from check-in, not just in the room.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $286 a night — the same 9.0 guest rating as the Tracadero but at double the price — the Westin justifies its premium through a meaningfully elevated resort experience: better amenities, more sophisticated design, a stronger wellness program, and the overall feel of a property that targets travelers for whom the hotel experience itself is part of the vacation. Bonvoy points accrue at the premium rate. For the right traveler, this is the definitive Punta Cana Marriott experience.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Bonvoy members who want the full Westin resort experience — elevated amenities, the Heavenly Bed, and a premium Caribbean stay at $286 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta6_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Westin Puntacana →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Tracadero Punta Cana</strong> if you want Marriott Bonvoy quality in Punta Cana at the best value — 9.0 rating, pool and spa, $137 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Westin Puntacana Resort</strong> if you want the full Westin upgrade — elevated amenities, wellness focus, and the Heavenly Bed experience in a 9.0-rated Caribbean resort at $286 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Tracadero Sheraton →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                The Westin Puntacana →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Bonvoy points either way. Pick your Marriott level for February. 🌴
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
