"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=1600&h=700&fit=crop&auto=format"
            alt="Paris Bastille Day"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🇫🇷 Bastille Day · July 14</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Paris for Bastille Day
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              The budget pick vs. the splurge of a lifetime
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Bastille Day is Paris at its absolute peak. The Champs-Élysées fills with one of the world's great military parades, the Seine glows with open-air concerts, and when night falls, the Eiffel Tower erupts in fireworks that light up the entire city. If there's one week to be in Paris, this is it.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            We found two hotels that represent completely opposite ways to experience it — one that lets you spend your money on the city, and one that turns the whole week into a once-in-a-lifetime memory.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Budget */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "inline-block", background: "#DCFCE7", color: "#166534", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 10px", borderRadius: "6px", marginBottom: "16px" }}>
              💰 The Smart Pick
            </div>
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&h=500&fit=crop&auto=format"
              alt="Hotel Petit Vix"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Hotel Petit Vix — The Smart, Stylish Base
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For travelers who want to be in Paris for Bastille Day without spending their vacation budget on the room, Hotel Petit Vix is exactly what you're looking for. This boutique property brings together personality, comfort, and value in a city where all three are hard to find at once.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Staying here during Bastille Day is actually the right move. The real celebration happens in the streets, at the parks, along the riverbanks. You want a clean, comfortable place to come home to after hours of watching fireworks and wandering through illuminated neighborhoods — and Hotel Petit Vix delivers that without asking you to choose between your hotel bill and the experiences that make the trip worth taking.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-savvy travelers, solo adventurers, couples who want to stretch their trip longer, and anyone who knows the real Paris is in the streets — not the hotel room.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal2_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Petit Vix →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Luxury */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 10px", borderRadius: "6px", marginBottom: "16px" }}>
              ✨ The Splurge
            </div>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&h=500&fit=crop&auto=format"
              alt="Park Hyatt Paris-Vendôme"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Park Hyatt Paris-Vendôme — Bastille Day the Way It Was Meant to Be Experienced
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              There are hotels in Paris. And then there is the Park Hyatt Paris-Vendôme.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Tucked into 5 Rue de la Paix — steps from the gilded column of Place Vendôme and a short stroll from the Tuileries Garden — this is one of the most celebrated luxury hotels in the world. A grand Haussmann-era building transformed into a modern masterpiece without losing a single gram of Parisian grandeur. 153 rooms that have hosted heads of state and icons. A spa covering an entire floor. Restaurants that have drawn praise from every serious food critic who has walked through the door.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              On Bastille Day, the neighborhood around Place Vendôme and the Tuileries becomes one of the most extraordinary places to be in all of France. Street musicians play late into the warm July night, and the Eiffel Tower fireworks are visible from multiple vantage points within easy walking distance. When it's over, you walk back to one of the finest hotel rooms in Europe.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Honeymoons, milestone anniversaries, bucket-list trips, and anyone who has decided that this is the year to stop saving Paris for later.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal2_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(0,59,149,0.35)" }}
            >
              Book Park Hyatt Paris-Vendôme →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Both hotels put you in Paris during one of the greatest celebrations on earth. The decision comes down to one question: what kind of Bastille Day story do you want to tell when you get home?
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Petit Vix</strong> if you want to stretch your budget, stay longer, and spend your money on the city itself — the food, the day trips, the wine, the moments that Paris hands you when you're not rushing anywhere.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Park Hyatt Paris-Vendôme</strong> if this is the trip. If you've been waiting for the right reason to do Paris properly — Bastille Day is as right as it gets.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal2_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hotel Petit Vix →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal2_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Park Hyatt Paris-Vendôme →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Earn points. See Paris. Come home changed. 🗼
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
