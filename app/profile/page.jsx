"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const BOOKING_TYPES = [
  { id: "flight",  label: "Flight",          icon: "✈️",  pts: 5  },
  { id: "hotel",   label: "Hotel",           icon: "🏨",  pts: 5  },
  { id: "cruise",  label: "Cruise",          icon: "🚢",  pts: 10 },
  { id: "package", label: "Vacation Package", icon: "🌴", pts: 10 },
];

function calcCountdown(endDateStr) {
  if (!endDateStr) return null;
  const end   = new Date(endDateStr + "T12:00:00");
  const unlock = new Date(end.getTime() + 45 * 24 * 60 * 60 * 1000);
  const today  = new Date(); today.setHours(0,0,0,0);
  unlock.setHours(0,0,0,0);
  return Math.ceil((unlock - today) / (24 * 60 * 60 * 1000));
}

function fmtDate(str) {
  if (!str) return "—";
  return new Date(str + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const EMPTY_BOOKING = { type: "flight", destination: "", startDate: "", endDate: "", amount: "", reference: "", status: "upcoming", notes: "" };

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  /* ── countdown (overview) ── */
  const [tripDate, setTripDate]     = useState("");
  const [editingTrip, setEditingTrip] = useState(false);
  const [tempDate, setTempDate]     = useState("");
  const daysLeft = calcCountdown(tripDate);

  /* ── bookings ── */
  const [bookings, setBookings]         = useState([]);
  const [showAddForm, setShowAddForm]   = useState(false);
  const [form, setForm]                 = useState(EMPTY_BOOKING);
  const [bookingFilter, setBookingFilter] = useState("all");
  const [expandedBooking, setExpandedBooking] = useState(null);

  useEffect(() => {
    const d = localStorage.getItem("rv_trip_date");
    if (d) setTripDate(d);
    const b = localStorage.getItem("rv_bookings");
    if (b) { try { setBookings(JSON.parse(b)); } catch {} }
  }, []);

  function saveBookings(next) {
    setBookings(next);
    localStorage.setItem("rv_bookings", JSON.stringify(next));
  }

  function saveTrip() {
    if (tempDate) { setTripDate(tempDate); localStorage.setItem("rv_trip_date", tempDate); }
    setEditingTrip(false);
  }
  function clearTrip() {
    setTripDate(""); setTempDate(""); localStorage.removeItem("rv_trip_date"); setEditingTrip(false);
  }

  function addBooking(e) {
    e.preventDefault();
    const booking = { ...form, id: Date.now() };
    saveBookings([booking, ...bookings]);
    setForm(EMPTY_BOOKING);
    setShowAddForm(false);
  }

  function deleteBooking(id) {
    saveBookings(bookings.filter(b => b.id !== id));
    if (expandedBooking === id) setExpandedBooking(null);
  }

  function updateStatus(id, status) {
    saveBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
  }

  const handleSignOut = async () => { await logout(); window.location.href = "/"; };

  const TABS = [
    { id: "overview",   label: "Overview",    icon: "👤" },
    { id: "bookings",   label: "My Bookings", icon: "🗂️" },
    { id: "rewards",    label: "Rewards",     icon: "🏆" },
  ];

  const Nav = () => (
    <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
        <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="/hotels"  style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
          <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
          <a href="/cruises" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
          <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
          <a href="/profile" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Profile</a>
          {!user && <>
            <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
          </>}
        </div>
      </div>
    </nav>
  );

  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Nav />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px" }}>
        <div style={{ width: "40px", height: "40px", border: `3px solid ${LIGHT_BLUE}`, borderTopColor: NAVY, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      </div>
    </div>
  );

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Nav />
      <div style={{ maxWidth: "480px", margin: "80px auto", padding: "0 24px", textAlign: "center" }}>
        <div style={{ fontSize: "56px", marginBottom: "20px" }}>🔒</div>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 10px" }}>Sign in to view your profile</h2>
        <p style={{ color: "#6B7280", fontSize: "15px", margin: "0 0 28px" }}>Access your account, bookings, and rewards.</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/account/signin" style={{ background: NAVY, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>Sign In</a>
          <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>Create Account</a>
        </div>
      </div>
    </div>
  );

  const filteredBookings = bookingFilter === "all" ? bookings : bookings.filter(b => b.type === bookingFilter || b.status === bookingFilter);

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Nav />

      {/* HERO */}
      <div style={{ background: NAVY, padding: "36px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>👤 My Account</p>
          {user.image
            ? <img src={user.image} alt="" style={{ width: "76px", height: "76px", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(255,255,255,0.3)", marginBottom: "14px" }} />
            : <div style={{ width: "76px", height: "76px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", fontWeight: "800", color: "#fff", margin: "0 auto 14px", border: "3px solid rgba(255,255,255,0.2)" }}>
                {(user.name || user.email || "U")[0].toUpperCase()}
              </div>
          }
          <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: "800", margin: "0 0 4px" }}>{user.name || "Traveler"}</h1>
          <p style={{ color: "#93C5FD", fontSize: "13px", margin: "0 0 24px" }}>{user.email}</p>

          {/* TAB BAR inside hero */}
          <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "4px", gap: "2px" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                style={{ padding: "9px 20px", borderRadius: "9px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: "700", transition: "all 0.15s",
                  background: activeTab === t.id ? "#fff" : "transparent",
                  color: activeTab === t.id ? NAVY : "rgba(255,255,255,0.75)" }}>
                {t.icon} {t.label}
                {t.id === "bookings" && bookings.length > 0 && (
                  <span style={{ marginLeft: "6px", background: ORANGE, color: "#fff", fontSize: "10px", fontWeight: "800", padding: "1px 6px", borderRadius: "999px" }}>{bookings.length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "-40px auto 0", padding: "0 24px 80px" }}>

        {/* ══════════════════════════════
            TAB: OVERVIEW
        ══════════════════════════════ */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* 45-day countdown */}
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden" }}>
              <div style={{ background: NAVY, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "#93C5FD", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>⏰ Rewards Countdown</p>
                  <p style={{ color: "#fff", fontSize: "15px", fontWeight: "700", margin: 0 }}>45-Day Redemption Timer</p>
                </div>
                <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "7px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", textDecoration: "none" }}>View Rewards →</a>
              </div>
              <div style={{ padding: "24px" }}>
                {!tripDate && !editingTrip && (
                  <div style={{ textAlign: "center", padding: "12px 0" }}>
                    <p style={{ fontSize: "36px", margin: "0 0 8px" }}>🗓️</p>
                    <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>No trip logged yet</p>
                    <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 14px" }}>Add your trip completion date to track your 45-day unlock countdown.</p>
                    <button onClick={() => { setEditingTrip(true); setTempDate(""); }}
                      style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                      + Add trip date
                    </button>
                  </div>
                )}
                {editingTrip && (
                  <div>
                    <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 10px", fontSize: "14px" }}>When did your most recent trip end?</p>
                    <input type="date" value={tempDate} onChange={e => setTempDate(e.target.value)} max={new Date().toISOString().split("T")[0]}
                      style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box", marginBottom: "12px" }} />
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button onClick={saveTrip} disabled={!tempDate}
                        style={{ flex: 1, background: tempDate ? NAVY : "#D1D5DB", color: "#fff", border: "none", borderRadius: "8px", padding: "10px", fontSize: "14px", fontWeight: "700", cursor: tempDate ? "pointer" : "default" }}>Save</button>
                      <button onClick={() => setEditingTrip(false)}
                        style={{ background: "#fff", color: "#374151", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "10px 16px", fontSize: "14px", cursor: "pointer" }}>Cancel</button>
                    </div>
                  </div>
                )}
                {tripDate && !editingTrip && (
                  <div>
                    {daysLeft > 0 ? (
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px", flexWrap: "wrap" }}>
                          <div style={{ background: "#FFF7ED", border: `2px solid ${ORANGE}`, borderRadius: "16px", padding: "18px 24px", textAlign: "center", minWidth: "110px" }}>
                            <p style={{ fontSize: "48px", fontWeight: "800", color: ORANGE, margin: "0 0 2px", lineHeight: 1 }}>{daysLeft}</p>
                            <p style={{ fontSize: "12px", fontWeight: "700", color: "#92400E", margin: 0 }}>days left</p>
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 4px", fontSize: "14px" }}>Unlocks in {daysLeft} day{daysLeft !== 1 ? "s" : ""}</p>
                            <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 4px" }}>Trip ended: <strong>{fmtDate(tripDate)}</strong></p>
                            <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>Unlocks: <strong style={{ color: NAVY }}>{fmtDate(new Date(new Date(tripDate + "T12:00:00").getTime() + 45*24*60*60*1000).toISOString().split("T")[0])}</strong></p>
                          </div>
                        </div>
                        <div style={{ background: "#E5E7EB", borderRadius: "999px", height: "8px", overflow: "hidden", marginBottom: "6px" }}>
                          <div style={{ background: `linear-gradient(to right, ${NAVY}, ${ORANGE})`, height: "100%", borderRadius: "999px", width: `${Math.min(100,((45-daysLeft)/45)*100)}%` }} />
                        </div>
                        <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 14px", textAlign: "right" }}>{45-daysLeft} of 45 days</p>
                      </div>
                    ) : (
                      <div style={{ background: "#F0FDF4", border: "2px solid #86EFAC", borderRadius: "14px", padding: "18px 20px", marginBottom: "14px" }}>
                        <p style={{ fontSize: "28px", margin: "0 0 6px" }}>🎉</p>
                        <p style={{ fontWeight: "700", color: "#15803D", margin: "0 0 4px" }}>Points are ready to redeem!</p>
                        <p style={{ fontSize: "13px", color: "#374151", margin: "0 0 12px" }}>45 days have passed since {fmtDate(tripDate)}.</p>
                        <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "9px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>Redeem now →</a>
                      </div>
                    )}
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={() => { setEditingTrip(true); setTempDate(tripDate); }}
                        style={{ background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "8px", padding: "7px 14px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>✏️ Update</button>
                      <button onClick={clearTrip}
                        style={{ background: "#fff", color: "#9CA3AF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "7px 14px", fontSize: "12px", cursor: "pointer" }}>Clear</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Account details */}
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "28px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: ORANGE, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 16px" }}>Account Details</p>
              {[{ icon: "✉️", label: "Email", value: user.email }, { icon: "👤", label: "Name", value: user.name || "Not provided" }].map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", background: LIGHT_BLUE, borderRadius: "12px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{row.icon}</span>
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: "700", color: NAVY, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{row.label}</p>
                    <p style={{ fontSize: "14px", color: "#111827", margin: 0 }}>{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "28px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: ORANGE, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 16px" }}>Quick Links</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { href: "/rewards", icon: "🏆", label: "My Rewards", sub: "View points & redeem" },
                  { href: "/cruises", icon: "🚢", label: "Browse Cruises", sub: "Get a free quote" },
                  { href: "/hotels",  icon: "🏨", label: "Browse Hotels", sub: "Find your next stay" },
                  { href: "/flights", icon: "✈️", label: "Browse Flights", sub: "Search best prices" },
                ].map((item, i) => (
                  <a key={i} href={item.href} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", background: LIGHT_BLUE, borderRadius: "12px", textDecoration: "none" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#DBEAFE"}
                    onMouseLeave={e => e.currentTarget.style.background = LIGHT_BLUE}>
                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: "700", color: NAVY, margin: "0 0 1px" }}>{item.label}</p>
                      <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sign out */}
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "20px 28px" }}>
              <button onClick={handleSignOut}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", background: "#FFF7F3", color: ORANGE, border: `1.5px solid #FDDCCA`, borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#FEDDCA"}
                onMouseLeave={e => e.currentTarget.style.background = "#FFF7F3"}>
                🚪 Sign Out
              </button>
            </div>
          </div>
        )}

        {/* ══════════════════════════════
            TAB: MY BOOKINGS
        ══════════════════════════════ */}
        {activeTab === "bookings" && (
          <div>
            {/* Header row */}
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "20px 24px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: "700", color: ORANGE, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>🗂️ Travel History</p>
                <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: 0 }}>My Bookings</h2>
              </div>
              <button onClick={() => setShowAddForm(true)}
                style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "10px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                + Log a Booking
              </button>
            </div>

            {/* Add booking form */}
            {showAddForm && (
              <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "24px", marginBottom: "16px", border: `2px solid ${NAVY}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "800", color: NAVY, margin: 0 }}>Log a New Booking</h3>
                  <button onClick={() => setShowAddForm(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#9CA3AF" }}>×</button>
                </div>
                <form onSubmit={addBooking}>
                  {/* Booking type */}
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>Booking type</label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {BOOKING_TYPES.map(t => (
                        <button type="button" key={t.id} onClick={() => setForm(f => ({ ...f, type: t.id }))}
                          style={{ padding: "8px 14px", borderRadius: "8px", border: `2px solid ${form.type === t.id ? NAVY : "#E5E7EB"}`, background: form.type === t.id ? LIGHT_BLUE : "#fff", fontWeight: "600", fontSize: "13px", cursor: "pointer", color: form.type === t.id ? NAVY : "#374151" }}>
                          {t.icon} {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Destination <span style={{ color: ORANGE }}>*</span></label>
                      <input required type="text" placeholder="e.g. Cancún, Mexico" value={form.destination} onChange={e => setForm(f => ({ ...f, destination: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Amount paid ($)</label>
                      <input type="number" min="0" placeholder="e.g. 1200" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Departure / Check-in</label>
                      <input type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Return / Check-out <span style={{ color: ORANGE }}>*</span></label>
                      <input required type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Booking reference</label>
                      <input type="text" placeholder="e.g. XYZ123 (optional)" value={form.reference} onChange={e => setForm(f => ({ ...f, reference: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Status</label>
                      <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
                        style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", background: "#fff", outline: "none", boxSizing: "border-box" }}>
                        <option value="upcoming">🗓️ Upcoming</option>
                        <option value="completed">✅ Completed</option>
                        <option value="cancelled">❌ Cancelled</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "5px" }}>Notes (optional)</label>
                    <input type="text" placeholder="e.g. Honeymoon trip, cabin upgrade" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>

                  {form.amount && (
                    <div style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "12px 16px", marginBottom: "16px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                      <div>
                        <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px" }}>Estimated points earned</p>
                        <p style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: 0 }}>
                          {(parseFloat(form.amount) * (BOOKING_TYPES.find(t => t.id === form.type)?.pts || 5)).toLocaleString()} pts
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px" }}>Cash value</p>
                        <p style={{ fontSize: "20px", fontWeight: "800", color: ORANGE, margin: 0 }}>
                          ${(parseFloat(form.amount) * (BOOKING_TYPES.find(t => t.id === form.type)?.pts || 5) / 100).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" style={{ flex: 1, background: NAVY, color: "#fff", border: "none", borderRadius: "10px", padding: "12px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                      Save Booking
                    </button>
                    <button type="button" onClick={() => setShowAddForm(false)}
                      style={{ background: "#fff", color: "#374151", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "12px 20px", fontSize: "14px", cursor: "pointer" }}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Filter chips */}
            {bookings.length > 0 && (
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                {[["all", "All"], ["upcoming", "🗓️ Upcoming"], ["completed", "✅ Completed"], ["flight", "✈️ Flights"], ["hotel", "🏨 Hotels"], ["cruise", "🚢 Cruises"]].map(([val, label]) => (
                  <button key={val} onClick={() => setBookingFilter(val)}
                    style={{ padding: "6px 14px", borderRadius: "999px", border: `1.5px solid ${bookingFilter === val ? NAVY : "#E5E7EB"}`, background: bookingFilter === val ? NAVY : "#fff", color: bookingFilter === val ? "#fff" : "#374151", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* Booking cards */}
            {filteredBookings.length === 0 && (
              <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "48px 24px", textAlign: "center" }}>
                <p style={{ fontSize: "48px", margin: "0 0 14px" }}>🗂️</p>
                <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 6px", fontSize: "16px" }}>No bookings logged yet</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>Log your trips to track points, monitor your 45-day countdown, and keep your travel history in one place.</p>
                <button onClick={() => setShowAddForm(true)}
                  style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "10px", padding: "11px 24px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                  + Log your first booking
                </button>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {filteredBookings.map(b => {
                const btype  = BOOKING_TYPES.find(t => t.id === b.type) || BOOKING_TYPES[0];
                const days   = b.status === "completed" ? calcCountdown(b.endDate) : null;
                const pts    = b.amount ? Math.round(parseFloat(b.amount) * btype.pts) : null;
                const isOpen = expandedBooking === b.id;

                const statusColor = b.status === "completed" ? "#15803D" : b.status === "cancelled" ? "#991B1B" : "#1D4ED8";
                const statusBg    = b.status === "completed" ? "#F0FDF4" : b.status === "cancelled" ? "#FFF1F1" : "#EFF6FF";
                const statusLabel = b.status === "completed" ? "✅ Completed" : b.status === "cancelled" ? "❌ Cancelled" : "🗓️ Upcoming";

                return (
                  <div key={b.id} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,59,149,0.08)", overflow: "hidden", border: "1px solid #E5E7EB" }}>
                    {/* Card header */}
                    <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "14px", cursor: "pointer" }} onClick={() => setExpandedBooking(isOpen ? null : b.id)}>
                      <div style={{ width: "44px", height: "44px", background: LIGHT_BLUE, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                        {btype.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "3px" }}>
                          <p style={{ fontWeight: "700", color: "#111827", fontSize: "15px", margin: 0 }}>{b.destination}</p>
                          <span style={{ fontSize: "11px", fontWeight: "600", color: statusColor, background: statusBg, padding: "2px 8px", borderRadius: "999px" }}>{statusLabel}</span>
                        </div>
                        <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                          {btype.label}{b.startDate ? ` · ${fmtDate(b.startDate)}` : ""}{b.endDate ? ` → ${fmtDate(b.endDate)}` : ""}
                          {b.reference ? ` · Ref: ${b.reference}` : ""}
                        </p>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        {pts !== null && <p style={{ fontSize: "14px", fontWeight: "700", color: NAVY, margin: "0 0 2px" }}>{pts.toLocaleString()} pts</p>}
                        {b.amount && <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>${parseFloat(b.amount).toLocaleString()}</p>}
                        <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "2px 0 0" }}>{isOpen ? "▲" : "▼"}</p>
                      </div>
                    </div>

                    {/* Expanded details */}
                    {isOpen && (
                      <div style={{ borderTop: "1px solid #F3F4F6", padding: "16px 20px", background: "#FAFAFA" }}>

                        {/* 45-day countdown for completed bookings */}
                        {b.status === "completed" && b.endDate && (
                          <div style={{ marginBottom: "16px" }}>
                            {days !== null && days > 0 ? (
                              <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}`, borderRadius: "12px", padding: "14px 18px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                  <p style={{ fontWeight: "700", color: "#92400E", margin: 0, fontSize: "13px" }}>⏰ Points unlock in <strong>{days} day{days !== 1 ? "s" : ""}</strong></p>
                                  <span style={{ fontSize: "11px", color: "#92400E" }}>45-day hold</span>
                                </div>
                                <div style={{ background: "#FED7AA", borderRadius: "999px", height: "6px", overflow: "hidden" }}>
                                  <div style={{ background: ORANGE, height: "100%", borderRadius: "999px", width: `${Math.min(100,((45-days)/45)*100)}%` }} />
                                </div>
                                <p style={{ fontSize: "11px", color: "#92400E", margin: "6px 0 0", textAlign: "right" }}>{45-days} of 45 days completed</p>
                              </div>
                            ) : days !== null ? (
                              <div style={{ background: "#F0FDF4", border: "1.5px solid #86EFAC", borderRadius: "12px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                                <p style={{ fontWeight: "700", color: "#15803D", margin: 0 }}>🎉 Points are ready to redeem!</p>
                                <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "7px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", textDecoration: "none" }}>Redeem →</a>
                              </div>
                            ) : null}
                          </div>
                        )}

                        {/* Notes */}
                        {b.notes && <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 14px", fontStyle: "italic" }}>📝 {b.notes}</p>}

                        {/* Points estimate */}
                        {pts !== null && (
                          <div style={{ display: "flex", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                            <div style={{ background: LIGHT_BLUE, borderRadius: "10px", padding: "10px 16px" }}>
                              <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px" }}>Est. points</p>
                              <p style={{ fontSize: "16px", fontWeight: "800", color: NAVY, margin: 0 }}>{pts.toLocaleString()}</p>
                            </div>
                            <div style={{ background: "#FFF7ED", borderRadius: "10px", padding: "10px 16px" }}>
                              <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px" }}>Cash value</p>
                              <p style={{ fontSize: "16px", fontWeight: "800", color: ORANGE, margin: 0 }}>${(pts / 100).toFixed(2)}</p>
                            </div>
                          </div>
                        )}

                        {/* Status update + delete */}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {b.status !== "completed" && (
                            <button onClick={() => updateStatus(b.id, "completed")}
                              style={{ background: "#F0FDF4", color: "#15803D", border: "1px solid #86EFAC", borderRadius: "8px", padding: "7px 14px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                              ✅ Mark completed
                            </button>
                          )}
                          {b.status !== "upcoming" && b.status !== "cancelled" && (
                            <button onClick={() => updateStatus(b.id, "upcoming")}
                              style={{ background: "#EFF6FF", color: "#1D4ED8", border: "1px solid #BFDBFE", borderRadius: "8px", padding: "7px 14px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                              🗓️ Mark upcoming
                            </button>
                          )}
                          {b.status !== "cancelled" && (
                            <button onClick={() => updateStatus(b.id, "cancelled")}
                              style={{ background: "#FFF1F1", color: "#991B1B", border: "1px solid #FECACA", borderRadius: "8px", padding: "7px 14px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                              ❌ Cancelled
                            </button>
                          )}
                          <button onClick={() => deleteBooking(b.id)}
                            style={{ marginLeft: "auto", background: "#fff", color: "#9CA3AF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "7px 14px", fontSize: "12px", cursor: "pointer" }}>
                            🗑️ Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ══════════════════════════════
            TAB: REWARDS
        ══════════════════════════════ */}
        {activeTab === "rewards" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", padding: "32px", textAlign: "center" }}>
              <p style={{ fontSize: "48px", margin: "0 0 12px" }}>🏆</p>
              <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>RoomVoyager Rewards</p>
              <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>Your Rewards Dashboard</h2>
              <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 24px" }}>Earn real cash back on every booking — redeemable 45 days after travel via Zelle, Cash App, or Venmo.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                {[["🧭", "Explorer", "Your tier"], ["0", "Points", "Available"], ["$0.00", "Cash value", "Redeemable"]].map(([val, label, sub], i) => (
                  <div key={i} style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "16px" }}>
                    <p style={{ fontSize: "24px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>{val}</p>
                    <p style={{ fontSize: "12px", fontWeight: "700", color: NAVY, margin: "0 0 1px" }}>{label}</p>
                    <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{sub}</p>
                  </div>
                ))}
              </div>
              <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", display: "inline-block", boxShadow: "0 4px 14px rgba(255,102,0,0.3)" }}>
                View Full Rewards Page →
              </a>
              <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "12px 0 0" }}>Points sync after each completed trip · 45-day hold applies</p>
            </div>

            {/* Tip */}
            <div style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,59,149,0.08)", padding: "20px 24px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "24px", flexShrink: 0 }}>💡</span>
              <div>
                <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 4px", fontSize: "14px" }}>Track your bookings to estimate your earnings</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 10px" }}>Log your bookings in the My Bookings tab and we'll calculate your estimated points and 45-day countdown automatically.</p>
                <button onClick={() => setActiveTab("bookings")}
                  style={{ background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "8px", padding: "8px 16px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
                  Go to My Bookings →
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
