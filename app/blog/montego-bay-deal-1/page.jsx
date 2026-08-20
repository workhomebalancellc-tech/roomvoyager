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
              $95 or $169 a Night. Montego Bay in January.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Seven nights in Jamaica. The Caribbean is the same from both rooms.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 4th through the 11th — seven nights in Montego Bay as the new year settles over the Caribbean. January in Jamaica is peak season for good reason: the weather is dry, the water is warm, and the island is running at full capacity. The trade winds come in off the sea and the reggae plays a little louder at night. There is no bad time to be in Montego Bay in January, but there is a smarter way to budget it.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal is the fundamental Montego Bay question: how much do you want to spend on the room itself? Doctors Cave Beach Hotel at $95 a night puts you steps from one of the most famous beaches in the Caribbean — Doctors Cave Beach, the legendary strip that draws travelers from across the world — at a price that leaves your January budget largely intact. Holiday Inn Resort Montego Bay at $169 a night steps it up with full resort amenities, multiple pools, and a more expansive waterfront setup. The difference is $74 a night. Over seven nights, that's $518 — a real number worth thinking about before you book.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $95 or $169. Both put you in Montego Bay in January — one just puts $518 back in your pocket.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=500&fit=crop&auto=format" alt="Doctors Cave Beach Hotel" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Doctors Cave Beach Hotel — Legendary Beach at $95</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$95 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Doctors Cave Beach Hotel sits directly on its namesake beach — one of the most storied stretches of sand in the Caribbean, a beach that has drawn visitors to Montego Bay since the 1920s when it earned its reputation for healing mineral waters. The hotel itself is modest and efficient: comfortable rooms, solid service, and the kind of location that no amount of amenity budget can replicate. Seven nights here at $95 is $665 total — a week in Jamaica for less than most hotels charge for a weekend in peak season.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              January at Doctors Cave means dry weather, turquoise water, and the Hip Strip right outside your door. The bars, jerk chicken stands, and sunset spots that define Montego Bay nightlife are all within walking distance. The $95 you save on the room goes directly into those experiences — and in Jamaica, those experiences are what you came for.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the most famous beach address in Montego Bay — directly on Doctors Cave Beach, steps from the Hip Strip, at $95 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Doctors Cave Beach Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&h=500&fit=crop&auto=format" alt="Holiday Inn Resort Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Holiday Inn Resort Montego Bay — Full Resort at $169</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$169 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Holiday Inn Resort Montego Bay is what you get when you want the full resort package in MoBay without the all-inclusive price tag: multiple pools, a private beach, water sports, on-site dining, and the kind of organized resort energy that keeps a family or a group occupied without leaving the property. At $169 a night, it's a legitimate mid-range resort deal in January — when comparable waterfront properties in Montego Bay are charging $250 and up.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Seven nights at $169 comes to $1,183 — a week at a full waterfront resort with amenities for under $1,200. The resort sits on a private beach with calm, clear water and has the facilities to make a seven-night trip entirely self-contained if that's your preference. It's a solid value for the full resort experience in peak January season.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the full resort setup — multiple pools, private beach, water sports — at a mid-range January rate of $169 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Holiday Inn Resort Montego Bay →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Doctors Cave Beach Hotel</strong> if the beach address is everything — you're directly on one of Jamaica's most iconic stretches of sand at $95 a night, and the $518 you save over seven nights goes straight into the Montego Bay experience.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Holiday Inn Resort Montego Bay</strong> for the full resort package — pools, private beach, water sports, and on-site dining at $169 a night, still under market for a waterfront January stay.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Doctors Cave Beach Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Holiday Inn Resort →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>January in Montego Bay. The trade winds don't check your rate. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
