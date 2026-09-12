export interface VastuZone {
  id: string;
  name: string;
  sanskrit: string;
  deity: string;
  element: 'Water' | 'Fire' | 'Earth' | 'Air' | 'Space';
  color: string;
  directionDeg: number; // 0 = North, 90 = East, 180 = South, 270 = West
  gridRow: number; // 0 to 2
  gridCol: number; // 0 to 2
  attributes: string;
  idealRooms: string[];
  acceptableRooms: string[];
  strictlyAvoid: string[];
  architecturalTips: string;
  doshasAndRemedies: string;
}

export interface VastuRoom {
  id: string;
  name: string;
  category: 'Living & Rest' | 'Pooja & Spirituality' | 'Services & Utilities' | 'Circulation & Entry';
  icon: string;
  description: string;
  bestZones: string[]; // zone IDs
  acceptableZones: string[];
  avoidZones: string[];
  placementRule: string;
  bengaluruBylawNote?: string;
}

export interface PlotOrientation {
  facing: 'North' | 'East' | 'South' | 'West';
  rulingDeity: string;
  auspiciousness: 'Extremely Auspicious' | 'Highly Auspicious' | 'Auspicious with Design Care' | 'Requires Specific Planning';
  overview: string;
  entranceZones: string;
  keyGuidelines: string[];
  idealFor: string;
}

