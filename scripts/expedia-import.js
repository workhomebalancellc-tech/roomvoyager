/**
 * Expedia Creator → RoomVoyager Auto-Import
 *
 * Runs headless Chrome to log into Expedia Creator, download the bookings CSV,
 * and POST it to the RoomVoyager import API for automatic point awarding.
 *
 * Required env vars (set as GitHub Actions secrets):
 *   EXPEDIA_EMAIL           — your Expedia Creator login email
 *   EXPEDIA_PASSWORD        — your Expedia Creator login password
 *   IMPORT_API_URL          — https://www.roomvoyagertravel.com
 *   EXPEDIA_IMPORT_SECRET   — random secret set in Vercel env vars too
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const EXPEDIA_EMAIL         = process.env.EXPEDIA_EMAIL;
const EXPEDIA_PASSWORD      = process.env.EXPEDIA_PASSWORD;
const IMPORT_API_URL        = process.env.IMPORT_API_URL || "https://www.roomvoyagertravel.com";
const EXPEDIA_IMPORT_SECRET = process.env.EXPEDIA_IMPORT_SECRET;

if (!EXPEDIA_EMAIL || !EXPEDIA_PASSWORD || !EXPEDIA_IMPORT_SECRET) {
  console.error("Missing required env vars: EXPEDIA_EMAIL, EXPEDIA_PASSWORD, EXPEDIA_IMPORT_SECRET");
  process.exit(1);
}

const DOWNLOAD_DIR = path.join(__dirname, "..", "tmp-downloads");

async function run() {
  if (!fs.existsSync(DOWNLOAD_DIR)) fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ acceptDownloads: true });
  const page    = await context.newPage();

  console.log("→ Navigating to Expedia Creator sign-in...");
  await page.goto("https://creator.expediagroup.com/signin?creator-type=creator", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  // Fill login form
  console.log("→ Logging in...");
  await page.fill('input[type="email"], input[name="email"], input[id*="email"]', EXPEDIA_EMAIL);
  await page.fill('input[type="password"], input[name="password"], input[id*="password"]', EXPEDIA_PASSWORD);
  await page.click('button[type="submit"], button:has-text("Sign in"), button:has-text("Log in")');

  // Wait for dashboard
  await page.waitForURL("**/app/**", { timeout: 30000 }).catch(async () => {
    // Sometimes redirects to a different URL — just wait for nav
    await page.waitForNavigation({ timeout: 30000 });
  });
  console.log("→ Logged in. Current URL:", page.url());

  // Navigate to performance page
  console.log("→ Navigating to performance page...");
  await page.goto("https://creator.expediagroup.com/app/performance", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  // Wait for the bookings table to appear
  await page.waitForSelector("text=Total Bookings", { timeout: 20000 })
    .catch(() => console.log("  (bookings selector not found — proceeding anyway)"));

  // Small wait for data to fully load
  await page.waitForTimeout(3000);

  // Click Download
  console.log("→ Clicking Download button...");
  const downloadPromise = page.waitForEvent("download", { timeout: 15000 });

  // Try multiple selectors for the download button
  const downloadBtn = await page.locator(
    'button:has-text("Download"), a:has-text("Download"), [aria-label*="Download"], [data-testid*="download"]'
  ).first();
  await downloadBtn.click();

  const download = await downloadPromise;
  const downloadPath = path.join(DOWNLOAD_DIR, "expedia-bookings.csv");
  await download.saveAs(downloadPath);
  console.log("→ CSV downloaded to:", downloadPath);

  await browser.close();

  // Read CSV
  const csvText = fs.readFileSync(downloadPath, "utf-8");
  console.log(`→ CSV size: ${csvText.length} chars`);

  if (!csvText.trim()) {
    console.error("Downloaded CSV is empty — aborting.");
    process.exit(1);
  }

  // POST to import API
  console.log("→ Posting to RoomVoyager import API...");
  const res = await fetch(`${IMPORT_API_URL}/api/admin/expedia-import`, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret:  EXPEDIA_IMPORT_SECRET,
      action:  "auto-import",
      csvText,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Import API error:", data);
    process.exit(1);
  }

  console.log("\n✅ Import complete:");
  console.log(`   Awarded: ${data.awarded?.length || 0} booking(s)`);
  console.log(`   Skipped (no user match): ${data.skipped?.length || 0}`);
  console.log(`   Already imported: ${data.alreadyDone?.length || 0}`);

  if (data.awarded?.length) {
    console.log("\n  Awarded:");
    data.awarded.forEach(r => console.log(`    → ${r.product} · ${r.email} · ${r.pts} pts`));
  }
  if (data.skipped?.length) {
    console.log("\n  Needs manual review:");
    data.skipped.forEach(r => console.log(`    ⚠ ${r.product} · ${r.destinationCity} (${r.reason})`));
  }

  // Cleanup
  fs.unlinkSync(downloadPath);
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
