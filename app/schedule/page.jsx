"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const TIMES = ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];
const DAYS = ["Friday", "Saturday"];

export default function SchedulePage() {
  const { data: session } = useSession();
  const user = session?.user;

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    service: "",
    details: "",
  });
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime) { alert("Please select a day and time."); return; }
    const subject = `Consultation Request: ${form.service || "General"} — ${selectedDay} ${selectedTime} EST`;
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}
Service Interest: ${form.service || "Not specified"}
Preferred Day: ${selectedDay}
Preferred Time: ${selectedTime} EST

Details / Notes:
${form.details || "None provided"}`;
    window.location.href = `mailto:workhomebalancellc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
            <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
            <a href="/cruises" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
            {user ? (
              <a href="/profile" style={{ display: "flex", alignItems: "center", gap: "8px", background: LIGHT_BLUE, padding: "7px 14px", borderRadius: "8px", textDecoration: "none" }}>
                {user.image
                  ? <img src={user.image} alt="" style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover" }} />
                  : <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "800", color: "#fff" }}>{(user.name || user.email || "U")[0].toUpperCase()}</div>
                }
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
      <div style={{ background: NAVY, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>Free consultation</p>
        <h1 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 40px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2 }}>Schedule a Call with a Travel Advisor</h1>
        <p style={{ color: "#BFDBFE", fontSize: "15px", margin: "0 auto", maxWidth: "480px" }}>Available Fridays & Saturdays · 11 AM – 2 PM EST · No charge, no pressure</p>
      </div>

      {/* FORM */}
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "48px 24px 80px" }}>
        {submitted ? (
          <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "48px", textAlign: "center" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>✅</div>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 10px" }}>Request sent!</h2>
            <p style={{ color: "#6B7280", fontSize: "15px", margin: "0 0 28px" }}>We'll confirm your {selectedDay} {selectedTime} EST slot by email within 24 hours.</p>
            <a href="/" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Back to Home</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden", marginBottom: "20px" }}>
              <div style={{ background: NAVY, padding: "18px 24px" }}>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>Step 1</p>
                <h2 style={{ color: "#fff", fontSize: "16px", fontWeight: "800", margin: 0 }}>Your info & what you're looking for</h2>
              </div>
              <div style={{ padding: "24px", display: "grid", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Full Name *</label>
                    <input type="text" name="name" required placeholder="Jane Doe" value={form.name} onChange={handleChange}
                      style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email *</label>
                    <input type="email" name="email" required placeholder="you@example.com" value={form.email} onChange={handleChange}
                      style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Phone</label>
                    <input type="tel" name="phone" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange}
                      style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>I'm interested in *</label>
                    <select name="service" required value={form.service} onChange={handleChange}
                      style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                      <option value="">Select a service</option>
                      <option value="Cruise Booking">🚢 Cruise Booking</option>
                      <option value="Hotel Booking">🏨 Hotel Booking</option>
                      <option value="Flight Booking">✈️ Flight Booking</option>
                      <option value="Full Trip Package">🌍 Full Trip Package</option>
                      <option value="Group Travel">👥 Group Travel</option>
                      <option value="General Questions">💬 General Questions</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Details / Notes</label>
                  <textarea name="details" rows={3} placeholder="Tell us about your trip — destinations, dates, budget, special requests, etc." value={form.details} onChange={handleChange}
                    style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box", resize: "none" }}
                    onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                </div>
              </div>
            </div>

            {/* TIME PICKER */}
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden", marginBottom: "24px" }}>
              <div style={{ background: NAVY, padding: "18px 24px" }}>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>Step 2</p>
                <h2 style={{ color: "#fff", fontSize: "16px", fontWeight: "800", margin: 0 }}>Pick a day & time <span style={{ fontSize: "13px", fontWeight: "500", color: "#BFDBFE" }}>(EST)</span></h2>
              </div>
              <div style={{ padding: "24px" }}>
                {DAYS.map(day => (
                  <div key={day} style={{ marginBottom: "20px" }}>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: NAVY, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{day}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                      {TIMES.map(time => {
                        const active = selectedDay === day && selectedTime === time;
                        return (
                          <button key={time} type="button"
                            onClick={() => { setSelectedDay(day); setSelectedTime(time); }}
                            style={{
                              padding: "10px 6px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", cursor: "pointer", border: "1.5px solid",
                              borderColor: active ? ORANGE : "#E5E7EB",
                              background: active ? ORANGE : "#fff",
                              color: active ? "#fff" : "#374151",
                            }}>
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                {selectedDay && selectedTime && (
                  <div style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "12px 16px", fontSize: "13px", color: NAVY, fontWeight: "600" }}>
                    ✅ Selected: {selectedDay} at {selectedTime} EST
                  </div>
                )}
              </div>
            </div>

            <button type="submit"
              style={{ width: "100%", background: ORANGE, color: "#fff", padding: "14px", borderRadius: "12px", fontSize: "16px", fontWeight: "700", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              📅 Request My Consultation
            </button>
            <p style={{ textAlign: "center", fontSize: "12px", color: "#9CA3AF", marginTop: "12px" }}>We'll confirm your slot by email within 24 hours.</p>
          </form>
        )}
      </div>

      {/* COPYRIGHT */}
      <div style={{ background: NAVY, padding: "14px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: 0 }}>RoomVoyager © 2026</p>
      </div>
    </div>
  );
}
