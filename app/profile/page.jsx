"use client";

import { useSession, signOut } from "next-auth/react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const loading = status === "loading";

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/", redirect: true });
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
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
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

      {/* Card */}
      <div style={{ maxWidth: "640px", margin: "-32px auto 0", padding: "0 24px 64px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden" }}>

          {/* Account info */}
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

          <div style={{ borderTop: "1px solid #E5E7EB", padding: "28px" }}>
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

          {/* Sign out */}
          <div style={{ borderTop: "1px solid #E5E7EB", padding: "20px 28px" }}>
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
