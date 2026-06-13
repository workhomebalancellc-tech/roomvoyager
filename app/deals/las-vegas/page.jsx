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

        {/* COMING SOON */}
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ fontSize: "56px", marginBottom: "24px" }}>🎰</div>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", margin: "0 0 12px" }}>Deals Coming Soon</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.7", margin: "0 0 32px" }}>
            We're curating the best Las Vegas hotel and package deals just for you. Check back soon — or get notified when they drop!
          </p>
          <a href="/contact" style={{ display: "inline-block", padding: "12px 32px", background: NAVY, color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Notify Me →
          </a>
        </div>

      </div>
      <Footer />
      <FloatingChat />
    </>
  );
}
