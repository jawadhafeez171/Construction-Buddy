import type { Metadata } from 'next';
import CompareClient from './CompareClient';

export const metadata: Metadata = {
  title: 'Compare Construction Packages | Construction Buddy Bengaluru',
  description: 'Compare our home construction packages side-by-side. Inspect technical specifications for Standard, Premium, Luxury, Elite, Imperial, Royal Estate, and Palatial packages in Bengaluru.',
  openGraph: {
    title: 'Compare Construction Packages | Construction Buddy Bengaluru',
    description: 'Compare our home construction packages side-by-side. Inspect technical specifications for Standard, Premium, Luxury, Elite, Imperial, Royal Estate, and Palatial packages in Bengaluru.',
    url: '/compare-packages',
    images: [
      {
        url: '/compare_hero_bg.webp',
        width: 1200,
        height: 630,
        alt: 'Compare Home Construction Packages',
      },
    ],
  },
};

export default function ComparePackagesPage() {
  return <CompareClient />;
}
