import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllLocations,
  getLocationBySlug,
  getNearbyLocations,
} from '@/lib/locationsData';
import LocationDetailClient from './LocationDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const locations = getAllLocations();
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  const title = `Turnkey House Construction in ${location.name}, Bengaluru | Construction Buddy`;
  const description = `Architectural plans, BBMP/BDA sanction drawings, 3D BIM, and turnkey residential construction in ${location.name}, Bengaluru (${location.pincode}). Fixed-cost guarantee & 10-year warranty.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://constructionbuddy.in/locations/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://constructionbuddy.in/locations/${location.slug}`,
      siteName: 'Construction Buddy',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: '/service_home.webp',
          width: 1200,
          height: 630,
          alt: `House Construction in ${location.name}, Bengaluru`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/service_home.webp'],
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const nearbyLocations = getNearbyLocations(slug, 4);

  // JSON-LD Structured Data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://constructionbuddy.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bengaluru Locations',
        item: 'https://constructionbuddy.in/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: `https://constructionbuddy.in/locations/${location.slug}`,
      },
    ],
  };

  const localContractorSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: `Construction Buddy - ${location.name}`,
    image: 'https://constructionbuddy.in/logo.png',
    url: `https://constructionbuddy.in/locations/${location.slug}`,
    telephone: '+919902800693',
    email: 'info@constructionbuddy.in',
    priceRange: '₹₹ - ₹₹₹₹',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: location.name,
      postalCode: location.pincode,
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    description: `Turnkey residential building contractor, architectural blueprints, and BIM services in ${location.name}, Bengaluru.`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localContractorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocationDetailClient location={location} nearbyLocations={nearbyLocations} />
    </>
  );
}
