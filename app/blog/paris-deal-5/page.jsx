"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&h=700&fit=crop&auto=format"
            alt="Paris"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deal of the Week · Bastille Day</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Bastille Day in Paris
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              Belleville's bohemian soul vs. the elegance of Avenue Foch
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            July 14th is Bastille Day — fireworks over the Eiffel Tower, the military parade down the Champs-Élysées, and Paris at its most unapologetically French. If you're going to be in the city for it, where you stay shapes the entire experience.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal gives you two very different answers. One hotel puts you in Belleville, where the real Paris lives. The other places you steps from Avenue Foch, one of the grandest addresses in the world. Same city. Same fireworks. Different Paris entirely.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Babel Belleville */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-5/babel1.jpg"
              alt="Babel Belleville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Babel Belleville — The Paris Locals Actually Live In
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$147 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Belleville isn't on most visitors' radar, which is exactly what makes it special. Tucked into the 20th arrondissement in eastern Paris, this is a neighborhood of street art, open-air markets, Vietnamese noodle shops, and rooftop bars with some of the best views in the city. It's where artists moved when the Marais got expensive, and where the city's most interesting food scene is happening right now.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Babel Belleville drops you right into the middle of it. From here, the Parc de Belleville gives you panoramic views over the whole city — including a front-row seat to the Bastille Day fireworks without the crowds of the Champ de Mars. The neighborhood hums with energy that feels genuinely Parisian rather than performed for tourists.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Repeat Paris visitors who've done the classics, food-obsessed travelers, anyone who wants to feel like a local rather than a tourist.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal5_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Babel Belleville →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Hotel Residence Foch */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-5/foch1.jpg"
              alt="Hotel Residence Foch"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Residence Foch — Grand Paris, Right at the Arc de Triomphe
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$196 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Avenue Foch is one of the twelve grand boulevards that radiate from the Arc de Triomphe — and it might be the most beautiful of them all. Wide, tree-lined, flanked by Haussmann mansions, it's the Paris you imagined before you ever visited. Hotel Residence Foch puts you right on it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              On Bastille Day, this location is unbeatable. The military parade runs directly down the Champs-Élysées, which is a short walk away. The Arc de Triomphe is minutes on foot. The Eiffel Tower fireworks are easily reachable by metro or on foot along the Seine. You're at the epicenter of everything July 14th has to offer — and at $196 a night, that address is worth every euro.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> First-timers wanting the full Paris experience, couples celebrating something special, anyone who wants to watch the Bastille Day parade and then walk back to their hotel.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal5_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Residence Foch →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Babel Belleville</strong> if you want the Paris that Parisians love — creative, multicultural, full of great food, and completely authentic. The fireworks view from Belleville Park is a hidden gem most tourists never find.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hotel Residence Foch</strong> if you want the grand Bastille Day experience — parade on the Champs-Élysées, Arc de Triomphe steps away, and the kind of Parisian elegance that makes the whole trip feel cinematic.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal5_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Babel Belleville →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal5_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hotel Residence Foch →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Earn points. See Paris. Happy Bastille Day. 🗼
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
