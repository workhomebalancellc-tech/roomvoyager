"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1567683878386-83dc92a7da3c?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville Broadway neon"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Design-Forward Boutique vs. Party-Ready Resort.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $167 or $260 a night. Two strong mid-range picks for February in Music City.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Nashville's mid-range hotel market is genuinely competitive, and this week's deal shows exactly why. Two properties at $167 and $260 a night represent two completely different philosophies about what a Nashville hotel experience should be — one strips everything back to thoughtful design and neighborhood character, the other leans into the entertainment resort concept that Nashville has become famous for.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Bode Nashville is a design-forward boutique hotel that has earned a devoted following since it opened, landing at $167 a night for Feb 7–14 with a 9.2 guest rating. Margaritaville Nashville brings the full resort energy — multiple bars, entertainment programming, a massive pool deck — at $260 a night, also with a 9.2 guest rating. The vibe gap between these two is enormous. The price gap is $93 per night.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Bode's cool design DNA or Margaritaville's five-o'clock-somewhere energy. Same guest rating. Very different vibes.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop&auto=format"
              alt="Bode Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Bode Nashville — Design Hotel Done Right
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$167 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Bode Nashville is the design-conscious choice in this bracket. It's a hotel that clearly had an opinion when it was conceived — locally-inspired interiors, thoughtfully curated spaces, and an aesthetic that feels authentically Nashville rather than generic hospitality. The 9.2 guest rating reflects that guests notice and appreciate the difference between a hotel that tried and one that didn't.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $167 a night for Feb 7–14, Bode is the smart mid-range pick for travelers who care about where they stay. The on-site dining and bar scene skews toward craft and local, and the overall experience is one of a hotel that knows its city. For a seven-night February trip, this is the kind of property that makes the whole stay feel more intentional.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Design-conscious travelers who want a hotel with real character and local soul — not just a comfortable room, but a genuinely interesting place to stay.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville4_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Bode Nashville →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=450&fit=crop&auto=format"
              alt="Margaritaville Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Margaritaville Nashville — The Entertainment Resort Experience
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$260 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Margaritaville Nashville embraces the entertainment resort model fully and unapologetically. Multiple bars, live music programming, a sprawling pool deck, and a whole hospitality philosophy built around the idea that the hotel should be as fun as the city around it. In Nashville — a city that essentially invented the music-and-hospitality fusion — this fits surprisingly well.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $260 a night, Margaritaville costs $93 more per night than Bode — but for guests who want to stay in the hotel's energy as much as they want to explore the city, that premium is justified. The 9.2 guest rating matches Bode's exactly, meaning guests who want this kind of experience are genuinely happy with what they find. February is a great time to enjoy a heated pool deck and indoor entertainment without Nashville's summer crowds.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the entertainment resort experience — multiple bars, live music on-site, and a hotel that matches Nashville's party energy beat for beat.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville4_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Margaritaville Nashville →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Bode Nashville</strong> if you want a design-forward hotel with real local character and a thoughtful aesthetic — $167 a night, 9.2 rated, and genuinely interesting.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Margaritaville Nashville</strong> if you want the full entertainment resort experience — live music on-site, multiple bars, and a hotel that goes all-in on the Nashville party vibe at $260 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Bode Nashville →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Margaritaville Nashville →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Same guest rating. Completely different soul. Choose your Nashville. 🤠
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
