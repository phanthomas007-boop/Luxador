'use client';

import React from 'react';
import { Button } from '../ui/Button';
import styles from './Sek9Team.module.css';

const TEAM = [
  {
    name: 'Hans Schindler',
    role: 'Geschäftsführung Bau',
    bio: 'Über 40 Jahre operative Bauerfahrung. Hat mehr als 100 Projekte persönlich geleitet — von der Grundsteinlegung bis zur Abnahme.',
  },
  {
    name: 'Thomas Schindler',
    role: 'Geschäftsführung Entwicklung',
    bio: 'Nächste Generation. Verantwortet die strategische Projektentwicklung und die Expansion in neue Märkte.',
  },
  {
    name: 'Eduard Kutepow',
    role: 'Leitung Metallbau & Einkauf',
    bio: 'Steuert den eigenen Metallbau und die internationale Beschaffung. Verbindet technisches Know-how mit globaler Logistik.',
  },
];

export const Sek9Team = () => {
  return (
    <section className={styles.section}>
      <div className="sectionInner">
        <div className="sectionHeader">
          <span className="sectionLabel">Geschäftsführung</span>
          <h2 className="sectionHeading onWhite">Drei Personen.<br />Persönliche Haftung.</h2>
          <p className="sectionIntro onWhite">
            Kein Konzern, kein Vorstand, keine anonymen Strukturen. Bei LUXODAN
            stehen drei Geschäftsführer persönlich für jedes Projekt ein. Das bedeutet:
            Entscheidungen in Stunden, nicht in Wochen.
          </p>
        </div>

        <div className={styles.grid}>
          {TEAM.map((t, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden' }}>
              <div className={styles.portrait}>
                <span className={styles.initial}>{t.name[0]}</span>
              </div>
              <div className={styles.info}>
                <h3 className="cardTitle">{t.name}</h3>
                <span className={styles.role}>{t.role}</span>
                <p className="cardText">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <Button label="Mehr über das Unternehmen" href="/ueber-uns" center={true} />
      </div>
    </section>
  );
};
