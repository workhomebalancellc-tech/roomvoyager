"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using RoomVoyager Travel ("we," "us," "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Description of Services",
    body: "RoomVoyager is a travel booking platform that connects users with third-party travel providers including:",
    list: [
      "Hotel bookings via Expedia affiliate network",
      "Flight bookings via Travelpayouts white-label platform",
      "Cruise bookings via CruiseDirect and partner networks",
      "Vacation packages curated by our travel advisors",
    ],
    footer: "RoomVoyager acts as an intermediary and is not itself a hotel, airline, or cruise line.",
  },
  {
    title: "3. Booking & Payments",
    body: "All bookings made through RoomVoyager are subject to the terms and conditions of the respective travel provider. By completing a booking, you agree to those providers' terms.",
    list: [
      "Prices and availability are subject to change until booking is confirmed",
      "Cancellation and refund policies vary by provider",
      "RoomVoyager earns affiliate commissions on bookings — this does not affect your price",
    ],
  },
  {
    title: "4. Rewards Program",
    body: "The RoomVoyager Rewards program is subject to the following terms:",
    list: [
      "Points are awarded based on completed bookings at our discretion",
      "Points have no cash value until redeemed through our rewards portal",
      "We reserve the right to modify or discontinue the rewards program with notice",
      "Points cannot be transferred, sold, or combined between accounts",
      "Fraudulent activity will result in account termination and forfeiture of points",
    ],
  },
  {
    title: "5. User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorized use. You must be at least 18 years old to create an account.",
  },
  {
    title: "6. Prohibited Uses",
    body: "You agree not to:",
    list: [
      "Use our services for any unlawful purpose",
      "Attempt to gain unauthorized access to our systems",
      "Submit false or fraudulent bookings",
      "Abuse the rewards program or attempt to game point accumulation",
      "Scrape, copy, or reproduce our content without permission",
    ],
  },
  {
    title: "7. Disclaimer of Warranties",
    body: `RoomVoyager provides its services "as is" without warranties of any kind. We do not guarantee uninterrupted service, and we are not responsible for errors or omissions in travel provider listings.`,
  },
  {
    title: "8. Limitation of Liability",
    body: "RoomVoyager shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or from bookings made through our platform. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.",
  },
  {
    title: "9. Changes to Terms",
    body: "We may update these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "10. Contact",
    body: null,
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <NavBar />

      {/* HERO */}
      <div style={{ background: NAVY, padding: "48px 24px", borderBottom: `4px solid ${ORANGE}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 10px" }}>📄 Legal</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", margin: "0 0 8px", lineHeight: 1.2 }}>Terms of Service</h1>
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
                <ul style={{ margin: "0 0 12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {s.list.map((item, j) => (
                    <li key={j} style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7" }}>{item}</li>
                  ))}
                </ul>
              )}
              {s.footer && <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7", margin: 0 }}>{s.footer}</p>}
              {s.contact && (
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.7", margin: 0 }}>
                  Questions about these Terms? Contact us at{" "}
                  <a href="mailto:workhomebalancellc@gmail.com" style={{ color: NAVY, fontWeight: "600", textDecoration: "none" }}>
                    workhomebalancellc@gmail.com
                  </a>.
                </p>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "32px", background: NAVY, borderRadius: "16px", padding: "32px", textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "18px", fontWeight: "800", margin: "0 0 8px" }}>Have questions about these terms?</p>
          <p style={{ color: "#93C5FD", fontSize: "14px", margin: "0 0 20px" }}>Our team is happy to clarify anything.</p>
          <a href="/contact" style={{ display: "inline-block", padding: "11px 28px", background: ORANGE, color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
            Contact Us →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
