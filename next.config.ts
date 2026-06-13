import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.expediagroup.com *.travelpayouts.com tpwdgt.com *.tpwdgt.com widgets.kiwi.com *.kiwi.com tpo.gg *.tpo.gg https://apis.google.com https://accounts.google.com cruisedirect.com *.cruisedirect.com",
              "frame-src 'self' *.expediagroup.com *.travelpayouts.com tpwdgt.com *.tpwdgt.com widgets.kiwi.com *.kiwi.com flights.roomvoyagertravel.com https://accounts.google.com https://roomvoyager-46b98.firebaseapp.com cruisedirect.com *.cruisedirect.com",
              "connect-src 'self' *.expediagroup.com *.travelpayouts.com tpwdgt.com *.tpwdgt.com tpo.gg *.tpo.gg kiwi.com *.kiwi.com api.kiwi.com autocomplete.kiwi.com services.kiwi.com *.rapidapi.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://www.googleapis.com https://firebaseinstallations.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://firestore.googleapis.com wss://firestore.googleapis.com https://*.firestore.googleapis.com wss://*.firestore.googleapis.com cruisedirect.com *.cruisedirect.com https://api.airtable.com https://api.emailjs.com",
              "img-src 'self' data: blob: *.expediagroup.com *.travelpayouts.com tpwdgt.com *.tpwdgt.com *.kiwi.com *.googleusercontent.com images.unsplash.com lh3.googleusercontent.com *.lduhtrp.net *.jdoqocy.com *.cruisedirect.com *.cloudfront.net *.awltovhc.com logo.clearbit.com *.tqlkg.com *.kqzyfj.com *.anrdoezrs.net *.dpbolvw.net *.tkqlhce.com",
              "style-src 'self' 'unsafe-inline' 'unsafe-eval' *.expediagroup.com *.travelpayouts.com https://fonts.googleapis.com",
              "style-src-elem 'self' 'unsafe-inline' *.expediagroup.com *.travelpayouts.com https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
            ].join("; "),
          },
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-Content-Type-Options",     value: "nosniff" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "X-DNS-Prefetch-Control",     value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
