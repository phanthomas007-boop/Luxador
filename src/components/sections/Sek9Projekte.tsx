'use client';

import React from 'react';
import Link from 'next/link';
import { HDuo } from '../ui/HDuo';
import styles from './Sek9Projekte.module.css';

export const Sek9Projekte = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HDuo 
          hard="Projekte." 
          soft="Gebaute Realität." 
          size="section" 
          dark={false} 
          className={styles.headline} 
        />

        <div className={styles.textBlock}>
          <p className={styles.text}>
            Unsere ersten Projekte unter LUXODAN befinden sich in der Realisierung. 
            Die Erfahrung dahinter: über 100 fertiggestellte Projekte in 4 Ländern.
          </p>
        </div>

        {/* Empty grid space for future staggered projects */}
        <div className={styles.emptyProjectsGrid}></div>

        <Link href="/kontakt" className={styles.cta}>
          Ihr Projekt könnte das nächste sein →
        </Link>
      </div>
    </section>
  );
};
