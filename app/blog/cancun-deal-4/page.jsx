"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function CancunDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&h=700&fit=crop&auto=format"
            alt="Cancún Hotel Zone"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Cancún</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              The Safe Bet vs. The Cool New Thing.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both are worth it. The question is what kind of spring break you're after.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Spring break in Cancún — March 14th through the 21st — and the Hotel Zone is at its most electric. The weather is perfect, the beaches are packed with energy, and everyone on the strip made the same smart call. The all-inclusive decision is already settled. Now comes the one that actually matters: which resort?
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Iberostar Cancún and Live Aqua Beach Resort both sit in the Hotel Zone, both are adults-only, and both deliver solid all-inclusive experiences. But their personalities couldn't be more different. Iberostar is the established name — consistent, well-run, and exactly what it promises. Live Aqua is the property people are talking about right now — sensory-forward, design-driven, and built for guests who care as much about the aesthetic as the amenities.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Iberostar Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=520&fit=crop&auto=format"
              alt="Iberostar Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Iberostar Cancún — The Reliable All-Inclusive
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>~$175 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Iberostar has been getting Cancún right for decades, and the Cancún property shows it. Beachfront location on one of the best stretches of the Hotel Zone, multiple pools, a full roster of restaurants and bars, and a level of service that comes from a brand that's had years to work out every detail. You know what you're getting — and what you're getting is genuinely good.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At around $175 a night all-inclusive, Iberostar sits in the sweet spot where the price feels justified and the experience delivers. Spring break crowds will be here, but the property handles volume well. The beach is excellent, the food is a step above the average all-inclusive spread, and the pools stay energetic without tipping into chaos. If you want spring break done right without a single unpleasant surprise, Iberostar is the call.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a proven beachfront all-inclusive — great food, reliable service, and a property that handles spring break crowds without missing a beat.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun4_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Iberostar Cancún →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Live Aqua Beach Resort */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=520&fit=crop&auto=format"
              alt="Live Aqua Beach Resort Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Live Aqua Beach Resort — Cancún's Coolest Address
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>~$300 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Live Aqua built its reputation on a simple idea: an all-inclusive resort should engage all your senses, not just feed you and point you to the beach. The property is adults-only, design-forward, and centered around a spa concept that runs through every part of the experience — from the scented common areas to the curated music program to the zero-gravity pool experience. It's a resort that has a point of view, and that point of view is immaculate.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For spring break, Live Aqua draws the crowd that wants the upscale version of the week — a quieter pool scene, better cocktails, restaurants that feel like actual restaurants, and a beach setup that doesn't feel like organized chaos. At around $300 a night, you're paying for the upgrade in atmosphere as much as the amenities. If the aesthetic matters and you want a spring break that looks as good as it feels, this is your property.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Adults who want a refined, design-driven all-inclusive — spa culture, upscale dining, and a resort that's as much about the vibe as the view.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun4_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Live Aqua Beach Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Iberostar Cancún</strong> if you want a proven beachfront all-inclusive that delivers on every promise — great beach, solid food, reliable service, and a spring break that goes exactly as planned.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Live Aqua Beach Resort</strong> if the vibe is the whole point — a spa-forward, design-driven adults-only property where spring break looks and feels like a step above everything around it.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun4_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Iberostar Cancún →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun4_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Live Aqua Beach Resort →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Spring break hits different when the resort is right. 🌴
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
