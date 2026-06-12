"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const PRODUCT_META = {
  cruise:  { icon: "🚢", label: "Cruise",          ptsStd: 10, ptsDbl: 20,   color: "#003B95" },
  hotel:   { icon: "🏨", label: "Hotel",            ptsStd: 5,  ptsDbl: 10,   color: "#7C3AED" },
  flight:  { icon: "✈️", label: "Flight",           ptsStd: 5,  ptsDbl: null, color: "#0EA5E9" },
  package: { icon: "🌴", label: "Vacation Package", ptsStd: 10, ptsDbl: 20,   color: "#16A34A" },
};

const COUNTDOWN_SECS = 5;

function RedirectContent() {
  const params      = useSearchParams();
  const { user }    = useAuth();

  const to       = params.get("to")      || "";
  const partner  = params.get("partner") || "Our Partner";
  const product  = params.get("product") || "cruise";
  const amount   = parseInt(params.get("amount") || "0", 10); // optional estimated pts

  const meta     = PRODUCT_META[product] || PRODUCT_META.cruise;
  const estPts   = amount ? amount * (meta.ptsDbl ?? meta.ptsStd) : null;

  const [count,    setCount]    = useState(COUNTDOWN_SECS);
  const [gone,     setGone]     = useState(false);
  const [logged,   setLogged]   = useState(false);
  const loggedRef = useRef(false);


  // Log click to Airtable once
  useEffect(() => {
    if (!to || loggedRef.current) return;
    loggedRef.current = true;
    fetch("/api/link-clicks", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partner,
        product,
        url:       to,
        userEmail: user?.email || "Guest",
        userName:  user?.name  || "",
      }),
    })
      .then(() => setLogged(true))
      .catch(() => setLogged(true));
  }, [to, partner, product, user]);

  // Countdown
  useEffect(() => {
    if (!to) return;
    const t = setInterval(() => {
      setCount(c => {
        if (c <= 1) {
          clearInterval(t);
          setGone(true);
          window.location.href = to;
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [to]);

  function goNow() {
    setGone(true);
    window.location.href = to;
  }

  if (!to) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", background: "#F8FAFF" }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: "40px", margin: "0 0 16px" }}>⚠️</p>
          <p style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>No destination provided.</p>
          <a href="/" style={{ color: NAVY, fontSize: "14px" }}>← Back to RoomVoyager</a>
        </div>
      </div>
    );
  }

  const circumference = 2 * Math.PI * 22; // r=22
  const progress = ((COUNTDOWN_SECS - count) / COUNTDOWN_SECS) * circumference;

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ background: NAVY, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontSize: "18px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>
          Room<span style={{ color: ORANGE }}>Voyager</span>
        </a>
        {product === "flight" ? (
          <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#93C5FD" }}>
            Powered by
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 138" height="18" style={{ filter: "brightness(0) invert(1)", verticalAlign: "middle" }}>
              <g fill="none">
                <path fill="#171B1E" d="M120.447 57.027c.14-.354.282-.919.282-1.272 0-1.907-1.483-2.826-3.037-2.826-1.342 0-2.19.636-2.685 2.12l-6.216 19.003-7.135-19.145c-.424-1.2-1.2-1.978-2.685-1.978-1.483 0-2.26.777-2.683 1.978l-7.065 19.145-6.216-19.003c-.495-1.483-1.343-2.12-2.685-2.12-1.554 0-3.037.919-3.037 2.826 0 .353.14.918.282 1.272l8.689 25.784c.283 1.13 1.2 1.908 2.755 1.908 1.554 0 2.402-.848 2.826-1.979l7.134-19.568 7.206 19.568c.424 1.2 1.342 1.979 2.826 1.979s2.331-.706 2.755-1.908l8.689-25.784zM55.67 78.823L45.39 68.605l10.28-10.217c1.298-1.3 1.4-3.298 0-4.696-1.399-1.399-3.397-1.3-4.695 0L38.467 66.2a3.303 3.303 0 0 0-.979 2.405 3.302 3.302 0 0 0 .979 2.405l12.508 12.507c1.298 1.3 3.296 1.4 4.695 0 1.398-1.397 1.298-3.395 0-4.694zM35.913 81.16V56.01c0-1.836-1.412-3.32-3.32-3.32s-3.32 1.484-3.32 3.32v25.15c0 1.835 1.341 3.319 3.32 3.319 1.978 0 3.32-1.484 3.32-3.32zm28.105-24.91v25.147c0 1.837 1.343 3.322 3.32 3.322 1.98 0 3.322-1.485 3.322-3.322V56.25c0-1.837-1.414-3.32-3.321-3.32-1.907 0-3.32 1.483-3.32 3.32zm63.45 0v25.147c0 1.837 1.342 3.322 3.32 3.322 1.978 0 3.32-1.485 3.32-3.322V56.25c0-1.837-1.413-3.32-3.32-3.32-1.907 0-3.32 1.483-3.32 3.32zm67.2 2.46c2.975 0 4.71 1.136 6.371 2.402.663.458 1.312.68 1.982.68 1.612 0 2.829-1.236 2.829-2.874 0-.764-.31-1.446-.947-2.084-2.37-2.453-6.196-3.917-10.235-3.917-9.16 0-15.559 6.49-15.559 15.782 0 9.293 6.398 15.783 15.56 15.783 4.038 0 7.858-1.459 10.217-3.901.648-.65.964-1.336.964-2.1 0-1.638-1.217-2.874-2.83-2.874-.671 0-1.334.233-2.029.714-1.569 1.198-3.35 2.368-6.323 2.368-5.487 0-9.32-4.108-9.32-9.99 0-5.882 3.833-9.989 9.32-9.989zm30.914-5.793c-8.92 0-15.648 6.785-15.648 15.782 0 8.998 6.727 15.783 15.648 15.783 8.92 0 15.647-6.785 15.647-15.783 0-8.997-6.726-15.782-15.647-15.782zm0 25.928c-6.19 0-9.428-5.104-9.428-10.146 0-6.66 4.743-10.145 9.428-10.145 6.192 0 9.432 5.104 9.432 10.145 0 6.661-4.745 10.146-9.432 10.146zm49.427-25.75c-1.15 0-2.16.681-2.703 1.82l-9.671 20.25-.085-.178-9.693-20.112c-.669-1.214-1.535-1.78-2.727-1.78a2.887 2.887 0 0 0-2.918 2.92v25.324c0 1.607 1.336 2.964 2.918 2.964 1.606 0 2.963-1.357 2.963-2.964V67.883l6.98 14.792c.558 1.11 1.373 1.628 2.564 1.628 1.135 0 2.071-.599 2.569-1.643l6.884-14.774v13.499c0 1.609 1.31 2.918 2.919 2.918 1.661 0 2.962-1.282 2.962-2.918V56.059c0-1.772-1.19-2.963-2.962-2.963z"/>
                <path fill="#00A991" d="M149.934 97.876a4.941 4.941 0 0 0-2.952-.973 5.002 5.002 0 0 0-4.01 2.024c-6.244 8.46-15.06 15.553-25.496 20.511-10.851 5.16-23.254 7.885-35.904 7.885-19.301 0-37.403-6.207-50.97-17.48-6.513-5.404-11.615-11.678-15.165-18.646-3.633-7.135-5.476-14.704-5.478-22.496.002-7.792 1.845-15.362 5.478-22.499C20.78 35.711 29.687 26.754 41.196 20.3c11.927-6.69 25.896-10.226 40.402-10.226 12.648 0 25.081 2.74 35.956 7.924 10.458 4.984 19.279 12.107 25.51 20.6a5.001 5.001 0 0 0 4.018 2.033 4.942 4.942 0 0 0 2.942-.965 4.985 4.985 0 0 0 1.067-6.96c-7.206-9.815-17.32-18.01-29.252-23.698C109.635 3.191 95.72.117 81.6.116 59.978.12 39.608 7.144 24.24 19.893 16.68 26.17 10.733 33.5 6.564 41.682 2.207 50.227-.002 59.317 0 68.7c-.002 9.383 2.207 18.472 6.564 27.017 6.248 12.253 16.54 22.65 29.761 30.066 13.412 7.521 29.067 11.498 45.273 11.499 14.083 0 27.968-3.06 40.153-8.85 11.909-5.662 22.017-13.82 29.233-23.592a4.987 4.987 0 0 0-1.05-6.965"/>
                <path fill="#00A991" d="M157.898 63.215a5.49 5.49 0 0 0-5.483 5.484 5.49 5.49 0 0 0 5.483 5.484 5.49 5.49 0 0 0 5.483-5.484 5.49 5.49 0 0 0-5.483-5.484"/>
              </g>
            </svg>
          </span>
        ) : product === "hotel" ? (
          <span style={{ fontSize: "11px", color: "#93C5FD" }}>Powered by <strong style={{ color: "#fff" }}>Expedia</strong></span>
        ) : (
          <span style={{ fontSize: "12px", color: "#93C5FD" }}>Secure redirect</span>
        )}
      </div>

      {/* Card */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,0,0,0.10)", maxWidth: "440px", width: "100%", overflow: "hidden" }}>

          {/* Illustration band */}
          <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${meta.color} 100%)`, padding: "32px 24px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "56px", lineHeight: 1, marginBottom: "12px" }}>{meta.icon}</div>
            <p style={{ color: "#fff", fontSize: "20px", fontWeight: "800", margin: "0 0 4px" }}>
              You're heading to {partner}
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", margin: 0 }}>
              RoomVoyager never adds fees to your booking
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: "28px 24px" }}>

            {/* Trust bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {[
                ["✅", "We searched the best available rates for you"],
                ["🔒", "Your booking is made directly with " + partner],
                ["💵", "No markups — RoomVoyager earns a small commission from the partner, not you"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Points earned badge */}
            {estPts ? (
              <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}40`, borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "24px" }}>🎉</span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, margin: "0 0 2px", textTransform: "uppercase" }}>Points you'll earn</p>
                  <p style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>
                    {estPts.toLocaleString()} pts
                  </p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                    = ${(estPts / 1000).toFixed(2)} cash back · available 45 days after travel
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "22px" }}>⭐</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "700", color: NAVY, margin: "0 0 2px" }}>Earn rewards on this booking</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                    {meta.ptsDbl
                      ? `Earn up to ${meta.ptsDbl} pts per $1 on ${meta.label.toLowerCase()}s`
                      : `Earn ${meta.ptsStd} pts per $1 on ${meta.label.toLowerCase()}s`}
                  </p>
                </div>
              </div>
            )}

            {/* Continue button + countdown */}
            <button
              onClick={goNow}
              disabled={gone}
              style={{
                width: "100%", padding: "15px 24px", background: gone ? "#D1D5DB" : NAVY,
                color: "#fff", border: "none", borderRadius: "12px", fontSize: "16px",
                fontWeight: "700", cursor: gone ? "default" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                boxShadow: gone ? "none" : "0 4px 16px rgba(0,59,149,0.25)",
                transition: "background 0.2s",
              }}>
              {gone ? (
                <span>Redirecting…</span>
              ) : (
                <>
                  {/* Circular countdown */}
                  <svg width="28" height="28" style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
                    <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
                    <circle cx="14" cy="14" r="11" fill="none" stroke="#fff" strokeWidth="2.5"
                      strokeDasharray={`${2 * Math.PI * 11}`}
                      strokeDashoffset={`${2 * Math.PI * 11 * (count / COUNTDOWN_SECS)}`}
                      style={{ transition: "stroke-dashoffset 1s linear" }} />
                    <text x="14" y="14" textAnchor="middle" dominantBaseline="central"
                      style={{ transform: "rotate(90deg)", transformOrigin: "14px 14px", fill: "#fff", fontSize: "9px", fontWeight: "800" }}>
                      {count}
                    </text>
                  </svg>
                  <span>Continue to {partner}</span>
                  <span style={{ fontSize: "18px", marginLeft: "auto" }}>→</span>
                </>
              )}
            </button>

            <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "12px 0 0" }}>
              Auto-redirecting in {count}s · <a href="/" style={{ color: "#9CA3AF" }}>Cancel and go back</a>
            </p>
          </div>
        </div>
      </div>

      {/* Sponsor banner — varies by product */}
      <div style={{ padding: "12px 24px", textAlign: "center" }}>
        {product === "flight" ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 138" height="48" style={{ display: "inline-block", maxWidth: "200px" }}>
            <g fill="none">
              <path fill="#171B1E" d="M120.447 57.027c.14-.354.282-.919.282-1.272 0-1.907-1.483-2.826-3.037-2.826-1.342 0-2.19.636-2.685 2.12l-6.216 19.003-7.135-19.145c-.424-1.2-1.2-1.978-2.685-1.978-1.483 0-2.26.777-2.683 1.978l-7.065 19.145-6.216-19.003c-.495-1.483-1.343-2.12-2.685-2.12-1.554 0-3.037.919-3.037 2.826 0 .353.14.918.282 1.272l8.689 25.784c.283 1.13 1.2 1.908 2.755 1.908 1.554 0 2.402-.848 2.826-1.979l7.134-19.568 7.206 19.568c.424 1.2 1.342 1.979 2.826 1.979s2.331-.706 2.755-1.908l8.689-25.784zM55.67 78.823L45.39 68.605l10.28-10.217c1.298-1.3 1.4-3.298 0-4.696-1.399-1.399-3.397-1.3-4.695 0L38.467 66.2a3.303 3.303 0 0 0-.979 2.405 3.302 3.302 0 0 0 .979 2.405l12.508 12.507c1.298 1.3 3.296 1.4 4.695 0 1.398-1.397 1.298-3.395 0-4.694zM35.913 81.16V56.01c0-1.836-1.412-3.32-3.32-3.32s-3.32 1.484-3.32 3.32v25.15c0 1.835 1.341 3.319 3.32 3.319 1.978 0 3.32-1.484 3.32-3.32zm28.105-24.91v25.147c0 1.837 1.343 3.322 3.32 3.322 1.98 0 3.322-1.485 3.322-3.322V56.25c0-1.837-1.414-3.32-3.321-3.32-1.907 0-3.32 1.483-3.32 3.32zm63.45 0v25.147c0 1.837 1.342 3.322 3.32 3.322 1.978 0 3.32-1.485 3.32-3.322V56.25c0-1.837-1.413-3.32-3.32-3.32-1.907 0-3.32 1.483-3.32 3.32zm67.2 2.46c2.975 0 4.71 1.136 6.371 2.402.663.458 1.312.68 1.982.68 1.612 0 2.829-1.236 2.829-2.874 0-.764-.31-1.446-.947-2.084-2.37-2.453-6.196-3.917-10.235-3.917-9.16 0-15.559 6.49-15.559 15.782 0 9.293 6.398 15.783 15.56 15.783 4.038 0 7.858-1.459 10.217-3.901.648-.65.964-1.336.964-2.1 0-1.638-1.217-2.874-2.83-2.874-.671 0-1.334.233-2.029.714-1.569 1.198-3.35 2.368-6.323 2.368-5.487 0-9.32-4.108-9.32-9.99 0-5.882 3.833-9.989 9.32-9.989zm30.914-5.793c-8.92 0-15.648 6.785-15.648 15.782 0 8.998 6.727 15.783 15.648 15.783 8.92 0 15.647-6.785 15.647-15.783 0-8.997-6.726-15.782-15.647-15.782zm0 25.928c-6.19 0-9.428-5.104-9.428-10.146 0-6.66 4.743-10.145 9.428-10.145 6.192 0 9.432 5.104 9.432 10.145 0 6.661-4.745 10.146-9.432 10.146zm49.427-25.75c-1.15 0-2.16.681-2.703 1.82l-9.671 20.25-.085-.178-9.693-20.112c-.669-1.214-1.535-1.78-2.727-1.78a2.887 2.887 0 0 0-2.918 2.92v25.324c0 1.607 1.336 2.964 2.918 2.964 1.606 0 2.963-1.357 2.963-2.964V67.883l6.98 14.792c.558 1.11 1.373 1.628 2.564 1.628 1.135 0 2.071-.599 2.569-1.643l6.884-14.774v13.499c0 1.609 1.31 2.918 2.919 2.918 1.661 0 2.962-1.282 2.962-2.918V56.059c0-1.772-1.19-2.963-2.962-2.963z"/>
              <path fill="#00A991" d="M149.934 97.876a4.941 4.941 0 0 0-2.952-.973 5.002 5.002 0 0 0-4.01 2.024c-6.244 8.46-15.06 15.553-25.496 20.511-10.851 5.16-23.254 7.885-35.904 7.885-19.301 0-37.403-6.207-50.97-17.48-6.513-5.404-11.615-11.678-15.165-18.646-3.633-7.135-5.476-14.704-5.478-22.496.002-7.792 1.845-15.362 5.478-22.499C20.78 35.711 29.687 26.754 41.196 20.3c11.927-6.69 25.896-10.226 40.402-10.226 12.648 0 25.081 2.74 35.956 7.924 10.458 4.984 19.279 12.107 25.51 20.6a5.001 5.001 0 0 0 4.018 2.033 4.942 4.942 0 0 0 2.942-.965 4.985 4.985 0 0 0 1.067-6.96c-7.206-9.815-17.32-18.01-29.252-23.698C109.635 3.191 95.72.117 81.6.116 59.978.12 39.608 7.144 24.24 19.893 16.68 26.17 10.733 33.5 6.564 41.682 2.207 50.227-.002 59.317 0 68.7c-.002 9.383 2.207 18.472 6.564 27.017 6.248 12.253 16.54 22.65 29.761 30.066 13.412 7.521 29.067 11.498 45.273 11.499 14.083 0 27.968-3.06 40.153-8.85 11.909-5.662 22.017-13.82 29.233-23.592a4.987 4.987 0 0 0-1.05-6.965"/>
              <path fill="#00A991" d="M157.898 63.215a5.49 5.49 0 0 0-5.483 5.484 5.49 5.49 0 0 0 5.483 5.484 5.49 5.49 0 0 0 5.483-5.484 5.49 5.49 0 0 0-5.483-5.484"/>
            </g>
          </svg>
        ) : product === "hotel" ? (
          <img
            src="/expedia-logo.svg"
            alt="Expedia"
            height="48"
            style={{ display: "inline-block", maxWidth: "200px" }}
          />
        ) : (
          <img
            src="https://www.tqlkg.com/image-101734691-11926423"
            width="468"
            height="60"
            alt="Special offer"
            style={{ maxWidth: "100%", display: "inline-block" }}
          />
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "16px 24px", textAlign: "center", borderTop: "1px solid #E5E7EB" }}>
        <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>
          RoomVoyager is an independent travel agency. We may earn a commission when you book through our links — at no extra cost to you.{" "}
          <a href="/rewards" style={{ color: "#9CA3AF" }}>Learn about Rewards →</a>
        </p>
      </div>
    </div>
  );
}

export default function RedirectPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFF" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>✈️</div>
          <p style={{ fontSize: "16px", color: "#6B7280", fontFamily: "system-ui, sans-serif" }}>Loading…</p>
        </div>
      </div>
    }>
      <RedirectContent />
    </Suspense>
  );
}
