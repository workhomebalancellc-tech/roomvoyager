/**
 * /api/cruise-redirect
 *
 * The CruiseDirect widget appends the destination cruise URL directly to the
 * data-redirect-server string, producing a URL like:
 *   /api/cruise-redirect?to=https://www.cruisedirect.com/cruise/123
 *
 * Because the appended URL is NOT encoded, standard URLSearchParams parsing
 * breaks on the embedded ?/& characters. We use raw string slicing instead.
 *
 * Flow: Widget click → this route → /redirect buffer page → CJ affiliate link → CruiseDirect
 */
export async function GET(request) {
  const rawUrl = request.url;

  // Find the start of our ?to= parameter (always the first ? in our route URL)
  const toIndex = rawUrl.indexOf("?to=");
  const cruiseUrl = toIndex >= 0 ? rawUrl.slice(toIndex + 4) : "";

  if (!cruiseUrl) {
    return Response.redirect("https://www.cruisedirect.com", 302);
  }

  // Wrap the cruise URL in the CJ affiliate tracking link (preserves commission)
  const affiliateUrl = `https://www.jdoqocy.com/click-101734691-15534473?url=${cruiseUrl}`;

  // Build the buffer page URL with proper encoding
  const bufferUrl = new URL("/redirect", "https://www.roomvoyagertravel.com");
  bufferUrl.searchParams.set("to", affiliateUrl);
  bufferUrl.searchParams.set("partner", "CruiseDirect");
  bufferUrl.searchParams.set("product", "cruise");

  return Response.redirect(bufferUrl.href, 302);
}
