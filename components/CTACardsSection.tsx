'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from '../styles/CTACardsSection.module.css';

export default function CTACardsSection() {
  return (
    <section id="blog" className={styles.ctaCards}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.exploreCard}>
            <div className={styles.plusPattern}>
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className={styles.plus}>+</span>
              ))}
            </div>
            
            <div className={styles.imageContainer}>
              <Image
                src="https://images.pexels.com/photos/16611955/pexels-photo-16611955.jpeg"
                alt="Explore the world"
                width={280}
                height={380}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.exploreContent}>
              <h3 className={styles.exploreTitle}>Explore the world with us 🌎</h3>
              <button className={styles.exploreButton}>
                Plan a Trip
                <ArrowUpRight className={styles.buttonIcon} />
              </button>
            </div>
          </div>

          <div className={`${styles.card} ${styles.blogCard}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Read our blog</h3>
              <ArrowUpRight className={styles.headerIcon} />
            </div>
            <p className={styles.cardText}>
              We have share our journey and some story
            </p>
          </div>

          <div className={`${styles.card} ${styles.workflowCard}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>See our workflow</h3>
              <ArrowUpRight className={styles.headerIcon} />
            </div>
            <p className={styles.cardText}>
              It's a must to that we would like to share our workflow to believe you
            </p>
          </div>

          <div className={`${styles.card} ${styles.expertCard}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Chat With Expert</h3>
              <ArrowUpRight className={styles.headerIcon} />
            </div>
            <div className={styles.liveBadge}>
              <div className={styles.badgeInner}>
                <svg className={styles.chatIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                        fill="currentColor"/>
                </svg>
                <span className={styles.liveText}>LIVE</span>
              </div>
            </div>
            <div className={styles.expertInfo}>
              <h4 className={styles.statsNumber}>3,000+</h4>
              <p className={styles.cardText}>
                our Expert team members around the world who create incredible and amazing projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}