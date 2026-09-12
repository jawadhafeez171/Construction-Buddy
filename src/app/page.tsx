'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import ReferPromo from '@/components/ReferPromo';
import ContactModal from '@/components/ContactModal';
import { scrollToSection } from '@/lib/navigation';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle initial scroll target from inner pages or direct navigation
    const sessionTarget = sessionStorage.getItem('cb_scroll_target');
    const hashTarget = window.location.hash ? window.location.hash.replace('#', '') : null;
    const targetId = sessionTarget || hashTarget;

    if (targetId) {
      if (sessionTarget) {
        sessionStorage.removeItem('cb_scroll_target');
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 75;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 150);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Premium Dynamic Sticky Header that overlays the Hero section */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(20, 34, 32, 0.05)' : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: scrolled ? '0 10px 30px rgba(13, 31, 60, 0.04)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '61px'
        }}>
          {/* Logo Only Integration */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="logo-link"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', display: 'block', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'var(--font-logo)', lineHeight: 1.15 }}>
              <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'baseline' }}>
                <span className="logo-unified-shine" style={{
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: scrolled ? 'var(--foreground)' : '#ffffff',
                  transition: 'color 0.3s ease'
                }}>
                  Construction Buddy
                </span>
              </div>
              <div style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                color: scrolled ? '#1B4D8E' : '#C8860A',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop: '0.05rem',
                textAlign: 'center',
                width: '100%',
                transition: 'color 0.3s ease'
              }}>
                Home & Commercial Contractors
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop">
            <Link href="/services" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Services</Link>
            <Link href="/calculator" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Cost Calculator</Link>
            <button
              type="button"
              onClick={(e) => scrollToSection('packages', e)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}
            >
              Packages
            </button>
            <button
              type="button"
              onClick={(e) => scrollToSection('projects', e)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}
            >
              Projects
            </button>
            <Link href="/refer" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Refer &amp; Earn</Link>
            <Link href="/blog" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Blog</Link>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="btn btn-outline"
              style={{
                padding: '0.5rem 1.25rem',
                fontSize: '0.85rem',
                color: scrolled ? 'var(--primary)' : '#ffffff',
                borderColor: scrolled ? 'rgba(27, 77, 142, 0.25)' : 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              Get in Touch
            </button>
          </nav>

          {/* Hamburger Menu Toggle Button for Mobile/Tablet */}
          <button
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="hamburger-line" style={{ backgroundColor: scrolled ? 'var(--foreground)' : '#ffffff', transition: 'background-color 0.3s ease' }}></span>
            <span className="hamburger-line" style={{ backgroundColor: scrolled ? 'var(--foreground)' : '#ffffff', transition: 'background-color 0.3s ease' }}></span>
            <span className="hamburger-line" style={{ backgroundColor: scrolled ? 'var(--foreground)' : '#ffffff', transition: 'background-color 0.3s ease' }}></span>
          </button>

          {/* Mobile Overlay Menu */}
          <div className={`nav-mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
            {/* Background vector elements for premium architectural aesthetics */}
            <div className="nav-overlay-grid-bg" />
            <div className="blur-blob" style={{ top: '10%', right: '10%', opacity: 0.3, background: 'radial-gradient(circle, rgba(27, 77, 142, 0.15) 0%, transparent 70%)' }}></div>
            <div className="blur-blob" style={{ bottom: '15%', left: '10%', opacity: 0.25, background: 'radial-gradient(circle, rgba(200, 134, 10, 0.12) 0%, transparent 70%)' }}></div>

            {/* Menu Links with Staggered Slide In */}
            <div className="nav-mobile-links-container">
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-link"
                style={{ '--index': 1 } as React.CSSProperties}
              >
                <span className="nav-mobile-num">01</span>
                <span className="nav-mobile-text">Services</span>
              </Link>
              <Link
                href="/calculator"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-link"
                style={{ '--index': 2 } as React.CSSProperties}
              >
                <span className="nav-mobile-num">02</span>
                <span className="nav-mobile-text">Cost Calculator</span>
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToSection('packages', e);
                }}
                className="nav-mobile-link"
                style={{ '--index': 3, background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' } as React.CSSProperties}
              >
                <span className="nav-mobile-num">03</span>
                <span className="nav-mobile-text">Packages</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  scrollToSection('projects', e);
                }}
                className="nav-mobile-link"
                style={{ '--index': 4, background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' } as React.CSSProperties}
              >
                <span className="nav-mobile-num">04</span>
                <span className="nav-mobile-text">Projects</span>
              </button>
              <Link
                href="/refer"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-link"
                style={{ '--index': 5 } as React.CSSProperties}
              >
                <span className="nav-mobile-num">05</span>
                <span className="nav-mobile-text">Refer &amp; Earn</span>
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-link"
                style={{ '--index': 6 } as React.CSSProperties}
              >
                <span className="nav-mobile-num">06</span>
                <span className="nav-mobile-text">Blog</span>
              </Link>

              <div style={{ height: '1px', width: '80px', backgroundColor: 'rgba(27, 77, 142, 0.15)', margin: '0.5rem 0 0.5rem auto', zIndex: 10 }}></div>

              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="btn btn-primary nav-mobile-cta"
                style={{ '--index': 7, padding: '0.875rem 2.5rem', fontSize: '1rem', marginTop: '0.5rem', cursor: 'pointer' } as React.CSSProperties}
              >
                Get in Touch
              </button>
            </div>

            {/* Premium quick contact widget at the bottom right */}
            <div className="nav-mobile-footer" style={{ '--index': 8 } as React.CSSProperties}>
              <div className="nav-footer-line">📍 Bengaluru, Karnataka</div>
              <div className="nav-footer-line">✉️ info@constructionbuddy.in</div>
              <div className="nav-footer-line" style={{ color: 'var(--gold)', fontWeight: 700 }}>📞 +91 99028 00693</div>
            </div>
          </div>
        </div>
      </header>

      {/* Warm Redesigned Sections */}
      <Hero />
      <Services />
      <Packages />
      <HowItWorks />
      <Gallery />
      <ReferPromo />

      {/* Direct Contact Modal */}
      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </main>
  );
}
