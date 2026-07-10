"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDeal6Blog() {
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
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deal of the Week · Bastille Day Weekend</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Bastille Day Weekend in Paris
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              Budget brilliance near Lafayette vs. boutique charm in the heart of the city
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            July 13–16 is the Bastille Day long weekend — three nights to experience Paris at its most festive. The fireworks, the parade, the café terraces spilling onto sidewalks, the whole city celebrating together. The only question is where to plant your flag.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is a $100-a-night choice. Hotel Albert 1er gives you a sharp, well-located base near Galeries Lafayette without breaking the bank. Hôtel Pastel Paris gives you the boutique experience — design-forward, intimate, worth the splurge if the weekend calls for it.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Hotel Albert 1er */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-6/hotelalbert1er1.jpg"
              alt="Hotel Albert 1er Paris Lafayette"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Albert 1er — Smart Base, Unbeatable Price
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$110 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The 9th arrondissement is one of Paris's most underrated neighborhoods, and Hotel Albert 1er puts you right in the middle of it. You're steps from Galeries Lafayette — one of the world's great department stores — and a short walk to the Opéra Garnier, one of the most spectacular buildings in Europe. The Grands Boulevards, packed with brasseries and street energy, are right outside the door.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For the Bastille Day weekend, location matters as much as the room. From here, the Champs-Élysées parade is a short metro ride, the Seine is easily reachable for fireworks viewing, and you're connected to every corner of the city. At $110 a night for three nights, you've got real budget left over for the dinners, the museum tickets, and the Seine river cruise you've been thinking about.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-conscious travelers who want a prime location, shoppers, first-timers who want to stretch their trip budget further.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal6_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Albert 1er →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Hôtel Pastel Paris */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-6/hotelpastelparis1.jpg"
              alt="Hôtel Pastel Paris"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hôtel Pastel Paris — Boutique Paris Done Right
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$210 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              There's a category of Paris hotel that's neither grand palace nor budget chain — it's the intimate boutique, where every detail has been considered and the experience feels personal rather than transactional. Hôtel Pastel Paris is squarely in that category. Design-forward, thoughtfully decorated, the kind of place you actually want to come back to after a long day walking the city.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Bastille Day weekend is exactly the kind of trip that earns a splurge. You're already flying to Paris, you're already there for one of the most iconic national celebrations in the world. The extra $100 a night buys you a room you'll actually remember, a lobby that feels like it belongs in a magazine, and the quiet satisfaction of getting the hotel right.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples celebrating, design lovers, travelers who treat the hotel as part of the experience rather than just a place to sleep.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal6_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hôtel Pastel Paris →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Albert 1er</strong> if you want a smart, well-connected base for the long weekend without the hefty price tag — and plan to spend that extra $100 on experiences instead of the room.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hôtel Pastel Paris</strong> if this trip deserves the boutique treatment — the kind of hotel that makes the whole Bastille Day weekend feel like an occasion.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal6_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hotel Albert 1er →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal6_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hôtel Pastel Paris →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Book smart. See Paris. Joyeux 14 Juillet. 🗼
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
