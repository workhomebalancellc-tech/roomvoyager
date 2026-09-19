"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sheraton CBD vs. Hyatt Regency.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $124 or $161 a night. Seven nights in the Crescent City this spring — two reliable ways in.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Spring in New Orleans is peak season for a reason. The weather is as close to perfect as this city gets — warm enough for a lazy afternoon on a balcony with a Sazerac, cool enough that a long walk from the French Quarter through the Marigny doesn't destroy you. March 27 through April 3 catches the tail end of festival season without the full chaos of Mardi Gras, and the city's food scene — Commanders Palace, Café Du Monde at dawn, cochon de lait po'boys from Domilise's — is in full swing.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal puts two well-regarded CBD hotels side by side for seven nights. The Sheraton New Orleans comes in at $124 a night — a full-service Marriott property with solid reviews and a location that puts you a short walk from the French Quarter and the Superdome. The Hyatt Regency New Orleans steps it up to $161 a night, with the kind of Hyatt polish, amenities, and points earning that make a week-long stay meaningfully more comfortable. The question is whether $37 more per night buys you enough.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Two CBD stalwarts. One week in New Orleans. $37 per night between them.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=450&fit=crop&auto=format"
              alt="Sheraton New Orleans Hotel"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Sheraton New Orleans Hotel — Reliable CBD for $124 a Night
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$124 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Sheraton New Orleans is a 1,100-room full-service hotel right in the CBD, a five-minute walk from the French Quarter and close to the Ernest N. Morial Convention Center. It's a Marriott Bonvoy property, so you're earning points on every night. The rooms are well-maintained, the on-site dining options cover breakfast through late-night, and the lobby bar is exactly the kind of place you want to decompress after a full day of beignets, jazz, and streetcar rides.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $124 a night for seven nights, the Sheraton delivers full-service Marriott reliability at a price that leaves room in the budget for the experiences that make New Orleans worth visiting. With an 8.8 rating across 1,713 reviews, it's well-tested. This is the smart value play for a week in the Crescent City.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Marriott points earners, convention visitors, and travelers who want a full-service CBD hotel without the French Quarter premium.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/neworleans1_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Sheraton New Orleans →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&auto=format"
              alt="Hyatt Regency New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Hyatt Regency New Orleans — Step Up in the CBD for $161 a Night
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$161 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Hyatt Regency New Orleans is the largest hotel in Louisiana — a 1,193-room landmark connected directly to the Superdome complex, with a fitness center, multiple restaurants, and the full Hyatt Regency treatment. Rated 9.2 Wonderful across 1,766 reviews, it consistently outperforms comparable CBD hotels on guest satisfaction. The rooms are larger than average, the service is attentive, and World of Hyatt points stack fast over a seven-night stay.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $37 more per night than the Sheraton, the Hyatt Regency is a meaningful upgrade — better amenities, a higher review score, and World of Hyatt points that can fund future trips. For a full week in New Orleans, that extra $259 total is easy to justify if you want the best CBD option on the block.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> World of Hyatt members, sports fans, and anyone who wants the most polished full-service CBD experience for a week in NOLA.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/neworleans1_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hyatt Regency New Orleans →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sheraton New Orleans</strong> if you want full-service Marriott reliability in the CBD with room in the budget for po'boys, jazz clubs, and beignets. At $124 a night, it's the sharp value pick for seven nights in the Crescent City.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hyatt Regency New Orleans</strong> if you want the best full-service CBD hotel in the city, World of Hyatt points, and a slightly higher guest satisfaction score. At $161 a night, the $37 upgrade is worth it for a full week.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Sheraton New Orleans →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Hyatt Regency New Orleans →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Spring in the Crescent City. Jazz, beignets, and two smart ways to stay. 🎷
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
