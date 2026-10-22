import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getService } from '@/lib/servicesData';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} - Bengaluru Building Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Bengaluru Building Services | Construction Buddy`,
      description: service.description,
      url: `/services/${slug}`,
      images: [
        {
          url: service.image || '/logo.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `https://www.constructionbuddy.in/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Pick other services as related
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

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
        name: 'Services',
        item: 'https://www.constructionbuddy.in/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://www.constructionbuddy.in/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'GeneralContractor',
      name: 'Construction Buddy',
      url: 'https://www.constructionbuddy.in',
      telephone: '+919902800693',
      priceRange: '₹₹ - ₹₹₹₹',
      image: 'https://www.constructionbuddy.in/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Thanisandra Main Rd, Sri Balaji Krupa Layout, RK Hegde Nagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560064',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Bengaluru',
    },
    url: `https://www.constructionbuddy.in/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailClient service={service} related={related} />
    </>
  );
}
