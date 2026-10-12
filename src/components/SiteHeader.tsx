'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';
import NavMoreDropdown from './NavMoreDropdown';
import { scrollToSection } from '@/lib/navigation';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: isMenuOpen ? 2005 : 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      borderBottom: '1px solid rgba(20, 34, 32, 0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '61px'
      }}>
        {/* Logo */}
        <Link href="/" className="logo-link" style={{ display: 'block', textDecoration: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'var(--font-logo)', lineHeight: 1.15 }}>
            <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'baseline' }}>
              <span className="logo-unified-shine" style={{ fontSize: '1.65rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Construction Buddy
              </span>
            </div>
            <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#1B4D8E', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '0.05rem', textAlign: 'center', width: '100%' }}>
              Home &amp; Commercial Contractors
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <Link href="/services" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>Services</Link>
          <button
            type="button"
            onClick={(e) => scrollToSection('packages', e)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Packages
          </button>
          <button
            type="button"
            onClick={(e) => scrollToSection('projects', e)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Projects
          </button>
          <NavMoreDropdown scrolled={true} />
          <Link href="/refer" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>Refer &amp; Earn</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href="tel:+919902800693"
              className="nav-phone-link"
              title="Call Construction Buddy: +91 99028 00693"
              style={{ color: 'var(--primary)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--gold)' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 99028 00693</span>
            </a>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="btn btn-outline"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Get in Touch
            </button>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Clickable Backdrop wash */}
        {isMenuOpen && (
          <div
            className="nav-mobile-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Overlay */}
        <div className={`nav-mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-overlay-grid-bg" />
          <div className="blur-blob" style={{ top: '10%', right: '10%', opacity: 0.3, background: 'radial-gradient(circle, rgba(27, 77, 142, 0.15) 0%, transparent 70%)' }}></div>
          <div className="blur-blob" style={{ bottom: '15%', left: '10%', opacity: 0.25, background: 'radial-gradient(circle, rgba(200, 134, 10, 0.12) 0%, transparent 70%)' }}></div>

          {/* Minimal Corner Close Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="nav-mobile-close-btn"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="nav-mobile-links-container">
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 1 } as React.CSSProperties}>
              <span className="nav-mobile-num">01</span>
              <span className="nav-mobile-text">Services</span>
            </Link>
            <button
              type="button"
              onClick={(e) => {
                setIsMenuOpen(false);
                scrollToSection('packages', e);
              }}
              className="nav-mobile-link"
              style={{ '--index': 2, background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' } as React.CSSProperties}
            >
              <span className="nav-mobile-num">02</span>
              <span className="nav-mobile-text">Packages</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                setIsMenuOpen(false);
                scrollToSection('projects', e);
              }}
              className="nav-mobile-link"
              style={{ '--index': 3, background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' } as React.CSSProperties}
            >
              <span className="nav-mobile-num">03</span>
              <span className="nav-mobile-text">Projects</span>
            </button>
            <Link href="/calculator" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 4 } as React.CSSProperties}>
              <span className="nav-mobile-num">04</span>
              <span className="nav-mobile-text">Cost Calculator</span>
            </Link>
            <Link href="/compare-packages" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 5 } as React.CSSProperties}>
              <span className="nav-mobile-num">05</span>
              <span className="nav-mobile-text">Compare Packages</span>
            </Link>
            <Link href="/vastu-compass" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 6 } as React.CSSProperties}>
              <span className="nav-mobile-num">06</span>
              <span className="nav-mobile-text">Vastu Plot Compass ✨</span>
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 7 } as React.CSSProperties}>
              <span className="nav-mobile-num">07</span>
              <span className="nav-mobile-text">Articles &amp; Blog</span>
            </Link>
            <Link href="/refer" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 8 } as React.CSSProperties}>
              <span className="nav-mobile-num">08</span>
              <span className="nav-mobile-text">Refer &amp; Earn</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setIsContactOpen(true);
              }}
              className="btn btn-primary nav-mobile-cta"
              style={{ '--index': 9, cursor: 'pointer' } as React.CSSProperties}
            >
              Get in Touch
            </button>
          </div>

          <div className="nav-mobile-footer" style={{ '--index': 8 } as React.CSSProperties}>
            <div className="nav-footer-line">📍 RK Hegde Nagar, Thanisandra Main Rd, Bengaluru - 560064</div>
            <div className="nav-footer-line">✉️ constructionbuddyhq@gmail.com</div>
            <div className="nav-footer-line" style={{ color: 'var(--gold)', fontWeight: 700 }}>📞 +91 99028 00693</div>
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/construction_buddy1/" target="_blank" rel="noopener noreferrer" className="nav-footer-line" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>📸 Instagram</a>
              <a href="https://youtube.com/@constructionbuddy-b3z?si=2NnKpjzK8PXsVmzP" target="_blank" rel="noopener noreferrer" className="nav-footer-line" style={{ color: '#c4302b', textDecoration: 'none', fontWeight: 600 }}>▶️ YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </header>
  );
}