export const VASTU_ZONES: VastuZone[] = [
  {
    id: 'north-west',
    name: 'North-West',
    sanskrit: 'Vayuvya',
    deity: 'Lord Vayu (Wind)',
    element: 'Air',
    color: '#3B82F6',
    directionDeg: 315,
    gridRow: 0,
    gridCol: 0,
    attributes: 'Movement, change, social relations, guests, and cash liquidity.',
    idealRooms: ['Guest Bedroom', 'Children Bedroom', 'Pantry / Food Storage', 'Septic Tank', 'Vehicle Parking'],
    acceptableRooms: ['Dining Hall', 'Living Room', 'Bathrooms / Powder Room'],
    strictlyAvoid: ['Master Bedroom', 'Pooja Room', 'Kitchen (Gas Stove)'],
    architecturalTips: 'Keep windows operable for cross ventilation. Optimal zone for overhead utilities or septic tanks as per BBMP setback layout.',
    doshasAndRemedies: 'A heavy master bedroom here creates restless sleep. Remedy: Place a brass wind chime or Vastu copper pyramid in the North-West ceiling.'
  },
  {
    id: 'north',
    name: 'North',
    sanskrit: 'Kubera / Uttara',
    deity: 'Lord Kubera (Wealth)',
    element: 'Water',
    color: '#0284C7',
    directionDeg: 0,
    gridRow: 0,
    gridCol: 1,
    attributes: 'Wealth accumulation, career advancements, business success, and incoming opportunities.',
    idealRooms: ['Living Room / Family Hall', 'Open Balcony', 'Main Entrance Gate', 'Underground Sump', 'Home Office'],
    acceptableRooms: ['Pooja Area', 'Study Room', 'Garden / Open Courtyard'],
    strictlyAvoid: ['Toilets / Septic Tank', 'Heavy Storage / Junkyard', 'Master Bedroom (Heavy)'],
    architecturalTips: 'Keep maximum open setbacks towards the North in Bengaluru plots to invite positive magnetic currents and abundant diffused daylight.',
    doshasAndRemedies: 'Toilets in North restrict financial growth. Remedy: Ensure North boundary walls are slightly lower than South/West walls.'
  },
  {
    id: 'north-east',
    name: 'North-East',
    sanskrit: 'Eshanya',
    deity: 'Lord Shiva / Eshanya (Divine Consciousness)',
    element: 'Water',
    color: '#06B6D4',
    directionDeg: 45,
    gridRow: 0,
    gridCol: 2,
    attributes: 'Spiritual upliftment, mental clarity, enlightenment, family harmony, and good health.',
    idealRooms: ['Pooja Room / Mandir', 'Meditation Room', 'Underground Water Sump', 'Borewell', 'Front Garden'],
    acceptableRooms: ['Main Entrance (3rd/4th Pada)', 'Light Study Corner'],
    strictlyAvoid: ['Kitchen', 'Toilets / Bathrooms', 'Overhead Water Tank', 'Staircase', 'Master Bedroom'],
    architecturalTips: 'Most sacred zone. Keep it lowest in plinth level and lightest in structural dead-load. Borewells and sumps here guarantee uninterrupted prosperity.',
    doshasAndRemedies: 'A kitchen or toilet here is considered a major Vastu Dosha. Remedy: Neutralize minor deviations with Eshanya crystal water urns and maximum natural light.'
  },
  {
    id: 'west',
    name: 'West',
    sanskrit: 'Varuna / Paschima',
    deity: 'Lord Varuna (Rain & Cosmos)',
    element: 'Space',
    color: '#8B5CF6',
    directionDeg: 270,
    gridRow: 1,
    gridCol: 0,
    attributes: 'Prosperity, social reputation, stability, structured learning, and profitable investments.',
    idealRooms: ['Children Bedroom', 'Study Room', 'Dining Hall', 'Overhead Water Tank (SW corner)'],
    acceptableRooms: ['Guest Bedroom', 'Staircase', 'Living Area'],
    strictlyAvoid: ['Underground Sump', 'Borewell', 'Pooja Room'],
    architecturalTips: 'Provides great afternoon thermal buffering for Bengaluru climate. Ideal for study desks where students face East while sitting.',
    doshasAndRemedies: 'Underground sumps in West cause financial drain. Remedy: Install lead helix or brass sun symbol on West walls.'
  },
  {
    id: 'center',
    name: 'Center',
    sanskrit: 'Brahmasthan',
    deity: 'Lord Brahma (Creator)',
    element: 'Space',
    color: '#F59E0B',
    directionDeg: -1, // Center
    gridRow: 1,
    gridCol: 1,
    attributes: 'Cosmic heartbeat of the home, life force (*Prana*), harmony, and equilibrium.',
    idealRooms: ['Open Skylight / Courtyard', 'Central Living Foyer', 'Atrium', 'Dining Lobby'],
    acceptableRooms: ['Corridor / Passage'],
    strictlyAvoid: ['Columns / Heavy Pillars', 'Toilets', 'Kitchen', 'Staircase', 'Underground Tanks'],
    architecturalTips: 'In modern Bengaluru architectural duplexes, an open skylight or double-height living lobby over Brahmasthan creates supreme spatial energy.',
    doshasAndRemedies: 'A structural column directly in Brahmasthan blocks family progress. Remedy: Use round decorative covers and copper energy plates.'
  },
  {
    id: 'east',
    name: 'East',
    sanskrit: 'Indra / Purva',
    deity: 'Lord Indra & Surya (Sun God)',
    element: 'Air',
    color: '#10B981',
    directionDeg: 90,
    gridRow: 1,
    gridCol: 2,
    attributes: 'Vitality, leadership, robust immune system, honor, and early morning solar health benefits.',
    idealRooms: ['Main Entrance Door', 'Living Hall', 'Study Room', 'Open Verandah', 'Balcony'],
    acceptableRooms: ['Pooja Room', 'Underground Sump', 'Dining Room'],
    strictlyAvoid: ['Master Bedroom', 'Septic Tank', 'Heavy Wardrobes / Lockers'],
    architecturalTips: 'Plan large floor-to-ceiling glass windows or front balconies facing East to capture invigorating UV-A morning rays.',
    doshasAndRemedies: 'Blocked or windowless East leads to lethargy. Remedy: Add Surya Yantra and optimize morning sunlight penetration.'
  },
  {
    id: 'south-west',
    name: 'South-West',
    sanskrit: 'Nairuthi',
    deity: 'Lord Nirriti / Prithvi (Earth God)',
    element: 'Earth',
    color: '#C8860A',
    directionDeg: 225,
    gridRow: 2,
    gridCol: 0,
    attributes: 'Commanding authority, relationship stability, financial retention, and physical longevity.',
    idealRooms: ['Master Bedroom', 'Cash Locker / Heavy Safe', 'Highest Roof Massing', 'Overhead Water Tank'],
    acceptableRooms: ['Wardrobe Dressing Suite', 'Upper Floor Staircase'],
    strictlyAvoid: ['Main Entrance Gate', 'Underground Water Sump', 'Borewell', 'Kitchen', 'Pooja Room', 'Septic Tank'],
    architecturalTips: 'Should be the heaviest, tallest, and most solid corner of your home. Sleeping with head towards South/East here provides deepest REM sleep.',
    doshasAndRemedies: 'A borewell or entrance here causes severe financial and health instability. Remedy: Seal underground cuts, install heavy brass anchors and lead energy pyramids.'
  },
  {
    id: 'south',
    name: 'South',
    sanskrit: 'Yama / Dakshina',
    deity: 'Lord Yama (Justice & Discipline)',
    element: 'Earth',
    color: '#EA580C',
    directionDeg: 180,
    gridRow: 2,
    gridCol: 1,
    attributes: 'Physical endurance, legal triumphs, reputation, discipline, and emotional firmness.',
    idealRooms: ['Bedroom', 'Staircase Block', 'Storage of Durable Goods', 'High Boundary Wall'],
    acceptableRooms: ['Office', 'Dining Room'],
    strictlyAvoid: ['Borewell', 'Underground Water Sump', 'Pooja Room', 'Low Foundation'],
    architecturalTips: 'In Bengaluru, keeping South walls thick (9-inch solid concrete or wirecut brick) insulates against harsh midday solar heat.',
    doshasAndRemedies: 'Borewell in South creates legal friction. Remedy: Paint South boundary terracotta/earth brown and keep ground level higher.'
  },
  {
    id: 'south-east',
    name: 'South-East',
    sanskrit: 'Agneya',
    deity: 'Lord Agni (Fire God)',
    element: 'Fire',
    color: '#DC2626',
    directionDeg: 135,
    gridRow: 2,
    gridCol: 2,
    attributes: 'Metabolic fire, passion, wealth digestion, cooking purity, and energetic willpower.',
    idealRooms: ['Kitchen (Cook facing East)', 'Electrical Meter Board', 'Inverter / Generator', 'Solar Inverter Hub', 'Geysers'],
    acceptableRooms: ['Dining Area', 'Guest Bedroom (Secondary)'],
    strictlyAvoid: ['Master Bedroom', 'Underground Water Sump', 'Borewell', 'Pooja Room', 'Bathrooms / Septic Tank'],
    architecturalTips: 'Place the cooking gas hob in South-East so the chef faces the rising morning sun (East) during preparation. Fire & water must never clash.',
    doshasAndRemedies: 'Underground water sump in South-East extinguishes fire energy, causing digestive or financial issues. Remedy: Relocate water or use copper Agni shields.'
  }
];

