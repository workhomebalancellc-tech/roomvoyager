"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "../components/NavBar";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import { useAuth } from "../../contexts/AuthContext";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const destinations = [
  { name: "Cancún",       country: "Mexico",             photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=280&fit=crop&auto=format", tag: "🏖️ Beach",          iata: "CUN", kiwi: "cancun" },
  { name: "Miami",        country: "Florida, USA",        photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=400&h=280&fit=crop&auto=format", tag: "🌆 City",           iata: "MIA", kiwi: "miami-florida-united-states" },
  { name: "Las Vegas",    country: "Nevada, USA",         photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&h=280&fit=crop&auto=format", tag: "🎰 Entertainment",  iata: "LAS", kiwi: "las-vegas-nevada-united-states" },
  { name: "Paris",        country: "France",              photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=280&fit=crop&auto=format", tag: "🗼 Romance",         iata: "CDG", kiwi: "paris-ile-de-france-france" },
  { name: "Orlando",      country: "Florida, USA",        photo: "https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=400&h=280&fit=crop&auto=format", tag: "🎡 Family",          iata: "MCO", kiwi: "orlando-florida-united-states" },
  { name: "London",       country: "United Kingdom",      photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=280&fit=crop&auto=format", tag: "🎭 Culture",         iata: "LHR", kiwi: "london-england-united-kingdom" },
  { name: "Punta Cana",   country: "Dominican Republic",  photo: "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?w=400&h=280&fit=crop&auto=format", tag: "🌴 All-Inclusive",   iata: "PUJ", kiwi: "punta-cana-la-altagracia-dominican-republic" },
  { name: "New York",     country: "New York, USA",       photo: "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=400&h=280&fit=crop&auto=format", tag: "🗽 Iconic",          iata: "JFK", kiwi: "new-york-new-york-united-states" },
];

const tips = [
  { icon: "📅", title: "Book 6–8 weeks out",      desc: "Domestic flights are cheapest when booked 6–8 weeks before departure. International: 3–6 months." },
  { icon: "📆", title: "Fly Tuesday or Wednesday", desc: "Mid-week flights are consistently cheaper than weekends — sometimes by 20% or more." },
  { icon: "🔔", title: "Set a price alert",        desc: "Prices fluctuate daily. Use our search to track a route and book when the price drops." },
  { icon: "🛫", title: "Try nearby airports",      desc: "Flying into or out of a secondary airport nearby can save hundreds on the same trip." },
  { icon: "🔀", title: "Mix airlines",             desc: "Booking outbound on one airline and return on another can unlock cheaper combos." },
  { icon: "🎒", title: "Travel carry-on only",     desc: "Skipping checked bags saves $30–$60 each way on most budget and major carriers." },
];

/* ── IATA airport code → Kiwi city slug ─────────────────────── */
const IATA_TO_KIWI = {
  // ── Major hubs ──
  ATL:"atlanta-georgia-united-states", LAX:"los-angeles-california-united-states",
  ORD:"chicago-illinois-united-states", DFW:"dallas-texas-united-states",
  DEN:"denver-colorado-united-states", JFK:"john-f-kennedy-international-new-york-city-new-york-united-states",
  SFO:"san-francisco-california-united-states", SEA:"seattle-washington-united-states",
  LAS:"las-vegas-nevada-united-states", MCO:"orlando-florida-united-states",
  MIA:"miami-florida-united-states", CLT:"charlotte-north-carolina-united-states",
  EWR:"newark-new-jersey-united-states", PHX:"phoenix-arizona-united-states",
  IAH:"houston-texas-united-states", BOS:"boston-massachusetts-united-states",
  MSP:"minneapolis-minnesota-united-states", DTW:"detroit-michigan-united-states",
  FLL:"fort-lauderdale-florida-united-states", PHL:"philadelphia-pennsylvania-united-states",
  LGA:"laguardia-new-york-city-new-york-united-states", DCA:"washington-district-of-columbia-united-states",
  IAD:"washington-district-of-columbia-united-states", BWI:"baltimore-maryland-united-states",
  MDW:"chicago-illinois-united-states", SLC:"salt-lake-city-utah-united-states",
  SAN:"san-diego-california-united-states", PDX:"portland-oregon-united-states",
  HOU:"houston-texas-united-states", AUS:"austin-texas-united-states",
  MCI:"kansas-city-missouri-united-states", STL:"st-louis-missouri-united-states",
  BNA:"nashville-tennessee-united-states", RDU:"raleigh-north-carolina-united-states",
  MEM:"memphis-tennessee-united-states", CLE:"cleveland-ohio-united-states",
  PIT:"pittsburgh-pennsylvania-united-states", CMH:"columbus-ohio-united-states",
  IND:"indianapolis-indiana-united-states", MKE:"milwaukee-wisconsin-united-states",
  // ── Florida ──
  TPA:"tampa-florida-united-states", PIE:"st-petersburg-florida-united-states",
  RSW:"fort-myers-florida-united-states", JAX:"jacksonville-florida-united-states",
  PBI:"west-palm-beach-florida-united-states", SRQ:"sarasota-florida-united-states",
  DAB:"daytona-beach-florida-united-states", TLH:"tallahassee-florida-united-states",
  PNS:"pensacola-florida-united-states", VPS:"fort-walton-beach-florida-united-states",
  MLB:"melbourne-florida-united-states", SFB:"orlando-florida-united-states",
  EYW:"key-west-florida-united-states", GNV:"gainesville-florida-united-states",
  PGD:"punta-gorda-florida-united-states",
  // ── Southeast ──
  SAV:"savannah-georgia-united-states", CHS:"charleston-south-carolina-united-states",
  MSY:"new-orleans-louisiana-united-states", BHM:"birmingham-alabama-united-states",
  MOB:"mobile-alabama-united-states", HSV:"huntsville-alabama-united-states",
  GSP:"greenville-south-carolina-united-states", GSO:"greensboro-north-carolina-united-states",
  AVL:"asheville-north-carolina-united-states", ORF:"norfolk-virginia-united-states",
  RIC:"richmond-virginia-united-states", ILM:"wilmington-north-carolina-united-states",
  FAY:"fayetteville-north-carolina-united-states", OAJ:"jacksonville-north-carolina-united-states",
  TYS:"knoxville-tennessee-united-states", CHA:"chattanooga-tennessee-united-states",
  TRI:"bristol-tennessee-united-states", JAN:"jackson-mississippi-united-states",
  GPT:"gulfport-mississippi-united-states", BTR:"baton-rouge-louisiana-united-states",
  SHV:"shreveport-louisiana-united-states", LFT:"lafayette-louisiana-united-states",
  LEX:"lexington-kentucky-united-states", SDF:"louisville-kentucky-united-states",
  // ── Northeast ──
  BGR:"bangor-maine-united-states", PWM:"portland-maine-united-states",
  BTV:"burlington-vermont-united-states", MHT:"manchester-new-hampshire-united-states",
  PVD:"providence-rhode-island-united-states", BDL:"hartford-connecticut-united-states",
  ALB:"albany-new-york-united-states", SYR:"syracuse-new-york-united-states",
  ROC:"rochester-new-york-united-states", BUF:"buffalo-new-york-united-states",
  ABE:"allentown-pennsylvania-united-states", MDT:"harrisburg-pennsylvania-united-states",
  // ── Midwest ──
  DSM:"des-moines-iowa-united-states", CID:"cedar-rapids-iowa-united-states",
  OMA:"omaha-nebraska-united-states", LNK:"lincoln-nebraska-united-states",
  FSD:"sioux-falls-south-dakota-united-states", RAP:"rapid-city-south-dakota-united-states",
  FAR:"fargo-north-dakota-united-states", BIS:"bismarck-north-dakota-united-states",
  GRR:"grand-rapids-michigan-united-states", FNT:"flint-michigan-united-states",
  LAN:"lansing-michigan-united-states", TOL:"toledo-ohio-united-states",
  DAY:"dayton-ohio-united-states", CAK:"akron-ohio-united-states",
  EVV:"evansville-indiana-united-states", SBN:"south-bend-indiana-united-states",
  GRB:"green-bay-wisconsin-united-states", MSN:"madison-wisconsin-united-states",
  // ── Texas ──
  SAT:"san-antonio-texas-united-states", ELP:"el-paso-texas-united-states",
  CRP:"corpus-christi-texas-united-states", LBB:"lubbock-texas-united-states",
  AMA:"amarillo-texas-united-states", MAF:"midland-texas-united-states",
  HRL:"harlingen-texas-united-states", MFE:"mcallen-texas-united-states",
  BRO:"brownsville-texas-united-states", LRD:"laredo-texas-united-states",
  GRK:"killeen-texas-united-states", ACT:"waco-texas-united-states",
  TYR:"tyler-texas-united-states", ABI:"abilene-texas-united-states",
  // ── Southwest / Mountain ──
  TUS:"tucson-arizona-united-states", OKC:"oklahoma-city-oklahoma-united-states",
  TUL:"tulsa-oklahoma-united-states", ABQ:"albuquerque-new-mexico-united-states",
  RNO:"reno-nevada-united-states", BOI:"boise-idaho-united-states",
  GEG:"spokane-washington-united-states", ASE:"aspen-colorado-united-states",
  EGE:"eagle-vail-colorado-united-states", COS:"colorado-springs-colorado-united-states",
  GJT:"grand-junction-colorado-united-states", DRO:"durango-colorado-united-states",
  BZN:"bozeman-montana-united-states", BIL:"billings-montana-united-states",
  MSO:"missoula-montana-united-states", HLN:"helena-montana-united-states",
  GTF:"great-falls-montana-united-states", JAC:"jackson-wyoming-united-states",
  // ── California ──
  OAK:"oakland-california-united-states", SJC:"san-jose-california-united-states",
  SMF:"sacramento-california-united-states", SNA:"santa-ana-california-united-states",
  BUR:"burbank-california-united-states", LGB:"long-beach-california-united-states",
  ONT:"ontario-california-united-states", FAT:"fresno-california-united-states",
  SBA:"santa-barbara-california-united-states", SBP:"san-luis-obispo-california-united-states",
  PSP:"palm-springs-california-united-states", STS:"santa-rosa-california-united-states",
  RDD:"redding-california-united-states",
  // ── Pacific / Hawaii / Alaska ──
  HNL:"honolulu-hawaii-united-states", OGG:"kahului-hawaii-united-states",
  KOA:"kailua-hawaii-united-states", LIH:"lihue-kauai-hawaii-united-states",
  ITO:"hilo-hawaii-united-states", ANC:"anchorage-alaska-united-states",
  FAI:"fairbanks-alaska-united-states", JNU:"juneau-alaska-united-states",
  // ── Pacific Northwest ──
  GEG:"spokane-washington-united-states", BLI:"bellingham-washington-united-states",
  YKM:"yakima-washington-united-states", PSC:"pasco-washington-united-states",
  MFR:"medford-oregon-united-states", EUG:"eugene-oregon-united-states",
  RDM:"bend-oregon-united-states",
  // ── Mid-Atlantic / Virginia ──
  ROA:"roanoke-virginia-united-states", CHO:"charlottesville-virginia-united-states",
  PHF:"newport-news-virginia-united-states", SBY:"salisbury-maryland-united-states",
  // ── Arkansas ──
  XNA:"fayetteville-arkansas-united-states", LIT:"little-rock-arkansas-united-states",
  // ── Southeast additions ──
  MYR:"myrtle-beach-south-carolina-united-states", SGF:"springfield-missouri-united-states",
  EGE:"eagle-vail-colorado-united-states",
  // ── Indiana ──
  FWA:"fort-wayne-indiana-united-states",
  // ── Caribbean & Mexico ──
  CUN:"cancun-mexico", SJD:"cabo-san-lucas-baja-california-sur-mexico",
  PVR:"puerto-vallarta-jalisco-mexico", GDL:"guadalajara-jalisco-mexico",
  MEX:"mexico-city-mexico", ZIH:"ixtapa-mexico",
  CZM:"cozumel-mexico",
  MBJ:"montego-bay-jamaica", KIN:"kingston-jamaica",
  NAS:"nassau-bahamas",
  AUA:"oranjestad-aruba",
  PUJ:"punta-cana-dominican-republic", SDQ:"santo-domingo-dominican-republic",
  SJU:"san-juan-puerto-rico", BQN:"aguadilla-puerto-rico",
  SXM:"sint-maarten-sint-maarten",
  GCM:"grand-cayman-cayman-islands",
  HAV:"havana-cuba", VRA:"varadero-cuba",
  BGI:"bridgetown-barbados",
  UVF:"saint-lucia-st-lucia",
  GND:"grenada-grenada",
  // ── Canada ──
  YYZ:"toronto-canada", YVR:"vancouver-canada",
  YUL:"montreal-canada", YYC:"calgary-canada",
  YEG:"edmonton-canada", YOW:"ottawa-canada",
  // ── Europe ──
  LHR:"london-united-kingdom", LGW:"london-united-kingdom",
  CDG:"paris-france",
  FCO:"rome-italy", VCE:"venice-italy", FLR:"florence-italy", NAP:"naples-italy",
  AMS:"amsterdam-netherlands",
  BCN:"barcelona-spain", MAD:"madrid-spain",
  FRA:"frankfurt-germany", MUC:"munich-germany", DUS:"dusseldorf-germany", HAM:"hamburg-germany",
  DUB:"dublin-ireland",
  ATH:"athens-greece",
  LIS:"lisbon-portugal",
  MXP:"milan-italy",
  ZRH:"zurich-switzerland", GVA:"geneva-switzerland",
  VIE:"vienna-austria",
  CPH:"copenhagen-denmark",
  ARN:"stockholm-sweden",
  OSL:"oslo-norway",
  HEL:"helsinki-finland",
  KEF:"reykjavik-iceland",
  EDI:"edinburgh-united-kingdom", MAN:"manchester-united-kingdom",
  NCE:"nice-france",
  PRG:"prague-czech-republic",
  BRU:"brussels-belgium",
  BUD:"budapest-hungary",
  WAW:"warsaw-poland",
  // ── Middle East ──
  DXB:"dubai-united-arab-emirates",
  DOH:"doha-qatar",
  AUH:"abu-dhabi-united-arab-emirates",
  // ── Asia ──
  NRT:"tokyo-japan", HND:"tokyo-japan",
  KIX:"osaka-japan",
  ICN:"seoul-south-korea",
  HKG:"hong-kong-hong-kong",
  BKK:"bangkok-thailand",
  SIN:"singapore-singapore",
  KUL:"kuala-lumpur-malaysia",
  DEL:"new-delhi-india", BOM:"mumbai-india",
  // ── Pacific & Australia ──
  SYD:"sydney-australia", MEL:"melbourne-australia",
  BNE:"brisbane-australia",
  AKL:"auckland-new-zealand",
  NAN:"nadi-fiji",
  PPT:"papeete-french-polynesia",
  // ── Latin America ──
  GRU:"sao-paulo-brazil", GIG:"rio-de-janeiro-brazil",
  EZE:"buenos-aires-argentina",
  SCL:"santiago-chile",
  BOG:"bogota-colombia",
  LIM:"lima-peru",
  SJO:"san-jose-costa-rica",
  PTY:"panama-city-panama",
  BZE:"belize-city-belize",
  // ── Africa ──
  JNB:"johannesburg-south-africa",
  CPT:"cape-town-south-africa",
  CAI:"cairo-egypt",
};

/* ── City → Kiwi slug lookup ─────────────────────────────────── */
const CITY_TO_KIWI = {
  // ── International ──
  "cancún": "cancun-mexico", "cancun": "cancun-mexico",
  "paris": "paris-france",
  "london": "london-united-kingdom",
  "punta cana": "punta-cana-dominican-republic",
  "toronto": "toronto-canada",
  "vancouver": "vancouver-canada",
  "montreal": "montreal-canada",
  "mexico city": "mexico-city-mexico",
  "cabo san lucas": "cabo-san-lucas-mexico",
  "puerto vallarta": "puerto-vallarta-mexico",
  "rome": "rome-italy",
  "amsterdam": "amsterdam-netherlands",
  "barcelona": "barcelona-spain",
  "madrid": "madrid-spain",
  "frankfurt": "frankfurt-germany",
  "dubai": "dubai-united-arab-emirates",
  "tokyo": "tokyo-japan",
  "bangkok": "bangkok-thailand",
  "sydney": "sydney-australia",
  "nassau": "nassau-bahamas",
  "montego bay": "montego-bay-jamaica",
  "aruba": "oranjestad-aruba",
  "phuket": "phuket-thailand",
  "bali": "denpasar-indonesia",
  "lisbon": "lisbon-portugal",
  "athens": "athens-greece",
  "milan": "milan-italy",
  "vienna": "vienna-austria",
  "prague": "prague-czech-republic",
  // ── Major US hubs ──
  "new york": "new-york-new-york-united-states", "new york city": "new-york-new-york-united-states", "nyc": "new-york-new-york-united-states",
  "atlanta": "atlanta-georgia-united-states",
  "chicago": "chicago-illinois-united-states",
  "los angeles": "los-angeles-california-united-states", "la": "los-angeles-california-united-states",
  "dallas": "dallas-texas-united-states",
  "denver": "denver-colorado-united-states",
  "seattle": "seattle-washington-united-states",
  "san francisco": "san-francisco-california-united-states",
  "boston": "boston-massachusetts-united-states",
  "houston": "houston-texas-united-states",
  "phoenix": "phoenix-arizona-united-states",
  "miami": "miami-florida-united-states",
  "las vegas": "las-vegas-nevada-united-states",
  "orlando": "orlando-florida-united-states",
  "charlotte": "charlotte-north-carolina-united-states",
  "minneapolis": "minneapolis-minnesota-united-states",
  "detroit": "detroit-michigan-united-states",
  "fort lauderdale": "fort-lauderdale-florida-united-states",
  "philadelphia": "philadelphia-pennsylvania-united-states",
  "washington": "washington-district-of-columbia-united-states", "washington dc": "washington-district-of-columbia-united-states", "dc": "washington-district-of-columbia-united-states",
  "baltimore": "baltimore-maryland-united-states",
  "salt lake city": "salt-lake-city-utah-united-states",
  "san diego": "san-diego-california-united-states",
  "portland": "portland-oregon-united-states",
  "kansas city": "kansas-city-missouri-united-states",
  "st louis": "st-louis-missouri-united-states", "saint louis": "st-louis-missouri-united-states",
  "nashville": "nashville-tennessee-united-states",
  "raleigh": "raleigh-north-carolina-united-states",
  "memphis": "memphis-tennessee-united-states",
  "cleveland": "cleveland-ohio-united-states",
  "pittsburgh": "pittsburgh-pennsylvania-united-states",
  "columbus": "columbus-ohio-united-states",
  "indianapolis": "indianapolis-indiana-united-states",
  "milwaukee": "milwaukee-wisconsin-united-states",
  "austin": "austin-texas-united-states",
  // ── Florida ──
  "tampa": "tampa-florida-united-states", "tpa": "tampa-florida-united-states",
  "st petersburg": "st-petersburg-florida-united-states", "st. petersburg": "st-petersburg-florida-united-states", "saint petersburg": "st-petersburg-florida-united-states", "st pete": "st-petersburg-florida-united-states", "st. pete": "st-petersburg-florida-united-states", "clearwater": "st-petersburg-florida-united-states",
  "fort myers": "fort-myers-florida-united-states",
  "jacksonville": "jacksonville-florida-united-states",
  "west palm beach": "west-palm-beach-florida-united-states",
  "sarasota": "sarasota-florida-united-states",
  "daytona beach": "daytona-beach-florida-united-states",
  "tallahassee": "tallahassee-florida-united-states",
  "pensacola": "pensacola-florida-united-states",
  "fort walton beach": "fort-walton-beach-florida-united-states", "destin": "fort-walton-beach-florida-united-states",
  "melbourne": "melbourne-florida-united-states",
  "key west": "key-west-florida-united-states",
  "gainesville": "gainesville-florida-united-states",
  "punta gorda": "punta-gorda-florida-united-states",
  // ── Southeast ──
  "new orleans": "new-orleans-louisiana-united-states",
  "savannah": "savannah-georgia-united-states",
  "charleston": "charleston-south-carolina-united-states",
  "birmingham": "birmingham-alabama-united-states",
  "mobile": "mobile-alabama-united-states",
  "huntsville": "huntsville-alabama-united-states",
  "greenville": "greenville-south-carolina-united-states",
  "greensboro": "greensboro-north-carolina-united-states",
  "asheville": "asheville-north-carolina-united-states",
  "norfolk": "norfolk-virginia-united-states",
  "richmond": "richmond-virginia-united-states",
  "wilmington": "wilmington-north-carolina-united-states",
  "fayetteville": "fayetteville-north-carolina-united-states",
  "knoxville": "knoxville-tennessee-united-states",
  "chattanooga": "chattanooga-tennessee-united-states",
  "jackson": "jackson-mississippi-united-states",
  "gulfport": "gulfport-mississippi-united-states",
  "baton rouge": "baton-rouge-louisiana-united-states",
  "shreveport": "shreveport-louisiana-united-states",
  "lafayette": "lafayette-louisiana-united-states",
  "lexington": "lexington-kentucky-united-states",
  "louisville": "louisville-kentucky-united-states",
  // ── Northeast ──
  "bangor": "bangor-maine-united-states",
  "burlington": "burlington-vermont-united-states",
  "manchester": "manchester-new-hampshire-united-states",
  "providence": "providence-rhode-island-united-states",
  "hartford": "hartford-connecticut-united-states",
  "albany": "albany-new-york-united-states",
  "syracuse": "syracuse-new-york-united-states",
  "rochester": "rochester-new-york-united-states",
  "buffalo": "buffalo-new-york-united-states",
  "allentown": "allentown-pennsylvania-united-states",
  "harrisburg": "harrisburg-pennsylvania-united-states",
  // ── Midwest ──
  "des moines": "des-moines-iowa-united-states",
  "cedar rapids": "cedar-rapids-iowa-united-states",
  "omaha": "omaha-nebraska-united-states",
  "lincoln": "lincoln-nebraska-united-states",
  "sioux falls": "sioux-falls-south-dakota-united-states",
  "fargo": "fargo-north-dakota-united-states",
  "bismarck": "bismarck-north-dakota-united-states",
  "grand rapids": "grand-rapids-michigan-united-states",
  "toledo": "toledo-ohio-united-states",
  "dayton": "dayton-ohio-united-states",
  "akron": "akron-ohio-united-states",
  "south bend": "south-bend-indiana-united-states",
  "green bay": "green-bay-wisconsin-united-states",
  "madison": "madison-wisconsin-united-states",
  // ── Texas ──
  "san antonio": "san-antonio-texas-united-states",
  "el paso": "el-paso-texas-united-states",
  "corpus christi": "corpus-christi-texas-united-states",
  "lubbock": "lubbock-texas-united-states",
  "amarillo": "amarillo-texas-united-states",
  "midland": "midland-texas-united-states",
  "harlingen": "harlingen-texas-united-states",
  "mcallen": "mcallen-texas-united-states",
  "oklahoma city": "oklahoma-city-oklahoma-united-states", "okc": "oklahoma-city-oklahoma-united-states",
  "tulsa": "tulsa-oklahoma-united-states",
  // ── Southwest / Mountain ──
  "albuquerque": "albuquerque-new-mexico-united-states",
  "tucson": "tucson-arizona-united-states",
  "reno": "reno-nevada-united-states",
  "boise": "boise-idaho-united-states",
  "spokane": "spokane-washington-united-states",
  "bozeman": "bozeman-montana-united-states",
  "billings": "billings-montana-united-states",
  "missoula": "missoula-montana-united-states",
  "jackson hole": "jackson-wyoming-united-states", "jackson": "jackson-wyoming-united-states",
  "colorado springs": "colorado-springs-colorado-united-states",
  "aspen": "aspen-colorado-united-states",
  "durango": "durango-colorado-united-states",
  // ── California ──
  "oakland": "oakland-california-united-states",
  "san jose": "san-jose-california-united-states",
  "sacramento": "sacramento-california-united-states",
  "santa ana": "santa-ana-california-united-states",
  "burbank": "burbank-california-united-states",
  "long beach": "long-beach-california-united-states",
  "ontario": "ontario-california-united-states",
  "fresno": "fresno-california-united-states",
  "palm springs": "palm-springs-california-united-states",
  // ── Hawaii & Alaska ──
  "honolulu": "honolulu-hawaii-united-states",
  "maui": "kahului-maui-hawaii-united-states", "kahului": "kahului-maui-hawaii-united-states",
  "kona": "kailua-kona-hawaii-united-states", "kailua kona": "kailua-kona-hawaii-united-states",
  "lihue": "lihue-hawaii-united-states", "kauai": "lihue-hawaii-united-states",
  "anchorage": "anchorage-alaska-united-states",
  "fairbanks": "fairbanks-alaska-united-states",
  "juneau": "juneau-alaska-united-states",
  // ── Arkansas / Indiana ──
  "little rock": "little-rock-arkansas-united-states",
  "roanoke": "roanoke-virginia-united-states",
  "fort wayne": "fort-wayne-indiana-united-states",
  // ── No-airport cities → nearest airport ──
  // Florida
  "kissimmee": "orlando-florida-united-states",
  "celebration": "orlando-florida-united-states",
  "lake buena vista": "orlando-florida-united-states",
  "naples": "fort-myers-florida-united-states",
  "marco island": "fort-myers-florida-united-states",
  "bonita springs": "fort-myers-florida-united-states",
  "cape coral": "fort-myers-florida-united-states",
  "boca raton": "fort-lauderdale-florida-united-states",
  "pompano beach": "fort-lauderdale-florida-united-states",
  "delray beach": "west-palm-beach-florida-united-states",
  "boynton beach": "west-palm-beach-florida-united-states",
  "palm beach": "west-palm-beach-florida-united-states",
  "vero beach": "west-palm-beach-florida-united-states",
  "ocala": "orlando-florida-united-states",
  "the villages": "orlando-florida-united-states",
  // Virginia Beach / Hampton Roads
  "virginia beach": "norfolk-virginia-united-states",
  "hampton": "norfolk-virginia-united-states",
  "newport news": "norfolk-virginia-united-states",
  "chesapeake": "norfolk-virginia-united-states",
  // DC suburbs
  "arlington": "washington-district-of-columbia-united-states",
  "alexandria": "washington-district-of-columbia-united-states",
  "bethesda": "washington-district-of-columbia-united-states",
  "mclean": "washington-district-of-columbia-united-states",
  "falls church": "washington-district-of-columbia-united-states",
  "reston": "washington-district-of-columbia-united-states",
  "tysons": "washington-district-of-columbia-united-states",
  // NYC suburbs
  "hoboken": "newark-new-jersey-united-states",
  "jersey city": "newark-new-jersey-united-states",
  "newark": "newark-new-jersey-united-states",
  "brooklyn": "new-york-new-york-united-states",
  "queens": "new-york-new-york-united-states",
  "bronx": "new-york-new-york-united-states",
  "staten island": "new-york-new-york-united-states",
  "stamford": "new-york-new-york-united-states",
  // DFW / Texas
  "fort worth": "dallas-texas-united-states",
  "arlington tx": "dallas-texas-united-states",
  "plano": "dallas-texas-united-states",
  "irving": "dallas-texas-united-states",
  "frisco": "dallas-texas-united-states",
  "mckinney": "dallas-texas-united-states",
  // Phoenix metro
  "scottsdale": "phoenix-arizona-united-states",
  "tempe": "phoenix-arizona-united-states",
  "mesa": "phoenix-arizona-united-states",
  "chandler": "phoenix-arizona-united-states",
  "gilbert": "phoenix-arizona-united-states",
  "glendale": "phoenix-arizona-united-states",
  "sedona": "phoenix-arizona-united-states",
  "grand canyon": "phoenix-arizona-united-states",
  "flagstaff": "phoenix-arizona-united-states",
  // Chicago suburbs
  "evanston": "chicago-illinois-united-states",
  "naperville": "chicago-illinois-united-states",
  "aurora": "chicago-illinois-united-states",
  "schaumburg": "chicago-illinois-united-states",
  "oak park": "chicago-illinois-united-states",
  "rosemont": "chicago-illinois-united-states",
  // Los Angeles area
  "anaheim": "los-angeles-california-united-states",
  "beverly hills": "los-angeles-california-united-states",
  "santa monica": "los-angeles-california-united-states",
  "pasadena": "los-angeles-california-united-states",
  "malibu": "los-angeles-california-united-states",
  "torrance": "los-angeles-california-united-states",
  "irvine": "santa-ana-california-united-states",
  "laguna beach": "santa-ana-california-united-states",
  "newport beach": "santa-ana-california-united-states",
  // Bay Area
  "napa": "san-francisco-california-united-states",
  "napa valley": "san-francisco-california-united-states",
  "santa cruz": "san-jose-california-united-states",
  "palo alto": "san-francisco-california-united-states",
  "san mateo": "san-francisco-california-united-states",
  // Tennessee vacation
  "gatlinburg": "knoxville-tennessee-united-states",
  "pigeon forge": "knoxville-tennessee-united-states",
  "sevierville": "knoxville-tennessee-united-states",
  // Carolinas
  "myrtle beach": "myrtle-beach-south-carolina-united-states",
  "hilton head": "savannah-georgia-united-states",
  "outer banks": "norfolk-virginia-united-states",
  "wilmington nc": "wilmington-north-carolina-united-states",
  // New England
  "cape cod": "boston-massachusetts-united-states",
  "martha's vineyard": "boston-massachusetts-united-states",
  "nantucket": "boston-massachusetts-united-states",
  "newport": "providence-rhode-island-united-states",
  // Mountains / ski
  "lake tahoe": "reno-nevada-united-states",
  "vail": "eagle-vail-colorado-united-states",
  "beaver creek": "eagle-vail-colorado-united-states",
  "breckenridge": "denver-colorado-united-states",
  "steamboat springs": "denver-colorado-united-states",
  "telluride": "durango-colorado-united-states",
  "park city": "salt-lake-city-utah-united-states",
  "moab": "salt-lake-city-utah-united-states",
  "zion": "salt-lake-city-utah-united-states",
  "bryce canyon": "salt-lake-city-utah-united-states",
  // Missouri
  "branson": "springfield-missouri-united-states",
  // Maryland / Delaware beach
  "ocean city md": "baltimore-maryland-united-states",
  "rehoboth beach": "baltimore-maryland-united-states",
  // Georgia
  "savannah beach": "savannah-georgia-united-states",
  "tybee island": "savannah-georgia-united-states",
};
// US state abbreviation → full name (for building Kiwi slugs)
const ABBR_TO_STATE = {
  AL:"alabama",AK:"alaska",AZ:"arizona",AR:"arkansas",CA:"california",
  CO:"colorado",CT:"connecticut",DE:"delaware",FL:"florida",GA:"georgia",
  HI:"hawaii",ID:"idaho",IL:"illinois",IN:"indiana",IA:"iowa",KS:"kansas",
  KY:"kentucky",LA:"louisiana",ME:"maine",MD:"maryland",MA:"massachusetts",
  MI:"michigan",MN:"minnesota",MS:"mississippi",MO:"missouri",MT:"montana",
  NE:"nebraska",NV:"nevada",NH:"new-hampshire",NJ:"new-jersey",NM:"new-mexico",
  NY:"new-york",NC:"north-carolina",ND:"north-dakota",OH:"ohio",OK:"oklahoma",
  OR:"oregon",PA:"pennsylvania",RI:"rhode-island",SC:"south-carolina",
  SD:"south-dakota",TN:"tennessee",TX:"texas",UT:"utah",VT:"vermont",
  VA:"virginia",WA:"washington",WV:"west-virginia",WI:"wisconsin",WY:"wyoming",
  DC:"district-of-columbia",PR:"puerto-rico",
};
function resolveKiwi(cityName) {
  if (!cityName) return null;
  const trimmed = cityName.trim();
  // Try IATA code first (2–4 letter string, no spaces)
  if (/^[A-Za-z]{2,4}$/.test(trimmed)) {
    const iata = IATA_TO_KIWI[trimmed.toUpperCase()];
    if (iata) return iata;
  }
  // Try full string in city map
  const full = CITY_TO_KIWI[trimmed.toLowerCase()];
  if (full) return full;
  // Try city portion before comma
  const parts = trimmed.split(",");
  const cityOnly = parts[0].trim().toLowerCase();
  const fromCity = CITY_TO_KIWI[cityOnly];
  if (fromCity) return fromCity;
  // Build slug from "City, ST" or "City, Country" — gives Kiwi a full slug to resolve
  if (parts.length >= 2) {
    const citySlug = cityOnly.replace(/[^a-z0-9]+/g, "-");
    const qualifier = parts[1].trim().toUpperCase();
    const stateFull = ABBR_TO_STATE[qualifier];
    if (stateFull) return `${citySlug}-${stateFull}-united-states`;
    const countrySlug = parts[1].trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `${citySlug}-${countrySlug}`;
  }
  return null;
}
// Build a Kiwi slug from an autocomplete suggestion {name, sub} where sub is "GA" or "France"
function buildKiwiSlugFromSugg(name, sub) {
  if (!name) return null;
  const city = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  if (!sub) return city;
  const subTrimmed = sub.trim();
  // US state abbreviation → "city-state-united-states"
  const stateFull = ABBR_TO_STATE[subTrimmed.toUpperCase()];
  if (stateFull) return `${city}-${stateFull}-united-states`;
  // International — "city-country"
  const countrySlug = subTrimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${city}-${countrySlug}`;
}
function toKiwiSlug(name) {
  if (!name?.trim()) return null;
  return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* ── input style helper ─────────────────────────────────────────── */
const inp = {
  width: "100%", padding: "10px 14px",
  border: "1.5px solid #D1D5DB", borderRadius: "8px",
  fontSize: "14px", color: "#111827", background: "#fff",
  outline: "none", boxSizing: "border-box",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

function FlightsContent() {
  const searchParams = useSearchParams();
  const initialTo   = searchParams.get("to")   || "";
  const initialFrom = searchParams.get("from") || searchParams.get("q") || "";

  const [tripType, setTripType] = useState("round");
  const [from,     setFrom]     = useState(initialFrom);
  const [to,       setTo]       = useState(initialTo);
  const [depart,   setDepart]   = useState("");
  const [ret,      setRet]      = useState("");
  const [pax,      setPax]      = useState(1);
  // IATA codes — seeded from URL params via lookup, updated on card click or autocomplete pick
  const [toKiwi,   setToKiwi]   = useState(() => resolveKiwi(initialTo) || "");
  const [fromKiwi, setFromKiwi] = useState(() => resolveKiwi(initialFrom) || "");
  const [toFlash,  setToFlash]  = useState(false);
  const [mounted,  setMounted]  = useState(false);

  // Autocomplete state — From field
  const [fromSugg,      setFromSugg]      = useState([]);
  const [showFromSugg,  setShowFromSugg]  = useState(false);
  const [loadingFrom,   setLoadingFrom]   = useState(false);
  // Autocomplete state — To field
  const [toSugg,        setToSugg]        = useState([]);
  const [showToSugg,    setShowToSugg]    = useState(false);
  const [loadingTo,     setLoadingTo]     = useState(false);

  const { user } = useAuth();
  const toInputRef      = useRef(null);
  const fromDebounceRef = useRef(null);
  const toDebounceRef   = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleDepartChange(val) {
    setDepart(val);
    if (val) {
      const d = new Date(val + "T12:00:00");
      d.setDate(d.getDate() + 7);
      const next = d.toISOString().split("T")[0];
      if (!ret || ret <= val) setRet(next);
    }
  }

  function handleFromChange(val) {
    setFrom(val);
    setFromKiwi(resolveKiwi(val) || "");
    if (fromDebounceRef.current) clearTimeout(fromDebounceRef.current);
    if (!val || val.length < 2) { setFromSugg([]); setShowFromSugg(false); return; }
    setLoadingFrom(true);
    fromDebounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(`/api/cities?q=${encodeURIComponent(val)}`);
        const data = await res.json();
        setFromSugg(data); setShowFromSugg(data.length > 0);
      } catch { setFromSugg([]); setShowFromSugg(false); }
      finally { setLoadingFrom(false); }
    }, 300);
  }

  function handleToChange(val) {
    setTo(val);
    setToKiwi(resolveKiwi(val) || "");
    if (toDebounceRef.current) clearTimeout(toDebounceRef.current);
    if (!val || val.length < 2) { setToSugg([]); setShowToSugg(false); return; }
    setLoadingTo(true);
    toDebounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(`/api/cities?q=${encodeURIComponent(val)}`);
        const data = await res.json();
        setToSugg(data); setShowToSugg(data.length > 0);
      } catch { setToSugg([]); setShowToSugg(false); }
      finally { setLoadingTo(false); }
    }, 300);
  }

  function handleSearch(e) {
    e?.preventDefault();
    const slugFrom = fromKiwi || resolveKiwi(from) || toKiwiSlug(from.split(",")[0].trim()) || "";
    const slugTo   = toKiwi   || resolveKiwi(to)   || toKiwiSlug(to)   || "";
    let kiwiUrl;
    if (!slugFrom && !slugTo) {
      // Nothing resolved — send to Kiwi homepage
      kiwiUrl = "https://www.kiwi.com/en/";
    } else {
      const params = new URLSearchParams();
      if (slugFrom) params.set("origin", slugFrom);
      if (slugTo)   params.set("destination", slugTo);
      if (depart) params.set("outboundDate", depart);
      if (tripType === "round" && ret) params.set("inboundDate", ret);
      if (pax > 1) params.set("adults", String(pax));
      kiwiUrl = `https://www.kiwi.com/en/?${params.toString()}`;
    }
    const tpUrl = `https://c111.travelpayouts.com/click?shmarker=722477&promo_id=3791&source_type=customlink&type=click&custom_url=${encodeURIComponent(kiwiUrl)}`;
    const dest = `/redirect?to=${encodeURIComponent(tpUrl)}&partner=Kiwi.com&product=flight`;

    // Fire-and-forget: log this search click for logged-in users
    if (user?.uid) {
      fetch("/api/track/flight-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid:      user.uid,
          email:    user.email    || "",
          name:     user.displayName || "",
          from,
          to,
          fromKiwi: slugFrom,
          toKiwi:   slugTo,
          depart:   d,
          ret:      r,
          pax,
        }),
      }).catch(() => {}); // never block navigation
    }

    window.open(dest, "_blank");
  }

  function pickDest(dest) {
    setTo(dest.name);
    setToKiwi(dest.kiwi || resolveKiwi(dest.name) || "");
    setToSugg([]); setShowToSugg(false);
    setToFlash(true);
    if (toInputRef.current) toInputRef.current.value = dest.name;
    setTimeout(() => setToFlash(false), 1800);
    setTimeout(() => toInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="flights" />
      <PromoBanner />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=500&fit=crop&auto=format"
          alt="Airplane wing above clouds"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.60) 0%, rgba(0,15,60,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Powered by Kiwi.com</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find the best flight deals</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Search 500+ airlines — no hidden fees, earn rewards on every booking.</p>
        </div>
      </div>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[
            ["🔍", "500+ airlines compared"],
            ["💰", "No hidden fees"],
            ["🏆", "Earn 5 pts per $1"],
            ["🔄", "Free cancellation options"],
            ["📱", "Book in under 2 minutes"],
          ].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#374151" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SEARCH FORM ──────────────────────────────────────────────── */}
      <div style={{ background: NAVY, padding: "32px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <form onSubmit={handleSearch} style={{ background: "#fff", borderRadius: "18px", padding: "28px 28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }} noValidate>
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              {["round", "oneway"].map(t => (
                <button key={t} type="button" onClick={() => setTripType(t)}
                  style={{ padding: "7px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: "600", cursor: "pointer", border: "none", background: tripType === t ? NAVY : "#F3F4F6", color: tripType === t ? "#fff" : "#374151", transition: "background 0.15s" }}>
                  {t === "round" ? "Round Trip" : "One Way"}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
              {/* FROM with autocomplete */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>From</label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="City or airport (e.g. New York)" value={from}
                    onChange={e => handleFromChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowFromSugg(false), 160)}
                    onFocus={() => from.length >= 2 && fromSugg.length > 0 && setShowFromSugg(true)}
                    style={inp} />
                  {(showFromSugg || loadingFrom) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", zIndex: 200, marginTop: "3px", overflow: "hidden" }}>
                      {loadingFrom && fromSugg.length === 0
                        ? <div style={{ padding: "10px 12px", fontSize: "12px", color: "#9CA3AF" }}>Searching…</div>
                        : fromSugg.map((c, i) => (
                          <div key={i}
                            onPointerDown={() => { setFrom(c.label || c.name); setFromKiwi(resolveKiwi(c.name) || buildKiwiSlugFromSugg(c.name, c.sub) || ""); setShowFromSugg(false); }}
                            style={{ padding: "9px 12px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < fromSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ fontSize: "13px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{c.sub}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
              {/* TO with autocomplete */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>To</label>
                <div style={{ position: "relative" }}>
                  <input ref={toInputRef} type="text" placeholder="City or airport (e.g. Cancún)" value={to}
                    onChange={e => handleToChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowToSugg(false), 160)}
                    onFocus={() => to.length >= 2 && toSugg.length > 0 && setShowToSugg(true)}
                    style={{ ...inp, borderColor: toFlash ? ORANGE : "#D1D5DB", transition: "border-color 0.3s" }} />
                  {(showToSugg || loadingTo) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", zIndex: 200, marginTop: "3px", overflow: "hidden" }}>
                      {loadingTo && toSugg.length === 0
                        ? <div style={{ padding: "10px 12px", fontSize: "12px", color: "#9CA3AF" }}>Searching…</div>
                        : toSugg.map((c, i) => (
                          <div key={i}
                            onPointerDown={() => { setTo(c.label || c.name); setToKiwi(resolveKiwi(c.name) || buildKiwiSlugFromSugg(c.name, c.sub) || ""); setShowToSugg(false); }}
                            style={{ padding: "9px 12px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < toSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ fontSize: "13px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{c.sub}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px", alignItems: "flex-end" }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Depart</label>
                <input type="date" value={depart} min={mounted ? new Date().toISOString().split("T")[0] : ""} onChange={e => handleDepartChange(e.target.value)} style={inp} />
              </div>
              {tripType === "round" && (
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Return</label>
                  <input type="date" value={ret} min={depart || (mounted ? new Date().toISOString().split("T")[0] : "")} onChange={e => setRet(e.target.value)} style={inp} />
                </div>
              )}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>Passengers</label>
                <select value={pax} onChange={e => setPax(Number(e.target.value))} style={{ ...inp, cursor: "pointer" }}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>)}
                </select>
              </div>
              <button type="button" onClick={handleSearch} style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "15px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,59,149,0.3)", height: "42px", alignSelf: "flex-end", width: "100%" }}>
                Search ✈️
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── POPULAR DESTINATIONS ─────────────────────────────────────── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 32px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Explore the world</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Popular flight destinations</h2>
        <p style={{ color: "#6B7280", fontSize: "14px", margin: "0 0 28px" }}>Click a destination to pre-fill your search</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "16px" }}>
          {destinations.map(dest => (
            <button type="button" key={dest.name} onClick={() => pickDest(dest)}
              style={{ borderRadius: "14px", overflow: "hidden", position: "relative", height: "180px", cursor: "pointer", display: "block", border: "none", padding: 0, textAlign: "left", width: "100%" }}
              onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
            >
              <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 60%)" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                <span style={{ background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 8px", borderRadius: "999px", backdropFilter: "blur(4px)" }}>{dest.tag}</span>
              </div>
              <div style={{ position: "absolute", bottom: "14px", left: "14px" }}>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "16px", margin: "0 0 2px", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{dest.name}</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", margin: 0 }}>{dest.country}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── TIPS ─────────────────────────────────────────────────────── */}
      <div style={{ background: "#fff", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", padding: "56px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Save more</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 28px" }}>Tips for finding cheap flights</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {tips.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", padding: "20px", background: LIGHT_BLUE, borderRadius: "14px" }}>
                <span style={{ fontSize: "28px", flexShrink: 0 }}>{tip.icon}</span>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "700", color: NAVY, margin: "0 0 6px" }}>{tip.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", margin: 0, lineHeight: 1.6 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY BOOK WITH US ─────────────────────────────────────────── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Why RoomVoyager</p>
        <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 28px" }}>More than just a flight search</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[
            { icon: "🏆", title: "Earn real cash back",       desc: "5 Rewards points per $1 on flights — redeem for real money via Zelle, Cash App, or Venmo." },
            { icon: "🔍", title: "500+ airlines compared",    desc: "We search major carriers, budget airlines, and everything in between to find the best price." },
            { icon: "🔄", title: "Flexible booking options",  desc: "Filter for free cancellation fares — book with confidence and change your plans if you need to." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px", flex: "1 1 220px", maxWidth: "320px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <p style={{ fontSize: "15px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>{item.title}</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── REWARDS CTA ──────────────────────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", margin: "0 24px 56px", borderRadius: "20px" }}>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&h=220&fit=crop&auto=format" alt="Airplane wing" style={{ width: "100%", height: isMobile ? "260px" : "180px", objectFit: "cover", borderRadius: "20px" }} />
        <div style={{ position: "absolute", inset: 0, background: `${NAVY}e0`, borderRadius: "20px" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: isMobile ? "center" : "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", padding: isMobile ? "28px 24px 32px" : "0 40px", gap: "20px" }}>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#fff", margin: "0 0 6px" }}>Earn rewards on every flight you book</h3>
            <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>5 points per $1 · Redeem for real cash · No blackout dates</p>
          </div>
          <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: isMobile ? "14px 28px" : "12px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(255,102,0,0.4)", alignSelf: isMobile ? "stretch" : "auto", textAlign: "center" }}>
            Join Rewards free →
          </a>
        </div>
      </div>

    </div>
  );
}

export default function FlightsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <FlightsContent />
      </Suspense>
      <FloatingChat />
      <Footer />
    </>
  );
}
