"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/38/miami_destination.jpg"
            alt="Miami skyline and beach"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Downtown Cool vs. Dadeland Comfort.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two solid Miami hotels, two different sides of the city, both under $140 a night.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Early October in Miami is one of the best-kept secrets on the travel calendar. The brutal summer heat has broken, the hurricane season crowds are thinning out, and the city is settling into its most comfortable stretch of the year. October 1st through the 3rd is a perfect long-weekend window — the kind of trip where the weather cooperates, the rates are down, and the city feels like it belongs to you.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal puts two well-regarded Miami hotels side by side at very different price points. The Biscayne Hotel sits in the heart of downtown at $84 a night — a well-located property close to Brickell, Bayside, and everything the urban core has to offer. Hilton Miami Dadeland comes in at $139 a night in the Dadeland corridor — more polished, more suburban, and closer to the Mall at Dadeland and Coral Gables. Same great city, two completely different vibes.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Downtown energy or Dadeland polish. Early October Miami at its most livable.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — The Biscayne Hotel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/38/biscaynehotel1.jpg"
              alt="The Biscayne Hotel Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Biscayne Hotel — Downtown Miami at a Steal
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$84 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Biscayne Hotel puts you right in the middle of downtown Miami at a price that's hard to find anywhere near this address. Downtown means walkable access to Brickell City Centre, Bayfront Park, American Airlines Arena, and the Metromover — the free rail that loops through the urban core and connects you to everything else. For a three-night October trip, this is the kind of base that makes the whole city feel accessible without burning through your budget on the room itself.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $84 a night for October 1st through the 3rd, The Biscayne Hotel is the smart play for travelers who want to spend their money on the experience rather than the accommodation. Miami's best restaurants, rooftop bars, and waterfront spots are right outside — and at this price, you have plenty left over to actually enjoy them.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a well-priced downtown base — walkable to Brickell, Bayfront, and the best of urban Miami without paying South Beach rates.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami1_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Biscayne Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Hilton Miami Dadeland */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/38/hiltonmiamidadeland1.jpg"
              alt="Hilton Miami Dadeland"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hilton Miami Dadeland — Polished Comfort South of the City
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$139 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hilton Miami Dadeland brings the full Hilton experience to one of Miami's most connected suburban corridors. The Dadeland area sits at the southern end of the Metrorail, making it surprisingly easy to reach downtown, Brickell, and Coconut Grove — without any of the traffic or parking headaches that come with staying closer to the action. The Mall at Dadeland is steps away, and Coral Gables' Miracle Mile is a short drive. It's Miami on easy mode.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $139 a night, the Hilton Dadeland delivers the brand's reliable standard — well-appointed rooms, strong service, and all the amenities that make a three-night stay genuinely comfortable. For travelers who prefer quiet and easy over urban and gritty, the Dadeland location is a genuinely smart choice for an October Miami trip.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want polished Hilton comfort in a quieter Miami neighborhood — easy Metrorail access, close to Coral Gables, and none of the downtown chaos.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami1_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hilton Miami Dadeland →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Biscayne Hotel</strong> if you want to be in the middle of everything — downtown Miami, walkable to Brickell and the waterfront, at $84 a night that leaves serious room in the budget for the city itself.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hilton Miami Dadeland</strong> if you want reliable Hilton quality in a calmer part of the city — easy Metrorail access, a great shopping corridor, and a polished stay without the downtown noise.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                The Biscayne Hotel →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hilton Miami Dadeland →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Early October in Miami. The sweet spot nobody talks about. 🌴
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
