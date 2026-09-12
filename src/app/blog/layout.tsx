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
    </>
  );
}
