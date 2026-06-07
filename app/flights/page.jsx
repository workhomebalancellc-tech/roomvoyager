"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

// City name → IATA airport code lookup
const CITY_TO_IATA = {
  // USA
  "new york": "JFK", "nyc": "JFK", "new york city": "JFK",
  "los angeles": "LAX", "la": "LAX",
  "chicago": "ORD",
  "miami": "MIA",
  "las vegas": "LAS", "vegas": "LAS",
  "orlando": "MCO",
  "dallas": "DFW", "dfw": "DFW",
  "houston": "IAH",
  "atlanta": "ATL",
  "denver": "DEN",
  "seattle": "SEA",
  "san francisco": "SFO", "sf": "SFO",
  "boston": "BOS",
  "phoenix": "PHX",
  "washington": "DCA", "washington dc": "DCA", "dc": "DCA",
  "nashville": "BNA",
  "new orleans": "MSY",
  "charlotte": "CLT",
  "minneapolis": "MSP",
  "detroit": "DTW",
  "tampa": "TPA",
  "fort lauderdale": "FLL",
  "salt lake city": "SLC",
  "portland": "PDX",
  "san diego": "SAN",
  "baltimore": "BWI",
  "austin": "AUS",
  "raleigh": "RDU",
  "jacksonville": "JAX",
  "philadelphia": "PHL",
  "philly": "PHL",
  "pittsburgh": "PIT",
  "memphis": "MEM",
  "kansas city": "MCI",
  "st louis": "STL",
  "saint louis": "STL",
  "indianapolis": "IND",
  "columbus": "CMH",
  "cleveland": "CLE",
  "san antonio": "SAT",
  "albuquerque": "ABQ",
  "tucson": "TUS",
  "honolulu": "HNL", "hawaii": "HNL",
  "anchorage": "ANC", "alaska": "ANC",
  // Caribbean / Mexico / Central America
  "cancun": "CUN", "cancún": "CUN",
  "punta cana": "PUJ",
  "montego bay": "MBJ", "jamaica": "MBJ",
  "nassau": "NAS", "bahamas": "NAS",
  "aruba": "AUA",
  "barbados": "BGI",
  "st maarten": "SXM", "saint maarten": "SXM",
  "puerto rico": "SJU", "san juan": "SJU",
  "havana": "HAV", "cuba": "HAV",
  "mexico city": "MEX",
  "cabo san lucas": "SJD", "cabo": "SJD",
  "puerto vallarta": "PVR",
  "costa rica": "SJO",
  "panama city": "PTY", "panama": "PTY",
  // South America
  "bogota": "BOG", "colombia": "BOG",
  "lima": "LIM", "peru": "LIM",
  "buenos aires": "EZE", "argentina": "EZE",
  "rio de janeiro": "GIG", "rio": "GIG",
  "sao paulo": "GRU",
  "brazil": "GRU",
  // Europe
  "london": "LHR",
  "paris": "CDG",
  "rome": "FCO", "italy": "FCO",
  "barcelona": "BCN",
  "madrid": "MAD", "spain": "MAD",
  "amsterdam": "AMS", "netherlands": "AMS",
  "dublin": "DUB", "ireland": "DUB",
  "lisbon": "LIS", "portugal": "LIS",
  "frankfurt": "FRA",
  "munich": "MUC",
  "berlin": "BER",
  "zurich": "ZRH", "switzerland": "ZRH",
  "vienna": "VIE", "austria": "VIE",
  "brussels": "BRU", "belgium": "BRU",
  "stockholm": "ARN", "sweden": "ARN",
  "oslo": "OSL", "norway": "OSL",
  "copenhagen": "CPH", "denmark": "CPH",
  "athens": "ATH", "greece": "ATH",
  "istanbul": "IST", "turkey": "IST",
  "edinburgh": "EDI", "scotland": "EDI",
  "nice": "NCE",
  "milan": "MXP",
  "prague": "PRG", "czech republic": "PRG",
  "budapest": "BUD", "hungary": "BUD",
  "warsaw": "WAW", "poland": "WAW",
  "reykjavik": "KEF", "iceland": "KEF",
  // Middle East / Africa
  "dubai": "DXB",
  "abu dhabi": "AUH",
  "doha": "DOH", "qatar": "DOH",
  "cairo": "CAI", "egypt": "CAI",
  "tel aviv": "TLV", "israel": "TLV",
  "cape town": "CPT",
  "johannesburg": "JNB", "south africa": "JNB",
  "nairobi": "NBO", "kenya": "NBO",
  // Asia / Pacific
  "tokyo": "NRT", "japan": "NRT",
  "osaka": "KIX",
  "beijing": "PEK", "china": "PEK",
  "shanghai": "PVG",
  "hong kong": "HKG",
  "singapore": "SIN",
  "bangkok": "BKK", "thailand": "BKK",
  "bali": "DPS", "denpasar": "DPS",
  "jakarta": "CGK",
  "kuala lumpur": "KUL", "malaysia": "KUL",
  "manila": "MNL", "philippines": "MNL",
  "seoul": "ICN", "korea": "ICN",
  "taipei": "TPE", "taiwan": "TPE",
  "mumbai": "BOM",
  "delhi": "DEL", "india": "DEL",
  "sydney": "SYD", "australia": "SYD",
  "melbourne": "MEL",
  "auckland": "AKL", "new zealand": "AKL",
  "maldives": "MLE",
  // Canada
  "toronto": "YYZ", "ontario": "YYZ",
  "vancouver": "YVR",
  "montreal": "YUL",
  "calgary": "YYC",
};

