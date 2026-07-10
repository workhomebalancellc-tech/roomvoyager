"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function OrlandoDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=1600&h=700&fit=crop&auto=format"
            alt="Orlando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Orlando</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Disney or Universal? Your Hotel Just Answered That.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Two sides of Orlando. Two nights. One decision.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            August 13th through the 15th in Orlando. The question isn't just which hotel — it's which side of the city. Lake Buena Vista puts you in Disney's backyard. Universal Blvd puts you at the doorstep of Universal Studios. At just $14 a night apart, this deal is really about one thing: where are you spending your days?
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Rosen Inn Lake Buena Vista at $66 a night has the Disney families covered. DASKK Orlando Hotel near Universal Blvd at $80 a night has the Universal crowd sorted. Pick your park. The hotel follows.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Rosen Inn Lake Buena Vista */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/orlando-deal-2/roseninn1.jpg"
              alt="Rosen Inn Lake Buena Vista"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Rosen Inn Lake Buena Vista — Disney's Doorstep
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$66 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Lake Buena Vista is where families who are serious about Disney stay. You're right in the middle of it — Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom are all within easy reach, and Disney Springs is just minutes away. Rosen isn't a chain; it's an Orlando institution. Local ownership, consistently strong reviews, and a reputation built over decades of knowing exactly what guests need when they're spending their days at the parks.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $66 a night, you're keeping the budget tight for everything the Disney bubble costs — and it costs plenty. The savings on the room translate directly into another meal, another FastPass, another night at the parks. Rosen Inn gets the job done and then some, and the location does the rest.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Disney families, EPCOT visitors, anyone planning multiple park days on the Walt Disney World side of Orlando.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando2_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Rosen Inn Lake Buena Vista →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — DASKK Orlando */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/orlando-deal-2/daskk1.jpg"
              alt="DASKK Orlando Hotel near Universal Blvd"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                DASKK Orlando Hotel — Universal Blvd's Best Value
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$80 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Universal Blvd is the right address if Universal Studios, Islands of Adventure, and Volcano Bay are on the itinerary. DASKK Orlando Hotel puts you right in that corridor — easy access to the parks, close to International Drive's restaurants and entertainment, and positioned to make the most of the Universal side of the city without paying resort prices.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $80 a night, you're paying $14 more than the Rosen Inn — $28 total over two nights. That premium buys you the Universal Blvd address and everything that comes with it. If your August 13th weekend is built around Harry Potter World and the roller coasters at Islands of Adventure, DASKK is the move and the price is still very fair for the location.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Universal Studios fans, International Drive explorers, travelers who want to be in the thick of the city's biggest entertainment corridor.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando2_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book DASKK Orlando Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Rosen Inn Lake Buena Vista</strong> if your August trip is built around Disney — Magic Kingdom, EPCOT, the whole world. At $66 a night, the location is perfect and the price keeps your park budget intact.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>DASKK Orlando Hotel</strong> if Universal Studios and International Drive are where you're spending your days. The extra $14 a night puts you exactly where you need to be.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando2_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Rosen Inn Lake Buena Vista →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando2_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                DASKK Orlando Hotel →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Disney or Universal? Your hotel just answered that. 🎢
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
