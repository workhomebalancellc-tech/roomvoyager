"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LasVegasDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&h=500&fit=crop&auto=format"
            alt="Las Vegas"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.55) 0%, rgba(0,15,60,0.85) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals for this Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Las Vegas</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>What happens here, earns rewards here.</p>
          </div>
        </div>

        {/* DEALS GRID */}
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 80px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 6px" }}>Limited time</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>This Week's Hotel Deals</h2>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 32px" }}>📅 Check-in: July 3 &nbsp;·&nbsp; Check-out: July 4 &nbsp;·&nbsp; 1 Night</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>

            {/* Luxor */}
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/vegasdeal1_99"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "block", borderRadius: "18px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB", background: "#fff", transition: "transform 0.15s, box-shadow 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)"; }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img
                  src="/luxor1.jpg"
                  alt="Luxor Hotel Las Vegas"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "12px", left: "12px", background: ORANGE, color: "#fff", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>🔥 Deal</div>
              </div>
              <div style={{ padding: "20px 22px 22px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Las Vegas Strip</p>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#111827", margin: "0 0 10px" }}>Luxor Hotel & Casino</h3>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  {["📅 July 3–4", "1 Night", "🎰 Strip Location"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "11px", fontWeight: "600", color: NAVY, background: "#EBF3FF", padding: "4px 10px", borderRadius: "999px" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Earn <strong style={{ color: NAVY }}>5 pts/$1</strong> on this booking</p>
                  <span style={{ background: NAVY, color: "#fff", fontSize: "13px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Book Now →</span>
                </div>
              </div>
            </a>

            {/* Fontainebleau */}
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/vegasdeal1_470"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "block", borderRadius: "18px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB", background: "#fff", transition: "transform 0.15s, box-shadow 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)"; }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img
                  src="/Fontainebleau1.jpg"
                  alt="Fontainebleau Las Vegas"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "12px", left: "12px", background: ORANGE, color: "#fff", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>🔥 Deal</div>
              </div>
              <div style={{ padding: "20px 22px 22px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>Las Vegas Strip</p>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#111827", margin: "0 0 10px" }}>Fontainebleau Las Vegas</h3>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  {["📅 July 3–4", "1 Night", "✨ Luxury"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "11px", fontWeight: "600", color: NAVY, background: "#EBF3FF", padding: "4px 10px", borderRadius: "999px" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Earn <strong style={{ color: NAVY }}>5 pts/$1</strong> on this booking</p>
                  <span style={{ background: NAVY, color: "#fff", fontSize: "13px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Book Now →</span>
                </div>
              </div>
            </a>

          </div>
        </div>

      </div>
      <Footer />
      <FloatingChat />
    </>
  );
}
