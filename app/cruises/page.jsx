"use client";

import { useState, useEffect } from "react";

const MOCK_CRUISES = [
  {
    id: 1, name: "Caribbean Family Adventure", cruise_line: "Royal Caribbean", ship: "Wonder of the Seas",
    nights: 7, destination: "Caribbean", departure_port: "Miami, FL", departure_date: "2026-08-15",
    ports_of_call: ["Nassau, Bahamas", "Cozumel, Mexico", "Labadee, Haiti"],
    inside_price: 499, balcony_price: 749,
    tags: ["family"],
  },
  {
    id: 2, name: "Bahamas Long Weekend", cruise_line: "Carnival", ship: "Carnival Celebration",
    nights: 4, destination: "Bahamas", departure_port: "Port Canaveral, FL", departure_date: "2026-07-17",
    ports_of_call: ["Nassau, Bahamas", "Half Moon Cay"],
    inside_price: 279, balcony_price: 429,
    tags: ["family", "short"],
  },
  {
    id: 3, name: "Mediterranean Solo Explorer", cruise_line: "Norwegian", ship: "Norwegian Epic",
    nights: 10, destination: "Mediterranean", departure_port: "Barcelona, Spain", departure_date: "2026-09-10",
    ports_of_call: ["Rome, Italy", "Naples, Italy", "Santorini, Greece", "Athens, Greece"],
    inside_price: 899, balcony_price: 1299,
    tags: ["solo"],
  },
  {
    id: 4, name: "Alaska Glacier Explorer", cruise_line: "Princess", ship: "Majestic Princess",
    nights: 7, destination: "Alaska", departure_port: "Seattle, WA", departure_date: "2026-06-28",
    ports_of_call: ["Juneau, AK", "Skagway, AK", "Ketchikan, AK", "Victoria, BC"],
    inside_price: 649, balcony_price: 949,
    tags: ["adventure"],
  },
  {
    id: 5, name: "Mexican Riviera Family Fun", cruise_line: "Carnival", ship: "Carnival Panorama",
    nights: 7, destination: "Mexico", departure_port: "Long Beach, CA", departure_date: "2026-08-01",
    ports_of_call: ["Cabo San Lucas", "Mazatlán", "Puerto Vallarta"],
    inside_price: 499, balcony_price: 729,
    tags: ["family"],
  },
  {
    id: 6, name: "Eastern Caribbean Escape", cruise_line: "Royal Caribbean", ship: "Harmony of the Seas",
    nights: 7, destination: "Caribbean", departure_port: "Port Canaveral, FL", departure_date: "2026-07-05",
    ports_of_call: ["St. Maarten", "St. Thomas, USVI", "Perfect Day, CocoCay"],
    inside_price: 549, balcony_price: 849,
    tags: ["family"],
  },
  {
    id: 7, name: "Adriatic & Greek Isles Honeymoon", cruise_line: "Celebrity", ship: "Celebrity Beyond",
    nights: 10, destination: "Mediterranean", departure_port: "Athens, Greece", departure_date: "2026-09-22",
    ports_of_call: ["Dubrovnik, Croatia", "Kotor, Montenegro", "Mykonos, Greece", "Santorini, Greece"],
    inside_price: 1099, balcony_price: 1549,
    tags: ["honeymoon", "luxury"],
  },
  {
    id: 8, name: "Transatlantic Grand Voyage", cruise_line: "Cunard", ship: "Queen Mary 2",
    nights: 14, destination: "Transatlantic", departure_port: "New York, NY", departure_date: "2026-10-05",
    ports_of_call: ["Halifax, Canada", "Southampton, UK", "Hamburg, Germany"],
    inside_price: 1299, balcony_price: 2199,
    tags: ["honeymoon", "luxury"],
  },
  {
    id: 9, name: "Riviera & Adriatic Luxury", cruise_line: "Oceania", ship: "Riviera",
    nights: 12, destination: "Mediterranean", departure_port: "Rome, Italy", departure_date: "2026-08-28",
    ports_of_call: ["Monte Carlo, Monaco", "Nice, France", "Florence, Italy", "Venice, Italy"],
    inside_price: 2499, balcony_price: 3299,
    tags: ["honeymoon", "luxury"],
  },
  {
    id: 10, name: "Alaska Inside Passage Adventure", cruise_line: "Holland America", ship: "ms Koningsdam",
    nights: 7, destination: "Alaska", departure_port: "Seattle, WA", departure_date: "2026-07-18",
    ports_of_call: ["Juneau, AK", "Glacier Bay, AK", "Sitka, AK", "Ketchikan, AK"],
    inside_price: 699, balcony_price: 1099,
    tags: ["adventure"],
  },
  {
    id: 11, name: "Caribbean Scarlet Night", cruise_line: "Virgin Voyages", ship: "Scarlet Lady",
    nights: 5, destination: "Caribbean", departure_port: "Miami, FL", departure_date: "2026-08-10",
    ports_of_call: ["Bimini, Bahamas", "Puerto Plata, Dominican Republic"],
    inside_price: 799, balcony_price: 1199,
    tags: ["adults-only", "solo", "honeymoon", "short"],
  },
  {
    id: 12, name: "Disney Magic Caribbean", cruise_line: "Disney", ship: "Disney Magic",
    nights: 4, destination: "Bahamas", departure_port: "Port Canaveral, FL", departure_date: "2026-07-10",
    ports_of_call: ["Nassau, Bahamas", "Disney's Castaway Cay"],
    inside_price: 899, balcony_price: 1399,
    tags: ["family", "short"],
  },
  {
    id: 13, name: "MSC Mediterranean Week", cruise_line: "MSC", ship: "MSC Bellissima",
    nights: 7, destination: "Mediterranean", departure_port: "Genoa, Italy", departure_date: "2026-09-05",
    ports_of_call: ["Naples, Italy", "Palermo, Sicily", "Valletta, Malta", "Barcelona, Spain"],
    inside_price: 599, balcony_price: 899,
    tags: ["family"],
  },
  {
    id: 14, name: "Solo Caribbean Explorer", cruise_line: "Norwegian", ship: "Norwegian Getaway",
    nights: 7, destination: "Caribbean", departure_port: "Miami, FL", departure_date: "2026-08-22",
    ports_of_call: ["Harvest Caye", "Belize City", "Roatán, Honduras", "Cozumel, Mexico"],
    inside_price: 649, balcony_price: 949,
    tags: ["solo"],
  },
  {
    id: 15, name: "Quick Bahamas Getaway", cruise_line: "Royal Caribbean", ship: "Mariner of the Seas",
    nights: 3, destination: "Bahamas", departure_port: "Miami, FL", departure_date: "2026-07-25",
    ports_of_call: ["Nassau, Bahamas", "Perfect Day, CocoCay"],
    inside_price: 229, balcony_price: 349,
    tags: ["short", "family"],
  },
  {
    id: 16, name: "Cunard Mediterranean Voyage", cruise_line: "Cunard", ship: "Queen Victoria",
    nights: 14, destination: "Mediterranean", departure_port: "Southampton, UK", departure_date: "2026-09-15",
    ports_of_call: ["Lisbon, Portugal", "Barcelona, Spain", "Monte Carlo, Monaco", "Rome, Italy"],
    inside_price: 1599, balcony_price: 2499,
    tags: ["luxury", "honeymoon"],
  },
  {
    id: 17, name: "Adults-Only Mediterranean Escape", cruise_line: "Celebrity", ship: "Celebrity Edge",
    nights: 9, destination: "Mediterranean", departure_port: "Barcelona, Spain", departure_date: "2026-09-01",
    ports_of_call: ["Palma, Mallorca", "Rome, Italy", "Naples, Italy", "Mykonos, Greece"],
    inside_price: 999, balcony_price: 1399,
    tags: ["adults-only", "luxury"],
  },
  {
    id: 18, name: "Princess Alaska Adventure", cruise_line: "Princess", ship: "Crown Princess",
    nights: 10, destination: "Alaska", departure_port: "San Francisco, CA", departure_date: "2026-07-02",
    ports_of_call: ["Juneau, AK", "Glacier Bay, AK", "Ketchikan, AK", "Victoria, BC"],
    inside_price: 849, balcony_price: 1249,
    tags: ["adventure"],
  },
  {
    id: 19, name: "Holland America Solo Europe", cruise_line: "Holland America", ship: "ms Nieuw Amsterdam",
    nights: 14, destination: "Mediterranean", departure_port: "Rome, Italy", departure_date: "2026-10-12",
    ports_of_call: ["Naples, Italy", "Athens, Greece", "Dubrovnik, Croatia", "Venice, Italy"],
    inside_price: 1199, balcony_price: 1799,
    tags: ["solo", "adventure"],
  },
  {
    id: 20, name: "Carnival Short Caribbean Break", cruise_line: "Carnival", ship: "Carnival Vista",
    nights: 5, destination: "Caribbean", departure_port: "Miami, FL", departure_date: "2026-08-06",
    ports_of_call: ["Cozumel, Mexico", "Mahogany Bay, Honduras"],
    inside_price: 319, balcony_price: 489,
    tags: ["short", "family"],
  },
];

