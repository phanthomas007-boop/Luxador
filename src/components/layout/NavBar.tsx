'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NAV = [
  { label: 'Bauträgerschaft', href: '/bautraegerschaft' },
  { label: 'Metallbau', href: '/metallbau' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu when route changes (simplified by just toggling state)
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.navOpen : ''}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>LUXODAN</Link>
        <div className={styles.links}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className={styles.link}>{n.label}</Link>
          ))}
        </div>
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          data-cursor="dark"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className={styles.mobileLink} onClick={closeMenu}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
