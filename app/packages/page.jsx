"use client";

import { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const TIME_SLOTS = ["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

function getAvailableDates() {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 90 && dates.length < 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() === 5 || d.getDay() === 6) dates.push(new Date(d));
  }
  return dates;
}

function fmt(d) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

const inputStyle  = { width: "100%", padding: "9px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box", outline: "none" };
const labelStyle  = { fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "4px" };

const BUNDLE_TYPES = [
  { icon: "🏨", name: "All Inclusive Hotels", desc: "Everything bundled — room, meals, drinks, and activities. Arrive and never open your wallet again.", tag: "Most Popular",   placeholder: "Which destination are you considering? Any preferred resort brand or style (adults-only, family, luxury)? Approximate budget per person?" },
  { icon: "🚢", name: "Cruise + Hotel",      desc: "Pre- or post-cruise hotel bundled with your sailing for one seamless, worry-free trip.",         tag: "Great Value",    placeholder: "Which cruise line or destination interests you? How many nights pre/post cruise hotel? Any cabin preferences?" },
  { icon: "✈️", name: "Flight + Hotel",      desc: "We compare bundled rates across 500+ airlines and 1M+ properties to find your best price.",     tag: "Classic Bundle", placeholder: "Where are you flying from and to? Any hotel preferences — brand, star rating, neighborhood?" },
  { icon: "🎡", name: "Family Theme Park",   desc: "Orlando, Disneyland, Universal — hotel, park tickets, and flights all in one package.",          tag: "Family Fave",    placeholder: "Which park(s) are on your list? Ages of kids? Any accessibility needs or character dining preferences?" },
  { icon: "💍", name: "Honeymoon / Romance", desc: "Champagne welcome, couples spa, sunset dinner reservations — fully tailored to your love story.", tag: "Most Personal",  placeholder: "When is your big day? Any dream destination? What would make this trip unforgettable — overwater bungalow, private villa, spa, culinary experiences?" },
  { icon: "🌍", name: "Custom World Trip",   desc: "Multi-city bucket-list itinerary built around your dreams. We handle every leg.",                tag: "Bucket List",    placeholder: "Which cities or countries are on your bucket list? How many stops? Any experiences you absolutely must have?" },
];

const AGENT_PERKS = [
  { icon: "💰", title: "Exclusive bundle rates",    body: "Agents access wholesale pricing unavailable to the public — often 15–30% below booking separately." },
  { icon: "🔑", title: "One point of contact",      body: "Flight changes, hotel upgrades, activity questions — call us once instead of juggling 4 providers." },
  { icon: "🎁", title: "Complimentary add-ons",     body: "We negotiate room upgrades, early check-in, resort credits, and welcome amenities at no extra charge." },
  { icon: "🛡️", title: "Protected booking",        body: "If something goes wrong mid-trip, your agent is a real person who advocates for you immediately." },
  { icon: "🏆", title: "Earn 10× rewards points",  body: "Every package earns double rewards points — redeemable for real cash after your trip." },
  { icon: "✏️", title: "Fully custom itineraries", body: "No cookie-cutter packages. We build around your dates, budget, interests, and travel style." },
];

