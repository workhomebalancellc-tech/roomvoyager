# RoomVoyager Deals — Rules & Workflow Memory

## Deal Structure Per City (7 deals)

- **Deal 1:** Cheapest vs. $50–100/night more. Must be **7 nights**.
- **Deal 2:** Cheap beach vs. cheap downtown. Under $100/night each.
- **Deal 3:** Affordable boutique vs. 5-star luxury.
- **Deal 4:** Two mid-range ($150–300/night).
- **Deal 5:** Two 4/5-star hotels.
- **Deal 6:** Same hotel chain, two tiers.
- **Deal 7:** Wild card / unique boutique hotels.
- At least 1 deal per city must be 7 nights; others can be 3–6 nights.

## Hotel Rules
- No hostels — real hotels only.
- Always verify availability on expedia.com before writing blogs.
- Fetch name, rating, and price from affiliate link redirect URL (`top_dp` param ÷ nights = nightly rate).

## Affiliate Link Format
- `https://expedia.com/affiliates/workhomebalance_llc/{id}`
- Pattern: `{citycode}{dealN}_{1or2}` (e.g., `hono1_1`, `hono1_2`)

## Blog Format (Next.js JSX)
- Hero: 340px height, maxWidth 780px content
- Two hotel sections with HR dividers
- Navy/orange callout pull-quote (left border)
- Blue Bottom Line box: `background: #EBF3FF`, `borderRadius: 20px`
- `NAVY = "#003B95"` · `ORANGE = "#FF6600"`
- Affiliate links as orange CTA buttons

---

## Google Spreadsheet

**Sheet ID:** `1wJXIYWVloZrTTNYESLey2ChylVH2dARgbeljbrHcxyw`

### Column Layout (header at row 32, data from row 33)
| Col | Field |
|-----|-------|
| A | deal# (auto — do NOT write) |
| B | dates — e.g., "Dec 4th - 11th" |
| C | hotel1_name |
| D | hotel1_price — e.g., "$89 per night" |
| E | hotel2_name |
| F | hotel2_price |
| G | destination (city name) |
| H | destination (may vary) |
| I–L | hotel1 photos |
| M–P | hotel2 photos |
| Q | city_photo |
| R | text_color |
| S | voiceover |
| T | voice_style |
| U | Status |
| **V** | **Callouts ← write here** |
| W | BlurBackdrop |
| X | TikTok Date |

### Row Ranges by City
| City | Sheet Rows | Col A deal# range |
|------|-----------|-------------------|
| Miami | 39–44 | 39–44 |
| Cancún | 45–51 | 45–51 |
| Honolulu | 53–59 | 52–58 |
| **Montego Bay** | **60–66** | **59–65** |

### Write Technique — Apps Script
**Project URL:**
```
https://script.google.com/home/projects/1mFEJ1nVwUZljGNSs3zr278Y7Hp1FjTI6iEll5Vv3Us5fbNdKxeH4RCM0/edit
```

For each new city:
1. Open the Apps Script project above
2. Update the CONFIG block: `START_ROW`, `DEALS` (columns B–F), `CALLOUTS` (column V)
3. Save → Run `writeDeals()`

**Critical:** Column B = dates (NOT deal#). Never include deal number as first value — column A auto-calculates.

**DEALS array format** (5 values per row):
```javascript
['Dec 4th - 11th', 'Hotel Name', '$89 per night', 'Hotel 2 Name', '$129 per night']
//  dates            hotel1_name   hotel1_price     hotel2_name     hotel2_price
```

**CALLOUTS array format** (1 value per row, written to column V):
```javascript
['Short punchy callout — two ways to do the city']
```

### Reading Data (verify via browser console on the sheet tab)
```javascript
fetch(`https://docs.google.com/spreadsheets/d/1wJXIYWVloZrTTNYESLey2ChylVH2dARgbeljbrHcxyw/gviz/tq?tq=select+A,B,C,D,E,F,G+limit+10+offset+59&tqx=out:csv`, {credentials:'include'}).then(r=>r.text()).then(console.log)
```
(Change `offset` to target the right rows.)

---

## Hub Page Pattern
- File: `app/deals/{city}/page.jsx`
- `isLive()` filters by `publishDate`; latest deal shown in orange gradient
- Deals listed newest → oldest in the `DEALS` array

## Deals Index Page
- File: `app/deals/page.jsx`
- Add city object with `city`, `img`, `link`, `liveDate`, `weekEnd`

---

## Next Up: Montego Bay
- Start at spreadsheet **row 60**, `START_ROW = 60`
- Confirm affiliate link prefix with Alyse
- Apply all rules above
