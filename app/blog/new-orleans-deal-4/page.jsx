"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sonesta Suites vs. Courtyard FQ.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $121 or $181 a night. Four nights in New Orleans — suite-style CBD or top-rated French Quarter Marriott.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Four nights is enough for New Orleans to work its magic without wearing you out. You can do a proper NOLA food crawl — breakfast at Brennan's, a late lunch at Dooky Chase's, dinner at Galatoire's — while still leaving time for the Frenchmen Street music scene and a lazy afternoon in the Garden District. March 27 through March 31 is the perfect warm-weather window before the humidity sets in.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal compares two solid four-night options with $60 between them per night. Sonesta ES Suites Downtown at $121 a night gives you a kitchen, more space than a standard hotel room, and a CBD location with streetcar access. The Courtyard by Marriott French Quarter/Iberville at $181 a night is rated 9.4 Exceptional — one of the highest scores of any hotel in this deal set — and puts you directly inside the Quarter. Four nights means the $240 difference is meaningful.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            CBD suite-style or top-rated French Quarter Marriott. Four nights, $60 apart.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop&auto=format"
              alt="Sonesta ES Suites Downtown New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sonesta ES Suites Downtown — Suite-Style CBD at $121 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$121 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sonesta ES Suites Downtown is the extended-stay play — a fully equipped kitchen in every suite, more living space than a standard hotel room, and a CBD location that puts you a short streetcar ride from the French Quarter. Rated 8.2 Very Good across 2,503 reviews (the highest review count in this deal), it's well-tested for longer stays and consistently delivers on comfort and value. For four nights, the kitchen means you can skip the hotel breakfast markup and grab coffee from a nearby boulangerie like a local.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $121 a night, Sonesta ES Suites is the value choice that doesn't feel like a compromise. You're getting more space, more flexibility, and a lower price — the $240 you save over the Courtyard FQ funds two or three serious dinners in a city where eating well is the whole point.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Families, couples who like kitchen flexibility, and budget-conscious travelers who want more space for less money.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans4_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sonesta ES Suites Downtown →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=450&fit=crop&auto=format"
              alt="Courtyard by Marriott French Quarter"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Courtyard by Marriott French Quarter/Iberville — Top-Rated at $181 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$181 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Courtyard by Marriott French Quarter/Iberville is the highest-rated hotel in this deal set — 9.4 Exceptional across 1,580 reviews, which is an exceptional score for a Courtyard-branded property. The Iberville location puts you right on the edge of the French Quarter proper, within easy walking distance of Bourbon Street, the waterfront, and the best of the Quarter without being in the middle of the noise. The rooms are modern, service is sharp, and Bonvoy points stack well over a four-night stay.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $181 a night for four nights, the Courtyard FQ is the precision upgrade — you're paying for the location, the rating, and the Marriott infrastructure in a neighborhood that makes every morning walk feel like part of the experience. Worth every dollar if the French Quarter is your priority.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Bonvoy members who want the best-reviewed Marriott in the French Quarter, with a location that makes the neighborhood part of every morning.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans4_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Courtyard by Marriott French Quarter →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sonesta ES Suites Downtown</strong> if you want more space, a kitchen, and $240 in savings to spend on food and experiences. The value-to-quality ratio is hard to beat at $121 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Courtyard by Marriott French Quarter</strong> if you want the highest-rated hotel in this deal, a prime French Quarter location, and Bonvoy points on a four-night stay.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sonesta ES Suites →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Courtyard French Quarter →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Four nights in New Orleans. Suites or the Quarter — both earn you a NOLA story. 🎷</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
