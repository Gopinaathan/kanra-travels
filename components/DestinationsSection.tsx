'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/DestinationsSection.module.css';

export default function DestinationsSection() {
  const destinations = [
    { name: 'Venice', country: 'Italy', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=500&fit=crop', price: 849 },
    { name: 'Iceland', country: 'Iceland', image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=400&h=500&fit=crop', price: 1249 },
    { name: 'Moab', country: 'USA', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop', price: 679 },
    { name: 'Arizona', country: 'USA', image: 'https://images.unsplash.com/photo-1562705839-6dfc5e829087?q=80&w=400&h=500&fit=crop', price: 589 }
  ];

  return (
    <section id="destinations" className={styles.destinations}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Discover the touch of nature 🌈</h2>
          </div>
          <div className={styles.navigation}>
            <button className={styles.navButton} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
              </svg>
            </button>
            <button className={styles.navButton} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {destinations.map((dest, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={500}
                  className={styles.image}
                />
                <span className={styles.price}>📍{dest.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}