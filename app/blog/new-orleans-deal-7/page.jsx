"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sonesta ES Suites vs. New Orleans Marriott.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $121 or $139 a night. Seven nights in the Crescent City — kitchen-equipped suites or full-service FQ Marriott.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            A full week in New Orleans is a different trip than a long weekend. You stop rushing. You find a neighborhood coffee shop you like and go back twice. You learn which streetcar stop drops you closest to Frenchmen Street. You eat at the same po'boy counter twice because the first one was that good. March 27 through April 3 is seven days to let New Orleans do its thing — and for a week-long trip, where you sleep matters more than it does for a weekend.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal compares two seven-night options only $18 apart per night. Sonesta ES Suites Downtown at $121 gives you a kitchen, living room, and extended-stay comfort in the CBD — ideal if you plan to cook a few breakfasts and want the feeling of an apartment rather than a hotel room. The New Orleans Marriott at $139 is a 41-story full-service hotel at the edge of the French Quarter with a rooftop pool, a full restaurant, and Bonvoy points on every night. Over seven nights, the gap is $126.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Suite life or rooftop pool Marriott. Seven nights, $126 apart total.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=450&fit=crop&auto=format"
              alt="Sonesta ES Suites Downtown New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Sonesta ES Suites Downtown — Seven-Night Suite Life at $121 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$121 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sonesta ES Suites Downtown is built for the kind of stay where you actually use the kitchen. Every suite has a full kitchen with a refrigerator, microwave, and stovetop — so you can do a Saturday market run at the French Market, grab fresh ingredients, and cook a proper breakfast before heading out. The living area gives you space to decompress after a long day of walking, eating, and music. Rated 8.2 Very Good across 2,503 reviews — the highest review count of any hotel in this deal.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $121 a night for seven nights, Sonesta ES Suites is the most affordable full-week option in this deal set. You're saving $126 over the Marriott — enough for a proper tasting menu at one of the city's better restaurants. It's the smart play for anyone who wants an apartment feel and prefers to put money toward experiences.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Week-long visitors who want kitchen access, more living space, and the lowest per-night rate for a solid CBD property.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans7_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Sonesta ES Suites Downtown →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&auto=format"
              alt="New Orleans Marriott"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>New Orleans Marriott — French Quarter Full-Service at $139 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$139 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The New Orleans Marriott at Canal and Chartres is a 41-story full-service hotel with a rooftop pool overlooking the French Quarter, multiple restaurants, and a location that gives you walking access to Bourbon Street, Royal Street, the riverfront, and Café Du Monde without needing a streetcar or a rideshare. Rated 9.0 Wonderful across nearly 2,000 reviews, it consistently delivers on the core Bonvoy promise: well-maintained rooms, reliable service, and points on every night. For a seven-night stay, that's significant Bonvoy accumulation.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $139 a night — just $18 more than Sonesta — the Marriott adds the rooftop pool, a French Quarter-edge location, and full-service amenities. Over a week, that $126 premium buys you a meaningfully different daily experience: wake up, take the elevator to the rooftop, and look out over the Quarter with your coffee before heading out. That's a real upgrade.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Marriott Bonvoy members who want a rooftop pool, a French Quarter location, and full-service amenities for a week-long NOLA stay.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans7_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book New Orleans Marriott →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sonesta ES Suites Downtown</strong> if you want a kitchen, more living space, and $126 in your pocket for the city's food scene. Best value for a full week in NOLA.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>New Orleans Marriott</strong> if $18 more a night buys you enough: a rooftop pool, a French Quarter edge location, and Bonvoy points on seven full nights.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Sonesta ES Suites →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>New Orleans Marriott →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Seven nights in the Crescent City. Two smart picks, $18 apart. 🎷</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}
