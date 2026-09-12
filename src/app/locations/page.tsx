import type { Metadata } from 'next';
import { BENGALURU_ZONES_DATA, getAllLocations } from '@/lib/locationsData';
import LocationsHubClient from './LocationsHubClient';

export const metadata: Metadata = {
  title: 'Construction Services Across 76 Bengaluru Localities | Construction Buddy',
  description:
    'Explore turnkey home construction, architectural sanction drawings, 3D BIM, and luxury interior design across Central, North, South, East, and West Bengaluru. Fixed cost & 10-year warranty.',
  alternates: {
    canonical: 'https://constructionbuddy.in/locations',
  },
  openGraph: {
    title: 'Construction Services Across 76 Bengaluru Localities | Construction Buddy',
    description:
      'Citywide construction footprint across 76 prime Bengaluru residential corridors. BBMP sanction drawings, geotechnical engineering, and turnkey luxury builds.',
    url: 'https://constructionbuddy.in/locations',
    siteName: 'Construction Buddy',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LocationsHubPage() {
  const allLocations = getAllLocations();

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
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bengaluru Construction Directory & Service Localities',
    description:
      'Directory of 76 Bengaluru micro-markets serviced by Construction Buddy for residential house construction, architectural drawings, and interior design.',
    url: 'https://constructionbuddy.in/locations',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <LocationsHubClient zones={BENGALURU_ZONES_DATA} locations={allLocations} />
    </>
  );
}
