import SiteHeader from '@/components/SiteHeader';
import type { ReactNode } from 'react';

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
