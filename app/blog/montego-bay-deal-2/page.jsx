"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1600&h=700&fit=crop&auto=format" alt="Montego Bay Jamaica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $103 or $338. City Hotel or All-Inclusive Beach.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Three nights in Montego Bay in January. Two completely different trips.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 20th through the 23rd — three nights in Montego Bay at the tail end of peak winter season. This deal is the clearest version of a classic travel choice: a city hotel that keeps your costs low and your options open, versus an all-inclusive beachfront resort that wraps everything — room, meals, drinks, and beach access — into a single daily rate.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Pineapple Court Hotel at $103 a night is the lean, flexible option — a well-located city hotel in Montego Bay that puts you in the middle of the action without locking you into a resort. Three nights here is $309, leaving your entire food, drink, and activity budget wide open. SeaGarden Beach Resort All-Inclusive at $338 a night is the flip side: a beachfront all-inclusive where every meal, every drink, and every water sport is covered from the moment you check in. Three nights all-in is $1,014. The question is how you prefer to experience Jamaica.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $103 or $338. City freedom or beachfront all-inclusive — three nights in January, your call.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Pineapple Court Hotel Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Pineapple Court Hotel — City Base at $103</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$103 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Pineapple Court Hotel is the practical city choice in Montego Bay — centrally located, reasonably priced, and designed for travelers who want a clean, comfortable base without paying resort rates for amenities they won't use. At $103 a night, three nights is $309. That is the total accommodation cost for three nights in peak January Jamaica, which means the rest of your budget goes exactly where you want it: jerk chicken at the roadside spots the resorts can't replicate, beach bars on the Hip Strip, a day trip to the Blue Mountains, or a boat out to the reef.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Hotel is close enough to Doctors Cave Beach and the Hip Strip to make a trip on foot viable, and Montego Bay's taxi network fills in any gaps easily. For three nights, a city hotel at $103 keeps the trip fast and flexible — you decide each day what Jamaica looks like, rather than having it decided for you by a resort itinerary.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a low-cost, flexible base in Montego Bay — $103 a night, city-center access, and a wide-open budget for the island itself.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Pineapple Court Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=900&h=500&fit=crop&auto=format" alt="SeaGarden Beach Resort All-Inclusive" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>SeaGarden Beach Resort All-Inclusive — Beach Everything at $338</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$338 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              SeaGarden Beach Resort is Montego Bay's all-inclusive answer for travelers who want the Caribbean experience delivered in a single package: private beach, multiple pools, unlimited meals and drinks, water sports included, and a beachfront setting that makes the most of Jamaica's January dry season. At $338 a night, three nights is $1,014 — but when you factor out what you'd spend on food and drinks independently over three full days, the all-inclusive math often works in the resort's favor for travelers who eat and drink well.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The all-inclusive format suits three-night stays particularly well. You land, you unpack once, everything is handled, and you spend the days between the beach and the pool. January weather at SeaGarden is prime: calm water, bright sun, and the kind of beach afternoon that makes the flight worth it. If the point of three nights in Montego Bay is to actually get on the beach, this is the answer.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want everything handled — private beach, unlimited food and drinks, pools, and water sports at $338 a night all-inclusive.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book SeaGarden Beach Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Pineapple Court Hotel</strong> if you want to explore Montego Bay on your own terms — $103 a night, city center, and a budget that lets you eat, drink, and move around Jamaica freely.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>SeaGarden Beach Resort All-Inclusive</strong> if the goal is beach, sun, and zero decisions — private beach, unlimited food and drinks, and water sports at $338 a night with everything included.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Pineapple Court Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>SeaGarden Beach Resort →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Three nights in January. City flex or beach everything — Jamaica works either way. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
