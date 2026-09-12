'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LocalityData } from '@/lib/locationsData';
import ContactModal from '@/components/ContactModal';
import styles from './location.module.css';

interface LocationDetailClientProps {
  location: LocalityData;
  nearbyLocations: LocalityData[];
}

export default function LocationDetailClient({
  location,
  nearbyLocations,
}: LocationDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className={styles.pageWrapper}>
      {/* ── Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlowTop} />
        <div className={styles.heroGlowBottom} />

        <div className={styles.container}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href="/locations" className={styles.breadcrumbLink}>Bengaluru Locations</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>{location.name}</span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badgeRow}>
              <span className={styles.zoneBadge}>📍 {location.zone}</span>
              <span className={styles.pinBadge}>PIN: {location.pincode}</span>
              <span className={styles.focusBadge}>Turnkey Builder</span>
            </div>

            <h1 className={styles.heroTitle}>
              Turnkey House Construction &amp; Architecture in{' '}
              <span className={styles.titleAccent}>{location.name}</span>, Bengaluru
            </h1>

            <p className={styles.heroTagline}>{location.tagline}</p>
            <p className={styles.heroDesc}>{location.overview}</p>

            <div className={styles.heroActions}>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={styles.primaryCta}
              >
                <span>Book Free Site Consultation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <Link href="/calculator" className={styles.calcCta}>
                <span>Calculate Cost for {location.name} →</span>
              </Link>

              <a
                href={`https://wa.me/919902800693?text=Hi%20Construction%20Buddy%2C%20I%20am%20planning%20to%20construct%20a%20home%20in%20${encodeURIComponent(location.name)}%2C%20Bengaluru.`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCta}
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights Strip ── */}
      <section className={styles.highlightsStrip}>
        <div className={styles.container}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>🛡️</span>
              <div>
                <strong>10-Year Structural Warranty</strong>
                <span>Covers RCC frame, foundation &amp; core stability</span>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>⏱️</span>
              <div>
                <strong>Guaranteed On-Time Handover</strong>
                <span>Penalty-backed timeline built into client agreement</span>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>📐</span>
              <div>
                <strong>BBMP / BDA Compliant</strong>
                <span>Guaranteed sanction-approved architectural plans</span>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>💰</span>
              <div>
                <strong>Fixed-Price Contract</strong>
                <span>Zero mid-construction escalation on locked BOQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Geotechnical & Municipal Blueprint ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>LOCAL ENGINEERING BLUEPRINT</span>
            <h2 className={styles.sectionTitle}>
              Engineering &amp; Sanction Guidelines for {location.name}
            </h2>
            <p className={styles.sectionSubtitle}>
              Every neighborhood in Bengaluru has unique soil bearing values, water table depths, and ward bylaws. Here is how our engineering team optimizes construction for plots in {location.name}.
            </p>
          </div>

          <div className={styles.specsGrid}>
            {/* Spec 1: Soil & Foundation */}
            <div className={styles.specCard}>
              <div className={styles.specCardHeader}>
                <span className={styles.specIcon}>🏗️</span>
                <h3>Soil Stratum &amp; Foundation</h3>
              </div>
              <p className={styles.specDesc}>{location.soilAndFoundation}</p>
              <div className={styles.specFeatureList}>
                <span>• Site-specific SBC load calculation</span>
                <span>• Fe550D TMT reinforcement cages</span>
                <span>• Anti-termite crystalline chemical barrier</span>
              </div>
            </div>

            {/* Spec 2: Bylaws & Sanctions */}
            <div className={styles.specCard}>
              <div className={styles.specCardHeader}>
                <span className={styles.specIcon}>📜</span>
                <h3>Bylaws &amp; Sanction Authority</h3>
              </div>
              <p className={styles.specDesc}><strong>Jurisdiction:</strong> {location.bylawAuthority}</p>
              <p className={styles.specDesc}><strong>FAR &amp; Setbacks:</strong> {location.farAndSetbacks}</p>
              <div className={styles.specFeatureList}>
                <span>• Full liaison for Plan Sanction (CC / OC)</span>
                <span>• BBMP tree preservation &amp; setback compliance</span>
              </div>
            </div>

            {/* Spec 3: Water & Plumbing */}
            <div className={styles.specCard}>
              <div className={styles.specCardHeader}>
                <span className={styles.specIcon}>💧</span>
                <h3>Water Table &amp; RWH Mandates</h3>
              </div>
              <p className={styles.specDesc}>{location.waterAndBorewell}</p>
              <div className={styles.specFeatureList}>
                <span>• Dual plumbing piping for greywater separation</span>
                <span>• Engineered 3,000L - 10,000L percolation sump</span>
                <span>• Complete hydrostatic damp-proofing</span>
              </div>
            </div>

            {/* Spec 4: Architectural Styles */}
            <div className={styles.specCard}>
              <div className={styles.specCardHeader}>
                <span className={styles.specIcon}>🎨</span>
                <h3>Popular Architectural Vernacular</h3>
              </div>
              <p className={styles.specDesc}>
                Homeowners and developers in {location.name} favor the following design languages:
              </p>
              <div className={styles.stylePills}>
                {location.popularStyles.map((style) => (
                  <span key={style} className={styles.stylePill}>
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Construction Cost Benchmarks ── */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>TRANSPARENT PRICING</span>
            <h2 className={styles.sectionTitle}>
              Construction Cost Benchmarks in {location.name}
            </h2>
            <p className={styles.sectionSubtitle}>
              Current per-sq.ft turnkey building estimates in {location.name} across our 3 premier specification tiers:
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {/* Essential Tier */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTier}>Essential Tier</div>
              <div className={styles.pricingRate}>
                ₹{location.avgCostPerSqFt.essential}
                <span className={styles.pricingPer}>/sq.ft</span>
              </div>
              <p className={styles.pricingDesc}>
                Ideal for modern high-yield rental units and smart budget independent residences.
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ Standard RCC framed structure (M20 grade)</li>
                <li>✓ Fe550D TMT steel &amp; solid concrete blocks</li>
                <li>✓ Vitrified tile flooring (₹65/sq.ft)</li>
                <li>✓ 5-Year waterproof warranty</li>
              </ul>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={styles.pricingBtn}
              >
                Get Essential Quote
              </button>
            </div>

            {/* Executive Tier (Featured) */}
            <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
              <div className={styles.featuredBadge}>Most Popular in {location.name}</div>
              <div className={styles.pricingTier}>Executive Tier</div>
              <div className={styles.pricingRate}>
                ₹{location.avgCostPerSqFt.executive}
                <span className={styles.pricingPer}>/sq.ft</span>
              </div>
              <p className={styles.pricingDesc}>
                Premium family duplexes with designer sanitaryware, teak main door, and solar pre-wiring.
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ Heavy-duty RCC M25 grade concrete</li>
                <li>✓ Teakwood main door frame &amp; designer shutter</li>
                <li>✓ Premium vitrified or granite flooring (₹110/sq.ft)</li>
                <li>✓ Jaquar / Kohler concealed plumbing fixtures</li>
                <li>✓ 10-Year structural warranty</li>
              </ul>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={`${styles.pricingBtn} ${styles.pricingBtnPrimary}`}
              >
                Get Executive Quote
              </button>
            </div>

            {/* Luxury Tier */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTier}>Luxury Architectural</div>
              <div className={styles.pricingRate}>
                ₹{location.avgCostPerSqFt.luxury}+
                <span className={styles.pricingPer}>/sq.ft</span>
              </div>
              <p className={styles.pricingDesc}>
                Ultra-luxury bespoke villas with Italian marble, home automation, and acoustic glass facades.
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ Bespoke 3D BIM clash-detected RCC engineering</li>
                <li>✓ Italian marble or solid hardwood flooring</li>
                <li>✓ Grohe / Hansgrohe luxury bath systems</li>
                <li>✓ Double-height living spaces &amp; elevator core</li>
                <li>✓ 10-Year structural &amp; 10-year waterproofing warranty</li>
              </ul>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={styles.pricingBtn}
              >
                Get Luxury Villa Quote
              </button>
            </div>
          </div>

          <div className={styles.calculatorBanner}>
            <div className={styles.calcBannerText}>
              <h4>Want an exact itemized bill of quantities (BOQ) for your plot?</h4>
              <p>Use our interactive construction cost estimator calibrated for Bengaluru materials.</p>
            </div>
            <Link href="/calculator" className={styles.calcBannerBtn}>
              Launch Cost Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key Landmarks in Area ── */}
      {location.keyLandmarks.length > 0 && (
        <section className={styles.landmarksSection}>
          <div className={styles.container}>
            <div className={styles.landmarksWrap}>
              <span className={styles.landmarkTitle}>Key Landmarks &amp; Hubs in {location.name}:</span>
              <div className={styles.landmarkPills}>
                {location.keyLandmarks.map((lm) => (
                  <span key={lm} className={styles.landmarkPill}>
                    📍 {lm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Frequently Asked Questions ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>LOCAL EXPERTISE</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions for {location.name} Builds
            </h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about building a home, zoning laws, and costs in {location.name}.
            </p>
          </div>

          <div className={styles.faqList}>
            {location.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question} className={styles.faqItem}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqQuestion}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqToggleIcon}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Internal Cross-Linking: Nearby Localities in Same Zone ── */}
      {nearbyLocations.length > 0 && (
        <section className={styles.nearbySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>EXPLORE {location.zone.toUpperCase()}</span>
              <h3 className={styles.sectionTitle}>
                Other Prominent Localities in {location.zone}
              </h3>
            </div>

            <div className={styles.nearbyGrid}>
              {nearbyLocations.map((near) => (
                <Link
                  key={near.slug}
                  href={`/locations/${near.slug}`}
                  className={styles.nearbyCard}
                >
                  <div className={styles.nearbyName}>{near.name}</div>
                  <div className={styles.nearbyTagline}>{near.tagline}</div>
                  <div className={styles.nearbyRate}>
                    Starting at ₹{near.avgCostPerSqFt.essential}/sq.ft →
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/locations" className={styles.viewAllBtn}>
                View All 76 Bengaluru Localities Directory →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Consultation Modal ── */}
      {isModalOpen && (
        <ContactModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
