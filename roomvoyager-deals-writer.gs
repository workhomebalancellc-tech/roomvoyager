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
 *   Nashville    → START_ROW = 67
 *   Punta Cana   → START_ROW = 74
 */

var SPREADSHEET_ID = '1wJXIYWVloZrTTNYESLey2ChylVH2dARgbeljbrHcxyw';

// ── Run this to write BOTH Nashville and Punta Cana at once ─────────────────
function writeAllDeals() {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getActiveSheet();

  // ── NASHVILLE (rows 67–73) ───────────────────────────────────────────────
  var nasDeals = [
    ['Feb 7th - 14th', "Fiddler's Inn",                   '$65 per night',    'Hilton Garden Inn Vanderbilt',           '$131 per night' ],
    ['Feb 7th - 14th', 'Baymont by Wyndham Donelson',     '$71 per night',    'Mint House at Marathon Village',         '$79 per night'  ],
    ['Feb 7th - 14th', 'Sobro Guest House AvantStay',     '$147 per night',   'Four Seasons Nashville',                 '$709 per night' ],
    ['Feb 7th - 14th', 'Bode Nashville',                  '$167 per night',   'Margaritaville Nashville',               '$260 per night' ],
    ['Feb 7th - 14th', 'Loews Nashville Hotel',           '$197 per night',   'Omni Nashville Hotel',                   '$427 per night' ],
    ['Feb 7th - 14th', 'Hyatt House Nashville Downtown',  '$161 per night',   'Grand Hyatt Nashville',                  '$383 per night' ],
    ['Feb 7th - 14th', 'The Gilmore AvantStay 12 South', '$268 per night',   'Thompson Nashville by Hyatt',            '$333 per night' ],
  ];
  var nasCallouts = [
    ["Budget base or Vanderbilt mid-range — $65 vs $131 for 7 nights in Nashville"],
    ["Donelson budget or hip Marathon Village kitchen suite — $71 vs $79 a night"],
    ["SoBro boutique or Four Seasons luxury — $147 vs $709 in Nashville"],
    ["Two 9.2★ picks — Bode character or Margaritaville fun for 7 nights"],
    ["Loews or Omni — top-rated Nashville hotels at $197 vs $427 a night"],
    ["Same Hyatt Bonvoy points — House or Grand for 7 nights in Nashville"],
    ["12 South gem or Thompson rooftop bar — two boutique Nashville stays"],
  ];

  Logger.log('Writing Nashville (rows 67–73)...');
  for (var i = 0; i < nasDeals.length; i++) {
    sheet.getRange(67 + i, 2, 1, 5).setValues([nasDeals[i]]);
    sheet.getRange(67 + i, 22).setValue(nasCallouts[i][0]);
  }

  // ── PUNTA CANA (rows 74–80) ──────────────────────────────────────────────
  var pcDeals = [
    ['Feb 7th - 14th', 'Hotel Marimba Punta Cana',                       '$27 per night',    'Four Points by Sheraton Puntacana',                    '$137 per night'   ],
    ['Feb 7th - 14th', 'Hotel Maracas Punta Cana',                       '$28 per night',    'Hotel Marimba Punta Cana',                             '$27 per night'    ],
    ['Feb 7th - 14th', 'MANAYA Bed & Breakfast',                         '$43 per night',    'Tortuga Bay Hotel',                                    '$1,600 per night' ],
    ['Feb 7th - 14th', 'AC Hotel by Marriott Punta Cana',                '$151 per night',   'Barceló Bávaro Palace All Inclusive',                  '$272 per night'   ],
    ['Feb 7th - 14th', 'Sunscape Coco Punta Cana All Inclusive',         '$285 per night',   'Grand Palladium Select Bávaro All Inclusive',          '$649 per night'   ],
    ['Feb 7th - 14th', 'Four Points by Sheraton Puntacana',              '$137 per night',   'The Westin Puntacana Resort',                          '$286 per night'   ],
    ['Feb 7th - 14th', 'Faranda Single 1 Punta Cana Adults Only',        '$156 per night',   'Hotel Casa Don Luis Cap Cana by Faranda Boutique',     '$591 per night'   ],
  ];
  var pcCallouts = [
    ['Local budget or Marriott resort — $27 vs $137 in Punta Cana'],
    ['Beach walk or Bávaro town — both under $30 a night'],
    ["Breakfast B&B or Punta Cana's finest Oscar de la Renta address — $43 vs $1,600"],
    ['Marriott freedom or Barceló all-inclusive palace — $151 vs $272'],
    ['Sunscape solid AI or Grand Palladium 19-restaurant luxury — $285 vs $649'],
    ['Four Points entry or Westin upgrade — same Bonvoy points in Punta Cana'],
    ['Faranda adults-only retreat or Cap Cana Marina boutique — $156 vs $591'],
  ];

  Logger.log('Writing Punta Cana (rows 74–80)...');
  for (var i = 0; i < pcDeals.length; i++) {
    sheet.getRange(74 + i, 2, 1, 5).setValues([pcDeals[i]]);
    sheet.getRange(74 + i, 22).setValue(pcCallouts[i][0]);
  }

  SpreadsheetApp.flush();
  Logger.log('Done — wrote 14 rows total (Nashville + Punta Cana).');
}
