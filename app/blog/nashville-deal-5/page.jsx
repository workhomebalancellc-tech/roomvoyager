"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1545459720-aac8509eb7e8?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Loews Vanderbilt vs. Omni Nashville.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two top-tier Nashville hotels, $230 apart. Vanderbilt luxury or Broadway-connected downtown icon.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            When you're ready to go full upscale in Nashville, the city's 4 and 5-star market has two standouts that define opposite ends of the luxury experience. One anchors the Vanderbilt corridor with university-adjacent elegance and understated sophistication. The other connects directly to Nashville's pulsing Broadway entertainment district and has become one of the most recognized hotels in the city.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Loews Nashville Hotel comes in at $197 a night for Feb 7–14 — a polished 4-star property adjacent to Vanderbilt University with a 9.2 guest rating and a well-regarded dining program. Omni Nashville Hotel lands at $427 a night — a downtown landmark directly above the Country Music Hall of Fame that earns a 9.4 guest rating with full-service amenities and an unbeatable location for exploring the heart of Music City. The choice between these two depends on what you're prioritizing: neighborhood calm or downtown energy.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Vanderbilt polish at $197 or Country Music Hall of Fame-adjacent glory at $427. Both are exceptional.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&h=450&fit=crop&auto=format"
              alt="Loews Nashville Hotel"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Loews Nashville Hotel — Upscale Elegance Near Vanderbilt
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$197 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Loews Nashville Hotel is one of the most consistently well-reviewed upscale properties in the city. Positioned adjacent to Vanderbilt University, it occupies a quieter and more residential part of Nashville than the downtown strip — and that's precisely its appeal. The Vanderbilt corridor is home to some of Nashville's best independent restaurants, coffee shops, and neighborhood bars. You're far enough from Broadway to sleep well, close enough to reach it in minutes.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $197 a night for February 7–14, Loews delivers 4-star service, a full fitness center and spa, and the Loews brand's signature attention to detail. The 9.2 guest rating reflects real satisfaction from travelers who've stayed here. For a week-long February trip, this is the hotel that balances luxury and livability exceptionally well.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Upscale travelers who want polished 4-star service in a quieter Vanderbilt neighborhood — without the downtown noise, at the best price in this tier.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nas5_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Loews Nashville Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=450&fit=crop&auto=format"
              alt="Omni Nashville Hotel"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Omni Nashville Hotel — Downtown Icon Above the Country Music Hall of Fame
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$427 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Omni Nashville is strategically positioned above the Country Music Hall of Fame in the heart of downtown — which means Broadway's honky-tonk bars, the Bridgestone Arena, and the city's most concentrated entertainment district are steps from your front door. The hotel has become synonymous with downtown Nashville luxury, and for good reason: the design celebrates Tennessee's musical heritage throughout, and the rooftop pool views over the city skyline are among the best in Nashville.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $427 a night, the Omni costs $230 more per night than Loews — but the location differential is real. If February in Nashville means being in the thick of it — walking distance from every major venue, restaurants, and live music — the Omni's downtown address delivers that in a way no other hotel can match at this quality level. The 9.4 guest rating puts it among Nashville's very best.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the most central Nashville address possible — Broadway steps away, Country Music Hall of Fame below, and a 9.4-rated luxury experience throughout.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nas5_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Omni Nashville Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Loews Nashville Hotel</strong> if you want upscale Vanderbilt-area elegance — quieter neighborhood, 4-star service, and $197 a night that represents serious value in this tier.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Omni Nashville Hotel</strong> if location is everything — Broadway steps away, the Country Music Hall of Fame below your feet, and a 9.4-rated downtown experience at $427 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nas5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Loews Nashville →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nas5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Omni Nashville →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Two of Nashville's finest. Which side of the city calls to you? 🏙️
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
