"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1545459720-aac8509eb7e8?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville skyline at night"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Neighborhood Boutique vs. Nashville's Only 5-Star.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $147 or $709 a night. February in Music City — two wildly different kinds of stay.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Nashville has a boutique hotel scene that punches well above its weight — guest houses and small properties with real character and neighborhood roots. It also has one of the finest luxury hotels in the American South: a Four Seasons that opened to serious fanfare and has maintained its status ever since. This week's deal puts both ends of that spectrum on the table for Feb 7–14.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Sobro Guest House AvantStay comes in at $147 a night — a stylish boutique property in the SoBro neighborhood south of Broadway, steps from the action, with a distinct Nashville character and a 9.0 guest rating. Four Seasons Nashville lands at $709 a night — a river-view luxury hotel on the Cumberland with every amenity imaginable and a 9.6 guest rating that makes it one of the highest-rated properties in the city. The gap is $562 per night. Whether that gap is worth it depends entirely on what you want from your February trip.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Boutique Nashville soul or five-star river luxury. $147 or $709. This one is personal.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=450&fit=crop&auto=format"
              alt="Sobro Guest House Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Sobro Guest House AvantStay — Boutique Nashville in the SoBro Neighborhood
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$147 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              SoBro — South of Broadway — is the neighborhood that sits just below Nashville's famous honky-tonk strip, and it has become one of the city's most vibrant areas for hotels, restaurants, and music venues. Sobro Guest House AvantStay captures that neighborhood energy in a boutique property that feels distinctly Nashville rather than generic hotel. With a 9.0 guest rating, it's clearly doing something right.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $147 a night, this is exceptional value for a boutique Nashville stay. You're minutes from Broadway's neon strip, the Country Music Hall of Fame, and the best new restaurants opening in the SoBro corridor. For travelers who want character and location over marble lobbies and infinity pools, the Sobro Guest House is the clear choice.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want real Nashville personality, walkable Broadway access, and boutique character — without the luxury hotel price tag.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nas3_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Sobro Guest House →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=450&fit=crop&auto=format"
              alt="Four Seasons Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Four Seasons Nashville — The City's Finest Hotel, Full Stop
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$709 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Four Seasons Nashville is the benchmark. Sitting on the Cumberland Riverfront, it delivers everything the Four Seasons brand promises: floor-to-ceiling river views, a spa that ranks among Nashville's very best, multiple dining options led by the acclaimed Mimo restaurant, and service that earns its 9.6 guest rating. This is Nashville's only true five-star hotel, and it shows.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $709 a night — $4,963 for the full seven nights — the Four Seasons is a significant investment. But for the right traveler on the right trip, there's nothing else in Nashville that touches it. The rooftop terrace views over the Cumberland are extraordinary in February's clear winter air, and the spa is the kind of place you build a full day around. If budget is no object and you want the absolute best Music City has to offer, this is it.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Luxury travelers who want Nashville's finest address — river views, world-class spa, acclaimed dining, and five-star service from arrival to departure.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nas3_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Four Seasons Nashville →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sobro Guest House AvantStay</strong> if you want Nashville character, SoBro neighborhood access, and boutique personality at $147 a night — one of the best-value stays in this city.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Four Seasons Nashville</strong> if you want the city's undisputed finest hotel — Cumberland River views, a world-class spa, and five-star everything at $709 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nas3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Sobro Guest House →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nas3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Four Seasons Nashville →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              $562 separates these two. Only you know which one is right. 🎶
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
