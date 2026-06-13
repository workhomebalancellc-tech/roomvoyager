/**
 * Run this ONCE locally to save your Expedia Creator session cookies.
 *
 * Usage:
 *   node scripts/save-expedia-cookies.js
 *
 * A browser window will open. Log in to Expedia Creator normally,
 * then press Enter in this terminal. The cookies will be saved to
 * scripts/expedia-cookies.json — copy that JSON and store it as
 * the EXPEDIA_COOKIES GitHub Actions secret.
 *
 * DO NOT commit expedia-cookies.json to git.
 */

const { chromium } = require("playwright");
const fs   = require("fs");
const path = require("path");
const readline = require("readline");

async function run() {
  console.log("Opening browser — log in to Expedia Creator, then come back here and press Enter.");

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page    = await context.newPage();

  await page.goto("https://creator.expediagroup.com/signin?creator-type=creator");

  // Wait for user to log in manually
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise(resolve => rl.question("\nPress Enter once you're fully logged in...\n", resolve));
  rl.close();

  const cookies = await context.cookies();
  const outPath = path.join(__dirname, "expedia-cookies.json");
  fs.writeFileSync(outPath, JSON.stringify(cookies, null, 2));
  console.log(`\n✅ Saved ${cookies.length} cookies to:\n   ${outPath}`);
  console.log("\nCopy the contents of that file and save it as the");
  console.log("EXPEDIA_COOKIES secret in GitHub → Settings → Secrets → Actions.");
  console.log("\n⚠️  Do NOT commit expedia-cookies.json to git.");

  await browser.close();
}

run().catch(err => { console.error(err); process.exit(1); });
