import React from 'react';
import styles from './HDuo.module.css';

interface HDuoProps {
  hard: React.ReactNode;
  soft?: React.ReactNode;
  size?: 'hero' | 'section' | 'card';
  dark?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
  copper?: boolean;
}

export const HDuo: React.FC<HDuoProps> = ({
  hard,
  soft,
  size = 'section',
  dark = true,
  align = 'left',
  className = '',
  copper = false,
}) => {
  return (
    <div
      className={`${styles.hduo} ${styles[size]} ${dark ? styles.dark : styles.light} ${styles[align]} ${copper ? styles.copper : ''} ${className}`}
    >
      <h1 className={styles.hard}>{hard}</h1>
      {soft && <h2 className={styles.soft}>{soft}</h2>}
    </div>
  );
};
