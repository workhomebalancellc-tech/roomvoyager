"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sonesta Convention Center vs. The Saint.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $152 or $158 a night. Three nights — extended-stay suites or a French Quarter Autograph Collection boutique.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Sometimes the most interesting deals aren't about the price gap — they're about two completely different hotel philosophies at nearly identical rates. This three-night window from March 27 to March 30 offers exactly that: two hotels within $6 of each other per night, one an extended-stay suite property near the convention center, the other a boutique Autograph Collection hotel in the French Quarter with 5,409 reviews behind it.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            At $152 vs. $158 a night, the choice here isn't about money — it's about what kind of three nights in New Orleans you want to have. Sonesta ES Suites Convention Center gives you space, a kitchen, and proximity to the convention center and the Warehouse District. The Saint Hotel gives you French Quarter soul, a rooftop pool, boutique design, and one of the most-reviewed hotel reputations in the city.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $152 or $158. The price is almost the same. The experience is completely different.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=450&fit=crop&auto=format"
              alt="Sonesta ES Suites Convention Center"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sonesta ES Suites Convention Center — Space and a Kitchen for $152 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$152 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sonesta ES Suites Convention Center is an extended-stay suite hotel in the Arts and Warehouse District, next to the Ernest N. Morial Convention Center. Every suite comes with a full kitchen, a separate living area, and significantly more space than a standard hotel room. It's the practical choice for business travelers, families, or anyone who wants a home-base feel for three nights rather than a boutique experience.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $152 a night, Sonesta ES Suites Convention Center is essentially tied on price with The Saint — but the experience is completely different. If you want to cook your own breakfast, have space to spread out, and come home to a living room after a long day on Frenchmen Street, this is your pick.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Conference attendees, families, and travelers who prioritize space and kitchen access over boutique design.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans5_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sonesta ES Suites Convention Center →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=450&fit=crop&auto=format"
              alt="The Saint Hotel New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Saint Hotel, Autograph Collection — French Quarter Boutique at $158 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$158 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Saint Hotel is a Marriott Autograph Collection property in the French Quarter — which means it's been independently designed and curated, not cookie-cutter. With 5,409 reviews and an 8.6 Excellent rating (the highest review count of any hotel in this full deal set), The Saint is one of New Orleans' most battle-tested boutique hotels. The rooftop pool, the bar scene, the design details — all of it screams French Quarter cool without the Bourbon Street chaos. Bonvoy points, boutique character, and a prime location.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $158 a night — just $6 more than Sonesta — The Saint Hotel is the obvious choice if the French Quarter experience is what you came to New Orleans for. You're at the center of everything: the food, the music, the history. Three nights here is three nights inside the real New Orleans.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Boutique hotel seekers who want French Quarter atmosphere, Bonvoy points, and the most-reviewed mid-range hotel in this deal set.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans5_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Saint Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sonesta ES Suites Convention Center</strong> if you need space, a kitchen, and proximity to the convention center — practical, comfortable, and $6 cheaper per night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>The Saint Hotel</strong> if you want the most-reviewed boutique in the French Quarter, a rooftop pool, and Bonvoy points for just $6 more a night. At this price, it's a no-brainer for the French Quarter experience.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sonesta Convention Center →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Saint Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Three NOLA nights. $6 apart. The decision is all about what you came here for. 🎷</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
