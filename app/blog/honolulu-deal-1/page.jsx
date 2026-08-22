"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal1Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/52/honolulu_destination.jpg" alt="Waikiki Beach Honolulu" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $89 or $129 a Night. Waikiki in December.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              The same beach, the same sunset. One costs $40 less per night.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 4th through the 11th — seven nights in Honolulu as the holiday season settles over Waikiki. December in Hawaii is a revelation for travelers who expect the tropics to shut down for winter: the weather stays warm, the ocean stays swimmable, and the crowds thin out just enough to make everything feel a little more personal. The island doesn't turn the lights off in December. It just turns them a different shade of gold.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is about the simplest decision in Waikiki travel: how much of your budget goes to the room, and how much goes to everything else. Bposhtels Waikiki Retreat at $89 a night is the floor — a clean, well-located property with a pool, steps from Beach Walk and eight minutes on foot to Waikiki Beach, at a price that leaves serious room in your budget for the things that make Honolulu worth the flight. Queen Kapiolani Hotel at $129 a night is the upgrade — a proper hotel with history, views, and Diamond Head right outside the window. The math is $40 a night. Over seven nights, that's $280 you either spend on the room or on Honolulu.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $89 or $129. The beach is the same. December in Waikiki — the only wrong move is staying home.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/52/BposhtelsWaikiki1.jpg" alt="Bposhtels Waikiki Retreat" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Bposhtels Waikiki Retreat — Budget Waikiki at $89</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$89 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Bposhtels Waikiki Retreat is what budget travel in Hawaii looks like when it works: a clean property on Beach Walk with a pool, a restaurant on-site, and a location that keeps you steps from the action — Waikiki Beach Walk is a two-minute walk, Waikiki Beach itself is eight minutes on foot. At $89 a night for seven nights, the total is $623. That's the entire accommodation budget for a week in one of the most expensive tourist destinations in America, which means the rest of your money goes toward the things that justify the flight: North Shore shave ice, a Pearl Harbor tour, a sunrise hike up Diamond Head, a sunset catamaran sail off Waikiki.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              December at the Waikiki Retreat is easy, uncomplicated travel. The pool is a bonus, the location is excellent, and the price leaves real breathing room in a city that can drain a budget faster than almost anywhere in the country. This is budget Hawaii done correctly — and done correctly means you can actually afford to experience the island.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want to maximize every dollar in Honolulu — $89 a night, pool, steps from Beach Walk, eight minutes to Waikiki Beach.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Bposhtels Waikiki Retreat →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/52/QueenKapiolani1.jpg" alt="Queen Kapiolani Hotel" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Queen Kapiolani Hotel — Diamond Head Views at $129</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$129 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Queen Kapiolani Hotel is named after the beloved Hawaiian queen and positioned at the quieter, more residential end of Waikiki — near Kapiolani Park, away from the most congested tourist strip, and with direct views of Diamond Head that the hotels deeper in Waikiki can't offer. At $129 a night, it's one of the best-value proper hotels in Honolulu: a rooftop pool, private rooms, and the kind of address that puts you near the beach without putting you in the middle of the commercial circus.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Seven nights at $129 comes to $903 — still well under what Waikiki's resort corridor charges for similar or worse positions. The Diamond Head end of Waikiki is the smart location play: walkable to everything, calmer in the mornings, and positioned right next to the park where Honolulu runs, bikes, and holds its weekend farmers market.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a proper hotel at a competitive price — Diamond Head views, rooftop pool, and the quieter end of Waikiki at $129 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Queen Kapiolani Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Bposhtels Waikiki Retreat</strong> if you want to spend your money on Honolulu rather than a hotel room — $89 a night, pool included, eight minutes from the beach, and $280 extra in your pocket over seven nights.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Queen Kapiolani Hotel</strong> for a proper hotel with Diamond Head views and a rooftop pool at $129 a night — the best full-service value on this end of Waikiki.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono1_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Bposhtels Waikiki Retreat →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono1_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Queen Kapiolani Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>December in Waikiki. The tradewinds don't care what you paid for the room. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
