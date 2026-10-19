'use client';

import { useState } from 'react';
import Link from 'next/link';
import { standardPackages, luxuryPackages } from '@/lib/packagesData';
import ContactModal from './ContactModal';
import styles from './Packages.module.css';

export default function Packages() {
  const [isLuxury, setIsLuxury] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const activePackages = isLuxury ? luxuryPackages : standardPackages;

  const toggleCard = (pkgName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [pkgName]: !prev[pkgName]
    }));
  };

  const areAllExpanded = activePackages.length > 0 && activePackages.every(pkg => !!expandedCards[pkg.name]);

  const toggleAll = () => {
    const nextState = !areAllExpanded;
    const updated: Record<string, boolean> = { ...expandedCards };
    activePackages.forEach(pkg => {
      updated[pkg.name] = nextState;
    });
    setExpandedCards(updated);
  };

  const handleInquire = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setIsModalOpen(true);
  };

  const getTierClass = (name: string) => {
    switch (name.toLowerCase()) {
      case 'standard':    return styles.tierStandard;
      case 'premium':     return styles.tierPremium;
      case 'luxury':      return styles.tierLuxury;
      case 'elite':       return styles.tierElite;
      case 'imperial':    return styles.tierImperial;
      case 'royal estate': return styles.tierRoyal;
      case 'palatial':    return styles.tierPalatial;
      default:            return '';
    }
  };

  const getBtnClass = (pkg: typeof activePackages[0]) => {
    if (!pkg.popular) return styles.btnGhost;
    return isLuxury ? styles.btnGold : styles.btnNavy;
  };

  return (
    <section id="packages" className={styles.packagesSection}>
      {/* Background grid overlay */}
      <div className={styles.gridOverlay} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <p className={styles.sectionLabel}>All 7 Construction Packages</p>
        <h2 className={styles.sectionHeading}>
          Construction Packages in <span>Bengaluru</span>
        </h2>
        <p className={styles.sectionSub}>
          Choose from 7 comprehensive packages across 2 collections: 4 Standard Living tiers (₹1,940 – ₹2,640/sqft) and 3 Luxury Architectural Estates (₹3,990 – ₹5,490/sqft).
        </p>

        {/* ── Sliding Toggle ── */}
        <div className={styles.toggleWrapper}>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${!isLuxury ? styles.toggleActive : ''}`}
              onClick={() => setIsLuxury(false)}
            >
              Standard Living (4 Packages)
              <span className={styles.startsAt}>Standard, Premium, Luxury, Elite · from ₹1,940/sqft</span>
            </button>
            <button
              className={`${styles.toggleBtn} ${isLuxury ? styles.toggleActive : ''}`}
              onClick={() => setIsLuxury(true)}
            >
              Luxury Estates (3 Packages)
              <span className={styles.startsAt}>Imperial, Royal Estate, Palatial · from ₹3,990/sqft</span>
            </button>
            <div className={`${styles.toggleSlider} ${isLuxury ? styles.slideRight : ''}`} />
          </div>
        </div>

        {/* ── Global Expand / Collapse Control ── */}
        <div className={styles.globalControls}>
          <button
            type="button"
            onClick={toggleAll}
            className={styles.globalToggleBtn}
          >
            <span>{areAllExpanded ? 'Collapse All Specifications ▴' : 'Expand All Specifications ▾'}</span>
          </button>
        </div>

        {/* ── Package Cards Grid ── */}
        <div className={`${styles.grid} ${isLuxury ? styles.gridThree : styles.gridFour}`}>
          {activePackages.map((pkg, index) => {
            const isExpanded = !!expandedCards[pkg.name];
            return (
              <div
                key={pkg.name}
                className={`${styles.card} ${pkg.popular ? styles.popular : ''} ${isLuxury ? styles.luxuryCard : ''} ${getTierClass(pkg.name)}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Card Header Image Banner */}
                <div className={styles.cardHeaderImageContainer}>
                  <img src={pkg.image} alt={pkg.name} className={styles.cardHeaderImage} />
                  {pkg.popular && (
                    <div className={styles.popularBadge}>
                      ★ &nbsp;MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Subtle background watermark icon */}
                <div 
                  className={styles.cardWatermark} 
                  style={{ backgroundImage: 'url(/bg_pkg_watermark.webp)' }} 
                />

                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <div className={styles.pkgPrice}>
                    <span className={styles.amount}>{pkg.price}</span>
                    <span className={styles.perSqft}>/ sqft</span>
                  </div>
                  <p className={styles.pkgDesc}>{pkg.description}</p>
                </div>

                <div className={styles.cardDivider} />

                {/* Collapsible Specs Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleCard(pkg.name)}
                  className={styles.specsToggleBtn}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Hide Specifications' : 'View Specifications'} ({pkg.highlights.length})</span>
                  <span className={`${styles.chevron} ${isExpanded ? styles.chevronUp : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible Highlights Box */}
                <div className={`${styles.collapsibleContent} ${isExpanded ? styles.open : ''}`}>
                  <div className={styles.collapsibleInner}>
                    <div className={styles.highlightsBox}>
                      <div className={styles.highlightsTitle}>Key Specifications</div>
                      <ul className={styles.list}>
                        {pkg.highlights.map((item, i) => (
                          <li key={i} className={styles.listItem}>
                            <span className={styles.checkIconWrap}>
                              <svg
                                className={styles.checkIcon}
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className={styles.itemText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className={styles.cardFooter}>
                  <button
                    onClick={() => handleInquire(pkg.name)}
                    className={`btn ${styles.btnFull} ${getBtnClass(pkg)}`}
                  >
                    Inquire About {pkg.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collection Notice Banner */}
        {!isLuxury ? (
          <div className={styles.collectionBanner}>
            <span>Showing 4 Standard Living packages (₹1,940 – ₹2,640/sqft). Looking for Italian marble, private elevators &amp; double-height ceilings?</span>
            <button
              type="button"
              onClick={() => setIsLuxury(true)}
              className={styles.switchTabLink}
            >
              View 3 Luxury Estates (Imperial, Royal Estate &amp; Palatial from ₹3,990/sqft) →
            </button>
          </div>
        ) : (
          <div className={styles.collectionBanner}>
            <span>Showing 3 Luxury Estate packages: Imperial (₹3,990), Royal Estate (₹4,690) &amp; Palatial (₹5,490/sqft).</span>
            <button
              type="button"
              onClick={() => setIsLuxury(false)}
              className={styles.switchTabLink}
            >
              ← View 4 Standard Living Packages (from ₹1,940/sqft)
            </button>
          </div>
        )}

        {/* Compare Packages CTA Banner */}
        <div className={styles.compareBanner}>
          <p className={styles.compareText}>
            Want a detailed side-by-side technical breakdown of all 7 packages?{' '}
            <Link href="/compare-packages" className={styles.compareLink}>
              Compare All 7 Packages Side-by-Side <span className={styles.compareArrow}>→</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <ContactModal
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPackage(null);
          }}
          initialPackage={selectedPackage || undefined}
        />
      )}
    </section>
  );
}
