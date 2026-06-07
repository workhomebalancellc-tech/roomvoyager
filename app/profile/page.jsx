"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

function calcCountdown(tripDateStr) {
  if (!tripDateStr) return null;
  const trip = new Date(tripDateStr);
  const unlock = new Date(trip.getTime() + 45 * 24 * 60 * 60 * 1000);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  unlock.setHours(0, 0, 0, 0);
  const diff = Math.ceil((unlock - today) / (24 * 60 * 60 * 1000));
  return diff;
}

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();

  // 45-day countdown — stored in localStorage so it persists
  const [tripDate, setTripDate] = useState("");
  const [editingTrip, setEditingTrip] = useState(false);
  const [tempDate, setTempDate] = useState("");
  const daysLeft = calcCountdown(tripDate);

  useEffect(() => {
    const saved = localStorage.getItem("rv_trip_date");
    if (saved) setTripDate(saved);
  }, []);

  function saveTrip() {
    if (tempDate) {
      setTripDate(tempDate);
      localStorage.setItem("rv_trip_date", tempDate);
    }
    setEditingTrip(false);
  }

  function clearTrip() {
    setTripDate("");
    setTempDate("");
    localStorage.removeItem("rv_trip_date");
    setEditingTrip(false);
  }

  const handleSignOut = async () => {
    await logout();
    window.location.href = "/";
  };

  const Nav = () => (
    <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
        <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="/hotels" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
          <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
          <a href="/cruises" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
          <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
          <a href="/profile" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Profile</a>
          <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
          <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
        </div>
      </div>
    </nav>
  );

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <Nav />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px" }}>
          <div style={{ width: "40px", height: "40px", border: `3px solid ${LIGHT_BLUE}`, borderTopColor: NAVY, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <Nav />
        <div style={{ maxWidth: "480px", margin: "80px auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ fontSize: "56px", marginBottom: "20px" }}>🔒</div>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 10px" }}>Sign in to view your profile</h2>
          <p style={{ color: "#6B7280", fontSize: "15px", margin: "0 0 28px" }}>Access your account, rewards, and booking history.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/account/signin" style={{ background: NAVY, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>Sign In</a>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "15px", textDecoration: "none" }}>Create Account</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <Nav />

      {/* Hero */}
      <div style={{ background: NAVY, padding: "40px 24px 64px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>👤 My Account</p>
          {user.image ? (
            <img src={user.image} alt={user.name || "Profile"} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(255,255,255,0.3)", marginBottom: "16px" }} />
          ) : (
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", fontWeight: "800", color: "#fff", margin: "0 auto 16px", border: "3px solid rgba(255,255,255,0.2)" }}>
              {(user.name || user.email || "U")[0].toUpperCase()}
            </div>
          )}
          <h1 style={{ color: "#fff", fontSize: "26px", fontWeight: "800", margin: "0 0 6px" }}>{user.name || "Traveler"}</h1>
          <p style={{ color: "#93C5FD", fontSize: "14px", margin: 0 }}>{user.email}</p>
        </div>
      </div>

      <div style={{ maxWidth: "700px", margin: "-32px auto 0", padding: "0 24px 64px" }}>

        {/* ── 45-DAY REDEMPTION COUNTDOWN ── */}
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ background: NAVY, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ color: "#93C5FD", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>⏰ Rewards Countdown</p>
              <p style={{ color: "#fff", fontSize: "15px", fontWeight: "700", margin: 0 }}>45-Day Redemption Timer</p>
            </div>
            <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "7px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", textDecoration: "none" }}>View Rewards →</a>
          </div>
          <div style={{ padding: "24px" }}>
            {!tripDate && !editingTrip && (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <p style={{ fontSize: "40px", margin: "0 0 10px" }}>🗓️</p>
                <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>No trip logged yet</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 16px" }}>Enter your most recent trip completion date to see how many days until your points unlock.</p>
                <button onClick={() => { setEditingTrip(true); setTempDate(""); }}
                  style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                  + Add trip completion date
                </button>
              </div>
            )}

            {editingTrip && (
              <div>
                <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 10px", fontSize: "14px" }}>When did your most recent trip end?</p>
                <input type="date" value={tempDate} onChange={e => setTempDate(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box", marginBottom: "12px" }} />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={saveTrip} disabled={!tempDate}
                    style={{ flex: 1, background: tempDate ? NAVY : "#D1D5DB", color: "#fff", border: "none", borderRadius: "8px", padding: "10px", fontSize: "14px", fontWeight: "700", cursor: tempDate ? "pointer" : "default" }}>
                    Save date
                  </button>
                  <button onClick={() => setEditingTrip(false)}
                    style={{ background: "#fff", color: "#374151", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "10px 16px", fontSize: "14px", cursor: "pointer" }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {tripDate && !editingTrip && (
              <div>
                {/* Countdown display */}
                {daysLeft !== null && daysLeft > 0 ? (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px", flexWrap: "wrap" }}>
                      <div style={{ background: "#FFF7ED", border: `2px solid ${ORANGE}`, borderRadius: "16px", padding: "20px 28px", textAlign: "center", minWidth: "120px" }}>
                        <p style={{ fontSize: "52px", fontWeight: "800", color: ORANGE, margin: "0 0 2px", lineHeight: 1 }}>{daysLeft}</p>
                        <p style={{ fontSize: "13px", fontWeight: "700", color: "#92400E", margin: 0 }}>days remaining</p>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 6px", fontSize: "15px" }}>Your points unlock in {daysLeft} day{daysLeft !== 1 ? "s" : ""}</p>
                        <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 8px", lineHeight: 1.5 }}>
                          Trip completed: <strong>{new Date(tripDate + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong>
                        </p>
                        <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.5 }}>
                          Points unlock: <strong style={{ color: NAVY }}>{new Date(new Date(tripDate + "T12:00:00").getTime() + 45 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong>
                        </p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "11px", color: "#6B7280" }}>Day 0 — trip ended</span>
                        <span style={{ fontSize: "11px", color: NAVY, fontWeight: "600" }}>Day 45 — unlock</span>
                      </div>
                      <div style={{ background: "#E5E7EB", borderRadius: "999px", height: "8px", overflow: "hidden" }}>
                        <div style={{ background: `linear-gradient(to right, ${NAVY}, ${ORANGE})`, height: "100%", borderRadius: "999px", width: `${Math.min(100, ((45 - daysLeft) / 45) * 100)}%`, transition: "width 0.5s ease" }} />
                      </div>
                      <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "6px 0 0", textAlign: "right" }}>{45 - daysLeft} of 45 days completed</p>
                    </div>
                  </div>
                ) : (
                  <div style={{ background: "#F0FDF4", border: "2px solid #86EFAC", borderRadius: "14px", padding: "20px 24px", marginBottom: "16px" }}>
                    <p style={{ fontSize: "32px", margin: "0 0 8px" }}>🎉</p>
                    <p style={{ fontWeight: "700", color: "#15803D", margin: "0 0 4px", fontSize: "16px" }}>Your points are ready to redeem!</p>
                    <p style={{ fontSize: "13px", color: "#374151", margin: "0 0 14px" }}>45 days have passed since your trip on {new Date(tripDate + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}. Head to the Rewards page to cash out.</p>
                    <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
                      Redeem now →
                    </a>
                  </div>
                )}
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => { setEditingTrip(true); setTempDate(tripDate); }}
                    style={{ background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "8px", padding: "8px 16px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                    ✏️ Update date
                  </button>
                  <button onClick={clearTrip}
                    style={{ background: "#FFF7F3", color: "#9CA3AF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "8px 16px", fontSize: "12px", cursor: "pointer" }}>
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── ACCOUNT INFO ── */}
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ padding: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", color: ORANGE, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 16px" }}>Account Details</p>
            {[
              { icon: "✉️", label: "Email Address", value: user.email },
              { icon: "👤", label: "Full Name", value: user.name || "Not provided" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", background: LIGHT_BLUE, borderRadius: "12px", marginBottom: "10px" }}>
                <span style={{ fontSize: "22px" }}>{row.icon}</span>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: NAVY, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{row.label}</p>
                  <p style={{ fontSize: "14px", color: "#111827", margin: 0 }}>{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── QUICK LINKS ── */}
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ padding: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", color: ORANGE, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 16px" }}>Quick Links</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { href: "/rewards", icon: "🏆", label: "My Rewards", sub: "View points & redeem" },
                { href: "/cruises", icon: "🚢", label: "Browse Cruises", sub: "Get a free quote" },
                { href: "/hotels", icon: "🏨", label: "Browse Hotels", sub: "Find your next stay" },
                { href: "/flights", icon: "✈️", label: "Browse Flights", sub: "Search best prices" },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", background: LIGHT_BLUE, borderRadius: "12px", textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#DBEAFE"}
                  onMouseLeave={e => e.currentTarget.style.background = LIGHT_BLUE}>
                  <span style={{ fontSize: "22px" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: NAVY, margin: "0 0 2px" }}>{item.label}</p>
                    <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── SIGN OUT ── */}
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden" }}>
          <div style={{ padding: "20px 28px" }}>
            <button onClick={handleSignOut}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", background: "#FFF7F3", color: ORANGE, border: `1.5px solid #FDDCCA`, borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#FEDDCA"}
              onMouseLeave={e => e.currentTarget.style.background = "#FFF7F3"}>
              🚪 Sign Out
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
