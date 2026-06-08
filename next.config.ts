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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.expediagroup.com *.travelpayouts.com *.tpwdgt.com https://apis.google.com https://accounts.google.com cruisedirect.com *.cruisedirect.com",
              "frame-src 'self' *.expediagroup.com *.travelpayouts.com flights.roomvoyagertravel.com https://accounts.google.com https://roomvoyager-46b98.firebaseapp.com cruisedirect.com *.cruisedirect.com",
              "connect-src 'self' *.expediagroup.com *.travelpayouts.com *.rapidapi.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://www.googleapis.com https://firebaseinstallations.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com cruisedirect.com *.cruisedirect.com https://api.airtable.com",
              "img-src 'self' data: blob: *.expediagroup.com *.travelpayouts.com *.googleusercontent.com images.unsplash.com lh3.googleusercontent.com *.lduhtrp.net *.jdoqocy.com *.cruisedirect.com *.cloudfront.net",
              "style-src 'self' 'unsafe-inline' 'unsafe-eval' *.expediagroup.com *.travelpayouts.com https://fonts.googleapis.com",
              "style-src-elem 'self' 'unsafe-inline' *.expediagroup.com *.travelpayouts.com https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
