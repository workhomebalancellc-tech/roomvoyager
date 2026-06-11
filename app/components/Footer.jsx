"use client";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: NAVY,
      color: "#BFDBFE",
      fontFamily: "system-ui, -apple-system, sans-serif",
      marginTop: "auto",
    }}>
      {/* Main footer grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>

        {/* Brand */}
        <div>
          <a href="/" style={{ fontSize: "20px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>
            Room<span style={{ color: ORANGE }}>Voyager</span>
          </a>
          <p style={{ fontSize: "12px", color: "#93C5FD", margin: "10px 0 0", lineHeight: 1.6 }}>
            Your independent travel agency. Earn real cash back on every booking.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "14px", flexWrap: "wrap" }}>
            {[
              { label: "Email us", href: "mailto:workhomebalancellc@gmail.com" },
            ].map(l => (
              <a key={l.label} href={l.href}
                style={{ fontSize: "12px", color: "#93C5FD", textDecoration: "none", padding: "4px 10px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Book */}
        <div>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Book</p>
          {[
            { label: "Hotels",           href: "/hotels"   },
            { label: "Flights",          href: "/flights"  },
            { label: "Cruises",          href: "/cruises"  },
            { label: "Vacation Packages",href: "/packages" },
          ].map(l => (
            <a key={l.href} href={l.href}
              style={{ display: "block", fontSize: "13px", color: "#BFDBFE", textDecoration: "none", marginBottom: "8px" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#BFDBFE"}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Account */}
        <div>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Account</p>
          {[
            { label: "Rewards Program",   href: "/rewards"         },
            { label: "My Profile",        href: "/profile"         },
            { label: "Sign In",           href: "/account/signin"  },
            { label: "Create Account",    href: "/account/signup"  },
          ].map(l => (
            <a key={l.href} href={l.href}
              style={{ display: "block", fontSize: "13px", color: "#BFDBFE", textDecoration: "none", marginBottom: "8px" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#BFDBFE"}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Legal</p>
          {[
            { label: "Privacy Policy",    href: "/privacy" },
            { label: "Terms of Service",  href: "/terms"   },
            { label: "FAQ",               href: "/faq"     },
          ].map(l => (
            <a key={l.href} href={l.href}
              style={{ display: "block", fontSize: "13px", color: "#BFDBFE", textDecoration: "none", marginBottom: "8px" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#BFDBFE"}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "14px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }} suppressHydrationWarning>
            © {year} RoomVoyager. We may earn affiliate commissions on bookings — at no extra cost to you.
          </p>
          <a href="/admin"
            style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textDecoration: "none", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px" }}
            onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}>
            ⚙ Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
