'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { Sek2ScrollFill } from '@/components/sections/Sek2ScrollFill';
import { Sek3Bautraegerschaft } from '@/components/sections/Sek3Bautraegerschaft';
import { SekVorherNachher } from '@/components/sections/SekVorherNachher';
import { Sek4Zahlen } from '@/components/sections/Sek4Zahlen';
import { Sek5ZweiWelten } from '@/components/sections/Sek5ZweiWelten';
import { Sek6Leistungen } from '@/components/sections/Sek6Leistungen';
import { Sek7TorReveal } from '@/components/sections/Sek7TorReveal';
import { Sek8Prozess } from '@/components/sections/Sek8Prozess';
import { Sek9Team } from '@/components/sections/Sek9Team';
import { Sek10Projekte } from '@/components/sections/Sek10Projekte';
import { Sek11CTA } from '@/components/sections/Sek11CTA';

export default function Home() {
  return (
    <main>
      {/* Hero — Dark, Video, Value Prop */}
      <HeroSection />

      {/* Scroll-Fill — Links-bündig, zwei Zeilen, weißer Text füllt sich */}
      <Sek2ScrollFill />

      {/* Das Problem — Weiss, Text + schwarze Stat-Cards */}
      <Sek3Bautraegerschaft />

      {/* NEU: Vorher/Nachher — Schwarz, Split mit Slider */}
      <SekVorherNachher />

      {/* Zahlen — Dark, 4er Grid */}
      <Sek4Zahlen />

      {/* Horizontal Scroll — 3 Geschäftsfelder */}
      <Sek5ZweiWelten />

      {/* Leistungen — Weiss, 6 schwarze Cards */}
      <Sek6Leistungen />

      {/* Tor-Reveal — LUXO|DAN Gate */}
      <Sek7TorReveal />

      {/* Prozess — Weiss, 5 schwarze Cards */}
      <Sek8Prozess />

      {/* Team — Weiss, 3 Portrait Cards */}
      <Sek9Team />

      {/* Projekte — Schwarz, Grid */}
      <Sek10Projekte />

      {/* CTA — Schwarz, Final */}
      <Sek11CTA />
    </main>
  );
}
