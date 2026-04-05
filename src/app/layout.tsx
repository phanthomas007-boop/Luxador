import React from 'react';
import type { Metadata } from 'next';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/sections.css';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: 'LUXODAN — Generalunternehmer',
  description: 'Schlüsselfertiger Bau, eigener Metallbau und globale Beschaffung. Seit über 40 Jahren.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <SmoothScroll />
        <CustomCursor />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
