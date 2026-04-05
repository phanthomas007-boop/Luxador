'use client';

import React from 'react';
import Link from 'next/link';
import { HDuo } from '../ui/HDuo';
import styles from './Sek8Team.module.css';

const TEAM = [
  { name: 'Hans Schindler', role: 'Bau. 40 Jahre.' },
  { name: 'Thomas Schindler', role: 'Bau. Nächste Generation.' },
  { name: 'Eduard Kutepow', role: 'Metall. Einkauf. Technik.' }
];

export const Sek8Team = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <HDuo 
          hard="Das Team." 
          soft="Köpfe hinter LUXODAN." 
          size="section" 
          className={styles.headline} 
        />

        <div className={styles.grid}>
          {TEAM.map((member, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.texture} />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>

        <Link href="/ueber-uns" className={styles.cta}>
          Mehr über das Team →
        </Link>
      </div>
    </section>
  );
};
