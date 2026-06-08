"use client";

import { useEffect } from "react";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const DESTINATIONS = [
  {
    name: "Caribbean",
    icon: "🌴",
    desc: "Crystal waters, white sand beaches, and island hopping from Miami or Fort Lauderdale.",
    nights: "5–10 nights",
    from: "$349",
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop&auto=format",
  },
  {
    name: "Mediterranean",
    icon: "🏛️",
    desc: "Ancient history, stunning coastlines, and world-class cuisine across Europe.",
    nights: "7–14 nights",
    from: "$699",
    photo: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=300&fit=crop&auto=format",
  },
  {
    name: "Alaska",
    icon: "🏔️",
    desc: "Majestic glaciers, wildlife, and breathtaking fjords sailing from Seattle.",
    nights: "7–10 nights",
    from: "$549",
    photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop&auto=format",
  },
  {
    name: "Bahamas",
    icon: "🐚",
    desc: "Short getaways with turquoise water — perfect for first-time cruisers.",
    nights: "3–5 nights",
    from: "$249",
    photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=300&fit=crop&auto=format",
  },
  {
    name: "Mexican Riviera",
    icon: "🌮",
    desc: "Sunny ports, rich culture, and warm Pacific waters sailing from California.",
    nights: "5–7 nights",
    from: "$399",
    photo: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=300&fit=crop&auto=format",
  },
  {
    name: "Transatlantic",
    icon: "🌊",
    desc: "Epic ocean crossings between the Americas and Europe — a bucket-list voyage.",
    nights: "12–18 nights",
    from: "$899",
    photo: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=600&h=300&fit=crop&auto=format",
  },
];

// Brand colors + logo URLs (official CDN / Wikimedia free-use)
const LINES = [
  { name: "Royal Caribbean", abbr: "RC",  color: "#00205B", logo: "https://logo.clearbit.com/royalcaribbean.com",  tag: "Families & adventure" },
  { name: "Carnival",        abbr: "CCL", color: "#CC0000", logo: "https://logo.clearbit.com/carnival.com",        tag: "Fun & budget travel" },
  { name: "Norwegian",       abbr: "NCL", color: "#001489", logo: "https://logo.clearbit.com/ncl.com",             tag: "Freestyle flexibility" },
  { name: "Princess",        abbr: "PCL", color: "#7B0046", logo: "https://logo.clearbit.com/princess.com",       tag: "Scenic & Alaska routes" },
  { name: "MSC",             abbr: "MSC", color: "#003087", logo: "https://logo.clearbit.com/msccruises.com",      tag: "Mediterranean specialist" },
  { name: "Disney",          abbr: "DCL", color: "#003B8E", logo: "https://logo.clearbit.com/disneycruise.com",    tag: "Best for families & kids" },
];

export default function CruisesPage() {

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Montserrat";
    link.rel = "stylesheet";
    document.head.appendChild(link);

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
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=340&fit=crop&auto=format"
          alt="Cruise ship at sea"
          style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${NAVY}cc 0%, ${NAVY}ee 100%)` }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 8px" }}>🚢 Cruise Search</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 40px)", fontWeight: "800", margin: "0 0 8px", textShadow: "0 2px 12px rgba(0,0,0,0.4)", lineHeight: 1.2 }}>
            Find Your Perfect Cruise
          </h1>
          <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>
            Search live inventory across all major cruise lines
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
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "48px 24px 80px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "40px", alignItems: "start" }}>

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Destination Cards with Photos */}
          <section style={{ marginBottom: "52px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Where do you want to go?</p>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>Popular Cruise Destinations</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
              {DESTINATIONS.map((d, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,59,149,0.06)", cursor: "default" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,59,149,0.15)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,59,149,0.06)"}>
                  {/* Photo */}
                  <div style={{ position: "relative", height: "110px", overflow: "hidden" }}>
                    <img src={d.photo} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
                    <span style={{ position: "absolute", bottom: "8px", left: "10px", color: "#fff", fontWeight: "800", fontSize: "14px", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{d.name}</span>
                    <span style={{ position: "absolute", top: "8px", right: "8px", background: ORANGE, color: "#fff", fontSize: "10px", fontWeight: "700", padding: "2px 7px", borderRadius: "6px" }}>from {d.from}</span>
                  </div>
                  {/* Info */}
                  <div style={{ padding: "12px" }}>
                    <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 4px", lineHeight: 1.4 }}>{d.desc}</p>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: ORANGE, margin: 0 }}>⏱ {d.nights}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cruise Lines */}
          <section style={{ marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>All major cruise lines</p>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>Book Any Line Through Us</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {LINES.map((l, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", overflow: "hidden", background: l.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src={l.logo}
                      alt={l.name}
                      style={{ width: "40px", height: "40px", objectFit: "contain" }}
                      onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.innerHTML = `<span style="color:#fff;font-weight:800;font-size:11px">${l.abbr}</span>`; }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "700", color: "#111827", fontSize: "13px", margin: "0 0 2px" }}>{l.name}</p>
                    <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{l.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Agent CTA */}
          <section style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,59,149,0.07)", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Prefer personal service?</p>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>Let Our Agent Find Your Best Deal</h2>
            <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 16px", lineHeight: 1.6 }}>
              Access exclusive group rates, cabin upgrades, and bundle pricing you won&apos;t find on your own.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
              {[
                ["💰","Exclusive group rates","Often 15–30% below public pricing"],
                ["🛏️","Cabin upgrades","Best cabin for your budget"],
                ["✈️","Cruise + flight bundles","One price, one contact"],
                ["🏆","Earn 10x rewards pts","$2,200 cruise = $220 cash back"],
              ].map(([icon, title, sub], i) => (
                <div key={i} style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "12px" }}>
                  <p style={{ fontSize: "18px", margin: "0 0 4px" }}>{icon}</p>
                  <p style={{ fontWeight: "700", color: NAVY, fontSize: "12px", margin: "0 0 2px" }}>{title}</p>
                  <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
            <a
              href="mailto:workhomebalancellc@gmail.com?subject=Cruise Quote Request&body=Hi! I'd like a cruise quote.%0A%0ADestination: %0ADates: %0AGuests: %0ABudget per person: %0ACabin preference: %0ASpecial requests: "
              style={{ display: "block", background: NAVY, color: "#fff", textDecoration: "none", textAlign: "center", padding: "13px", borderRadius: "10px", fontWeight: "700", fontSize: "14px" }}>
              📧 Request a Free Agent Quote
            </a>
            <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "8px 0 0" }}>
              Mon–Fri 6–9PM · Sat 10AM–4PM EST · Response within 24 hours
            </p>
          </section>

          {/* Rewards */}
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

        {/* ── RIGHT COLUMN — static 300x600 widget ── */}
        <div style={{ position: "sticky", top: "80px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px", textAlign: "center" }}>
            🔍 Search & Book Cruises
          </p>
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,59,149,0.15)", border: "1px solid #E5E7EB", width: "300px" }}>
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
