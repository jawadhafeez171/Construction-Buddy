'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import ContactModal from './ContactModal';

const SLIDES = [
  {
    image: '/hero_stage_foundation.webp',
    badge: 'Stage 1: Excavation & Foundation'
  },
  {
    image: '/hero_stage_brickwork.webp',
    badge: 'Stage 2: Structural Brickwork'
  },
  {
    image: '/hero_stage_plastering.webp',
    badge: 'Stage 3: Plastering & Framing'
  },
  {
    image: '/hero_stage_finished.webp',
    badge: 'Stage 4: Welcome Home'
  }
];


export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <section 
        className={styles.hero}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-bleed Parallax Background Image Container */}
        <div 
          className={styles.parallaxBg}
          style={{ 
            transform: `translate3d(0, ${scrollY * 0.35}px, 0)` 
          }}
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`${styles.bgImage} ${idx === activeSlide ? styles.activeBg : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>
        
        {/* Contrast Scrim Overlay */}
        <div className={styles.overlay} />

        <div className={`container ${styles.gridContainer}`}>
          {/* ── Left-Aligned Content ── */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              Build the Home Your Family<br />
              Will <span className="text-gradient">Love Forever.</span>
            </h1>

            <p className={styles.subtitle}>
              Bengaluru&apos;s premier construction and architecture partner. From 3D BIM modeling to final handover, we construct custom luxury homes with 100% transparency and structural excellence.
            </p>

            <div className={styles.actions}>
              <button
                className="btn btn-primary"
                onClick={() => setModalOpen(true)}
                id="start-dream-home-btn"
              >
                Start My Dream Home
              </button>
              <a href="#projects" className="btn btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
                See Our Work
              </a>
            </div>

            {/* Stage Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>{SLIDES[activeSlide].badge}</span>
            </div>
          </div>
          
          {/* Carousel Dots Indicators */}
          <div className={styles.carouselIndicators}>
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.indicatorDot} ${idx === activeSlide ? styles.activeDot : ''}`}
                onClick={() => {
                  setActiveSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
