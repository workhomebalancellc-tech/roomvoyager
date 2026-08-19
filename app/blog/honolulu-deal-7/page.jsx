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
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Waikiki boutique hotels" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
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
            December 26th through the 31st — five nights in Honolulu, ending on New Year's Eve in Waikiki. This is the wild card deal, and the city delivers it in style: two of the most distinctive boutique hotels in Hawaii, both in Waikiki, both with personalities that no chain resort can manufacture. The Surfjack Hotel & Swim Club and The Laylow, Autograph Collection are the answer to the question of what happens when Waikiki hotels stop trying to look like every other resort in the Pacific.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            The Surfjack at $187 a night leans into the surf culture roots of Hawaii — a property designed around its pool deck, its creative community, and the kind of easy, genuine island energy that the big resorts spend millions trying to fake. The Laylow at $299 a night goes full retro-Hawaii: a 1960s-inspired aesthetic with bungalow-style rooms, a mid-century pool scene, and the collaboration with Hideout restaurant that has made it one of the most talked-about hotel food programs in the city. New Year's Eve in Waikiki fireworks light up the sky over the beach — you'll be five minutes' walk away regardless of which you choose.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $187 or $299. Surf culture or retro Hawaii. New Year's Eve in Waikiki, two very different ways.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=900&h=500&fit=crop&auto=format" alt="The Surfjack Hotel and Swim Club Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Surfjack Hotel & Swim Club — Island Creative at $187</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$187 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Surfjack Hotel & Swim Club is Waikiki's creative class hotel — a boutique property built around its pool deck and the surf culture that defines Hawaii's actual identity, not the postcard version. The rooms are designed for people who want something that feels genuinely Hawaiian rather than generically tropical, and the pool area has become one of the best social scenes in the neighborhood. Mahina & Sun's, the on-property restaurant, serves breakfast and brunch that locals actually show up for — a strong signal that the hotel is doing something right.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Five nights at $187 totals $935. For New Year's week, that's remarkably competitive for a boutique property with this much personality. Waikiki's beach and the fireworks are walking distance. The Surfjack's own New Year's pool events make it easy to celebrate without going anywhere at all.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a boutique hotel with genuine surf-culture personality — $187 a night, a great pool scene, and a restaurant that locals actually love in December Waikiki.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Surfjack Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=500&fit=crop&auto=format" alt="The Laylow Autograph Collection Waikiki" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Laylow, Autograph Collection — Retro Hawaii at $299</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$299 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Laylow is mid-century Hawaii executed perfectly — a 1960s-inspired design aesthetic carried through bungalow-style rooms, a central pool that looks like it was lifted from a classic surf film, and a deliberate warmth that sets it apart from every other boutique hotel in the neighborhood. As a Marriott Autograph Collection property, it delivers independent personality with loyalty program integration — a combination that's hard to find anywhere in the Pacific.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hideout, the Laylow's restaurant and bar, has developed a reputation as one of the most creative food and cocktail programs in Waikiki — again, a place that locals seek out, not just hotel guests. Five nights at $299 totals $1,495. For New Year's Eve, the Laylow's intimate scale means a celebration that feels curated rather than crowded.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the most design-forward boutique hotel in Waikiki — mid-century Hawaii aesthetics, a celebrated restaurant, and Marriott points at $299 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Laylow →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Surfjack Hotel & Swim Club</strong> for surf-culture personality and a pool scene that defines the Waikiki boutique experience — $187 a night, five nights, the kind of hotel that makes the trip feel like yours.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Laylow</strong> for mid-century Hawaii design done right — a celebrated restaurant, Autograph Collection quality, and New Year's Eve ambiance that feels intimate rather than overwhelming at $299 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Surfjack Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/honolulu7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Laylow →</a>
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
