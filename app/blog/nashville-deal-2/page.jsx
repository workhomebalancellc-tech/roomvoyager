"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1567683878386-83dc92a7da3c?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville Broadway neon lights"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Airport Budget vs. Urban Apartment Style.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both under $80 a night. Two very different budget experiences for February in Music City.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            You don't have to break the bank to spend a week in Nashville this February. The city's budget tier has two genuinely distinct options — and they're $8 apart. One keeps it simple near the airport and gives you clean, no-fuss lodging. The other puts you in a stylish apartment-style suite in one of Nashville's most interesting creative neighborhoods, complete with a rooftop pool and kitchen.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Baymont by Wyndham Nashville Donelson comes in at $71 a night — a well-reviewed budget hotel near the airport that's easy to access, easy to park, and easy on the wallet. Mint House at Marathon Village lands at $79 a night — a boutique apartment-hotel in a converted industrial complex near Germantown and the Bicentennial Mall with a rooftop pool and full kitchen in every room. Both are available for the full seven-night stretch from Feb 7–14.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Airport ease or urban creative neighborhood. Both under $80. Nashville in February, your call.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&h=450&fit=crop&auto=format"
              alt="Baymont by Wyndham Nashville Donelson"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Baymont by Wyndham Nashville Donelson — Budget Done Right
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$71 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Baymont by Wyndham Nashville Donelson is the honest, reliable budget pick. Situated in the Donelson area near Nashville International Airport, it's got free parking, straightforward access from I-40, and a well-reviewed reputation for clean rooms and friendly service. If you're flying in and out and want the simplest possible logistics for a February trip, this is the play.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $71 a night — $497 for the full seven nights — the Baymont frees up significant budget for the things that actually make Nashville worthwhile: the live music scene, the legendary hot chicken spots, and the honky-tonk stretch on Broadway. It earns Wyndham Rewards points too, so this trip can contribute toward future stays.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the cheapest well-reviewed option with free parking and easy airport access — minimal fuss, maximum savings.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville2_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Baymont Donelson →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=450&fit=crop&auto=format"
              alt="Mint House at Marathon Village Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Mint House at Marathon Village — Apartment-Style Living at a Budget Price
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$79 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Mint House at Marathon Village is one of Nashville's most interesting budget stays. Set inside a converted industrial building in the Marathon Village complex — an old automobile factory turned creative hub — it offers full apartment-style suites with kitchens, a rooftop pool, and a level of design and character that you'd normally pay two or three times more for. The 9.0 guest rating says it all: this is a genuinely well-loved property.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $79 a night for February 7–14 ($685 total), Mint House is remarkable value. The kitchen means you can save on meals when you want to. The rooftop pool gives you a vibe that feels much more upscale than the price suggests. And the Marathon Village neighborhood puts you close to Germantown, the Farmers Market, and the Tennessee State Capitol area — a more local, less tourist-saturated slice of Nashville.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want apartment-style comfort, a full kitchen, and a rooftop pool in a creative neighborhood — for just $8 more per night than a basic budget hotel.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nashville2_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Mint House Marathon Village →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Baymont by Wyndham Donelson</strong> if you want the simplest, cheapest well-reviewed option — free parking, easy airport access, and straightforward budget travel at $71 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Mint House at Marathon Village</strong> if you want something with real character — a full kitchen, rooftop pool, and apartment-style living in a cool Nashville neighborhood for just $8 more per night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Baymont Donelson →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nashville2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Mint House Marathon Village →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Both under $80 a night. Nashville's budget sweet spot this February. 🎵
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
