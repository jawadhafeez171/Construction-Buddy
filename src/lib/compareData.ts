export interface CompareItem {
  name: string;
  specs: {
    standard: string;
    premium: string;
    luxury: string;
    elite: string;
    imperial: string;
    royal: string;
    palatial: string;
  };
}

export interface CompareCategory {
  title: string;
  icon: string;
  items: CompareItem[];
}

export const comparisonCategories: CompareCategory[] = [
  {
    title: 'Structural Details',
    icon: '🏗️',
    items: [
      {
        name: 'Steel (Fe 550 / Fe 550D)',
        specs: {
          standard: 'Sunvik / Prime Gold / Kamdhenu / Tirumala',
          premium: 'Indus / Jindal Panther / Vizag',
          luxury: 'Indus / Jindal Panther / Vizag',
          elite: 'Indus / Jindal Panther / Vizag',
          imperial: 'JSW Neosteel / SAIL / Vizag',
          royal: 'JSW Neosteel / SAIL / Vizag',
          palatial: 'JSW Neosteel / SAIL / Vizag'
        }
      },
      {
        name: 'Cement (43 grade surface, 53 grade core)',
        specs: {
          standard: 'Zuari / Dalmia / Bharathi',
          premium: 'Zuari / Dalmia / Bharathi',
          luxury: 'ACC / Ultratech / Ramco Supercrete',
          elite: 'ACC / Ultratech / Ramco Supercrete',
          imperial: 'ACC / Ultratech / Ramco Supercrete',
          royal: 'ACC / Ultratech / Ramco Supercrete',
          palatial: 'ACC / Ultratech / Ramco Supercrete'
        }
      },
      {
        name: 'Aggregates (20mm & 40mm)',
        specs: {
          standard: 'Included — 20mm & 40mm aggregates',
          premium: 'Included — 20mm & 40mm aggregates',
          luxury: 'Included — 20mm & 40mm aggregates',
          elite: 'Included — 20mm & 40mm aggregates',
          imperial: 'Included — 20mm & 40mm aggregates',
          royal: 'Included — 20mm & 40mm aggregates',
          palatial: 'Included — 20mm & 40mm aggregates'
        }
      },
      {
        name: 'Block Work (6" outer, 4" inner)',
        specs: {
          standard: 'Included — 6" outer & 4" inner solid concrete blocks',
          premium: 'Included — 6" outer & 4" inner solid concrete blocks',
          luxury: 'Included — 6" outer & 4" inner solid concrete blocks',
          elite: 'Included — 6" outer & 4" inner solid concrete blocks',
          imperial: 'Included — 6" outer & 4" inner solid concrete blocks',
          royal: 'Included — 6" outer & 4" inner solid concrete blocks',
          palatial: 'Included — 6" outer & 4" inner solid concrete blocks'
        }
      },
      {
        name: 'RCC Mix',
        specs: {
          standard: 'M20 or M25 RCC mix',
          premium: 'M20 or M25 RCC mix',
          luxury: 'M25 — ACC or Ultratech design mix',
          elite: 'M25 — ACC or Ultratech design mix',
          imperial: 'M25 or as per structural designer recommendation',
          royal: 'M25 or as per structural designer recommendation',
          palatial: 'M25 or as per structural designer recommendation'
        }
      },
      {
        name: 'Ceiling Height (Floor-to-Floor)',
        specs: {
          standard: '10 ft floor-to-floor',
          premium: '10 ft floor-to-floor',
          luxury: '10 ft floor-to-floor',
          elite: '10 ft floor-to-floor',
          imperial: '12 ft floor-to-floor',
          royal: '12 ft floor-to-floor',
          palatial: '12 ft floor-to-floor'
        }
      },
      {
        name: 'Earthquake Resistant Design',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Anti Termite Treatment',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      }
    ]
  },
  {
    title: 'Kitchen',
    icon: '🍳',
    items: [
      {
        name: 'Wall Dado',
        specs: {
          standard: 'Upto ₹40 per sqft',
          premium: 'Upto ₹60 per sqft',
          luxury: 'Upto ₹80 per sqft',
          elite: 'Upto ₹90 per sqft',
          imperial: 'Indian / Italian Marble upto ₹380 per sqft',
          royal: 'Indian / Italian Marble upto ₹380 per sqft',
          palatial: 'Indian / Italian Marble upto ₹380 per sqft'
        }
      },
      {
        name: 'Sink',
        specs: {
          standard: 'Upto ₹3,000 (Single bowl SS)',
          premium: 'Upto ₹6,000 (Futura / Carysil)',
          luxury: 'Upto ₹8,000 (Futura / Carysil)',
          elite: 'Upto ₹8,000 (Futura / Carysil)',
          imperial: 'Kaff / Franke upto ₹10,000',
          royal: 'Kaff / Franke upto ₹12,000',
          palatial: 'Kaff / Franke upto ₹15,000'
        }
      },
      {
        name: 'Sink Faucet',
        specs: {
          standard: 'Upto ₹1,300',
          premium: 'Upto ₹2,600',
          luxury: 'Upto ₹3,500',
          elite: 'Upto ₹3,500',
          imperial: 'Grohe / Kohler upto ₹5,000',
          royal: 'Grohe / Roca / Kohler upto ₹6,000',
          palatial: 'Grohe / Roca / Kohler upto ₹10,000'
        }
      },
      {
        name: 'Sink Accessories',
        specs: {
          standard: 'ISI Marked standard accessories',
          premium: 'ISI Marked standard accessories',
          luxury: 'Parryware / Hindware / Jaquar',
          elite: 'Parryware / Hindware / Jaquar',
          imperial: 'Jaquar / Grohe premium kitchen accessories',
          royal: 'Grohe / Hansgrohe designer kitchen accessories',
          palatial: 'Luxury custom kitchen accessories (Grohe / Hansgrohe / Dornbracht)'
        }
      }
    ]
  },
  {
    title: 'Bathroom',
    icon: '🚿',
    items: [
      {
        name: 'Ceramic Wall Dado',
        specs: {
          standard: 'Upto ₹40 per sqft',
          premium: 'Upto ₹60 per sqft',
          luxury: 'Upto ₹80 per sqft',
          elite: 'Upto ₹90 per sqft',
          imperial: 'Italian Marble upto ₹380 per sqft',
          royal: 'Italian Marble upto ₹450 per sqft',
          palatial: 'Italian Marble upto ₹500 per sqft'
        }
      },
      {
        name: 'CP Fittings',
        specs: {
          standard: 'Cera / Parryware CP fittings',
          premium: 'Hindware / Parryware CP fittings',
          luxury: 'Jaquar / equivalent CP fittings',
          elite: 'Kohler / equivalent CP fittings',
          imperial: 'Grohe / Kohler upto ₹5L for 3 bathrooms',
          royal: 'Grohe / Kohler upto ₹7L for 3 bathrooms',
          palatial: 'Grohe / Kohler / American Standard upto ₹10L for 3 bathrooms'
        }
      },
      {
        name: 'Sanitaryware',
        specs: {
          standard: 'Cera / Parryware floor-mounted sanitaryware',
          premium: 'Hindware / Parryware sanitaryware',
          luxury: 'Jaquar / Cera premium wall-hung sanitaryware',
          elite: 'Kohler / Grohe wall-hung designer sanitaryware',
          imperial: 'Grohe / Kohler upto ₹2.5L for 3 bathrooms',
          royal: 'Grohe / Kohler / American Standard upto ₹3.5L for 3 bathrooms',
          palatial: 'Grohe / Kohler / American Standard upto ₹4.5L for 3 bathrooms — incl. Jacuzzi in Master Bathroom'
        }
      },
      {
        name: 'CPVC Pipe',
        specs: {
          standard: 'APL Apollo / equivalent',
          premium: 'APL Apollo / equivalent',
          luxury: 'APL Apollo / equivalent',
          elite: 'APL Apollo / equivalent',
          imperial: 'APL Apollo premium / Astral CPVC',
          royal: 'Astral CPVC / Supreme premium plumbing pipes',
          palatial: 'Premium CPVC / custom concealed plumbing system'
        }
      },
      {
        name: 'Bathroom Doors',
        specs: {
          standard: 'Included — waterproof flush door / WPC',
          premium: 'Included — waterproof flush door / WPC',
          luxury: 'Included — waterproof flush door / WPC',
          elite: 'Included — waterproof flush door / WPC',
          imperial: 'Louvered Teak Wood upto ₹20,000',
          royal: 'Louvered Teak Wood upto ₹25,000',
          palatial: 'Louvered Teak Wood upto ₹30,000'
        }
      },
      {
        name: 'Bathroom Accessories',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Mirror, Soap dish, Towel rail — worth ₹7,000 per 1,000 sqft',
          elite: 'Mirror, Soap dish, Towel rail — worth ₹9,000 per 1,000 sqft',
          imperial: 'Jaquar / Grohe premium accessories set',
          royal: 'Grohe / Hansgrohe designer accessories set',
          palatial: 'Luxury bespoke accessories (Grohe / Hansgrohe / Dornbracht)'
        }
      },
      {
        name: 'Provision for Solar Water Heater',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Included — solar water heater piping provision',
          elite: 'Included — solar water heater piping provision',
          imperial: 'Included — complete solar water heater system installed',
          royal: 'Included — smart solar water heater with thermostat',
          palatial: 'Included — hybrid solar + heat pump water heating system'
        }
      },
      {
        name: 'Centralized Energy Saving Heat Pump',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included (upto ₹3L)',
          royal: 'Included (upto ₹3L)',
          palatial: 'Included (upto ₹3L)'
        }
      },
      {
        name: 'False Ceiling (Moisture Resistant / Grid)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Glass Partition',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Master Bathroom',
          royal: 'Master & Kids Bathroom',
          palatial: 'All Bathrooms'
        }
      },
      {
        name: 'Motion Sensor Lighting',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      }
    ]
  },
  {
    title: 'Painting',
    icon: '🎨',
    items: [
      {
        name: 'Interior Painting (Asian Paints — JK Putty + Primer + Emulsion)',
        specs: {
          standard: 'Tractor Emulsion',
          premium: 'Tractor Shyne Emulsion',
          luxury: 'Apcolite Premium Emulsion',
          elite: 'Royale Luxury Emulsion',
          imperial: 'JK Putty / Asian Royale Emulsion or equivalent',
          royal: 'JK Putty / Asian Royale Luxury Emulsion or equivalent',
          palatial: 'JK Putty / Asian Royale Shyne Luxury Emulsion or equivalent'
        }
      },
      {
        name: 'Exterior Painting (Asian Paints — Primer + Exterior Emulsion)',
        specs: {
          standard: 'Ace Exterior Emulsion',
          premium: 'Apex Exterior Emulsion',
          luxury: 'Apex Exterior Emulsion',
          elite: 'Apex Ultima Exterior Emulsion',
          imperial: 'Asian Primer / Apex Ultima Protek Paint or equivalent',
          royal: 'Asian Primer / Apex Ultima Protek Duralife Paint or equivalent',
          palatial: 'Asian Primer / Apex Ultima Protek Lamino Paint or equivalent'
        }
      }
    ]
  },
  {
    title: 'Flooring',
    icon: '🪟',
    items: [
      {
        name: 'Living, Dining, Other Bedrooms & Kitchen',
        specs: {
          standard: 'Tiles upto ₹50 per sqft',
          premium: 'Tiles / Granite upto ₹100 per sqft',
          luxury: 'Tiles / Granite / Marble upto ₹140 per sqft',
          elite: 'Tiles / Granite / Marble upto ₹160 per sqft',
          imperial: 'Marble upto ₹380 per sqft',
          royal: 'Marble upto ₹450 per sqft',
          palatial: 'Marble upto ₹500 per sqft'
        }
      },
      {
        name: 'Master Bedroom & Kids Bedroom',
        specs: {
          standard: 'Tiles upto ₹50 per sqft',
          premium: 'Tiles upto ₹80 per sqft',
          luxury: 'Tiles upto ₹120 per sqft',
          elite: 'Tiles upto ₹140 per sqft',
          imperial: 'American Oak Wooden flooring upto ₹900 per sqft',
          royal: 'American Oak Wooden flooring upto ₹900 per sqft',
          palatial: 'American Oak Wooden flooring upto ₹900 per sqft'
        }
      },
      {
        name: 'Bathroom Flooring (Antiskid)',
        specs: {
          standard: 'Anti-skid tiles upto ₹40 per sqft',
          premium: 'Anti-skid tiles upto ₹60 per sqft',
          luxury: 'Anti-skid tiles upto ₹80 per sqft',
          elite: 'Anti-skid tiles upto ₹90 per sqft',
          imperial: 'Tiles / Marble upto ₹380 per sqft',
          royal: 'Tiles / Marble upto ₹450 per sqft',
          palatial: 'Tiles / Marble upto ₹500 per sqft'
        }
      },
      {
        name: 'Balcony & Open Areas (Antiskid)',
        specs: {
          standard: 'Tiles upto ₹40 per sqft',
          premium: 'Tiles upto ₹60 per sqft',
          luxury: 'Tiles upto ₹80 per sqft',
          elite: 'Tiles upto ₹90 per sqft',
          imperial: 'Tiles upto ₹120 per sqft',
          royal: 'Tiles upto ₹150 per sqft',
          palatial: 'Tiles upto ₹200 per sqft'
        }
      },
      {
        name: 'Staircase Flooring',
        specs: {
          standard: 'Sadarahalli Granite upto ₹70 per sqft',
          premium: 'Sadarahalli Granite upto ₹80 per sqft',
          luxury: 'Sadarahalli Granite upto ₹110 per sqft',
          elite: 'Sadarahalli Granite upto ₹140 per sqft',
          imperial: 'Marble upto ₹380 per sqft',
          royal: 'Marble upto ₹450 per sqft',
          palatial: 'Marble upto ₹500 per sqft'
        }
      },
      {
        name: 'Parking Tiles',
        specs: {
          standard: 'Anti-skid tiles upto ₹40 per sqft',
          premium: 'Anti-skid tiles upto ₹50 per sqft',
          luxury: 'Anti-skid tiles upto ₹70 per sqft',
          elite: 'Anti-skid tiles upto ₹70 per sqft',
          imperial: 'Stamp Concrete Finish / Natural Stones upto ₹100 per sqft',
          royal: 'Stamp Concrete Finish / Natural Stones upto ₹120 per sqft',
          palatial: 'Stamp Concrete Finish / Natural Stones upto ₹150 per sqft'
        }
      }
    ]
  },
  {
    title: 'Fittings & Fixtures',
    icon: '🛁',
    items: [
      {
        name: 'Plumbing & CP Fittings',
        specs: {
          standard: 'Cera / Parryware CP fittings',
          premium: 'Jaquar (Continental / Florentine series)',
          luxury: 'Jaquar (Kubix / Lyric series) / Hindware Premium',
          elite: 'Grohe / Kohler premium fixtures',
          imperial: 'Kohler / Grohe designer bathroom suites',
          royal: 'Premium designer Grohe / Hansgrohe collections',
          palatial: 'Luxury designer collections (Dornbracht / Axor / Hansgrohe)'
        }
      },
      {
        name: 'Sanitary Ware',
        specs: {
          standard: 'Cera / Parryware floor-mounted closets',
          premium: 'Hindware / Jaquar wall-mounted closets',
          luxury: 'Jaquar / Cera premium wall-hung closets with slim seat covers',
          elite: 'Kohler / Grohe wall-hung designer closets with soft-close',
          imperial: 'Toto / Kohler premium wall-hung suites with concealed cisterns',
          royal: 'Imported Duravit / Grohe Sensia Arena smart closets',
          palatial: 'Luxury custom smart vanity wash basins & high-end toilets'
        }
      },
      {
        name: 'Electrical Switches',
        specs: {
          standard: 'Anchor Roma / Anchor Rider modular switches',
          premium: 'Anchor Roma / Legrand modular switches',
          luxury: 'Legrand (Mylinc) / Schneider modular switches',
          elite: 'Legrand (Arteor) / Schneider Livia premium switches',
          imperial: 'Legrand Arteor / Schneider glass-touch designer switches',
          royal: 'Smart automated touch panels / Legrand Arteor designer plates',
          palatial: 'Fully custom smart touch plates & voice-controlled automation switches'
        }
      }
    ]
  },
  {
    title: 'Doors & Windows',
    icon: '🚪',
    items: [
      {
        name: 'Windows',
        specs: {
          standard: 'Aluminium windows — ₹440/sqft (Jindal Profiles)',
          premium: 'UPVC windows — ₹495/sqft (Luftung / Plastone / Lesso eiti)',
          luxury: 'UPVC windows — ₹700/sqft (NCL Veka / Prominance / V-tech / Greentech)',
          elite: 'UPVC windows — ₹1,400/sqft (NCL Veka / Wintech / Karthik UPVC / Simta Astrix)',
          imperial: 'High Precision Double Glazed Sound & Weather Proof UPVC / Wooden Windows with Mesh Shutters (Eiti or equivalent)',
          royal: 'High Precision Double Glazed Sound & Weather Proof UPVC / Wooden Windows with Mesh Shutters (Eiti or equivalent)',
          palatial: 'High Precision Double Glazed Sound & Weather Proof UPVC / Wooden Windows with Mesh Shutters (Eiti or equivalent)'
        }
      },
      {
        name: 'Main Door',
        specs: {
          standard: 'Flush door with veneer & salwood frame — upto ₹20,000 incl. accessories',
          premium: 'Teak door with teak frame (5"×3") — worth ₹30,000 incl. fixtures',
          luxury: 'Teak door with teak frame (5"×3.5") — worth ₹40,000 incl. fixtures',
          elite: 'Teak door with teak frame (5"×3.5") — worth ₹50,000 incl. fixtures',
          imperial: 'Engineered Wood Imported Burma Teak upto ₹80,000',
          royal: 'Engineered Wood Imported Burma Teak upto ₹1,20,000',
          palatial: 'Engineered Wood Imported Burma Teak upto ₹1,50,000'
        }
      },
      {
        name: 'Internal Doors',
        specs: {
          standard: 'Membrane / Flush door with laminates — upto ₹11,000',
          premium: 'Membrane / Flush door with laminates — upto ₹11,000',
          luxury: 'Membrane / Flush door with laminates — upto ₹13,000',
          elite: 'Membrane / Flush door with laminates — upto ₹15,000',
          imperial: 'Membrane / Flush Door with Veneer upto ₹25,000',
          royal: 'Membrane / Flush Door with Veneer upto ₹30,000',
          palatial: 'Membrane / Flush Door with Veneer upto ₹35,000'
        }
      },
      {
        name: 'Door Frames',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Imported Ghana Teak Jamb Lining',
          royal: 'Imported Border Teak Jamb Lining',
          palatial: 'Burma Teak Jamb Lining'
        }
      },
      {
        name: 'Puja Room Door',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Teak shutter with teak frame — worth ₹28,000 per 2,000 sqft',
          elite: 'Teak shutter with teak frame — worth ₹32,000 per 2,000 sqft',
          imperial: 'Burma Teak + Teak Frame upto ₹40,000',
          royal: 'Burma Teak + Teak Frame upto ₹50,000',
          palatial: 'Burma Teak + Teak Frame upto ₹60,000'
        }
      }
    ]
  },
  {
    title: 'Electrical',
    icon: '⚡',
    items: [
      {
        name: 'Wiring (Fireproof)',
        specs: {
          standard: 'Finolex / Anchor / Havells FR wiring',
          premium: 'Finolex / Anchor / Havells FR wiring',
          luxury: 'Finolex / Anchor / Havells FR wiring',
          elite: 'Finolex / Anchor / Havells FR wiring',
          imperial: 'Fireproof Wires (Finolex Silver FR or equivalent)',
          royal: 'Fireproof Wires (Finolex Silver FR or equivalent)',
          palatial: 'Fireproof Wires (Finolex Silver FR or equivalent)'
        }
      },
      {
        name: 'Switches & Sockets',
        specs: {
          standard: 'Legrand Allzy / GM(G9) / HI-FI / Great White',
          premium: 'Roma / Lisha / Legrand Lyncus / Havells Fabio',
          luxury: 'Legrand Mylinc / Havells Coral / Roma',
          elite: 'Schneider Unica Pure / Legrand Myrius / Jaquar',
          imperial: 'Legrand Myrius / Schneider Zencelo / GM equivalent',
          royal: 'Legrand Myrius / Schneider Zencelo / GM equivalent',
          palatial: 'Legrand Myrius / Schneider Zencelo / GM equivalent'
        }
      },
      {
        name: 'UPS Wiring',
        specs: {
          standard: 'Not Included',
          premium: 'Included',
          luxury: 'Included',
          elite: 'Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'EV Charging Point',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Included — dedicated 16A point',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      }
    ]
  },
  {
    title: 'Water Storage',
    icon: '💧',
    items: [
      {
        name: 'Overhead Tank (Triple Layered Plastic / RCC)',
        specs: {
          standard: '1,000 Ltrs. double-layered (Apollo / equivalent)',
          premium: '1,500 Ltrs. double-layered (Apollo / equivalent)',
          luxury: '2,000 Ltrs. double-layered (Apollo / equivalent)',
          elite: '2,000 Ltrs. Apollo / equivalent (premium grade)',
          imperial: '2,500 Ltrs. of Sintex / equivalent make',
          royal: '2,500 Ltrs. of Sintex / equivalent make',
          palatial: '2,500 Ltrs. RCC Tank'
        }
      },
      {
        name: 'Underground Sump',
        specs: {
          standard: '4,000 Ltrs.',
          premium: '6,000 Ltrs.',
          luxury: '7,000 Ltrs.',
          elite: '8,000 Ltrs.',
          imperial: '10,000 Ltrs.',
          royal: '11,000 Ltrs.',
          palatial: '12,000 Ltrs.'
        }
      }
    ]
  },
  {
    title: 'Railings & Grills',
    icon: '🔩',
    items: [
      {
        name: 'Staircase Railing',
        specs: {
          standard: 'MS Railing',
          premium: 'MS Railing',
          luxury: 'SS 304 Grade Railing',
          elite: 'SS 304 Grade Railing with toughened glass panels',
          imperial: 'SS 304 Railing with glass / MS Railing with Wooden Hand Rail',
          royal: 'SS 304 Railing with glass / MS Railing with Wooden Hand Rail',
          palatial: 'SS 304 Railing with glass / MS Railing with Wooden Hand Rail'
        }
      },
      {
        name: 'Window Grills (Basic MS Grill with enamel paint)',
        specs: {
          standard: 'Included — MS Grill at ₹195 per sqft',
          premium: 'Included — MS Grill at ₹195 per sqft',
          luxury: 'Included — MS Grill at ₹195 per sqft',
          elite: 'Included — MS Grill at ₹195 per sqft',
          imperial: 'Upto ₹200 per sqft',
          royal: 'Upto ₹250 per sqft',
          palatial: 'Upto ₹300 per sqft'
        }
      }
    ]
  },
  {
    title: 'Gas Connection',
    icon: '🔥',
    items: [
      {
        name: 'Copper Gas Connection (1 no. per dwelling unit — 1,500 sqft)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: '1 no. per dwelling unit (for 1,500 sqft package area)',
          imperial: 'Included — 1 no. per dwelling unit',
          royal: 'Included — 1 no. per dwelling unit',
          palatial: 'Included — 1 no. per dwelling unit'
        }
      }
    ]
  },
  {
    title: 'Air Conditioning',
    icon: '❄️',
    items: [
      {
        name: 'Centralized All Weather AC',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Mitsubishi / Carrier / Daikin / equivalent make',
          palatial: 'Mitsubishi / Carrier / Daikin / equivalent make'
        }
      },
      {
        name: 'Private Pool',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Not Included',
          palatial: 'Temperature-Controlled Lap Pool'
        }
      }
    ]
  },
  {
    title: 'Elevator',
    icon: '🛗',
    items: [
      {
        name: 'Elevator (Mitsubishi / Schindler make)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Lift shaft structure provision only',
          elite: 'Lift shaft structure & glass cabin elevator layout provision',
          imperial: 'Not Included',
          royal: 'Worth upto ₹8 lakhs',
          palatial: 'Worth upto ₹10 lakhs — with private glass see-through cabin'
        }
      }
    ]
  },
  {
    title: 'Home Automation & Safety',
    icon: '🏠',
    items: [
      {
        name: 'Home Automation',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Worth upto ₹5 lakhs',
          royal: 'Worth upto ₹7 lakhs',
          palatial: 'Worth upto ₹10 lakhs'
        }
      },
      {
        name: 'Motion Sensor',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Appliance Control (AC, Kitchen, Curtains, Mood Lighting)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'CCTV Cameras (across all vantage points)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'False Ceiling with Recessed Coves & Cornices',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Fire Leaks & Panic Buttons (in strategic areas)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Gate for Car Parking Area',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Intrusion Alert for Automation System',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Safety & Security — Biometric & App-Based Keyless Entry/Exit',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      },
      {
        name: 'Video Door Phone (extension to Kitchen, Living / Dining & Master Bedroom)',
        specs: {
          standard: 'Not Included',
          premium: 'Not Included',
          luxury: 'Not Included',
          elite: 'Not Included',
          imperial: 'Not Included',
          royal: 'Included',
          palatial: 'Included'
        }
      }
    ]
  }
];
