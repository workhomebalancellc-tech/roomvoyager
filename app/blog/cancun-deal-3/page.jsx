"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function CancunDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1600&h=700&fit=crop&auto=format"
            alt="Cancún beach at sunset"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Cancún</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Turn It Up or Tune It All Out.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two adults-only resorts. Completely opposite definitions of a perfect Valentine's week.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            The week before Christmas in Cancún — December 18th through the 21st — is a sweet spot most travelers overlook. The full holiday crowds haven't descended yet, but the festive energy is already in the air and the weather is as close to perfect as it gets. Three nights, some sun, and a resort that handles everything while you decide how you want to spend the rest of December.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hard Rock Hotel Cancún and Le Blanc Spa Resort are both adults-only all-inclusives on the same stretch of beach. They could not be more different. One is built around entertainment, energy, and keeping things moving. The other is built around silence, service, and the kind of luxury that asks nothing of you. Same three nights, same destination — the resort you pick says everything about the trip you want.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            One plays music till midnight. One has a butler. Pre-Christmas Cancún, your call.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Hard Rock Hotel Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&h=520&fit=crop&auto=format"
              alt="Hard Rock Hotel Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hard Rock Hotel Cancún — All-Inclusive with an Attitude
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$548 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hard Rock brings exactly what the brand promises — music, energy, and a resort that doesn't take itself too seriously. Beachfront pools with live entertainment, multiple restaurants, a full spa, and a vibe that leans into the fun. This is the Valentine's week for couples who want to dance, stay out late, and still wake up to a swim-up bar by noon. The all-inclusive handles everything; the resort handles the atmosphere.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $548 a night, you're getting genuine all-inclusive luxury with entertainment built in. The rooms are well done, the beach is excellent, and the calendar stays packed. If the holiday season means celebrating loud, staying late, and making the most of every night — Hard Rock delivers that version of Cancún for these three nights.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples who want energy and entertainment — live music, pool parties, great food, and a resort that keeps things moving all week long.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun3_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hard Rock Hotel Cancún →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Le Blanc Spa Resort */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1540541338537-71cf32f9a2de?w=1200&h=520&fit=crop&auto=format"
              alt="Le Blanc Spa Resort Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Le Blanc Spa Resort — The Quiet Luxury Standard
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$1,085 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Le Blanc consistently ranks as one of the best resorts in all of Cancún — not because of its size or its entertainment lineup, but because of how meticulously it takes care of its guests. Butler service. A world-class spa with a hydrotherapy circuit. Gourmet restaurants with à la carte dining included. Rooms with ocean views, pillow menus, and aromatherapy options. The property is designed to make noise disappear and let the experience take over.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For December 18-21, the case for Le Blanc is simple: this is the trip you remember for years. The butler handles everything before you even think to ask. The spa has couples' treatments that actually feel like a spa, not a hotel add-on. The beach is pristine and unhurried. At $1,085 a night, you're paying for a resort that treats the experience as the product — and it earns every dollar of that price.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples who want pure indulgence — butler service, spa days, gourmet dining, and a resort where the whole point is that you don't have to think about anything.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun3_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Le Blanc Spa Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hard Rock Hotel Cancún</strong> if Valentine's week should feel like a celebration — great beach, live entertainment, pool energy, and a resort that keeps the good times going from morning to last call.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Le Blanc Spa Resort</strong> if this is the trip — butler service, couples' spa, gourmet dining, and the kind of quiet, polished luxury that makes everything else feel like noise.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun3_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hard Rock Hotel Cancún →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun3_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Le Blanc Spa Resort →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Best pre-Christmas decision you'll make. 🌊
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
