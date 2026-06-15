import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { services } from '@/lib/servicesData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://constructionbuddy.in';

  // Static routes
  const staticRoutes = [
    '',
    '/blog',
    '/services',
    '/calculator',
    '/refer',
    '/compare-packages',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : (route === '/services' || route === '/calculator' || route === '/refer' || route === '/compare-packages') ? 0.9 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => {
    let lastModified = new Date();
    try {
      const parsed = Date.parse(post.date);
      if (!isNaN(parsed)) {
        lastModified = new Date(parsed);
      }
    } catch (e) {
      // Ignore
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes];
}
