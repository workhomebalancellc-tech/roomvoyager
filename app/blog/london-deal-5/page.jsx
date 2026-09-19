"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=700&fit=crop&auto=format"
            alt="London"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Royal National Hotel vs. Ruby Zoe by IHG.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $119 or $141 a night. Three central London nights — on-sale classic or an IHG boutique with an exceptional rating.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Three nights in central London hits the sweet spot for a long weekend trip. March 27 through March 30 — Friday arrival, Sunday evening — is enough time to do the National Gallery, a Borough Market morning, an afternoon in the V&A, and still have a night free for a proper dinner in Soho without the whole trip feeling rushed. Both hotels in this deal put you in central London with easy Tube access to every neighborhood you'd want to visit.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            The Royal National Hotel at $119 a night is one of the best-known value hotels in central London — a large property with 3,066 reviews and a current sale that takes $176 off the rack rate. Ruby Zoe Hotel London by IHG at $141 a night is the boutique play: an IHG property with a 9.4 Exceptional rating across 1,249 reviews, a bar and restaurant with a "London beyond the guidebook" ethos, and IHG One Rewards points. Three nights, $66 between them total.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            On-sale central London classic or IHG Exceptional boutique. Three nights, $66 apart total.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=450&fit=crop&auto=format"
              alt="Royal National Hotel London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Royal National Hotel — Central London on Sale at $119 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$119 / night · $176 off</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Royal National Hotel is a London institution — a large, well-established hotel in Bloomsbury with a British restaurant, breakfast service, cribs available for families, and 3,066 reviews at 8.0 Very Good. On sale at $119 a night with $176 off the rack rate, it sits near Russell Square station (Piccadilly line, direct to Heathrow) and has been serving central London visitors reliably for decades. The rooms are modern and minimalist — exactly what you need for a three-night base.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $119 a night for three nights, the Royal National is $357 total for a central London long weekend. The on-sale rate and consistent reviews make it the straightforward value pick for anyone who wants proven reliability at a sharp price.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Value-focused travelers and families who want a proven central London base at the sharpest price.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london5_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Royal National Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&auto=format"
              alt="Ruby Zoe Hotel London by IHG"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Ruby Zoe Hotel London by IHG — Exceptional IHG Boutique at $141 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$141 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Ruby Zoe Hotel is an IHG boutique property with a 9.4 Exceptional rating across 1,249 reviews — one of the highest scores in our entire London deal set. The Ruby brand is built around discovering London beyond the tourist checklist: local pubs, hidden neighborhoods, the kind of city knowledge you'd get from a well-traveled friend. The bar and restaurant follow the same ethos. IHG One Rewards points, 8 rooms left at this price, and a boutique experience that punches well above its $141 per night rate.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $141 a night — just $22 more than the Royal National — Ruby Zoe Hotel delivers a meaningfully better guest experience: a higher rating, a boutique ethos, and IHG points. Over three nights, $66 extra buys you one of the most highly rated hotels in this entire deal set.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> IHG One Rewards members and boutique hotel lovers who want the best guest satisfaction score in this deal for just $22 more a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london5_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Ruby Zoe Hotel London →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Royal National Hotel</strong> if you want a proven central London base at the lowest price in this deal — $119 a night on sale, 3,066 reviews to back it up.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Ruby Zoe Hotel London by IHG</strong> if $22 more a night buys you a 9.4 Exceptional boutique experience, IHG points, and the best guest satisfaction score in the deal. Three nights, $66 total extra — easy call for IHG members.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Royal National Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Ruby Zoe Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Three London nights. National Gallery, Borough Market, and a smart base. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
