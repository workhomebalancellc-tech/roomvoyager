"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const destinations = [
  { name: "Cancún",       country: "Mexico",             photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=280&fit=crop&auto=format", tag: "🏖️ Beach",          iata: "CUN", kiwi: "cancun" },
  { name: "Miami",        country: "Florida, USA",        photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=400&h=280&fit=crop&auto=format", tag: "🌆 City",           iata: "MIA", kiwi: "miami-florida-united-states" },
  { name: "Las Vegas",    country: "Nevada, USA",         photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&h=280&fit=crop&auto=format", tag: "🎰 Entertainment",  iata: "LAS", kiwi: "las-vegas-nevada-united-states" },
  { name: "Paris",        country: "France",              photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=280&fit=crop&auto=format", tag: "🗼 Romance",         iata: "CDG", kiwi: "paris-ile-de-france-france" },
  { name: "Orlando",      country: "Florida, USA",        photo: "https://images.unsplash.com/photo-1526472050800-0d8e22b0a0c8?w=400&h=280&fit=crop&auto=format", tag: "🎡 Family",          iata: "MCO", kiwi: "orlando-florida-united-states" },
  { name: "London",       country: "United Kingdom",      photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=280&fit=crop&auto=format", tag: "🎭 Culture",         iata: "LHR", kiwi: "london-england-united-kingdom" },
  { name: "Punta Cana",   country: "Dominican Republic",  photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=280&fit=crop&auto=format", tag: "🌴 All-Inclusive",   iata: "PUJ", kiwi: "punta-cana-la-altagracia-dominican-republic" },
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

/* ── City → IATA lookup (resolves typed names to IATA codes) ────── */
const CITY_TO_IATA = {
  "cancún": "CUN", "cancun": "CUN",
  "miami": "MIA",
  "las vegas": "LAS",
  "paris": "CDG",
  "orlando": "MCO",
  "london": "LHR",
  "punta cana": "PUJ",
  "new york": "JFK", "new york city": "JFK", "nyc": "JFK",
  "atlanta": "ATL",
  "chicago": "ORD",
  "los angeles": "LAX", "la": "LAX",
  "dallas": "DFW",
  "denver": "DEN",
  "seattle": "SEA",
  "san francisco": "SFO",
  "boston": "BOS",
  "houston": "IAH",
  "phoenix": "PHX",
  "toronto": "YYZ",
  "vancouver": "YVR",
  "montreal": "YUL",
  "mexico city": "MEX",
  "cabo san lucas": "SJD",
  "puerto vallarta": "PVR",
  "rome": "FCO",
  "amsterdam": "AMS",
  "barcelona": "BCN",
  "madrid": "MAD",
  "frankfurt": "FRA",
  "dubai": "DXB",
  "tokyo": "NRT",
  "bangkok": "BKK",
  "sydney": "SYD",
  "nassau": "NAS",
  "montego bay": "MBJ",
  "aruba": "AUA",
  "phuket": "HKT",
  "bali": "DPS",
  "lisbon": "LIS",
  "athens": "ATH",
  "milan": "MXP",
  "vienna": "VIE",
  "prague": "PRG",
};
function resolveIata(cityName) {
  return CITY_TO_IATA[cityName?.toLowerCase().trim()] || null;
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
  const [toIata,   setToIata]   = useState(() => resolveIata(initialTo) || "");
  const [fromIata, setFromIata] = useState(() => resolveIata(initialFrom) || "");
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

  useEffect(() => setMounted(true), []);

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
    setFromIata(resolveIata(val) || "");
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
    setToIata(resolveIata(val) || "");
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
    // Resolve IATA at search time — covers card clicks, URL params, and typed city names
    const resolvedTo   = toIata   || resolveIata(to);
    const resolvedFrom = fromIata || resolveIata(from);
    let kiwiUrl;

    if (resolvedTo || resolvedFrom) {
      // At least one IATA known — use deep link for reliable Kiwi pre-fill
      const params = new URLSearchParams();
      if (resolvedFrom) params.set("from", resolvedFrom);
      if (resolvedTo)   params.set("to", resolvedTo);
      if (depart) params.set("departure", depart);
      if (tripType === "round" && ret) params.set("return", ret);
      if (pax > 1) params.set("adults", String(pax));
      kiwiUrl = `https://www.kiwi.com/deep?${params.toString()}`;
    } else {
      // Unknown city — fall back to text search
      const f = from.trim() || "anywhere";
      const t = to.trim()   || "anywhere";
      const d = depart      || "anytime";
      const r = tripType === "round" ? (ret || "anytime") : "no-return";
      const paxParam = pax > 1 ? `?adults=${pax}` : "";
      kiwiUrl = `https://www.kiwi.com/en/search/results/${encodeURIComponent(f)}/${encodeURIComponent(t)}/${d}/${r}${paxParam}`;
    }

    const tpUrl = `https://c111.travelpayouts.com/click?shmarker=722477&promo_id=3791&source_type=customlink&type=click&custom_url=${encodeURIComponent(kiwiUrl)}`;
    window.open(`/redirect?to=${encodeURIComponent(tpUrl)}&partner=Kiwi.com&product=flight`, "_blank", "noopener,noreferrer");
  }

  function pickDest(dest) {
    setTo(dest.name);
    setToIata(dest.iata);
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
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Powered by Travelpayouts</p>
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
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <form onSubmit={handleSearch} style={{ background: "#fff", borderRadius: "18px", padding: "28px 28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
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
                            onMouseDown={() => { setFrom(c.label || c.name); setFromIata(resolveIata(c.name) || ""); setShowFromSugg(false); }}
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
                            onMouseDown={() => { setTo(c.label || c.name); setToIata(resolveIata(c.name) || ""); setShowToSugg(false); }}
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
            <div style={{ display: "grid", gridTemplateColumns: tripType === "round" ? "1fr 1fr 120px auto" : "1fr 120px auto", gap: "12px", alignItems: "flex-end" }}>
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
              <button type="submit" style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 28px", fontSize: "15px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,59,149,0.3)", height: "42px", alignSelf: "flex-end" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
          {[
            { icon: "🏆", title: "Earn real cash back",       desc: "5 Rewards points per $1 on flights — redeem for real money via Zelle, Cash App, or Venmo." },
            { icon: "🔍", title: "500+ airlines compared",    desc: "We search major carriers, budget airlines, and everything in between to find the best price." },
            { icon: "✈️+🏨", title: "Bundle & save",         desc: "Add a hotel or cruise to your flight and unlock package pricing not available separately." },
            { icon: "📞", title: "Agent support",             desc: "Need help booking a complex itinerary? Our travel advisor handles it at no extra cost." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <p style={{ fontSize: "15px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>{item.title}</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── REWARDS CTA ──────────────────────────────────────────────── */}
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
      <Suspense fallback={null}>
        <FlightsContent />
      </Suspense>
      <Footer />
    </>
  );
}
