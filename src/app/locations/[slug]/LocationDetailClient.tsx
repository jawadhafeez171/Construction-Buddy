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
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInquire = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setIsModalOpen(true);
  };

  const getEngineeringSubtitle = () => {
    switch (location.zoneSlug) {
      case 'central':
        return `Geotechnical foundation design, street-access logistics, and BBMP heritage sanction guidelines for plots and villa re-developments across ${location.name}.`;
      case 'north':
        return `Granitic bedrock excavation, AAI aerodrome height clearances, and structural wind-load engineering for residential construction in ${location.name}.`;
      case 'south':
        return `Sub-surface water table management, NGT rajakaluve setback buffers, and BDA layout compliance for independent homes in ${location.name}.`;
      case 'east':
        return `Lake-basin soil settlement mitigation, high-durability concrete curing, and tech-corridor municipal guidelines in ${location.name}.`;
      case 'west':
        return `Contour grading, stepped plinth stability, retaining wall design, and traditional Vaastu orientations for homes in ${location.name}.`;
      default:
        return `Site-specific soil bearing calculations, water table management, and municipal guidelines optimized for ${location.name}.`;
    }
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
              {getEngineeringSubtitle()}
            </p>
          </div>

          {/* Chief Structural Engineer's Advisory Box */}
          {location.engineeringAdvisory && (
            <div className={styles.advisoryBox}>
              <div className={styles.advisoryHeader}>
                <div className={styles.advisoryBadgeRow}>
                  <span className={styles.advisoryChiefBadge}>
                    👷‍♂️ Chief Engineer&apos;s Field Advisory
                  </span>
                  <span className={styles.advisoryStandardBadge}>
                    IS 1892 &amp; IS 456 Vetted
                  </span>
                </div>
                <h3 className={styles.advisoryTitle}>
                  Geotechnical &amp; Municipal Advisory for {location.name}
                </h3>
                <p className={styles.advisoryZonalSub}>
                  <strong>Zonal Classification:</strong> {location.engineeringAdvisory.zoneClassification}
                </p>
              </div>

              {/* Factsheet Matrix */}
              <div className={styles.factsheetGrid}>
                <div className={styles.factsheetCard}>
                  <span className={styles.factsheetLabel}>Soil Bearing Capacity (SBC)</span>
                  <span className={styles.factsheetValue}>{location.engineeringAdvisory.safeBearingCapacityBenchmark}</span>
                </div>
                <div className={styles.factsheetCard}>
                  <span className={styles.factsheetLabel}>Recommended Concrete &amp; Steel</span>
                  <span className={styles.factsheetValue}>{location.engineeringAdvisory.recommendedConcreteGrade}</span>
                </div>
                <div className={styles.factsheetCard}>
                  <span className={styles.factsheetLabel}>Typical Plot Dimensions</span>
                  <span className={styles.factsheetValue}>{location.engineeringAdvisory.typicalPlotDimensions}</span>
                </div>
              </div>

              {/* Advisory Grid */}
              <div className={styles.advisoryGrid}>
                <div className={styles.advisoryCard}>
                  <div className={styles.advisoryCardHeader}>
                    <span className={styles.advisoryCardIcon}>⚠️</span>
                    <h4 className={styles.advisoryCardTitle}>Sub-surface Caution</h4>
                  </div>
                  <p className={styles.advisoryCardBody}>{location.engineeringAdvisory.subsurfaceCaution}</p>
                </div>

                <div className={styles.advisoryCard}>
                  <div className={styles.advisoryCardHeader}>
                    <span className={styles.advisoryCardIcon}>🏗️</span>
                    <h4 className={styles.advisoryCardTitle}>Foundation Strategy</h4>
                  </div>
                  <p className={styles.advisoryCardBody}>{location.engineeringAdvisory.foundationStrategy}</p>
                </div>

                <div className={styles.advisoryCard}>
                  <div className={styles.advisoryCardHeader}>
                    <span className={styles.advisoryCardIcon}>📜</span>
                    <h4 className={styles.advisoryCardTitle}>Bylaw &amp; Setback Watch</h4>
                  </div>
                  <p className={styles.advisoryCardBody}>{location.engineeringAdvisory.bylawAndSetbackWatch}</p>
                </div>

                <div className={styles.advisoryCard}>
                  <div className={styles.advisoryCardHeader}>
                    <span className={styles.advisoryCardIcon}>💧</span>
                    <h4 className={styles.advisoryCardTitle}>Water &amp; Basement Protocol</h4>
                  </div>
                  <p className={styles.advisoryCardBody}>{location.engineeringAdvisory.waterAndBasementAdvice}</p>
                </div>
              </div>

              {/* Transit & Site Logistics */}
              <div className={styles.advisoryCard} style={{ marginBottom: '1.25rem' }}>
                <div className={styles.advisoryCardHeader}>
                  <span className={styles.advisoryCardIcon}>🚚</span>
                  <h4 className={styles.advisoryCardTitle}>Site Logistics &amp; Concrete Pouring Plan</h4>
                </div>
                <p className={styles.advisoryCardBody}>{location.engineeringAdvisory.siteLogistics}</p>
              </div>

              {/* E-E-A-T Disclaimer Banner */}
              <div className={styles.eeatDisclaimer}>
                <span className={styles.eeatIcon}>⚖️</span>
                <p className={styles.eeatText}>
                  <strong>Engineering Protocol Note:</strong> Soil bearing figures, rock strata depths, and water table benchmarks stated for {location.name} represent empirical zonal averages from Construction Buddy&apos;s field logs across {location.zone}. Because sub-surface lithology can vary significantly between adjacent survey plots (especially near water bodies, valleys, or quarry zones), every Construction Buddy project includes a mandatory on-site IS 1892-compliant borehole test and structural vetting by our licensed structural engineers before excavation begins.
                </p>
              </div>
            </div>
          )}

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
              Transparent turnkey rates for independent homes, multi-generational duplexes, and luxury villas in {location.name}, backed by a guaranteed 1,200-point locked BOQ:
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {/* Standard Package */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTier}>Standard Package</div>
              <div className={styles.pricingRate}>
                ₹1,940
                <span className={styles.pricingPer}>/sq.ft</span>
              </div>
              <p className={styles.pricingDesc}>
                A budget package with no compromise on quality that includes all construction essentials.
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ Fe 550 Steel &amp; 53 Grade Cement (Ultratech/ACC)</li>
                <li>✓ Standard floor tiles up to ₹50/sq.ft</li>
                <li>✓ Solid wood flush doors &amp; aluminum windows</li>
                <li>✓ Internal wall paint: Tractor Emulsion (2 coats)</li>
                <li>✓ 10-Year structural warranty &amp; Cera/Parryware fittings</li>
              </ul>
              <button
                type="button"
                onClick={() => handleInquire('Standard')}
                className={styles.pricingBtn}
              >
                Get Standard Quote
              </button>
            </div>

            {/* Premium Package (Featured) */}
            <div className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
              <div className={styles.featuredBadge}>Most Popular in {location.name}</div>
              <div className={styles.pricingTier}>Premium Package</div>
              <div className={styles.pricingRate}>
                ₹2,070
                <span className={styles.pricingPer}>/sq.ft</span>
              </div>
              <p className={styles.pricingDesc}>
                Our best seller package with upgraded brands like Jindal Steels, Jaquar, and Hindware.
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ Superior brand steel (Jindal/TATA) &amp; Ultratech cement</li>
                <li>✓ Refined vitrified tiles up to ₹100/sq.ft</li>
                <li>✓ Elegant teakwood main door &amp; UPVC windows</li>
                <li>✓ Stylish Jaquar / Hindware kitchen &amp; bath fittings</li>
                <li>✓ 10-Year structural warranty &amp; Tractor Shyne Emulsion</li>
              </ul>
              <button
                type="button"
                onClick={() => handleInquire('Premium')}
                className={`${styles.pricingBtn} ${styles.pricingBtnPrimary}`}
              >
                Get Premium Quote
              </button>
            </div>

            {/* Luxury Package */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingTier}>Luxury Package</div>
              <div className={styles.pricingRate}>
                ₹2,400
                <span className={styles.pricingPer}>/sq.ft</span>
              </div>
              <p className={styles.pricingDesc}>
                An elegant package crafted for modern living with solar setup, designer teak doors, and premium finishes.
              </p>
              <ul className={styles.pricingFeatures}>
                <li>✓ TATA Tiscon Fe550D &amp; Ultratech Super structural concrete</li>
                <li>✓ Double charge floor tiles up to ₹140/sq.ft</li>
                <li>✓ Designer teak main &amp; puja doors, premium UPVC windows</li>
                <li>✓ High-end Jaquar / Kohler luxury fixtures</li>
                <li>✓ 10-Year structural warranty &amp; solar pre-wiring</li>
              </ul>
              <button
                type="button"
                onClick={() => handleInquire('Luxury')}
                className={styles.pricingBtn}
              >
                Get Luxury Quote
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ color: '#9fb0c7', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
              Also building custom luxury architectural residences in {location.name}: <strong>Elite (₹2,640)</strong>, <strong>Imperial (₹3,990)</strong>, <strong>Royal Estate (₹4,690)</strong>, and <strong>Palatial (₹5,490)</strong>.
            </p>
            <Link href="/compare-packages" className={styles.viewAllBtn}>
              Compare All 7 Packages Side-by-Side →
            </Link>
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
              Frequently asked engineering, costing, and municipal approval questions for prospective homeowners in {location.name} ({location.pincode}).
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
                    Starting from ₹1,940/sq.ft →
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
        <ContactModal
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPackage(null);
          }}
          initialPackage={selectedPackage || undefined}
        />
      )}
    </main>
  );
}
