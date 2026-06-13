import { NextRequest, NextResponse } from "next/server";

// ── Simple in-memory rate limiter ─────────────────────────────────────────────
// Limits public form endpoints to 10 requests per IP per minute.
// Note: resets per serverless instance — good enough for bot deterrence without
// a paid Redis store.

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS   = 60_000; // 1 minute
const MAX_REQUESTS = 10;    // per IP per window

// Paths to rate limit
const LIMITED = [
  "/api/subscribe",
  "/api/contact",
  "/api/quotes",
  "/api/call-requests",
  "/api/redemptions",
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (!LIMITED.some((p) => path.startsWith(p))) {
    return NextResponse.next();
  }

  // Get IP from Vercel header or fallback
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const key = `${ip}:${path}`;
  const now = Date.now();

  let entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + WINDOW_MS };
  }

  entry.count++;
  rateLimitMap.set(key, entry);

  if (entry.count > MAX_REQUESTS) {
    return new NextResponse("Too many requests. Please wait a minute and try again.", {
      status: 429,
      headers: {
        "Retry-After": "60",
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/subscribe",
    "/api/contact",
    "/api/quotes",
    "/api/call-requests",
    "/api/redemptions",
  ],
};
