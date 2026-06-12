import styles from './Packages.module.css';

const packages = [
  {
    name: 'Standard',
    price: '₹1940',
    description: 'A budget package with no compromise on quality that includes all construction essentials',
    popular: false,
    highlights: [
      'Trusted brand steel & cement',
      'Standard floor tiles upto ₹50/sqft',
      'Standard flush doors and window finish',
      'Tractor Emulsion finish',
      'Essential kitchen & bathroom fittings'
    ]
  },
  {
    name: 'Premium',
    price: '₹2070',
    description: 'Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price',
    popular: true,
    highlights: [
      'Superior brand steel & cement',
      'Refined floor tiles upto ₹100/sqft',
      'Elegant teak doors and window finish',
      'Tractor Shyne Emulsion finish',
      'Stylish kitchen & bathroom'
    ]
  },
  {
    name: 'Luxury',
    price: '₹2400',
    description: 'An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc',
    popular: false,
    highlights: [
      'Superior Brand steel & cement',
      'Premium floor tiles upto ₹140/sqft',
      'Designer teak doors and window finish',
      'Apcolite Premium finish',
      'Quality kitchen & bathroom'
    ]
  },
  {
    name: 'Elite',
    price: '₹2640',
    description: 'An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc',
    popular: false,
    highlights: [
      'Superior brand steel & cement',
      'Lavish floor tiles upto ₹160/sqft',
      'Designer teak doors and window finish',
      'Apex Ultima Exterior finish',
      'Lavish Fittings for kitchen & bathroom'
    ]
  }
];

export default function Packages() {
  return (
    <section id="packages" className={`section ${styles.packagesSection}`}>
      <div className="container">
        <h2 className="section-title">
          Construction Packages in <span>Bengaluru</span>
        </h2>
        <div className={styles.toggleWrapper}>
          <div className={styles.toggle}>
            <span className={styles.activeLabel}>
              <span className={styles.radio}></span>
              Homes <span className={styles.startsAt}>STARTS AT ₹1940 PER SQFT</span>
            </span>
            <span className={styles.inactiveLabel}>
              <span className={styles.radioEmpty}></span>
              Luxury Homes <span className={styles.startsAt}>STARTS AT ₹3990 PER SQFT</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <div key={index} className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}>
              {pkg.popular && <div className={styles.popularBadge}>POPULAR</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.pkgName}>{pkg.name}</h3>
                <div className={styles.pkgPrice}>
                  <span className={styles.amount}>{pkg.price}</span> per sqft
                </div>
                <p className={styles.pkgDesc}>{pkg.description}</p>
              </div>
              <div className={styles.highlightsBox}>
                <div className={styles.highlightsTitle}>HIGHLIGHTS</div>
                <ul className={styles.list}>
                  {pkg.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardFooter}>
                <button className={`btn btn-outline ${styles.btnFull}`}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
