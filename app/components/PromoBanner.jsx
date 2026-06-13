"use client";

import { useState, useEffect } from "react";

const ORANGE = "#FF6600";
const NAVY   = "#003B95";

export default function PromoBanner() {
  const [show,    setShow]    = useState(false);
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetch("/api/admin/settings")
      .then(r => r.json())
      .then(d => {
        if (!d.doublePointsOn) return;

        const now = new Date();

        // Respect start date/time if set
        if (d.promoStartDate) {
          const start = new Date(`${d.promoStartDate}T${d.promoStartTime || "00:00"}:00`);
          if (now < start) return;
        }

        // Respect end date/time if set
        if (d.promoEndDate) {
          const end = new Date(`${d.promoEndDate}T${d.promoEndTime || "23:59"}:00`);
          if (now > end) return;
          // Format the end date for the banner
          setEndDate(end.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
        }

        setShow(true);
      })
      .catch(() => {});
  }, []);

  if (!show) return null;

  return (
    <div style={{
      background: `linear-gradient(90deg, ${ORANGE} 0%, #FF8C00 100%)`,
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      textAlign: "center",
    }}>
      <span style={{ fontSize: "18px" }}>🔥</span>
      <p style={{ color: "#fff", fontWeight: "800", fontSize: "14px", margin: 0, letterSpacing: "0.01em" }}>
        🎉 Deals of the Week — Earn 2× points on hotels &amp; cruises!
        {endDate && <span style={{ fontWeight: "400", fontSize: "13px" }}> · Ends {endDate}</span>}
      </p>
      <a href="/rewards" style={{
        background: "#fff",
        color: ORANGE,
        fontWeight: "800",
        fontSize: "12px",
        padding: "5px 14px",
        borderRadius: "999px",
        textDecoration: "none",
        flexShrink: 0,
      }}>
        Learn more →
      </a>
    </div>
  );
}
