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
    href: 'https://wa.me/919902800693?text=Hi%20Construction%20Buddy%2C%20I%20would%20like%20to%20inquire%20about%20construction%20services%20in%20Bengaluru.',
    label: 'WhatsApp',
    isExternal: true,
    isWhatsApp: true,
    icon: (
      <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
        <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.954 1.18-.176.2-.351.226-.653.076-.301-.15-1.272-.469-2.424-1.497-.896-.799-1.501-1.786-1.678-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.68-1.637-.93-2.245-.244-.593-.493-.513-.679-.522-.176-.009-.377-.01-.578-.01s-.527.075-.804.377c-.276.301-1.055 1.03-1.055 2.511s1.08 2.912 1.231 3.113c.15.2 2.126 3.246 5.15 4.553.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.042 2c-5.503 0-9.972 4.469-9.972 9.972 0 1.761.46 3.484 1.332 5.003l-1.417 5.175 5.307-1.392c1.465.799 3.113 1.222 4.75 1.222 5.503 0 9.972-4.469 9.972-9.972 0-5.503-4.469-9.98-9.972-9.98zm0 18.275c-1.494 0-2.957-.402-4.234-1.163l-.304-.18-3.146.825.84-3.067-.197-.314c-.836-1.33-1.278-2.879-1.278-4.406 0-4.561 3.71-8.271 8.275-8.271 4.565 0 8.275 3.71 8.275 8.271 0 4.561-3.71 8.271-8.275 8.271z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (item: { href?: string; exact?: boolean; isExternal?: boolean }) => {
    if (!item.href || item.isExternal) return false;
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

        if ('isExternal' in item && item.isExternal) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bottom-nav-item${item.isWhatsApp ? ' bottom-nav-item--whatsapp' : ''}`}
              aria-label={item.label}
              title={item.label}
            >
              <span className="bottom-nav-icon">{item.icon}</span>
              <span className="bottom-nav-label">{item.label}</span>
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
