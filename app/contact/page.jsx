"use client";

import { useState } from "react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send message");
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
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
            <a href="/profile" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Profile</a>
            <a href="/contact" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Contact</a>
            <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=400&fit=crop&auto=format" alt="Contact us" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.65) 0%, rgba(0,15,60,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>We're here to help</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Contact RoomVoyager</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Questions, booking help, or group inquiries — our team is ready.</p>
        </div>
      </div>

      {/* CONTACT CARDS */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "40px" }}>
          {[
            { icon: "✉️", title: "Email Us", lines: ["workhomebalancellc@gmail.com"] },
            { icon: "📞", title: "Call Us", lines: ["1-800-VOYAGER", "Mon–Fri 9am–6pm EST"] },
            { icon: "💬", title: "Live Chat", lines: ["Available on site", "Under 5 min response"] },
            { icon: "🚢", title: "Group Bookings", lines: ["Cruises, hotels & more", "Special group rates"] },
          ].map((card, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "16px" }}>
              <div style={{ width: "36px", height: "36px", background: LIGHT_BLUE, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "10px" }}>{card.icon}</div>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>{card.title}</p>
              {card.lines.map((line, j) => <p key={j} style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 2px" }}>{line}</p>)}
            </div>
          ))}
        </div>

        {/* FORM */}
        <div style={{ maxWidth: "680px", margin: "0 auto 80px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden" }}>

            <div style={{ background: NAVY, padding: "20px 28px" }}>
              <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Get in touch</p>
              <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: "800", margin: 0 }}>Send us a message</h2>
            </div>

            <div style={{ padding: "28px" }}>
              {success && (
                <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#166534", padding: "14px", borderRadius: "10px", fontSize: "14px", marginBottom: "20px", fontWeight: "600" }}>
                  ✓ Message sent! We'll get back to you shortly.
                </div>
              )}
              {error && (
                <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "14px", borderRadius: "10px", fontSize: "14px", marginBottom: "20px" }}>
                  ✗ {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Your Name *</label>
                    <input type="text" name="name" required placeholder="Jane Doe" value={formData.name} onChange={handleChange}
                      style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email Address *</label>
                    <input type="email" name="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange}
                      style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Subject</label>
                  <input type="text" name="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange}
                    style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Message *</label>
                  <textarea name="message" required rows={5} placeholder="Tell us what's on your mind..." value={formData.message} onChange={handleChange}
                    style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", resize: "none" }}
                    onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
                </div>

                <button type="submit" disabled={submitting}
                  style={{ width: "100%", background: ORANGE, color: "#fff", padding: "13px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.7 : 1, boxShadow: "0 4px 14px rgba(255,102,0,0.3)" }}>
                  {submitting ? "Sending..." : "✉️ Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={{ background: NAVY, padding: "14px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: 0 }}>RoomVoyager © 2026</p>
      </div>

    </div>
  );
}
