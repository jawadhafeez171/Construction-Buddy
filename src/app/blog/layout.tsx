import SiteHeader from '@/components/SiteHeader';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights | Construction Buddy Bengaluru',
  description: 'Expert construction guidance, cost tips, architectural trends, and industry insights from Bengaluru\'s premier builder.',
  openGraph: {
    title: 'Blog & Insights | Construction Buddy Bengaluru',
    description: 'Expert construction guidance, cost tips, architectural trends, and industry insights from Bengaluru\'s premier builder.',
    url: '/blog',
    images: [
      {
        url: '/blog_architect.webp',
        width: 1200,
        height: 630,
        alt: 'Construction Buddy Blog',
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      {/* Mobile bottom nav */}
      <div className="mobile-bottom-nav">
        <a href="/" className="mobile-bottom-nav-item">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mobile-bottom-nav-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className="mobile-bottom-nav-label">Home</span>
        </a>
        <a href="/#services" className="mobile-bottom-nav-item">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mobile-bottom-nav-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <span className="mobile-bottom-nav-label">Services</span>
        </a>
        <a href="tel:+919902800693" className="mobile-bottom-nav-item call-center" title="Call Us Now">
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
        <a href="/#packages" className="mobile-bottom-nav-item">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mobile-bottom-nav-icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <span className="mobile-bottom-nav-label">Packages</span>
        </a>
        <a href="/blog" className="mobile-bottom-nav-item" style={{ color: 'var(--primary)' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mobile-bottom-nav-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span className="mobile-bottom-nav-label">Blog</span>
        </a>
      </div>
    </>
  );
}
