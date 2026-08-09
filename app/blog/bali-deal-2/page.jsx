"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function BaliDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/32/bali_destination.jpg" alt="Bali Ubud jungle" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Bali</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Ubud Jungle or Sanur Seaside?
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two of Bali's most beloved neighborhoods, two very different energies, September at its best.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            September 18th through the 21st — three nights at the tail end of Bali's dry season. The light is extraordinary at this time of year: golden afternoons, dramatic cloud formations, and mornings that justify every alarm you set. This window sits right before the rains arrive, and the island knows it — the energy peaks in September in a way that's hard to find any other time.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal puts two of Bali's most distinct neighborhoods side by side. MATHIS Retreat Ubud takes you into the jungle at $98 a night — a genuine retreat experience in the cultural heart of the island. Taksu Sanur Hotel is the quieter, coastal alternative at $49 a night — Sanur's calm beach, Dutch colonial character, and a pace that feels like the real Bali rather than the tourist one.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Rice terraces or the calm coast. Ubud or Sanur — September Bali is perfect either way.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/32/mathisretreatubud1.jpg" alt="MATHIS Retreat Ubud" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>MATHIS Retreat Ubud — Into the Jungle</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$98 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              MATHIS Retreat Ubud is what Bali is supposed to feel like — surrounded by jungle, rice terraces visible from the property, and a stillness that makes the rest of the world seem very far away. Ubud is Bali's cultural and spiritual center: the art galleries, the cooking classes, the Monkey Forest, the Tegallalang terraces, and the best cuisine on the island are all here. A retreat property in Ubud at $98 a night is the kind of stay that changes how you think about travel.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Three nights at MATHIS gives you enough time to actually slow down — a yoga class in the morning, a cooking class in the afternoon, a sunset rice terrace walk before dinner. September in Ubud is the dream version of the trip: dry, clear, and full of the kind of light that makes every photo look edited.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the full Ubud experience — jungle surroundings, cultural immersion, and a genuine retreat feel at $98 a night in Bali's most soul-restoring neighborhood.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book MATHIS Retreat Ubud →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/32/taksusanur1.jpg" alt="Taksu Sanur Hotel" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Taksu Sanur Hotel — The Calm Side of Bali</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$49 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sanur is the Bali that existed before the crowds arrived — a quiet beach town on the eastern coast with calm waters protected by a reef, a beachfront promenade lined with warung restaurants, and a pace that feels authentically local. Taksu Sanur Hotel brings boutique character to this address at $49 a night: well-designed, well-run, and positioned on one of the most pleasant stretches of Bali's coastline. Sanur is also the gateway to Nusa Penida — a short fast-boat ride away.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $49 a night — half the price of MATHIS Ubud — Taksu Sanur delivers a genuinely different version of Bali. Three nights here means sunrise beach walks, fresh seafood dinners, day trips to Nusa Penida, and the kind of easy, unhurried rhythm that the rest of the island sometimes forgets it used to have.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Bali without the crowds — Sanur's calm beach, local character, and a boutique hotel at $49 a night with easy access to Nusa Penida.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Taksu Sanur Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>MATHIS Retreat Ubud</strong> if this trip is about cultural immersion and slowing down — jungle surroundings, rice terraces, and the best food in Bali at $98 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Taksu Sanur Hotel</strong> if you want the calm, local side of Bali — a quiet beach town at $49 a night with easy access to Nusa Penida and none of the tourist chaos.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>MATHIS Retreat Ubud →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Taksu Sanur Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>September in Bali. The island at its absolute best. 🌿</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
