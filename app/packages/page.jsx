"use client";

import { useEffect } from "react";

// Packages page hidden until Yeti signup — redirects to homepage.
// Original page is preserved in git history. To restore:
//   git checkout <previous-commit> -- app/packages/page.jsx
export default function PackagesPage() {
  useEffect(() => { window.location.replace("/"); }, []);
  return null;
}
