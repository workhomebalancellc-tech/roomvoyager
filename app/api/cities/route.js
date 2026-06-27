// /api/cities — proxies OpenStreetMap Nominatim for city autocomplete
// US results show "City, ST" · International show "City, Country"
// Simple in-memory cache so repeated queries don't re-hit Nominatim

const cache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

const STATE_ABBR = {
  "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
  "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
  "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID",
  "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS",
  "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
  "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
  "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV",
  "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
  "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
  "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT",
  "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV",
  "Wisconsin": "WI", "Wyoming": "WY", "District of Columbia": "DC",
  "Puerto Rico": "PR", "Guam": "GU", "U.S. Virgin Islands": "VI",
};

function stateAbbr(name) {
  return STATE_ABBR[name] || name || "";
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").trim();

  if (q.length < 2) return Response.json([]);

  const cacheKey = q.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return Response.json(cached.data);
  }

  try {
    const params = new URLSearchParams({
      q,
      format: "json",
      addressdetails: "1",
      limit: "12",
      "accept-language": "en",
      featuretype: "settlement",
    });

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?${params.toString()}`,
      {
        headers: {
          "User-Agent": "RoomVoyagerTravel/1.0 workhomebalancellc@gmail.com",
          "Accept-Language": "en",
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) return Response.json([]);
    const raw = await res.json();

    const ALLOWED_TYPES = new Set(["city", "town", "village", "hamlet", "municipality"]);
    const seen = new Set();
    const results = [];

    for (const item of raw) {
      // Only include actual place settlements — skip counties, regions, boundaries
      if (item.class !== "place") continue;
      if (!ALLOWED_TYPES.has(item.type)) continue;

      const addr = item.address || {};
      const city =
        addr.city || addr.town || addr.village || addr.hamlet ||
        addr.municipality || addr.suburb || item.name;
      if (!city) continue;

      const countryCode = (addr.country_code || "").toUpperCase();
      const isUS = countryCode === "US";
      const sub = isUS
        ? stateAbbr(addr.state)
        : addr.country || "";

      const label = sub ? `${city}, ${sub}` : city;
      if (seen.has(label.toLowerCase())) continue;
      seen.add(label.toLowerCase());

      results.push({ name: city, sub, label });
      if (results.length >= 8) break;
    }

    cache.set(cacheKey, { data: results, ts: Date.now() });
    return Response.json(results);
  } catch {
    // Fall back to empty — never break the UI
    return Response.json([]);
  }
}
