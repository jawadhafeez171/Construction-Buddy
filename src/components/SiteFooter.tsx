'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import { nameToSlug } from '@/lib/locationsData';
import { scrollToSection } from '@/lib/navigation';
import styles from './SiteFooter.module.css';

const BENGALURU_ZONES = [
  {
    name: 'Central Core',
    badge: 'Primary Focus',
    localities: [
      'Lavelle Road',
      'Richmond Town',
      'MG Road',
      'Cunningham Road',
      'Vasanth Nagar',
      'Sadashivanagar',
      'Malleshwaram',
      'Frazer Town',
      'Cox Town',
      'Benson Town',
      'Cooke Town',
      'Ulsoor',
      'Shanthi Nagar',
      'Langford Town',
      'Victoria Layout',
      'Ashok Nagar',
    ],
  },
  {
    name: 'North Zone',
    localities: [
      'Hebbal',
      'Yelahanka',
      'Jakkur',
      'Sahakar Nagar',
      'Thanisandra',
      'Hennur Road',
      'Devanahalli',
      'Manyata Tech Park',
      'Vidyaranyapura',
      'RMV Extension',
      'RT Nagar',
      'Sanjaynagar',
      'Bellary Road',
      'Kogilu',
      'Doddaballapur Road',
    ],
  },
  {
    name: 'South Zone',
    localities: [
      'Koramangala',
      'HSR Layout',
      'Jayanagar',
      'JP Nagar',
      'BTM Layout',
      'Bannerghatta Road',
      'Electronic City',
      'Kanakapura Road',
      'Padmanabhanagar',
      'Banashankari',
      'Harlur Road',
      'Kasavanahalli',
      'Uttarahalli',
      'Begur',
      'Gottigere',
    ],
  },
  {
    name: 'East Zone',
    localities: [
      'Indiranagar',
      'Whitefield',
      'Sarjapur Road',
      'Bellandur',
      'Marathahalli',
      'Varthur',
      'CV Raman Nagar',
      'Mahadevapura',
      'KR Puram',
      'Brookefield',
      'Hoodi',
      'Kadugodi',
      'Domlur',
      'Panathur',
      'Budigere Cross',
    ],
  },
  {
    name: 'West Zone',
    localities: [
      'Rajajinagar',
      'Basavanagudi',
      'Vijayanagar',
      'Nagarbhavi',
      'Yeshwanthpur',
      'Mahalakshmi Layout',
      'RR Nagar',
      'Kengeri',
      'Chandra Layout',
      'Peenya',
      'Magadi Road',
      'Mallathahalli',
      'Subramanyapura',
      'Ullal',
      'Sir MV Layout',
    ],
  },
];

