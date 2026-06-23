# Portfolio — Philipp Novak

Personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Fonts: Overpass (body text), Syne (headings) — self-hosted via `@font-face`
- No frameworks, no build tools

## Structure

```
portfolio/
├── index.html            # Main page
├── legal-notice.html     # Legal notice (EN/DE)
├── privacy-policy.html   # Privacy policy (DE)
├── style.css             # All styles
├── script.js             # Animations, burger menu, scroll behaviour
├── i18n.js               # EN/DE translations
├── form.js               # Contact form validation & submission
├── fonts/                # Self-hosted woff2 font files
└── assets/
    └── img/              # Icons, project screenshots, profile photo
```

## Features

- **Bilingual (EN / DE)** — language switch via `data-i18n` / `data-i18n-html` attributes
- **Scroll animations** — reveal on scroll using IntersectionObserver
- **Contact form** — client-side validation with user feedback
- **Responsive** — mobile-first layout with burger menu overlay
- **Self-hosted fonts** — no external Google Fonts requests, GDPR-friendly

## Projects

| # | Name | Stack |
|---|------|-------|
| 01 | El Pollo Loco | HTML, CSS, JavaScript |
| 02 | Join | HTML, CSS, JavaScript, Firebase |
| 03 | Poll App | Angular, TypeScript, CSS, Supabase |

## Contact

[phil_novak@web.de](mailto:phil_novak@web.de)
