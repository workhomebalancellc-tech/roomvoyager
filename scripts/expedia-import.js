/**
 * Expedia Creator → RoomVoyager Auto-Import
 *
 * Runs headless Chrome to log into Expedia Creator, download the bookings CSV,
 * and POST it to the RoomVoyager import API for automatic point awarding.
 *
 * Required env vars (set as GitHub Actions secrets):
 *   EXPEDIA_COOKIES           — JSON array of cookies from a logged-in session
 *   IMPORT_API_URL            — https://www.roomvoyagertravel.com
 *   EXPEDIA_IMPORT_SECRET     — random secret set in Vercel env vars too
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const EXPEDIA_COOKIES       = process.env.EXPEDIA_COOKIES;
const IMPORT_API_URL        = process.env.IMPORT_API_URL || "https://www.roomvoyagertravel.com";
const EXPEDIA_IMPORT_SECRET = process.env.EXPEDIA_IMPORT_SECRET;

if (!EXPEDIA_COOKIES || !EXPEDIA_IMPORT_SECRET) {
  console.error("Missing required env vars: EXPEDIA_COOKIES, EXPEDIA_IMPORT_SECRET");
  process.exit(1);
}

let parsedCookies;
try {
  parsedCookies = JSON.parse(EXPEDIA_COOKIES);
} catch {
  console.error("EXPEDIA_COOKIES is not valid JSON");
  process.exit(1);
}

const DOWNLOAD_DIR = path.join(__dirname, "..", "tmp-downloads");

async function screenshot(page, name) {
  try {
    const file = path.join(DOWNLOAD_DIR, `${name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`  [screenshot] saved ${name}.png`);
  } catch (e) {
    console.log(`  [screenshot] failed for ${name}: ${e.message}`);
  }
}

async function run() {
  if (!fs.existsSync(DOWNLOAD_DIR)) fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--disable-dev-shm-usage",
    ],
  });
  const context = await browser.newContext({
    acceptDownloads: true,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 900 },
  });
  await context.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => undefined });
  });
  const page = await context.newPage();

  // Inject saved session cookies
  console.log(`→ Injecting ${parsedCookies.length} session cookies...`);
  await context.addCookies(parsedCookies);
  console.log("→ Cookies injected.");

  // Navigate to performance page
  console.log("→ Navigating to performance page...");
  await page.goto("https://creator.expediagroup.com/app/performance", {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  await screenshot(page, "01-after-navigate");

  // Check that we're actually logged in (not redirected to login)
  const currentUrl = page.url();
  console.log(`→ Current URL: ${currentUrl}`);
  if (
    currentUrl.includes("/login") ||
    currentUrl.includes("/signin") ||
    currentUrl.includes("/auth") ||
    currentUrl.includes("accounts.expediagroup")
  ) {
    await screenshot(page, "02-login-redirect");
    await browser.close();
    console.error(
      "⚠️  Redirected to login — session cookies have expired.\n" +
      "   You need to refresh the EXPEDIA_COOKIES secret:\n" +
      "   1. Log into https://creator.expediagroup.com in Chrome\n" +
      "   2. Open DevTools → Application → Cookies → copy all cookies as JSON\n" +
      "   3. Update the EXPEDIA_COOKIES secret in GitHub Actions settings"
    );
    process.exit(1);
  }

  // Wait for page content
  await page.waitForSelector("text=Total Bookings", { timeout: 20000 })
    .catch(() => console.log("  (bookings selector not found — proceeding anyway)"));

  await page.waitForTimeout(3000);
  await screenshot(page, "02-page-loaded");

  // Find the download button
  console.log("→ Looking for Download button...");
  const btnLocator = page.locator(
    'button:has-text("Download"), a:has-text("Download"), [aria-label*="Download"], [data-testid*="download"]'
  ).first();

  const btnVisible = await btnLocator.isVisible().catch(() => false);
  if (!btnVisible) {
    await screenshot(page, "03-no-download-button");
    // Log all buttons on page to help diagnose
    const buttons = await page.locator("button").allTextContents().catch(() => []);
    console.log("  Buttons found on page:", buttons.slice(0, 20));
    await browser.close();
    console.error("Download button not found on page. See screenshot 03-no-download-button.png and button list above.");
    process.exit(1);
  }

  console.log("→ Clicking Download button...");
  await screenshot(page, "03-before-click");

  // Some download buttons open a dialog/menu first — try both patterns
  let download = null;

  // Pattern 1: direct download on click
  try {
    const downloadPromise = page.waitForEvent("download", { timeout: 8000 });
    await btnLocator.click();
    download = await downloadPromise;
    console.log("  (download triggered directly)");
  } catch {
    console.log("  (no direct download — checking for dialog...)");
    await screenshot(page, "04-after-first-click");

    // Pattern 2: click opened a dialog/dropdown — look for CSV or confirm option
    const csvOption = page.locator(
      'text=/csv/i, button:has-text("CSV"), [aria-label*="CSV"], text=/Export/i, button:has-text("Export"), text=/Confirm/i'
    ).first();
    const csvVisible = await csvOption.isVisible({ timeout: 5000 }).catch(() => false);

    if (csvVisible) {
      console.log("  Found secondary option — clicking...");
      const downloadPromise2 = page.waitForEvent("download", { timeout: 30000 });
      await csvOption.click();
      download = await downloadPromise2;
      console.log("  (download triggered via dialog)");
    } else {
      await screenshot(page, "05-no-secondary-option");
      // Log visible text for diagnosis
      const bodyText = await page.locator("body").innerText().catch(() => "");
      console.log("  Page text snippet:", bodyText.slice(0, 500));
      await browser.close();
      console.error("Could not trigger download. See screenshots in artifacts for page state.");
      process.exit(1);
    }
  }

  const downloadPath = path.join(DOWNLOAD_DIR, "expedia-bookings.csv");
  await download.saveAs(downloadPath);
  console.log("→ CSV downloaded to:", downloadPath);
  await screenshot(page, "05-download-complete");

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

  // Cleanup CSV (keep screenshots for artifact upload)
  fs.unlinkSync(downloadPath);
}

run().catch(async err => {
  console.error("Fatal error:", err);
  // Screenshots are in tmp-downloads/ and will be uploaded by the workflow
  process.exit(1);
});
