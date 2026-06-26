import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/servicesData';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Services | Construction Buddy Bengaluru',
  description: 'Explore Construction Buddy\'s premium construction, architectural drafting, interior design, waterproofing, and BIM services in Bengaluru.',
  openGraph: {
    title: 'Our Services | Construction Buddy Bengaluru',
    description: 'Explore Construction Buddy\'s premium construction, architectural drafting, interior design, waterproofing, and BIM services in Bengaluru.',
    url: '/services',
    images: [
      {
        url: '/service_residential.webp',
        width: 1200,
        height: 630,
        alt: 'Our Services - Construction Buddy',
      },
    ],
  },
};

export default function ServicesPage() {
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
            <span>Services</span>
          </div>
          <h1 className={styles.pageTitle}>
            Our Specialized <span className={styles.titleAccent}>Services</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Bengaluru's premier end-to-end building companion. Explore our comprehensive services designed to deliver unmatched structural stability, aesthetic elegance, and technical precision.
          </p>
        </div>
      </section>

      {/* ── Services Grid Section ── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img src={service.image} alt={service.title} className={styles.cardImg} />
                  <div className={styles.cardImgOverlay} />
                  <span className={styles.iconBadge}>{service.icon}</span>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                  <p className={styles.cardDescription}>{service.description}</p>
                  
                  {/* Service Highlights */}
                  <div className={styles.highlights}>
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className={styles.highlightItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardCta}>
                    Learn More &amp; Request Estimates
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <div className={styles.whyUsCard}>
            <div className={styles.whyUsBlob} />
            <h2 className={styles.whyUsTitle}>The Construction Buddy Promise</h2>
            <div className={styles.whyUsGrid}>
              <div className={styles.whyUsItem}>
                <div className={styles.whyUsIcon}>🛡️</div>
                <h3>10-Year Warranty</h3>
                <p>We stand firmly behind our engineering quality. Every residential project comes with a 10-year structural warranty.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.whyUsIcon}>💵</div>
                <h3>Fixed Price Guarantee</h3>
                <p>No sudden cost hikes or hidden material escalations. The price in our signed contract is the final price you pay.</p>
              </div>
              <div className={styles.whyUsItem}>
                <div className={styles.whyUsIcon}>⏱️</div>
                <h3>On-Time Handover</h3>
                <p>Our schedule is penalty-backed. If we delay delivery of your home, we pay you a monthly penalty fee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── General Services FAQ ── */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked <span>Questions</span></h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3>How does billing work for customized services?</h3>
              <p>For custom tasks like architectural drafting, MEP mapping, or standalone interior modeling, we charge a fixed flat fee based on scope of work. For complete home construction, pricing is calculated per square foot of built-up area.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Do you take projects outside of Bengaluru?</h3>
              <p>Currently, our construction and interior installation teams operate exclusively within Bengaluru Urban and Rural districts. However, our Architectural Drawings and BIM simulation teams can collaborate remotely on projects worldwide.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Can I visit ongoing projects in Bengaluru?</h3>
              <p>Absolutely! We can arrange visits to active home construction, completed interior jobs, and structural slab casting sites so you can verify our material choices and build finish quality first-hand.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Are municipal plan approvals included in the package?</h3>
              <p>Yes. If you choose our end-to-end Home Construction package, our architecture team handles the entire BBMP/BDA plan submission process on your behalf as part of the contract services.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