export default function PackagesPage() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);
  // menuOpen handled by shared NavBar
  const ctaRef = useRef(null);

  // Modal state
  const [showModal, setShowModal]   = useState(false);
  const [mode, setMode]             = useState(null); // "email" | "call"
  const [notePlaceholder, setNotePlaceholder] = useState("");

  // Email quote form
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", destination: "", travelers: "2", budget: "", travelFrom: "", travelTo: "", packageType: "", notes: "" });
  const [submitted, setSubmitted]     = useState(false);
  const [submitting, setSubmitting]   = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Call scheduling
  const [callForm, setCallForm]             = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [selectedDate, setSelectedDate]     = useState(null);
  const [selectedTime, setSelectedTime]     = useState(null);
  const [callSubmitted, setCallSubmitted]   = useState(false);
  const [callSubmitting, setCallSubmitting] = useState(false);
  const [callError, setCallError]           = useState(null);

  const availableDates = getAvailableDates();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  async function handleEmailSubmit(e) {
    e.preventDefault();
    setSubmitting(true); setSubmitError(null);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, destination: form.destination || form.packageType || "Vacation Package" }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCallConfirm() {
    if (!selectedDate || !selectedTime || !callForm.firstName || !callForm.email) return;
    setCallSubmitting(true); setCallError(null);
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

  function openEmail(packageType = "", placeholder = "") {
    setForm(f => ({ ...f, packageType, notes: "" }));
    setNotePlaceholder(placeholder);
    setMode("email");
    setSubmitted(false);
    setSubmitError(null);
    setShowModal(true);
  }

  function openCall() {
    setMode("call");
    setCallSubmitted(false);
    setCallError(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setCallForm({ firstName: "", lastName: "", email: "", phone: "" });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false); setMode(null); setNotePlaceholder("");
    setSubmitted(false); setSubmitting(false); setSubmitError(null);
    setCallSubmitted(false); setCallSubmitting(false); setCallError(null);
    setSelectedDate(null); setSelectedTime(null);
    setCallForm({ firstName: "", lastName: "", email: "", phone: "" });
  }

  const canConfirmCall = selectedDate && selectedTime && callForm.firstName && callForm.email && !callSubmitting;

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── MODAL ── */}
      {showModal && (
        <div onClick={closeModal} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "540px", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>

            <div style={{ background: NAVY, borderRadius: "20px 20px 0 0", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>
                  {mode === "call" ? "Schedule a Call" : "Free Agent Quote"}
                </p>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "18px", margin: 0 }}>
                  {mode === "call" ? "Pick a date & time" : form.packageType ? `${form.packageType} Quote` : "Tell us about your dream trip"}
                </p>
              </div>
              <button onClick={closeModal} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            </div>

            <div style={{ padding: "24px" }}>

              {/* Email form */}
              {mode === "email" && !submitted && (
                <form onSubmit={handleEmailSubmit}>
                  {form.packageType && (
                    <div style={{ background: LIGHT_BLUE, borderRadius: "8px", padding: "8px 12px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: NAVY }}>
                        {BUNDLE_TYPES.find(b => b.name === form.packageType)?.icon} {form.packageType}
                      </span>
                    </div>
                  )}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    {[["First Name","firstName","text",true],["Last Name","lastName","text",true],["Email","email","email",true],["Phone (optional)","phone","tel",false]].map(([label,key,type,req]) => (
                      <div key={key}>
                        <label style={labelStyle}>{label}{req && " *"}</label>
                        <input required={req} type={type} value={form[key]} onChange={e => setForm(f => ({...f,[key]:e.target.value}))} style={inputStyle} />
                      </div>
                    ))}
                    {!form.packageType && (
                      <div>
                        <label style={labelStyle}>Package type</label>
                        <select value={form.packageType} onChange={e => setForm(f => ({...f,packageType:e.target.value}))} style={inputStyle}>
                          <option value="">Not sure yet</option>
                          {BUNDLE_TYPES.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                        </select>
                      </div>
                    )}
                    <div>
                      <label style={labelStyle}>Destination</label>
                      <input type="text" placeholder="Anywhere / Not sure" value={form.destination} onChange={e => setForm(f => ({...f,destination:e.target.value}))} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Travelers *</label>
                      <input required type="number" min="1" max="20" value={form.travelers} onChange={e => setForm(f => ({...f,travelers:e.target.value}))} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Budget per person</label>
                      <select value={form.budget} onChange={e => setForm(f => ({...f,budget:e.target.value}))} style={inputStyle}>
                        <option value="">Flexible</option>
                        <option>Under $1,000</option><option>$1,000–$2,500</option><option>$2,500–$5,000</option><option>$5,000+</option>
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
                    <label style={labelStyle}>{form.packageType ? "Tell us more" : "Tell us your dream trip"}</label>
                    <textarea rows={3} value={form.notes} onChange={e => setForm(f => ({...f,notes:e.target.value}))}
                      placeholder={notePlaceholder || "Occasion, travel style, must-haves, anything special..."}
                      style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                  <button type="submit" disabled={submitting} style={{ marginTop: "16px", width: "100%", background: submitting ? "#6B7280" : NAVY, color: "#fff", border: "none", padding: "13px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", cursor: submitting ? "default" : "pointer" }}>
                    {submitting ? "⏳ Sending..." : "📧 Send Quote Request"}
                  </button>
                  {submitError && <p style={{ textAlign: "center", fontSize: "12px", color: "#DC2626", margin: "8px 0 0" }}>{submitError}</p>}
                  <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "8px 0 0" }}>We&apos;ll respond within 24 hours.</p>
                </form>
              )}

              {mode === "email" && submitted && (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
                  <p style={{ fontWeight: "800", fontSize: "18px", color: NAVY, margin: "0 0 8px" }}>Quote request sent!</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>We&apos;ll respond within 24 hours with your custom package options.</p>
                  <button onClick={closeModal} style={{ background: ORANGE, color: "#fff", border: "none", padding: "11px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>Close</button>
                </div>
              )}

              {/* Call scheduling */}
              {mode === "call" && !callSubmitted && (
                <div>
                  <button type="button" onClick={() => setMode(null)} style={{ background: "none", border: "none", color: "#6B7280", fontSize: "13px", cursor: "pointer", marginBottom: "12px", padding: 0 }}>← Back</button>
                  <p style={{ fontWeight: "700", color: "#111827", fontSize: "14px", margin: "0 0 10px" }}>Your contact info</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                    {[["First Name","firstName","text",true],["Last Name","lastName","text",false],["Email","email","email",true],["Phone (optional)","phone","tel",false]].map(([label,key,type,req]) => (
                      <div key={key}>
                        <label style={labelStyle}>{label}{req && " *"}</label>
                        <input required={req} type={type} value={callForm[key]} onChange={e => setCallForm(f => ({...f,[key]:e.target.value}))} style={inputStyle} />
                      </div>
                    ))}
                  </div>
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

              {mode === "call" && callSubmitted && (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "12px" }}>📞</div>
                  <p style={{ fontWeight: "800", fontSize: "18px", color: NAVY, margin: "0 0 8px" }}>Call request received!</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 4px" }}>{selectedDate && selectedTime ? `${fmt(selectedDate)} at ${selectedTime} EST` : ""}</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>We&apos;ll confirm your slot within 24 hours.</p>
                  <button onClick={closeModal} style={{ background: ORANGE, color: "#fff", border: "none", padding: "11px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <NavBar active="packages" />

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=500&fit=crop&auto=format" alt="Custom vacation packages"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.65) 0%, rgba(0,15,60,0.82) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Custom Vacation Packages</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Your Dream Trip, Built for You</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: "0 0 24px", maxWidth: "500px", lineHeight: 1.6 }}>Flights, hotels, cruises, and experiences — hand-curated by your personal travel agent.</p>
          <button onClick={() => ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
            style={{ background: ORANGE, color: "#fff", border: "none", padding: "14px 36px", borderRadius: "10px", fontSize: "16px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 20px rgba(255,102,0,0.45)" }}>
            Request a Free Quote →
          </button>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["✏️","Fully custom itineraries"],["💰","Exclusive bundle rates"],["🔑","One agent, everything handled"],["🏆","Earn 10 pts per $1"],["🎁","Complimentary upgrades & add-ons"]].map(([icon,text],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#374151" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "32px 16px 60px" : "56px 24px 80px" }}>

        {/* Bundle types */}
        <section style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>What we can build for you</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Custom Vacation Bundles</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", margin: "0 0 32px", maxWidth: "580px", lineHeight: 1.7 }}>
            No templates. No one-size-fits-all packages. We build every trip around your travel style, budget, and bucket list — then negotiate the best rates on your behalf.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
            {BUNDLE_TYPES.map((b, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 10px rgba(0,59,149,0.06)", position: "relative" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,59,149,0.14)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,59,149,0.06)"}>
                <span style={{ position: "absolute", top: "16px", right: "16px", background: LIGHT_BLUE, color: NAVY, fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "6px" }}>{b.tag}</span>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{b.icon}</div>
                <p style={{ fontWeight: "800", color: "#111827", fontSize: "16px", margin: "0 0 8px" }}>{b.name}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 16px", lineHeight: 1.6 }}>{b.desc}</p>
                <button onClick={() => openEmail(b.name, b.placeholder)}
                  style={{ background: "none", border: `1.5px solid ${NAVY}`, color: NAVY, padding: "8px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                  Get a quote →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Agent perks */}
        <section style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Why book through us?</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>The Agent Advantage</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", margin: "0 0 32px", maxWidth: "560px", lineHeight: 1.7 }}>
            Online tools show you what&apos;s available. A travel agent shows you what&apos;s possible — and gets you more for your money.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "16px" }}>
            {AGENT_PERKS.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", background: "#fff", borderRadius: "14px", padding: "20px", border: "1px solid #E5E7EB", alignItems: "flex-start" }}>
                <div style={{ fontSize: "28px", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <p style={{ fontWeight: "700", color: "#111827", fontSize: "15px", margin: "0 0 4px" }}>{p.title}</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Simple process</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 32px" }}>How It Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "20px" }}>
            {[
              { step: "01", icon: "📝", title: "Tell us your dream",  body: "Submit a quick quote — destination, dates, budget, and any special wishes." },
              { step: "02", icon: "🔍", title: "We do the research",  body: "Your agent compares rates, reviews, upgrades, and bundle options across all providers." },
              { step: "03", icon: "📋", title: "Review your options", body: "We send 2–3 curated package options, fully priced, within 24 hours." },
              { step: "04", icon: "🌴", title: "Enjoy your trip",     body: "Book with confidence. We&apos;re here if anything changes before or during your trip." },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "20px 12px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: NAVY, color: "#fff", fontSize: "13px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{s.step}</div>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.icon}</div>
                <p style={{ fontWeight: "700", color: "#111827", fontSize: "14px", margin: "0 0 6px" }}>{s.title}</p>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main agent CTA */}
        <section ref={ctaRef} style={{ background: "#fff", borderRadius: "24px", padding: isMobile ? "28px 20px" : "40px 48px", border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,59,149,0.08)", marginBottom: "40px", scrollMarginTop: "80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Let&apos;s plan your trip</p>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 12px", lineHeight: 1.3 }}>Ready to build your perfect vacation?</h2>
              <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 24px", lineHeight: 1.7 }}>
                Weekend beach getaway, multi-city European honeymoon, or a family cruise + theme park combo — we&apos;ll create a package that fits your life and your budget. No two trips are the same.
              </p>
              <button onClick={() => openEmail()}
                style={{ display: "block", width: "100%", background: NAVY, color: "#fff", border: "none", padding: "14px", borderRadius: "12px", fontWeight: "700", fontSize: "15px", cursor: "pointer", marginBottom: "10px" }}>
                📧 Email Quote Request
              </button>
              <button onClick={() => openCall()}
                style={{ display: "block", width: "100%", background: "#fff", color: ORANGE, border: `2px solid ${ORANGE}`, padding: "12px", borderRadius: "12px", fontWeight: "700", fontSize: "15px", cursor: "pointer" }}>
                📞 Schedule a Call
              </button>
              <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "10px 0 0" }}>Calls: Fri &amp; Sat · 11 AM–2 PM EST · Email response within 24 hrs</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                ["✅", "No booking fees — ever"],
                ["💰", "Exclusive rates not found online"],
                ["🎁", "Complimentary upgrades & add-ons"],
                ["🔑", "One agent handles everything"],
                ["🏆", "Earn 10 pts per $1 spent"],
                ["📞", "Support before, during & after your trip"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", background: LIGHT_BLUE, borderRadius: "10px", padding: "12px 16px" }}>
                  <span style={{ fontSize: "20px" }}>{icon}</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: NAVY }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards banner */}
        <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, borderRadius: "16px", padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>🏆 RoomVoyager Rewards</p>
            <p style={{ color: "#fff", fontWeight: "800", fontSize: "17px", margin: "0 0 4px" }}>Earn 10 pts per $1 on every package</p>
            <p style={{ color: "#BFDBFE", fontSize: "13px", margin: 0 }}>Double points available · cash back paid via Zelle, Cash App, or Venmo</p>
          </div>
          <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "11px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", flexShrink: 0, boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
            Learn more →
          </a>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}
