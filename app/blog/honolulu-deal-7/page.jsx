"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/58/honolulu_destination.jpg" alt="Waikiki boutique hotels" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              New Year's in Waikiki. Surf Culture vs. Retro Cool.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              The Surfjack or The Laylow. Five nights. New Year's Eve on the most famous beach in America.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 26th through the 31st — five nights in Honolulu, ending on New Year's Eve in Waikiki. This is the wild card deal: two of the most distinctive boutique hotels in Hawaii, both rated 9.0 on Expedia, both with personalities that no chain resort can replicate. The Surfjack Hotel & Swim Club and The Laylow Waikiki are the answer to the question of what Waikiki hotels look like when they stop trying to be everything and commit to being something specific.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            The Surfjack at $534 a night is the surf-culture play — a 9.0-rated boutique on Lewers Street known for its top-rated pool, poolside bar, and the kind of easy, genuine island energy that larger resorts spend millions trying to manufacture. The Laylow at $664 a night goes full retro-Hawaii: a 4-star Autograph Collection property steps from the beach with live music nightly at Hideout, free cruiser bikes, refreshing shaved ice at the tropical pool, and surfing lessons and dolphin swims arranged from the lobby desk. New Year's Eve fireworks over Waikiki are an eight-minute walk from the Surfjack and right at the doorstep of the Laylow. The gap is $130 a night — $648 over five nights.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $534 or $664. Both rated 9.0. New Year's Eve in Waikiki — two boutiques that actually have a point of view.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/58/surfjackhotel1.jpg" alt="The Surfjack Hotel and Swim Club Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Surfjack Hotel & Swim Club — Island Creative at $534</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$534 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Surfjack Hotel & Swim Club sits at 412 Lewers Street — rated 9.0 out of 10 from over 1,000 Expedia guests, with Expedia highlighting it as "loved by couples" and featuring a "top-rated pool" that consistently draws the best reviews of any pool scene in this part of Waikiki. The poolside bar keeps the energy going through the afternoon. The on-site American restaurant, balconies, and free WiFi round out a property that over-delivers for its 3.5-star classification.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Five nights at $534 totals $2,671. The International Market Place and Royal Hawaiian Center are five minutes away, Waikiki Beach is eight minutes on foot, and the airport is sixteen minutes by car. For New Year's week, the Surfjack's pool and bar become the center of the celebration — the kind of intimate, personality-driven property where the staff knows your name by day two and the other guests become part of the trip.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples and travelers who want a 9.0-rated boutique with genuine surf-culture personality — top-rated pool, poolside bar, and New Year's Eve in a hotel that actually has character at $534 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Surfjack Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/58/laylowwaikiki1.jpg" alt="The Laylow Autograph Collection Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Laylow Waikiki, Autograph Collection — Retro Hawaii at $664</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$664 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Laylow Waikiki is a 4-star Autograph Collection property classified by Expedia as "Luxury" — steps from Waikiki Beach, with vibrant live music filling Hideout (the hotel's restaurant and bar) every night, a tropical pool area serving refreshing shaved ice, free cruiser bikes for shoreline exploration, and a lobby desk that arranges surfing lessons and dolphin swims. The mid-century Hawaiian aesthetic carries through every detail: the lobby lounge, the bungalow-style rooms with king beds and dual balconies, the fire-lit outdoor terrace.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Five nights at $664 totals $3,319. New Year's Eve at the Laylow means Hideout's live music, the tropical pool, and fireworks over Waikiki Beach a short walk away. The Laylow's Autograph Collection status puts it in Marriott's portfolio of independent hotels with distinct identities — same loyalty points, completely different experience from any other Marriott property on the island.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the most design-forward luxury boutique in Waikiki — live music nightly, free cruiser bikes, steps from the beach, and New Year's Eve ambiance that feels curated at $664 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Laylow →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Surfjack Hotel & Swim Club</strong> for surf-culture personality and the top-rated pool scene in this part of Waikiki — 9.0-rated, poolside bar, $534 a night, and $648 saved over five nights versus the Laylow.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Laylow Waikiki</strong> for 4-star Autograph Collection luxury with live music every night, steps-from-the-beach positioning, free cruiser bikes, and New Year's Eve at one of the most talked-about boutique hotels in Hawaii at $664 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Surfjack Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Laylow →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>New Year's Eve in Waikiki. Fireworks over the Pacific. Make it count. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
