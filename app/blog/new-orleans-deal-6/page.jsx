"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans night"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sheraton Weekend vs. Hyatt Regency.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $94 or $266 a night. Two CBD nights — the weekend rate gap is real.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Two nights in New Orleans is the long weekend. March 27 and 28 is a Friday and Saturday — the city is fully alive, the bars are packed, the food is on, and you need somewhere to land between the beignets and the second line. The question is how much you want to spend on the landing spot.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal highlights something interesting about New Orleans hotel pricing: short stays can wildly distort per-night rates. The Sheraton New Orleans Hotel drops to $94 a night for this two-night window — a full $30 cheaper than its seven-night rate. The Hyatt Regency jumps the other direction to $266 a night for two nights, nearly double its week-long rate. That's a $344 gap for two nights in the same neighborhood. The Sheraton at $94 is one of the sharpest value buys in this entire deal set.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $94 or $266. Same CBD neighborhood, same weekend. The rate gap is the whole story.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=450&fit=crop&auto=format"
              alt="Sheraton New Orleans Hotel"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sheraton New Orleans Hotel — Weekend Value at $94 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$94 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $94 a night for the March 27–29 weekend, the Sheraton New Orleans Hotel is the sharpest two-night deal in this entire NOLA set. You're getting a full-service 1,100-room Marriott in the CBD — multiple restaurants, a proper bar, a fitness center, and a location five minutes from the French Quarter — for a weekend rate that beats most budget hotels. The 8.8 Excellent rating across 1,713 reviews confirms it delivers consistently.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Two nights at $94 is $188 total for the accommodation — leaving serious money for a proper New Orleans weekend. Commander's Palace for Saturday lunch, a late-night set at Tipitina's, beignets at Café Du Monde at 2am. The Sheraton is where you sleep; the city is the experience.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Weekend trippers who want full-service Marriott quality at a rate that feels almost too good for the CBD location.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans6_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sheraton New Orleans ($94/nt) →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=450&fit=crop&auto=format"
              alt="Hyatt Regency New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hyatt Regency New Orleans — Weekend Premium at $266 a Night</h2>
              <span style={{ background: "#FEF2F2", color: "#9A3412", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$266 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Hyatt Regency New Orleans is one of the best hotels in the CBD — 9.2 Wonderful across 1,766 reviews, massive amenities, and World of Hyatt points. But for a two-night window, the rate jumps to $266 a night, nearly double its weekly rate. That's the reality of short-stay pricing at large convention hotels: weekends carry a premium, and the Hyatt Regency isn't shy about it. At $266, you're paying for the largest hotel in Louisiana and all the infrastructure that comes with it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The $344 gap over two nights is real. If you're a World of Hyatt Globalist who needs the points and the status recognition, the Hyatt Regency is the right call regardless of price. For everyone else, the Sheraton at $94 is the smarter two-night play.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> World of Hyatt loyalists who need the status treatment and aren't deterred by the weekend premium.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans6_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hyatt Regency New Orleans →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sheraton New Orleans</strong> at $94 a night. It's one of the best value buys in this entire deal set — full-service Marriott quality for a weekend rate that leaves $344 for the city itself. Obvious pick for almost everyone.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hyatt Regency New Orleans</strong> at $266 only if you're a World of Hyatt loyalist or specifically need the hotel's scale and infrastructure for the weekend.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sheraton ($94/nt) →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hyatt Regency ($266/nt) →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>A New Orleans weekend. $94 says yes. 🎷</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
