"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/39/miami_destination.jpg"
            alt="Miami skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Two Smart Picks Near the Airport.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              A full week in Miami, well-located, well-priced. This is how you make the trip work.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            October 4th through the 11th — a full seven nights in Miami. That's enough time to get past the tourist checklist and actually sink into the city. South Beach one day, Wynwood the next, a Marlins game or a day trip to the Keys in between. The question isn't what to do — it's where to stay without breaking the budget on a week-long trip.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is two well-priced hotels near Miami International Airport — a location that's more central than it sounds. enVision Hotel Miami International Airport comes in at $92 a night with a design-forward sensibility that punches above its price. Tower Hotel By At Mine Hospitality brings it down to $52 a night — a clean, no-frills base that keeps your budget firmly intact for a full week of exploring.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Seven nights in Miami under $100 a night. Pick your style and go.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — enVision Hotel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/39/enVisionhotelmiami1.jpg"
              alt="enVision Hotel Miami International Airport"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                enVision Hotel Miami — Style Without the South Beach Price
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$92 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              enVision Hotel brings a design-conscious approach to the airport corridor — a property that feels more boutique than its location would suggest. Clean lines, well-appointed rooms, and the kind of finish that makes a seven-night stay actually enjoyable rather than just functional. The airport area is more central than most visitors realize: you're minutes from Coral Gables, a straight shot to Brickell, and easy driving distance to everywhere else Miami has to offer.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $92 a night, enVision hits the sweet spot for a full week — stylish enough to feel like a real Miami stay, affordable enough to still have money left over for the restaurants, nightlife, and excursions that make the trip worth taking. Seven nights here totals around $644 before tax — a number that leaves significant room in the overall travel budget.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a stylish, well-priced hotel for a full week — design-forward without the premium, central enough to reach everything Miami offers.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami2_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book enVision Hotel Miami →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Tower Hotel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/39/towerhotelbyatmine1.jpg"
              alt="Tower Hotel By At Mine Hospitality Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Tower Hotel By At Mine Hospitality — Budget Miami, No Compromises
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$52 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Tower Hotel by At Mine Hospitality brings Miami down to $52 a night — and at that price for a full week, the math completely changes what the trip looks like. Seven nights here runs around $364. That's a savings of $280 compared to enVision, and in Miami that $280 is a dinner at a great Brickell restaurant, a day trip to the Keys, and still money left over. At Mine Hospitality focuses on clean, comfortable, well-run properties — the basics done right.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For travelers doing a full week, the Tower Hotel is the play that opens up the rest of the trip. When the room is $52 a night, every other decision gets easier — you can eat well, go out, explore, and come home without the anxiety of having overspent. October in Miami at $52 a night is the kind of deal that makes a seven-night trip genuinely possible.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-conscious travelers doing a full week — $52 a night frees up serious budget for food, nightlife, and excursions without sacrificing comfort.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami2_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Tower Hotel By At Mine Hospitality →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>enVision Hotel Miami</strong> if you want a stylish week-long stay that feels intentional — $92 a night for a design-forward property that makes the trip feel like more than just a budget run.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Tower Hotel By At Mine Hospitality</strong> if maximizing the trip budget is the goal — $52 a night for seven nights keeps the week wide open for everything Miami has to offer.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                enVision Hotel →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Tower Hotel →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              A full week in Miami. October is the move. 🌴
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
