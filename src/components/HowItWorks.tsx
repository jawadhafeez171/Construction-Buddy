'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    image: '/how_it_works_1.webp',
    text: 'Fill out a short form and our team will call you within 20 minutes to begin.',
  },
  {
    num: '02',
    image: '/how_it_works_2.webp',
    text: 'Meet our technical expert and architect to discuss your needs and receive an initial quotation.',
  },
  {
    num: '03',
    image: '/how_it_works_3.webp',
    text: 'Pay a small token to confirm your booking and start pre-construction work.',
  },
  {
    num: '04',
    image: '/how_it_works_4.webp',
    text: 'We survey your site, run tests, and create drawings and 3D models for your review.',
  },
  {
    num: '05',
    image: '/how_it_works_5.webp',
    text: 'Sign a transparent contract with clear timelines and milestone-based payments.',
  },
  {
    num: '06',
    image: '/how_it_works_6.webp',
    text: 'Construction begins with daily quality checks and full progress tracking on our app.',
  },
  {
    num: '07',
    image: '/how_it_works_7.webp',
    text: 'After final checks, your home is handed over with a 10-year warranty.',
  },
];

export default function HowItWorks() {
  const [visibleItems, setVisibleItems] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3); // Start at first real item
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Responsive items count calculation
  useEffect(() => {
    const handleResize = () => {
      let items = 3;
      if (window.innerWidth < 650) {
        items = 1;
      } else if (window.innerWidth < 992) {
        items = 2;
      } else {
        items = 3;
      }
      setVisibleItems(items);
      setCurrentIndex(items); // Reset to first real item on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Re-enable transition after snap jumps
  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // Continuous self-running auto-slide interval (1200ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        // Prevent running off if tab is out of focus/transitions are disabled
        if (prev >= steps.length + visibleItems + 1) {
          return visibleItems;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [visibleItems]);

  const handlePrev = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return; // Prevent child transitions from triggering snaps

    if (currentIndex >= steps.length + visibleItems) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleItems);
    } else if (currentIndex < visibleItems) {
      setTransitionEnabled(false);
      setCurrentIndex(steps.length + currentIndex);
    }
  };

  // Mobile Swipe/Gesture Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const diff = touchStart.current - touchEnd.current;
    
    // Swipe left (next)
    if (diff > 50) {
      handleNext();
    }
    // Swipe right (prev)
    if (diff < -50) {
      handlePrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  // Construct extended array for infinite looping
  const extendedSteps = [
    ...steps.slice(-visibleItems),
    ...steps,
    ...steps.slice(0, visibleItems),
  ];

  return (
    <section 
      className="section" 
      id="how-it-works" 
      style={{ overflow: 'hidden', backgroundColor: '#FAF7F0' }}
    >
      <div className="container">
        
        {/* Section Header with Navigation Actions */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Seamless Onboarding</span>
            <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>
              How It <span>Works</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0.5rem 0 0 0', maxWidth: '600px' }}>
              A fast, step-by-step roadmap from initial website registration to the final handover of your custom-constructed home.
            </p>
          </div>

          <div className={styles.navButtons}>
            <button 
              onClick={handlePrev} 
              className={styles.navBtn} 
              aria-label="Previous step"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button 
              onClick={handleNext} 
              className={styles.navBtn} 
              aria-label="Next step"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div 
          className={styles.carouselContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: transitionEnabled ? undefined : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSteps.map((step, idx) => (
              <div 
                key={`${step.num}-${idx}`}
                className={styles.carouselSlide}
                style={{
                  flex: `0 0 ${100 / visibleItems}%`,
                }}
              >
                <div className={styles.stepCard}>
                  <div className={styles.imageContainer}>
                    <img src={step.image} alt={`Step ${step.num}`} className={styles.cardImage} />
                  </div>
                  <span className={styles.stepNum}>{step.num}</span>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Pagination Indicators (Dots) */}
        <div className={styles.dotsRow}>
          {steps.map((_, idx) => {
            const activeRealIndex = (currentIndex - visibleItems + steps.length) % steps.length;
            return (
              <button
                key={idx}
                className={`${styles.dot} ${activeRealIndex === idx ? styles.dotActive : ''}`}
                onClick={() => {
                  if (!transitionEnabled) return;
                  setCurrentIndex(idx + visibleItems);
                }}
                aria-label={`Go to step ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