function cityToIata(input) {
  if (!input) return null;
  const key = input.trim().toLowerCase();
  // Direct match first
  if (CITY_TO_IATA[key]) return CITY_TO_IATA[key];
  // Already an IATA code (3 uppercase letters)
  if (/^[A-Z]{3}$/.test(input.trim())) return input.trim().toUpperCase();
  if (/^[a-z]{3}$/.test(key)) return key.toUpperCase();
  // Partial match — check if any key starts with the input
  for (const [city, code] of Object.entries(CITY_TO_IATA)) {
    if (city.startsWith(key) || key.startsWith(city)) return code;
  }
  return null;
}

const destinations = [
  { name: "Cancún", country: "Mexico", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=280&fit=crop&auto=format", tag: "🏖️ Beach" },
  { name: "Miami", country: "Florida, USA", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=400&h=280&fit=crop&auto=format", tag: "🌆 City" },
  { name: "Las Vegas", country: "Nevada, USA", photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&h=280&fit=crop&auto=format", tag: "🎰 Entertainment" },
  { name: "Paris", country: "France", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=280&fit=crop&auto=format", tag: "🗼 Romance" },
  { name: "Orlando", country: "Florida, USA", photo: "https://images.unsplash.com/photo-1526472050800-0d8e22b0a0c8?w=400&h=280&fit=crop&auto=format", tag: "🎡 Family" },
  { name: "London", country: "United Kingdom", photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=280&fit=crop&auto=format", tag: "🎭 Culture" },
  { name: "Punta Cana", country: "Dominican Republic", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=280&fit=crop&auto=format", tag: "🌴 All-Inclusive" },
  { name: "New York", country: "New York, USA", photo: "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=400&h=280&fit=crop&auto=format", tag: "🗽 Iconic" },
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
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const destination = searchParams.get("q") || "";
  const iataCode = cityToIata(destination);
  const iframeSrc = iataCode
    ? `https://flights.roomvoyagertravel.com/flights/?destination_iata=${iataCode}`
    : "https://flights.roomvoyagertravel.com";
  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
            <a href="/flights" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Flights</a>
            <a href="/cruises" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
            <a href="/profile" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Profile</a>
            {user ? (
              <a href="/profile" style={{ display: "flex", alignItems: "center", gap: "8px", background: LIGHT_BLUE, padding: "7px 14px", borderRadius: "8px", textDecoration: "none" }}>
                {user.image ? <img src={user.image} alt="" style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover" }} /> : <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "800", color: "#fff" }}>{(user.name || user.email || "U")[0].toUpperCase()}</div>}
                <span style={{ fontSize: "14px", fontWeight: "600", color: NAVY }}>{user.name?.split(" ")[0] || "My Account"}</span>
              </a>
            ) : (
              <>
                <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
                <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=500&fit=crop&auto=format" alt="Airplane wing above clouds" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.60) 0%, rgba(0,15,60,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Powered by Travelpayouts</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find the best flight deals</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Search 500+ airlines — no hidden fees, earn rewards on every booking.</p>
        </div>
      </div>

      {/* Travelpayouts whitelabel */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ background: NAVY, padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#fff", fontSize: "13px", fontWeight: "600" }}>✈️ Search flights</span>
          <span style={{ color: "#93C5FD", fontSize: "12px" }}>Free — no account required</span>
        </div>
        <iframe
          src={iframeSrc}
          title="Flight Search"
          style={{ width: "100%", minHeight: "100vh", border: "none", display: "block" }}
          allow="same-origin"
        />
      </div>

      {/* TRUST BAR */}
      <div style={{ background: NAVY, padding: "14px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["🔍","Searches 500+ airlines"],["💰","No hidden fees"],["✈️","Earn rewards on every flight"],["🔄","Free cancellation options"],["📱","Book in under 2 minutes"]].map(([icon,text],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#BFDBFE", fontWeight: "500" }}><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </div>

      {/* POPULAR DESTINATIONS */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Explore the world</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Popular flight destinations</h2>
        <p style={{ color: "#6B7280", fontSize: "14px", margin: "0 0 28px" }}>Top spots travelers are flying to right now</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "16px" }}>
          {destinations.map(dest => (
            <div key={dest.name} style={{ borderRadius: "14px", overflow: "hidden", position: "relative", height: "180px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}>
              <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 60%)" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                <span style={{ background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 8px", borderRadius: "999px", backdropFilter: "blur(4px)" }}>{dest.tag}</span>
              </div>
              <div style={{ position: "absolute", bottom: "14px", left: "14px" }}>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "16px", margin: "0 0 2px", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{dest.name}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>{dest.country}</p>
              </div>
            </div>
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

      {/* COPYRIGHT */}
      <div style={{ background: NAVY, padding: "14px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: 0 }}>RoomVoyager © 2026</p>
      </div>

    </div>
  );
}

export default function FlightsPage() {
  return (
    <Suspense fallback={<div />}>
      <FlightsContent />
    </Suspense>
  );
}
