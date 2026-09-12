'use client';

import React, { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import ContactModal from '@/components/ContactModal';
import {
  VASTU_ZONES,
  VASTU_ROOMS,
  PLOT_ORIENTATIONS,
  VASTU_FAQS,
  VastuZone,
  VastuRoom,
  PlotOrientation
} from '@/lib/vastuData';
import styles from './vastu.module.css';

export default function VastuCompassClient() {
  const [selectedFacing, setSelectedFacing] = useState<'North' | 'East' | 'South' | 'West'>('North');
  const [activeTab, setActiveTab] = useState<'room-finder' | 'mandala' | 'scorecard'>('room-finder');
  const [selectedRoomId, setSelectedRoomId] = useState<string>('pooja-room');
  const [selectedZoneId, setSelectedZoneId] = useState<string>('north-east');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Scorecard state
  const [scoreFacing, setScoreFacing] = useState<'North' | 'East' | 'South' | 'West'>('North');
  const [scoreKitchen, setScoreKitchen] = useState<string>('south-east');
  const [scoreMasterBed, setScoreMasterBed] = useState<string>('south-west');
  const [scorePooja, setScorePooja] = useState<string>('north-east');
  const [scoreSump, setScoreSump] = useState<string>('north-east');

  // Compute rotation angle based on selected facing
  const getRotationAngle = () => {
    switch (selectedFacing) {
      case 'North': return 0;
      case 'East': return -90;
      case 'South': return -180;
      case 'West': return -270;
      default: return 0;
    }
  };

  const currentPlot: PlotOrientation = PLOT_ORIENTATIONS.find(p => p.facing === selectedFacing) || PLOT_ORIENTATIONS[0];
  const currentRoom: VastuRoom = VASTU_ROOMS.find(r => r.id === selectedRoomId) || VASTU_ROOMS[0];
  const currentZone: VastuZone = VASTU_ZONES.find(z => z.id === selectedZoneId) || VASTU_ZONES[2];

  // Helper to determine zone status for selected room
  const getZoneStatusForRoom = (zoneId: string) => {
    if (currentRoom.bestZones.includes(zoneId)) return 'best';
    if (currentRoom.acceptableZones.includes(zoneId)) return 'acceptable';
    if (currentRoom.avoidZones.includes(zoneId)) return 'avoid';
    return 'neutral';
  };

  // Compute Vastu score (0 to 100)
  const computeScore = () => {
    let score = 20; // baseline for plot orientation
    if (scoreFacing === 'North' || scoreFacing === 'East') score += 10;

    // Kitchen: SE = +20, NW = +15, others = 0
    if (scoreKitchen === 'south-east') score += 20;
    else if (scoreKitchen === 'north-west') score += 14;

    // Master Bed: SW = +25, S/W = +15, others = 0
    if (scoreMasterBed === 'south-west') score += 25;
    else if (scoreMasterBed === 'south' || scoreMasterBed === 'west') score += 15;

    // Pooja: NE = +25, N/E = +15, others = 0
    if (scorePooja === 'north-east') score += 25;
    else if (scorePooja === 'north' || scorePooja === 'east') score += 15;

    // Sump: NE = +20, N/E = +12, others = 0
    if (scoreSump === 'north-east') score += 20;
    else if (scoreSump === 'north' || scoreSump === 'east') score += 12;

    return Math.min(100, Math.max(30, score));
  };

  const currentScore = computeScore();

  const getScoreVerdict = (score: number) => {
    if (score >= 90) return { text: 'Outstanding Vastu Alignment', color: '#10B981', advice: 'Your layout adheres closely to classical Vastu Shastra. Energy flow is balanced for sustained prosperity and wellness.' };
    if (score >= 75) return { text: 'Good Vastu Compliance', color: '#059669', advice: 'Favorable layout with a few minor deviations. Easily balanced with minor architectural remedies or interior layout adjustments.' };
    if (score >= 60) return { text: 'Moderate Alignment (Remedies Advised)', color: '#F59E0B', advice: 'Some primary utilities are situated in opposing elements (e.g. fire vs. water). We recommend consulting our architects to rearrange before laying the plinth.' };
    return { text: 'Significant Vastu Dosha Detected', color: '#DC2626', advice: 'Critical rooms like Master Bed or Kitchen conflict with sacred directions. Contact our licensed BIM team for a custom realignment plan.' };
  };

  const verdict = getScoreVerdict(currentScore);

  const whatsappMessage = encodeURIComponent(
    `Hi Construction Buddy! I used your Vastu Compass tool. I have a ${selectedFacing}-facing plot in Bengaluru and would like a 100% Vastu-compliant 3D architectural floor plan.`
  );

  return (
    <div className={styles.pageContainer}>
      <SiteHeader />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroBadge}>
            <span>🏛️</span>
            <span>Bengaluru Architectural Planning Tool</span>
          </div>

          <h1 className={styles.heroTitle}>
            Interactive <span className={styles.heroTitleAccent}>Vastu Compass</span> &amp; Plot Planner
          </h1>

          <p className={styles.heroSubtitle}>
            Harmonize ancient Vedic spatial geometry with contemporary luxury architecture. Inspect ideal room placements, diagnose potential doshas, and plan your Bengaluru home with 100% peace of mind.
          </p>

          {/* Quick Plot Facing Selector Bar */}
          <div className={styles.plotSelectorBar}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1B4D8E', marginRight: '0.25rem' }}>
              SELECT PLOT FACING:
            </span>
            {(['North', 'East', 'South', 'West'] as const).map((facing) => (
              <button
                key={facing}
                type="button"
                onClick={() => setSelectedFacing(facing)}
                className={`${styles.plotBtn} ${selectedFacing === facing ? styles.plotBtnActive : ''}`}
              >
                <span>{facing === 'North' ? '🧭' : facing === 'East' ? '🌅' : facing === 'South' ? '☀️' : '🌇'}</span>
                <span>{facing}-Facing Plot</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tool Container */}
      <main className={styles.toolSection}>
        {/* Mode Switcher Tabs */}
        <div className={styles.modeTabs}>
          <button
            type="button"
            className={`${styles.modeTabBtn} ${activeTab === 'room-finder' ? styles.modeTabBtnActive : ''}`}
            onClick={() => setActiveTab('room-finder')}
          >
            🏠 Room-to-Zone Finder
          </button>
          <button
            type="button"
            className={`${styles.modeTabBtn} ${activeTab === 'mandala' ? styles.modeTabBtnActive : ''}`}
            onClick={() => setActiveTab('mandala')}
          >
            🧭 9-Zone Mandala
          </button>
          <button
            type="button"
            className={`${styles.modeTabBtn} ${activeTab === 'scorecard' ? styles.modeTabBtnActive : ''}`}
            onClick={() => setActiveTab('scorecard')}
          >
            📊 Vastu Scorecard
          </button>
        </div>

        {/* Tab 1 & Tab 2: Split Dashboard Layout */}
        {activeTab !== 'scorecard' ? (
          <div className={styles.dashboardGrid}>
            {/* Left Column: Visual Compass & 9-Square Grid */}
            <div className={styles.compassCard}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#C8860A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  ARCHITECTURAL COMPASS
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B4D8E', marginTop: '0.2rem' }}>
                  {selectedFacing}-Facing Orientation
                </h3>
              </div>

              {/* Rotatable Compass Dial */}
              <div className={styles.compassDialWrap}>
                <svg
                  className={styles.compassSvg}
                  viewBox="0 0 320 320"
                  style={{ transform: `rotate(${getRotationAngle()}deg)` }}
                >
                  <defs>
                    <radialGradient id="brassGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFDF7" />
                      <stop offset="70%" stopColor="#F5E8CB" />
                      <stop offset="100%" stopColor="#D4A346" />
                    </radialGradient>
                    <linearGradient id="needleGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C8860A" />
                      <stop offset="100%" stopColor="#E69B17" />
                    </linearGradient>
                    <linearGradient id="needleBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1B4D8E" />
                      <stop offset="100%" stopColor="#2A68B8" />
                    </linearGradient>
                  </defs>

                  {/* Outer Brass Ring */}
                  <circle cx="160" cy="160" r="150" fill="none" stroke="#D4A346" strokeWidth="4" />
                  <circle cx="160" cy="160" r="142" fill="url(#brassGradient)" opacity="0.4" />
                  <circle cx="160" cy="160" r="134" fill="none" stroke="rgba(200, 134, 10, 0.3)" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Degree Ticks */}
                  {Array.from({ length: 36 }).map((_, i) => {
                    const angle = i * 10;
                    const isMajor = angle % 90 === 0;
                    const isMinor = angle % 45 === 0;
                    const length = isMajor ? 12 : isMinor ? 8 : 4;
                    return (
                      <line
                        key={angle}
                        x1="160"
                        y1="22"
                        x2="160"
                        y2={22 + length}
                        stroke={isMajor ? '#C8860A' : '#718096'}
                        strokeWidth={isMajor ? 2.5 : 1}
                        transform={`rotate(${angle} 160 160)`}
                      />
                    );
                  })}

                  {/* Cardinal Spikes */}
                  {/* North Pointer (Gold) */}
                  <polygon points="160,34 168,145 160,160 152,145" fill="url(#needleGold)" />
                  {/* South Pointer (Navy) */}
                  <polygon points="160,286 168,175 160,160 152,175" fill="url(#needleBlue)" />
                  {/* East Pointer */}
                  <polygon points="286,160 175,168 160,160 175,152" fill="#10B981" opacity="0.85" />
                  {/* West Pointer */}
                  <polygon points="34,160 145,168 160,160 145,152" fill="#8B5CF6" opacity="0.85" />

                  {/* Compass Center Pin */}
                  <circle cx="160" cy="160" r="10" fill="#1B4D8E" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="160" cy="160" r="4" fill="#C8860A" />

                  {/* Directional Labels */}
                  <text x="160" y="52" fill="#8C5D05" fontSize="13" fontWeight="900" textAnchor="middle">N (Kubera)</text>
                  <text x="160" y="278" fill="#1B4D8E" fontSize="13" fontWeight="900" textAnchor="middle">S (Yama)</text>
                  <text x="250" y="165" fill="#047857" fontSize="13" fontWeight="900" textAnchor="middle">E (Indra)</text>
                  <text x="70" y="165" fill="#6D28D9" fontSize="13" fontWeight="900" textAnchor="middle">W (Varuna)</text>

                  <text x="238" y="86" fill="#C8860A" fontSize="10" fontWeight="800" textAnchor="middle">NE (Eshanya)</text>
                  <text x="238" y="244" fill="#DC2626" fontSize="10" fontWeight="800" textAnchor="middle">SE (Agneya)</text>
                  <text x="82" y="244" fill="#C8860A" fontSize="10" fontWeight="800" textAnchor="middle">SW (Nairuthi)</text>
                  <text x="82" y="86" fill="#2563EB" fontSize="10" fontWeight="800" textAnchor="middle">NW (Vayuvya)</text>
                </svg>
              </div>

              <div className={styles.compassOrientationTag}>
                <span>Road Frontage:</span>
                <span>{selectedFacing} Boundary</span>
              </div>

              {/* 9-Zone Purusha Mandala Interactive Grid */}
              <div className={styles.mandalaGridContainer}>
                <div className={styles.mandalaTitle}>9-Zone Vastu Purusha Mandala</div>
                <div className={styles.mandalaSubtitle}>
                  {activeTab === 'room-finder'
                    ? `Showing optimal placements for ${currentRoom.name}`
                    : 'Click any quadrant to view ruling deities and architectural guidelines'}
                </div>

                <div className={styles.mandalaGrid}>
                  {VASTU_ZONES.map((zone) => {
                    const status = activeTab === 'room-finder' ? getZoneStatusForRoom(zone.id) : null;
                    const isSelected = selectedZoneId === zone.id;

                    let statusClass = '';
                    if (status === 'best') statusClass = styles.zoneBest;
                    else if (status === 'acceptable') statusClass = styles.zoneAcceptable;
                    else if (status === 'avoid') statusClass = styles.zoneAvoid;

                    return (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setSelectedZoneId(zone.id)}
                        className={`${styles.zoneCell} ${statusClass} ${isSelected ? styles.zoneCellSelected : ''}`}
                      >
                        <span className={styles.zoneName}>{zone.name}</span>
                        <span className={styles.zoneSanskrit}>{zone.sanskrit}</span>
                        <span className={styles.zoneElementBadge}>
                          {zone.element}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Details Panel */}
            <div className={styles.detailCard}>
              {activeTab === 'room-finder' ? (
                <>
                  <div className={styles.detailHeader}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#C8860A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      ROOM PLACEMENT AUDIT
                    </span>
                    <h2 className={styles.detailTitle}>
                      <span>{currentRoom.icon}</span>
                      <span>{currentRoom.name}</span>
                    </h2>
                    <p style={{ fontSize: '0.92rem', color: '#556B82', marginTop: '0.35rem' }}>
                      {currentRoom.description}
                    </p>
                  </div>

                  {/* Room Selection Buttons */}
                  <div style={{ marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 700, color: '#1B4D8E' }}>
                    Select Room to Check:
                  </div>
                  <div className={styles.roomSelectorGrid}>
                    {VASTU_ROOMS.map((room) => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`${styles.roomBtn} ${selectedRoomId === room.id ? styles.roomBtnActive : ''}`}
                      >
                        <span className={styles.roomBtnIcon}>{room.icon}</span>
                        <span>{room.name.split('/')[0]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Placement Verdict */}
                  <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>Optimal Zones</div>
                    <div className={styles.infoBlockText}>
                      <strong>🟢 Best:</strong>{' '}
                      {currentRoom.bestZones.map(id => VASTU_ZONES.find(z => z.id === id)?.name).join(', ')}
                      <br />
                      <strong>🟡 Acceptable:</strong>{' '}
                      {currentRoom.acceptableZones.length > 0
                        ? currentRoom.acceptableZones.map(id => VASTU_ZONES.find(z => z.id === id)?.name).join(', ')
                        : 'None'}
                      <br />
                      <strong>🔴 Strictly Avoid:</strong>{' '}
                      {currentRoom.avoidZones.map(id => VASTU_ZONES.find(z => z.id === id)?.name).join(', ')}
                    </div>
                  </div>

                  {/* Rules & Guidelines */}
                  <div className={styles.infoBlock} style={{ borderLeftColor: '#C8860A' }}>
                    <div className={styles.infoBlockTitle} style={{ color: '#8C5D05' }}>Golden Architectural Rule</div>
                    <div className={styles.infoBlockText}>{currentRoom.placementRule}</div>
                  </div>

                  {currentRoom.bengaluruBylawNote && (
                    <div className={styles.infoBlock} style={{ borderLeftColor: '#10B981', background: '#F0FDF4' }}>
                      <div className={styles.infoBlockTitle} style={{ color: '#047857' }}>Bengaluru Site &amp; BBMP Bylaw Tip</div>
                      <div className={styles.infoBlockText}>{currentRoom.bengaluruBylawNote}</div>
                    </div>
                  )}
                </>
              ) : (
                /* Zone Inspector Mode */
                <>
                  <div className={styles.detailHeader}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#C8860A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      QUADRANT INSPECTOR
                    </span>
                    <h2 className={styles.detailTitle}>
                      <span>{currentZone.name}</span>
                      <span style={{ fontSize: '0.95rem', color: '#556B82', fontWeight: 600 }}>({currentZone.element} Element)</span>
                    </h2>
                    <div className={styles.detailSanskrit}>
                      Sanskrit: {currentZone.sanskrit} &bull; Deity: {currentZone.deity}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#2D3F53', marginBottom: '1.5rem' }}>
                    {currentZone.attributes}
                  </p>

                  <div className={styles.infoBlock}>
                    <div className={styles.infoBlockTitle}>Ideal Placements for this Zone</div>
                    <ul className={styles.rulesList}>
                      {currentZone.idealRooms.map((room, idx) => (
                        <li key={idx} className={styles.ruleItem}>
                          <span className={styles.ruleIconBest}>✓</span>
                          <span><strong>{room}</strong></span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.infoBlock} style={{ borderLeftColor: '#EF4444', background: '#FEF2F2' }}>
                    <div className={styles.infoBlockTitle} style={{ color: '#B91C1C' }}>Strictly Avoid in this Zone</div>
                    <ul className={styles.rulesList}>
                      {currentZone.strictlyAvoid.map((avoid, idx) => (
                        <li key={idx} className={styles.ruleItem}>
                          <span className={styles.ruleIconAvoid}>✕</span>
                          <span>{avoid}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.infoBlock} style={{ borderLeftColor: '#C8860A' }}>
                    <div className={styles.infoBlockTitle} style={{ color: '#8C5D05' }}>Dosha Remedies &amp; Cures</div>
                    <div className={styles.infoBlockText}>{currentZone.doshasAndRemedies}</div>
                  </div>

                  <div className={styles.infoBlock} style={{ borderLeftColor: '#1B4D8E' }}>
                    <div className={styles.infoBlockTitle}>Bengaluru Architectural Insight</div>
                    <div className={styles.infoBlockText}>{currentZone.architecturalTips}</div>
                  </div>
                </>
              )}

              {/* Plot Orientation Brief */}
              <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#FFFDF9', borderRadius: '16px', border: '1px solid rgba(200, 134, 10, 0.25)' }}>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#1B4D8E', marginBottom: '0.4rem' }}>
                  {currentPlot.facing}-Facing Plot Profile: {currentPlot.auspiciousness}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#556B82', lineHeight: 1.55 }}>
                  {currentPlot.overview}
                </p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', fontWeight: 700, color: '#C8860A' }}>
                  Entrance Gate Placement: {currentPlot.entranceZones}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 3: Interactive Vastu Scorecard Wizard */
          <div className={styles.wizardCard}>
            <div className={styles.wizardHeader}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#C8860A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                LIVE VASTU COMPLIANCE AUDIT
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1B4D8E', marginTop: '0.35rem' }}>
                Instant Plot &amp; Floor Plan Health Score
              </h2>
              <p style={{ maxWidth: '640px', margin: '0.5rem auto 0', fontSize: '0.95rem', color: '#556B82' }}>
                Select your proposed room locations below. Our algorithm calculates classical Vastu compliance, energy balance, and recommends structural adjustments.
              </p>

              {/* Score Gauge */}
              <div className={styles.scoreMeter}>
                <div className={styles.scoreCircle} style={{ borderColor: verdict.color }}>
                  <span className={styles.scoreNumber} style={{ color: verdict.color }}>{currentScore}%</span>
                  <span className={styles.scoreLabel}>COMPLIANCE</span>
                </div>
                <div className={styles.scoreVerdict} style={{ color: verdict.color }}>{verdict.text}</div>
                <p style={{ maxWidth: '580px', margin: '0.5rem auto 0', fontSize: '0.9rem', color: '#2D3F53' }}>
                  {verdict.advice}
                </p>
              </div>
            </div>

            {/* Interactive Step Options */}
            <div className={styles.wizardStepRow}>
              {/* Step 1: Plot Facing */}
              <div className={styles.wizardStep}>
                <div className={styles.wizardStepTitle}>
                  <span>1. Plot Road Facing Direction</span>
                </div>
                <div className={styles.stepOptions}>
                  {(['North', 'East', 'South', 'West'] as const).map(facing => (
                    <button
                      key={facing}
                      type="button"
                      onClick={() => setScoreFacing(facing)}
                      className={`${styles.stepOptionBtn} ${scoreFacing === facing ? styles.stepOptionSelected : ''}`}
                    >
                      {facing}-Facing
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Kitchen Location */}
              <div className={styles.wizardStep}>
                <div className={styles.wizardStepTitle}>
                  <span>2. Kitchen (Gas Stove Hob) Location</span>
                </div>
                <div className={styles.stepOptions}>
                  {[
                    { id: 'south-east', label: 'South-East (Agneya - Ideal)' },
                    { id: 'north-west', label: 'North-West (Vayuvya - Acceptable)' },
                    { id: 'north-east', label: 'North-East (Eshanya - Dosha)' },
                    { id: 'south-west', label: 'South-West (Nairuthi - Dosha)' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScoreKitchen(opt.id)}
                      className={`${styles.stepOptionBtn} ${scoreKitchen === opt.id ? styles.stepOptionSelected : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Master Bedroom Location */}
              <div className={styles.wizardStep}>
                <div className={styles.wizardStepTitle}>
                  <span>3. Master Bedroom Location</span>
                </div>
                <div className={styles.stepOptions}>
                  {[
                    { id: 'south-west', label: 'South-West (Nairuthi - Ideal)' },
                    { id: 'south', label: 'South (Yama - Good)' },
                    { id: 'west', label: 'West (Varuna - Good)' },
                    { id: 'north-east', label: 'North-East (Eshanya - Dosha)' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScoreMasterBed(opt.id)}
                      className={`${styles.stepOptionBtn} ${scoreMasterBed === opt.id ? styles.stepOptionSelected : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Pooja Room Location */}
              <div className={styles.wizardStep}>
                <div className={styles.wizardStepTitle}>
                  <span>4. Pooja Room / Mandir Location</span>
                </div>
                <div className={styles.stepOptions}>
                  {[
                    { id: 'north-east', label: 'North-East (Eshanya - Ideal)' },
                    { id: 'north', label: 'North (Kubera - Good)' },
                    { id: 'east', label: 'East (Surya - Good)' },
                    { id: 'south-west', label: 'South-West (Nairuthi - Dosha)' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScorePooja(opt.id)}
                      className={`${styles.stepOptionBtn} ${scorePooja === opt.id ? styles.stepOptionSelected : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Underground Water Sump Location */}
              <div className={styles.wizardStep}>
                <div className={styles.wizardStepTitle}>
                  <span>5. Underground Water Sump &amp; Borewell</span>
                </div>
                <div className={styles.stepOptions}>
                  {[
                    { id: 'north-east', label: 'North-East (Eshanya - Ideal)' },
                    { id: 'north', label: 'North (Kubera - Good)' },
                    { id: 'east', label: 'East (Surya - Good)' },
                    { id: 'south-west', label: 'South-West (Nairuthi - Severe Dosha)' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScoreSump(opt.id)}
                      className={`${styles.stepOptionBtn} ${scoreSump === opt.id ? styles.stepOptionSelected : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* High-Converting Architectural Consultation CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaBadge}>ARCHITECTURAL ASSURANCE</span>
            <h3 className={styles.ctaTitle}>
              Build a 100% Vastu-Compliant Luxury Home in Bengaluru
            </h3>
            <p className={styles.ctaDesc}>
              Don&apos;t compromise between sacred Vastu Shastra and sleek modern architecture. Our in-house licensed architects integrate BBMP setbacks, 3D BIM modeling, and Vastu Purusha Mandala for flawless execution.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="btn btn-primary"
              style={{ padding: '0.9rem 1.75rem', fontSize: '0.95rem', cursor: 'pointer', textAlign: 'center' }}
            >
              Get Free Floor Plan Review
            </button>
            <a
              href={`https://wa.me/919902800693?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCtaBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.54 1.761.815 2.796.815 3.183 0 5.769-2.587 5.77-5.767 0-3.18-2.586-5.801-5.77-5.801zm3.376 8.21c-.14.391-.709.731-1.019.78-.309.049-.709.071-1.14-.07-.281-.09-.64-.22-1.079-.41-1.859-.809-3.07-2.699-3.16-2.82-.099-.12-1.019-1.359-1.019-2.59 0-1.23.64-1.839.87-2.089.23-.25.5-.31.67-.31.17 0 .34.009.49.02.16.009.37-.06.58.44.22.52.75 1.82.82 1.95.07.13.12.28.03.45-.09.17-.14.28-.28.44-.14.16-.29.35-.42.47-.14.14-.29.29-.12.58.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.72.81 2.02.96.3.15.5.22.57.34.07.12.07.72-.07 1.11z"/>
              </svg>
              <span>Chat with Vastu Architect</span>
            </a>
          </div>
        </div>

        {/* Vastu FAQs */}
        <section className={styles.faqSection}>
          <h3 className={styles.faqTitle}>Frequently Asked Questions on Vastu</h3>
          <p className={styles.faqSubtitle}>
            Expert insights from Construction Buddy&apos;s architectural planning team.
          </p>

          <div className={styles.faqList}>
            {VASTU_FAQS.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>{faq.question}</h4>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
      <ScrollToTop />
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </div>
  );
}
