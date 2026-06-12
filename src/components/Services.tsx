import styles from './Services.module.css';

const services = [
  {
    title: 'Architectural & Structural Drawings',
    description: 'Precision drafting and robust structural planning to lay the perfect foundation for your vision.',
    icon: '📐',
    image: '/service_architectural.png',
  },
  {
    title: 'Home Construction',
    description: 'End-to-end home building services, ensuring quality materials and timely delivery.',
    icon: '🏗️',
    image: '/service_home_construction.png',
  },
  {
    title: 'Commercial Construction',
    description: 'Delivering large-scale commercial projects — offices, retail spaces, and mixed-use developments — on time and to spec.',
    icon: '🏙️',
    image: '/service_commercial.png',
  },
  {
    title: 'Interior Design',
    description: 'Transforming spaces with aesthetic elegance and functional brilliance.',
    icon: '✨',
    image: '/service_interior.png',
  },
  {
    title: 'Waterproofing Solutions',
    description: 'Advanced waterproofing to protect your structures from leaks and weather damage.',
    icon: '💧',
    image: '/service_waterproofing.png',
  },
  {
    title: 'Building Information Modelling',
    description: 'State-of-the-art 3D modelling for accurate visualization and project management.',
    icon: '🏢',
    image: '/service_bim.png',
  },
];

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
            <div key={index} className={styles.card}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
