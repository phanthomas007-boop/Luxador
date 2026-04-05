# VERBOTEN – LUXODAN

Dieser Datei hat höchste Priorität. Verstöße = Projekt zerstört.

## Design
- ❌ Bootstrap, Tailwind UI Templates, Material UI, Chakra UI, Shadcn
- ❌ Inter, Roboto, Arial, System-Fonts als Schrift
- ❌ Lila/blaue Farbverläufe
- ❌ Box-Shadow auf Karten als Design-Grundlage
- ❌ Abgerundete Ecken > 4px
- ❌ Stock-Icons (Heroicons, FontAwesome, Lucide) als Hauptelemente
- ❌ Generische Karussells/Slider (Swiper, Slick)
- ❌ Weißer Hintergrund (#FFFFFF). Immer Textur oder Fallback-Farbe.
- ❌ Hamburger-Menü auf Desktop

## Animationen
- ❌ AOS Library (Animate On Scroll)
- ❌ animate.css
- ❌ Einfache opacity fade-in als Hauptanimation
- ❌ bounce/elastic Easing
- ❌ Animationen > 1.5s (Ausnahme: CountUp = 2s)
- ❌ Scroll-Animationen OHNE GSAP ScrollTrigger
- ❌ Transitions auf width/height/top/left (NUR transform + opacity)

## Inhalt
- ❌ Lorem ipsum. Jeder Text steht in ARCHITECTURE.md.
- ❌ "Willkommen bei LUXODAN" oder ähnliche Begrüßungen
- ❌ "Ihr Partner für..."
- ❌ "Qualität die überzeugt"
- ❌ "Maßgeschneiderte Lösungen"
- ❌ "Kompetenz aus einer Hand"
- ❌ "Wir bieten Ihnen..."
- ❌ "Gemeinsam zum Erfolg"
- ❌ "Leidenschaft für..."
- ❌ Erfundene Testimonials/Bewertungen
- ❌ Aufzählungen mit Häkchen-Icons

## Technik
- ❌ Create React App (NUR Next.js 14+ App Router)
- ❌ Inline-Styles
- ❌ Client-Side-Only Routing (SSR ist Pflicht für SEO)
- ❌ localStorage für Spracheinstellung (URL-basiert: /de, /en, /ru)
