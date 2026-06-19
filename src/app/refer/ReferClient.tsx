'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './refer.module.css';

export default function ReferClient() {
  const [formData, setFormData] = useState({
    yourName: '',
    yourContact: '',
    friendName: '',
    friendContact: '',
    buildType: 'Home Construction',
    plotSize: '30x40',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.yourName || !formData.yourContact || !formData.friendName || !formData.friendContact) {
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }

    setErrorMessage(null);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      yourName: '',
      yourContact: '',
      friendName: '',
      friendContact: '',
      buildType: 'Home Construction',
      plotSize: '30x40',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className={styles.referPage}>
      
      {/* Dynamic Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--gold-light)' }}>Refer & Earn</span>
          </nav>
          <h1 className={styles.title}>
            Partnership <span>Program</span>
          </h1>
          <p className={styles.subtitle}>
            Connect friends and family with Bengaluru's premier architectural and construction companion. Earn cash rewards while they build.
          </p>
        </div>
      </section>

      {/* Main Content split column */}
      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Left Column - Content, timeline and generated image */}
            <div className={styles.leftCol}>
              <div className={styles.cardGlass}>
                <h2 className={styles.sectionHeading}>How the Program Works</h2>
                <div className={styles.timeline}>
                  <div className={styles.timelineStep}>
                    <div className={styles.stepNum}>1</div>
                    <div className={styles.stepText}>
                      <h3>Submit Details</h3>
                      <p>Fill out the quick referral registration form. Give us your contact info and your friend's construction location/details.</p>
                    </div>
                  </div>
                  <div className={styles.timelineStep}>
                    <div className={styles.stepNum}>2</div>
                    <div className={styles.stepText}>
                      <h3>Team Consultation</h3>
                      <p>Our architectural engineering team schedules a structural design and estimation consultation session with your friend.</p>
                    </div>
                  </div>
                  <div className={styles.timelineStep}>
                    <div className={styles.stepNum}>3</div>
                    <div className={styles.stepText}>
                      <h3>Get Paid</h3>
                      <p>Once we receive the first project payment from your referred client after contract sign-off, we deposit your cash reward (up to ₹1,00,000) directly into your bank account.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generated Image Showcase */}
              <div className={styles.imageCardWrapper}>
                <img 
                  src="/refer_hero.webp" 
                  alt="Modern villa design Bangalore - Construction Buddy Network" 
                  className={styles.showcaseImage}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.imageFloatingTag}>
                  <span className={styles.floatingTagText}>🎁 Upgrades for Friends</span>
                </div>
              </div>
            </div>

            {/* Right Column - Referral Form */}
            <div className={styles.rightCol}>
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Submit a Referral</h3>
                <p className={styles.formSub}>Register your partner profile and referee details. We'll handle standard outreach confidentially.</p>
                
                {errorMessage && (
                  <div className={styles.errorBanner}>
                    <span>⚠️</span> {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="yourName">Your Full Name *</label>
                    <input 
                      type="text" 
                      id="yourName"
                      value={formData.yourName}
                      onChange={(e) => setFormData({...formData, yourName: e.target.value})}
                      placeholder="Enter your name"
                      className={styles.inputField}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="yourContact">Your Phone or Email *</label>
                    <input 
                      type="text" 
                      id="yourContact"
                      value={formData.yourContact}
                      onChange={(e) => setFormData({...formData, yourContact: e.target.value})}
                      placeholder="Enter your contact info"
                      className={styles.inputField}
                      required
                    />
                  </div>

                  <div className={styles.formDivider} />

                  <div className={styles.formGroup}>
                    <label htmlFor="friendName">Friend's Name *</label>
                    <input 
                      type="text" 
                      id="friendName"
                      value={formData.friendName}
                      onChange={(e) => setFormData({...formData, friendName: e.target.value})}
                      placeholder="Enter friend's full name"
                      className={styles.inputField}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="friendContact">Friend's Phone or Email *</label>
                    <input 
                      type="text" 
                      id="friendContact"
                      value={formData.friendContact}
                      onChange={(e) => setFormData({...formData, friendContact: e.target.value})}
                      placeholder="Enter friend's contact details"
                      className={styles.inputField}
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="buildType">Project Type</label>
                      <select 
                        id="buildType"
                        value={formData.buildType}
                        onChange={(e) => setFormData({...formData, buildType: e.target.value})}
                        className={styles.selectField}
                      >
                        <option value="Home Construction">Home Construction</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="BIM & Architecture">BIM & Architecture</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="plotSize">Est. Plot Size</label>
                      <select 
                        id="plotSize"
                        value={formData.plotSize}
                        onChange={(e) => setFormData({...formData, plotSize: e.target.value})}
                        className={styles.selectField}
                      >
                        <option value="30x40">30 x 40 site (1200 sqft)</option>
                        <option value="40x60">40 x 60 site (2400 sqft)</option>
                        <option value="50x80">50 x 80 site (4000 sqft)</option>
                        <option value="custom">Custom Site Dimensions</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="notes">Additional notes (Optional)</label>
                    <textarea 
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="E.g. plot location, structural timeline preferences"
                      className={styles.textareaField}
                    />
                  </div>

                  <button type="submit" className={`btn ${styles.submitBtn}`}>
                    Register Referral
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program FAQs Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3>When do I receive my referral payout?</h3>
              <p>Payouts are processed once we receive the first project payment from the referred client following contract sign-off.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Is there a limit to how many clients I can refer?</h3>
              <p>No, there are absolutely no limits. You earn a cash payout for every client referred who makes their first project payment with Construction Buddy.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Will my friend be notified that I referred them?</h3>
              <p>Yes, we contact them transparently and mention your referral. This helps us share the welcome perks (free solar setups or charging stations) immediately.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>What counts as a successful referral build?</h3>
              <p>Any verified residential or commercial build project within Bengaluru city bounds where Construction Buddy handles structural or complete turnkey contracting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stateful Success Modal Overlay */}
      {isSubmitted && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <div className={styles.modalSuccessIcon}>✓</div>
            <h2>Referral Successfully Registered!</h2>
            <p className={styles.modalText}>
              Thank you for partnering with Construction Buddy. We have registered your details. 
              Our relationship lead will schedule standard outreach with <strong>{formData.friendName}</strong>.
            </p>
            <div className={styles.modalSummaryBox}>
              <div>Your Referral Code: <strong>CB-REF-{Math.floor(1000 + Math.random() * 9000)}</strong></div>
              <div>Estimated Reward Tier: <strong>Standard / Luxury Payout</strong></div>
            </div>
            <button onClick={resetForm} className={`btn ${styles.modalCloseBtn}`}>
              Register Another Referral
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
