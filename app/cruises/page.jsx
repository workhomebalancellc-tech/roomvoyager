"use client";

import { useState, useEffect } from "react";

const MOCK_CRUISES = [
  {
    id: 1, name: "Caribbean Adventure", cruise_line: "Royal Caribbean", ship: "Wonder of the Seas",
    nights: 7, destination: "Caribbean", departure_port: "Miami, FL", departure_date: "2026-08-15",
    ports_of_call: ["Nassau, Bahamas", "Cozumel, Mexico", "Labadee, Haiti"],
    inside_price: 499, balcony_price: 749,
  },
  {
    id: 2, name: "Bahamas Escape", cruise_line: "Carnival", ship: "Carnival Celebration",
    nights: 5, destination: "Bahamas", departure_port: "Port Canaveral, FL", departure_date: "2026-07-20",
    ports_of_call: ["Nassau, Bahamas", "Half Moon Cay"],
    inside_price: 349, balcony_price: 529,
  },
  {
    id: 3, name: "Mediterranean Dream", cruise_line: "Norwegian", ship: "Norwegian Epic",
    nights: 10, destination: "Mediterranean", departure_port: "Barcelona, Spain", departure_date: "2026-09-10",
    ports_of_call: ["Rome, Italy", "Naples, Italy", "Santorini, Greece", "Athens, Greece"],
    inside_price: 899, balcony_price: 1299,
  },
  {
    id: 4, name: "Alaska Glacier Explorer", cruise_line: "Princess", ship: "Majestic Princess",
    nights: 7, destination: "Alaska", departure_port: "Seattle, WA", departure_date: "2026-06-28",
    ports_of_call: ["Juneau, AK", "Skagway, AK", "Ketchikan, AK", "Victoria, BC"],
    inside_price: 649, balcony_price: 949,
  },
  {
    id: 5, name: "Mexican Riviera", cruise_line: "Carnival", ship: "Carnival Panorama",
    nights: 7, destination: "Mexico", departure_port: "Long Beach, CA", departure_date: "2026-08-01",
    ports_of_call: ["Cabo San Lucas", "Mazatlán", "Puerto Vallarta"],
    inside_price: 499, balcony_price: 729,
  },
  {
    id: 6, name: "Eastern Caribbean", cruise_line: "Royal Caribbean", ship: "Harmony of the Seas",
    nights: 7, destination: "Caribbean", departure_port: "Port Canaveral, FL", departure_date: "2026-07-05",
    ports_of_call: ["St. Maarten", "St. Thomas, USVI", "Perfect Day, CocoCay"],
    inside_price: 549, balcony_price: 849,
  },
];

function buildCruiseDirectUrl(cruise) {
  const params = new URLSearchParams();
  if (cruise.destination) params.set("destination", cruise.destination);
  if (cruise.cruise_line) params.set("cruiseLine", cruise.cruise_line);
  if (cruise.nights) params.set("duration", String(cruise.nights));
  // TODO: Replace with CJ affiliate link once CJ ID is confirmed:
  // return `https://www.jdoqocy.com/click-YOUR_CJ_ID?url=${encodeURIComponent("https://www.cruisedirect.com/search?" + params)}`;
  return `https://www.cruisedirect.com/search?${params.toString()}`;
}

function normalizeCruise(raw, index) {
  return {
    id: raw.id || index,
    name: raw.name || raw.cruise_name || raw.title || `Cruise ${index + 1}`,
    cruise_line: raw.cruise_line || raw.cruiseLine || raw.line || "Unknown Line",
    ship: raw.ship || raw.ship_name || raw.vessel || "",
    nights: raw.nights || raw.duration || raw.duration_nights || 7,
    destination: raw.destination || raw.region || "",
    departure_port: raw.departure_port || raw.homeport || raw.port || "",
    departure_date: raw.departure_date || raw.sail_date || raw.date || "",
    ports_of_call: raw.ports_of_call || raw.ports || raw.itinerary || [],
    inside_price: raw.inside_price || raw.price || raw.starting_price || raw.from_price || 0,
    balcony_price: raw.balcony_price || raw.balcony || 0,
  };
}

const LINE_COLORS = {
  "Royal Caribbean": "#003087",
  "Carnival": "#E31837",
  "Norwegian": "#003DA5",
  "Princess": "#7B3F99",
  "MSC": "#00539B",
  "Disney": "#003087",
};

