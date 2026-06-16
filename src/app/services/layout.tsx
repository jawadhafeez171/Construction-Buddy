import SiteHeader from '@/components/SiteHeader';
import BottomNav from '@/components/BottomNav';
import type { ReactNode } from 'react';

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <BottomNav />
    </>
  );
}
