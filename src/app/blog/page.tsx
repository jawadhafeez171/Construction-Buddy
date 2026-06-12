'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts, getCategoryColor } from '@/lib/blogData';
import styles from './blog.module.css';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const CATEGORY_GRADIENTS: Record<string, string> = {
  Technology: 'linear-gradient(135deg, #1B4D8E 0%, #2E7DD1 100%)',
  'Tips & Guides': 'linear-gradient(135deg, #1a5c3a 0%, #2E7D52 100%)',
  'Pricing & Planning': 'linear-gradient(135deg, #8a5a00 0%, #C8860A 100%)',
  'Interior Design': 'linear-gradient(135deg, #5c1f60 0%, #9B4FA0 100%)',
  Commercial: 'linear-gradient(135deg, #0d2e5c 0%, #1B4D8E 100%)',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts.filter(
    (p) => !p.featured && (activeCategory === 'All' || p.category === activeCategory)
  );

  return (
    <main className={styles.pageWrapper}>
      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg} />
        <div className={styles.headerBlob1} />
        <div className={styles.headerBlob2} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>Blog</span>
          </div>
          <h1 className={styles.pageTitle}>
            Construction <span className={styles.titleAccent}>Insights</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Expert guidance, industry trends, and practical tips from Bengaluru's
            most trusted construction team.
          </p>
        </div>
      </section>

      <div className="container">
        {/* ── Featured Post ── */}
        {featured && activeCategory === 'All' && (
          <section className={styles.featuredSection}>
            <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredImage} style={{ background: CATEGORY_GRADIENTS[featured.category] ?? CATEGORY_GRADIENTS.Technology }}>
                <img src={featured.image} alt={featured.title} className={styles.featuredImg} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className={styles.featuredOverlay} />
                <div className={styles.featuredBadge}>
                  <span className={styles.featuredBadgeDot} />
                  Featured Story
                </div>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={styles.categoryPill} style={{ background: getCategoryColor(featured.category) + '18', color: getCategoryColor(featured.category) }}>
                    {featured.category}
                  </span>
                  <span className={styles.metaDot} />
                  <span className={styles.metaText}>{featured.date}</span>
                  <span className={styles.metaDot} />
                  <span className={styles.metaText}>{featured.readTime}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.featuredAuthor}>
                  <div className={styles.authorAvatar} style={{ background: getCategoryColor(featured.category) }}>
                    {featured.author.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.authorName}>{featured.author}</div>
                    <div className={styles.authorRole}>{featured.authorRole}</div>
                  </div>
                </div>
                <div className={styles.readMoreBtn}>
                  Read Full Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ── Category Filter ── */}
        <div className={styles.filterBar}>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Posts Grid ── */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImageWrap} style={{ background: CATEGORY_GRADIENTS[post.category] ?? CATEGORY_GRADIENTS.Technology }}>
                  <img src={post.image} alt={post.title} className={styles.cardImg} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  <div className={styles.cardImgOverlay} />
                  <span className={styles.categoryPill} style={{ background: getCategoryColor(post.category) + '22', color: '#fff', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)', position: 'absolute', bottom: '1rem', left: '1rem' }}>
                    {post.category}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaText}>{post.date}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaText}>{post.readTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.authorAvatar} style={{ background: getCategoryColor(post.category) }}>
                      {post.author.charAt(0)}
                    </div>
                    <span className={styles.authorName}>{post.author}</span>
                    <span className={styles.cardReadMore}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span>📰</span>
            <p>No articles in this category yet. Check back soon!</p>
          </div>
        )}

        {/* ── Newsletter CTA ── */}
        <section className={styles.newsletter}>
          <div className={styles.newsletterInner}>
            <div className={styles.newsletterBlob} />
            <h2 className={styles.newsletterTitle}>Stay Ahead of Your Project</h2>
            <p className={styles.newsletterDesc}>
              Get expert construction tips, cost breakdowns, and project updates delivered straight to your inbox.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
                aria-label="Email address for newsletter"
              />
              <button type="submit" className={`btn btn-primary ${styles.newsletterBtn}`}>
                Subscribe Free
              </button>
            </form>
            <p className={styles.newsletterHint}>No spam. Unsubscribe at any time.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
