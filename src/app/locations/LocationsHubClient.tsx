'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BengaluruZoneInfo, LocalityData } from '@/lib/locationsData';
import styles from './locationsHub.module.css';

interface LocationsHubClientProps {
  zones: BengaluruZoneInfo[];
  locations: LocalityData[];
}

export default function LocationsHubClient({
  zones,
  locations,
}: LocationsHubClientProps) {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      const matchesZone = selectedZone === 'all' || loc.zoneSlug === selectedZone;
      const matchesSearch =
        searchQuery === '' ||
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.pincode.includes(searchQuery) ||
        loc.zone.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesZone && matchesSearch;
    });
  }, [locations, selectedZone, searchQuery]);

  return (
    <main className={styles.pageWrapper}>
      {/* ── Hub Hero ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>Bengaluru Locations</span>
          </nav>

          <span className={styles.heroBadge}>CITYWIDE RESIDENTIAL BUILD NETWORK</span>
          <h1 className={styles.heroTitle}>
            Construction Services Across <span className={styles.titleAccent}>76 Bengaluru Localities</span>
          </h1>
          <p className={styles.heroDesc}>
            From colonial bungalow restorations in Central Bengaluru to high-tech gated villas in Whitefield, Sarjapur, and Hebbal — explore our localized geotechnical specs, BBMP bylaws, and turnkey pricing across all 5 city zones.
          </p>

          {/* Quick Stat Badges */}
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <strong>76</strong>
              <span>Active Localities</span>
            </div>
            <div className={styles.statBox}>
              <strong>5</strong>
              <span>City Zones Covered</span>
            </div>
            <div className={styles.statBox}>
              <strong>10-Yr</strong>
              <span>Structural Warranty</span>
            </div>
            <div className={styles.statBox}>
              <strong>100%</strong>
              <span>BBMP / BDA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search & Zone Filter Bar ── */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            {/* Search Input */}
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search neighborhood or PIN (e.g. Whitefield, 560001, Koramangala)..."
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={styles.searchClear}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Zone Buttons */}
            <div className={styles.zoneButtonGroup}>
              <button
                type="button"
                onClick={() => setSelectedZone('all')}
                className={`${styles.zoneBtn} ${selectedZone === 'all' ? styles.zoneBtnActive : ''}`}
              >
                All Zones ({locations.length})
              </button>
              {zones.map((zone) => (
                <button
                  key={zone.slug}
                  type="button"
                  onClick={() => setSelectedZone(zone.slug)}
                  className={`${styles.zoneBtn} ${selectedZone === zone.slug ? styles.zoneBtnActive : ''}`}
                >
                  {zone.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Directory Grid ── */}
      <section className={styles.directorySection}>
        <div className={styles.container}>
          {filteredLocations.length === 0 ? (
            <div className={styles.noResults}>
              <p>No localities matched &ldquo;{searchQuery}&rdquo; in this zone.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedZone('all');
                  setSearchQuery('');
                }}
                className={styles.resetBtn}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={styles.cardsGrid}>
              {filteredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className={styles.localityCard}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardZone}>{loc.zone}</span>
                    <span className={styles.cardPin}>PIN {loc.pincode}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{loc.name}</h3>
                  <p className={styles.cardTagline}>{loc.tagline}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardPrice}>
                      <span>Starting from</span>
                      <strong>₹{loc.avgCostPerSqFt.essential}/sq.ft</strong>
                    </div>
                    <span className={styles.cardArrow}>Explore Specs →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
