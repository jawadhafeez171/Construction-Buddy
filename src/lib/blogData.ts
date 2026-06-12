export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'bim-future-of-construction-bengaluru',
    title: 'How BIM is Revolutionising Construction in Bengaluru',
    excerpt:
      'Building Information Modelling is no longer just a Western concept — Bengaluru\'s booming real estate sector is embracing 3D intelligence at every stage of construction.',
    category: 'Technology',
    readTime: '6 min read',
    date: 'May 28, 2026',
    author: 'Ravi Shankar',
    authorRole: 'Chief Architect & BIM Specialist',
    image: '/blog_bim.png',
    tags: ['BIM', 'Technology', 'Architecture', 'Innovation'],
    featured: true,
    content: `
Building Information Modelling (BIM) has transformed how architects, engineers, and contractors collaborate on complex construction projects across India's fastest-growing city.

## What is BIM?

BIM is a digital representation of the physical and functional characteristics of a building. Unlike traditional 2D drawings, BIM creates a living, data-rich 3D model that everyone on the project team — from architects to plumbers — can access and update in real time.

At Construction Buddy, we have integrated BIM into every major project since 2022. The results speak for themselves: a **35% reduction in design conflicts**, **20% faster project delivery**, and virtually zero on-site surprises.

## Why Bengaluru is the perfect BIM market

Bengaluru's tech-savvy clientele expects precision and transparency. Our homeowners are often engineers and product managers who appreciate seeing a photorealistic 3D walkthrough of their future home before a single brick is laid.

## Key benefits we deliver with BIM

- **Clash detection** — catch plumbing and electrical conflicts before they become expensive on-site problems
- **Accurate quantity estimation** — no material waste, no over-ordering
- **Energy simulation** — optimise window orientation and insulation for Bengaluru's climate
- **Real-time progress monitoring** — compare as-built versus as-designed at any milestone

## The future is here

BIM is not optional for premium construction anymore. If your builder isn't offering BIM, you're accepting unnecessary risk. Ask us for a complimentary BIM walkthrough of your proposed project today.
    `,
  },
  {
    slug: 'waterproofing-bangalore-monsoon-guide',
    title: 'Complete Waterproofing Guide for Bengaluru\'s Monsoon Season',
    excerpt:
      'Bengaluru receives 900mm of rainfall annually. Without proper waterproofing, your investment is at serious risk. Here\'s how to protect it.',
    category: 'Tips & Guides',
    readTime: '8 min read',
    date: 'May 15, 2026',
    author: 'Deepa Krishnamurthy',
    authorRole: 'Senior Waterproofing Engineer',
    image: '/blog_waterproofing.png',
    tags: ['Waterproofing', 'Monsoon', 'Maintenance', 'Tips'],
    featured: false,
    content: `
Every year, hundreds of Bengaluru homeowners discover the hard way that their building wasn't waterproofed correctly. Leaking roofs, damp walls, and cracking plaster are not just cosmetic issues — they compromise structural integrity.

## The three zones that need protection

**1. The terrace and roof deck**
This is the first and most critical line of defence. We apply a 4mm thick APP-modified bituminous membrane topped with a UV-resistant protective screed. This system carries a 15-year performance warranty.

**2. External walls**
We use crystalline waterproofing coatings that penetrate the concrete matrix and block moisture pathways at the molecular level. Unlike surface coatings, crystalline systems self-heal minor cracks over time.

**3. Basements and underground structures**
Hydrostatic pressure is the enemy here. Our negative-side waterproofing approach combined with a pressure relief drainage layer ensures zero moisture ingress even during peak monsoon.

## Common mistakes to avoid

- Using standard cement plaster as the only barrier on terraces
- Neglecting the parapet wall junction (where 70% of leaks originate)
- Skipping the protection board over the waterproofing membrane
- Applying waterproofing in direct sunlight above 35°C

## Our process

We don't just apply a coating and leave. Every waterproofing installation by Construction Buddy includes:
1. Surface preparation and crack repair
2. Primer application
3. Main waterproofing system (2-layer minimum)
4. Flood testing for 48 hours before handover
5. Annual inspection visit for the first 3 years

Call us before the next monsoon, not after it.
    `,
  },
  {
    slug: 'home-construction-cost-bengaluru-2026',
    title: 'Home Construction Cost in Bengaluru: A Realistic 2026 Breakdown',
    excerpt:
      'Building a home in Bengaluru? Here\'s an honest, transparent breakdown of what you\'ll actually spend per square foot — and where costs can be controlled.',
    category: 'Pricing & Planning',
    readTime: '10 min read',
    date: 'April 30, 2026',
    author: 'Suresh Babu',
    authorRole: 'Project Cost Manager',
    image: '/blog_cost.png',
    tags: ['Pricing', 'Planning', 'Home Construction', 'Budgeting'],
    featured: false,
    content: `
One of the most common questions we receive is: "How much does it cost to build a house in Bengaluru?" The honest answer is nuanced — but here's a comprehensive breakdown.

## The three cost tiers

| Package | Cost Per Sqft | Best For |
|---------|--------------|----------|
| Standard | ₹1,940 | Budget-conscious, value-driven families |
| Premium | ₹2,070 | Quality-first builds with trusted brands |
| Luxury | ₹2,400+ | Discerning homeowners, premium finishes |

## What's included — and what isn't

### Included in per-sqft pricing:
- Structural work (foundation, columns, beams, slabs)
- Brick or block masonry
- Plastering (internal and external)
- Flooring as per package specification
- Doors, windows, and grilles
- Electrical wiring (copper, ISI-marked)
- Plumbing (concealed, CPVC pipes)
- Painting (as per package)
- Basic bathroom fixtures

### Typically excluded (quoted separately):
- Compound wall and gate
- Interior design and modular kitchen
- Landscaping and driveway
- Solar panels
- Lifts

## Cost control strategies

1. **Lock in material prices early** — steel and cement prices fluctuate. We offer fixed-price contracts.
2. **Don't compromise on structure** — save on finishes, never on RCC or foundation.
3. **Plan for the unexpected** — budget 10–15% contingency.

## Why get multiple quotes?

Always do. We welcome comparison. Our quotes include 3D drawings, detailed BOQ, and a milestone-based payment schedule. If another builder gives you a verbal quote, be very cautious.

Ready to get your customised quote? Call us at +91 99028 00693.
    `,
  },
  {
    slug: 'interior-design-trends-2026',
    title: 'Interior Design Trends Dominating Bengaluru Homes in 2026',
    excerpt:
      'Biophilic design, warm earth tones, and japandi minimalism — Bengaluru\'s urban homes are getting a sophisticated, globally-inspired makeover.',
    category: 'Interior Design',
    readTime: '5 min read',
    date: 'April 10, 2026',
    author: 'Ananya Reddy',
    authorRole: 'Lead Interior Designer',
    image: '/blog_interior.png',
    tags: ['Interior Design', 'Trends', 'Lifestyle', 'Decor'],
    featured: false,
    content: `
The definition of a beautiful Bengaluru home has shifted dramatically in 2026. Here's what our interior design clients are requesting — and why these trends make practical sense for our climate and culture.

## 1. Biophilic design

Plants are no longer just decoration. Biophilic design integrates natural materials, living walls, and organic shapes into the architecture itself. We're designing homes with dedicated plant alcoves, skylights that bring diffused natural light into corridors, and handcrafted terracotta tile accents.

## 2. Japandi minimalism

The fusion of Japanese wabi-sabi and Scandinavian hygge is called Japandi. It's characterised by neutral palettes, natural wood tones, and intentional negative space. For Bengaluru's often-chaotic daily life, coming home to deliberate calm is deeply appealing.

## 3. Warm earthy tones

Crisp white walls are giving way to sand, terracotta, warm sage, and muted ochre. These tones are forgiving, timeless, and photogenic. They also complement the natural light quality in Bengaluru.

## 4. Multipurpose rooms

Post-pandemic, the home office is permanent. We design rooms that seamlessly transition from workspace to guest bedroom using custom joinery, fold-away desks, and Murphy beds.

## 5. Smart home integration

Voice-controlled lighting, app-controlled AC, video door phones, and energy monitoring are now standard in our Luxury and Elite packages.

## Our design process

1. Discovery session to understand your lifestyle
2. 3D rendered mood boards (2 concepts)
3. Detailed BOQ for interior works
4. Project execution with weekly site visits
5. Styled photoshoot on completion

Your home should feel like you. Let's design it together.
    `,
  },
  {
    slug: 'choosing-right-architect-bengaluru',
    title: 'How to Choose the Right Architect for Your Bengaluru Home',
    excerpt:
      'Not all architects are the same. Learn the 7 questions you must ask before signing any contract — and the red flags that should make you walk away.',
    category: 'Tips & Guides',
    readTime: '7 min read',
    date: 'March 22, 2026',
    author: 'Ravi Shankar',
    authorRole: 'Chief Architect & BIM Specialist',
    image: '/blog_architect.png',
    tags: ['Architecture', 'Tips', 'Planning', 'Guide'],
    featured: false,
    content: `
Choosing an architect is one of the most consequential decisions in your home-building journey. Here's how to make it confidently.

## The 7 questions to ask every architect

**1. Are you registered with the Council of Architecture (CoA)?**
This is non-negotiable. Any practicing architect in India must be registered. Ask for their CoA registration number.

**2. Can I see built projects similar to mine?**
Portfolios can be misleading. Ask to visit a recently completed project and speak with the homeowner.

**3. Who will actually be working on my project?**
Many firms win projects with senior architects but hand execution to junior staff. Clarify the team composition upfront.

**4. What does your fee include?**
Architectural fees in Bengaluru typically range from 3–8% of construction cost. Clarify what's included: drawings, structural design, MEP coordination, site visits.

**5. How do you handle scope changes?**
Changes are inevitable. Ask for a clear change order process and pricing.

**6. Will you coordinate with the contractor?**
Architecture and construction must work in sync. An architect who disappears after design submission causes expensive problems.

**7. What BIM or design software do you use?**
Modern architects should work in 3D from day one. Ask for a sample 3D walkthrough of a previous project.

## Red flags

- No written contract or agreement
- Vague timelines with no milestones
- Pressure to start immediately without detailed drawings
- No structural engineer on the team

## Why we're different

At Construction Buddy, our architects and construction managers work as one integrated team. Your Architectural Drawings, Structural Design, MEP, and Construction are all under one roof — and one contract. No coordination gaps. No blame games.

Let's talk about your project.
    `,
  },
  {
    slug: 'commercial-construction-checklist',
    title: 'The Complete Commercial Construction Checklist for Bengaluru Businesses',
    excerpt:
      'Planning an office, retail space, or mixed-use development? This end-to-end checklist covers approvals, timelines, and costs — saving you months of guesswork.',
    category: 'Commercial',
    readTime: '9 min read',
    date: 'March 5, 2026',
    author: 'Suresh Babu',
    authorRole: 'Project Cost Manager',
    image: '/blog_commercial.png',
    tags: ['Commercial', 'Office', 'Retail', 'Planning'],
    featured: false,
    content: `
Commercial construction in Bengaluru follows a different process than residential. Here's a comprehensive checklist to keep your project on track.

## Phase 1: Pre-construction (3–6 months)

- [ ] Site feasibility study and soil testing
- [ ] Obtain land documents (Khata, Encumbrance Certificate, Title Deed)
- [ ] Engage a licensed architect for building plan
- [ ] Submit building plan to BBMP or BDA for approval
- [ ] Obtain Fire NOC from Karnataka State Fire and Emergency Services
- [ ] Obtain pollution clearance if applicable
- [ ] Set up a dedicated project bank account

## Phase 2: Design & Engineering (2–3 months)

- [ ] Finalize architectural drawings (all floors, sections, elevations)
- [ ] Complete structural design with RCC detailing
- [ ] Electrical load calculation and panel design
- [ ] Plumbing and firefighting layout
- [ ] HVAC zoning design
- [ ] Bill of Quantities (BOQ) for tender

## Phase 3: Construction

- [ ] Mobilize contractor and confirm site manager
- [ ] Open BBMP commencement certificate
- [ ] Start foundation work after structural engineer inspection
- [ ] Track milestone-based payments (never pay ahead of milestones)
- [ ] Weekly site meetings with progress reports
- [ ] Quality checks at each structural milestone

## Phase 4: Fit-out & Commissioning

- [ ] Electrical testing and BESCOM connection
- [ ] Plumbing pressure test
- [ ] Fire suppression system testing
- [ ] Occupancy Certificate from BBMP
- [ ] GST input credit documentation

## Our commercial project experience

We have delivered offices for tech companies, retail showrooms, restaurants, and mixed-use developments across Bengaluru's major commercial corridors. Every project comes with a dedicated project manager and weekly board-ready progress reports.

Reach out to discuss your commercial project today.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Technology: '#1B4D8E',
    'Tips & Guides': '#2E7D52',
    'Pricing & Planning': '#C8860A',
    'Interior Design': '#8B3A8F',
    Commercial: '#1B4D8E',
  };
  return colors[category] ?? '#1B4D8E';
}
