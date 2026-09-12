import SiteHeader from '@/components/SiteHeader';
import type { ReactNode } from 'react';

export default function CompareLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
