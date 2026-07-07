"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&h=700&fit=crop&auto=format"
            alt="Paris"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deal of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Two Sides of Paris
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              Pigalle's electric energy vs. the grandeur of the Champs-Élysées
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Paris has many personalities — and this week's deal captures two of the best. One hotel sits in the heart of Pigalle, one of the city's most vibrant and fast-evolving neighborhoods. The other puts you steps from the Arc de Triomphe, in the grand 8th arrondissement where Paris does its most impressive impression of itself.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Different vibes, different budgets, same city. Here's how to choose.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-4/hotelsaintlouisp1.jpg"
              alt="Hotel Saint Louis Pigalle"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Hotel Saint Louis Pigalle — The Paris Everyone's Talking About
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Pigalle has had a glow-up. The neighborhood that was once known purely for its cabaret history and the Moulin Rouge is now one of the most exciting places to eat, drink, and stay in Paris. Natural wine bars, chef-driven bistros, record shops, and cocktail bars that don't close until the early hours — Pigalle is where the city's creative energy has landed, and Hotel Saint Louis Pigalle sits right in the middle of it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              From here, Montmartre is a short walk uphill. The Moulin Rouge is practically on your doorstep. And when you want to venture further, the metro connections are excellent — you're never far from anywhere in Paris that matters. But honestly, the best parts of staying here are right outside the front door: the kind of neighborhood that surprises you every time you turn a corner.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Night owls, food lovers, creative travelers, and anyone who wants to be in the Paris neighborhood that Parisians are actually excited about right now.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal4_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Saint Louis Pigalle →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-4/hotelkorner1.jpg"
              alt="Hotel Korner Etoile"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Hotel Korner Etoile — Grand Paris, Without the Grand Price Tag
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The 8th arrondissement is where Paris puts its best foot forward. The Champs-Élysées. The Arc de Triomphe. Haussmann boulevards so wide and so perfectly proportioned they make you feel like you've walked into a painting. This is the Paris of postcards and dreams — and Hotel Korner Etoile puts you right inside it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              What makes it special is the value. Staying near the Etoile usually means paying luxury prices for the address. Korner changes that equation — a design-forward boutique hotel that delivers style, comfort, and one of the best locations in Paris without the eye-watering nightly rate. Walk to the Arc de Triomphe in minutes. Stroll the Champs-Élysées. Catch the Eiffel Tower from nearby viewpoints. This is Paris at its most iconic, and you don't have to spend a fortune to experience it.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> First-time visitors who want the full Paris experience, couples who want a grand setting without a grand bill, and anyone whose Paris bucket list starts with the Arc de Triomphe.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal4_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Hotel Korner Etoile →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Saint Louis Pigalle</strong> if you want to stay somewhere with real energy — a neighborhood that's alive at midnight, full of great food and drink, and feels genuinely exciting rather than just touristy.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Hotel Korner Etoile</strong> if you want the grand Paris experience — the big boulevards, the iconic landmarks, the feeling of being right in the middle of one of the world's most beautiful cities.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal4_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hotel Saint Louis Pigalle →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal4_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Hotel Korner Etoile →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Earn points. See Paris. Come home changed. 🗼
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