export const VASTU_ROOMS: VastuRoom[] = [
  {
    id: 'pooja-room',
    name: 'Pooja Room / Mandir',
    category: 'Pooja & Spirituality',
    icon: '🪔',
    description: 'Sacred energy sanctuary for prayer, meditation, and spiritual rejuvenation.',
    bestZones: ['north-east'],
    acceptableZones: ['north', 'east'],
    avoidZones: ['south-west', 'south-east', 'south', 'north-west', 'center'],
    placementRule: 'Idols should face West so devotees face East while praying. Mandir must never share a wall with a bathroom or be located under a staircase.',
    bengaluruBylawNote: 'Ensure North-East setback is open to sky to maximize morning solar illumination into the prayer room.'
  },
  {
    id: 'kitchen',
    name: 'Kitchen (Cooking Stove)',
    category: 'Services & Utilities',
    icon: '🍳',
    description: 'Nourishment center governed by Agni (Fire Element).',
    bestZones: ['south-east'],
    acceptableZones: ['north-west'],
    avoidZones: ['north-east', 'south-west', 'north', 'center'],
    placementRule: 'Cooktop platform should allow the cook to face East. Sink (Water) should be placed in North-East of the kitchen, at least 3 feet away from stove.',
    bengaluruBylawNote: 'Place chimney exhaust towards East or South with minimum 1-meter clearance from neighboring plot setback.'
  },
  {
    id: 'master-bedroom',
    name: 'Master Bedroom',
    category: 'Living & Rest',
    icon: '🛏️',
    description: 'Commanding retreat for house owner fostering stability, sound sleep, and marital harmony.',
    bestZones: ['south-west'],
    acceptableZones: ['south', 'west'],
    avoidZones: ['north-east', 'south-east', 'center', 'north-west'],
    placementRule: 'Bed headboard must point South or East for alignment with Earth’s magnetic field. Wardrobes and heavy safes belong in the South or West walls.',
    bengaluruBylawNote: 'South-West master suites on the 1st or 2nd floor provide excellent cross breeze from Bengaluru southwest monsoons.'
  },
  {
    id: 'water-sump',
    name: 'Underground Water Sump & Borewell',
    category: 'Services & Utilities',
    icon: '💧',
    description: 'Underground water storage ensuring municipal and rain harvesting supply.',
    bestZones: ['north-east'],
    acceptableZones: ['north', 'east'],
    avoidZones: ['south-west', 'south-east', 'south', 'center', 'north-west'],
    placementRule: 'Underground water belongs strictly to the water quadrant (Eshanya). Keep at least 3 feet distance from the compound wall foundation.',
    bengaluruBylawNote: 'BBMP requires 100% rainwater harvesting storage; placing your recharge pit in North-East satisfies both Vastu and municipal compliance.'
  },
  {
    id: 'living-room',
    name: 'Living Room / Drawing Hall',
    category: 'Living & Rest',
    icon: '🛋️',
    description: 'Social welcome zone for hosting guests and family congregation.',
    bestZones: ['north', 'east', 'north-west'],
    acceptableZones: ['center', 'west'],
    avoidZones: ['south-west'],
    placementRule: 'Furniture should be placed along the Southern and Western walls, leaving the Northern and Eastern floor spaces open and airy.',
    bengaluruBylawNote: 'Pair with large sliding doors leading onto a Northern or Eastern balcony garden.'
  },
  {
    id: 'children-bedroom',
    name: 'Children Bedroom / Study Room',
    category: 'Living & Rest',
    icon: '📚',
    description: 'Productive room supporting concentration, academic success, and energetic rest.',
    bestZones: ['west', 'north-west'],
    acceptableZones: ['north', 'east'],
    avoidZones: ['south-west', 'south-east'],
    placementRule: 'Study desk should face East or North so the student absorbs morning mental clarity. Bookshelf belongs in the South or West.',
    bengaluruBylawNote: 'Western rooms benefit from late afternoon shade when shaded by balconies or vertical wooden louvers.'
  },
  {
    id: 'staircase',
    name: 'Staircase Block',
    category: 'Circulation & Entry',
    icon: '🪜',
    description: 'Vertical circulation structure representing structural weight and upward motion.',
    bestZones: ['south-west', 'south', 'west'],
    acceptableZones: ['north-west', 'south-east'],
    avoidZones: ['north-east', 'north', 'center'],
    placementRule: 'Stairs must always climb clockwise (turning East to South, South to West, West to North). Total number of steps should be an odd number (17, 19, 21).',
    bengaluruBylawNote: 'External rental staircase can be planned in the South-East or North-West setback without violating BBMP setbacks.'
  },
  {
    id: 'septic-tank',
    name: 'Septic Tank / Soil Waste',
    category: 'Services & Utilities',
    icon: '🚽',
    description: 'Sewage disposal utility requiring careful negative energy containment.',
    bestZones: ['north-west'],
    acceptableZones: ['west'],
    avoidZones: ['north-east', 'south-west', 'south-east', 'center'],
    placementRule: 'Never install directly on compound wall. Maintain 2 feet gap. Keep depth level with plinth beam.',
    bengaluruBylawNote: 'Ensure connection slopes smoothly towards BWSSB roadside sewer chamber.'
  },
  {
    id: 'overhead-tank',
    name: 'Overhead Water Tank',
    category: 'Services & Utilities',
    icon: '🚰',
    description: 'Heavy water reservoir elevated on terrace for gravity domestic supply.',
    bestZones: ['south-west'],
    acceptableZones: ['west', 'south'],
    avoidZones: ['north-east', 'north', 'center', 'south-east'],
    placementRule: 'Should be placed on a raised masonry pedestal in the highest South-West corner of the terrace. Must never touch the slab directly.',
    bengaluruBylawNote: 'Keep within BBMP 2.5m stair-head and tank height limit to avoid FAR penalties.'
  },
  {
    id: 'main-entrance',
    name: 'Main Entrance Door (Mahadwara)',
    category: 'Circulation & Entry',
    icon: '🚪',
    description: 'Primary threshold through which prosperity, health, and cosmic energy enter.',
    bestZones: ['north', 'east', 'north-east'],
    acceptableZones: ['west', 'south'],
    avoidZones: ['south-west'],
    placementRule: 'Main door must be the largest door in the home, opening inward clockwise. Keep threshold (Umber) slightly raised in teak or granite.',
    bengaluruBylawNote: 'Align with main road access gate while ensuring internal driveway setback is clear.'
  }
];

