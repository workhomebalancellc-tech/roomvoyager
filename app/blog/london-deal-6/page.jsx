"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=700&fit=crop&auto=format"
            alt="London"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              EasyHotel Paddington vs. Hyatt Regency Albert Embankment.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $89 or $200 a night. Two London nights — the sharpest deal in this set or a South Bank Hyatt.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Two nights in London is a weekend — Friday to Sunday, a long-haul flight offset by a quick European connection, or just a proper city break before heading somewhere else. March 27 through March 29 covers both nights of a central London weekend: the Portobello Road Market on Saturday, the South Bank walk on Sunday morning, and dinner in either Paddington or Waterloo before the week starts again. You don't need a lot of nights to have a real London experience. You need a good base.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal has the biggest price gap in the entire London set: EasyHotel Paddington at $89 a night on sale versus Hyatt Regency London Albert Embankment at $200 a night. That's $111 per night — $222 over two nights — between two hotels that are both competent, both in London, and both within reasonable distance of the central sights. The question is what that $222 difference is actually buying.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $89 or $200. Biggest price gap in the London set. Two nights, $222 apart.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=450&fit=crop&auto=format"
              alt="EasyHotel Paddington London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>EasyHotel Paddington — Sharply Priced at $89 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$89 / night · $156 off</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              EasyHotel is the budget hotel brand from the easyGroup family — the same group as easyJet. No frills, no lobby bar, no breakfast included: a clean room in a good location at the lowest possible price point. The Paddington location is on sale at $89 a night, with $156 off the rack rate. Paddington station is right there — direct Heathrow Express in 15 minutes, Elizabeth line to the City and Canary Wharf, and Bakerloo line to Oxford Circus and Waterloo. For a two-night London weekend, the location is genuinely useful.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $89 a night — $178 total for two nights — EasyHotel Paddington is the most affordable two-night stay in our entire London deal set. The $222 you save over the Hyatt is a West End show and dinner for two, or a proper Thames river cruise plus a Borough Market morning. If your goal is London on the best budget, this is the answer.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want the cheapest well-located two-night London stay and plan to spend their money on the city itself.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london6_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book EasyHotel Paddington →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=450&fit=crop&auto=format"
              alt="Hyatt Regency London Albert Embankment"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hyatt Regency London Albert Embankment — South Bank Hyatt at $200 a Night</h2>
              <span style={{ background: "#FEF2F2", color: "#9A3412", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$200 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hyatt Regency London Albert Embankment is a full-service Hyatt property on the South Bank — rated 9.2 Wonderful across 1,003 reviews. The Albert Embankment is a stretch of the Thames across from the Houses of Parliament and Millbank, with views across the river toward Westminster. A spa, fitness center, a restaurant and bar, and the full Hyatt Regency amenity set are on site. World of Hyatt points on both nights. For a two-night London stay, this is the premium play.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $200 a night — $400 total for two nights — the Hyatt Regency Albert Embankment delivers a genuinely elevated London experience. The 9.2 Wonderful rating across 1,003 reviews is a meaningful signal of consistent quality. For World of Hyatt members or anyone who values the full-service hotel experience for a special weekend, the premium is defensible.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> World of Hyatt members, luxury weekend travelers, and anyone who wants a 9.2 Wonderful South Bank experience for a short but memorable London stay.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london6_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hyatt Regency Albert Embankment →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>EasyHotel Paddington</strong> if $89 a night and the biggest savings in this deal set make the decision for you. Put the $222 toward the London experiences that matter — West End theatre, Borough Market, a river cruise.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hyatt Regency London Albert Embankment</strong> if a 9.2 Wonderful South Bank stay, World of Hyatt points, and the full Hyatt Regency experience justify $111 more per night for a special two-night London weekend.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>EasyHotel Paddington →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hyatt Regency Albert Embankment →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Two London nights. The biggest gap in the deal set. You decide what the $222 buys. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
