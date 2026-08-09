"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MiamiDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/43/miami_destination.jpg"
            alt="Miami Brickell skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Miami</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Two Polished Picks. $29 Apart.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Dadeland comfort or downtown cool. Miami in late October at its most dialed-in.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            October 28th through the 29th — a quick overnight or two-night Miami stay right at the end of the month. The city is deep in its best season: warm evenings, great restaurant availability, and the tail end of Halloween energy still in the air. A weekend like this doesn't need a full resort; it needs a hotel that's polished enough to feel like a real stay without the full-week commitment.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This week's deal is two well-regarded Miami hotels priced just $29 apart. Tucker at Palmer Dadeland Miami brings Marriott-backed reliability to the Dadeland corridor at $250 a night. The Elser Hotel Miami sits downtown at $221 a night — a sleek, modern property that puts you in the heart of Brickell with everything the city has to offer right outside. Both are polished, both are worth it, and the $29 difference barely matters — which makes the location decision everything.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Dadeland ease or Brickell energy. $29 apart — this one comes down to the neighborhood.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Tucker at Palmer Dadeland */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/43/tuckeratpalmerdadeland1.jpg"
              alt="Tucker at Palmer Dadeland Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Tucker at Palmer Dadeland — Marriott Quality in a Quieter Corner of Miami
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$250 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Tucker at Palmer Dadeland is a Marriott Autograph Collection property — which means independent character backed by Marriott's reliability and Bonvoy points. The Dadeland location puts you at the southern end of the Metrorail, minutes from Coral Gables, the Mall at Dadeland, and an easy train ride to Brickell and downtown. The property itself is well-designed with the kind of finish that justifies the Autograph Collection designation: thoughtful, polished, and distinctly not generic.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $250 a night, Tucker delivers reliable Marriott quality in one of Miami's most connected suburban locations. For a late-October overnight or two-night stay, this is the option for travelers who value a smooth, well-run experience over being in the thick of downtown.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Marriott Autograph Collection quality in a quieter Miami location — great access to Coral Gables and Dadeland, easy Metrorail connection to the city.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami6_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Tucker at Palmer Dadeland →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — The Elser Hotel */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/43/elserhotelmiami1.jpg"
              alt="The Elser Hotel Miami"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Elser Hotel Miami — Downtown Modern in the Heart of Brickell
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$221 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Elser Hotel is one of Miami's newer downtown properties — a sleek, modern all-suite hotel in the heart of Brickell that puts you in the middle of everything. Rooftop pool, well-appointed suites with full kitchens, and a location that makes Brickell City Centre, Mary Brickell Village, the Underline, and the waterfront all walkable. For a late-October stay when the city is at its most alive, being downtown at $221 a night is a genuinely strong position.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $29 less per night than Tucker, The Elser saves you $58 over two nights while putting you closer to the action. The suite format means more space than a standard room, the rooftop pool delivers the Miami view you came for, and Brickell's restaurant and nightlife scene is right outside your door. For a Halloween-adjacent weekend, this is the more obvious choice.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to be downtown — rooftop pool, full suites, Brickell location, and $29 less per night than the competition.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/miami6_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Elser Hotel Miami →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Tucker at Palmer Dadeland</strong> if you want Marriott Autograph Collection quality in a quieter, well-connected part of Miami — reliable, polished, and easy in every direction.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Elser Hotel Miami</strong> if you want to be in the middle of Brickell — rooftop pool, full suite, $29 less per night, and the best of downtown Miami right outside.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami6_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Tucker at Palmer Dadeland →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/miami6_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                The Elser Hotel Miami →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Late October Miami. Two great options, one easy weekend. 🌴
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
