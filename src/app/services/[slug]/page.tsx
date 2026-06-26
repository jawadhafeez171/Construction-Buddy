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
    title: `${service.title} | Construction Buddy Bengaluru`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Construction Buddy Bengaluru`,
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
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Pick other services as related
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return <ServiceDetailClient service={service} related={related} />;
}
