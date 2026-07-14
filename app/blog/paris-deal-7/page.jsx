"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&h=700&fit=crop&auto=format"
            alt="Paris"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              One Night in Paris
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              Bastille Day on a budget — two great hotels, one unforgettable night
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            July 13th into July 14th — Bastille Day eve straight into the big day itself. One night in Paris, fireworks over the Eiffel Tower, the city electric with celebration. You don't need a week to feel it. Sometimes one perfect night is enough.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is for the smart traveler. Two well-located Paris hotels at prices that leave you with real money for the dinners, the wine, and the late-night wandering that make Bastille Day worth the trip.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Hotel Clauzel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-7/hotelclauzel1.jpg"
              alt="Hotel Clauzel"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Clauzel — Unbeatable Value in the 9th
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$85 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $85 a night, Hotel Clauzel is the kind of Paris find that makes you feel like you've cracked the code. Tucked into the 9th arrondissement, you're in one of the city's most livable neighborhoods — close to South Pigalle's wine bars and restaurants, a short walk from the grands boulevards, and well-connected to everything Bastille Day has to offer. The Opéra Garnier is nearby, the Champs-Élysées parade is a metro ride away.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The math works out beautifully here. One night at $85 means the rest of your budget goes straight into the experience — a proper French dinner, a bottle of Burgundy, a late-night walk along the Seine after the fireworks. That's the Paris trip people remember.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-savvy travelers, solo visitors, anyone who wants to spend their money on Paris itself rather than the room.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal7_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Clauzel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Hôtel Atlas */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-7/hotelatlas1.jpg"
              alt="Hôtel Atlas"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hôtel Atlas — A Step Up for Bastille Day
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$133 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hôtel Atlas steps it up without breaking the bank. At $133 for the night, you're getting more comfort, more character, and still a price that leaves the evening's budget intact. This is the sweet spot between budget and boutique — the kind of hotel where the room is actually part of the experience rather than just a place to sleep.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For a one-night Bastille Day stay, Hôtel Atlas hits right. You're celebrating something — the fireworks, the city, the fact that you're actually in Paris on July 14th. A room that feels considered makes the whole night feel more like an occasion. Come back after the celebrations, and the hotel earns its keep.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples, travelers who want comfort without luxury prices, anyone making a long weekend of it.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal7_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hôtel Atlas →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Clauzel</strong> if $85 sounds like a win and you'd rather spend the savings on a great Bastille Day dinner and a bottle of wine on the Seine.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hôtel Atlas</strong> if you want the room to feel like part of the celebration — a step up in comfort for not a lot more money on one of Paris's best nights of the year.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal7_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hotel Clauzel →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal7_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hôtel Atlas →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              One night. Two great hotels. Joyeux Bastille Day. 🗼
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
