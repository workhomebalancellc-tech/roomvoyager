"use client";

import { useEffect } from "react";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const DESTINATIONS = [
  { name: "Caribbean",       icon: "🌴", desc: "Crystal waters, white sand beaches, and island hopping from Miami or Fort Lauderdale.", nights: "5–10 nights", from: "$349" },
  { name: "Mediterranean",   icon: "🏛️", desc: "Ancient history, stunning coastlines, and world-class cuisine across Europe.",          nights: "7–14 nights", from: "$699" },
  { name: "Alaska",          icon: "🏔️", desc: "Majestic glaciers, wildlife, and breathtaking fjords sailing from Seattle.",            nights: "7–10 nights", from: "$549" },
  { name: "Bahamas",         icon: "🐚", desc: "Short getaways with turquoise water — perfect for first-time cruisers.",               nights: "3–5 nights",  from: "$249" },
  { name: "Mexican Riviera", icon: "🌮", desc: "Sunny ports, rich culture, and warm Pacific waters sailing from California.",           nights: "5–7 nights",  from: "$399" },
  { name: "Transatlantic",   icon: "🌊", desc: "Epic ocean crossings between the Americas and Europe — a bucket-list voyage.",         nights: "12–18 nights",from: "$899" },
];

const LINES = [
  { name: "Royal Caribbean", icon: "👑", tag: "Best for families & thrill-seekers" },
  { name: "Carnival",        icon: "🎉", tag: "Best for fun & budget travel" },
  { name: "Norwegian",       icon: "⚓", tag: "Best for freestyle flexibility" },
  { name: "Princess",        icon: "✨", tag: "Best for scenic & Alaska" },
  { name: "MSC",             icon: "🌍", tag: "Best for Mediterranean" },
  { name: "Disney",          icon: "🏰", tag: "Best for families with kids" },
];

export default function CruisesPage() {

  useEffect(() => {
    // Google Fonts for widget
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Montserrat";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // CruiseDirect widget script
    const script = document.createElement("script");
    script.src = "https://cruisedirect.com/cjjs/snippet-300x600.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels"  style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
            <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
            <a href="/cruises" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
            <a href="/profile" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Profile</a>
            <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=380&fit=crop&auto=format"
          alt="Cruise ship at sea"
          style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${NAVY}bb 0%, ${NAVY}ee 100%)` }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🚢 Cruise Search</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 5vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
            Find Your Perfect Cruise
          </h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "520px", lineHeight: 1.6 }}>
            Search live inventory across top cruise lines — or let our agents find you the best deal.
          </p>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: NAVY, padding: "12px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["🏆","Top cruise lines"],["💰","Earn 10 pts per $1"],["🤝","Free agent assistance"],["📞","24hr quote turnaround"],["🚫","No booking fees"]].map(([icon,text],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#BFDBFE", fontWeight: "500" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN — two column */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "40px", alignItems: "start" }}>

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Destinations */}
          <section style={{ marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Where do you want to go?</p>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>Popular Cruise Destinations</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {DESTINATIONS.map((d, i) => (
                <div key={i}
                  style={{ background: "#fff", borderRadius: "14px", padding: "18px", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,59,149,0.06)", cursor: "default" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,59,149,0.13)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,59,149,0.06)"}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <span style={{ fontSize: "26px" }}>{d.icon}</span>
                    <span style={{ background: LIGHT_BLUE, color: NAVY, fontSize: "11px", fontWeight: "700", padding: "3px 8px", borderRadius: "6px" }}>from {d.from}</span>
                  </div>
                  <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 4px", fontSize: "15px" }}>{d.name}</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 8px", lineHeight: 1.5 }}>{d.desc}</p>
                  <p style={{ fontSize: "11px", fontWeight: "600", color: ORANGE, margin: 0 }}>⏱ {d.nights}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cruise Lines */}
          <section style={{ marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>All major cruise lines</p>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>Book Any Line Through Us</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
              {LINES.map((l, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E5E7EB", textAlign: "center" }}>
                  <p style={{ fontSize: "22px", margin: "0 0 4px" }}>{l.icon}</p>
                  <p style={{ fontWeight: "700", color: "#111827", fontSize: "13px", margin: "0 0 3px" }}>{l.name}</p>
                  <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{l.tag}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Agent CTA */}
          <section style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,59,149,0.07)", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Not sure which cruise to pick?</p>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>Let Our Agent Find Your Best Deal</h2>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 20px", lineHeight: 1.6 }}>
              Our travel agents have access to exclusive group rates, cabin upgrades, and bundle pricing you won&apos;t find searching on your own.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
              {[
                ["💰","Exclusive group rates","Often 15–30% below public pricing"],
                ["🛏️","Cabin upgrades","Best cabin negotiated for your budget"],
                ["✈️","Cruise + flight bundles","One price, one point of contact"],
                ["🏆","Earn 10x rewards pts","$2,200 cruise = $220 cash back"],
              ].map(([icon, title, sub], i) => (
                <div key={i} style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "14px" }}>
                  <p style={{ fontSize: "20px", margin: "0 0 6px" }}>{icon}</p>
                  <p style={{ fontWeight: "700", color: NAVY, fontSize: "13px", margin: "0 0 2px" }}>{title}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
            <a
              href="mailto:workhomebalancellc@gmail.com?subject=Cruise Quote Request&body=Hi! I'd like a cruise quote.%0A%0ADestination: %0ADates: %0AGuests: %0ABudget per person: %0ACabin preference: %0ASpecial requests: "
              style={{ display: "block", background: NAVY, color: "#fff", textDecoration: "none", textAlign: "center", padding: "14px", borderRadius: "10px", fontWeight: "700", fontSize: "15px" }}>
              📧 Request a Free Agent Quote
            </a>
            <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "10px 0 0" }}>
              Mon–Fri 6–9PM · Sat 10AM–4PM EST · Response within 24 hours
            </p>
          </section>

          {/* Rewards callout */}
          <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, borderRadius: "16px", padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>🏆 RoomVoyager Rewards</p>
              <p style={{ color: "#fff", fontWeight: "800", fontSize: "17px", margin: "0 0 4px" }}>Earn 10 pts per $1 on every cruise</p>
              <p style={{ color: "#BFDBFE", fontSize: "13px", margin: 0 }}>A $2,200 cruise = 22,000 pts = $220 cash back</p>
            </div>
            <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "11px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", flexShrink: 0, boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
              Learn more →
            </a>
          </div>

        </div>

        {/* ── RIGHT COLUMN — sticky widget ── */}
        <div style={{ position: "sticky", top: "80px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px", textAlign: "center" }}>
            🔍 Search & Book Cruises
          </p>
          <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,59,149,0.12)", border: "1px solid #E5E7EB", display: "inline-block", width: "300px" }}>
            <div
              id="cdsearch"
              data-redirect-server="https://www.jdoqocy.com/click-101734691-15534473?url="
            />
            <div id="cruiseSearchBox300x600" />
            <img
              src="https://www.lduhtrp.net/image-101734691-15534473"
              width="1"
              height="1"
              alt=""
              style={{ display: "block" }}
            />
          </div>
          <p style={{ fontSize: "11px", color: "#9CA3AF", textAlign: "center", margin: "10px 0 0" }}>
            Powered by CruiseDirect · Best price guarantee
          </p>
        </div>

      </div>
    </div>
  );
}
