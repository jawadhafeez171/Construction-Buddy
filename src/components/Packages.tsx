'use client';

import { useState } from 'react';
import { standardPackages, luxuryPackages } from '@/lib/packagesData';
import ContactModal from './ContactModal';
import styles from './Packages.module.css';

export default function Packages() {
  const [isLuxury, setIsLuxury] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePackages = isLuxury ? luxuryPackages : standardPackages;

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
        <p className={styles.sectionLabel}>Our Offerings</p>
        <h2 className={styles.sectionHeading}>
          Construction Packages in <span>Bengaluru</span>
        </h2>
        <p className={styles.sectionSub}>
          Transparent pricing tailored for both high-value budget builds and elite,
          custom architectural estates.
        </p>

        {/* ── Sliding Toggle ── */}
        <div className={styles.toggleWrapper}>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${!isLuxury ? styles.toggleActive : ''}`}
              onClick={() => setIsLuxury(false)}
            >
              Standard Tiers
              <span className={styles.startsAt}>starts at ₹1,940/sqft</span>
            </button>
            <button
              className={`${styles.toggleBtn} ${isLuxury ? styles.toggleActive : ''}`}
              onClick={() => setIsLuxury(true)}
            >
              Luxury Estates
              <span className={styles.startsAt}>starts at ₹3,990/sqft</span>
            </button>
            <div className={`${styles.toggleSlider} ${isLuxury ? styles.slideRight : ''}`} />
          </div>
        </div>

        {/* ── Package Cards Grid ── */}
        <div className={`${styles.grid} ${isLuxury ? styles.gridThree : styles.gridFour}`}>
          {activePackages.map((pkg, index) => (
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
                style={{ backgroundImage: 'url(/bg_pkg_watermark.png)' }} 
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

              {/* Highlights */}
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
          ))}
        </div>

        {/* Compare Packages CTA Banner */}
        <div className={styles.compareBanner}>
          <p className={styles.compareText}>
            Want a detailed side-by-side specifications breakdown?{' '}
            <a href="/compare-packages" className={styles.compareLink}>
              Compare Construction Packages Side-by-Side <span className={styles.compareArrow}>→</span>
            </a>
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
