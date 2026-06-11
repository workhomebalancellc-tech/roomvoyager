"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const DESTINATIONS = [
  { name: "Caribbean",       desc: "Crystal waters, white sand beaches, and island hopping from Miami or Fort Lauderdale.", nights: "5–10 nights", from: "$349", photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop&auto=format" },
  { name: "Mediterranean",   desc: "Ancient history, stunning coastlines, and world-class cuisine across Europe.",           nights: "7–14 nights", from: "$699", photo: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=300&fit=crop&auto=format" },
  { name: "Alaska",          desc: "Majestic glaciers, wildlife, and breathtaking fjords sailing from Seattle.",             nights: "7–10 nights", from: "$549", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop&auto=format" },
  { name: "Bahamas",         desc: "Short getaways with turquoise water — perfect for first-time cruisers.",               nights: "3–5 nights",  from: "$249", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=300&fit=crop&auto=format" },
  { name: "Mexican Riviera", desc: "Sunny ports, rich culture, and warm Pacific waters sailing from California.",           nights: "5–7 nights",  from: "$399", photo: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=300&fit=crop&auto=format" },
  { name: "Transatlantic",   desc: "Epic ocean crossings between the Americas and Europe — a bucket-list voyage.",          nights: "12–18 nights",from: "$899", photo: "https://images.unsplash.com/photo-1580274455191-1c62238fa1c2?w=600&h=300&fit=crop&auto=format" },
];

const LINES = [
  { name: "Royal Caribbean", abbr: "RC",    color: "#00205B", accent: "#D4AF37", tag: "Families & adventure",      href: "https://www.tkqlhce.com/click-101734691-15533918" },
  { name: "Carnival",        abbr: "CCL",   color: "#C8102E", accent: "#fff",    tag: "Fun & budget travel",       href: "https://www.dpbolvw.net/click-101734691-13096782" },
  { name: "Norwegian",       abbr: "NCL",   color: "#001489", accent: "#00AEEF", tag: "Freestyle flexibility",     href: "https://www.tkqlhce.com/click-101734691-15533851" },
  { name: "Princess",        abbr: "PCL",   color: "#7B0046", accent: "#E8C97A", tag: "Scenic & Alaska routes",   href: "https://www.dpbolvw.net/click-101734691-15534065" },
  { name: "MSC Cruises",     abbr: "MSC",   color: "#003087", accent: "#FFD700", tag: "Mediterranean specialist", href: "https://www.jdoqocy.com/click-101734691-15534062" },
  { name: "Disney Cruise",   abbr: "DCL",   color: "#003B8E", accent: "#FFD700", tag: "Best for families & kids", href: "https://www.tkqlhce.com/click-101734691-13096793" },
  { name: "Celebrity",       abbr: "CEL",   color: "#0055A5", accent: "#C9A84C", tag: "Modern luxury at sea",     href: "https://www.kqzyfj.com/click-101734691-13096784" },
  { name: "Cunard",          abbr: "CUN",   color: "#1B1B3A", accent: "#C0A060", tag: "Classic ocean voyages",    href: "https://www.dpbolvw.net/click-101734691-13096789" },
  { name: "Holland America", abbr: "HAL",   color: "#003366", accent: "#B8960C", tag: "Premium & world cruises",  href: "https://www.kqzyfj.com/click-101734691-13096799" },
  { name: "Oceania",         abbr: "OCI",   color: "#1C5E8A", accent: "#F0C040", tag: "Small ships, gourmet food",href: "https://www.kqzyfj.com/click-101734691-15535742" },
  { name: "Virgin Voyages",  abbr: "VV",    color: "#E8002D", accent: "#fff",    tag: "Adults-only, trendy ships", href: "https://www.tkqlhce.com/click-101734691-15534638" },
  { name: "Costa Cruises",   abbr: "COSTA", color: "#003DA5", accent: "#FFD100", tag: "European flair at sea",    href: "https://www.dpbolvw.net/click-101734691-15534655" },
];

const TIME_SLOTS = ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

function getAvailableDates() {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 90 && dates.length < 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const day = d.getDay();
    if (day === 5 || day === 6) dates.push(new Date(d));
  }
  return dates;
}

function fmt(d) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box", outline: "none" };
const labelStyle = { fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "4px" };

export default function CruisesPage() {
  const [showModal, setShowModal]       = useState(false);
  const [mode, setMode]                 = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [submitted, setSubmitted]       = useState(false);
  const [submitting, setSubmitting]     = useState(false);
  const [submitError, setSubmitError]   = useState(null);
  const [callSubmitted, setCallSubmitted]   = useState(false);
  const [callSubmitting, setCallSubmitting] = useState(false);
  const [callError, setCallError]           = useState(null);
  const [callForm, setCallForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  // menuOpen handled by shared NavBar
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 1024 : false);

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    destination: "", travelers: "2", budget: "", travelFrom: "", travelTo: "",
    cabin: "any", notes: "",
  });

  const availableDates = getAvailableDates();

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

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", checkMobile);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  async function handleEmailSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us at workhomebalancellc@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCallConfirm() {
    if (!selectedDate || !selectedTime || !callForm.firstName || !callForm.email) return;
    setCallSubmitting(true);
    setCallError(null);
    try {
      const res = await fetch("/api/call-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...callForm, date: fmt(selectedDate), time: selectedTime }),
      });
      if (!res.ok) throw new Error("Failed");
      setCallSubmitted(true);
    } catch {
      setCallError("Something went wrong. Please try again.");
    } finally {
      setCallSubmitting(false);
    }
  }

  function closeModal() {
    setShowModal(false); setMode(null); setSelectedDate(null); setSelectedTime(null);
    setSubmitted(false); setSubmitting(false); setSubmitError(null);
    setCallSubmitted(false); setCallSubmitting(false); setCallError(null);
    setCallForm({ firstName: "", lastName: "", email: "", phone: "" });
  }

  const canConfirmCall = selectedDate && selectedTime && callForm.firstName && callForm.email && !callSubmitting;

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* MODAL */}
      {showModal && (
        <div onClick={closeModal} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "540px", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

            {/* Modal header */}
            <div style={{ background: NAVY, borderRadius: "20px 20px 0 0", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Free Agent Quote</p>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "18px", margin: 0 }}>How would you like to connect?</p>
              </div>
              <button onClick={closeModal} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            </div>

            <div style={{ padding: "24px" }}>

              {/* Step 1: Choose mode */}
              {!mode && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <button onClick={() => setMode("email")} style={{ border: `2px solid ${NAVY}`, borderRadius: "14px", padding: "22px 16px", background: "#fff", cursor: "pointer", textAlign: "center" }}
                    onMouseEnter={e => e.currentTarget.style.background = LIGHT_BLUE}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>📧</div>
                    <p style={{ fontWeight: "800", color: NAVY, fontSize: "15px", margin: "0 0 4px" }}>Email Quote</p>
                    <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>Fill out a quick form — response within 24 hrs</p>
                  </button>
                  <button onClick={() => setMode("call")} style={{ border: `2px solid ${ORANGE}`, borderRadius: "14px", padding: "22px 16px", background: "#fff", cursor: "pointer", textAlign: "center" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#FFF7F0"}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>📞</div>
                    <p style={{ fontWeight: "800", color: ORANGE, fontSize: "15px", margin: "0 0 4px" }}>Schedule a Call</p>
                    <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>Pick a time on Fri or Sat, 11 AM–2 PM EST</p>
                  </button>
                </div>
              )}

              {/* Step 2a: Email form */}
              {mode === "email" && !submitted && (
                <form onSubmit={handleEmailSubmit}>
                  <button type="button" onClick={() => setMode(null)} style={{ background: "none", border: "none", color: "#6B7280", fontSize: "13px", cursor: "pointer", marginBottom: "16px", padding: 0 }}>← Back</button>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[["First Name","firstName","text",true],["Last Name","lastName","text",true],["Email","email","email",true],["Phone (optional)","phone","tel",false]].map(([label,key,type,req]) => (
                      <div key={key}>
                        <label style={labelStyle}>{label}{req && " *"}</label>
                        <input required={req} type={type} value={form[key]} onChange={e => setForm(f => ({...f,[key]:e.target.value}))} style={inputStyle} />
                      </div>
                    ))}
                    <div>
                      <label style={labelStyle}>Destination</label>
                      <select value={form.destination} onChange={e => setForm(f => ({...f,destination:e.target.value}))} style={inputStyle}>
                        <option value="">Flexible / Not sure</option>
                        {DESTINATIONS.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Travelers *</label>
                      <input required type="number" min="1" max="20" value={form.travelers} onChange={e => setForm(f => ({...f,travelers:e.target.value}))} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Budget per person</label>
                      <select value={form.budget} onChange={e => setForm(f => ({...f,budget:e.target.value}))} style={inputStyle}>
                        <option value="">Flexible</option>
                        <option>Under $500</option><option>$500–$1,000</option><option>$1,000–$2,000</option><option>$2,000+</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Cabin preference</label>
                      <select value={form.cabin} onChange={e => setForm(f => ({...f,cabin:e.target.value}))} style={inputStyle}>
                        <option value="any">No preference</option><option>Interior</option><option>Ocean View</option><option>Balcony</option><option>Suite</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Travel date (from)</label>
                      <input type="date" value={form.travelFrom} onChange={e => setForm(f => ({...f,travelFrom:e.target.value}))} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Travel date (to)</label>
                      <input type="date" value={form.travelTo} onChange={e => setForm(f => ({...f,travelTo:e.target.value}))} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    <label style={labelStyle}>Special requests or questions</label>
                    <textarea rows={3} value={form.notes} onChange={e => setForm(f => ({...f,notes:e.target.value}))}
                      placeholder="Dietary needs, accessibility, occasion, specific ships you like..."
                      style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <button type="submit" disabled={submitting} style={{ marginTop: "16px", width: "100%", background: submitting ? "#6B7280" : NAVY, color: "#fff", border: "none", padding: "13px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", cursor: submitting ? "default" : "pointer" }}>
                    {submitting ? "⏳ Sending..." : "📧 Send Quote Request"}
                  </button>
                  {submitError && <p style={{ textAlign: "center", fontSize: "12px", color: "#DC2626", margin: "8px 0 0" }}>{submitError}</p>}
                  <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "8px 0 0" }}>We&apos;ll respond within 24 hours.</p>
                </form>
              )}

              {/* Email submitted */}
              {mode === "email" && submitted && (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
                  <p style={{ fontWeight: "800", fontSize: "18px", color: NAVY, margin: "0 0 8px" }}>Quote request sent!</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>We&apos;ll respond within 24 hours. Check your email for confirmation.</p>
                  <button onClick={closeModal} style={{ background: ORANGE, color: "#fff", border: "none", padding: "11px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>Close</button>
                </div>
              )}

              {/* Step 2b: Call calendar */}
              {mode === "call" && !callSubmitted && (
                <div>
                  <button type="button" onClick={() => setMode(null)} style={{ background: "none", border: "none", color: "#6B7280", fontSize: "13px", cursor: "pointer", marginBottom: "12px", padding: 0 }}>← Back</button>

                  {/* Contact info */}
                  <p style={{ fontWeight: "700", color: "#111827", fontSize: "14px", margin: "0 0 10px" }}>Your contact info</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                    {[["First Name","firstName","text",true],["Last Name","lastName","text",false],["Email","email","email",true],["Phone (optional)","phone","tel",false]].map(([label,key,type,req]) => (
                      <div key={key}>
                        <label style={labelStyle}>{label}{req && " *"}</label>
                        <input required={req} type={type} value={callForm[key]} onChange={e => setCallForm(f => ({...f,[key]:e.target.value}))} style={inputStyle} />
                      </div>
                    ))}
                  </div>

                  {/* Date picker */}
                  <p style={{ fontWeight: "700", color: "#111827", fontSize: "14px", margin: "0 0 4px" }}>Pick a date</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 14px" }}>Available Fridays &amp; Saturdays · 11 AM – 2 PM EST</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                    {availableDates.map((d, i) => {
                      const sel = selectedDate && d.toDateString() === selectedDate.toDateString();
                      return (
                        <button key={i} type="button" onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                          style={{ padding: "8px 14px", borderRadius: "8px", border: `1.5px solid ${sel ? NAVY : "#D1D5DB"}`, background: sel ? NAVY : "#fff", color: sel ? "#fff" : "#374151", fontSize: "13px", fontWeight: sel ? "700" : "400", cursor: "pointer" }}>
                          {fmt(d)}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time picker */}
                  {selectedDate && (
                    <>
                      <p style={{ fontWeight: "700", color: "#111827", fontSize: "14px", margin: "0 0 10px" }}>Pick a time (EST)</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                        {TIME_SLOTS.map(t => {
                          const sel = selectedTime === t;
                          return (
                            <button key={t} type="button" onClick={() => setSelectedTime(t)}
                              style={{ padding: "8px 16px", borderRadius: "8px", border: `1.5px solid ${sel ? ORANGE : "#D1D5DB"}`, background: sel ? ORANGE : "#fff", color: sel ? "#fff" : "#374151", fontSize: "13px", fontWeight: sel ? "700" : "400", cursor: "pointer" }}>
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Confirmation summary */}
                  {selectedDate && selectedTime && (
                    <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "14px 16px", marginBottom: "16px" }}>
                      <p style={{ fontWeight: "700", color: NAVY, fontSize: "14px", margin: "0 0 2px" }}>✅ {fmt(selectedDate)} at {selectedTime} EST</p>
                      <p style={{ fontSize: "12px", color: "#374151", margin: 0 }}>We&apos;ll confirm within 24 hours via email.</p>
                    </div>
                  )}

                  <button onClick={handleCallConfirm} disabled={!canConfirmCall}
                    style={{ width: "100%", background: canConfirmCall ? ORANGE : "#E5E7EB", color: canConfirmCall ? "#fff" : "#9CA3AF", border: "none", padding: "13px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", cursor: canConfirmCall ? "pointer" : "default" }}>
                    {callSubmitting ? "⏳ Sending..." : "📞 Request This Call Time"}
                  </button>
                  {callError && <p style={{ textAlign: "center", fontSize: "12px", color: "#DC2626", margin: "8px 0 0" }}>{callError}</p>}
                  <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "8px 0 0" }}>We&apos;ll confirm within 24 hours.</p>
                </div>
              )}

              {/* Call submitted */}
              {mode === "call" && callSubmitted && (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "12px" }}>📞</div>
                  <p style={{ fontWeight: "800", fontSize: "18px", color: NAVY, margin: "0 0 8px" }}>Call request received!</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 4px" }}>
                    {selectedDate && selectedTime ? `${fmt(selectedDate)} at ${selectedTime} EST` : ""}
                  </p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>We&apos;ll confirm your slot within 24 hours.</p>
                  <button onClick={closeModal} style={{ background: ORANGE, color: "#fff", border: "none", padding: "11px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>Close</button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      <NavBar active="cruises" />

      {/* HERO */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=500&fit=crop&auto=format" alt="Cruise ship at sea"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.65) 0%, rgba(0,15,60,0.82) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🚢 Powered by CruiseDirect</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find Your Perfect Cruise</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Search live inventory across all major cruise lines</p>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["🚢","Top cruise lines"],["💰","No booking fees"],["🤝","Free agent assistance"],["🏆","Earn 10 pts per $1"],["📞","24hr quote turnaround"]].map(([icon,text],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#374151" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE SECTION NAV */}
      {isMobile && (
        <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", gap: "0", padding: "0 16px", whiteSpace: "nowrap" }}>
            {[
              { label: "Destinations", href: "#destinations" },
              { label: "Cruise Lines",  href: "#cruise-lines"  },
              { label: "Search Cruises",href: "#search"        },
              { label: "Get a Quote",   href: "#quote"         },
            ].map((item, i) => (
              <a key={i} href={item.href}
                style={{ display: "inline-block", padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: NAVY, textDecoration: "none", borderBottom: "2px solid transparent", flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = ORANGE; e.currentTarget.style.color = ORANGE; }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.color = NAVY; }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* MAIN — responsive two column */}
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: isMobile ? "24px 16px 60px" : "48px 24px 80px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "320px 1fr", gap: "40px", alignItems: "start" }}>

        {/* ── LEFT — sticky widget (hidden on mobile, shown below content) ── */}
        {!isMobile && (
          <div style={{ position: "sticky", top: "80px" }}>
            <p style={{ fontSize: "12px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>
              🔍 Search &amp; Book Cruises
            </p>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,59,149,0.15)", border: "1px solid #E5E7EB", width: "300px" }}>
              <div id="cdsearch" data-redirect-server="https://www.jdoqocy.com/click-101734691-15534473?url=" />
              <div id="cruiseSearchBox300x600" />
              <img src="https://www.lduhtrp.net/image-101734691-15534473" width="1" height="1" alt="" style={{ display: "block" }} />
            </div>
            <p style={{ fontSize: "11px", color: "#9CA3AF", textAlign: "center", margin: "10px 0 0", fontFamily: "Montserrat, sans-serif" }}>
              Powered by CruiseDirect · Best price guarantee
            </p>
          </div>
        )}

        {/* ── RIGHT — content ── */}
        <div>

          {/* Destination Cards */}
          <section id="destinations" style={{ marginBottom: "52px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Where do you want to go?</p>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>Popular Cruise Destinations</h2>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr", gap: "16px" }}>
              {DESTINATIONS.map((d, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,59,149,0.06)" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,59,149,0.15)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,59,149,0.06)"}>
                  <div style={{ position: "relative", height: "110px", overflow: "hidden", background: NAVY }}>
                    <img src={d.photo} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.currentTarget.style.display = "none"; }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }} />
                    <span style={{ position: "absolute", bottom: "8px", left: "10px", color: "#fff", fontWeight: "800", fontSize: "14px", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{d.name}</span>
                    <span style={{ position: "absolute", top: "8px", right: "8px", background: ORANGE, color: "#fff", fontSize: "10px", fontWeight: "700", padding: "2px 7px", borderRadius: "6px" }}>from {d.from}</span>
                  </div>
                  <div style={{ padding: "12px" }}>
                    <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 4px", lineHeight: 1.4 }}>{d.desc}</p>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: ORANGE, margin: 0 }}>⏱ {d.nights}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cruise Lines */}
          <section id="cruise-lines" style={{ marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>All major cruise lines</p>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>Book Any Line Through Us</h2>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "12px" }}>
              {LINES.map((l, i) => (
                <a key={i}
                  href={`/redirect?to=${encodeURIComponent(l.href)}&partner=${encodeURIComponent(l.name)}&product=cruise`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E5E7EB", display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = NAVY}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#E5E7EB"}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: l.color, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1px", boxShadow: `inset 0 0 0 2px ${l.accent}33` }}>
                    <span style={{ color: l.accent, fontWeight: "900", fontSize: l.abbr.length > 3 ? "9px" : "12px", fontFamily: "Montserrat, sans-serif", letterSpacing: "0.04em", lineHeight: 1 }}>{l.abbr}</span>
                    <div style={{ width: "28px", height: "1px", background: l.accent, opacity: 0.6 }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: "700", color: "#111827", fontSize: "13px", margin: "0 0 2px" }}>{l.name}</p>
                    <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{l.tag}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Mobile widget */}
          {isMobile && (
            <div id="search" style={{ marginBottom: "48px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ fontSize: "12px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>
                🔍 Search &amp; Book Cruises
              </p>
              <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,59,149,0.15)", border: "1px solid #E5E7EB", width: "300px" }}>
                <div id="cdsearch" data-redirect-server="https://www.jdoqocy.com/click-101734691-15534473?url=" />
                <div id="cruiseSearchBox300x600" />
                <img src="https://www.lduhtrp.net/image-101734691-15534473" width="1" height="1" alt="" style={{ display: "block" }} />
              </div>
              <p style={{ fontSize: "11px", color: "#9CA3AF", textAlign: "center", margin: "10px 0 0", fontFamily: "Montserrat, sans-serif" }}>
                Powered by CruiseDirect · Best price guarantee
              </p>
            </div>
          )}

          {/* Agent CTA — temporarily hidden
          <section id="quote" style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,59,149,0.07)", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Prefer personal service?</p>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>Let Our Agent Find Your Best Deal</h2>
            <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 16px", lineHeight: 1.6 }}>
              Access exclusive group rates, cabin upgrades, and bundle pricing you won&apos;t find on your own.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
              {[
                ["💰","Exclusive group rates","Often 15–30% below public pricing"],
                ["🛏️","Cabin upgrades","Best cabin for your budget"],
                ["✈️","Cruise + flight bundles","One price, one contact"],
                ["🏆","Earn 10x rewards pts","Double points on every cruise booking"],
              ].map(([icon, title, sub], i) => (
                <div key={i} style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "12px" }}>
                  <p style={{ fontSize: "18px", margin: "0 0 4px" }}>{icon}</p>
                  <p style={{ fontWeight: "700", color: NAVY, fontSize: "12px", margin: "0 0 2px" }}>{title}</p>
                  <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
            <button onClick={() => { setShowModal(true); setMode(null); setSubmitted(false); setCallSubmitted(false); }}
              style={{ display: "block", width: "100%", background: NAVY, color: "#fff", border: "none", textAlign: "center", padding: "13px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>
              📧 Request a Free Agent Quote
            </button>
            <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "8px 0 0" }}>
              Calls available Fri &amp; Sat · 11 AM – 2 PM EST · Email response within 24 hours
            </p>
          </section>
          */}

          {/* Rewards */}
          <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, borderRadius: "16px", padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>🏆 RoomVoyager Rewards</p>
              <p style={{ color: "#fff", fontWeight: "800", fontSize: "17px", margin: "0 0 4px" }}>Earn 10 pts per $1 on every cruise</p>
              <p style={{ color: "#BFDBFE", fontSize: "13px", margin: 0 }}>Double points available · cash back paid via Zelle, Cash App, or Venmo</p>
            </div>
            <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "11px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", flexShrink: 0, boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
              Learn more →
            </a>
          </div>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
