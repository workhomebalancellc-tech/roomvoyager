/**
 * RoomVoyager Deal Sheet Writer
 * Reusable template — update the CONFIG block below for each new city.
 * Run writeDeals() to write data to the spreadsheet.
 *
 * City row ranges:
 *   Miami        → START_ROW = 39
 *   Cancún       → START_ROW = 45
 *   Honolulu     → START_ROW = 53
 *   Montego Bay  → START_ROW = 60
 *   (next city)  → START_ROW = 67
 */

// ── CONFIG — update this section for each new city ──────────────────────────

var SPREADSHEET_ID = '1wJXIYWVloZrTTNYESLey2ChylVH2dARgbeljbrHcxyw';
var START_ROW = 60; // First spreadsheet row for this city's deals

// Columns B–F: dates | hotel1_name | hotel1_price | hotel2_name | hotel2_price
var DEALS = [
  ['Jan 4th - 11th',  'Tropical Court Hotel',                              '$68 per night',    'Coyaba Beach Resort',                          '$253 per night'   ],
  ['Jan 20th - 23rd', 'Pineapple Court Hotel',                             '$103 per night',   'SeaGarden Beach Resort All-Inclusive',          '$338 per night'   ],
  ['Jan 16th - 19th', 'S Hotel Montego Bay Luxury Boutique All-Inclusive', '$659 per night',   'Half Moon',                                    '$1,045 per night' ],
  ['Jan 18th - 23rd', 'Mystic Ridge Paradise',                             '$245 per night',   'Deja Resort All-Inclusive Montego Bay',         '$440 per night'   ],
  ['Jan 7th - 11th',  'Hotel Riu Ocho Rios All-Inclusive',                 '$466 per night',   'Iberostar Waves Rose Hall Beach All-Inclusive', '$562 per night'   ],
  ['Jan 22nd - 28th', 'Sandals Montego Bay',                               '$1,676 per night', 'Sandals Caribbean Cay',                        'See current rates'],
  ['Jan 14th - 18th', 'Hotel 39 Jamaica',                                  '$178 per night',   'Round Hill Hotel And Villas',                  '$1,703 per night' ],
];

// Column V: one callout per deal row
var CALLOUTS = [
  ['$68 budget base or $253 beachfront boutique in Rose Hall — 7 nights in Jamaica'],
  ['City flex or all-inclusive beach — $103 vs $338 for three nights in MoBay'],
  ["Boutique luxury all-inclusive or Jamaica's grandest estate — $659 vs $1,045"],
  ['Ocho Rios villa explorer or MoBay all-inclusive — two Jamaicas in 5 nights'],
  ['RIU Ocho Rios or Iberostar Rose Hall — big-brand all-inclusive, $466 vs $562'],
  ['Sandals original beach at $1,676 or Caribbean Cay private island — 6 nights'],
  ["City boutique at $178 or Jamaica's legendary Round Hill estate at $1,703"],
];

// ── DO NOT EDIT BELOW ────────────────────────────────────────────────────────

function writeDeals() {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getActiveSheet();
  Logger.log('Writing to: ' + sheet.getName() + ', starting at row ' + START_ROW);

  for (var i = 0; i < DEALS.length; i++) {
    sheet.getRange(START_ROW + i, 2, 1, 5).setValues([DEALS[i]]);
  }
  for (var i = 0; i < CALLOUTS.length; i++) {
    sheet.getRange(START_ROW + i, 22).setValue(CALLOUTS[i][0]);
  }

  SpreadsheetApp.flush();
  Logger.log('Done — wrote ' + DEALS.length + ' rows starting at row ' + START_ROW);
}
