'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
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
          <Link href="/calculator" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>Cost Calculator</Link>
          <Link href="/#packages" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>Packages</Link>
          <Link href="/#projects" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>Projects</Link>
          <Link href="/refer" style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>Refer &amp; Earn</Link>
          <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem' }}>Blog</Link>
          <Link href="/#contact" className="btn btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>Get in Touch</Link>
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

        {/* Mobile Overlay */}
        <div className={`nav-mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-overlay-grid-bg" />
          <div className="blur-blob" style={{ top: '10%', right: '10%', opacity: 0.3, background: 'radial-gradient(circle, rgba(27, 77, 142, 0.15) 0%, transparent 70%)' }}></div>
          <div className="blur-blob" style={{ bottom: '15%', left: '10%', opacity: 0.25, background: 'radial-gradient(circle, rgba(200, 134, 10, 0.12) 0%, transparent 70%)' }}></div>

          <div className="nav-mobile-links-container">
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 1 } as React.CSSProperties}>
              <span className="nav-mobile-num">01</span>
              <span className="nav-mobile-text">Services</span>
            </Link>
            <Link href="/calculator" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 2 } as React.CSSProperties}>
              <span className="nav-mobile-num">02</span>
              <span className="nav-mobile-text">Cost Calculator</span>
            </Link>
            <Link href="/#packages" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 3 } as React.CSSProperties}>
              <span className="nav-mobile-num">03</span>
              <span className="nav-mobile-text">Packages</span>
            </Link>
            <Link href="/#projects" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 4 } as React.CSSProperties}>
              <span className="nav-mobile-num">04</span>
              <span className="nav-mobile-text">Projects</span>
            </Link>
            <Link href="/refer" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 5 } as React.CSSProperties}>
              <span className="nav-mobile-num">05</span>
              <span className="nav-mobile-text">Refer &amp; Earn</span>
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="nav-mobile-link" style={{ '--index': 6 } as React.CSSProperties}>
              <span className="nav-mobile-num">06</span>
              <span className="nav-mobile-text">Blog</span>
            </Link>

            <div style={{ height: '1px', width: '80px', backgroundColor: 'rgba(27, 77, 142, 0.15)', margin: '0.5rem 0 0.5rem auto', zIndex: 10 }}></div>

            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-primary nav-mobile-cta"
              style={{ '--index': 7, padding: '0.875rem 2.5rem', fontSize: '1rem', marginTop: '0.5rem' } as React.CSSProperties}
            >
              Get in Touch
            </Link>
          </div>

          <div className="nav-mobile-footer" style={{ '--index': 8 } as React.CSSProperties}>
            <div className="nav-footer-line">📍 Bengaluru, Karnataka</div>
            <div className="nav-footer-line">✉️ info@constructionbuddy.in</div>
            <div className="nav-footer-line" style={{ color: 'var(--gold)', fontWeight: 700 }}>📞 +91 99028 00693</div>
          </div>
        </div>
      </div>
    </header>
  );
}
