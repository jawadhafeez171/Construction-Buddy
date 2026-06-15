'use client';

import { useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { comparisonCategories, CompareCategory } from '@/lib/compareData';
import ContactModal from '@/components/ContactModal';
import styles from './compare.module.css';

// Types
type StandardKeys = 'standard' | 'premium' | 'luxury' | 'elite';
type LuxuryKeys = 'imperial' | 'royal' | 'palatial';
type PackageKeys = StandardKeys | LuxuryKeys;

interface PackageInfo {
  key: PackageKeys;
  name: string;
  price: string;
  desc: string;
  accentColor: string;
}

const standardTiersList: PackageInfo[] = [
  { key: 'standard', name: 'Standard', price: '₹1,940', desc: 'Essential quality, budget-conscious build', accentColor: '#94a3b8' },
  { key: 'premium',  name: 'Premium',  price: '₹2,070', desc: 'Upgraded materials, our best-seller',       accentColor: '#1B4D8E' },
  { key: 'luxury',   name: 'Luxury',   price: '₹2,400', desc: 'Modern living & solar-ready comfort',       accentColor: '#C8860A' },
  { key: 'elite',    name: 'Elite',    price: '₹2,640', desc: 'Full automation & EV-charging ready',       accentColor: '#0d1824' },
];

const luxuryEstatesList: PackageInfo[] = [
  { key: 'imperial', name: 'Imperial',     price: '₹3,990', desc: 'Italian marble & 12ft ceilings',          accentColor: '#7c5cbf' },
  { key: 'royal',    name: 'Royal Estate', price: '₹4,690', desc: 'Smart automation, elevator & AC',         accentColor: '#C8860A' },
  { key: 'palatial', name: 'Palatial',     price: '₹5,490', desc: 'Bespoke mansion with private lap pool',   accentColor: '#0d1824' },
];

interface FAQItem { q: string; a: string; }

const faqList: FAQItem[] = [
  {
    q: "What's the difference between each package?",
    a: "The difference lies in material grades, brand lists, blockwork insulation, tiles/granite budgets, plumbing CP/Sanitary fixtures, painting finishes, electrical automation levels, and specialized luxury installations (like solar water heaters, EV points, elevators, or pools)."
  },
  {
    q: "Can I customize a package?",
    a: "Yes! Every Construction Buddy package features generous pre-allocated 'wallet budgets' for finishes like floor tiles, countertops, switches, and bathrooms. If you want custom premium selections, you can upgrade easily and pay the exact price difference."
  },
  {
    q: "Will I get choices in fittings?",
    a: "Absolutely. We offer an extensive digital catalog and physical material showroom samples so you can choose colors, profiles, and brands matching your aesthetic preferences before final placement."
  },
  {
    q: "What is a wallet amount?",
    a: "A wallet amount is a built-in material budget included in your overall sqft price. You are free to buy any item within this price range. If you select a higher-end item exceeding the wallet allowance, only the surplus amount is billed."
  },
  {
    q: "Do the prices include GST?",
    a: "Yes, all our package pricing tiers are completely inclusive of the standard goods and services tax (GST)."
  },
  {
    q: "Are there any hidden costs?",
    a: "No. Construction Buddy operates on 100% transparency. Every cost (excavation, approvals assistance, steel tonnages, finishing works) is detailed in the contract. Once signed, the price is guaranteed."
  },
  {
    q: "Is the compound wall included in the package?",
    a: "To ensure fairness, compound walls are offered as an optional add-on. Since plot boundary lengths and sharing terms vary between neighbors in Bengaluru, you only pay for the exact running-foot length your site requires."
  },
  {
    q: "Do you provide a warranty or guarantee on the work?",
    a: "Yes. Construction Buddy offers an industry-leading 10-year structural warranty on all RCC frames and load-bearing structures, alongside a 1-year leakage & finishing quality warranty. Manufacturer warranties apply directly to all installed appliances and sanitary fittings."
  }
];

// Smart cell renderer — detects Included/Not Included and renders icons
function CellValue({ value }: { value: string }) {
  const v = value.trim();

  // "Included" patterns → green check
  if (
    v === 'Included' ||
    v.toLowerCase().startsWith('included') ||
    v === '✓'
  ) {
    return (
      <span className={styles.cellIncluded}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }

  // "Not Included" → subtle X
  if (
    v === 'Not Included' ||
    v.toLowerCase() === 'not included' ||
    v === '✗' ||
    v === '×'
  ) {
    return (
      <span className={styles.cellNotIncluded}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </span>
    );
  }

  // Contains ₹ → price-coloured
  if (v.includes('₹')) {
    return <span className={`${styles.cellText} ${styles.cellPrice}`}>{v}</span>;
  }

  // Brand names (contains / meaning alternatives) → brand colour
  if (v.includes('/') && !v.includes('sqft') && !v.includes('Ltrs')) {
    return <span className={`${styles.cellText} ${styles.cellBrand}`}>{v}</span>;
  }

  return <span className={styles.cellText}>{v}</span>;
}

const filterIcons: Record<string, string> = {
  'All': '📋',
  'Structural': '🏗️',
  'Kitchen': '🍳',
  'Bathroom': '🚿',
  'Painting': '🎨',
  'Flooring': '🪟',
  'Fittings': '🛁',
  'Doors & Windows': '🚪',
  'Electrical': '⚡',
  'Water': '💧',
  'Railings': '🔩',
  'Gas': '🔥',
  'AC': '❄️',
  'Elevator': '🛗',
  'Automation': '🏠',
};

export default function CompareClient() {
  const [activeCategory, setActiveCategory] = useState<'standard' | 'luxury'>('standard');
  const [selectedSpecFilter, setSelectedSpecFilter] = useState<string>('All');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const stickyHeaderRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  const currentTiers = activeCategory === 'standard' ? standardTiersList : luxuryEstatesList;

  const baseSpecGroups = [
    'All', 'Structural', 'Kitchen', 'Bathroom', 'Painting', 'Flooring',
    'Fittings', 'Doors & Windows', 'Electrical', 'Water', 'Railings', 'Gas', 'Elevator',
  ];
  const luxuryOnlyGroups = ['AC', 'Automation'];
  const specGroups = activeCategory === 'luxury'
    ? [...baseSpecGroups, ...luxuryOnlyGroups]
    : baseSpecGroups;

  // Categories that are exclusive to Luxury Estates
  const luxuryOnlyCategoryTitles = ['Air Conditioning', 'Home Automation & Safety'];

  const getFilteredCategories = (): CompareCategory[] => {
    const filterMap: { [key: string]: string } = {
      'Structural': 'Structural Details',
      'Kitchen': 'Kitchen',
      'Bathroom': 'Bathroom',
      'Painting': 'Painting',
      'Flooring': 'Flooring',
      'Fittings': 'Fittings & Fixtures',
      'Doors & Windows': 'Doors & Windows',
      'Electrical': 'Electrical',
      'Water': 'Water Storage',
      'Railings': 'Railings & Grills',
      'Gas': 'Gas Connection',
      'AC': 'Air Conditioning',
      'Elevator': 'Elevator',
      'Automation': 'Home Automation & Safety',
    };

    // Start with all categories, then strip luxury-only ones if on standard tiers
    let categories = selectedSpecFilter === 'All'
      ? comparisonCategories
      : comparisonCategories.filter(cat => cat.title === filterMap[selectedSpecFilter]);

    if (activeCategory === 'standard') {
      categories = categories.filter(cat => !luxuryOnlyCategoryTitles.includes(cat.title));
    }

    return categories;
  };

  const handleInquire = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setIsModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Returns true if all standard tier values for this row are "Not Included"
  const isAllNotIncludedInStandard = (item: { specs: Record<string, string> }): boolean => {
    const standardKeys: StandardKeys[] = ['standard', 'premium', 'luxury', 'elite'];
    return standardKeys.every(k => item.specs[k]?.trim() === 'Not Included');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!tableRef.current) return;
      const rect = tableRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 80 && rect.bottom >= 220);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.comparePage}>

      {/* ── Hero ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.pageLabel}>📊 Technical Specification Matrix</span>
            <h1 className={styles.pageTitle}>
              Compare <span className={styles.pageTitleAccent}>Packages</span>
            </h1>
            <p className={styles.pageSubtitle}>
              Inspect brands, materials and wallet budgets side-by-side across all 7 tiers — 
              from efficient standard builds to palatial estate constructions.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>7</span>
                <span className={styles.heroStatLabel}>Packages</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>14</span>
                <span className={styles.heroStatLabel}>Categories</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>60+</span>
                <span className={styles.heroStatLabel}>Specifications</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>100%</span>
                <span className={styles.heroStatLabel}>Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Comparison Section ── */}
      <section className={styles.comparisonSection}>
        <div className="container">

          {/* Control Deck */}
          <div className={styles.controlDeck}>

            {/* Standard vs Luxury Toggle */}
            <div className={styles.categoryToggle}>
              <button
                className={`${styles.toggleTab} ${activeCategory === 'standard' ? styles.tabActive : ''}`}
                onClick={() => {
                  setActiveCategory('standard');
                  setIsSticky(false);
                  if (luxuryOnlyGroups.includes(selectedSpecFilter)) setSelectedSpecFilter('All');
                }}
              >
                Standard Tiers
                <span className={styles.toggleTag}>₹1,940 – ₹2,640 / sqft</span>
              </button>
              <button
                className={`${styles.toggleTab} ${activeCategory === 'luxury' ? styles.tabActive : ''}`}
                onClick={() => { setActiveCategory('luxury'); setIsSticky(false); }}
              >
                Luxury Estates
                <span className={styles.toggleTag}>₹3,990 – ₹5,490 / sqft</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className={styles.filterGroup}>
              {specGroups.map(group => (
                <button
                  key={group}
                  className={`${styles.filterBtn} ${selectedSpecFilter === group ? styles.filterBtnActive : ''}`}
                  onClick={() => { setSelectedSpecFilter(group); setIsSticky(false); }}
                >
                  {filterIcons[group] ? `${filterIcons[group]} ` : ''}{group}
                </button>
              ))}
            </div>
          </div>

          {/* ── Sticky Floating Header ── */}
          <div
            className={`${styles.stickyHeaderRow} ${isSticky ? styles.stickyActive : ''}`}
            ref={stickyHeaderRef}
          >
            <div className="container">
              <div
                className={styles.stickyFlexWrapper}
                style={{ gridTemplateColumns: `220px repeat(${currentTiers.length}, 1fr)` }}
              >
                <div className={styles.stickyTitleCol}>Parameters</div>
                {currentTiers.map(tier => (
                  <div key={tier.key} className={styles.stickyColumn}>
                    <div className={styles.stickyColHeader}>
                      <span className={styles.stickyTierName}>{tier.name}</span>
                      <span className={styles.stickyTierPrice}>{tier.price}/sqft</span>
                    </div>
                    <button
                      className={styles.stickyCta}
                      onClick={() => handleInquire(tier.name)}
                    >
                      Choose
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Main Table ── */}
          <div className={styles.tableResponsiveWrapper}>
            <table className={styles.comparisonTable} ref={tableRef}>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                      Specification Parameter
                    </span>
                  </th>
                  {currentTiers.map(tier => (
                    <th key={tier.key} style={{ textAlign: 'center' }}>
                      {/* Accent color bar at top */}
                      <div className={styles.tierHeaderInner}>
                        <div
                          className={styles.tierAccentBar}
                          style={{ background: tier.accentColor }}
                        />
                        <span className={styles.thTierName}>{tier.name}</span>
                        <div className={styles.thPriceBlock}>
                          <span className={styles.thTierPrice}>{tier.price}</span>
                          <span className={styles.thPriceUnit}>/ sqft</span>
                        </div>
                        <p className={styles.thTierDesc}>{tier.desc}</p>
                        <button
                          onClick={() => handleInquire(tier.name)}
                          className={styles.tableColCta}
                        >
                          Choose {tier.name}
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getFilteredCategories().map((category) => {
                  // When on standard tiers, hide rows where all 4 standard values are "Not Included"
                  const visibleItems = activeCategory === 'standard'
                    ? category.items.filter(item => !isAllNotIncludedInStandard(item))
                    : category.items;

                  // Skip the entire category block if no rows are visible
                  if (visibleItems.length === 0) return null;

                  return (
                    <Fragment key={category.title}>
                      <tr className={styles.categoryHeaderRow}>
                        <td colSpan={currentTiers.length + 1}>
                          <div className={styles.categoryTitleCell}>
                            <span className={styles.categoryIcon}>{category.icon}</span>
                            {category.title}
                          </div>
                        </td>
                      </tr>
                      {visibleItems.map(item => (
                        <tr key={item.name} className={styles.specDataRow}>
                          <td className={styles.paramNameCell}>{item.name}</td>
                          {currentTiers.map(tier => (
                            <td key={tier.key} className={styles.specValueCell}>
                              <CellValue value={item.specs[tier.key as PackageKeys]} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ── Bottom CTA Banner ── */}
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaBannerTitle}>Ready to start building your dream home?</h2>
            <p className={styles.ctaBannerSub}>
              Our team will help you pick the right package and walk you through every specification.
            </p>
            <button className={styles.ctaBannerBtn} onClick={() => handleInquire(undefined as any)}>
              Get a Free Consultation →
            </button>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className="container">
          <p className={styles.faqLabel}>Got Questions?</p>
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          <p className={styles.faqSub}>
            Everything you need to know about wallet allocations, customization, warranties and build standards.
          </p>

          <div className={styles.accordionContainer}>
            {faqList.map((faq, index) => (
              <div
                key={index}
                className={`${styles.accordionItem} ${activeFaq === index ? styles.accordionItemOpen : ''}`}
              >
                <button className={styles.accordionHeader} onClick={() => toggleFaq(index)}>
                  <span className={styles.accordionTitle}>{faq.q}</span>
                  <span className={styles.accordionIcon}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className={styles.accordionBody}>
                  <div className={styles.accordionContent}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <ContactModal
          onClose={() => { setIsModalOpen(false); setSelectedPackage(undefined); }}
          initialPackage={selectedPackage}
        />
      )}
    </main>
  );
}
