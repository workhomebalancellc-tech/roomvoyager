"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

export default function PackagesPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
        <NavBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", textAlign: "center" }}>
          <div style={{ fontSize: "72px", marginBottom: "24px" }}>🌴</div>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 12px" }}>Coming Soon</p>
          <h1 style={{ color: NAVY, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", margin: "0 0 16px", lineHeight: 1.2 }}>Vacation Packages</h1>
          <p style={{ color: "#6B7280", fontSize: "17px", maxWidth: "480px", lineHeight: 1.7, margin: "0 0 40px" }}>
            We're putting together incredible all-inclusive vacation packages with double reward points. Check back soon — it's going to be worth the wait.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/hotels" style={{ background: NAVY, color: "#fff", padding: "13px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>Browse Hotels</a>
            <a href="/cruises" style={{ background: LIGHT_BLUE, color: NAVY, padding: "13px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>Browse Cruises</a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
