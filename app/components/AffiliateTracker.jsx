"use client";

import { useEffect } from "react";

// Fires a GA4 event whenever any Expedia affiliate link is clicked.
// Covers all blog pages automatically — no per-page changes needed.
export default function AffiliateTracker() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href*="expedia.com/affiliates"]');
      if (!anchor || typeof window === "undefined" || !window.gtag) return;

      const url = anchor.href || "";
      // Extract slug from URL, e.g. "workhomebalance_llc/parisdeal7_1"
      const slug = url.split("expedia.com/affiliates/")[1] || url;
      const label = anchor.textContent?.trim().slice(0, 80) || slug;

      window.gtag("event", "affiliate_click", {
        link_slug: slug,
        link_text: label,
        link_url: url,
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
