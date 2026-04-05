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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>LUXODAN</Link>
      <div className={styles.links}>
        {NAV.map(n => (
          <Link key={n.href} href={n.href} className={styles.link}>{n.label}</Link>
        ))}
      </div>
    </nav>
  );
};
