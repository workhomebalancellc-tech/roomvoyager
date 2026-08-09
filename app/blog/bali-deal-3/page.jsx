"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function BaliDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="/Deals/33/bali_destination.jpg" alt="Bali Jimbaran bay" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Bali</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $10 or $20 a Night. Jimbaran in September.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Bali at its most affordable. The real question is what you do with the rest.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            September 24th through the 27th — three nights in Bali as the dry season winds down. Jimbaran is one of the island's quieter southern neighborhoods: a horseshoe bay famous for its seafood warungs, its proximity to the airport, and the easy access it gives you to Uluwatu's cliffs and temples to the south. It's a less chaotic entry point than Kuta, and at these prices, an extraordinarily affordable one.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is Bali at its most compelling price point. Bali Mystique Hotel and Apartments comes in at $20 a night — an apartment-style stay with more space than a standard hotel room in the Jimbaran area. Kos 168 Jimbaran undercuts it at $10 a night — a clean, no-frills base that makes the entire accommodation budget for three nights just $30. The difference between these two is $30 total. The real comparison is how you want to use Bali's lowest-priced window.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $10 or $20. Three nights in Jimbaran for less than a round of drinks at home.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/33/balimystiquehotel1.jpg" alt="Bali Mystique Hotel and Apartments" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Bali Mystique Hotel and Apartments — Space and Character at $20</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$20 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Bali Mystique Hotel and Apartments offers the apartment format at $20 a night — more room, more storage, and the option of a kitchen for a three-night stay that already costs next to nothing. The Mystique name hints at a property with character: the kind of place that leans into Bali's aesthetic rather than fighting it. Well-designed, well-priced, and well-positioned for both Jimbaran's bay and the Uluwatu surf.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $60 for three nights, the Mystique gives you a genuine Bali base without the constraints of a cramped budget room. Three nights here plus the Jimbaran seafood warungs, a sunset at Uluwatu temple, and a morning at the beach barely dents a travel budget. This is Bali done right for almost nothing.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want apartment-style space in Jimbaran — more room, more character, $20 a night for one of Bali's best-value three-night stays.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Bali Mystique Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/33/kos168jimbaran1.jpg" alt="Kos 168 Jimbaran" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Kos 168 Jimbaran — Three Nights in Bali for $30 Total</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$10 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Kos 168 Jimbaran is $10 a night in Bali. Three nights costs $30. That number alone makes a case that's hard to argue with. The Kos concept is clean, simple accommodation at a price that puts Bali within reach of anyone with a passport and a flight — the room is a base, the island is the experience. Jimbaran's bay, the Uluwatu temple at sunset, the seafood warungs: none of that costs extra. The accommodation just doesn't either.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For travelers who believe the best travel budget is the one spent on experiences rather than rooms, Kos 168 makes Bali mathematically irresistible. Three nights in one of the world's most beautiful destinations for $30 in accommodation is a deal that belongs in a different category entirely.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Budget travelers who want to maximize every dollar in Bali — $10 a night for three nights leaves the entire remaining budget for the island itself.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/bali3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Kos 168 Jimbaran →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Bali Mystique Hotel and Apartments</strong> for apartment-style space and character at $20 a night — $60 for three nights in Jimbaran with room to actually spread out.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Kos 168 Jimbaran</strong> if $30 for three nights in Bali sounds like the smartest thing you've heard all week — because it is.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Bali Mystique Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/bali3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Kos 168 Jimbaran →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Jimbaran in late September. The sunset alone is worth the flight. 🌅</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
