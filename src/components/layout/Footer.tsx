'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>LUXODAN</Link>
            <p className={styles.desc}>Generalunternehmer für schlüsselfertigen Hochbau und Metallbau. Seit über 40 Jahren.</p>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>Leistungen</span>
            <Link href="/bautraegerschaft">Bauträgerschaft</Link>
            <Link href="/metallbau">Metallbau</Link>
            <Link href="/leistungen">Alle Leistungen</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>Unternehmen</span>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/projekte">Projekte</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.colTitle}>Kontakt</span>
            <span>info@luxodan.de</span>
            <span>Goethe-Allee 2</span>
            <span>37073 Göttingen</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} LUXODAN GmbH</span>
          <div className={styles.legal}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
