# KOMPONENTEN – LUXODAN

## Wiederverwendbare Komponenten

```
HDuo              → Headline mit 2 Zeilen, 2 Fonts. Props: hard, soft, size(hero|section|card), align, dark
SectionWrapper    → Wrapper für jede Sektion. Props: bg(beton-dunkel|beton-hell|putz|stahl), padding
StickySection     → Wrapper für Wow-Sektionen. Props: scrollHeight(z.B. "300vh")
Button            → CTA-Button. Props: label, href, variant(outline|filled)
NavBar            → Fixed Navigation. Transparent → Blur bei Scroll.
Footer            → 4-Spalten Footer.
LangSwitcher      → DE · EN · RU Sprachwechsel
CountNumber       → Einzelne Zahl mit CountUp. Props: target, suffix, label
LeistungCard      → Kachel für Leistungs-Grid. Props: title, text, href
TeamPortrait      → Portrait mit Name + Rolle. Props: image, name, role
```

## Seiten-spezifische Komponenten

```
HeroSplitReveal   → Sektion 1: Stahltore + Video + LUXODAN Text
HorizontalScroll  → Sektion 4: 3 Räume seitlich scrollbar
ScrollFillText    → Sektion 5: Text der sich beim Scrollen füllt
TreppenTimeline   → Sektion 7: SVG-Treppe mit Path-Draw
InquiryForm       → Mehrstufiges Anfrage-Formular (4 Schritte)
```

## Ordnerstruktur

```
src/
├── app/
│   ├── [locale]/              ← Sprach-Routing (de, en, ru)
│   │   ├── page.tsx           ← Startseite
│   │   ├── bautraegerschaft/
│   │   │   └── page.tsx
│   │   ├── metallbau/
│   │   │   └── page.tsx
│   │   ├── leistungen/
│   │   │   └── page.tsx
│   │   ├── ueber-uns/
│   │   │   └── page.tsx
│   │   ├── projekte/
│   │   │   └── page.tsx
│   │   ├── kontakt/
│   │   │   └── page.tsx
│   │   └── layout.tsx         ← NavBar + Footer + Font-Loading
│   ├── api/
│   │   └── inquiries/
│   │       └── route.ts       ← Formular-Backend
│   └── layout.tsx             ← Root Layout
├── components/
│   ├── ui/                    ← Wiederverwendbar
│   │   ├── HDuo.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── StickySection.tsx
│   │   ├── Button.tsx
│   │   ├── CountNumber.tsx
│   │   ├── LeistungCard.tsx
│   │   └── TeamPortrait.tsx
│   ├── layout/                ← Layout
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   └── LangSwitcher.tsx
│   └── sections/              ← Seiten-spezifisch
│       ├── HeroSplitReveal.tsx
│       ├── HorizontalScroll.tsx
│       ├── ScrollFillText.tsx
│       ├── TreppenTimeline.tsx
│       └── InquiryForm.tsx
├── styles/
│   ├── globals.css            ← CSS Variables, Resets, Texturen
│   └── fonts.css              ← @font-face Deklarationen
├── lib/
│   ├── i18n.ts                ← next-intl Konfiguration
│   └── gsap.ts                ← GSAP + ScrollTrigger Setup
├── messages/                  ← Übersetzungen
│   ├── de.json
│   ├── en.json
│   └── ru.json
└── public/
    ├── textures/              ← Beton, Holz, Stahl, Putz
    ├── videos/                ← Hero-Zeitraffer, Hintergrund-Loops
    ├── images/                ← Portraits, Projekt-Bilder
    └── fonts/                 ← Lokale Font-Dateien (Performance)
```

## Regeln

- JEDE Sektion ist EINE Komponente
- Wiederverwendbare Komponenten haben KEINE hartcodierten Texte
- Alle Texte kommen aus messages/de.json, en.json, ru.json
- Styles: CSS Modules (.module.css) pro Komponente, KEINE Inline-Styles
- GSAP-Logik lebt IN der Komponente (useEffect + useRef), NICHT global
