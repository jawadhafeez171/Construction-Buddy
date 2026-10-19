import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service of Construction Buddy Bengaluru. Outlining project estimates, contract milestones, warranties, and building standards.',
  alternates: {
    canonical: 'https://www.constructionbuddy.in/terms',
  },
  openGraph: {
    title: 'Terms of Service | Construction Buddy',
    description: 'Terms of Service of Construction Buddy Bengaluru. Outlining project estimates, contract milestones, warranties, and building standards.',
    url: 'https://www.constructionbuddy.in/terms',
    siteName: 'Construction Buddy',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
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
        name: 'Terms of Service',
        item: 'https://www.constructionbuddy.in/terms',
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
              <span>Terms of Service</span>
            </div>
            <h1 className={styles.pageTitle}>
              Terms of <span className={styles.titleAccent}>Service</span>
            </h1>
            <p className={styles.lastUpdated}>Last Updated: October {currentYear}</p>
          </div>
        </section>

        <div className="container">
          <div className={styles.legalContainer}>
            <div className={styles.prose}>
              <p>
                Welcome to <strong>Construction Buddy</strong>. By accessing our website, using our online cost calculators, scheduling site visits, or contracting construction and architectural services, you agree to be bound by these Terms of Service.
              </p>

              <div className={styles.highlightCard}>
                <strong>Contractual Transparency:</strong> All residential and commercial construction engagements are executed under formal, legally binding bilateral contracts featuring itemized stage-wise payment milestones and a 10-year structural warranty.
              </div>

              <h2>1. Scope of Digital Tools &amp; Cost Calculators</h2>
              <p>
                The cost calculators, package comparison tables, and Vastu compass tools provided on this website are designed for preliminary planning and educational purposes. While based on prevailing Bengaluru construction material and labor rates (TMT steel, cement, M-sand, AAC blocks), final quoted prices are determined following soil bearing tests, architectural floor planning, and engineering validation.
              </p>

              <h2>2. Formal Construction Contracts &amp; Fixed-Cost Guarantee</h2>
              <p>
                Upon mutual agreement to proceed with a residential or commercial build:
              </p>
              <ul>
                <li>A comprehensive <strong>Contract Agreement</strong> is signed detailing the itemized Bill of Quantities (BOQ), material specifications (brands of cement, steel, sanitaryware, tiles, electrical wiring), and completion timeline.</li>
                <li><strong>No Hidden Costs:</strong> Our turnkey contracts include a strict fixed-cost guarantee against unilateral cost escalations during the contracted project timeline, excluding owner-requested structural modifications.</li>
              </ul>

              <h2>3. 10-Year Structural Warranty</h2>
              <p>
                Construction Buddy provides an explicit <strong>10-year structural warranty</strong> on all turnkey residential construction projects:
              </p>
              <ul>
                <li>The warranty covers the reinforced cement concrete (RCC) structural frame, including column footings, plinth beams, columns, floor slabs, and load-bearing walls.</li>
                <li>Designated waterproofing warranties (underground sumps, sunken slabs, and terrace slabs) are provided as documented in your project warranty deed.</li>
              </ul>

              <h2>4. Penalty-Backed Handover Guarantee</h2>
              <p>
                We value your time. If project delivery is delayed beyond the contracted handover date due to contractor delays (excluding statutory force majeure, municipal sanction holdups, or owner-directed design revisions), Construction Buddy compensates the client via contractual per-week rent penalties as stated in the signed agreement.
              </p>

              <h2>5. Statutory Sanctions &amp; Municipal Compliance</h2>
              <p>
                All architectural plans and structural engineering blueprints are designed in compliance with the Bruhat Bengaluru Mahanagara Palike (BBMP) Building Bye-Laws, Bangalore Development Authority (BDA) guidelines, and national structural codes (IS 456, IS 1893).
              </p>

              <h2>6. Intellectual Property &amp; Architectural Copyright</h2>
              <p>
                All architectural drawings, 3D renderings, floor plan layouts, and multimedia content produced by Construction Buddy and Hafeez Studio remain protected under copyright laws until all project milestones are fulfilled in accordance with the service agreement.
              </p>

              <h2>7. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms and all construction contracts shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the civil courts in <strong>Bengaluru, Karnataka</strong>.
              </p>

              <h2>8. Contact Details</h2>
              <p>
                For legal inquiries or contractual clarifications, please contact our administrative offices:
              </p>
              <ul>
                <li><strong>Construction Buddy Headquarters:</strong> Thanisandra Main Rd, Sri Balaji Krupa Layout, RK Hegde Nagar, Bengaluru, Karnataka 560064</li>
                <li><strong>Phone:</strong> +91 99028 00693</li>
                <li><strong>Email:</strong> constructionbuddyhq@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
