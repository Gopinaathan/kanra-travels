'use client';

import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="./logo.png" alt="logo" width={150} height={150} />
          </div>

          <div className={styles.searchContainer}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
            </svg>
            <input
              type="text"
              placeholder="Search destinations..."
              className={styles.searchInput}
            />
          </div>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <li><a href="#reviews" className={styles.activeLink} onClick={(e) => handleNavClick(e, 'reviews')}>Reviews</a></li>
            <li><a href="#destinations" onClick={(e) => handleNavClick(e, 'destinations')}>Destinations</a></li>
            <li><a href="#ticket" onClick={(e) => handleNavClick(e, 'ticket')}>Ticket</a></li>
            <li><a href="#blog" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
          </ul>

          <button className={styles.ctaButton}>Get the App</button>

          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}