'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Service } from '@/lib/servicesData';
import ContactModal from '@/components/ContactModal';
import styles from './service.module.css';

interface ServiceDetailClientProps {
  service: Service;
  related: Service[];
}

export default function ServiceDetailClient({ service, related }: ServiceDetailClientProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className={styles.pageWrapper}>
      {/* ── Dynamic Header Panel ── */}
      <section className={styles.detailHeader}>
        <div className={styles.headerBg} />
        <div className={styles.headerBlob1} />
        <div className={styles.headerBlob2} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href="/services" className={styles.breadcrumbLink}>Services</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbActive}>{service.title}</span>
          </div>

          <div className={styles.headerGrid}>
            <div className={styles.headerText}>
              <span className={styles.categoryBadge}>
                <span className={styles.badgeDot} />
                Specialized Division
              </span>
              <h1 className={styles.serviceTitle}>
                {service.title.split(' & ').map((part, index, arr) => (
                  <span key={index}>
                    {part}
                    {index < arr.length - 1 ? <span className={styles.titleAmp}> &amp; </span> : ''}
                  </span>
                ))}
              </h1>
              <p className={styles.serviceExcerpt}>{service.description}</p>
            </div>

            <div className={styles.headerImageWrapper}>
              <img src={service.image} alt={service.title} className={styles.headerImage} />
              <div className={styles.imageOverlay} />
              <div className={styles.floatingIconBadge}>{service.icon}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Two-Column Content ── */}
      <section className={styles.mainContentSection}>
        <div className="container">
          <div className={styles.twoColumnLayout}>
            
            {/* ── Left Column: Overview, Features & Benefits ── */}
            <div className={styles.leftColumn}>
              
              {/* Overview */}
              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>Service Overview</h2>
                <p className={styles.fullDescription}>{service.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>What We Deliver</h2>
                <div className={styles.featuresGrid}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureCard}>
                      <span className={styles.featureBullet}>◆</span>
                      <p className={styles.featureText}>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>The Construction Buddy Advantage</h2>
                <div className={styles.benefitsGrid}>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className={styles.benefitCard}>
                      <span className={styles.benefitIcon}>✓</span>
                      <p className={styles.benefitText}>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column: Interactive Process & CTA Sidebar ── */}
            <div className={styles.rightColumn}>
              <div className={styles.stickySidebar}>
                
                {/* Interactive Process Timeline */}
                <div className={styles.timelineCard}>
                  <h3 className={styles.timelineTitle}>Execution Process</h3>
                  <p className={styles.timelineSub}>Click steps to view detailed methodology</p>
                  
                  <div className={styles.timeline}>
                    <div className={styles.timelineLine} />
                    {service.process.map((step, idx) => {
                      const isActive = activeStep === idx;
                      return (
                        <div
                          key={idx}
                          className={`${styles.timelineStep} ${isActive ? styles.stepActive : ''}`}
                          onClick={() => setActiveStep(idx)}
                        >
                          <div className={styles.stepIndicator}>
                            {idx + 1}
                          </div>
                          <div className={styles.stepContent}>
                            <h4 className={styles.stepTitle}>{step.title}</h4>
                            {isActive && (
                              <p className={styles.stepDesc}>{step.desc}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Consultation CTA */}
                <div className={styles.ctaCard}>
                  <div className={styles.ctaBlob} />
                  <h3 className={styles.ctaTitle}>Ready to build with Bengaluru's best?</h3>
                  <p className={styles.ctaDesc}>Get a detailed, clash-free cost estimation and 3D architectural mockup for your plot.</p>
                  <button onClick={() => setIsModalOpen(true)} className={`btn btn-primary ${styles.ctaButton}`}>
                    Request Estimation Call
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className={styles.ctaSecure}>🔒 Free consult · Zero obligation</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Service Specific FAQs (Accordion) ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <div className="container">
            <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Service <span>FAQs</span>
            </h2>
            <div className={styles.accordionContainer}>
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.faqOpen : ''}`}>
                    <button onClick={() => toggleFaq(idx)} className={styles.accordionHeader}>
                      <span className={styles.faqQuestion}>{faq.question}</span>
                      <span className={styles.faqToggleIcon}>{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className={styles.accordionBody}>
                      <div className={styles.accordionContent}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Services ── */}
      <section className={styles.relatedSection}>
        <div className="container">
          <h2 className={styles.relatedTitle}>Explore Other Services</h2>
          <div className={styles.relatedGrid}>
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedImageWrap}>
                  <img src={s.image} alt={s.title} className={styles.relatedImg} />
                  <div className={styles.relatedOverlay} />
                  <span className={styles.relatedIcon}>{s.icon}</span>
                </div>
                <div className={styles.relatedBody}>
                  <h3 className={styles.relatedCardTitle}>{s.title}</h3>
                  <p className={styles.relatedCardDesc}>{s.description}</p>
                  <span className={styles.relatedLink}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Modal Integration ── */}
      {isModalOpen && (
        <ContactModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
