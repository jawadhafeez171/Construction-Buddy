'use client';

import Link from 'next/link';
import type { BlogPost } from '@/lib/blogData';
import { getCategoryColor } from '@/lib/blogData';
import styles from './post.module.css';

const CATEGORY_GRADIENTS: Record<string, string> = {
  Technology: 'linear-gradient(135deg, #1B4D8E 0%, #2E7DD1 100%)',
  'Tips & Guides': 'linear-gradient(135deg, #1a5c3a 0%, #2E7D52 100%)',
  'Pricing & Planning': 'linear-gradient(135deg, #8a5a00 0%, #C8860A 100%)',
  'Interior Design': 'linear-gradient(135deg, #5c1f60 0%, #9B4FA0 100%)',
  Commercial: 'linear-gradient(135deg, #0d2e5c 0%, #1B4D8E 100%)',
};

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className={styles.heading2}>{line.slice(3)}</h2>);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={key++} className={styles.boldPara}>{line.slice(2, -2)}</p>);
    } else if (line.startsWith('- [ ]')) {
      elements.push(<li key={key++} className={`${styles.listItem} ${styles.checkItem}`}>☐ {line.slice(5).trim()}</li>);
    } else if (line.startsWith('- ')) {
      elements.push(<li key={key++} className={styles.listItem}>{line.slice(2)}</li>);
    } else if (line.startsWith('| ') && line.endsWith(' |')) {
      // Table row — skip separator rows
      if (line.includes('---')) continue;
      const cells = line.split('|').filter(Boolean).map(c => c.trim());
      const isHeader = i > 0 && lines[i + 1]?.includes('---');
      if (isHeader) {
        elements.push(
          <tr key={key++} className={styles.tableHeaderRow}>
            {cells.map((c, ci) => <th key={ci} className={styles.tableHeader}>{c}</th>)}
          </tr>
        );
      } else {
        elements.push(
          <tr key={key++} className={styles.tableRow}>
            {cells.map((c, ci) => <td key={ci} className={styles.tableCell}>{c}</td>)}
          </tr>
        );
      }
    } else {
      // Replace **bold** inline
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={key++} className={styles.paragraph}>
          {parts.map((p, pi) =>
            p.startsWith('**') && p.endsWith('**')
              ? <strong key={pi}>{p.slice(2, -2)}</strong>
              : p
          )}
        </p>
      );
    }
  }

  // Wrap consecutive <li> items and table rows in their container
  const wrapped: React.ReactNode[] = [];
  let i = 0;
  while (i < elements.length) {
    const el = elements[i] as React.ReactElement;
    if (el.type === 'li') {
      const items: React.ReactNode[] = [];
      while (i < elements.length && (elements[i] as React.ReactElement).type === 'li') {
        items.push(elements[i]);
        i++;
      }
      wrapped.push(<ul key={`ul-${i}`} className={styles.list}>{items}</ul>);
    } else if (el.type === 'tr') {
      const rows: React.ReactNode[] = [];
      while (i < elements.length && (elements[i] as React.ReactElement).type === 'tr') {
        rows.push(elements[i]);
        i++;
      }
      wrapped.push(<div key={`tbl-${i}`} className={styles.tableWrapper}><table className={styles.table}><tbody>{rows}</tbody></table></div>);
    } else {
      wrapped.push(el);
      i++;
    }
  }

  return wrapped;
}

export default function BlogPostClient({ post, related }: Props) {
  const accentColor = getCategoryColor(post.category);
  const gradient = CATEGORY_GRADIENTS[post.category] ?? CATEGORY_GRADIENTS.Technology;

  return (
    <main className={styles.pageWrapper}>
      {/* ── Hero ── */}
      <section className={styles.hero} style={{ background: gradient }}>
        <div className={styles.heroBg} />
        <div className={styles.heroBlob} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>{post.category}</span>
          </div>

          <div className={styles.categoryPill} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            {post.category}
          </div>

          <h1 className={styles.heroTitle}>{post.title}</h1>

          <div className={styles.heroMeta}>
            <div className={styles.authorChip}>
              <div className={styles.authorAvatar} style={{ background: 'rgba(255,255,255,0.2)' }}>
                {post.author.charAt(0)}
              </div>
              <div>
                <div className={styles.authorName}>{post.author}</div>
                <div className={styles.authorRole}>{post.authorRole}</div>
              </div>
            </div>
            <div className={styles.metaSeparator} />
            <span className={styles.metaItem}>📅 {post.date}</span>
            <div className={styles.metaSeparator} />
            <span className={styles.metaItem}>⏱ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Content Layout ── */}
      <div className="container">
        <div className={styles.layout}>
          {/* Main Content */}
          <article className={styles.article}>
            <p className={styles.lead}>{post.excerpt}</p>
            <div className={styles.articleBody}>
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className={styles.tagRow}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            {/* Share */}
            <div className={styles.shareBox}>
              <span className={styles.shareLabel}>Share this article</span>
              <div className={styles.shareBtns}>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - https://constructionbuddy.in/blog/' + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label="Share on WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://constructionbuddy.in/blog/' + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareBtn}
                  aria-label="Share on Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  Twitter/X
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Author card */}
            <div className={styles.sideCard}>
              <div className={styles.sideAuthorAvatar} style={{ background: gradient }}>
                {post.author.charAt(0)}
              </div>
              <h3 className={styles.sideAuthorName}>{post.author}</h3>
              <p className={styles.sideAuthorRole}>{post.authorRole}</p>
              <p className={styles.sideAuthorBio}>
                Expert at Construction Buddy with deep knowledge of construction processes in Bengaluru.
              </p>
            </div>

            {/* CTA Card */}
            <div className={styles.sideCta} style={{ background: gradient }}>
              <div className={styles.sideCtaBg} />
              <h3 className={styles.sideCtaTitle}>Ready to Build?</h3>
              <p className={styles.sideCtaDesc}>
                Talk to our experts and get a free consultation for your project.
              </p>
              <a href="tel:+919902800693" className={styles.sideCtaBtn}>
                📞 Call Us Now
              </a>
              <a href="/#contact" className={styles.sideCtaLink}>Or get a quote →</a>
            </div>

            {/* Tags */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Topics</h3>
              <div className={styles.tagRow} style={{ marginTop: 0 }}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImageWrap} style={{ background: CATEGORY_GRADIENTS[r.category] ?? gradient }}>
                    <img src={r.image} alt={r.title} className={styles.relatedImg} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.categoryPill} style={{ background: getCategoryColor(r.category) + '18', color: getCategoryColor(r.category) }}>
                      {r.category}
                    </span>
                    <h3 className={styles.relatedPostTitle}>{r.title}</h3>
                    <span className={styles.relatedMeta}>{r.date} · {r.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className={styles.backRow}>
          <Link href="/blog" className={`btn btn-outline ${styles.backBtn}`}>
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
