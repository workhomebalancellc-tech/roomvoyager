"use client";

import { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const FAQS = [
  { q: ["how do i earn points", "earn points", "how points work", "points"], a: "You earn 5 pts per $1 on hotels and flights, and 10 pts per $1 on cruises and vacation packages. Double points are available on hotels, cruises, and packages." },
  { q: ["redeem points", "how to redeem", "cash out", "withdraw"], a: "You can redeem points once you hit 1,000. We pay out via Zelle, Cash App, or Venmo. 10,000 pts = $10, 25,000 pts = $25, 50,000 pts = $50, 100,000 pts = $100." },
  { q: ["tiers", "tier", "explorer", "voyager", "navigator", "admiral", "levels"], a: "We have 4 tiers: Explorer (0–9,999 pts), Voyager (10,000–49,999), Navigator (50,000–99,999), and Admiral (100,000+). Higher tiers unlock better perks and auto payouts." },
  { q: ["cancel", "cancellation", "refund"], a: "Cancellation policies vary by provider (hotel, airline, or cruise line). Most hotels booked through RoomVoyager offer free cancellation options — check the listing details before booking." },
  { q: ["how to book", "book a cruise", "book a hotel", "book flights", "booking"], a: "Browse our Hotels, Flights, or Cruises pages, choose your option, and you'll be directed to our trusted partner to complete the booking securely. Points are credited after your trip." },
  { q: ["contact", "email", "phone", "reach you", "support"], a: "You can email us at roomvoyager@protonmail.com or use the contact form on this page. We respond within 24 hours on business days." },
  { q: ["group", "group booking", "group rate"], a: "We offer special group rates for cruises, hotels, and packages. Use the contact form and select 'Group Booking' as your subject, or email us directly." },
  { q: ["referral", "refer a friend", "referrals"], a: "Yes! Refer a friend and both of you earn bonus points: 200 pts for flights, 350 pts for hotels, and 500 pts for cruises or packages — credited after their first booking." },
  { q: ["sign up", "create account", "join", "register", "free"], a: "Creating an account is free — no credit card required. Sign up at roomvoyager.com/account/signup to start earning points right away." },
  { q: ["birthday", "birthday bonus"], a: "Voyager, Navigator, and Admiral members receive a 500-point birthday bonus automatically credited to your account." },
];

function getBotReply(input) {
  const lower = input.toLowerCase();
  for (const faq of FAQS) {
    if (faq.q.some(k => lower.includes(k))) return faq.a;
  }
  return "I'm not sure about that one! Please use the contact form below or email us at roomvoyager@protonmail.com and our team will get back to you within 24 hours.";
}

function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Compass, your RoomVoyager assistant. Ask me anything about rewards, bookings, or your account. Type 'contact' anytime to reach our team." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { from: "user", text: trimmed };
    const botMsg  = { from: "bot",  text: getBotReply(trimmed) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", overflow: "hidden", marginBottom: "80px" }}>
      <div style={{ background: NAVY, padding: "20px 28px", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "36px", height: "36px", background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>💬</div>
        <div>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>RoomVoyager Assistant</p>
          <p style={{ color: "#fff", fontSize: "16px", fontWeight: "800", margin: 0 }}>Compass</p>
        </div>
      </div>

      {/* Suggestion chips */}
      <div style={{ padding: "14px 20px 0", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {["How do I earn points?", "How do I redeem?", "Tell me about tiers", "Group bookings"].map((q, i) => (
          <button key={i} onClick={() => { setInput(q); setTimeout(() => { const trimmed = q.trim(); setMessages(prev => [...prev, { from: "user", text: trimmed }, { from: "bot", text: getBotReply(trimmed) }]); setInput(""); }, 0); }}
            style={{ background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "999px", padding: "6px 14px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
            {q}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div style={{ padding: "16px 20px", height: "260px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "80%", padding: "10px 14px", borderRadius: m.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              background: m.from === "user" ? NAVY : LIGHT_BLUE,
              color: m.from === "user" ? "#fff" : "#111827",
              fontSize: "14px", lineHeight: 1.55,
            }}>{m.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ borderTop: "1px solid #E5E7EB", padding: "14px 20px", display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ask a question..."
          style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
          onFocus={e => e.target.style.borderColor = NAVY}
          onBlur={e => e.target.style.borderColor = "#E5E7EB"}
        />
        <button onClick={send}
          style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "10px 20px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setEmailError(e.target.value && !validEmail(e.target.value) ? "Please enter a valid email address." : "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
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
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="contact" />

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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            { icon: "✉️", title: "Email Us", lines: ["roomvoyager@protonmail.com"] },
            { icon: "📞", title: "Call Us", lines: ["1-800-VOYAGER", "Mon–Fri 9am–6pm EST"] },
          ].map((card, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "16px" }}>
              <div style={{ width: "36px", height: "36px", background: LIGHT_BLUE, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "10px" }}>{card.icon}</div>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>{card.title}</p>
              {card.lines.map((line, j) => <p key={j} style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 2px" }}>{line}</p>)}
            </div>
          ))}
        </div>

        {/* CHATBOT */}
        <ChatBot />

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
                      style={{ width: "100%", padding: "11px 14px", border: `1.5px solid ${emailError ? "#DC2626" : "#E5E7EB"}`, borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = emailError ? "#DC2626" : NAVY}
                      onBlur={e => {
                        e.target.style.borderColor = emailError ? "#DC2626" : "#E5E7EB";
                        if (formData.email && !validEmail(formData.email)) setEmailError("Please enter a valid email address.");
                      }} />
                    {emailError && <p style={{ fontSize: "11px", color: "#DC2626", margin: "4px 0 0", fontWeight: "600" }}>{emailError}</p>}
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

    </div>
    <Footer />
    </>
  );
}
