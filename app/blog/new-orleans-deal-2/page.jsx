"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans French Quarter"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              New Orleans Marriott vs. Bourbon Orleans.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $130 or $219 a night. Seven nights in the French Quarter — points machine or historic Bourbon Street icon.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            The French Quarter in late March is as alive as anywhere in America. The heat hasn't set in yet, the azaleas are blooming in the courtyards, and every block between Decatur and Esplanade has something worth stopping for — a Creole lunch spot, a jazz bar with no cover, a praline shop you didn't plan on. Seven nights from March 27 gives you enough time to get past the tourist checklist and actually understand this city.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal puts two very different French Quarter options side by side. The New Orleans Marriott at $130 a night is the reliable points-earning full-service option — well-reviewed, well-located, and a smart choice for anyone in the Bonvoy ecosystem. The Bourbon Orleans Hotel steps the experience up to $219 a night with a historic Bourbon Street address, ballroom-era architecture, and the kind of old-New-Orleans atmosphere you can't manufacture in a newer hotel. The gap is $89 per night, or $623 over a full week.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Marriott points or historic Bourbon Street soul. Seven French Quarter nights, $89 apart per night.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&h=450&fit=crop&auto=format"
              alt="New Orleans Marriott"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>New Orleans Marriott — French Quarter at $130 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$130 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The New Orleans Marriott sits at Canal Street and Chartres — right on the edge of the French Quarter, steps from Bourbon and Royal Streets, and a short walk from Café Du Monde and the waterfront. It's a 41-story full-service hotel with a rooftop pool, multiple restaurants, and the full Bonvoy points experience. Rated 9.0 Wonderful across nearly 2,000 reviews, it's one of the most consistently well-reviewed large hotels in the city.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $130 a night for seven nights, the Marriott is the value anchor of this deal. The location is excellent, the rooms are modern, and the rooftop pool with city views is genuinely worth using. If you're a Bonvoy member, a week here stacks meaningful points. This is the smart, practical French Quarter choice.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Marriott Bonvoy members, first-time French Quarter visitors, and travelers who want a full-service anchor in the best possible location.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans2_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book New Orleans Marriott →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=450&fit=crop&auto=format"
              alt="Bourbon Orleans Hotel"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Bourbon Orleans Hotel — Historic Bourbon Street for $219 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$219 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Bourbon Orleans Hotel sits on Orleans Avenue at Bourbon Street — the address says everything. Built in the 1960s on the site of the legendary Orleans Ballroom, the property carries genuine French Quarter history in its bones. The courtyard, the ironwork balconies, the antique furnishings in the lobby — none of it is manufactured. Rated 9.2 Wonderful across 4,173 reviews (the most-reviewed hotel in this deal), it consistently delivers on its promise of old-New-Orleans character with modern service. Currently on sale — down from what would normally be over $300 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $219 a night, the Bourbon Orleans is the experience play. You're not just booking a room — you're booking a location and an atmosphere that a newer hotel simply can't replicate. Step outside and you're on Bourbon Street. Walk half a block and you're in the heart of the Quarter. For a spring week in New Orleans, this is how you do it properly.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to be fully inside the French Quarter experience — the address, the atmosphere, and the history that a chain hotel can't offer.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans2_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Bourbon Orleans Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>New Orleans Marriott</strong> if you want a top-tier French Quarter location with Bonvoy points and a rooftop pool, at the sharpest price for the quality. At $130 a night, it's a near-perfect base for a week in the Quarter.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Bourbon Orleans Hotel</strong> if the address and the atmosphere are the point. At $219 a night, you're paying for Bourbon Street history and French Quarter character that no amount of renovation can replicate elsewhere.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                New Orleans Marriott →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Bourbon Orleans Hotel →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Seven nights in the French Quarter. History, jazz, and two smart ways to stay. 🎷</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
