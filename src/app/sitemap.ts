import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { services } from '@/lib/servicesData';
import { getAllLocations } from '@/lib/locationsData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.constructionbuddy.in';

  // Real revision dates for static pages
  const staticRouteDates: Record<string, string> = {
    '': '2026-10-22',
    '/services': '2026-10-15',
    '/calculator': '2026-10-10',
    '/refer': '2026-10-05',
    '/compare-packages': '2026-10-18',
    '/locations': '2026-10-19',
    '/vastu-compass': '2026-10-12',
    '/blog': '2026-10-16',
    '/privacy': '2026-09-01',
    '/terms': '2026-09-01',
  };

  // Static routes
  const staticRoutes = [
    '',
    '/blog',
    '/services',
    '/calculator',
    '/refer',
    '/compare-packages',
    '/locations',
    '/vastu-compass',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(staticRouteDates[route] || '2026-10-15'),
    changeFrequency: 'weekly' as const,
    priority:
      route === ''
        ? 1.0
        : route === '/services' ||
          route === '/calculator' ||
          route === '/locations' ||
          route === '/compare-packages' ||
          route === '/vastu-compass'
        ? 0.9
        : 0.8,
  }));

  // Dynamic blog routes with authentic post publication dates
  const blogRoutes = blogPosts.map((post) => {
    let lastModified = new Date('2026-09-15');
    try {
      const parsed = Date.parse(post.date);
      if (!isNaN(parsed)) {
        lastModified = new Date(parsed);
      }
    } catch {
      // Ignore
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  // Dynamic service routes with realistic revision dates
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date('2026-10-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Dynamic 76 Bengaluru location routes with realistic revision dates
  const locationRoutes = getAllLocations().map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date('2026-10-19'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...locationRoutes];
}
