'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Gallery from '@/components/Gallery';
import ReferPromo from '@/components/ReferPromo';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          <a href="#" className="logo-link" style={{ display: 'block', textDecoration: 'none' }}>
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop">
            <Link href="/services" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Services</Link>
            <Link href="/calculator" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Cost Calculator</Link>
            <a href="#packages" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Packages</a>
            <a href="#projects" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Projects</a>
            <Link href="/refer" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Refer &amp; Earn</Link>
            <Link href="/blog" style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255, 255, 255, 0.9)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Blog</Link>
            <a href="#contact" className="btn btn-outline" style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.85rem',
              color: scrolled ? 'var(--primary)' : '#ffffff',
              borderColor: scrolled ? 'rgba(27, 77, 142, 0.25)' : 'rgba(255, 255, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}>Get in Touch</a>
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
              <a
                href="#packages"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-link"
                style={{ '--index': 3 } as React.CSSProperties}
              >
                <span className="nav-mobile-num">03</span>
                <span className="nav-mobile-text">Packages</span>
              </a>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-link"
                style={{ '--index': 4 } as React.CSSProperties}
              >
                <span className="nav-mobile-num">04</span>
                <span className="nav-mobile-text">Projects</span>
              </a>
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

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary nav-mobile-cta"
                style={{ '--index': 7, padding: '0.875rem 2.5rem', fontSize: '1rem', marginTop: '0.5rem' } as React.CSSProperties}
              >
                Get in Touch
              </a>
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
      <Gallery />
      <ReferPromo />

      {/* Premium Warm Forest Footer */}
      <footer id="contact" style={{
        backgroundColor: '#0D1824', /* Logo-ink dark navy — matches Construction wordmark */
        borderTop: '1px solid rgba(27, 77, 142, 0.20)',
        padding: '5rem 0 3rem 0',
        position: 'relative',
        color: '#f0f4fa'
      }}>
        <div className="blur-blob" style={{ bottom: '-5%', right: '10%', opacity: 0.4, background: 'radial-gradient(circle, rgba(27, 77, 142, 0.20) 0%, transparent 70%)' }}></div>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            {/* Column 1 - Brand Profile */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <a href="#" className="logo-link" style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'var(--font-logo)', lineHeight: 1.15 }}>
                    <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                        Construction
                      </span>
                      <span style={{ fontSize: '1.65rem', fontWeight: 800, color: '#C8860A', letterSpacing: '-0.02em' }}>Buddy</span>
                    </div>
                    <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#2E7DD1', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '0.05rem', textAlign: 'center', width: '100%' }}>
                      Home & Commercial Contractors
                    </div>
                  </div>
                </a>
              </div>
              <p style={{ color: '#c4b5ac', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '360px' }}>
                Bengaluru&apos;s elite construction and architectural partner. Bringing complex designs to life with state-of-the-art BIM models and structural excellence.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 style={{ color: '#faf8f5', fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><a href="#services" style={{ color: '#c4b5ac', fontSize: '0.95rem' }}>Core Services</a></li>
                <li><a href="#packages" style={{ color: '#c4b5ac', fontSize: '0.95rem' }}>Construction Packages</a></li>
                <li><a href="#projects" style={{ color: '#c4b5ac', fontSize: '0.95rem' }}>Our Projects Portfolio</a></li>
                <li><Link href="/blog" style={{ color: '#c4b5ac', fontSize: '0.95rem' }}>Insights & Blog</Link></li>
              </ul>
            </div>

            {/* Column 3 - Contact & Information */}
            <div>
              <h4 style={{ color: '#faf8f5', fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get in Touch</h4>
              <p style={{ color: '#c4b5ac', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                📍 Bengaluru, Karnataka, India
              </p>
              <p style={{ color: '#c4b5ac', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                ✉️ info@constructionbuddy.in
              </p>
              <p style={{ color: '#c4b5ac', fontSize: '0.95rem', lineHeight: 1.7 }}>
                📞 +91 99028 00693
              </p>
            </div>
          </div>

          {/* Sub-footer */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ color: '#c4b5ac', fontSize: '0.875rem' }}>
              &copy; {new Date().getFullYear()} Construction Buddy. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: '#c4b5ac' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <BottomNav />
    </main>
  );
}
