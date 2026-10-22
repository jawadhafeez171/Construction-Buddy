import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getBlogPost, getCategoryColor } from '@/lib/blogData';
import BlogPostClient from './BlogPostClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Construction Buddy`,
      description: post.excerpt,
      url: `/blog/${slug}`,
      images: [
        {
          url: post.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Construction Buddy`,
      description: post.excerpt,
      images: [post.image || '/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.constructionbuddy.in/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  let publishedIso = '2026-09-12T09:00:00+05:30';
  try {
    const d = new Date(post.date);
    if (!isNaN(d.getTime())) {
      publishedIso = d.toISOString();
    }
  } catch (e) {
    // fallback
  }

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
        name: 'Blog',
        item: 'https://www.constructionbuddy.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.constructionbuddy.in/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.constructionbuddy.in/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    image: [
      post.image.startsWith('http')
        ? post.image
        : `https://www.constructionbuddy.in${post.image}`,
    ],
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      url: 'https://www.hafeezstudio.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Construction Buddy',
      url: 'https://www.constructionbuddy.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.constructionbuddy.in/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} related={related} />
    </>
  );
}
