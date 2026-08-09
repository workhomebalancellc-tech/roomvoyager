"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/41/miami_destination.jpg"
            alt="Miami skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $855 or $41 a Night. Miami's Wildest Comparison.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two completely different philosophies. Same city, same October weekend.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            October 22nd through the 24th — a late-October Miami weekend that's all about the decision. The city is deep into its best season now: warm but not brutal, lively but not overrun, with restaurant reservations that are actually gettable and beaches that feel like they belong to you again.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is Miami's most extreme comparison. The Moore Miami comes in at $855 a night — a design-driven boutique property in Miami Beach's quieter north end that earns every dollar with atmosphere, service, and the kind of curated luxury that only works at small scale. Ludge By Eco-Shared brings it down to $41 a night — a minimalist, eco-conscious stay that strips away everything unnecessary and lets the city itself be the experience. The gap is $814 a night. What you do with that is the whole story.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $855 or $41. One is the hotel. One is the trip. Miami in October, your math.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — The Moore Miami */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/41/mooremiami1.jpg"
              alt="The Moore Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Moore Miami — Boutique Miami at Its Most Considered
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$855 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Moore Miami is what happens when a hotel is designed around the experience rather than the room count. Set in Miami Beach's quieter north end, away from the South Beach spectacle, The Moore is intimate, design-forward, and built for guests who want their hotel to feel like a discovery rather than a reservation. The property is small by design — which means the service is attentive in a way that larger hotels simply cannot match.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $855 a night, The Moore is firmly in the splurge category. But for a two-night late-October stay, it's a rare experience — the kind of hotel that changes how you think about what a Miami trip can be. The design, the service, the details: all of it is calibrated to make the stay feel singular. If the hotel is the point, The Moore delivers.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers for whom the hotel is the destination — intimate boutique luxury, design-forward sensibility, and the kind of personalized service that only works at small scale.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami4_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Moore Miami →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Ludge By Eco-Shared */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/41/ludgebyeco1.jpg"
              alt="Ludge By Eco-Shared Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Ludge By Eco-Shared — Miami for $41 a Night
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$41 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Ludge By Eco-Shared is the anti-luxury play — a minimalist, eco-conscious property that treats the room as a clean, comfortable place to sleep and puts all the emphasis on what you do with the city around you. At $41 a night, two nights in Miami costs $82. The other $1,628 you're not spending on The Moore can go toward a dinner at a Michelin-starred Brickell restaurant, a sunset boat charter, a day at the Pérez Art Museum, and still leave money on the table.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Eco-Shared model is simple: comfortable, sustainable, no frills, and priced to make the trip possible for anyone. For travelers who see the hotel as a base rather than the destination, Ludge is the move that unlocks the rest of the weekend.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Miami on a real budget — $41 a night for a clean, comfortable, eco-conscious base that leaves the rest of the budget for the city.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami4_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Ludge By Eco-Shared →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Moore Miami</strong> if you want the hotel to be the experience — intimate boutique design, exceptional service, and a stay that makes the trip feel elevated from the moment you check in.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Ludge By Eco-Shared</strong> if Miami itself is the experience — $41 a night gives you a clean base and redirects $1,600+ toward the restaurants, the art, the beaches, and the nightlife that actually define the city.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                The Moore Miami →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Ludge By Eco-Shared →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Late October Miami. Whatever your budget, this is the window. 🌴
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
