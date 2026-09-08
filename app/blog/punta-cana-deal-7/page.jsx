"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&h=700&fit=crop&auto=format"
            alt="Cap Cana marina and luxury boutique resort"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Wild Card Deal · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Faranda Adults-Only vs. Cap Cana Marina Boutique.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Same Faranda brand. Two boutique experiences that break the all-inclusive mold.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Punta Cana's wild card this week is the Faranda collection — a boutique brand operating two properties in the Dominican Republic that couldn't be more different from the all-inclusive resort model dominating the market. One is an adults-only retreat with pool and spa access in Punta Cana proper. The other is a small VIP boutique hotel at the Cap Cana Marina — one of the most beautiful yacht marina settings in the Caribbean. Same brand DNA, two completely distinct experiences.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Faranda Single 1 Punta Cana Adults Only comes in at $156 a night — a 9.4-rated adults-only boutique with a pool, spa, and the intimacy of a small property for Feb 7–14. Hotel Casa Don Luis Cap Cana by Faranda Boutique lands at $591 a night — a 9.6-rated VIP Access boutique hotel at the Cap Cana Marina with an outdoor pool, bar, and room service in one of the most exclusive gated resort communities in the Caribbean. Both are Faranda properties. The gap is $435 a night and an entirely different setting.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Faranda's 9.4-rated adults-only escape at $156 or their 9.6-rated Cap Cana Marina boutique at $591. Both break the resort mold.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=450&fit=crop&auto=format"
              alt="Faranda Single 1 Adults Only Punta Cana pool and retreat"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Faranda Single 1 Punta Cana Adults Only — Boutique Quiet in an All-Inclusive World
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$156 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Faranda Single 1 Punta Cana Adults Only is what boutique Caribbean travel looks like when you strip away the resort wristbands, the buffet lines, and the high-volume entertainment. It's a small, well-run adults-only property with a pool, spa access, and the kind of atmosphere that makes you feel like you found something most tourists never discover. The 9.4 guest rating from 756 reviews confirms it consistently delivers — and at $156 a night, it's the best-value boutique experience in the entire Punta Cana market.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For couples or solo travelers who find the mega-resort scene exhausting, Faranda Single 1 is a genuine alternative. Seven nights here totals approximately $1,092 — well under the cost of most mid-range all-inclusives — and leaves plenty of budget for excursions, restaurant dinners, and day trips to places like Saona Island or the Ojo de Agua natural pools. This is Punta Cana the way independent travelers like it.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Adults-only travelers who want boutique atmosphere over resort scale — pool, spa, 9.4-rated intimacy at $156 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta7_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Faranda Single 1 Adults Only →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=450&fit=crop&auto=format"
              alt="Hotel Casa Don Luis Cap Cana by Faranda Boutique marina"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hotel Casa Don Luis Cap Cana by Faranda Boutique — VIP Marina Boutique at Cap Cana
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$591 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hotel Casa Don Luis Cap Cana by Faranda Boutique sits inside Cap Cana — the most exclusive gated resort and marina community in the Dominican Republic. The Cap Cana Marina is a Caribbean landmark: private yacht slips, world-class sport fishing, and a community that has attracted some of the most high-profile resort development in the region. Staying at Casa Don Luis puts you inside that world at the boutique scale — an outdoor pool, bar, room service, and the VIP Access designation on Expedia recognizing its consistently exceptional guest experience.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $591 a night — approximately $4,137 for seven nights — Hotel Casa Don Luis is the premium Faranda boutique experience. The 9.6 guest rating from 224 reviews and the Cap Cana Marina address tell you everything about what you're getting: a small, curated property in one of the Caribbean's most beautiful settings, managed with the hands-on care that only boutique hotels can deliver. For travelers who want to experience Cap Cana without checking into a massive resort, this is the way in.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the Cap Cana Marina experience at boutique scale — VIP Access, 9.6-rated, outdoor pool and bar, at $591 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta7_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Casa Don Luis Cap Cana →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Faranda Single 1 Adults Only</strong> if you want boutique intimacy over resort scale — a 9.4-rated adults-only escape with pool and spa in Punta Cana at $156 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hotel Casa Don Luis Cap Cana</strong> if you want the Cap Cana Marina boutique experience — VIP Access, 9.6 rating, and one of the Caribbean's most beautiful addresses at $591 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Faranda Single 1 Adults Only →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Casa Don Luis Cap Cana →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Faranda boutique in February. Skip the wristband. 🌴
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
