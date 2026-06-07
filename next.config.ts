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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.expediagroup.com *.travelpayouts.com *.tpwdgt.com https://apis.google.com https://accounts.google.com",
              "frame-src 'self' *.expediagroup.com *.travelpayouts.com flights.roomvoyagertravel.com https://accounts.google.com https://roomvoyager-46b98.firebaseapp.com",
              "connect-src 'self' *.expediagroup.com *.travelpayouts.com *.rapidapi.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://www.googleapis.com https://firebaseinstallations.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com",
              "img-src 'self' data: blob: *.expediagroup.com *.travelpayouts.com *.googleusercontent.com images.unsplash.com lh3.googleusercontent.com",
              "style-src 'self' 'unsafe-inline' 'unsafe-eval' *.expediagroup.com *.travelpayouts.com",
              "style-src-elem 'self' 'unsafe-inline' *.expediagroup.com *.travelpayouts.com",
              "font-src 'self' data:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
