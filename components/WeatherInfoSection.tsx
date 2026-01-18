'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/WeatherInfoSection.module.css';

export default function WeatherInfoSection() {
  return (
    <section className={styles.weatherInfo}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.leftSection}>
            
            <div className={styles.weatherCard}>
              
              <div className={styles.weatherHeader}>
                <div>
                  <h2 className={styles.temperature}>-12°C</h2>
                </div>
                <div className={styles.weatherStats}>
                  <div className={styles.statItem}>
                    <span className={styles.icon}>🌬️</span>
                    <span>Wind 13 km</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.icon}>❄️</span>
                    <span>Snow 80 cm</span>
                  </div>
                </div>
              </div>

              <div className={styles.destinationsGrid}>
                <div className={styles.destinationCard}>
                  <div className={styles.destinationImage}>
                    <Image
                      src="https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=1074&auto=format&fit=crop"
                      alt="Morocco sand dunes"
                      width={400}
                      height={250}
                    />
                  </div>
                  <h3 className={styles.destinationName}>Morocco</h3>
                  <p className={styles.flightRoute}>YVR → LAX → DXB</p>
                </div>

                <div className={styles.destinationCard}>
                  <div className={styles.destinationImage}>
                    <Image
                      src="https://images.unsplash.com/photo-1611469547048-9475ad4f6505?q=80&w=1935&auto=format&fit=crop"
                      alt="Denver road"
                      width={400}
                      height={250}
                    />
                  </div>
                  <h3 className={styles.destinationName}>Denver</h3>
                  <p className={styles.flightRoute}>YVR → LAX →</p>
                </div>
              </div>

              <div className={styles.bottomWeatherBar}>
                <div className={styles.weatherBarItem}>
                  <div className={styles.weatherBarIcon}>🌡️</div>
                  <div className={styles.weatherBarContent}>
                    <span className={styles.weatherBarValue}>-12 C</span>
                    <span className={styles.weatherBarLabel}>Temp</span>
                  </div>
                </div>
                <div className={styles.weatherBarItem}>
                  <div className={styles.weatherBarIcon}>💨</div>
                  <div className={styles.weatherBarContent}>
                    <span className={styles.weatherBarValue}>13 km</span>
                    <span className={styles.weatherBarLabel}>Wind</span>
                  </div>
                </div>
                <div className={styles.weatherBarItem}>
                  <div className={styles.weatherBarIcon}>❄️</div>
                  <div className={styles.weatherBarContent}>
                    <span className={styles.weatherBarValue}>80 cm</span>
                    <span className={styles.weatherBarLabel}>Snow</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className={styles.appCard}>
            <h4 className={styles.overline}>GET CONNECTED</h4>
            <h2 className={styles.appTitle}>
              It is better to travel well than to arrive 🧭
            </h2>
            <p className={styles.appDescription}>
              Your ultimate travel companion. Carries all the information you need while travelling.
            </p>

            <div className={styles.appButtons}>
              <div className={styles.googlePlay}>
                <img src="./play.jpg" alt="Google Play"/>
              </div>
              <img className = {styles.appStore} src="./app.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

