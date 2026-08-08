"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function CancunDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=1600&h=700&fit=crop&auto=format"
            alt="Cancún Hotel Zone beachfront"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Cancún</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Old Cancún Charm vs. Modern Luxury.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              A classic beachfront hotel and a sleek adults-only all-inclusive — same strip, different eras.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            November in Cancún is prime travel season — the summer heat has softened, the Hotel Zone is busy but not overwhelmed, and the beach is exactly what you came for. This week's deal covers two different windows in the month, which tells its own story about who each property is right for.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Krystal Cancún is available November 4th through the 7th at $208 a night — a classic beachfront hotel, no all-inclusive required. Secrets The Vine is priced at $535 a night for November 26th through the 30th — a sleek adults-only all-inclusive where everything is already handled. Different dates, different price points, completely different versions of Cancún.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Classic Hotel Zone freedom or modern adults-only luxury. November has room for both.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Krystal Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=520&fit=crop&auto=format"
              alt="Krystal Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Krystal Cancún — The Classic That Earns It
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$208 / night · Nov 4–7</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Krystal Cancún sits on a prime stretch of Hotel Zone beachfront and has been doing so long enough to have figured out what guests actually want. Direct beach access, multiple pools, solid on-site dining, and rooms with ocean views that justify the address. There's no all-inclusive required here — you pay for what you use, which for summer travelers who want to explore the Hotel Zone's restaurants and nightlife is exactly the right setup.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $208 a night for November 4th through the 7th, Krystal puts you on one of the best beaches in the zone without locking you into a resort bubble. Early November in Cancún means evenings on the strip, fresh seafood dinners off-property, and the kind of trip where the hotel is a great home base rather than the entire plan. Classic Hotel Zone energy at a price that still makes sense.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a well-located beachfront hotel without the all-inclusive price tag — great pools, solid beach, and the freedom to explore the Hotel Zone on your own terms.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun5_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Krystal Cancún →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Secrets The Vine */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&h=520&fit=crop&auto=format"
              alt="Secrets The Vine Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Secrets The Vine — Modern Cancún at Its Best
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$535 / night all-inclusive · Nov 26–30</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Secrets The Vine is what happens when a resort takes the all-inclusive formula and rebuilds it from scratch with contemporary design and adults-only standards. The property is clean-lined, modern, and visually striking — infinity pools, ocean-view suites, and a level of finish that makes it immediately clear this isn't your average Cancún resort. The Secrets brand has earned its reputation, and The Vine is the property that best shows why.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Everything is included and everything is done well — multiple gourmet restaurants, premium bars, a full spa, and a beach setup that feels curated rather than crowded. For late November, the adults-only environment keeps the energy sophisticated without being stuffy. At $535 a night all-inclusive, the math works out well when you factor in what comparable quality dining and drinks would run off-property. This is the version of Cancún you come back bragging about.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Adults who want modern design, gourmet dining, and a polished all-inclusive experience — the kind of late-November trip that looks as good as it feels.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun5_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Secrets The Vine →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Krystal Cancún</strong> if you want a classic beachfront hotel with great location and zero all-inclusive commitment — solid pools, direct beach access, and the freedom to eat and explore the Hotel Zone on your own schedule.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Secrets The Vine</strong> if modern design and a polished all-inclusive experience are the point — gourmet dining, stunning pools, and a summer week that feels like the upgraded version of every Cancún trip you've taken before.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun5_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Krystal Cancún →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun5_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Secrets The Vine →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              November in Cancún. Pick your dates, pick your style. 🌊
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
