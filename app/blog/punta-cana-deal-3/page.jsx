"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana luxury beach"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Boutique B&B vs. Punta Cana's Most Exclusive Hotel.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $43 or $1,600 a night. The full spectrum of Punta Cana hospitality in one deal.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Punta Cana contains multitudes. At one end, you have intimate guest houses and B&Bs that feel a world away from the resort strip — personal, quiet, breakfast waiting for you each morning. At the other, you have properties so exclusive that the address itself is a statement. This week's deal spans the entire range.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            MANAYA Bed & Breakfast comes in at $43 a night — an exceptional little B&B with a 9.4 guest rating, a pool, and daily breakfast included. It's one of Punta Cana's highest-rated small properties and proof that intimate and well-run doesn't require a luxury resort price tag. Tortuga Bay Hotel, on the other end, lands at $1,600 a night — a private beachfront enclave with a 9.8 guest rating, three restaurants, and a VIP Access designation on Expedia. It's the finest hotel in all of Punta Cana by a wide margin, and the price reflects it.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Breakfast included intimacy at $43 or Punta Cana's 9.8-rated beachfront pinnacle at $1,600. The full spectrum.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=450&fit=crop&auto=format"
              alt="MANAYA Bed and Breakfast Punta Cana"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                MANAYA Bed & Breakfast — 9.4-Rated Boutique with Breakfast and Pool
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$43 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              MANAYA Bed & Breakfast is a standout in Punta Cana's small-property market. With a 9.4 guest rating from 61 reviews and a price point of $43 a night, it offers daily breakfast, a pool, and the kind of personal service that large resorts structurally cannot deliver. The B&B is a 15-minute drive from Bávaro Beach with housekeeping included — everything you need for a comfortable Caribbean stay, wrapped in a genuinely intimate package.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Seven nights at MANAYA totals approximately $301 — breakfast included, pool access, and a 9.4-rated experience for the price of a single night at some mid-range resorts. For travelers who value atmosphere and genuine hospitality over square footage of pool deck, MANAYA is one of the best values in all of Punta Cana.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want an intimate, well-run boutique stay — breakfast every morning, a pool, and a 9.4 guest rating at just $43 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta3_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book MANAYA Bed & Breakfast →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=450&fit=crop&auto=format"
              alt="Tortuga Bay Hotel Punta Cana"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Tortuga Bay Hotel — Punta Cana's Most Exclusive Beachfront Address
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$1,600 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Tortuga Bay Hotel is Punta Cana's benchmark of exclusivity. A private beachfront enclave designed by Oscar de la Renta, it delivers a collection of villa-style accommodations steps from the Caribbean Sea with three restaurants, a world-class spa, and the kind of personalized service that turns a vacation into something genuinely memorable. Its 9.8 guest rating from 122 reviews makes it one of the highest-rated hotels in the Dominican Republic — and the VIP Access designation on Expedia reflects its standing.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $1,600 a night — over $11,000 for the full seven nights — Tortuga Bay is unambiguously a once-in-a-lifetime choice for most travelers. But for those for whom budget is truly secondary to experience, there is nowhere in Punta Cana that touches it. The February timing brings perfect beach weather, thinner crowds than peak December, and the full Caribbean winter that Tortuga Bay was designed to deliver at its finest.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers for whom Punta Cana's finest address is the goal — a 9.8-rated Oscar de la Renta–designed beachfront enclave where nothing is left to chance.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta3_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Tortuga Bay Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>MANAYA Bed & Breakfast</strong> if you want intimate boutique quality with breakfast included — a 9.4-rated Punta Cana gem at just $43 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Tortuga Bay Hotel</strong> if you want Punta Cana's finest address — a 9.8-rated beachfront enclave designed by Oscar de la Renta where the experience matches every penny of the $1,600-a-night price tag.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                MANAYA B&B →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Tortuga Bay Hotel →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              $43 or $1,600. Punta Cana has room for both. 🌴
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
