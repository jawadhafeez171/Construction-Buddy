'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus first field on open, block body scroll
  useEffect(() => {
    nameRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    // Simulate a brief network call, then show success
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const modal = (
    <div
      className={styles.backdrop}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal}>

        {/* ── Left: Image Panel ── */}
        <div className={styles.imagePanel}>
          <img
            src="/service_home_construction.webp"
            alt="Beautiful home construction in Bengaluru"
            className={styles.image}
          />
          <div className={styles.imageScrim} />
          <div className={styles.imageOverlayContent}>
            <div className={styles.imageBadge}>
              <span className={styles.imageBadgeDot} />
              Free Consultation
            </div>
            <p className={styles.imageQuote}>
              Your dream home is one conversation away.
            </p>
          </div>
        </div>

        {/* ── Right: Form Panel ── */}
        <div className={styles.formPanel}>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>

          {submitted ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>We&apos;ll be in touch!</h2>
              <p className={styles.successDesc}>
                Thank you, <strong>{name}</strong>. Our team will call you at{' '}
                <strong>{phone}</strong> within 24 hours to discuss your dream home.
              </p>
              <button className={styles.successClose} onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            <>
              <div className={styles.formHeader}>
                <span className={styles.formEyebrow}>Get Started</span>
                <h2 id="modal-title" className={styles.formTitle}>
                  Build Your <span>Dream Home</span>
                </h2>
                <p className={styles.formSubtitle}>
                  Share your details and our experts will reach out to craft a plan tailored just for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.fields}>
                  {/* Name */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="modal-name" className={styles.label}>Your Name</label>
                    <div className={styles.inputWrap}>
                      <span className={styles.inputIcon}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        id="modal-name"
                        ref={nameRef}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className={styles.input}
                        required
                        autoComplete="name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="modal-phone" className={styles.label}>Phone Number</label>
                    <div className={styles.inputWrap}>
                      <span className={styles.inputIcon}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <input
                        id="modal-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={styles.input}
                        required
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading || !name.trim() || !phone.trim()}
                  style={{ marginTop: '1.25rem' }}
                >
                  {loading ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Get My Free Consultation
                      <svg className={styles.submitArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <p className={styles.trustNote}>
                🔒 Your information is safe with us. No spam, ever.
              </p>
            </>
          )}
        </div>

      </div>

      {/* Spin keyframe injected inline for the loading spinner */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  // Render into document.body via a portal so it sits above everything
  return typeof window !== 'undefined'
    ? createPortal(modal, document.body)
    : null;
}
