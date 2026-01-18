'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/DealsBanner.module.css';

export default function DealsBanner() {
  return (
    <section id="ticket" className={styles.deals}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.ticketImage}>
              <img  className={styles.ticket} src="./ticket.png" alt="" />
            </div>

            <div className={styles.centerContent}>
              <button className={styles.fireButton}>
                Get Tickets
                <span className={styles.fireIcon}>🛫</span>
              </button>
              <h2 className={styles.bannerTitle}>Find the best deals</h2>
              <p className={styles.bannerPara}>Sponsored By <i>Hawks</i></p>
            </div>

            

            <div className={styles.operationalBy}>
            <div className= {styles.hawksCenter}>
              <img className ={styles.hawks} src="./bag.png" alt="" />
              
            </div>
              {/* <h4 className={styles.operationalTitle}>Sponsored by -</h4> */}
              <div className={styles.partnerLogos}>
                {/* <div className={styles.partnerLogo}>
                  
                  <Image
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=60&fit=crop"
                    alt="Partner"
                    width={100}
                    height={60}
                  />
                </div> */}
                {/* <div className={styles.partnerLogo}>
                  <Image
                    src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=100&h=60&fit=crop"
                    alt="Partner"
                    width={100}
                    height={60}
                  />
                </div> */}
              </div>
            </div>
          </div>

          <div className={styles.hawksText}><img src="./map.png" alt="" /></div>
          <div className={styles.planeIcon}>✈️</div>
        </div>
      </div>
    </section>
  );
}