import Link from 'next/link';
import { services } from '@/lib/servicesData';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <p className="section-subtitle">
          Comprehensive construction solutions designed to meet all your project needs with excellence and precision.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className={styles.card}>
              {/* Image Banner */}
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.cardImage}
                />
                <div className={styles.imageOverlay} />
                {/* Floating icon badge on top of image */}
                <div className={styles.iconBadge}>{service.icon}</div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <div className={styles.cardCta}>
                  Learn More <span className={styles.arrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
