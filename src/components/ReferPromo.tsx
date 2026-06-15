import Link from 'next/link';
import styles from './ReferPromo.module.css';

export default function ReferPromo() {
  return (
    <section className={styles.referPromoSection}>
      <div className={styles.gridOverlay} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className={styles.splitLayout}>
          
          {/* Left Column: Small friendly illustration */}
          <div className={styles.leftCol}>
            <div className={styles.imageWrapper}>
              <img 
                src="/friend_referral.png" 
                alt="Friends referring Construction Buddy" 
                className={styles.referImg}
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

          {/* Right Column: Brief content and CTAs */}
          <div className={styles.rightCol}>
            <span className={styles.label}>Refer &amp; Earn Program</span>
            <h2 className={styles.heading}>
              Refer a Friend, Earn Up to <span>₹1,00,000</span>
            </h2>
            <p className={styles.subtitle}>
              Introduce anyone planning a residential or commercial construction project in Bengaluru to Construction Buddy. 
              You receive high-value cash rewards (up to ₹1,00,000), and they unlock premium welcome perks upon their first project payment.
            </p>
            
            <div className={styles.actions}>
              <Link href="/refer" className={`btn ${styles.ctaBtn}`}>
                Register a Referral
                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <p className={styles.termsNote}>* Terms &amp; conditions apply. Payout processed upon receipt of the first client project payment.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