export const PLOT_ORIENTATIONS: PlotOrientation[] = [
  {
    facing: 'North',
    rulingDeity: 'Lord Kubera & Mercury (Budha)',
    auspiciousness: 'Extremely Auspicious',
    overview: 'Regarded as one of the finest plot orientations for financial prosperity, commercial acumen, and career expansion. Ideal for business leaders, IT professionals, and executives in Bengaluru.',
    entranceZones: '3rd, 4th, or 5th Pada (Mukhya, Bhallat, or Soma) along the North boundary.',
    keyGuidelines: [
      'Keep Northern setback wider and more open than Southern setback.',
      'Place underground sump and borewell in North-East corner.',
      'Construct South and West boundary walls slightly higher and thicker than North walls.',
      'Plan Master Bedroom in South-West and Kitchen in South-East.'
    ],
    idealFor: 'Software architects, corporate executives, entrepreneurs, and finance specialists.'
  },
  {
    facing: 'East',
    rulingDeity: 'Lord Indra & Sun (Surya)',
    auspiciousness: 'Highly Auspicious',
    overview: 'Auspicious for holistic physical health, long life, sharp intellect, and social honor. Naturally absorbs the revitalizing morning sunlight.',
    entranceZones: '3rd or 4th Pada (Jayanta or Indra) along the East frontage.',
    keyGuidelines: [
      'Maintain expansive front open space towards the East.',
      'Keep plinth slope running gently downwards towards East/North-East for water runoff.',
      'Avoid heavy structures, septic tanks, or toilets in North-East.',
      'Place Master Bedroom in South-West and Kitchen in South-East.'
    ],
    idealFor: 'Doctors, scholars, civil servants, lawyers, and multi-generational families.'
  },
  {
    facing: 'South',
    rulingDeity: 'Lord Yama & Mars (Mangala)',
    auspiciousness: 'Auspicious with Design Care',
    overview: 'Contrary to common myth, South-facing plots are powerful generators of fame, authority, and athletic vigor when designed with correct Vastu Pada alignment.',
    entranceZones: '4th Pada (Gruhakshata) in the South-East quadrant. Avoid South-West entrance.',
    keyGuidelines: [
      'Main entrance must strictly avoid the South-West corner; place it towards South-East.',
      'Internal staircase can be positioned along the South or South-West wall.',
      'Ensure the North and North-East areas are kept open with large windows and light weight.',
      'Master bedroom in South-West ensures complete authority and family harmony.'
    ],
    idealFor: 'Real estate developers, defense personnel, surgeons, and administrative leaders.'
  },
  {
    facing: 'West',
    rulingDeity: 'Lord Varuna & Saturn (Shani)',
    auspiciousness: 'Requires Specific Planning',
    overview: 'Associated with enduring wealth, stability, successful partnerships, and widespread social popularity. Very favorable when designed with proper setback buffering.',
    entranceZones: '3rd or 4th Pada (Sugriva or Pushpadanta) along the West frontage.',
    keyGuidelines: [
      'Design deep front balconies or vertical fins on West to buffer afternoon sun exposure.',
      'Overhead water tank in South-West adds essential stabilizing weight to the property.',
      'Keep North-East lightweight with open pooja area and underground water harvesting sump.',
      'Kitchen is best placed in South-East; secondary option is North-West.'
    ],
    idealFor: 'Merchants, creative artists, consultants, politicians, and media professionals.'
  }
];