export default function SiteFooter() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [isLocalitiesOpen, setIsLocalitiesOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('open-contact-modal', handleOpenContact);

    const handleHash = () => {
      if (window.location.hash === '#contact') {
        setIsContactOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHash);
    if (window.location.hash === '#contact') {
      handleHash();
    }

    return () => {
      window.removeEventListener('open-contact-modal', handleOpenContact);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="contact" className={styles.footer}>
        {/* Glow aesthetics */}
        <div className={styles.glowTopRight} />
        <div className={styles.glowBottomLeft} />

        <div className={styles.container}>
          {/* ── Option C: Typographic Directory (Collapsible 76 Localities at Top of Footer) ── */}
          <div className={styles.directorySection}>
            <div
              className={styles.directoryHeader}
              onClick={() => setIsLocalitiesOpen(!isLocalitiesOpen)}
              role="button"
              tabIndex={0}
              aria-expanded={isLocalitiesOpen}
              aria-controls="bengaluru-localities-grid"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsLocalitiesOpen(!isLocalitiesOpen);
                }
              }}
            >
              <div className={styles.directoryHeaderLeft}>
                <div className={styles.directoryTitleWrap}>
                  <svg className={styles.directoryTitleIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h4 className={styles.directoryTitle}>Bengaluru Service Localities</h4>
                  <span className={styles.directoryCountBadge}>76 Micro-Markets · 5 Zones</span>
                </div>
                <p className={styles.directoryDesc}>
                  Turnkey residential construction, architectural sanction drawings, and interior projects delivered across all 5 zones of Bengaluru.
                </p>
              </div>

              <div className={styles.directoryHeaderActions} onClick={(e) => e.stopPropagation()}>
                <Link href="/locations" className={styles.directoryHubLink}>
                  Explore Directory Hub →
                </Link>

                <button
                  type="button"
                  className={styles.directoryToggleBtn}
                  onClick={() => setIsLocalitiesOpen(!isLocalitiesOpen)}
                  aria-expanded={isLocalitiesOpen}
                  aria-controls="bengaluru-localities-grid"
                >
                  <span>{isLocalitiesOpen ? 'Hide Localities' : 'Show All Localities'}</span>
                  <svg
                    className={`${styles.chevronIcon} ${isLocalitiesOpen ? styles.chevronOpen : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="bengaluru-localities-grid"
              className={`${styles.collapseWrapper} ${isLocalitiesOpen ? styles.collapseWrapperOpen : ''}`}
            >
              <div className={styles.collapseInner}>
                <div className={styles.directoryGrid}>
                  {BENGALURU_ZONES.map((zone) => (
                    <div key={zone.name} className={styles.directoryColumn}>
                      <div className={styles.zoneHeading}>
                        <span className={styles.zoneHeadingName}>{zone.name}</span>
                        {zone.badge && <span className={styles.zoneBadge}>{zone.badge}</span>}
                      </div>
                      <ul className={styles.directoryList}>
                        {zone.localities.map((loc) => (
                          <li key={loc} className={styles.directoryItem}>
                            <Link href={`/locations/${nameToSlug(loc)}`} className={styles.directoryLink}>
                              {loc}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Main Footer 4-Column Grid ── */}
          <div className={styles.mainGrid}>
            {/* Column 1: Brand Profile & Assurance */}
            <div>
              <Link href="/" className={styles.brandLogo}>
                <div className={styles.brandNameWrap}>
                  <span className={styles.brandWordWhite}>Construction</span>
                  <span className={styles.brandWordGold}>Buddy</span>
                </div>
                <span className={styles.brandSubtitle}>Home &amp; Commercial Contractors</span>
              </Link>

              <p className={styles.brandDesc}>
                Bengaluru&apos;s premier building companion. Specializing in architectural drafting, turnkey residential construction, 3D BIM modeling, and bespoke interior design.
              </p>

              <div className={styles.guaranteeBadges}>
                <div className={styles.badgeItem}>
                  <svg className={styles.badgeIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>10-Year Structural Warranty</span>
                </div>
                <div className={styles.badgeItem}>
                  <svg className={styles.badgeIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Penalty-Backed Handover Guarantee</span>
                </div>
                <div className={styles.badgeItem}>
                  <svg className={styles.badgeIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                  <span>BBMP &amp; BDA Sanction-Compliant Plans</span>
                </div>
              </div>
            </div>

            {/* Column 2: Specialized Services */}
            <div>
              <h4 className={styles.columnTitle}>Our Services</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/services/home-construction" className={styles.footerLink}>
                    <span>Turnkey Home Construction</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/architectural-structural-drawings" className={styles.footerLink}>
                    <span>Architectural &amp; Structural Plans</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-construction" className={styles.footerLink}>
                    <span>Commercial Construction</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/interior-design" className={styles.footerLink}>
                    <span>Luxury Interior Design</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/waterproofing-solutions" className={styles.footerLink}>
                    <span>Waterproofing Systems</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/building-information-modelling" className={styles.footerLink}>
                    <span>3D BIM Clash Detection</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/renovation-repair" className={styles.footerLink}>
                    <span>Renovation &amp; Structural Repair</span>
                  </Link>
                </li>
                <li style={{ marginTop: '0.25rem' }}>
                  <Link href="/services" className={`${styles.footerLink} ${styles.footerLinkHighlight}`}>
                    <span>Explore All Services →</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links & Tools */}
            <div>
              <h4 className={styles.columnTitle}>Tools &amp; Explore</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/calculator" className={`${styles.footerLink} ${styles.footerLinkHighlight}`}>
                    <span>Cost Calculator</span>
                  </Link>
                </li>
                <li>
                  <Link href="/compare-packages" className={styles.footerLink}>
                    <span>Compare 7 Packages</span>
                  </Link>
                </li>
                <li>
                  <Link href="/vastu-compass" className={`${styles.footerLink} ${styles.footerLinkHighlight}`}>
                    <span>Vastu Plot Compass ✨</span>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => scrollToSection('packages', e)}
                    className={styles.footerLink}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span>Package Pricing</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => scrollToSection('projects', e)}
                    className={styles.footerLink}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span>Project Portfolio</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => scrollToSection('how-it-works', e)}
                    className={styles.footerLink}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span>5-Step Build Process</span>
                  </button>
                </li>
                <li>
                  <Link href="/refer" className={styles.footerLink}>
                    <span>Refer &amp; Earn Rewards</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={styles.footerLink}>
                    <span>Construction Insights &amp; Guides</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Bengaluru HQ */}
            <div>
              <h4 className={styles.columnTitle}>Headquarters</h4>
              <div className={styles.contactInfoList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Bengaluru Operations Hub</strong>
                    <span>Karnataka, India</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <a href="tel:+919902800693" className={styles.contactLink}>
                      +91 99028 00693
                    </a>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#7e91aa' }}>
                      Direct line &amp; WhatsApp support
                    </span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <a href="mailto:info@constructionbuddy.in" className={styles.contactLink}>
                      info@constructionbuddy.in
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div>
                    <span style={{ color: '#ffffff' }}>Mon – Sat: 9:00 AM – 7:30 PM</span>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: '#7e91aa' }}>
                      Sundays by site booking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sub-Footer Bar ── */}
          <div className={styles.subFooter}>
            <div>
              &copy; {currentYear} Construction Buddy. All rights reserved. Registered contractors in Karnataka.
            </div>

            <div className={styles.creditText}>
              Designed by{' '}
              <a
                href="https://www.hafeezstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.creditLink}
              >
                Hafeez Studio
              </a>
            </div>

            <div className={styles.legalLinks}>
              <button
                type="button"
                className={styles.legalBtn}
                onClick={() => setActiveLegalModal('privacy')}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className={styles.legalBtn}
                onClick={() => setActiveLegalModal('terms')}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Interactive Contact Modal ── */}
      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}

      {/* ── Legal Policy Dialog ── */}
      {activeLegalModal && (
        <div className={styles.policyBackdrop} onClick={() => setActiveLegalModal(null)}>
          <div className={styles.policyModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.policyHeader}>
              <h3 className={styles.policyTitle}>
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                type="button"
                className={styles.policyCloseBtn}
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className={styles.policyBody}>
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>Last Updated: {currentYear}</strong>
                  </p>
                  <p>
                    At Construction Buddy, we value your privacy and are committed to protecting the personal information you share with us.
                  </p>
                  <h4>1. Information We Collect</h4>
                  <p>
                    When you request estimates, cost calculations, site inspections, or consultations, we collect your name, phone number, email address, plot dimensions, and construction location in Bengaluru.
                  </p>
                  <h4>2. How We Use Your Information</h4>
                  <p>
                    Your details are used strictly to provide structural estimates, schedule on-site inspections, generate BOQ packages, and communicate project updates. We never sell or distribute your data to third-party telemarketers.
                  </p>
                  <h4>3. Data Security</h4>
                  <p>
                    All project blueprints, site inspection logs, and client contracts are stored securely with strict internal access protocols.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Last Updated: {currentYear}</strong>
                  </p>
                  <p>
                    Welcome to Construction Buddy. By accessing our services, cost calculators, and architectural consultations, you agree to the following terms:
                  </p>
                  <h4>1. Construction Estimates &amp; Contracts</h4>
                  <p>
                    Estimates generated on our web calculator are indicative planning projections based on current Bengaluru material and labor benchmarks. Final contracted rates are locked and guaranteed upon detailed structural design and mutual agreement sign-off.
                  </p>
                  <h4>2. 10-Year Structural Warranty</h4>
                  <p>
                    Our residential builds carry a comprehensive 10-year structural warranty covering reinforced cement concrete (RCC) frame integrity, foundation stability, and designated waterproofing systems as defined in the signed client agreement.
                  </p>
                  <h4>3. Approvals &amp; Compliance</h4>
                  <p>
                    All architectural and structural plans are designed in adherence to BBMP/BDA bylaws and Council of Architecture (CoA) standards.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
