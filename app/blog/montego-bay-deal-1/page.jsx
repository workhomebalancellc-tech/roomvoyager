"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1600&h=700&fit=crop&auto=format" alt="Montego Bay Jamaica beach" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $68 or $253 a Night. Seven Nights in Montego Bay.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              January in Jamaica. The budget option or the beachfront resort — $1,295 between them over seven nights.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 4th through the 11th — seven nights in Montego Bay at the peak of Caribbean winter season. This deal presents the fundamental travel question in its clearest form: how much of your budget goes to the room, and how much stays available for the island itself? Two properties. Same city. Same week. $185 apart every single night.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Tropical Court Hotel at $68 a night is the floor — a no-frills base in Montego Bay that keeps seven nights in Jamaica under $500, leaving the rest of your budget for the things that actually define a Jamaica trip: jerk chicken at Scotchies, a day at Dunn's River Falls, sunset rum punch on the Hip Strip. Coyaba Beach Resort at $253 a night is the resort version: a beachfront property in Rose Hall with the full amenity package, designed for travelers who want the Caribbean experience delivered to them rather than discovered. Seven nights here is $1,771. The gap is $1,295 — real money either way you look at it.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $68 or $253. Seven nights in Jamaica — one puts $1,295 back in your pocket.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Tropical Court Hotel Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Tropical Court Hotel — Budget Base at $68</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$68 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Tropical Court Hotel is the honest budget choice in Montego Bay: straightforward, centrally located, and priced at $68 a night for a city that can drain a travel budget faster than almost anywhere in the Caribbean. Seven nights here is $476 total — the entire accommodation cost for a week in Jamaica at peak season for under $500. That math leaves serious room in the trip budget for everything that actually makes Montego Bay worth the flight.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Montego Bay rewards travelers who step outside the resort gates. The Hip Strip, Doctors Cave Beach, the Half Moon golf course, the Rose Hall Great House, Scotchies jerk chicken — none of these require a five-star address to access. Tropical Court puts you in the city, keeps your costs down, and trusts that you know how to spend the money you saved on the room. At $68 a night, that's exactly the right approach.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want to put their money into the Jamaica experience rather than the room — $68 a night, seven nights, $476 total.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Tropical Court Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&h=500&fit=crop&auto=format" alt="Coyaba Beach Resort Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Coyaba Beach Resort — Beachfront Rose Hall at $253</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$253 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Coyaba Beach Resort sits on the coveted Rose Hall stretch of Montego Bay coastline — the same corridor as the Hilton, the Hyatt Ziva, and the Iberostar, where Jamaica's premium resort real estate is concentrated. A boutique beachfront property with private beach access, multiple pools, and the kind of quiet elegance that distinguishes Coyaba from the larger chain resorts sharing its address. "Coyaba" is the Arawak word for paradise, and the resort earns the name with a setting that puts the Caribbean Sea at your doorstep from the moment you arrive.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $253 a night, seven nights is $1,771. That is a meaningful resort investment — but for a beachfront boutique in peak January Jamaica at Rose Hall, it's also a strong value relative to the larger properties on the same strip. January dry season means calm water, perfect beach weather, and the Blue Mountains visible on the horizon on clear afternoons. This is the kind of week you remember for a long time.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a boutique beachfront resort experience in Rose Hall — private beach, pool, and quiet elegance at $253 a night in January.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Coyaba Beach Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Tropical Court Hotel</strong> if you want to spend your money on Jamaica rather than the room — $68 a night, seven nights, $476 total, with over $1,200 freed up for the island itself.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Coyaba Beach Resort</strong> for boutique beachfront in Rose Hall — private beach access, pool, and the kind of quiet Caribbean setting that makes January in Montego Bay genuinely extraordinary at $253 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Tropical Court Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Coyaba Beach Resort →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>January in Montego Bay. Budget or beachfront — Jamaica delivers either way. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
