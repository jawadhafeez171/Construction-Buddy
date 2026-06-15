'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { standardPackages, luxuryPackages } from '@/lib/packagesData';
import ContactModal from '@/components/ContactModal';
import styles from './calculator.module.css';

// Formats cost in Lakhs or Crores according to Indian numbering system
function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Crores`;
  }
  return `₹${(amount / 100000).toFixed(2)} Lakhs`;
}

// Dynamically extracts number from string like "₹1,940" to adapt if data source changes
function parseBasePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
}

export default function CalculatorClient() {
  const [preset, setPreset] = useState<'30x40' | '40x60' | '50x80' | 'custom'>('30x40');
  const [floors, setFloors] = useState<number>(2); // Default G+1 (2 floors)
  const [coverage, setCoverage] = useState<number>(80); // Default 80% coverage
  const [builtUpArea, setBuiltUpArea] = useState<number>(1920); // 1200 * 2 * 0.8 = 1920 sqft
  const [activeTab, setActiveTab] = useState<'standard' | 'luxury'>('standard');
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; costStr: string } | null>(null);
  const [expandedBreakdown, setExpandedBreakdown] = useState<string | null>(null);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const areaInputRef = useRef<HTMLInputElement>(null);

  // Sync built-up area when preset, floor count, or coverage ratio changes
  useEffect(() => {
    let plotArea = 1200;
    if (preset === '30x40') plotArea = 1200;
    else if (preset === '40x60') plotArea = 2400;
    else if (preset === '50x80') plotArea = 4000;
    else return; // If custom, do not override manual changes

    const calculatedArea = plotArea * floors * (coverage / 100);
    // Clamp to valid range
    const clamped = Math.min(12000, Math.max(800, Math.round(calculatedArea)));
    setBuiltUpArea(clamped);
  }, [preset, floors, coverage]);

  // Update notification dynamically if they have already calculated results once
  useEffect(() => {
    if (showResults) {
      setNotification(`Estimates successfully updated for a ${builtUpArea.toLocaleString()} sqft home (${floors === 1 ? 'G+0' : `G+${floors - 1}`} floors)!`);
    }
  }, [builtUpArea, floors, showResults]);

  const handlePresetChange = (selected: '30x40' | '40x60' | '50x80' | 'custom') => {
    setPreset(selected);
    if (selected === 'custom') {
      setIsAdvancedOpen(true);
      setTimeout(() => {
        if (areaInputRef.current) {
          areaInputRef.current.focus();
          areaInputRef.current.select();
        }
      }, 150);
    }
  };

  const handleFloorsChange = (count: number) => {
    setFloors(count);
  };

  const handleFloorsNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 1;
    setFloors(Math.min(8, Math.max(1, val)));
  };

  const handleAreaSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreset('custom');
    setBuiltUpArea(parseInt(e.target.value) || 800);
  };

  const handleAreaNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreset('custom');
    const val = parseInt(e.target.value) || 0;
    setBuiltUpArea(Math.min(12000, val));
  };

  const handleAreaBlur = () => {
    if (builtUpArea < 800) setBuiltUpArea(800);
    if (builtUpArea > 12000) setBuiltUpArea(12000);
  };

  const handleInquire = (pkgName: string, totalCostStr: string) => {
    setSelectedPackage({ name: pkgName, costStr: totalCostStr });
    setIsModalOpen(true);
  };

  const handleCalculate = () => {
    setShowResults(true);
    setNotification(`Estimates successfully calculated for a ${builtUpArea.toLocaleString()} sqft home (${floors === 1 ? 'G+0' : `G+${floors - 1}`} floors)!`);
    
    // Smooth scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById('estimates-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const currentPackages = activeTab === 'standard' ? standardPackages : luxuryPackages;

  const getBtnClass = (popular: boolean) => {
    if (!popular) return styles.btnGhost;
    return activeTab === 'luxury' ? styles.btnGold : styles.btnNavy;
  };

  const breakdownRatios = [
    { name: 'Civil & Structure', percentage: 52, icon: '🧱' },
    { name: 'Flooring & Finishes', percentage: 22, icon: '✨' },
    { name: 'Plumbing & Electrical', percentage: 12, icon: '⚡' },
    { name: 'Doors & Windows', percentage: 8, icon: '🚪' },
    { name: 'Architect & Supervision', percentage: 6, icon: '📐' }
  ];

  return (
    <div className={styles.calculatorPage}>
      {/* ── Hero Header ── */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>›</span>
                <span style={{ color: 'var(--gold-light)' }}>Cost Calculator</span>
              </nav>
              <h1 className={styles.title}>
                Construction <span>Cost Calculator</span>
              </h1>
              <p className={styles.subtitle}>
                Estimate your residential construction budget in Bengaluru instantly. Adjust parameters to compare our packages.
              </p>
              <div className={styles.trustTags}>
                <span className={styles.trustTag}>✓ 100% Transparent Rates</span>
                <span className={styles.trustTag}>⚡ Instant Estimates</span>
                <span className={styles.trustTag}>📍 Bangalore Standards</span>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <img
                src="/calculator_hero.png"
                alt="Modern luxury house facade Bangalore"
                className={styles.heroImage}
              />
              <div className={styles.floatingTag}>
                <span className={styles.floatingTagNum}>0%</span>
                <span className={styles.floatingTagText}>Hidden Costs</span>
              </div>
              <div className={styles.floatingTagSecond}>
                <span className={styles.floatingTagText}>📍 Bangalore Rates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div className={styles.stackedLayout}>
          {/* ── Top Horizontal Control Deck ── */}
          <section className={styles.horizontalDeck}>
            {/* Column 1: Core Inputs */}
            <div className={styles.deckCol}>
              <div className={styles.controlGroup}>
                <div className={styles.sectionLabel}>
                  1. Plot Size
                </div>
                <div className={styles.btnGroup}>
                  <button
                    onClick={() => handlePresetChange('30x40')}
                    className={`${styles.presetBtn} ${preset === '30x40' ? styles.activeBtn : ''}`}
                  >
                    30 x 40 <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.8, fontWeight: 500 }}>1.2k sqft plot</span>
                  </button>
                  <button
                    onClick={() => handlePresetChange('40x60')}
                    className={`${styles.presetBtn} ${preset === '40x60' ? styles.activeBtn : ''}`}
                  >
                    40 x 60 <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.8, fontWeight: 500 }}>2.4k sqft plot</span>
                  </button>
                  <button
                    onClick={() => handlePresetChange('50x80')}
                    className={`${styles.presetBtn} ${preset === '50x80' ? styles.activeBtn : ''}`}
                  >
                    50 x 80 <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.8, fontWeight: 500 }}>4k sqft plot</span>
                  </button>
                  <button
                    onClick={() => handlePresetChange('custom')}
                    className={`${styles.presetBtn} ${preset === 'custom' ? styles.activeBtn : ''}`}
                  >
                    Custom <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.8, fontWeight: 500 }}>Manual</span>
                  </button>
                </div>
              </div>

              <div className={styles.controlGroup} style={{ marginBottom: 0 }}>
                <div className={styles.sectionLabel}>
                  2. Number of Floors
                </div>
                <div className={styles.floorsGrid}>
                  {[1, 2, 3, 4, 5].map((num) => {
                    const label = num === 1 ? 'G+0' : `G+${num - 1}`;
                    return (
                      <button
                        key={num}
                        onClick={() => handleFloorsChange(num)}
                        className={`${styles.floorBtn} ${floors === num ? styles.activeBtn : ''}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Column 2: Building visualizer */}
            <div className={`${styles.deckCol} ${styles.deckColCenter}`}>
              <div className={styles.sectionLabel} style={{ justifyContent: 'center' }}>
                Interactive Model
              </div>
              <div className={styles.visualizerContainer}>
                <div className={styles.buildingFrame}>
                  {Array.from({ length: floors }, (_, i) => i + 1).map((floorNum) => {
                    const isGround = floorNum === 1;
                    const floorLabel = isGround ? 'Ground' : `G+${floorNum - 1}`;
                    return (
                      <div
                        key={floorNum}
                        className={`${styles.floorBlock} ${isGround ? styles.groundFloor : ''}`}
                      >
                        <div className={styles.floorWindow} />
                        <div className={styles.floorWindow} />
                        <span className={styles.floorLabelText}>{floorLabel}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.groundLine} />
              </div>
            </div>

            {/* Column 3: Guided Project Summary & Calculate */}
            <div className={`${styles.deckCol} ${styles.deckColAction}`}>
              <div className={styles.sectionLabel}>
                3. Project Summary
              </div>
              <div className={styles.summaryStatsCard}>
                <div className={styles.statRow}>
                  <span>Plot Size:</span>
                  <strong>{preset === 'custom' ? 'Custom dimensions' : `${preset} site`}</strong>
                </div>
                <div className={styles.statRow}>
                  <span>Total Floors:</span>
                  <strong>{floors === 1 ? 'G+0 (1 level)' : `G+${floors - 1} (${floors} levels)`}</strong>
                </div>
                <div className={styles.statRow}>
                  <span>Est. Area:</span>
                  <strong>{builtUpArea.toLocaleString()} sqft</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className={`btn btn-primary ${styles.calculateBtn}`}
              >
                Calculate Cost
                <svg className={styles.calculateArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </section>

          {/* ── Advanced Options Accordion Toggle ── */}
          <div className={styles.accordionContainer}>
            <button
              type="button"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className={styles.accordionHeaderBtn}
            >
              {isAdvancedOpen ? '⚙️ Hide Advanced Settings ▲' : '⚙️ Show Advanced Settings (Plot Coverage & Setbacks) ▼'}
            </button>
          </div>

          {isAdvancedOpen && (
            <section className={styles.advancedDrawer}>
              <div className={styles.advancedGrid}>
                {/* Advanced Column 1: Coverage selection */}
                <div className={styles.advCol}>
                  <div className={styles.sectionLabel}>
                    Plot Coverage Ratio
                    <span className={styles.helperTooltip} title="Percentage of your plot area constructed after setbacks.">ℹ️</span>
                  </div>
                  <div className={styles.btnGroup}>
                    {[70, 80, 90].map((ratio) => (
                      <button
                        key={ratio}
                        type="button"
                        onClick={() => setCoverage(ratio)}
                        className={`${styles.presetBtn} ${coverage === ratio ? styles.activeBtn : ''}`}
                      >
                        {ratio}% <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.8 }}>
                          {ratio === 80 ? 'Standard' : ratio === 70 ? 'Setbacks' : 'Max Area'}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className={styles.inputDisplayRow} style={{ marginTop: '1.5rem' }}>
                    <div className={styles.sectionLabel} style={{ marginBottom: 0 }}>
                      Manual Floors Override
                      <span className={styles.helperTooltip} title="Specify custom number of floors (1 to 8 floors total).">ℹ️</span>
                    </div>
                    <div className={styles.numberInputContainer}>
                      <input
                        type="number"
                        value={floors}
                        onChange={handleFloorsNumberChange}
                        min={1}
                        max={8}
                        className={styles.numberInput}
                      />
                      <span className={styles.inputSuffix}>levels</span>
                    </div>
                  </div>
                </div>

                {/* Advanced Column 2: Slider & Number Area Overrides */}
                <div className={styles.advCol}>
                  <div className={styles.inputDisplayRow}>
                    <div className={styles.sectionLabel} style={{ marginBottom: 0 }}>
                      Manual Built-Up Area Override
                    </div>
                    <div className={styles.numberInputContainer}>
                      <input
                        ref={areaInputRef}
                        type="number"
                        value={builtUpArea}
                        onChange={handleAreaNumber}
                        onBlur={handleAreaBlur}
                        min={800}
                        max={12000}
                        className={styles.numberInput}
                      />
                      <span className={styles.inputSuffix}>sqft</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={800}
                    max={12000}
                    step={50}
                    value={builtUpArea}
                    onChange={handleAreaSlider}
                    className={styles.sliderInput}
                  />
                  <div className={styles.sliderLimits}>
                    <span>800 sqft</span>
                    <span>12,000 sqft</span>
                  </div>
                </div>
              </div>

              <div className={styles.advancedDrawerAction}>
                <button
                  type="button"
                  onClick={handleCalculate}
                  className={`btn btn-primary ${styles.calculateBtn}`}
                >
                  Calculate Cost
                  <svg className={styles.calculateArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </section>
          )}

          {/* ── Bottom: Live Results Grid ── */}
          <main id="estimates-results" className={styles.resultsContainerWide}>
            {showResults ? (
              <>
                {notification && (
                  <div className={styles.successAlertBanner}>
                    <span className={styles.alertIcon}>✓</span>
                    <p className={styles.alertText}>{notification}</p>
                  </div>
                )}

                {/* Tab Swapping */}
                <div className={styles.tabToggleWrapper}>
                  <div className={styles.tabToggleContainer}>
                    <button
                      onClick={() => setActiveTab('standard')}
                      className={`${styles.tabBtn} ${activeTab === 'standard' ? styles.activeTabBtn : ''}`}
                    >
                      Standard Home Tiers
                    </button>
                    <button
                      onClick={() => setActiveTab('luxury')}
                      className={`${styles.tabBtn} ${activeTab === 'luxury' ? styles.activeTabBtn : ''}`}
                    >
                      Luxury Villa Estates
                    </button>
                  </div>
                </div>

                {/* Live Cards Grid */}
                <div className={`${styles.packagesGridWide} ${activeTab === 'standard' ? styles.gridFourWide : styles.gridThreeWide}`}>
                  {currentPackages.map((pkg) => {
                    const basePriceNum = parseBasePrice(pkg.price);
                    const computedCost = basePriceNum * builtUpArea;
                    const formattedCost = formatIndianCurrency(computedCost);

                    const tierClass = 
                      pkg.name.toLowerCase() === 'standard' ? styles.tierStandard :
                      pkg.name.toLowerCase() === 'premium' ? styles.tierPremium :
                      pkg.name.toLowerCase() === 'luxury' ? styles.tierLuxury :
                      pkg.name.toLowerCase() === 'elite' ? styles.tierElite :
                      pkg.name.toLowerCase() === 'imperial' ? styles.tierImperial :
                      pkg.name.toLowerCase() === 'royal estate' ? styles.tierRoyal :
                      pkg.name.toLowerCase() === 'palatial' ? styles.tierPalatial : '';

                    const isExpanded = expandedBreakdown === pkg.name;

                    return (
                      <div
                        key={pkg.name}
                        className={`${styles.pkgCardWide} ${pkg.popular ? styles.popular : ''} ${tierClass}`}
                      >
                        {pkg.popular && <div className={styles.popularBadge}>POPULAR CHOICE</div>}
                        
                        <div className={styles.cardMainContent}>
                          <h3 className={styles.pkgName}>{pkg.name}</h3>
                          <div className={styles.baseRate}>
                            Base Rate: <span>{pkg.price}/sqft</span>
                          </div>

                          {/* Cost capsule badge */}
                          <div className={styles.costBadge}>
                            <span className={styles.costBadgeLabel}>Estimated Cost</span>
                            <span className={styles.costBadgeVal}>{formattedCost}</span>
                          </div>

                          <p className={styles.pkgDesc}>{pkg.description}</p>

                          <div className={styles.highlightsBox}>
                            <div className={styles.highlightsTitle}>SPECIFICATIONS INCLUDE</div>
                            <ul className={styles.list}>
                              {pkg.highlights.slice(0, 4).map((item, i) => (
                                <li key={i} className={styles.listItem}>
                                  <span className={styles.checkIconWrap}>
                                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span className={styles.itemText}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Dynamic Cost Breakdown Accordion */}
                          <div className={styles.breakdownToggle}>
                            <button
                              type="button"
                              onClick={() => setExpandedBreakdown(isExpanded ? null : pkg.name)}
                              className={styles.breakdownBtn}
                            >
                              {isExpanded ? 'Hide Cost Breakdown ▲' : 'Show Cost Breakdown ▼'}
                            </button>
                          </div>

                          {isExpanded && (
                            <div className={styles.breakdownDetails}>
                              {breakdownRatios.map((item) => {
                                const itemCost = (computedCost * item.percentage) / 100;
                                return (
                                  <div key={item.name} className={styles.breakdownRow}>
                                    <div className={styles.breakdownInfo}>
                                      <span>{item.icon} {item.name}</span>
                                      <strong>{formatIndianCurrency(itemCost)}</strong>
                                    </div>
                                    <div className={styles.progressBarBg}>
                                      <div
                                        className={styles.progressBarFill}
                                        style={{ width: `${item.percentage}%` }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        <div style={{ marginTop: '1.5rem' }}>
                          <button
                            onClick={() => handleInquire(pkg.name, formattedCost)}
                            className={`btn ${styles.btnFull} ${getBtnClass(pkg.popular)}`}
                          >
                            Inquire Estimate
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className={styles.resultsPlaceholder}>
                <div className={styles.placeholderIcon}>📊</div>
                <h3 className={styles.placeholderTitle}>Ready to Calculate Your Cost?</h3>
                <p className={styles.placeholderDesc}>
                  Select your plot size preset and floor levels above, then click the **Calculate Cost** button. The estimator will instantly generate a breakdown of costs and let you compare package details side-by-side.
                </p>
                <button
                  type="button"
                  onClick={handleCalculate}
                  className={`btn btn-primary ${styles.placeholderCalculateBtn}`}
                >
                  Generate Estimate Now
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ── Mobile Sticky Bottom Summary Banner ── */}
      {showResults && (
        <div className={styles.mobileFloatingBar}>
          <div className={styles.mobileBarInfo}>
            <span className={styles.mobileBarLabel}>Total Estimated Area</span>
            <strong className={styles.mobileBarValue}>{builtUpArea.toLocaleString()} sqft ({floors === 1 ? 'G+0' : `G+${floors - 1}`} Floors)</strong>
          </div>
          <button
            onClick={() => {
              const firstPkgName = currentPackages[0]?.name || 'Standard';
              const rate = parseBasePrice(currentPackages[0]?.price || '0');
              const totalStr = formatIndianCurrency(rate * builtUpArea);
              handleInquire(firstPkgName, totalStr);
            }}
            className={`btn btn-primary ${styles.mobileBarCta}`}
          >
            Book Consultation
          </button>
        </div>
      )}

      {/* ── Contact Modal hookup ── */}
      {isModalOpen && selectedPackage && (
        <ContactModal
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPackage(null);
          }}
          initialPackage={selectedPackage.name}
          initialArea={builtUpArea}
          initialCost={selectedPackage.costStr}
        />
      )}
    </div>
  );
}
