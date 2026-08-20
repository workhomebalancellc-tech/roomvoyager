"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1600&h=700&fit=crop&auto=format" alt="Rose Hall Montego Bay Jamaica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Rose Hall, Two Ways. Hilton or Hyatt in January.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Five nights. Two world-class mid-range resorts on the same stretch of Jamaica coastline.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 18th through the 23rd — five nights in the Rose Hall corridor east of Montego Bay, where two of the best mid-range resorts on the island sit on neighboring stretches of Caribbean coastline. This isn't a budget decision. Both options are in the sweet spot of Jamaica travel: full resort amenities, private beach, quality service, and rates that don't require a special occasion to justify.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hilton Rose Hall Resort & Spa at $229 a night is the solid, well-executed resort choice: a waterpark, multiple pools, a private beach, and the reliability of the Hilton standard at a rate that makes five nights in January surprisingly achievable. Hyatt Ziva Rose Hall at $279 a night steps it up: an upscale all-inclusive that has become one of the most consistently rated resorts in Jamaica, with a spectacular cliff-top position, dramatic ocean views, and the full Ziva all-inclusive experience. Fifty dollars a night is the question — over five nights, that's $250.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $229 or $279. Hilton or Hyatt — five nights in Rose Hall, January in Jamaica.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=900&h=500&fit=crop&auto=format" alt="Hilton Rose Hall Resort" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hilton Rose Hall Resort & Spa — Reliable Excellence at $229</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$229 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hilton Rose Hall Resort & Spa is one of those properties that earns consistent praise because it delivers what it promises: a full resort experience in a spectacular Caribbean setting without the surprise extras or service gaps that can undermine a Jamaica trip. Waterpark, multiple pools, private beach, full spa, tennis courts, and multiple dining options — the Hilton package here is comprehensive. Five nights at $229 comes to $1,145, making it one of the better value propositions for a week-level stay in Rose Hall.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Rose Hall corridor is one of the most desirable resort addresses in Jamaica — quiet, well-maintained, with the beach and the historic Rose Hall Great House nearby. The Hilton's waterpark is a genuine differentiator if you're traveling with family, and the spa is among the better ones in MoBay.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a full-service resort with waterpark, private beach, and spa at a dependable $229 a night in Rose Hall.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hilton Rose Hall Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Hyatt Ziva Rose Hall" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hyatt Ziva Rose Hall — All-Inclusive Excellence at $279</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$279 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hyatt Ziva Rose Hall has built a reputation as one of the finest all-inclusive experiences in Jamaica, and it earns that reputation with a cliff-top setting that puts the Caribbean Ocean center stage, multiple restaurants, premium bar service, and the kind of consistent quality that the Hyatt Ziva brand has become known for across the Caribbean. At $279 a night all-inclusive, five nights is $1,395 with everything — food, drinks, entertainment, and water sports — included.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The all-inclusive math works strongly in the Ziva's favor for travelers who plan to eat and drink on property. When you factor out restaurant and bar spending, the effective cost gap between the Hilton and the Ziva narrows significantly. It's also the better view: the cliff-top position at Hyatt Ziva is genuinely dramatic, especially at sunset.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want premium all-inclusive — cliff-top views, multiple restaurants, full bar, and the Hyatt Ziva standard at $279 a night in January.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hyatt Ziva Rose Hall →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hilton Rose Hall Resort & Spa</strong> for a fully loaded resort with waterpark, private beach, and spa at $229 a night — the reliable, comprehensive package in Rose Hall.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hyatt Ziva Rose Hall</strong> for premium all-inclusive with cliff-top views and multiple restaurants at $279 a night — the $250 premium over five nights pays for everything on property.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hilton Rose Hall →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hyatt Ziva Rose Hall →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Five nights in Rose Hall. The Caribbean looks the same from both. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
