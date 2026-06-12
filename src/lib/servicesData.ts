export interface ServiceProcessStep {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: 'architectural-structural-drawings',
    title: 'Architectural & Structural Drawings',
    description: 'Precision drafting and robust structural planning to lay the perfect foundation for your vision.',
    icon: '📐',
    image: '/service_architectural.webp',
    fullDescription: 'Every great building starts with accurate, BBMP-compliant blueprints and solid engineering design. Our integrated architectural and structural drafting teams work hand-in-hand to produce detailed layout drawings, steel reinforcement details, column configurations, and load calculation sheets. This combined engineering approach guarantees your building is structurally sound, conforms to municipal bylaws, and is ready for seamless on-site execution.',
    benefits: [
      'Council of Architecture (CoA) Registered Designs',
      'BBMP & BDA Compliant Submissions',
      'Integrated 3D Structural Coordination',
      'Optimal Steel & Concrete Estimations (No Waste)'
    ],
    features: [
      'Detailed floor plans, sections, and elevation views',
      'MEP (Mechanical, Electrical, Plumbing) layout diagrams',
      'Soil investigation and foundation recommendation reports',
      'Structural detailing (RCC column, beam, and slab designs)'
    ],
    process: [
      { title: '1. Site Inspection & Briefing', desc: 'Detailed survey of land boundaries, soil quality, orientation, and client requirements.' },
      { title: '2. Conceptual Plans', desc: 'Developing initial floor plan layouts and spatial relationships in 2D for client review.' },
      { title: '3. 3D Model Development', desc: 'Laying out architectural structures in 3D to visualize volume, windows, and light.' },
      { title: '4. Structural Engineering', desc: 'Calculating loads and sizing beams, columns, and foundation reinforcements.' },
      { title: '5. Working Drawings', desc: 'Finalizing exact blueprints and coordinates for the on-site construction team.' }
    ],
    faqs: [
      { question: 'Are your architectural plans legally compliant in Bengaluru?', answer: 'Yes, all our plans are designed to meet BBMP, BDA, and local municipality bylaws, making submission for plan approval straightforward.' },
      { question: 'Do you provide structural design separately?', answer: 'Yes, we can provide structural detailing for existing architectural designs, or perform both as an integrated service (recommended).' },
      { question: 'How long does the drawing phase take?', answer: 'Usually 2 to 4 weeks depending on the complexity of the design and the speed of feedback from your end.' }
    ]
  },
  {
    slug: 'home-construction',
    title: 'Home Construction',
    description: 'End-to-end home building services, ensuring quality materials and timely delivery.',
    icon: '🏗️',
    image: '/service_home_construction.webp',
    fullDescription: 'Build your dream home in Bengaluru with complete peace of mind. We manage the entire home building process from excavation to final handover, employing skilled project managers, utilizing top-tier branded materials, and conducting rigorous quality inspections. Our contracts feature a fixed per-square-foot cost, transparent milestone-based payments, and a 10-year structural warranty.',
    benefits: [
      '10-Year Structural Performance Warranty',
      'Guaranteed Handover Timelines (Penalty-Backed)',
      '100+ On-Site Quality Assurance Checks',
      'Fixed-Price Contracts with Zero Hidden Fees'
    ],
    features: [
      'Integrated project management dashboard with live photo updates',
      'Branded materials supply chain (Jindal Steel, ACC/Ultratech Cement, etc.)',
      'Dedicated on-site site engineer and supervisor',
      'Milestone-based progress reporting and transparent invoicing'
    ],
    process: [
      { title: '1. Agreement & Plan Finalization', desc: 'Signing the contract and choosing your construction packages and options.' },
      { title: '2. Excavation & Foundation', desc: 'Ground excavation, PCC laying, and footing casting according to design.' },
      { title: '3. RCC Frame Structure', desc: 'Casting columns, beams, and concrete slabs floor-by-floor.' },
      { title: '4. Blockwork & Plastering', desc: 'Laying brick or block masonry walls followed by dual-layer plastering.' },
      { title: '5. Handover & Finishing', desc: 'Final flooring, electrical/plumbing trim, painting, and clean-up.' }
    ],
    faqs: [
      { question: 'What is your construction cost per square foot?', answer: 'Our construction packages start from ₹1,940/sqft for Standard, ₹2,070/sqft for Premium, and ₹2,400+/sqft for Luxury.' },
      { question: 'How do you guarantee material quality?', answer: 'We source materials directly from manufacturers and perform on-site material testing (like concrete cube tests) for every slab cast.' },
      { question: 'Can I customize the packages?', answer: 'Absolutely. We offer complete flexibility to substitute materials or brands to match your taste and budget.' }
    ]
  },
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    description: 'Delivering large-scale commercial projects — offices, retail spaces, and mixed-use developments — on time and to spec.',
    icon: '🏙️',
    image: '/service_commercial.webp',
    fullDescription: 'High-quality build services for commercial entities in Bengaluru. We build state-of-the-art office layouts, retail units, restaurants, and mixed-use commercial buildings. Our commercial team focuses on robust building systems, fire safety standards, energy efficiency, and speed of delivery to ensure a quick return on investment.',
    benefits: [
      'Faster Turnaround for Quicker Occupancy',
      'Strict Adherence to Commercial Fire and MEP Codes',
      'Dedicated Commercial Project Manager',
      'Transparent GST Input Credit Documentation'
    ],
    features: [
      'Complex structural framing and high-load flooring slabs',
      'Commercial grade MEP (Mechanical, Electrical, Plumbing) and HVAC coordination',
      'Curtain wall and custom glass facade engineering',
      'Fire suppression and safety security integration'
    ],
    process: [
      { title: '1. Feasibility Study', desc: 'Assessing local BBMP commercial regulations, setbacks, and land usage permissions.' },
      { title: '2. MEP & Fire Engineering', desc: 'Coordinating complex HVAC, electrical panel, and fire suppression designs.' },
      { title: '3. Foundation & Excavation', desc: 'Deep excavation, retaining wall construction, and heavy foundations.' },
      { title: '4. Superstructure Construction', desc: 'Erecting robust concrete or steel composite frames.' },
      { title: '5. Facade & Fit-out Coordination', desc: 'Installing glass facades, cladding, and preparing for internal fit-out.' }
    ],
    faqs: [
      { question: 'Do you handle BBMP commercial plan approvals?', answer: 'Yes, we handle the entire commercial plan approval process, including getting Karnataka State Fire NOC and Pollution clearances.' },
      { question: 'Do you build steel structures?', answer: 'Yes, we specialize in both RCC (reinforced concrete) and steel-framed structural commercial builds.' }
    ]
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    description: 'Transforming spaces with aesthetic elegance and functional brilliance.',
    icon: '✨',
    image: '/service_interior.webp',
    fullDescription: 'A home is defined by its interiors. Our interior design team crafts sophisticated, warm, and highly functional spaces tailored to your daily lifestyle. From custom modular kitchens with German hardware to warm biophilic living areas, space-saving furniture, and customized lighting solutions, we bring visual layouts to life in stunning photorealistic 3D before execution begins.',
    benefits: [
      'Dynamic Photorealistic 3D Visualizations',
      'Custom Modular Wardrobes & Kitchens',
      '5-Year Material Warranty on Modular Work',
      'Integrated Lighting and Decor Planning'
    ],
    features: [
      'Space planning and ergonomic layout mockups',
      'Custom woodwork and laminate/acrylic finishes',
      'Eco-friendly, low-VOC materials and sustainable wood',
      'Complete false ceiling and electrical remodeling'
    ],
    process: [
      { title: '1. Design Consultation', desc: 'Meeting with a designer to select themes, color palettes, and budget guidelines.' },
      { title: '2. 2D Layouts & Space Plans', desc: 'Creating space utilization maps and furniture placements.' },
      { title: '3. 3D Rendering & Visualization', desc: 'Generating high-definition photorealistic 3D render designs.' },
      { title: '4. Factory Production', desc: 'Manufacturing modular cabinets and wood components in our state-of-the-art facility.' },
      { title: '5. On-Site Installation', desc: 'Assembling woodwork, painting, and setting up light fixtures and decor.' }
    ],
    faqs: [
      { question: 'Do you offer modular kitchens separately?', answer: 'Yes, we design and install modular kitchens as a standalone service, using premium BWR plywood and branded hardware (Hettich/Blum).' },
      { question: 'How long does interior design take?', answer: 'From design approval to final handover, it typically takes 4 to 6 weeks depending on modular scope.' },
      { question: 'Do you provide loose furniture?', answer: 'Yes, we help source and select custom sofas, dining tables, and soft furnishings to complete the look.' }
    ]
  },
  {
    slug: 'waterproofing-solutions',
    title: 'Waterproofing Solutions',
    description: 'Advanced waterproofing to protect your structures from leaks and weather damage.',
    icon: '💧',
    image: '/service_waterproofing.webp',
    fullDescription: 'Water ingress is the single biggest threat to concrete structures in Bengaluru. Our specialized waterproofing division uses advanced multi-layer systems, crystalline concrete penetrations, and APP-modified bitumen membranes to protect terraces, basements, swimming pools, and bathrooms from severe weather damage and leaks. All waterproofing comes with a performance warranty.',
    benefits: [
      '15-Year Performance Warranty',
      'Multi-Layer Membrane & Crystalline Protection',
      'Comprehensive 48-Hour Flood Testing',
      'Specialized Bathroom and Terrace Treatment Packages'
    ],
    features: [
      'Negative-side and positive-side pressure barrier coatings',
      'Polyurethane injections for active crack leakage repair',
      'UV-resistant terrace protective screeds',
      'Non-destructive thermal moisture diagnostics'
    ],
    process: [
      { title: '1. Diagnostics & Analysis', desc: 'Using advanced moisture meters and inspection to trace leak origin.' },
      { title: '2. Surface Preparation', desc: 'Cleaning, routing cracks, and applying polymer mortars to restore surfaces.' },
      { title: '3. Base Coat & Priming', desc: 'Applying binding primers to maximize membrane adhesion.' },
      { title: '4. Membrane/Coating Layering', desc: 'Installing APP membranes or multi-layer chemical coatings.' },
      { title: '5. Flood Testing & Handover', desc: 'Blocking drains and flooding the area for 48 hours to confirm zero leakage.' }
    ],
    faqs: [
      { question: 'How long does your waterproofing system last?', answer: 'Our premium terrace systems carry a 15-year warranty, while standard coatings carry a 5 to 8-year performance guarantee.' },
      { question: 'Is waterproofing necessary for bathrooms?', answer: 'Absolutely. Leaks from bathrooms are the primary cause of ceiling paint flaking and dampness in adjoining bedrooms.' },
      { question: 'Do you charge for leak inspections?', answer: 'We offer free leak diagnostics and assessments for homes in Bengaluru.' }
    ]
  },
  {
    slug: 'building-information-modelling',
    title: 'Building Information Modelling',
    description: 'State-of-the-art 3D modelling for accurate visualization and project management.',
    icon: '🏢',
    image: '/service_bim.webp',
    fullDescription: 'Experience your project in virtual reality before building it. Our BIM (Building Information Modelling) services create highly detailed 3D digital replicas of your home or commercial structure, combining architectural components, structural columns, steel details, plumbing runs, and electrical conduit lines. This prevents on-site clashes, reduces material wastage by up to 15%, and keeps coordinates accurate.',
    benefits: [
      '35% Average Reduction in Design Conflicts',
      'Precise Bill of Quantities (BOQ)',
      'Interactive Virtual Walkthroughs',
      'Easy Post-Construction Asset Management'
    ],
    features: [
      'Level of Development (LOD) 300 to 500 models',
      'Automated clash detection reports between services',
      '4D construction sequencing (time animation)',
      '5D cost integration models'
    ],
    process: [
      { title: '1. 2D Data Compilation', desc: 'Gathering all CAD drawings from architectural, structural, and MEP engineers.' },
      { title: '2. 3D Model Building', desc: 'Creating an integrated 3D model containing all service layouts.' },
      { title: '3. Clash Detection & Review', desc: 'Running advanced software checks to isolate design overlaps and conflicts.' },
      { title: '4. Model Optimization', desc: 'Refining coordinates and dimensions to resolve clashes virtually.' },
      { title: '5. Drawing Extraction', desc: 'Exporting conflict-free shop drawings for the field team.' }
    ],
    faqs: [
      { question: 'Is BIM useful for small residential homes?', answer: 'Absolutely. BIM is highly effective at avoiding plumbing and electrical routing conflicts in tight residential spaces, saving costly field adjustments.' },
      { question: 'What software do you use for BIM?', answer: 'We primarily use Autodesk Revit, Navisworks, and BIM 360 to build and coordinate our models.' }
    ]
  }
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
