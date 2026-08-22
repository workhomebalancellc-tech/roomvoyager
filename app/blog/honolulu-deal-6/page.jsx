"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function HonoluluDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/57/honolulu_destination.jpg" alt="Waikiki Marriott hotels comparison" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Honolulu</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Marriott vs. Marriott. Same Brand, $88 Apart Per Night.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Courtyard or Waikiki Beach Marriott. One name, two very different Waikiki experiences.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            December 12th through the 16th — four nights in Waikiki, and this week's deal puts the same brand name to the test. Both hotels are Marriott properties on Expedia. Both earn you Marriott Bonvoy points. But they are not the same hotel — not by $88 a night, and not by the gap in ratings between a 7.4 and a 9.0.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Courtyard by Marriott Waikiki Beach at $275 a night sits on Royal Hawaiian Avenue with white sand beach access, two outdoor pools, a hot tub, and three minutes on foot to Beach Walk. Waikiki Beach Marriott Resort & Spa at $363 a night sits on Kalakaua Avenue — two minutes from Waikiki Beach, rated 9.0 out of 10 from nearly 4,000 guests, with two pools, a spa, and the full flagship resort infrastructure. The gap is $88 a night — $352 over four nights. The question is whether the jump from a 7.4 to a 9.0 is worth it.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Same brand, same points. $275 or $363. Marriott's two tiers in December Waikiki.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/57/CourtyardbyMarriottWaikiki1.jpg" alt="Courtyard by Marriott Waikiki Beach" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Courtyard by Marriott Waikiki Beach — Smart Loyalty at $275</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$275 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Courtyard by Marriott Waikiki Beach sits at 400 Royal Hawaiian Avenue — three minutes to Waikiki Beach Walk, five minutes to the Royal Hawaiian Center, with white sand beach access, two outdoor pools, a hot tub, and a poolside cocktail bar. At $275 a night, four nights totals $1,101. That's a legitimate Marriott stay in central Waikiki with pools and beach access, earning full Bonvoy points, at $352 less than the flagship resort down the street.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Courtyard's 7.4 rating from 1,000+ guests is "Good" — the property delivers on the basics without the extras that push the flagship to a 9.0. For Marriott loyalists who want the brand and the points in a solid mid-December Waikiki location, this is the efficient play. The $352 saved over four nights goes straight back into the trip.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Marriott loyalists who want the brand, the points, and two pools in central Waikiki — $275 a night and $352 saved versus the flagship over four nights.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Courtyard Waikiki Beach →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/57/WaikikiBeachMarriott1.jpg" alt="Waikiki Beach Marriott Resort and Spa" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Waikiki Beach Marriott Resort & Spa — Flagship at $363</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$363 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Waikiki Beach Marriott Resort & Spa sits at 2552 Kalakaua Avenue — two minutes from Waikiki Beach, two minutes from the Honolulu Zoo, rated 9.0 out of 10 from nearly 4,000 Expedia guests. That score on that volume is the mark of a property consistently delivering at the flagship level. Two outdoor pools, hot tub, spa, on-site car rental, and an American restaurant — the full resort stack that justifies the premium over the Courtyard.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Four nights at $363 totals $1,451. The Waikiki Beach Marriott's 9.0 rating versus the Courtyard's 7.4 is the clearest way to understand the $88 gap: guests at the flagship consistently rate it "Wonderful." For Elite members, upgrade opportunities at this property are meaningfully better than at the Courtyard, which can push already-good rooms into ocean-view territory.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Marriott's best in Waikiki — a 9.0-rated flagship with two pools, a spa, and two-minute beach access at $363 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/hono6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Waikiki Beach Marriott Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Courtyard by Marriott Waikiki Beach</strong> for the smart loyalty play — same brand, same points, two pools, beach access, and $352 saved over four nights at $275 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Waikiki Beach Marriott Resort & Spa</strong> for Marriott's flagship Waikiki experience — a 9.0 rating from 4,000 guests, two-minute beach access, and a spa at $363 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Courtyard Waikiki Beach →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/hono6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Waikiki Beach Marriott →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Same brand. Different Waikiki. Pick your version of December. 🌺</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
