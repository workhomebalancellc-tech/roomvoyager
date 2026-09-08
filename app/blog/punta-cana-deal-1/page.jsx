"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana beach"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Local Budget Hotel vs. Marriott Resort.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $27 or $137 a night. Seven nights in the Dominican Republic this February.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            February is one of the best months to visit Punta Cana. The Caribbean weather is at its most reliable — warm, dry, and sunny — while the peak Christmas crowds have long since returned home. Flights are cheaper than December, hotel rates are more reasonable, and the beaches feel genuinely relaxed. It's the Dominican Republic operating at its most effortless.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal covers the full seven-night stretch from Feb 7–14 and puts two very different experiences on the table. Hotel Marimba Punta Cana is the budget option at $27 a night — a local hotel in the Bávaro area with a bar, restaurant, and spa services that gets you to the Dominican Republic for the lowest possible cost. Four Points by Sheraton Puntacana comes in at $137 a night — a proper Marriott-brand resort with a full pool, spa, and a 9.0 guest rating that puts it among the most consistently well-reviewed options in this price range. The gap is $110 a night.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Local budget simplicity or Marriott resort reliability. Seven nights in Punta Cana, two very different ways in.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=450&fit=crop&auto=format"
              alt="Hotel Marimba Punta Cana"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Marimba Punta Cana — The Most Affordable Way In
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$27 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hotel Marimba Punta Cana is a local hotel in the Bávaro neighborhood — one of the primary areas where Punta Cana's beach resort corridor runs. At $27 a night, it offers bar service, a restaurant, and spa services at a price point that puts a full week in the Dominican Republic within reach of almost any travel budget. Seven nights here totals just $189 — leaving significant room to spend on excursions, beach clubs, and dining at some of Punta Cana's excellent restaurants.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              This is the no-frills Punta Cana play. You're here for the destination — the beaches, the water sports, the excursions to Saona Island and the cenotes — not the hotel room itself. At $27 a night, Marimba gets you to the Dominican Republic and keeps your money where it actually makes a difference: in the experiences the country offers.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-maximizing travelers who want to get to Punta Cana for the lowest possible cost — spend the savings on excursions, beach clubs, and local food instead.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta1_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Marimba →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=450&fit=crop&auto=format"
              alt="Four Points by Sheraton Puntacana"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Four Points by Sheraton Puntacana — Marriott Resort Standards at the Entry Level
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$137 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Four Points by Sheraton Puntacana is where Marriott's resort standards meet an accessible price point. Located in Punta Cana Village — a planned community developed by the Puntacana Group — it sits adjacent to the Punta Cana International Airport and offers a full resort experience: a proper pool, spa, on-site dining, and the Marriott Bonvoy loyalty program that earns points toward future stays worldwide. The 9.0 guest rating from over 1,000 reviews speaks to consistent, reliable quality.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $137 a night — $959 total for seven nights before taxes — the Four Points is the smart choice for travelers who want a real resort experience without committing to all-inclusive rates. You get Marriott quality, pool access, and brand-level service while still having the freedom to eat and drink at Punta Cana's incredible spread of restaurants and beach clubs. Bonvoy points on top of that make every night count toward the next trip.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Marriott Bonvoy reliability and a true resort experience in Punta Cana — without the all-inclusive price tag — at $137 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta1_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Four Points by Sheraton →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Marimba</strong> if your priority is getting to Punta Cana for the lowest possible cost — $27 a night buys a real Caribbean week with plenty left over for the experiences that matter.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Four Points by Sheraton Puntacana</strong> if you want the genuine Marriott resort experience — 9.0 rating, Bonvoy points, full pool and spa, at $137 a night for February 7–14.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hotel Marimba →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Four Points by Sheraton →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              February in Punta Cana. Sun, sand, and two smart ways to book it. 🌴
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
