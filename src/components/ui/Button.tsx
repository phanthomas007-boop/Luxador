import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'outline' | 'filled';
  dark?: boolean;
  center?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = 'outline',
  dark = false,
  center = false,
  className = '',
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${dark ? styles.dark : ''} ${center ? styles.center : ''} ${className}`}
      data-cursor="dark"
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.arrow}>→</span>
    </Link>
  );
};
