import SiteHeader from '@/components/SiteHeader';
import type { ReactNode } from 'react';

export default function ReferLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
