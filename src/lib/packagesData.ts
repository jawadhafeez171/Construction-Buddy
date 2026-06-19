export interface Package {
  name: string;
  price: string;
  description: string;
  popular: boolean;
  highlights: string[];
  image: string;
}

export const standardPackages: Package[] = [
  {
    name: 'Standard',
    price: '₹1,940',
    description: 'A budget package with no compromise on quality that includes all construction essentials.',
    popular: false,
    image: '/bg_pkg_standard.webp',
    highlights: [
      'Trusted brand steel & cement (FE 550 Steel, 53 Grade Cement)',
      'Standard floor tiles up to ₹50/sqft',
      'Solid wood flush doors and powder-coated aluminum windows',
      'Internal wall paint: Tractor Emulsion (2 coats)',
      'Essential kitchen & bathroom plumbing fixtures (Cera/Parryware)'
    ]
  },
  {
    name: 'Premium',
    price: '₹2,070',
    description: 'Our best seller package with upgraded brands like Jindal Steels, Hindware etc. at a considerable price.',
    popular: true,
    image: '/bg_pkg_premium.webp',
    highlights: [
      'Superior brand steel & cement (Jindal/TATA, Ultratech/ACC)',
      'Refined vitrified tiles up to ₹100/sqft',
      'Elegant teakwood main door & UPVC window frames',
      'Premium wall paint: Tractor Shyne Emulsion',
      'Stylish kitchen & bathroom fittings (Jaquar/Hindware)'
    ]
  },
  {
    name: 'Luxury',
    price: '₹2,400',
    description: 'An elegant package crafted for modern living with extra provisions like solar heater setup, puja door etc.',
    popular: false,
    image: '/bg_pkg_luxury.webp',
    highlights: [
      'Top-tier brand steel & cement (TATA Tiscon, Ultratech Super)',
      'Premium vitrified/double charge floor tiles up to ₹140/sqft',
      'Designer teakwood main & puja room doors, premium UPVC windows',
      'Internal wall paint: Apcolite Premium Emulsion',
      'High-quality kitchen sink & bathroom fixtures (Jaquar/Kore)'
    ]
  },
  {
    name: 'Elite',
    price: '₹2,640',
    description: 'An ultimate plan with high-end finishes and modern amenities like EV charging, copper gas lines etc.',
    popular: false,
    image: '/bg_pkg_elite.webp',
    highlights: [
      'Top-tier brand steel & cement (TATA Tiscon, Ultratech Super)',
      'Lavish vitrified/wooden flooring tiles up to ₹160/sqft',
      'Custom designer teakwood doors & premium double-glazed UPVC windows',
      'High-end wall paint: Apex Ultima Exterior, Royal Luxury Interior',
      'Lavish bathroom fittings (Kohler/Grohe) & EV Charging point'
    ]
  }
];

export const luxuryPackages: Package[] = [
  {
    name: 'Imperial',
    price: '₹3,990',
    description: 'Ultra-premium package featuring Italian marble flooring, VRV air conditioning, and top-tier imported finishes.',
    popular: false,
    image: '/bg_pkg_imperial.webp',
    highlights: [
      'Corrosion-resistant TATA Tiscon steel & special high-strength concrete',
      'Premium Italian marble flooring for living & dining areas (up to ₹350/sqft)',
      'Fully integrated VRV/VRF central air conditioning system',
      'Bespoke imported teakwood doors & soundproof double-glazed windows',
      'Luxury designer bathroom suites (Toto/Kohler) with concealed cisterns'
    ]
  },
  {
    name: 'Royal Estate',
    price: '₹4,690',
    description: 'A royal package with smart home automation, glass elevators, double-height ceilings, and customized architectural elements.',
    popular: true,
    image: '/bg_pkg_royal.webp',
    highlights: [
      'Heavy-duty RCC framing with double-height structural steel portals',
      'Super-premium Italian marble/engineered hardwood flooring (up to ₹500/sqft)',
      'Bespoke smart home automation (lighting, curtains, HVAC, security)',
      'Private 4-passenger gearless hydraulic glass elevator',
      'Imported sanitaryware (Duravit/Grohe Sensia Arena) with multi-flow showers'
    ]
  },
  {
    name: 'Palatial',
    price: '₹5,490',
    description: 'The ultimate bespoke estate package. Includes thermal-acoustic insulation, swimming pools, and customized landscape gardens.',
    popular: false,
    image: '/bg_pkg_palatial.webp',
    highlights: [
      'Thermally & acoustically insulated double-brick external walls',
      'Custom luxury marble selection & exotic imported timber decks',
      'Private mosaic-tiled swimming pool with filtration system',
      'Architectural structural glazing facade & premium glass skylights',
      'Complete luxury landscaping design with custom entry courtyard'
    ]
  }
];
