import type { Metadata } from 'next';
import CompareClient from './CompareClient';

export const metadata: Metadata = {
  title: 'Compare Construction Packages & Specifications',
  description: 'Compare our home construction packages side-by-side. Inspect technical specifications for Standard, Premium, Luxury, Elite, Imperial, Royal Estate, and Palatial packages in Bengaluru.',
  openGraph: {
    title: 'Compare Construction Packages & Specifications | Construction Buddy',
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
  alternates: {
    canonical: 'https://www.constructionbuddy.in/compare-packages',
  },
};

export default function ComparePackagesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.constructionbuddy.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Compare Packages',
        item: 'https://www.constructionbuddy.in/compare-packages',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CompareClient />
    </>
  );
}
