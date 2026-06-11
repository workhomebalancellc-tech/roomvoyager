"use client";

import { Suspense, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const destinations = [
  { name: "Cancún", country: "Mexico", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=280&fit=crop&auto=format", tag: "🏖️ Beach", kiwi: "cancun", iata: "CUN" },
  { name: "Miami", country: "Florida, USA", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=400&h=280&fit=crop&auto=format", tag: "🌆 City", kiwi: "miami-florida-united-states", iata: "MIA" },
  { name: "Las Vegas", country: "Nevada, USA", photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&h=280&fit=crop&auto=format", tag: "🎰 Entertainment", kiwi: "las-vegas-nevada-united-states", iata: "LAS" },
  { name: "Paris", country: "France", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=280&fit=crop&auto=format", tag: "🗼 Romance", kiwi: "paris-ile-de-france-france", iata: "CDG" },
  { name: "Orlando", country: "Florida, USA", photo: "https://images.unsplash.com/photo-1526472050800-0d8e22b0a0c8?w=400&h=280&fit=crop&auto=format", tag: "🎡 Family", kiwi: "orlando-florida-united-states", iata: "MCO" },
  { name: "London", country: "United Kingdom", photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=280&fit=crop&auto=format", tag: "🎭 Culture", kiwi: "london-england-united-kingdom", iata: "LHR" },
  { name: "Punta Cana", country: "Dominican Republic", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=280&fit=crop&auto=format", tag: "🌴 All-Inclusive", kiwi: "punta-cana-la-altagracia-dominican-republic", iata: "PUJ" },
  { name: "New York", country: "New York, USA", photo: "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=400&h=280&fit=crop&auto=format", tag: "🗽 Iconic", kiwi: "new-york-new-york-united-states", iata: "JFK" },
];

const tips = [
  { icon: "📅", title: "Book 6–8 weeks out", desc: "Domestic flights are cheapest when booked 6–8 weeks before departure. International: 3–6 months." },
  { icon: "📆", title: "Fly Tuesday or Wednesday", desc: "Mid-week flights are consistently cheaper than weekends — sometimes by 20% or more." },
  { icon: "🔔", title: "Set a price alert", desc: "Prices fluctuate daily. Use our search to track a route and book when the price drops." },
  { icon: "🛫", title: "Try nearby airports", desc: "Flying into or out of a secondary airport nearby can save hundreds on the same trip." },
  { icon: "🔀", title: "Mix airlines", desc: "Booking outbound on one airline and return on another can unlock cheaper combos." },
  { icon: "🎒", title: "Travel carry-on only", desc: "Skipping checked bags saves $30–$60 each way on most budget and major carriers." },
];

function FlightsContent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const WIDGET_HTML = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0;box-sizing:border-box;}body{background:#fff;overflow-x:hidden;}</style></head><body><script async src="https://tpwdgt.com/content?currency=usd&trs=532625&shmarker=722477&locale=en&stops=any&show_hotels=false&powered_by=false&border_radius=0&plain=true&color_button=%23003B95&color_button_text=%23ffffff&promo_id=3414&campaign_id=111" charset="utf-8"><\/script></body></html>`;

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="flights" />

      {/* HERO */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=500&fit=crop&auto=format"
          alt="Airplane wing above clouds"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.60) 0%, rgba(0,15,60,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Powered by Travelpayouts</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find the best flight deals</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Search 500+ airlines — no hidden fees, earn rewards on every booking.</p>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[
            ["🔍", "500+ airlines compared"],
            ["💰", "No hidden fees"],
            ["🏆", "Earn 5 pts per $1"],
            ["🔄", "Free cancellation options"],
            ["📱", "Book in under 2 minutes"],
          ].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#374151" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FLIGHT SEARCH WIDGET */}
      <div style={{ background: NAVY, borderBottom: "1px solid #E5E7EB", padding: "32px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 32px rgba(0,59,149,0.10)", overflow: "hidden", border: "1px solid #E5E7EB" }}>
            {mounted ? (
              <iframe
                srcDoc={WIDGET_HTML}
                title="Flight Search Widget"
                style={{ width: "100%", height: "380px", border: "none", display: "block" }}
                scrolling="no"
              />
            ) : (
              <div style={{ height: "380px", display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", fontSize: "14px" }}>
                Loading flight deals…
              </div>
            )}
          </div>
        </div>
      </div>

      {/* POPULAR DESTINATIONS */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Explore the world</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Popular flight destinations</h2>
        <p style={{ color: "#6B7280", fontSize: "14px", margin: "0 0 28px" }}>Top spots travelers are flying to right now</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "16px" }}>
          {destinations.map(dest => (
            <a
              key={dest.name}
              href={`/redirect?to=${encodeURIComponent(`https://www.kiwi.com/en/search/results/anywhere/${dest.kiwi}`)}&partner=Kiwi.com&product=flight`}
              style={{ borderRadius: "14px", overflow: "hidden", position: "relative", height: "180px", cursor: "pointer", display: "block", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
            >
              <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 60%)" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                <span style={{ background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 8px", borderRadius: "999px", backdropFilter: "blur(4px)" }}>{dest.tag}</span>
              </div>
              <div style={{ position: "absolute", bottom: "14px", left: "14px" }}>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "16px", margin: "0 0 2px", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{dest.name}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>{dest.country}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* TIPS */}
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", padding: "56px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Save more</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 28px" }}>Tips for finding cheap flights</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {tips.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", padding: "20px", background: LIGHT_BLUE, borderRadius: "14px" }}>
                <span style={{ fontSize: "28px", flexShrink: 0 }}>{tip.icon}</span>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "700", color: NAVY, margin: "0 0 6px" }}>{tip.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", margin: 0, lineHeight: 1.6 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY BOOK WITH US */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Why RoomVoyager</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 28px" }}>More than just a flight search</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
          {[
            { icon: "🏆", title: "Earn real cash back", desc: "5 Rewards points per $1 on flights — redeem for real money via Zelle, Cash App, or Venmo." },
            { icon: "🔍", title: "500+ airlines compared", desc: "We search major carriers, budget airlines, and everything in between to find the best price." },
            { icon: "✈️+🏨", title: "Bundle & save", desc: "Add a hotel or cruise to your flight and unlock package pricing not available separately." },
            { icon: "📞", title: "Agent support", desc: "Need help booking a complex itinerary? Our travel advisor handles it at no extra cost." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <p style={{ fontSize: "15px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>{item.title}</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REWARDS CTA */}
      <div style={{ position: "relative", overflow: "hidden", margin: "0 24px 56px" }}>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&h=220&fit=crop&auto=format" alt="Airplane wing" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "20px" }} />
        <div style={{ position: "absolute", inset: 0, background: `${NAVY}e0`, borderRadius: "20px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#fff", margin: "0 0 6px" }}>Earn rewards on every flight you book</h3>
            <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>5 points per $1 · Redeem for real cash · No blackout dates</p>
          </div>
          <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
            Join Rewards free →
          </a>
        </div>
      </div>

    </div>
  );
}

export default function FlightsPage() {
  return (
    <>
      <Suspense fallback={<div />}>
        <FlightsContent />
      </Suspense>
      <Footer />
    </>
  );
}
