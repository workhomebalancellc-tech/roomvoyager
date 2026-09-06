"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1545459720-aac8509eb7e8?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Hyatt House vs. Grand Hyatt Nashville.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Same loyalty points. $222 apart. Extended-stay comfort or the flagship grand hotel experience.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Hyatt has two very different Nashville properties for February 7–14, and they represent two completely different approaches to the upscale hotel experience. One is built for the extended traveler who wants space, kitchen access, and the comforts of an apartment-style stay. The other is a grand flagship hotel with a sense of occasion that you feel from the moment you walk into the lobby.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hyatt House Nashville Downtown comes in at $161 a night — a modern extended-stay property with full kitchens, generous room sizes, and a 9.2 guest rating that consistently reflects how much guests appreciate the space and flexibility. Grand Hyatt Nashville lands at $383 a night — a showstopping flagship hotel in the heart of downtown with a 9.6 guest rating that ranks it among Nashville's very finest. Both earn World of Hyatt points. The question is whether your February trip calls for practical comfort or genuine grandeur.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            World of Hyatt points either way. Extended-stay comfort at $161 or flagship grandeur at $383.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=450&fit=crop&auto=format"
              alt="Hyatt House Nashville Downtown"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hyatt House Nashville Downtown — Extended-Stay Smart Value
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$161 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hyatt House Nashville Downtown is purpose-built for the kind of trip where you actually live in the hotel. Full kitchens, separate living areas, and a breakfast included program that makes mornings genuinely easy — for a seven-night February stay, this is the kind of setup that saves money on dining and makes the whole trip feel less like hotel living and more like having your own Nashville apartment. The downtown location keeps everything accessible without paying premium downtown luxury rates.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $161 a night — earning full World of Hyatt points — this is the savvy choice for extended stays. The 9.2 guest rating reflects that guests who need the extra space and kitchen access are consistently happy with what Hyatt House delivers. For a seven-night February trip to Nashville, this is the pragmatic pick that doesn't sacrifice quality.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Smart travelers doing an extended Nashville stay who want a kitchen, more space, and Hyatt loyalty points — at $222 less per night than the Grand Hyatt.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville6_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hyatt House Downtown →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&auto=format"
              alt="Grand Hyatt Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Grand Hyatt Nashville — Flagship Grandeur in the Heart of Downtown
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$383 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Grand Hyatt Nashville is the flagship — the hotel that makes an impression. Set in a striking downtown tower, it delivers the full Grand Hyatt experience: soaring lobby spaces, upscale dining, a stunning rooftop pool, and service levels that justify the 9.6 guest rating. This is one of Nashville's highest-rated hotels full stop, and for travelers who want their accommodation to be an experience in itself, the Grand Hyatt delivers that from arrival onward.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $383 a night, the Grand Hyatt earns premium World of Hyatt points that accelerate toward future stays at Hyatt properties worldwide. For a February 7–14 Nashville trip, the winter months mean less pool competition, cleaner city views from the upper floors, and access to all the February deals and events the city runs. If you're going to do Nashville in style, this is the address.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the full Grand Hyatt flagship experience — 9.6 rating, downtown Nashville's finest address, and a stay that feels like an occasion.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville6_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Grand Hyatt Nashville →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hyatt House Nashville Downtown</strong> if you want smart value for a seven-night stay — full kitchen, extra space, Hyatt loyalty points, and $161 a night that leaves room in the budget.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Grand Hyatt Nashville</strong> if you want Nashville's flagship Hyatt experience — a 9.6-rated downtown tower with rooftop pool and grand hotel service at $383 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hyatt House Downtown →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Grand Hyatt Nashville →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Hyatt points either way. The question is what kind of February you want. 🏨
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
