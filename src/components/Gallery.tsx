'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';

const categories = ['All', 'Residential', 'School'];

const projects = [
  { name: 'Ultra Modern House', category: 'Residential', src: '/Project images/House 2.webp' },
  { name: 'Classic Villa', category: 'Residential', src: '/Project images/House.webp' },
  { name: 'Premium Apartments', category: 'Residential', src: '/Project images/Residential 1.webp' },
  { name: 'Apartment Complex Render', category: 'Residential', src: '/Project images/Residential 1 render.webp' },
  { name: 'Central School Campus', category: 'School', src: '/Project images/School.webp' },
  { name: 'School Classroom Block', category: 'School', src: '/Project images/School 1.webp' },
  { name: 'School Play Area', category: 'School', src: '/Project images/School 2.webp' },
  { name: 'School Administrative Wing', category: 'School', src: '/Project images/School 3.webp' },
  { name: 'School Sports Facility', category: 'School', src: '/Project images/School 4.webp' },
  { name: 'School Assembly Grounds', category: 'School', src: '/Project images/School 5.webp' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleItems, setVisibleItems] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3); // Start at first real item
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(project => project.category === activeTab);

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

  // Reset index when activeTab changes
  useEffect(() => {
    setTransitionEnabled(false);
    setCurrentIndex(visibleItems);
  }, [activeTab, visibleItems]);

  // Re-enable transition after snap jumps
  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  const handlePrev = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return; // Ignore child transitions

    if (currentIndex >= filteredProjects.length + visibleItems) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleItems);
    } else if (currentIndex < visibleItems) {
      setTransitionEnabled(false);
      setCurrentIndex(filteredProjects.length + currentIndex);
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
    
    if (diff > 50) {
      handleNext();
    }
    if (diff < -50) {
      handlePrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  // Construct extended array for infinite looping
  const extendedProjects = [
    ...filteredProjects.slice(-visibleItems),
    ...filteredProjects,
    ...filteredProjects.slice(0, visibleItems),
  ];

  const activeRealIndex = filteredProjects.length > 0
    ? (currentIndex - visibleItems + filteredProjects.length) % filteredProjects.length
    : 0;

  return (
    <section id="projects" className={`section ${styles.gallerySection}`}>
      <div className="blur-blob" style={{ bottom: '10%', left: '5%' }}></div>
      <div className="container" style={{ position: 'relative' }}>
        <h2 className="section-title">
          Our Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Explore our award-winning architecture and landmark construction projects, beautifully structured across Bengaluru.
        </p>

        {/* Categories Tab Bar */}
        <div className={styles.tabContainer}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.tabBtn} ${activeTab === category ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Viewport with Navigation Buttons */}
        <div className={styles.sliderWrapper}>
          
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev} 
            className={`${styles.sliderArrow} ${styles.arrowLeft}`}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext} 
            className={`${styles.sliderArrow} ${styles.arrowRight}`}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Viewport */}
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
              {extendedProjects.map((project, idx) => (
                <div 
                  key={`${project.name}-${idx}`} 
                  className={styles.carouselSlide}
                  style={{
                    flex: `0 0 ${100 / visibleItems}%`,
                  }}
                >
                  <div className={styles.imageCard}>
                    <img src={project.src} alt={project.name} className={styles.image} loading="lazy" />
                    <div className={styles.overlay}>
                      <div className={styles.meta}>
                        <span className={styles.categoryBadge}>{project.category}</span>
                        <h3 className={styles.projectName}>{project.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Progress Pagination Indicators (Dots) */}
        <div className={styles.dotsRow}>
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${activeRealIndex === idx ? styles.dotActive : ''}`}
              onClick={() => {
                if (!transitionEnabled) return;
                setCurrentIndex(idx + visibleItems);
              }}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
