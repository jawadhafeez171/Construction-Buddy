import Link from 'next/link';
import { services } from '@/lib/servicesData';
import styles from './Services.module.css';

// Only show the 3 primary services on the homepage
const primarySlugs = ['home-construction', 'commercial-construction', 'interior-design'];

export default function Services() {
  const primaryServices = primarySlugs.map(
    slug => services.find(s => s.slug === slug)!
  );

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className="section-title">
          What We <span>Build</span>
        </h2>
        <p className="section-subtitle">
          From foundations to finishes — we handle every stage of your construction journey.
        </p>

        <div className={styles.primaryGrid}>
          {primaryServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.primaryCard}
            >
              {/* Background photo */}
              <div className={styles.cardBg}>
                <img src={service.image} alt={service.title} className={styles.cardBgImg} />
                <div className={styles.cardScrim} />
              </div>

              {/* Top badge */}
              <div className={styles.cardBadge}>
                <span className={styles.cardIcon}>{service.icon}</span>
              </div>

              {/* Bottom content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <div className={styles.cardCta}>
                  Learn More
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore more CTA */}
        <div className={styles.exploreRow}>
          <div className={styles.exploreLeft}>
            <span className={styles.exploreLabel}>Also offering</span>
            <div className={styles.morePills}>
              {services
                .filter(s => !primarySlugs.includes(s.slug))
                .map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={styles.morePill}>
                    {s.icon} {s.title}
                  </Link>
                ))}
            </div>
          </div>
          <Link href="/services" className={styles.exploreBtn}>
            Explore All Services
            <svg viewBox="0 0 24 24" width="17" height="17" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
