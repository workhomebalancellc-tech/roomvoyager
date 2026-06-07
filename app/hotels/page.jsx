"use client";

import Script from "next/script";

export default function HotelsPage() {

  const destinations = [
    { name: "Cancun", emoji: "🌴", country: "Mexico", tag: "Most Popular" },
    { name: "Miami", emoji: "🌆", country: "Florida, USA", tag: "Trending" },
    { name: "Las Vegas", emoji: "🎰", country: "Nevada, USA", tag: "Best Value" },
    { name: "Paris", emoji: "🗼", country: "France", tag: "Romantic" },
    { name: "Orlando", emoji: "🎡", country: "Florida, USA", tag: "Family Pick" },
    { name: "Punta Cana", emoji: "🐚", country: "Dominican Republic", tag: "All-Inclusive" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>
      {/* NAV */}
      <nav style={{ background: "#991B1B", padding: "16px 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "700", color: "#fff", textDecoration: "none" }}>RoomVoyager</a>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="/hotels" style={{ color: "#fff", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid #fff", paddingBottom: "2px" }}>Hotels</a>
            <a href="/flights" style={{ color: "#fca5a5", textDecoration: "none" }}>Flights</a>
            <a href="/cruises" style={{ color: "#fca5a5", textDecoration: "none" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#fca5a5", textDecoration: "none" }}>Rewards</a>
            <a href="/profile" style={{ color: "#fca5a5", textDecoration: "none" }}>Profile</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #7f1d1d 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            🏨 Powered by Expedia
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "700", margin: "0 0 12px", lineHeight: "1.2" }}>
            Find your perfect hotel
          </h1>
          <p style={{ color: "#fca5a5", fontSize: "16px", margin: 0, maxWidth: "500px", lineHeight: "1.6" }}>
            Search millions of properties worldwide — best price guarantee, free cancellation on most rooms.
          </p>
        </div>
      </div>

      {/* EXPEDIA WIDGET */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "#7f1d1d", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: "500" }}>🔍 Search hotels</span>
            <span style={{ color: "#fca5a5", fontSize: "12px" }}>Free — no account required</span>
          </div>
          <div style={{ padding: "20px 0 24px", pointerEvents: "auto", position: "relative", zIndex: 2 }}>
            <div
              className="eg-widget"
              data-widget="search"
              data-program="us-expedia"
              data-lobs="stays"
              data-network="pz"
              data-camref="1110l8R3Z"
              data-pubref="hotels-page"
            />
          </div>
        </div>
      </div>

      {/* REWARDS BANNER */}
      <div style={{ background: "#991b1b", padding: "12px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>💰</span>
          <p style={{ color: "#fff", fontSize: "13px", margin: 0, lineHeight: "1.5" }}>
            <strong>Earn 5 RoomVoyager Rewards points for every $1 spent on hotels</strong> — redeemable for real cash via Zelle, Cash App, or Venmo.{" "}
            <a href="/rewards" style={{ color: "#fca5a5", textDecoration: "underline" }}>Learn more →</a>
          </p>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div style={{ background: "#fff", borderBottom: "0.5px solid #e5e7eb", padding: "16px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
          {[
            { icon: "✅", text: "Best price guarantee" },
            { icon: "🔄", text: "Free cancellation on most rooms" },
            { icon: "💳", text: "No booking fees" },
            { icon: "🏨", text: "1M+ properties worldwide" },
            { icon: "⭐", text: "Verified guest reviews" },
          ].map((badge, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#374151" }}>
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Trending Destinations */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>Popular right now</p>
          <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#111827", margin: "0 0 20px" }}>Trending destinations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
            {destinations.map((dest, i) => (
              <a
                key={i}
                href={`https://www.expedia.com/Hotel-Search?destination=${dest.name}&affiliateid=1110l8R3Z&pubref=hotels-page-dest`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{ background: "#fff", border: "0.5px solid #e5e7eb", borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(153,27,27,0.15)"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: "48px", height: "48px", background: "#fef2f2", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
                    {dest.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 2px" }}>{dest.name}</p>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>{dest.country}</p>
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: "500", background: "#fef2f2", color: "#991b1b", padding: "3px 8px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                    {dest.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Why Book */}
        <div style={{ background: "#fff", border: "0.5px solid #e5e7eb", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 20px" }}>Why book hotels through RoomVoyager?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { icon: "💰", title: "Earn real cash back", desc: "5 points per $1 spent — redeemable for cash after your stay" },
              { icon: "🔒", title: "Secure booking", desc: "All bookings processed through Expedia's trusted platform" },
              { icon: "📞", title: "Agent support", desc: "Need help with a group booking? Our advisor handles everything" },
              { icon: "🌍", title: "Massive selection", desc: "Over 1 million properties from budget to luxury worldwide" },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 4px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Group Booking CTA */}
        <div style={{ background: "linear-gradient(135deg, #7f1d1d, #991b1b)", borderRadius: "16px", padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#fff", margin: "0 0 4px" }}>Need a group hotel booking?</h3>
            <p style={{ fontSize: "13px", color: "#fca5a5", margin: 0 }}>10+ rooms? Our travel advisor negotiates group rates directly with hotels.</p>
          </div>
          <a
            href="mailto:workhomebalancellc@gmail.com?subject=Group Hotel Booking Request"
            style={{ background: "#fff", color: "#7f1d1d", padding: "11px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Contact our agent →
          </a>
        </div>
      </div>

      <Script
        src="https://creator.expediagroup.com/products/widgets/assets/eg-widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.EGWidgets) window.EGWidgets.init();
        }}
      />

      {/* EXPEDIA CSS OVERRIDES */}
      <style>{`
        .eg-widget button[type="submit"], .eg-widget .search-button, .eg-widget [class*="submit"], .eg-widget [class*="SearchButton"], .eg-widget [class*="searchButton"] {
          background-color: #991b1b !important; border-color: #991b1b !important; color: #ffffff !important;
        }
        .eg-widget button[type="submit"]:hover, .eg-widget .search-button:hover {
          background-color: #7f1d1d !important; border-color: #7f1d1d !important;
        }
        .eg-widget input, .eg-widget select { border-color: #e5e7eb !important; border-radius: 8px !important; }
        .eg-widget input:focus, .eg-widget select:focus { border-color: #991b1b !important; outline-color: #991b1b !important; box-shadow: 0 0 0 2px rgba(153,27,27,0.15) !important; }
        .eg-widget [class*="tab"][class*="active"], .eg-widget [class*="Tab"][class*="active"], .eg-widget [class*="selected"] { border-bottom-color: #991b1b !important; color: #991b1b !important; }
        .eg-widget [class*="tab"]:hover, .eg-widget [class*="Tab"]:hover { color: #991b1b !important; }
        .eg-widget a { color: #991b1b !important; }
        .eg-widget [class*="primary"], .eg-widget [class*="Primary"] { color: #991b1b !important; border-color: #991b1b !important; }
        .eg-widget input[type="checkbox"]:checked { accent-color: #991b1b !important; }
      `}</style>
    </div>
  );
}
