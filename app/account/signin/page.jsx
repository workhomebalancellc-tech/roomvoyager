"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const EyeIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

function SignInForm() {
  const { signInWithGoogle, signInWithEmail, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Forgot password state
  const [forgotOpen, setForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithGoogle();
      router.push(callbackUrl);
    } catch (err) {
      if (err.code === "auth/popup-blocked") {
        setError("Popup was blocked by your browser. Please allow popups for this site and try again.");
      } else if (err.code === "auth/unauthorized-domain") {
        setError("Sign-in is not authorized for this domain. Please contact support.");
      } else if (err.code === "auth/popup-closed-by-user") {
        setError(null);
      } else {
        setError(`Google sign-in failed (${err.code || "unknown"}). Please try again.`);
      }
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmail(email, password);
      router.push(callbackUrl);
    } catch (err) {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please wait a moment and try again.");
      } else {
        setError(`Sign-in failed (${err.code || "unknown"}). Please try again.`);
      }
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetLoading(true);
    setResetError(null);
    try {
      await resetPassword(resetEmail);
      setResetSent(true);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setResetError("No account found with that email address.");
      } else {
        setResetError("Something went wrong. Please try again.");
      }
    }
    setResetLoading(false);
  };

  return (
    <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", width: "100%", maxWidth: "440px", overflow: "hidden" }}>
      <div style={{ padding: "28px 28px 20px" }}>
        <button onClick={handleGoogleSignIn}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "13px 16px", background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: "12px", fontSize: "15px", fontWeight: "600", color: "#374151", cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
          <GoogleIcon />
          Continue with Google
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 28px 20px" }}>
        <div style={{ flex: 1, borderTop: "1px solid #E5E7EB" }} />
        <span style={{ fontSize: "13px", color: "#9CA3AF" }}>or sign in with email</span>
        <div style={{ flex: 1, borderTop: "1px solid #E5E7EB" }} />
      </div>

      <form onSubmit={handleEmailSignIn} style={{ padding: "0 28px 28px" }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email Address</label>
          <input type="email" required placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Password</label>
          <div style={{ position: "relative" }}>
            <input type={showPassword ? "text" : "password"} required placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
              style={{ width: "100%", padding: "11px 42px 11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
              onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
            <button type="button" onClick={() => setShowPassword(v => !v)}
              style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "2px", display: "flex", alignItems: "center" }}>
              <EyeIcon open={showPassword} />
            </button>
          </div>
        </div>

        {/* Forgot password link */}
        <div style={{ marginBottom: "20px", textAlign: "right" }}>
          <button type="button" onClick={() => { setForgotOpen(true); setResetEmail(email); setResetSent(false); setResetError(null); }}
            style={{ background: "none", border: "none", color: NAVY, fontSize: "12px", fontWeight: "600", cursor: "pointer", textDecoration: "underline", padding: 0 }}>
            Forgot password?
          </button>
        </div>

        {error && <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "12px 14px", borderRadius: "10px", fontSize: "13px", marginBottom: "16px" }}>{error}</div>}

        <button type="submit" disabled={loading}
          style={{ width: "100%", background: NAVY, color: "#fff", padding: "13px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div style={{ borderTop: "1px solid #E5E7EB", padding: "20px 28px", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 8px" }}>
          Don&apos;t have an account?{" "}
          <a href="/account/signup" style={{ color: ORANGE, fontWeight: "700", textDecoration: "none" }}>Sign up free</a>
        </p>
        <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>
          By signing in you agree to our{" "}
          <a href="/terms" style={{ color: NAVY, textDecoration: "none" }}>Terms</a> and{" "}
          <a href="/privacy" style={{ color: NAVY, textDecoration: "none" }}>Privacy Policy</a>
        </p>
      </div>

      {/* Forgot password modal */}
      {forgotOpen && (
        <div onClick={() => setForgotOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "20px", padding: "32px", maxWidth: "400px", width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            {resetSent ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>📧</div>
                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Check your inbox</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>We sent a password reset link to <strong>{resetEmail}</strong>. It may take a minute to arrive.</p>
                <button onClick={() => setForgotOpen(false)}
                  style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "10px", padding: "11px 28px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                  Back to Sign In
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>Reset your password</h3>
                    <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Enter your email and we&apos;ll send you a reset link.</p>
                  </div>
                  <button onClick={() => setForgotOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#9CA3AF", lineHeight: 1 }}>×</button>
                </div>
                <form onSubmit={handleResetPassword}>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email Address</label>
                  <input type="email" required placeholder="you@example.com" value={resetEmail} onChange={e => setResetEmail(e.target.value)}
                    style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", marginBottom: "16px" }}
                    onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                  {resetError && <p style={{ fontSize: "12px", color: "#DC2626", margin: "-8px 0 12px", fontWeight: "600" }}>{resetError}</p>}
                  <button type="submit" disabled={resetLoading}
                    style={{ width: "100%", background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "12px", fontSize: "14px", fontWeight: "700", cursor: resetLoading ? "not-allowed" : "pointer", opacity: resetLoading ? 0.7 : 1 }}>
                    {resetLoading ? "Sending…" : "Send Reset Link"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SignInPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Create Account</a>
        </div>
      </nav>
      <div style={{ background: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 8px" }}>Welcome back</p>
        <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: "800", margin: "0 0 6px" }}>Sign in to RoomVoyager</h1>
        <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>Access your bookings, rewards, and travel history</p>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 24px 60px" }}>
        <Suspense fallback={<div />}>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
}