const CJ_LINKS = {
  "Royal Caribbean": "https://www.tkqlhce.com/click-101734691-15533918",
  "Celebrity":       "https://www.kqzyfj.com/click-101734691-13096784",
  "Cunard":          "https://www.dpbolvw.net/click-101734691-13096789",
  "Holland America": "https://www.kqzyfj.com/click-101734691-13096799",
  "Carnival":        "https://www.dpbolvw.net/click-101734691-13096782",
  "Princess":        "https://www.anrdoezrs.net/click-101734691-12526292",
  "Norwegian":       "https://www.tkqlhce.com/click-101734691-15533851",
  "MSC":             "https://www.jdoqocy.com/click-101734691-15534062",
  "Oceania":         "https://www.kqzyfj.com/click-101734691-15535742",
  "Virgin Voyages":  "https://www.tkqlhce.com/click-101734691-15534638",
  "Disney":          "https://www.tkqlhce.com/click-101734691-13096793",
};

// Generic fallback — still CJ-tracked even without a line-specific link
const CJ_FALLBACK = "https://www.dpbolvw.net/click-101734691-13096782";

function buildCruiseDirectUrl(cruise) {
  return CJ_LINKS[cruise?.cruise_line] || CJ_FALLBACK;
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
  "Carnival":        "#E31837",
  "Norwegian":       "#003DA5",
  "Princess":        "#7B3F99",
  "MSC":             "#00539B",
  "Disney":          "#003087",
  "Celebrity":       "#1A1A6E",
  "Cunard":          "#8B0000",
  "Oceania":         "#C8922A",
  "Holland America": "#003F87",
  "Virgin Voyages":  "#D81C33",
};

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

