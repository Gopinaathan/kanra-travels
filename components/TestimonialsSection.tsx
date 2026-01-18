'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imagesColumn}>
            <div className={styles.imageGrid}>
              <div className={styles.imageBox}>
                <Image
                  src="https://images.unsplash.com/photo-1605590427165-3884d6aa6731?q=80&w=300&300=format&fit"
                  alt="Destination"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.imageBox}>
                <Image
                  src="https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1170&auto=format&fit=crop"
                  alt="Beach destination"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>
                <span className={styles.tagIcon}>📍</span>
                Nowhere
              </span>
              <span className={styles.tag}>
                <span className={styles.tagIcon}>📍</span>
                Algeria
              </span>
            </div>
          </div>
          <div className={styles.textColumn}>
            <blockquote className={styles.quote}>
              <div><span className={styles.quoteSymbol}>❝</span></div>
              Their service is absolutely wonderful and cheaper than the best or any other booking site. You get back to us strait away and no issues with any query. 
            </blockquote>
            
            <div className={styles.avatarSection}>
              <div className={styles.avatarGroup}>
                <img src="https://i.pravatar.cc/150?img=5" alt="User" />
                <img src="https://i.pravatar.cc/150?img=6" alt="User" />
                <img src="https://i.pravatar.cc/150?img=7" alt="User" />
                <img src="https://i.pravatar.cc/150?img=8" alt="User" />
                <img src="https://i.pravatar.cc/150?img=9" alt="User" />
                <img src="https://i.pravatar.cc/150?img=10" alt="User" />
              </div>
              <button className={styles.arrowButton} aria-label="Next testimonial">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.partnerLogos}>
          <div className={styles.logoItem}>Amazon</div>
          <div className={styles.logoItem}>OYO</div>
          <div className={styles.logoItem}>Airbnb</div>
          <div className={styles.logoItem}>TripAdvisor</div>
          <div className={styles.logoItem}>Expedia</div>
          <div className={styles.logoItem}>FedEx</div>
        </div>
      </div>
     
    </section>
    
  );
}