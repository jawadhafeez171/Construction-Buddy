'use client';

import { useState } from 'react';
import styles from './Gallery.module.css';

const categories = ['All', 'Residential', 'School', 'Religious'];

const projects = [
  { name: 'Ultra Modern House', category: 'Residential', src: '/Project images/House 2.webp' },
  { name: 'Classic Villa', category: 'Residential', src: '/Project images/House.webp' },
  { name: 'Premium Apartments', category: 'Residential', src: '/Project images/Residential 1.webp' },
  { name: 'Apartment Complex Render', category: 'Residential', src: '/Project images/Residential 1 render.webp' },
  { name: 'Central School Campus', category: 'School', src: '/Project images/School.webp' },
  { name: 'School Classroom Block', category: 'School', src: '/Project images/School 1.webp' },
  { name: 'School Play Area', category: 'School', src: '/Project images/School 2.webp' },
  { name: 'School Administrative Wing', category: 'School', src: '/Project images/School 3.webp' },
  { name: 'School Sports Facility', category: 'School', src: '/Project images/School 4.webp' },
  { name: 'School Assembly Grounds', category: 'School', src: '/Project images/School 5.webp' },
  { name: 'Grand Mosque', category: 'Religious', src: '/Project images/Mosque 1.webp' },
  { name: 'Madrasa Main Block', category: 'Religious', src: '/Project images/Madrasa 1.webp' },
  { name: 'Madrasa Courtyard', category: 'Religious', src: '/Project images/Madrasa 2.webp' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className={`section ${styles.gallerySection}`}>
      <div className="blur-blob" style={{ bottom: '10%', left: '5%' }}></div>
      <div className="container">
        <h2 className="section-title">
          Our Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Explore our award-winning architecture and landmark construction projects, beautifully structured across Bengaluru.
        </p>

        {/* Categories Tab Bar */}
        <div className={styles.tabContainer}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.tabBtn} ${activeTab === category ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={project.src} alt={project.name} className={styles.image} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.meta}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  <h3 className={styles.projectName}>{project.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
