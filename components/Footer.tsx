'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.topLeft}>
            <p className={styles.adventureText}>Leading the way in adventure</p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Dribbble">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.84-.188-.782-.377-1.59-.545-2.36a7.41 7.41 0 004.558-2.114zm-3.11 1.11c.224-.554.456-1.12.68-1.68a8.5 8.5 0 014.78 2.09c-.283-.054-3.101-.629-5.943-.84-.188-.782-.377-1.59-.545-2.36a7.41 7.41 0 00.648-1.21zm-2.543 3.376c.281.054 3.101.629 5.943.84.188.782.377 1.59.545 2.36a8.5 8.5 0 01-4.78-2.09c.283.054 3.101.629 5.943.84.188.782.377 1.59.545 2.36a7.41 7.41 0 00-7.253-3.25zm-5.487 3.376c.281.054 3.101.629 5.943.84.188.782.377 1.59.545 2.36a8.5 8.5 0 01-4.78-2.09c.283.054 3.101.629 5.943.84.188.782.377 1.59.545 2.36a7.41 7.41 0 00-7.253-3.25z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.topRight}>
            <h4 className={styles.newsletterTitle}>Join our Newsletter</h4>
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.submitButton} aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.middleSection}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <img src="./logo2.png" alt="logo" width={200} height={200} />
            </div>
            <div className={styles.mapImage}>
              <img src="./map.jpg" alt="Grand Springs Forest" />
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.linksList}>
              <li>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <a href="mailto:getemail@kanra.com">getemail@kanra.com</a>
              </li>
              <li>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                <a href="tel:+12705550117">(270) 555-0117</a>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li><a href="#career">Career</a></li>
              <li><a href="#developers">Developers</a></li>
              <li><a href="#story">Our Story</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Kanra</h4>
            <ul className={styles.linksList}>
              <li><a href="#why">Why Kanra</a></li>
              <li><a href="#customer">Customer</a></li>
              <li><a href="#press">Press Info</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <ul className={styles.linksList}>
              <li><a href="#career">Career</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2023 Rylic Studio | All Rights Reserved
          </p>
          <div className={styles.paymentMethods}>
            <span>stripe</span>
            <span>PayPal</span>
            <span>Woo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
