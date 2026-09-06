"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1545459720-aac8509eb7e8?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Budget Motel vs. Solid Hilton.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $65 or $131 a night. Seven nights in Music City this February — two very different ways in.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            February in Nashville is an underrated time to visit. The brutal summer crowds have long since cleared, there's no major music festival pulling every hotel room off the market, and the city's honky-tonk bars on Broadway keep humming every single night of the year. It's cold — real coat weather — but that just means fewer tourists competing for the best bites at Hattie B's or the tables at Rolf and Daughters.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal sets two well-regarded Nashville stays side by side for Feb 7th through the 14th — a full seven nights. Fiddler's Inn is the budget play at $65 a night, a roadside motel that strips everything back to the essentials and keeps your wallet intact. Hilton Garden Inn Nashville Vanderbilt comes in at $131 a night — a solid mid-range Hilton near the university with all the amenities that make a week-long stay genuinely comfortable. Both are available for seven nights. The question is what kind of Nashville trip you want to have.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Budget motel basics or Hilton reliability. February in Nashville — seven nights, two very different price tags.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=450&fit=crop&auto=format"
              alt="Fiddler's Inn Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Fiddler's Inn — No-Frills Nashville at $65 a Night
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$65 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Fiddler's Inn is the honest budget play. It's a no-frills motel that delivers exactly what it promises: a clean room, a place to sleep, and a price point that leaves serious money in your pocket for the city itself. Nashville is a place where the real costs are in the experiences — live music cover charges, rounds of honky-tonk drinks, Hattie B's hot chicken, a night at the Ryman — and at $65 a night, Fiddler's Inn lets you put that money where it matters.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For a seven-night trip, that's $455 total for accommodation — easily hundreds less than most other Nashville options. If you're the kind of traveler who treats the hotel room as a place to sleep and little else, Fiddler's Inn checks every necessary box. Seven nights in February: this is how you do Nashville on a real budget.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget-conscious travelers who want to spend their money on Broadway, live music, and Nashville's incredible food scene — not the room.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville1_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Fiddler's Inn →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=450&fit=crop&auto=format"
              alt="Hilton Garden Inn Nashville Vanderbilt"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hilton Garden Inn Nashville Vanderbilt — Reliable Mid-Range Near Vanderbilt
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$131 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Hilton Garden Inn Nashville Vanderbilt sits in one of Nashville's most walkable and livable corridors — close to Vanderbilt University, Centennial Park, and the Music Row area. The neighborhood has some of the city's best independent restaurants and coffee shops, and it's a short Lyft from Broadway when you want to dive into the honky-tonk scene. At $131 a night, you're getting the full Hilton Garden Inn package: a proper fitness center, a well-appointed room, strong Wi-Fi, and the brand-level reliability that makes a seven-night stay genuinely comfortable.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For February 7–14, the Hilton Garden Inn Vanderbilt is the smart upgrade from bare-bones motel life. It's $66 more per night than Fiddler's Inn, but for a full week, that extra spend buys you meaningfully better amenities, a better neighborhood, and the peace of mind that comes with a brand you know.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Hilton reliability near Vanderbilt and Music Row — a comfortable home base for a full week in Nashville without going full-luxury.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville1_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hilton Garden Inn Vanderbilt →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Fiddler's Inn</strong> if you're here for the experience, not the room. At $455 for seven nights, it's the leanest base you'll find in Nashville — spend the savings on Broadway, hot chicken, and live music.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hilton Garden Inn Nashville Vanderbilt</strong> if you want reliability and a neighborhood that feels like Nashville rather than a motel strip. At $131 a night, it's the sensible mid-range pick for a full February week.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Fiddler's Inn →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hilton Garden Inn Vanderbilt →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              February in Music City. Neon lights, hot chicken, and two smart ways to stay. 🎸
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
