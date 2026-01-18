'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="reviews" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.cloudIcon}>☁️</div>
            <h1 className={styles.heroTitle}>
              People don't take trips, trips take people
              <span className={styles.waveIcon}>🌊</span>
            </h1>
            <p className={styles.heroDescription}>
              To get the best of your adventure you just need to leave and go where you like. We are waiting for you.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>Plan a Trip {" > "}</button>
              <button className={styles.secondaryButton}>
                <span className={styles.playIcon}>▶</span>
                Watch Our Story
              </button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1654127654058-20748de1f7e5?q=80&w=1974&auto=format&fit=crop"
                alt="Traveler with backpack"
                width={300}
                height={500}
                className={styles.mainImage}
                priority
              />
              {/* <div className={styles.floatingBadge}>
                <span>Hello!</span>
              </div> */}
              <div className={styles.floatingSupportCard}>
                <div className={styles.badgeInner}>
                  <svg className={styles.chatIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                          fill="currentColor"/>
                  </svg>
                  <span className={styles.liveText}>LIVE</span>
                </div>
                <h3 className={styles.supportTitle}>24/7</h3>
              </div>
              <div className={styles.sunIcon}>☀️</div>
              <div className={styles.sparkleIcon}>✨</div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.avatarGroup}>
            <img src="https://i.pravatar.cc/150?img=1" alt="User" />
            <img src="https://i.pravatar.cc/150?img=2" alt="User" />
            <img src="https://i.pravatar.cc/150?img=3" alt="User" />
            <span className={styles.moreUsers}>+3k</span>
          </div>
          <h2 className={styles.statsTitle}>Traveled more than <span className={styles.statsNumber}>2000 places 🏖️</span> </h2>
          
        </div>
      </div>

      <div className={styles.infoBanner}>
        <div className="container">
          <div className={styles.infoBannerContent}>
            <div className={styles.infoBannerImage}>
              <Image
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=300&h=300&fit=crop"
                alt="Traveler"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.infoBannerText}>
              <h3>Your travel companion that carries all the information </h3>
              <img className={styles.BannerPic} src = "./plane.png" alt='plane' width={500} height={300}/>
            </div>
            <div className={styles.infoBannerImage}>
              <Image
                src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=400&h=500&fit=crop"
                alt="Beach"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.cloudDecor1}>☁️</div>
          <div className={styles.cloudDecor2}>🛫</div>
        </div>
      </div>
    </section>
  );
}