export const VASTU_FAQS = [
  {
    question: 'Can a South-facing plot in Bengaluru be 100% Vastu-compliant?',
    answer: 'Yes, absolutely. A common misconception in Bengaluru real estate is that South-facing plots are inauspicious. In classical Vastu Shastra, placing the main entrance in the auspicious 4th Pada (Gruhakshata) of the southern frontage, locating the master bedroom in the South-West, and placing the kitchen in the South-East creates an exceptionally powerful, prosperous home.'
  },
  {
    question: 'Where should the underground water sump and borewell be placed on a 30x40 site?',
    answer: 'The underground water sump and borewell must strictly be placed in the North-East (Eshanya) quadrant. Under BBMP rainwater harvesting bylaws, your recharge pit can be paired alongside, ensuring compliance with both municipal norms and sacred geometry.'
  },
  {
    question: 'Why is the South-West (Nairuthi) considered the best location for the Master Bedroom?',
    answer: 'South-West is governed by the Earth element (Prithvi) and Lord Nirriti, representing stability, command, and longevity. Sleeping here with your head oriented towards the South or East ensures alignment with the earth’s magnetic poles, resulting in deeper REM sleep and lower cardiac stress.'
  },
  {
    question: 'What if my kitchen cannot be placed in the South-East corner?',
    answer: 'If architectural or setback constraints prevent placing the kitchen in the South-East (Agneya), the second best alternative is the North-West (Vayuvya). In either case, the gas cooktop should be oriented so the chef faces East while preparing meals.'
  },
  {
    question: 'How do Construction Buddy architects integrate Vastu with modern 3D BIM designs?',
    answer: 'Our architectural team uses 3D BIM (Revit) to overlay the 9-zone Vastu Purusha Mandala directly onto your AutoCAD plot survey. We balance structural setbacks, cross-ventilation, BBMP FAR regulations, and Vastu rules so you get an ultra-modern aesthetic without compromising sacred spatial energy.'
  }
];
