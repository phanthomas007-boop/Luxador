'use client';

import React from 'react';
import { HDuo } from '../ui/HDuo';
import styles from './Sek2Positionierung.module.css';

export const Sek2Positionierung = () => {
  return (
    <section className={styles.wrapper}>
      {/* The persistent copper line connecting from Hero */}
      <div className={styles.centerLine} />
      
      <div className={styles.container}>
        {/* Left Side: Brutalist Watermark */}
        <div className={styles.leftCol}>
          <span className={styles.watermark}>LUXO</span>
        </div>

        {/* Right Side: Content & Story */}
        <div className={styles.rightCol}>
          <HDuo 
            hard="Schlüsselfertiger Bau." 
            soft="International. Aus einer Hand." 
            size="section" 
            align="left"
            copper={true}
          />
          
          <p className={styles.storyText}>
            Wir verstehen Bau nicht als Delegation. Als Generalunternehmer übernehmen wir vom Fundament bis zur Schlüsselübergabe die volle technische und logistische Verantwortung. Keine Kompromisse.
          </p>
          
          <div className={styles.labels}>
            WOHNBAU <span className={styles.dot}>·</span> GEWERBEBAU <span className={styles.dot}>·</span> INDUSTRIEBAU
          </div>
        </div>
      </div>
    </section>
  );
};
