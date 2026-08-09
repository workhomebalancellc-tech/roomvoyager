"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/44/miami_destination.jpg"
            alt="Miami Midtown"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $3 Apart. Two Neighborhoods. Zero Excuses.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              The Miami River or Midtown. October 13th through the 16th and both are a steal.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            October 13th through the 16th — mid-October in Miami is the sweet spot of the whole fall season. The summer crowds are a distant memory, the weather is genuinely perfect, and the city is operating at full capacity without the chaos of peak season. Three nights here is enough to do South Beach, Wynwood, Little Havana, and still have a slow morning to actually enjoy a cortadito on Calle Ocho.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is Miami's closest price comparison — $3 apart. Miami River Inn By Renzzi comes in at $69 a night along one of Miami's most characterful waterways. Up Midtown sits in the middle of Miami's fastest-growing neighborhood at $66 a night. Three bucks a night isn't a price difference — it's a neighborhood decision. And both neighborhoods are excellent.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $3 apart. River character or Midtown energy. Mid-October Miami, this is the one.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Miami River Inn */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/44/miamiriverinn1.jpg"
              alt="Miami River Inn By Renzzi"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Miami River Inn By Renzzi — Charm on the Water
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$69 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Miami River Inn By Renzzi sits along the Miami River — one of the city's most underrated stretches, where fishing boats, working watercraft, and some of Miami's best old-school Cuban restaurants share the same banks. It's a part of Miami that feels genuinely local in a city that can sometimes feel like it's performing for visitors. The inn itself brings boutique character to the address: intimate, well-run, and priced at $69 a night for a three-night mid-October stay that costs about $207 total.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Miami River location puts you close to Little Havana, downtown, and Brickell — with a local character that's impossible to find on South Beach. At $69 a night, it's the kind of find that makes you feel like you've figured Miami out.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want local Miami character — boutique waterfront inn, close to Little Havana and downtown, $69 a night for the city's most authentic stretch of waterfront.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami7_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Miami River Inn By Renzzi →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Up Midtown */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/44/upmidtown1.jpg"
              alt="Up Midtown Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Up Midtown — Miami's Most Exciting Neighborhood at Its Best Price
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$66 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Up Midtown puts you in the middle of Miami Midtown — the neighborhood that connects Wynwood's art scene to the Design District's luxury corridor, with its own growing restaurant and retail scene in between. It's one of the most walkable pockets of the city, and at $66 a night, it's also one of the best-priced positions you can take in Miami for a mid-October trip. Three nights here totals about $198 — possibly the most value per dollar of any Miami deal this fall.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Wynwood Walls, the Design District, Midtown shops, and Brickell are all easy from here. For a trip that's about exploring the city rather than staying in it, Up Midtown's location and price make it the move that opens everything else up.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to be in Miami's most dynamic neighborhood — walkable to Wynwood and the Design District, $66 a night, and the best value position of the fall season.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami7_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Up Midtown →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Miami River Inn By Renzzi</strong> if you want local character — boutique waterfront charm close to Little Havana and downtown, $69 a night for the most authentic corner of Miami.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Up Midtown</strong> if you want to be at the center of Miami's most exciting neighborhood — walkable to Wynwood, the Design District, and everything in between, for $66 a night and three bucks less than the competition.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Miami River Inn →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Up Midtown →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Mid-October in Miami. This is the window. 🌴
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
