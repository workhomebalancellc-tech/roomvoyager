"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const destinations = [
  { name: "Cancún",       country: "Mexico",             photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=280&fit=crop&auto=format", tag: "🏖️ Beach",          iata: "CUN", kiwi: "cancun" },
  { name: "Miami",        country: "Florida, USA",        photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=400&h=280&fit=crop&auto=format", tag: "🌆 City",           iata: "MIA", kiwi: "miami-florida-united-states" },
  { name: "Las Vegas",    country: "Nevada, USA",         photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&h=280&fit=crop&auto=format", tag: "🎰 Entertainment",  iata: "LAS", kiwi: "las-vegas-nevada-united-states" },
  { name: "Paris",        country: "France",              photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=280&fit=crop&auto=format", tag: "🗼 Romance",         iata: "CDG", kiwi: "paris-ile-de-france-france" },
  { name: "Orlando",      country: "Florida, USA",        photo: "https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=400&h=280&fit=crop&auto=format", tag: "🎡 Family",          iata: "MCO", kiwi: "orlando-florida-united-states" },
  { name: "London",       country: "United Kingdom",      photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=280&fit=crop&auto=format", tag: "🎭 Culture",         iata: "LHR", kiwi: "london-england-united-kingdom" },
  { name: "Punta Cana",   country: "Dominican Republic",  photo: "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?w=400&h=280&fit=crop&auto=format", tag: "🌴 All-Inclusive",   iata: "PUJ", kiwi: "punta-cana-la-altagracia-dominican-republic" },
  { name: "New York",     country: "New York, USA",       photo: "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=400&h=280&fit=crop&auto=format", tag: "🗽 Iconic",          iata: "JFK", kiwi: "new-york-new-york-united-states" },
];

const tips = [
  { icon: "📅", title: "Book 6–8 weeks out",      desc: "Domestic flights are cheapest when booked 6–8 weeks before departure. International: 3–6 months." },
  { icon: "📆", title: "Fly Tuesday or Wednesday", desc: "Mid-week flights are consistently cheaper than weekends — sometimes by 20% or more." },
  { icon: "🔔", title: "Set a price alert",        desc: "Prices fluctuate daily. Use our search to track a route and book when the price drops." },
  { icon: "🛫", title: "Try nearby airports",      desc: "Flying into or out of a secondary airport nearby can save hundreds on the same trip." },
  { icon: "🔀", title: "Mix airlines",             desc: "Booking outbound on one airline and return on another can unlock cheaper combos." },
  { icon: "🎒", title: "Travel carry-on only",     desc: "Skipping checked bags saves $30–$60 each way on most budget and major carriers." },
];

/* ── City → Kiwi slug lookup ─────────────────────────────────── */
const CITY_TO_KIWI = {
  "cancún": "cancun-quintana-roo-mexico", "cancun": "cancun-quintana-roo-mexico",
  "miami": "miami-florida-united-states",
  "las vegas": "las-vegas-nevada-united-states",
  "paris": "paris-ile-de-france-france",
  "orlando": "orlando-florida-united-states",
  "london": "london-england-united-kingdom",
  "punta cana": "punta-cana-la-altagracia-dominican-republic",
  "new york": "new-york-new-york-united-states", "new york city": "new-york-new-york-united-states", "nyc": "new-york-new-york-united-states",
  "atlanta": "atlanta-georgia-united-states",
  "chicago": "chicago-illinois-united-states",
  "los angeles": "los-angeles-california-united-states", "la": "los-angeles-california-united-states",
  "dallas": "dallas-texas-united-states",
  "denver": "denver-colorado-united-states",
  "seattle": "seattle-washington-united-states",
  "san francisco": "san-francisco-california-united-states",
  "boston": "boston-massachusetts-united-states",
  "houston": "houston-texas-united-states",
  "phoenix": "phoenix-arizona-united-states",
  "toronto": "toronto-ontario-canada",
  "vancouver": "vancouver-british-columbia-canada",
  "montreal": "montreal-quebec-canada",
  "mexico city": "mexico-city-mexico-city-mexico",
  "cabo san lucas": "cabo-san-lucas-baja-california-sur-mexico",
  "puerto vallarta": "puerto-vallarta-jalisco-mexico",
  "rome": "rome-lazio-italy",
  "amsterdam": "amsterdam-north-holland-netherlands",
  "barcelona": "barcelona-catalonia-spain",
  "madrid": "madrid-community-of-madrid-spain",
  "frankfurt": "frankfurt-hesse-germany",
  "dubai": "dubai-dubai-united-arab-emirates",
  "tokyo": "tokyo-tokyo-japan",
  "bangkok": "bangkok-bangkok-thailand",
  "sydney": "sydney-new-south-wales-australia",
  "nassau": "nassau-new-providence-bahamas",
  "montego bay": "montego-bay-saint-james-jamaica",
  "aruba": "oranjestad-aruba-aruba",
  "phuket": "phuket-phuket-thailand",
  "bali": "denpasar-bali-indonesia",
  "lisbon": "lisbon-lisbon-portugal",
  "athens": "athens-attica-greece",
  "milan": "milan-lombardy-italy",
  "vienna": "vienna-vienna-austria",
  "prague": "prague-capital-city-of-prague-czech-republic",
};
// US state abbreviation → full name (for building Kiwi slugs)
const ABBR_TO_STATE = {
  AL:"alabama",AK:"alaska",AZ:"arizona",AR:"arkansas",CA:"california",
  CO:"colorado",CT:"connecticut",DE:"delaware",FL:"florida",GA:"georgia",
  HI:"hawaii",ID:"idaho",IL:"illinois",IN:"indiana",IA:"iowa",KS:"kansas",
  KY:"kentucky",LA:"louisiana",ME:"maine",MD:"maryland",MA:"massachusetts",
  MI:"michigan",MN:"minnesota",MS:"mississippi",MO:"missouri",MT:"montana",
  NE:"nebraska",NV:"nevada",NH:"new-hampshire",NJ:"new-jersey",NM:"new-mexico",
  NY:"new-york",NC:"north-carolina",ND:"north-dakota",OH:"ohio",OK:"oklahoma",
  OR:"oregon",PA:"pennsylvania",RI:"rhode-island",SC:"south-carolina",
  SD:"south-dakota",TN:"tennessee",TX:"texas",UT:"utah",VT:"vermont",
  VA:"virginia",WA:"washington",WV:"west-virginia",WI:"wisconsin",WY:"wyoming",
  DC:"district-of-columbia",PR:"puerto-rico",
};
function resolveKiwi(cityName) {
  if (!cityName) return null;
  // Try full string first, then just the city part before any comma
  const full = CITY_TO_KIWI[cityName.toLowerCase().trim()];
  if (full) return full;
  const cityOnly = cityName.split(",")[0].trim().toLowerCase();
  return CITY_TO_KIWI[cityOnly] || null;
}
// Build a Kiwi slug from an autocomplete suggestion {name, sub} where sub is "GA" or "France"
function buildKiwiSlugFromSugg(name, sub) {
  if (!name) return null;
  const city = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  if (!sub) return city;
  const subTrimmed = sub.trim();
  // US state abbreviation → "city-state-united-states"
  const stateFull = ABBR_TO_STATE[subTrimmed.toUpperCase()];
  if (stateFull) return `${city}-${stateFull}-united-states`;
  // International — "city-country"
  const countrySlug = subTrimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${city}-${countrySlug}`;
}
function toKiwiSlug(name) {
  if (!name?.trim()) return null;
  return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* ── input style helper ─────────────────────────────────────────── */
const inp = {
  width: "100%", padding: "10px 14px",
  border: "1.5px solid #D1D5DB", borderRadius: "8px",
  fontSize: "14px", color: "#111827", background: "#fff",
  outline: "none", boxSizing: "border-box",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

function FlightsContent() {
  const searchParams = useSearchParams();
  const initialTo   = searchParams.get("to")   || "";
  const initialFrom = searchParams.get("from") || searchParams.get("q") || "";

  const [tripType, setTripType] = useState("round");
  const [from,     setFrom]     = useState(initialFrom);
  const [to,       setTo]       = useState(initialTo);
  const [depart,   setDepart]   = useState("");
  const [ret,      setRet]      = useState("");
  const [pax,      setPax]      = useState(1);
  // IATA codes — seeded from URL params via lookup, updated on card click or autocomplete pick
  const [toKiwi,   setToKiwi]   = useState(() => resolveKiwi(initialTo) || "");
  const [fromKiwi, setFromKiwi] = useState(() => resolveKiwi(initialFrom) || "");
  const [toFlash,  setToFlash]  = useState(false);
  const [mounted,  setMounted]  = useState(false);

  // Autocomplete state — From field
  const [fromSugg,      setFromSugg]      = useState([]);
  const [showFromSugg,  setShowFromSugg]  = useState(false);
  const [loadingFrom,   setLoadingFrom]   = useState(false);
  // Autocomplete state — To field
  const [toSugg,        setToSugg]        = useState([]);
  const [showToSugg,    setShowToSugg]    = useState(false);
  const [loadingTo,     setLoadingTo]     = useState(false);

  const toInputRef      = useRef(null);
  const fromDebounceRef = useRef(null);
  const toDebounceRef   = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleDepartChange(val) {
    setDepart(val);
    if (val) {
      const d = new Date(val + "T12:00:00");
      d.setDate(d.getDate() + 7);
      const next = d.toISOString().split("T")[0];
      if (!ret || ret <= val) setRet(next);
    }
  }

  function handleFromChange(val) {
    setFrom(val);
    setFromKiwi(resolveKiwi(val) || "");
    if (fromDebounceRef.current) clearTimeout(fromDebounceRef.current);
    if (!val || val.length < 2) { setFromSugg([]); setShowFromSugg(false); return; }
    setLoadingFrom(true);
    fromDebounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(`/api/cities?q=${encodeURIComponent(val)}`);
        const data = await res.json();
        setFromSugg(data); setShowFromSugg(data.length > 0);
      } catch { setFromSugg([]); setShowFromSugg(false); }
      finally { setLoadingFrom(false); }
    }, 300);
  }

  function handleToChange(val) {
    setTo(val);
    setToKiwi(resolveKiwi(val) || "");
    if (toDebounceRef.current) clearTimeout(toDebounceRef.current);
    if (!val || val.length < 2) { setToSugg([]); setShowToSugg(false); return; }
    setLoadingTo(true);
    toDebounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(`/api/cities?q=${encodeURIComponent(val)}`);
        const data = await res.json();
        setToSugg(data); setShowToSugg(data.length > 0);
      } catch { setToSugg([]); setShowToSugg(false); }
      finally { setLoadingTo(false); }
    }, 300);
  }

  function handleSearch(e) {
    e?.preventDefault();
    const slugFrom = fromKiwi || resolveKiwi(from) || toKiwiSlug(from.split(",")[0].trim()) || "anywhere";
    const slugTo   = toKiwi   || resolveKiwi(to)   || toKiwiSlug(to)   || "anywhere";
    const d = depart || "anytime";
    const r = tripType === "round" ? (ret || "anytime") : "no-return";
    const paxParam = pax > 1 ? `?adults=${pax}` : "";
    const kiwiUrl = `https://www.kiwi.com/en/search/results/${slugFrom}/${slugTo}/${d}/${r}${paxParam}`;
    const tpUrl = `https://c111.travelpayouts.com/click?shmarker=722477&promo_id=3791&source_type=customlink&type=click&custom_url=${encodeURIComponent(kiwiUrl)}`;
    const dest = `/redirect?to=${encodeURIComponent(tpUrl)}&partner=Kiwi.com&product=flight`;
    window.location.href = dest;
  }

  function pickDest(dest) {
    setTo(dest.name);
    setToKiwi(dest.kiwi || resolveKiwi(dest.name) || "");
    setToSugg([]); setShowToSugg(false);
    setToFlash(true);
    if (toInputRef.current) toInputRef.current.value = dest.name;
    setTimeout(() => setToFlash(false), 1800);
    setTimeout(() => toInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="flights" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=500&fit=crop&auto=format"
          alt="Airplane wing above clouds"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.60) 0%, rgba(0,15,60,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Powered by Kiwi.com</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find the best flight deals</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Search 500+ airlines — no hidden fees, earn rewards on every booking.</p>
        </div>
      </div>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
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

      {/* ── SEARCH FORM ──────────────────────────────────────────────── */}
      <div style={{ background: NAVY, padding: "32px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <form onSubmit={handleSearch} style={{ background: "#fff", borderRadius: "18px", padding: "28px 28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }} noValidate>
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              {["round", "oneway"].map(t => (
                <button key={t} type="button" onClick={() => setTripType(t)}
                  style={{ padding: "7px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: "600", cursor: "pointer", border: "none", background: tripType === t ? NAVY : "#F3F4F6", color: tripType === t ? "#fff" : "#374151", transition: "background 0.15s" }}>
                  {t === "round" ? "Round Trip" : "One Way"}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              {/* FROM with autocomplete */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>From</label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="City or airport (e.g. New York)" value={from}
                    onChange={e => handleFromChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowFromSugg(false), 160)}
                    onFocus={() => from.length >= 2 && fromSugg.length > 0 && setShowFromSugg(true)}
                    style={inp} />
                  {(showFromSugg || loadingFrom) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", zIndex: 200, marginTop: "3px", overflow: "hidden" }}>
                      {loadingFrom && fromSugg.length === 0
                        ? <div style={{ padding: "10px 12px", fontSize: "12px", color: "#9CA3AF" }}>Searching…</div>
                        : fromSugg.map((c, i) => (
                          <div key={i}
                            onPointerDown={() => { setFrom(c.label || c.name); setFromKiwi(resolveKiwi(c.name) || buildKiwiSlugFromSugg(c.name, c.sub) || ""); setShowFromSugg(false); }}
                            style={{ padding: "9px 12px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < fromSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ fontSize: "13px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{c.sub}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
              {/* TO with autocomplete */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>To</label>
                <div style={{ position: "relative" }}>
                  <input ref={toInputRef} type="text" placeholder="City or airport (e.g. Cancún)" value={to}
                    onChange={e => handleToChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowToSugg(false), 160)}
                    onFocus={() => to.length >= 2 && toSugg.length > 0 && setShowToSugg(true)}
                    style={{ ...inp, borderColor: toFlash ? ORANGE : "#D1D5DB", transition: "border-color 0.3s" }} />
                  {(showToSugg || loadingTo) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", zIndex: 200, marginTop: "3px", overflow: "hidden" }}>
                      {loadingTo && toSugg.length === 0
                        ? <div style={{ padding: "10px 12px", fontSize: "12px", color: "#9CA3AF" }}>Searching…</div>
                        : toSugg.map((c, i) => (
                          <div key={i}
                            onPointerDown={() => { setTo(c.label || c.name); setToKiwi(resolveKiwi(c.name) || toKiwiSlug(c.name) || ""); setShowToSugg(false); }}
                            style={{ padding: "9px 12px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < toSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ fontSize: "13px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{c.sub}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px", alignItems: "flex-end" }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Depart</label>
                <input type="date" value={depart} min={mounted ? new Date().toISOString().split("T")[0] : ""} onChange={e => handleDepartChange(e.target.value)} style={inp} />
              </div>
              {tripType === "round" && (
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Return</label>
                  <input type="date" value={ret} min={depart || (mounted ? new Date().toISOString().split("T")[0] : "")} onChange={e => setRet(e.target.value)} style={inp} />
                </div>
              )}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Passengers</label>
                <select value={pax} onChange={e => setPax(Number(e.target.value))} style={{ ...inp, cursor: "pointer" }}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>)}
                </select>
              </div>
              <button type="button" onClick={handleSearch} style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "15px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,59,149,0.3)", height: "42px", alignSelf: "flex-end", width: "100%" }}>
                Search ✈️
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── POPULAR DESTINATIONS ─────────────────────────────────────── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 32px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Explore the world</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Popular flight destinations</h2>
        <p style={{ color: "#6B7280", fontSize: "14px", margin: "0 0 28px" }}>Click a destination to pre-fill your search</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "16px" }}>
          {destinations.map(dest => (
            <button type="button" key={dest.name} onClick={() => pickDest(dest)}
              style={{ borderRadius: "14px", overflow: "hidden", position: "relative", height: "180px", cursor: "pointer", display: "block", border: "none", padding: 0, textAlign: "left", width: "100%" }}
              onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
            >
              <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 60%)" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                <span style={{ background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 8px", borderRadius: "999px", backdropFilter: "blur(4px)" }}>{dest.tag}</span>
              </div>
              <div style={{ position: "absolute", bottom: "14px", left: "14px" }}>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "16px", margin: "0 0 2px", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{dest.name}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>{dest.country}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── TIPS ─────────────────────────────────────────────────────── */}
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

      {/* ── WHY BOOK WITH US ─────────────────────────────────────────── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Why RoomVoyager</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 28px" }}>More than just a flight search</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[
            { icon: "🏆", title: "Earn real cash back",       desc: "5 Rewards points per $1 on flights — redeem for real money via Zelle, Cash App, or Venmo." },
            { icon: "🔍", title: "500+ airlines compared",    desc: "We search major carriers, budget airlines, and everything in between to find the best price." },
            { icon: "🔄", title: "Flexible booking options",  desc: "Filter for free cancellation fares — book with confidence and change your plans if you need to." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px", flex: "1 1 220px", maxWidth: "320px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <p style={{ fontSize: "15px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>{item.title}</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── REWARDS CTA ──────────────────────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", margin: "0 24px 56px", borderRadius: "20px" }}>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&h=220&fit=crop&auto=format" alt="Airplane wing" style={{ width: "100%", height: isMobile ? "260px" : "180px", objectFit: "cover", borderRadius: "20px" }} />
        <div style={{ position: "absolute", inset: 0, background: `${NAVY}e0`, borderRadius: "20px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: isMobile ? "center" : "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", padding: isMobile ? "28px 24px 32px" : "0 40px", gap: "20px" }}>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#fff", margin: "0 0 6px" }}>Earn rewards on every flight you book</h3>
            <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>5 points per $1 · Redeem for real cash · No blackout dates</p>
          </div>
          <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: isMobile ? "14px 28px" : "12px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(255,102,0,0.4)", alignSelf: isMobile ? "stretch" : "auto", textAlign: "center" }}>
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
      <Suspense fallback={null}>
        <FlightsContent />
      </Suspense>
      <FloatingChat />
      <Footer />
    </>
  );
}
