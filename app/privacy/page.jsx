"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide when you create an account, make a booking, or contact us. This includes:",
    list: [
      "Name and email address",
      "Account credentials (passwords are encrypted and never stored in plain text)",
      "Booking preferences and travel history",
      "Communications you send us",
    ],
    footer: "We also automatically collect certain technical information when you visit our site, including your IP address, browser type, and pages visited.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to:",
    list: [
      "Process bookings and provide travel services",
      "Manage your rewards account and track points",
      "Send booking confirmations and important account updates",
      "Respond to your questions and support requests",
      "Improve our website and services",
      "Comply with legal obligations",
    ],
  },
  {
    title: "3. Sharing Your Information",
    body: "We do not sell your personal information. We may share your information with:",
    list: [
      "Travel partners (Expedia, Travelpayouts, CruiseDirect) to fulfill bookings",
      "Service providers who help us operate our website",
      "Law enforcement when required by law",
    ],
  },
  {
    title: "4. Cookies",
    body: "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how visitors use our site. You can control cookies through your browser settings, though disabling them may affect site functionality.",
  },
  {
    title: "5. Data Security",
    body: "We use industry-standard security measures including encrypted connections (HTTPS), hashed passwords, and secure database storage. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to:",
    list: [
      "Access the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your account and data",
      "Opt out of marketing emails at any time",
    ],
    contact: true,
  },
  {
    title: "7. Third-Party Links",
    body: "Our site contains links to third-party booking platforms (Expedia, Travelpayouts, CruiseDirect). These sites have their own privacy policies, and we are not responsible for their practices.",
  },
  {
    title: "8. Children's Privacy",
    body: "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on our site.",
  },
  {
    title: "10. Contact Us",
    contactFull: true,
  },
];

export default function PrivacyPage() {
  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <NavBar />

      {/* HERO */}
      <div style={{ background: NAVY, padding: "48px 24px", borderBottom: `4px solid ${ORANGE}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 10px" }}>🔒 Legal</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", margin: "0 0 8px", lineHeight: 1.2 }}>Privacy Policy</h1>
          <p style={{ color: "#93C5FD", fontSize: "14px", margin: 0 }}>Last updated: June 2026</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "20px", padding: "40px", display: "flex", flexDirection: "column", gap: "36px" }}>
          {sections.map((s, i) => (
            <section key={i} style={{ borderBottom: i < sections.length - 1 ? "1px solid #F3F4F6" : "none", paddingBottom: i < sections.length - 1 ? "36px" : 0 }}>
              <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "4px", height: "20px", background: ORANGE, borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
                {s.title}
              </h2>
              {s.body && <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7", margin: s.list ? "0 0 12px" : 0 }}>{s.body}</p>}
              {s.list && (
                <ul style={{ margin: s.contact ? "0 0 12px" : 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {s.list.map((item, j) => (
                    <li key={j} style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7" }}>{item}</li>
                  ))}
                </ul>
              )}
              {s.contact && (
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7", margin: 0 }}>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:admin@roomvoyagertravel.com" style={{ color: NAVY, fontWeight: "600", textDecoration: "none" }}>
                    admin@roomvoyagertravel.com
                  </a>.
                </p>
              )}
              {s.contactFull && (
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7", margin: 0 }}>
                  Questions about this Privacy Policy? Contact us at{" "}
                  <a href="mailto:admin@roomvoyagertravel.com" style={{ color: NAVY, fontWeight: "600", textDecoration: "none" }}>
                    admin@roomvoyagertravel.com
                  </a>{" "}or visit our{" "}
                  <a href="/contact" style={{ color: NAVY, fontWeight: "600", textDecoration: "none" }}>Contact page</a>.
                </p>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "32px", background: NAVY, borderRadius: "16px", padding: "32px", textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "18px", fontWeight: "800", margin: "0 0 8px" }}>Questions about your data?</p>
          <p style={{ color: "#93C5FD", fontSize: "14px", margin: "0 0 20px" }}>We're transparent about how we handle your information.</p>
          <a href="/contact" style={{ display: "inline-block", padding: "11px 28px", background: ORANGE, color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Contact Us →
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
