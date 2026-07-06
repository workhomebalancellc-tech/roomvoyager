"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDeal3Blog() {
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
              Hidden Gem Paris
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              Two boutique hotels that feel like a local secret
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Paris doesn't have to cost a fortune to feel incredible. This week we're spotlighting two boutique hotels that prove you can stay somewhere with real personality — great location, genuine charm — without blowing your budget before you've even had your first croissant.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Both are under the radar. Both are worth every euro. And neither one is the hotel everyone else is staying at.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-3/Timhotel1.jpg"
              alt="Timhotel Opéra Blanche Fontaine"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Timhotel Opéra Blanche Fontaine — Classic Paris at the Opera
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Steps from the Palais Garnier and the grand boulevards of the 9th arrondissement, Timhotel Opéra Blanche Fontaine puts you at the heart of classic Paris. This is the neighborhood of Haussmann-era architecture, café terraces that spill onto wide sidewalks, and the kind of streets that make you slow down and look up.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              You're close to everything — the Louvre, the Marais, Montmartre — without paying the tourist-corridor prices that come with those addresses. The Opera district has a rhythm of its own: department stores, bookshops, brasseries that have been open for a hundred years. It's a great base for a first-time visitor and a quietly satisfying choice for anyone who's been before.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> First-time Paris visitors, couples who want to walk everywhere, and anyone who wants to be close to the city's biggest sights without staying right on top of them.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal3_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Timhotel Opéra →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/blog-photos/paris-deal-3/1er1.jpg"
              alt="1er Étage Sopi"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              1er Étage Sopi — The Paris That Parisians Actually Live In
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              South Pigalle — SoPi — is the Paris neighborhood that locals actually live in right now. Wine bars with handwritten menus, independent coffee shops, vintage stores, and restaurants that don't exist on any tourist map. 1er Étage Sopi sits right in the middle of it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              This is the Paris that doesn't perform for visitors — it just exists, and it's brilliant. Stay here and you'll spend your evenings exactly where locals spend theirs: at the zinc bar of a neighborhood wine cave, at a table outside a bistro that only has eight seats, or wandering streets that feel genuinely alive in a way that the big tourist boulevards stopped being a long time ago.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Return visitors ready to go deeper, solo travelers, anyone who wants to feel like a local rather than a tourist, and people who already know the Eiffel Tower exists and don't need to be near it.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal3_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book 1er Étage Sopi →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Timhotel Opéra Blanche Fontaine</strong> if you want to walk to the Palais Garnier, the grands boulevards, and the city's most iconic sights from a home base that feels properly Parisian without being in the thick of the tourist crowd.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>1er Étage Sopi</strong> if you want to skip the postcard version of Paris entirely and spend your trip in the neighborhood where the city actually lives right now.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal3_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Timhotel Opéra →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal3_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                1er Étage Sopi →
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
