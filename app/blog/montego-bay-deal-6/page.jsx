"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1600&h=700&fit=crop&auto=format" alt="Sandals resort Jamaica beach" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 65%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sandals vs. Sandals. Same Brand, Two Very Different Resorts.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Six nights in January. One brand, two tiers, two completely different Jamaica experiences.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 22nd through the 28th — six nights in Montego Bay, both options flying the Sandals flag. If you've decided on Sandals for your Jamaica trip, this deal answers the next question: which one? Sandals Montego Bay and Sandals Royal Caribbean are the original properties in the chain's home city, and they are not the same experience.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Sandals Montego Bay at $359 a night is the original — the resort that started the Sandals brand in 1981, sitting directly on one of the best beaches in Jamaica with a laid-back, classic Caribbean energy. Sandals Royal Caribbean at $489 a night is the elevated version: an over-water bungalow property with a private offshore island, butler service on every room tier, and the kind of exclusive atmosphere that the flagship Royal Caribbean designation implies. Six nights. $780 separates them. The question is what you want your Sandals story to be.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $359 or $489. The original or the flagship — six nights in January, Sandals either way.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=900&h=500&fit=crop&auto=format" alt="Sandals Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sandals Montego Bay — The Original at $359</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$359 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sandals Montego Bay is where the brand began — opened in 1981 on a prime stretch of beach in Montego Bay, and it has been refining the formula for over four decades. The beach here is the star: wide, powdery white sand with calm Caribbean water, considered one of the finest hotel beaches in Jamaica. The resort has multiple pools, a full suite of water sports, five restaurants, and the complete Sandals all-inclusive package at a rate that sits well below what the brand's more exclusive properties charge. Six nights at $359 is $2,154.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              There's something to be said for the original. Sandals Montego Bay has the beach, the energy, and the history. January brings peak-season crowds but also peak-season beach conditions: calm water, warm sun, and dry skies over one of the best stretches of sand in the Caribbean.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the classic Sandals beach experience — the original property, the best beach, and the full all-inclusive package at $359 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sandals Montego Bay →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&h=500&fit=crop&auto=format" alt="Sandals Royal Caribbean" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sandals Royal Caribbean — Over-Water & Butler at $489</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$489 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sandals Royal Caribbean is the Sandals flagship in Montego Bay — and the reason it commands a premium is obvious from the moment you see the over-water bungalows extending over the Caribbean Sea. Private offshore island, butler service included on every room category, over-water accommodations with direct sea access, and a more exclusive, curated atmosphere that separates it from the lively energy of the original Montego Bay property. At $489 a night all-inclusive with butler service, six nights is $2,934.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sandals Royal Caribbean is one of the few places in Jamaica where you can wake up over the water — a genuinely rare and extraordinary experience in the Caribbean. January mornings in an over-water bungalow at Sandals Royal are the kind of thing you describe to people for years after the trip. If that experience is what you came to Jamaica for, the $780 premium over six nights earns itself quickly.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want over-water bungalows, butler service, and the Sandals flagship experience at $489 a night in January.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sandals Royal Caribbean →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sandals Montego Bay</strong> for the original Sandals experience — the best beach in MoBay, classic all-inclusive energy, and 40+ years of refinement at $359 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Sandals Royal Caribbean</strong> for over-water bungalows, butler service, and the flagship Sandals experience at $489 a night — worth every dollar if waking up over the Caribbean is the trip.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sandals Montego Bay →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sandals Royal Caribbean →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Six nights in January. One brand, two stories — both are Jamaica. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
