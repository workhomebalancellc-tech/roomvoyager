"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function ParisDealBlog() {
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
              Paris in July
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "520px", margin: 0, lineHeight: 1.6 }}>
              Two hotels that make the City of Light feel like home
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "32px" }}>
            There's no better time to visit Paris than July. The sun sets after 10 PM, the terraces are packed with rosé and laughter, and on the 14th — Bastille Day — the Eiffel Tower lights up the sky with fireworks that stop you dead in your tracks. If you've been waiting for the right moment to finally book that Paris trip, this is it.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            We've hand-picked two hotels for this week's deal that cover two very different sides of Paris — and both will have you waking up excited about the day ahead.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=900&h=500&fit=crop&auto=format"
              alt="Nouvel Hôtel Paris"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Nouvel Hôtel Paris — Charm in the 12th
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Tucked into a quiet street in the 12th arrondissement, Nouvel Hôtel Paris is one of those finds that makes you feel like a local the moment you check in. Originally built as a boarding school for girls, the building has held onto its old-world Parisian character — think high ceilings, warm interiors, and a calm that's surprisingly rare in the heart of the city.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The 12th is a neighborhood that visitors often overlook, and that's exactly what makes it special. You're far enough from the tourist crowds to breathe, but close enough to everything that matters. The Bel-Air metro stop is a three-minute walk from the front door, putting the Eiffel Tower, the Marais, and the Seine all within easy reach.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> First-time visitors who want a peaceful base, solo travelers, and anyone who prefers a quiet neighborhood over a busy tourist corridor.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal1_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Nouvel Hôtel Paris →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1510266911083-b8a3e5a89b35?w=900&h=500&fit=crop&auto=format"
              alt="Artemisia Montmartre"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>
              Artemisia Montmartre — Art Deco in the Shadow of Sacré-Cœur
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              If Nouvel Hôtel is about understated Parisian living, Artemisia Montmartre is about the full romantic experience. Set just 656 feet from the Moulin Rouge and steps from the winding cobblestone streets of the Butte Montmartre, this boutique hotel sits in one of the most iconic neighborhoods on earth.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Renovated in 2023, the Artemisia leans fully into its Art Deco and Art Nouveau bones — think ornate ironwork, warm lighting, and rooms that feel like they belong in a film. Guests rate it 8.8 out of 10 on Booking.com and 9.2 on Hotels.com. Montmartre itself is worth the trip alone — once you've climbed the steps to Sacré-Cœur and looked out over the city at sunset, you'll understand why artists have been coming here for over a century.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples, design lovers, anyone who wants the classic "movie Paris" experience, and return visitors ready to go deeper into the city's soul.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal1_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Artemisia Montmartre →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Which one */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>Which One Should You Choose?</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Here's the honest answer: it depends on what kind of Paris you're after.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Nouvel Hôtel</strong> if you want value, quiet, and easy metro access without sacrificing charm. It's the smart pick for budget-conscious travelers who still want a real Parisian experience.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Artemisia Montmartre</strong> if you want to be fully immersed in the romance and energy of Paris — waking up in Montmartre, watching the Moulin Rouge light up at night, and feeling like you're living inside a postcard.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Both are available to book now through Expedia with your RoomVoyager rewards points eligible on every night you stay.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal1_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Nouvel Hôtel Paris →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/parisdeal1_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Artemisia Montmartre →
              </a>
            </div>
          </div>

          {/* Rewards callout */}
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Earn points. See Paris. Come home richer. 🗼
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
