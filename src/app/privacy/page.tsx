import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Construction Buddy Bengaluru. Learn how we collect, protect, and handle your project and personal data.',
  alternates: {
    canonical: 'https://www.constructionbuddy.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Construction Buddy',
    description: 'Privacy Policy of Construction Buddy Bengaluru. Learn how we collect, protect, and handle your project and personal data.',
    url: 'https://www.constructionbuddy.in/privacy',
    siteName: 'Construction Buddy',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

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
        name: 'Privacy Policy',
        item: 'https://www.constructionbuddy.in/privacy',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteHeader />
      <main className={styles.pageWrapper}>
        <section className={styles.pageHeader}>
          <div className={styles.headerBg} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className={styles.breadcrumb}>
              <Link href="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span>Privacy Policy</span>
            </div>
            <h1 className={styles.pageTitle}>
              Privacy <span className={styles.titleAccent}>Policy</span>
            </h1>
            <p className={styles.lastUpdated}>Last Updated: October {currentYear}</p>
          </div>
        </section>

        <div className="container">
          <div className={styles.legalContainer}>
            <div className={styles.prose}>
              <p>
                At <strong>Construction Buddy</strong> (registered contractors in Karnataka, headquartered at Thanisandra Main Rd, Sri Balaji Krupa Layout, RK Hegde Nagar, Bengaluru 560064), we are deeply committed to respecting and protecting the privacy of our clients, prospective home builders, and website visitors.
              </p>

              <div className={styles.highlightCard}>
                <strong>Our Privacy Pledge:</strong> We never sell, rent, or trade your personal contact details, plot blueprints, or project requirements to third-party telemarketers or external advertisers.
              </div>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information necessary to deliver transparent architectural estimates, execute turnkey residential and commercial builds, and conduct on-site geotechnical and structural inspections:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Name, phone number, WhatsApp contact, and email address when you submit consultation inquiries or cost calculator estimates.</li>
                <li><strong>Project &amp; Property Details:</strong> Plot dimensions (e.g., 30x40, 40x60, 50x80), site location/locality in Bengaluru, khata status (A-Khata, BDA, BBMP), and preferred construction package specifications.</li>
                <li><strong>Technical Usage Data:</strong> Anonymized web analytics, IP addresses, device types, and browser information used exclusively to optimize page load speed and user experience.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                The information collected is used strictly for legitimate construction operations, including:
              </p>
              <ul>
                <li>Generating customized Bill of Quantities (BOQ) and architectural estimate reports.</li>
                <li>Scheduling physical site visits and soil investigation tests across Bengaluru localities.</li>
                <li>Drafting BBMP/BDA sanction drawings and structural engineering blueprints.</li>
                <li>Providing milestone status updates via WhatsApp and telephone during active construction phases.</li>
              </ul>

              <h2>3. Data Protection &amp; Blueprint Security</h2>
              <p>
                All client architectural drawings, structural engineering calculations, 3D BIM models, and financial payment milestones are stored within secure digital infrastructure with encrypted access. Only accredited engineers, project directors, and architects assigned to your build have access to your documentation.
              </p>

              <h2>4. Cookies &amp; Tracking Technologies</h2>
              <p>
                Our website utilizes minimal functional cookies to retain your calculator inputs and preserve navigation preferences during your session. We do not employ intrusive cross-site tracking cookies.
              </p>

              <h2>5. Your Rights &amp; Data Control</h2>
              <p>
                You may request a copy of the project data we maintain, request corrections, or request deletion of preliminary consultation inquiries at any time by contacting our privacy compliance team at{' '}
                <a href="mailto:constructionbuddyhq@gmail.com" style={{ color: '#c8860a', textDecoration: 'underline' }}>
                  constructionbuddyhq@gmail.com
                </a>.
              </p>

              <h2>6. Contact Headquarters</h2>
              <p>
                If you have any questions regarding this Privacy Policy or data security practices, please contact our Bengaluru headquarters:
              </p>
              <ul>
                <li><strong>Address:</strong> Thanisandra Main Rd, Sri Balaji Krupa Layout, RK Hegde Nagar, Bengaluru, Karnataka 560064</li>
                <li><strong>Direct Phone:</strong> +91 99028 00693</li>
                <li><strong>Email:</strong> constructionbuddyhq@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