export default function CruisesPage() {
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("");
  const [duration, setDuration] = useState("");
  const [departurePort, setDeparturePort] = useState("");
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [agentModal, setAgentModal] = useState(null);
  const [quoteForm, setQuoteForm] = useState({ firstName:"", lastName:"", email:"", phone:"", departureCity:"", destination:"", checkIn:"", checkOut:"", adults:"2", children:"0", cabin:"No preference", cruiseLine:"", budget:"", occasion:"", heardAbout:"", specialRequests:"" });
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const hasFilters = destination || tripType || duration || departurePort;

  function clearFilters() {
    setDestination("");
    setTripType("");
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
      if (tripType) params.set("trip_type", tripType);
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
        if (tripType && !c.tags?.includes(tripType)) return false;
        if (duration) {
          const n = c.nights;
          if (duration === "3-5" && (n < 3 || n > 5)) return false;
          if (duration === "6-8" && (n < 6 || n > 8)) return false;
          if (duration === "9-12" && (n < 9 || n > 12)) return false;
          if (duration === "13+" && n < 13) return false;
        }
        if (departurePort && !c.departure_port.toLowerCase().includes(departurePort.toLowerCase())) return false;
        return true;
      })
    : cruises;

  async function handleQuoteSubmit(e) {
    e.preventDefault();
    setQuoteSubmitting(true);
    const cruise = agentModal;
    const subject = `Cruise Quote Request: ${cruise?.name || "Custom Cruise"}`;
    const body = `Hi Alyse,\n\nNew cruise quote request:\n\nCustomer: ${quoteForm.firstName} ${quoteForm.lastName}\nEmail: ${quoteForm.email}\nPhone: ${quoteForm.phone}\nDeparture City: ${quoteForm.departureCity}\nDestination: ${quoteForm.destination || cruise?.destination || "Flexible"}\nTravel Dates: ${quoteForm.checkIn} – ${quoteForm.checkOut}\nGuests: ${quoteForm.adults} adults, ${quoteForm.children} children\nCabin Preference: ${quoteForm.cabin}\nCruise Line Preference: ${quoteForm.cruiseLine || cruise?.cruise_line || "Any"}\nBudget (per person): ${quoteForm.budget}\nSpecial Occasion: ${quoteForm.occasion}\nSpecial Requests: ${quoteForm.specialRequests}\nHeard About Us: ${quoteForm.heardAbout}\n\nCruise of Interest: ${cruise?.name || "Custom"}\nApprox. Price Shown: $${cruise?.inside_price || 0}/pp\n\nPlease send a personalized quote within 24 hours.\n\nThank you!`;
    window.location.href = `mailto:workhomebalancellc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { setQuoteSubmitting(false); setQuoteSuccess(true); }, 800);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
            <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
            <a href="/cruises" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
            <a href="/profile" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Profile</a>
            <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
          </div>
        </div>
      </nav>

      {/* HERO + SEARCH */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=480&fit=crop&auto=format" alt="Cruise ship at sea" style={{ width: "100%", height: "340px", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.65) 0%, rgba(0,15,60,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🚢 Cruise Search</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find your perfect cruise</h1>
          <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0, maxWidth: "500px" }}>Royal Caribbean, Celebrity, Cunard, Virgin Voyages, Carnival and more.</p>
        </div>
      </div>

      {/* SEARCH FILTERS — seamlessly attached below hero */}
      <div style={{ background: NAVY, padding: "0 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "20px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "14px" }}>
            {[
              { label: "Trip Type", value: tripType, onChange: e => setTripType(e.target.value), options: [["","All Trips"],["family","👨‍👩‍👧 Family"],["honeymoon","💍 Honeymoon & Romance"],["solo","🧳 Solo-Friendly"],["adults-only","🍹 Adults-Only"],["short","⚡ Short Getaway"],["luxury","✨ Luxury"],["adventure","🏔️ Adventure"]] },
              { label: "Destination", value: destination, onChange: e => setDestination(e.target.value), options: [["","All Destinations"],["Caribbean","Caribbean"],["Mediterranean","Mediterranean"],["Alaska","Alaska"],["Bahamas","Bahamas"],["Mexico","Mexico"],["Transatlantic","Transatlantic"]] },
              { label: "Duration", value: duration, onChange: e => setDuration(e.target.value), options: [["","Any Length"],["3-5","3–5 nights"],["6-8","6–8 nights"],["9-12","9–12 nights"],["13+","13+ nights"]] },
            ].map(({ label, value, onChange, options }) => (
              <div key={label}>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#93C5FD", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</label>
                <select value={value} onChange={onChange} style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "none", fontSize: "14px", background: "#fff", color: "#111827" }}>
                  {options.map(([val, text]) => <option key={val} value={val}>{text}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#93C5FD", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Departure Port</label>
              <input type="text" placeholder="e.g. Miami" value={departurePort} onChange={e => setDeparturePort(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "none", fontSize: "14px", background: "#fff", color: "#111827", boxSizing: "border-box" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={fetchCruises} style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", padding: "11px 28px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>Search Cruises →</button>
            <button onClick={clearFilters} style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "11px 20px", fontSize: "13px", cursor: "pointer" }}>Clear filters</button>
          </div>
        </div>
      </div>

      {/* REWARDS BANNER */}
      <div style={{ background: "#EBF3FF", borderBottom: "1px solid #BFDBFE", padding: "10px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: NAVY, fontSize: "13px", margin: 0 }}>
            💰 <strong>Earn 10 RoomVoyager Rewards points per $1</strong> on cruise bookings —{" "}
            <a href="/rewards" style={{ color: ORANGE, textDecoration: "underline" }}>learn more →</a>
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
                        <span key={i} style={{ fontSize: "11px", background: LIGHT_BLUE, color: NAVY, padding: "2px 8px", borderRadius: "999px" }}>📍 {port}</span>
                      ))}
                      {cruise.ports_of_call.length > 3 && <span style={{ fontSize: "11px", color: "#9ca3af", padding: "2px 4px" }}>+{cruise.ports_of_call.length - 3} more</span>}
                    </div>
                  )}
                  <div style={{ marginBottom: "10px" }}>
                    {cruise.inside_price > 0 && (
                      <p style={{ fontSize: "20px", fontWeight: "700", color: NAVY, margin: "0 0 2px" }}>
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
                    style={{ background: ORANGE, color: "#fff", textAlign: "center", padding: "10px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>
                    Book now →
                  </a>
                  <button onClick={() => { setAgentModal(cruise); setQuoteSuccess(false); setQuoteForm(f => ({ ...f, destination: cruise.destination, cruiseLine: cruise.cruise_line })); }}
                    style={{ background: "#fff", color: NAVY, border: `1.5px solid ${NAVY}`, borderRadius: "8px", padding: "10px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                    Get a quote
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
        <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", marginTop: "48px" }}>
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=260&fit=crop&auto=format" alt="Airplane" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${NAVY}f2, rgba(0,30,80,0.5))` }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#fff", margin: "0 0 4px" }}>Want a bundle? Flights + hotel + cruise</h3>
              <p style={{ fontSize: "13px", color: "#BFDBFE", margin: 0 }}>Our licensed travel advisor packages everything together — often cheaper than booking separately.</p>
            </div>
            <button onClick={() => { setAgentModal({ name: "Flight + Hotel + Cruise Bundle", cruise_line: "", nights: "", inside_price: 0, destination: "" }); setQuoteSuccess(false); }}
              style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "12px 24px", fontSize: "14px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }}>
              Get a bundle quote →
            </button>
          </div>
        </div>
      </div>

      {/* QUOTE MODAL */}
      {agentModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
          onClick={e => { if (e.target === e.currentTarget) { setAgentModal(null); setQuoteSuccess(false); } }}>
          <div style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "560px", maxHeight: "92vh", overflowY: "auto" }}>

            {/* Modal header */}
            <div style={{ background: NAVY, borderRadius: "20px 20px 0 0", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", margin: "0 0 4px", letterSpacing: "0.1em" }}>🚢 Free Quote</p>
                <h2 style={{ color: "#fff", fontSize: "18px", fontWeight: "800", margin: 0 }}>Request a Personalized Cruise Quote</h2>
              </div>
              <button onClick={() => { setAgentModal(null); setQuoteSuccess(false); }} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: "20px", borderRadius: "8px", width: "32px", height: "32px", cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            <div style={{ padding: "24px" }}>
              {/* Cruise of interest */}
              {agentModal.name && (
                <div style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "12px 16px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontWeight: "700", color: NAVY, margin: "0 0 2px", fontSize: "14px" }}>{agentModal.name}</p>
                    {agentModal.cruise_line && <p style={{ color: "#374151", margin: 0, fontSize: "12px" }}>{agentModal.cruise_line}{agentModal.nights ? ` · ${agentModal.nights} nights` : ""}</p>}
                  </div>
                  {agentModal.inside_price > 0 && <span style={{ background: ORANGE, color: "#fff", fontSize: "12px", fontWeight: "700", padding: "4px 10px", borderRadius: "8px" }}>From ~${agentModal.inside_price.toLocaleString()}/pp</span>}
                </div>
              )}

              {quoteSuccess ? (
                <div style={{ textAlign: "center", padding: "32px 16px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: "0 0 8px" }}>Quote request sent!</h3>
                  <p style={{ color: "#374151", fontSize: "14px", margin: "0 0 24px" }}>We'll email you a personalized quote within 24 hours. Check your inbox at <strong>{quoteForm.email}</strong>.</p>
                  <p style={{ color: "#6B7280", fontSize: "12px", margin: 0 }}>Mon–Fri 6–9PM · Sat 10AM–4PM EST</p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    {[["First Name","firstName","text",true],["Last Name","lastName","text",true]].map(([label,field,type,req]) => (
                      <div key={field}>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>{label}{req&&<span style={{color:ORANGE}}> *</span>}</label>
                        <input type={type} required={req} value={quoteForm[field]} onChange={e => setQuoteForm(f=>({...f,[field]:e.target.value}))}
                          style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    {[["Email","email","email",true],["Phone","phone","tel",false]].map(([label,field,type,req]) => (
                      <div key={field}>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>{label}{req&&<span style={{color:ORANGE}}> *</span>}</label>
                        <input type={type} required={req} value={quoteForm[field]} onChange={e => setQuoteForm(f=>({...f,[field]:e.target.value}))}
                          style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Departure City / Airport <span style={{color:ORANGE}}>*</span></label>
                    <input type="text" required placeholder="e.g. Indianapolis, IN" value={quoteForm.departureCity} onChange={e => setQuoteForm(f=>({...f,departureCity:e.target.value}))}
                      style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Earliest Travel Date</label>
                      <input type="date" value={quoteForm.checkIn} onChange={e => setQuoteForm(f=>({...f,checkIn:e.target.value}))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Latest Travel Date</label>
                      <input type="date" value={quoteForm.checkOut} onChange={e => setQuoteForm(f=>({...f,checkOut:e.target.value}))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Adults</label>
                      <select value={quoteForm.adults} onChange={e => setQuoteForm(f=>({...f,adults:e.target.value}))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                        {[1,2,3,4,5,6,7,8].map(n=><option key={n} value={n}>{n} adult{n>1?"s":""}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Children</label>
                      <select value={quoteForm.children} onChange={e => setQuoteForm(f=>({...f,children:e.target.value}))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                        {[0,1,2,3,4,5].map(n=><option key={n} value={n}>{n} {n===1?"child":"children"}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Cabin Preference</label>
                      <select value={quoteForm.cabin} onChange={e => setQuoteForm(f=>({...f,cabin:e.target.value}))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                        {["No preference","Inside","Oceanview","Balcony","Suite"].map(c=><option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Budget (per person)</label>
                      <select value={quoteForm.budget} onChange={e => setQuoteForm(f=>({...f,budget:e.target.value}))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                        {["Under $500","$500–$1,000","$1,000–$2,000","$2,000–$3,500","$3,500+","Flexible"].map(b=><option key={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Special Occasion</label>
                    <select value={quoteForm.occasion} onChange={e => setQuoteForm(f=>({...f,occasion:e.target.value}))}
                      style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                      {["None","Honeymoon","Anniversary","Birthday","Family Reunion","Graduation","Retirement","Just for fun"].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Special Requests or Questions</label>
                    <textarea rows={3} placeholder="Dietary needs, accessibility, excursion interests, anything else..." value={quoteForm.specialRequests} onChange={e => setQuoteForm(f=>({...f,specialRequests:e.target.value}))}
                      style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>How did you hear about us?</label>
                    <select value={quoteForm.heardAbout} onChange={e => setQuoteForm(f=>({...f,heardAbout:e.target.value}))}
                      style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                      {["","TikTok","Instagram","Google","Friend/Family","Facebook","Other"].map(h=><option key={h} value={h}>{h||"Select..."}</option>)}
                    </select>
                  </div>

                  {/* Why book with agent */}
                  <div style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: NAVY, margin: "0 0 8px" }}>Why request a quote?</p>
                    {["Personalized pricing based on your departure city","Flights + cruise bundled together","Access to rates not always shown online","No booking fees — ever"].map((item,i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ color: ORANGE, fontWeight: "700", flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: "12px", color: "#374151" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button type="submit" disabled={quoteSubmitting}
                    style={{ width: "100%", background: quoteSubmitting ? "#9CA3AF" : ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: quoteSubmitting ? "default" : "pointer", marginBottom: "10px" }}>
                    {quoteSubmitting ? "Sending..." : "📧 Request My Free Quote →"}
                  </button>
                  <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: 0 }}>Mon–Fri 6–9PM · Sat 10AM–4PM EST · Response within 24 hours</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
