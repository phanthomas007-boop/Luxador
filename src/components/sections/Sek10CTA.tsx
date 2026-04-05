'use client';

import React from 'react';
import Link from 'next/link';
import { HDuo } from '../ui/HDuo';
import styles from './Sek10CTA.module.css';

export const Sek10CTA = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <HDuo 
          hard="Sprechen wir" 
          soft="über Ihr Projekt." 
          size="hero" 
          align="center" 
        />

        <Link href="/kontakt" className={styles.ctaButton}>
          ANFRAGE SENDEN
        </Link>
        
        <div className={styles.contactInfo}>
          <a href="mailto:info@luxodan.com">info@luxodan.com</a>
          <span className={styles.divider}>|</span>
          <a href="tel:+490000000000">+49 (0) XXX XXX XX XX</a>
        </div>
      </div>
    </section>
  );
};
