"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function BaliDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/34/bali_destination.jpg" alt="Bali rice terraces Ubud" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Bali</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Ubud Jungle or North Bali's Secret Coast?
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $13 or $15 a night. Two sides of Bali that most visitors never discover.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            September 27th through the 30th — three nights in Bali as the seasons shift. This window brings two properties that represent the island's less-traveled side: Murni's House in Ubud, one of the most storied small hotels in all of Indonesia, and Central Lovina Hotel on Bali's quieter north coast, where the tourism playbook never really took hold.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            $15 or $13 a night. Three nights in Bali for under $50 total in accommodation. What's remarkable isn't just the price — it's the quality of experience that comes at that price. Murni's House is a legendary Ubud institution. Central Lovina sits on a coastline famous for its calm waters, dolphin encounters, and the absence of Kuta-style crowds. Both are the kind of finds that make you question why you ever paid more.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Ubud legend or north coast discovery. Both under $15 a night in September.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/34/murnishouse1.jpg" alt="Murni's House Ubud" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Murni's House — Ubud's Most Iconic Small Hotel at $15</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$15 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Murni's House is Ubud folklore. Founded by the woman who also created Murni's Warung — one of the longest-running and most beloved restaurants in all of Bali — this small guesthouse has been a reference point for travelers seeking authenticity in the island's cultural capital since before authentic Ubud became a marketing term. At $15 a night, staying here feels less like booking a room and more like being let in on a secret that generations of travelers have kept to themselves.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The property sits perched above a river gorge in the heart of Ubud — the rice terraces, the Monkey Forest, the galleries, and the temple ceremonies all within reach on foot. Three nights here costs $45. The experience it provides is worth multiples of that.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the real Ubud experience — staying at a legendary institution with genuine Balinese character for $15 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Murni's House →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/34/centrallovinahotel1.jpg" alt="Central Lovina Hotel" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Central Lovina Hotel — North Bali's Calm Coast at $13</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$13 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Lovina is the Bali that exists when you drive two hours north and leave the tourist infrastructure behind. A stretch of black-sand beach with calm, protected waters, Lovina is famous for its morning dolphin encounters — small boats heading out before sunrise to watch wild dolphins leap in the waters off the coast. Central Lovina Hotel is the clean, well-run base for all of it, at $13 a night in a location that most visitors to Bali never reach.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Three nights in Lovina costs $39. Add the dolphin boat trip, a visit to the Sekumpul waterfall, and a day at the Gitgit cascades and you have a Bali trip that costs almost nothing and delivers the island most tourists miss entirely. This is the counter-programming play — and it's spectacular.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the off-the-beaten-path Bali — dolphin encounters, black-sand beaches, waterfall hikes, and $13 a night for three nights on the north coast.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Central Lovina Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Murni's House</strong> for the definitive Ubud experience — a legendary institution at $15 a night with genuine Balinese character above a river gorge in the island's cultural heart.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Central Lovina Hotel</strong> for north Bali's secret coast — dolphin encounters, black-sand beaches, and $13 a night in the version of the island the crowds haven't found.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Murni's House →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Central Lovina Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>North Bali, late September. The dolphins don't know it's a budget trip. 🐬</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