export default function CruisesPage() {
  const [destination, setDestination] = useState("");
  const [cruiseLine, setCruiseLine] = useState("");
  const [duration, setDuration] = useState("");
  const [departurePort, setDeparturePort] = useState("");
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [agentModal, setAgentModal] = useState(null);

  const hasFilters = destination || cruiseLine || duration || departurePort;

  function clearFilters() {
    setDestination("");
    setCruiseLine("");
    setDuration("");
    setDeparturePort("");
  }

  async function fetchCruises() {
    setLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
    if (!apiKey) {
      setCruises(MOCK_CRUISES);
      setUsingMock(true);
      setLoading(false);
      return;
    }
    try {
      const params = new URLSearchParams();
      if (destination) params.set("destination", destination);
      if (cruiseLine) params.set("cruise_line", cruiseLine);
      if (departurePort) params.set("port", departurePort);
      const res = await fetch(`https://cruise-api1.p.rapidapi.com/cruises?${params}`, {
        headers: {
          "x-rapidapi-host": "cruise-api1.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const results = Array.isArray(data) ? data : data.cruises || data.results || data.data || [];
      if (results.length === 0) throw new Error("No results");
      setCruises(results.map(normalizeCruise));
      setUsingMock(false);
    } catch {
      setCruises(MOCK_CRUISES);
      setUsingMock(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchCruises(); }, []);

  const displayCruises = usingMock
    ? MOCK_CRUISES.filter((c) => {
        if (destination && !c.destination.toLowerCase().includes(destination.toLowerCase())) return false;
        if (cruiseLine && c.cruise_line !== cruiseLine) return false;
        if (duration) {
          const n = c.nights;
          if (duration === "3-5" && (n < 3 || n > 5)) return false;
          if (duration === "6-8" && (n < 6 || n > 8)) return false;
          if (duration === "9-12" && (n < 9 || n > 12)) return false;
          if (duration === "13+" && n < 13) return false;
        }
        return true;
      })
    : cruises;

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#991B1B", padding: "16px 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "700", color: "#fff", textDecoration: "none" }}>RoomVoyager</a>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="/hotels" style={{ color: "#fca5a5", textDecoration: "none" }}>Hotels</a>
            <a href="/flights" style={{ color: "#fca5a5", textDecoration: "none" }}>Flights</a>
            <a href="/cruises" style={{ color: "#fff", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid #fff", paddingBottom: "2px" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#fca5a5", textDecoration: "none" }}>Rewards</a>
            <a href="/profile" style={{ color: "#fca5a5", textDecoration: "none" }}>Profile</a>
            <a href="/contact" style={{ color: "#fca5a5", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO + SEARCH */}
      <div style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #7f1d1d 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>🚢 Live Cruise Search</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "700", margin: "0 0 12px", lineHeight: "1.2" }}>Find your perfect cruise</h1>
          <p style={{ color: "#fca5a5", fontSize: "16px", margin: "0 0 32px", maxWidth: "520px", lineHeight: "1.6" }}>
            Search live availability from Royal Caribbean, Carnival, Norwegian, Princess and more.
          </p>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(8px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#fca5a5", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Destination</label>
                <select value={destination} onChange={(e) => setDestination(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "none", fontSize: "14px", background: "#fff", color: "#111827" }}>
                  <option value="">All Destinations</option>
                  <option>Caribbean</option><option>Mediterranean</option><option>Alaska</option><option>Bahamas</option><option>Mexico</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#fca5a5", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cruise Line</label>
                <select value={cruiseLine} onChange={(e) => setCruiseLine(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "none", fontSize: "14px", background: "#fff", color: "#111827" }}>
                  <option value="">All Lines</option>
                  <option>Royal Caribbean</option><option>Carnival</option><option>Norwegian</option><option>Princess</option><option>MSC</option><option>Disney</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#fca5a5", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Duration</label>
                <select value={duration} onChange={(e) => setDuration(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "none", fontSize: "14px", background: "#fff", color: "#111827" }}>
                  <option value="">Any Length</option>
                  <option value="3-5">3–5 nights</option><option value="6-8">6–8 nights</option><option value="9-12">9–12 nights</option><option value="13+">13+ nights</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#fca5a5", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Departure Port</label>
                <input type="text" placeholder="e.g. Miami" value={departurePort} onChange={(e) => setDeparturePort(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "none", fontSize: "14px", background: "#fff", color: "#111827", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button onClick={fetchCruises}
                style={{ background: "#fff", color: "#991b1b", border: "none", borderRadius: "8px", padding: "11px 28px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                Search Cruises →
              </button>
              {hasFilters && (
                <button onClick={clearFilters}
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "8px", padding: "11px 20px", fontSize: "13px", cursor: "pointer" }}>
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* REWARDS BANNER */}
      <div style={{ background: "#991b1b", padding: "10px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#fff", fontSize: "13px", margin: 0 }}>
            💰 <strong>Earn 10 RoomVoyager Rewards points per $1</strong> on cruise bookings —{" "}
            <a href="/rewards" style={{ color: "#fca5a5", textDecoration: "underline" }}>learn more →</a>
          </p>
        </div>
      </div>

      {/* RESULTS */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "32px 24px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
            {loading ? "Searching..." : `${displayCruises.length} cruises found${usingMock ? " — featured sailings" : " — live pricing"}`}
          </p>
          {usingMock && !loading && (
            <span style={{ fontSize: "12px", background: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "999px", fontWeight: "500" }}>
              Featured sailings — real-time search coming soon
            </span>
          )}
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                {[60,80,50,100,40].map((w, j) => (
                  <div key={j} style={{ height: "14px", background: "#f3f4f6", borderRadius: "4px", marginBottom: "10px", width: `${w}%` }} />
                ))}
                <div style={{ height: "38px", background: "#f3f4f6", borderRadius: "8px", marginTop: "16px" }} />
              </div>
            ))}
          </div>
        )}

        {/* Cards */}
        {!loading && displayCruises.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {displayCruises.map((cruise) => (
              <div key={cruise.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "16px 16px 12px", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#fff", background: LINE_COLORS[cruise.cruise_line] || "#374151", padding: "3px 8px", borderRadius: "4px" }}>
                      {cruise.cruise_line}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#6b7280", background: "#f3f4f6", padding: "3px 8px", borderRadius: "4px" }}>
                      {cruise.nights} nights
                    </span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px", lineHeight: "1.3" }}>{cruise.name}</h3>
                  {cruise.ship && <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 10px" }}>🚢 {cruise.ship}</p>}
                  <div style={{ fontSize: "13px", color: "#374151", marginBottom: "10px" }}>
                    {cruise.departure_port && <div style={{ marginBottom: "3px" }}>📍 Departs: {cruise.departure_port}</div>}
                    {cruise.departure_date && <div>📅 {new Date(cruise.departure_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>}
                  </div>
                  {cruise.ports_of_call?.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "12px" }}>
                      {cruise.ports_of_call.slice(0, 3).map((port, i) => (
                        <span key={i} style={{ fontSize: "11px", background: "#fef2f2", color: "#991b1b", padding: "2px 8px", borderRadius: "999px" }}>📍 {port}</span>
                      ))}
                      {cruise.ports_of_call.length > 3 && <span style={{ fontSize: "11px", color: "#9ca3af", padding: "2px 4px" }}>+{cruise.ports_of_call.length - 3} more</span>}
                    </div>
                  )}
                  <div style={{ marginBottom: "10px" }}>
                    {cruise.inside_price > 0 && (
                      <p style={{ fontSize: "20px", fontWeight: "700", color: "#991b1b", margin: "0 0 2px" }}>
                        From ${cruise.inside_price.toLocaleString()}<span style={{ fontSize: "12px", fontWeight: "400", color: "#6b7280" }}>/pp</span>
                      </p>
                    )}
                    <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>Approx. price — verify on CruiseDirect</p>
                  </div>
                  <button onClick={() => setExpandedId(expandedId === cruise.id ? null : cruise.id)}
                    style={{ background: "none", border: "none", padding: 0, fontSize: "12px", color: "#991b1b", fontWeight: "600", cursor: "pointer", marginBottom: "10px" }}>
                    {expandedId === cruise.id ? "▲ Hide details" : "▼ View itinerary & cabin types"}
                  </button>
                  {expandedId === cruise.id && (
                    <div style={{ background: "#fef2f2", borderRadius: "8px", padding: "12px", marginBottom: "10px", fontSize: "13px" }}>
                      {cruise.ports_of_call?.length > 0 && (
                        <div style={{ marginBottom: "10px" }}>
                          <p style={{ fontWeight: "600", color: "#7f1d1d", margin: "0 0 6px" }}>Ports of call:</p>
                          {cruise.ports_of_call.map((port, i) => <div key={i} style={{ color: "#374151", marginBottom: "2px" }}>→ {port}</div>)}
                        </div>
                      )}
                      <p style={{ fontWeight: "600", color: "#7f1d1d", margin: "0 0 6px" }}>Cabin pricing:</p>
                      {cruise.inside_price > 0 && <div style={{ color: "#374151" }}>Inside: ~${cruise.inside_price.toLocaleString()}/pp</div>}
                      {cruise.balcony_price > 0 && <div style={{ color: "#374151" }}>Balcony: ~${cruise.balcony_price.toLocaleString()}/pp</div>}
                      <div style={{ color: "#374151" }}>Suite: <em>Ask agent for pricing</em></div>
                    </div>
                  )}
                </div>
                <div style={{ padding: "12px 16px", borderTop: "1px solid #f3f4f6", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <a href={buildCruiseDirectUrl(cruise)} target="_blank" rel="noopener noreferrer"
                    style={{ background: "#991b1b", color: "#fff", textAlign: "center", padding: "10px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                    Book now →
                  </a>
                  <button onClick={() => setAgentModal(cruise)}
                    style={{ background: "#fff", color: "#991b1b", border: "1.5px solid #991b1b", borderRadius: "8px", padding: "10px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                    Book with agent
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && displayCruises.length === 0 && (
          <div style={{ textAlign: "center", padding: "64px 24px" }}>
            <p style={{ fontSize: "48px", marginBottom: "16px" }}>🚢</p>
            <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>No cruises match your filters</h3>
            <p style={{ color: "#6b7280", marginBottom: "24px" }}>Try adjusting your search, or let our agent find the perfect sailing for you.</p>
            <button onClick={() => setAgentModal({ name: "Custom cruise request", cruise_line: "", nights: "", inside_price: 0 })}
              style={{ background: "#991b1b", color: "#fff", border: "none", borderRadius: "8px", padding: "12px 28px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
              Ask our agent for help →
            </button>
          </div>
        )}

        {/* Bundle CTA */}
        <div style={{ background: "linear-gradient(135deg, #7f1d1d, #991b1b)", borderRadius: "16px", padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginTop: "48px" }}>
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", margin: "0 0 4px" }}>Want a bundle? Flights + hotel + cruise</h3>
            <p style={{ fontSize: "13px", color: "#fca5a5", margin: 0 }}>Our licensed travel advisor can package everything together — often cheaper than booking separately.</p>
          </div>
          <button onClick={() => setAgentModal({ name: "Flight + Hotel + Cruise Bundle", cruise_line: "", nights: "", inside_price: 0 })}
            style={{ background: "#fff", color: "#7f1d1d", border: "none", borderRadius: "8px", padding: "12px 24px", fontSize: "14px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
            Get a bundle quote →
          </button>
        </div>
      </div>

      {/* AGENT MODAL */}
      {agentModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          onClick={(e) => { if (e.target === e.currentTarget) setAgentModal(null); }}>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", maxWidth: "480px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#111827", margin: 0 }}>Book with our agent</h2>
              <button onClick={() => setAgentModal(null)} style={{ background: "none", border: "none", fontSize: "24px", color: "#9ca3af", cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>
            {agentModal.name && (
              <div style={{ background: "#fef2f2", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
                <p style={{ fontWeight: "600", color: "#7f1d1d", margin: "0 0 4px", fontSize: "15px" }}>{agentModal.name}</p>
                {agentModal.cruise_line && <p style={{ color: "#374151", margin: "0 0 2px", fontSize: "13px" }}>{agentModal.cruise_line}{agentModal.nights ? ` · ${agentModal.nights} nights` : ""}</p>}
                {agentModal.inside_price > 0 && <p style={{ color: "#374151", margin: 0, fontSize: "13px" }}>From ~${agentModal.inside_price.toLocaleString()}/pp</p>}
              </div>
            )}
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontWeight: "600", color: "#111827", margin: "0 0 12px", fontSize: "14px" }}>Why book with our agent?</p>
              {["Access to exclusive rates not available online", "Flight + cruise bundles priced together", "Personal service & support throughout your trip", "No booking fees — ever"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ color: "#991b1b", fontWeight: "700", flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: "13px", color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
            <a href={`mailto:workhomebalancellc@gmail.com?subject=Cruise Booking Request: ${encodeURIComponent(agentModal.name)}&body=${encodeURIComponent(`Hi,\n\nI'm interested in booking the following cruise:\n\nCruise: ${agentModal.name}\nLine: ${agentModal.cruise_line}\nNights: ${agentModal.nights}\nStarting from: $${agentModal.inside_price}/pp\n\nPlease send me more details and availability.\n\nThank you!`)}`}
              style={{ display: "block", background: "#991b1b", color: "#fff", textAlign: "center", padding: "14px", borderRadius: "10px", fontSize: "15px", fontWeight: "600", textDecoration: "none", marginBottom: "16px" }}>
              📧 Email our agent →
            </a>
            <div style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af" }}>
              <p style={{ margin: "0 0 2px" }}>Mon–Fri 6–9PM · Sat 10AM–4PM EST</p>
              <p style={{ margin: 0 }}>We respond within 24 hours · No obligation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
