'use client';

/**
 * Utility to smoothly scroll to any homepage section without appending `#` hashes to the URL bar.
 */
export function scrollToSection(sectionId: string, e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  if (typeof window === 'undefined') return;

  // If already on homepage
  if (window.location.pathname === '/') {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Clean hash from URL bar if present
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  } else {
    // Coming from inner page (e.g. /services, /calculator, /blog/...)
    sessionStorage.setItem('cb_scroll_target', sectionId);
    window.location.href = '/';
  }
}
