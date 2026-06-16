'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    label: 'Home',
    exact: true,
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: '/services',
    label: 'Services',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  // Gold call FAB — centre
  {
    href: 'tel:+919902800693',
    label: 'Call',
    isCta: true,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: '/compare-packages',
    label: 'Packages',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (item: { href?: string; exact?: boolean }) => {
    if (!item.href) return false;
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {navItems.map((item) => {
        // Gold call FAB
        if ('isCta' in item && item.isCta) {
          return (
            <a
              key={item.href}
              href={item.href}
              className="bottom-nav-cta"
              title="Call Us Now"
              aria-label="Call us"
            >
              <span className="bottom-nav-cta-ring" aria-hidden="true" />
              {item.icon}
            </a>
          );
        }

        const active = isActive(item);
        return (
          <Link
            key={item.href}
            href={item.href!}
            className={`bottom-nav-item${active ? ' bottom-nav-item--active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
            {active && <span className="bottom-nav-dot" aria-hidden="true" />}
          </Link>
        );
      })}
    </nav>
  );
}
