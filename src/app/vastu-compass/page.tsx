import type { Metadata } from 'next';
import VastuCompassClient from './VastuCompassClient';
import { VASTU_FAQS } from '@/lib/vastuData';

export const metadata: Metadata = {
  title: 'Interactive Vastu Compass & Plot Planner | Construction Buddy Bengaluru',
  description: 'Plan your home with our free interactive Vastu Compass tool. Check room-to-zone placements, calculate floor plan Vastu scores, and design 100% Vastu-compliant homes in Bengaluru.',
  openGraph: {
    title: 'Interactive Vastu Compass & Plot Planner | Construction Buddy Bengaluru',
    description: 'Plan your home with our free interactive Vastu Compass tool. Check room-to-zone placements, calculate floor plan Vastu scores, and design 100% Vastu-compliant homes in Bengaluru.',
    url: 'https://constructionbuddy.in/vastu-compass',
    siteName: 'Construction Buddy',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://constructionbuddy.in/vastu-compass',
  },
};

export default function VastuCompassPage() {
  const jsonLdWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Construction Buddy Vastu Compass & Plot Planner',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'All',
    url: 'https://constructionbuddy.in/vastu-compass',
    description: 'Interactive architectural tool to check Vastu Shastra room placements, plot facing guidelines, and floor plan compliance scores in Bengaluru.',
    provider: {
      '@type': 'GeneralContractor',
      name: 'Construction Buddy',
      url: 'https://constructionbuddy.in',
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: VASTU_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <VastuCompassClient />
    </>
  );
}
