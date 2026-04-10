# LUSTRE — Mobile Auto Detailing

A premium, production-ready auto detailing website built as a reusable
template. Every piece of business content lives in **`/config/site.ts`** —
swap that file and you have a new client site.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
and **Framer Motion**.

---

## Quick start

```bash
cd C:\auto-detailing
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

### Other commands

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint
```

---

## What's in the box

A complete homepage composed of these sections:

1. **Hero** — cinematic video background (with gradient fallback), headline, CTAs, and a live metric strip.
2. **Trust Marquee** — infinite-scrolling strip of trust signals.
3. **Services** — five editorial rows (not a card grid) with pricing, features, and hover states.
4. **Before / After** — draggable interactive reveal slider with staggered layout.
5. **Gallery** — bento-style varied masonry grid.
6. **Experience / Process** — two-column why-us + sticky vertical process timeline.
7. **Pricing** — three packages, featured tier elevated and glowing.
8. **Reviews** — horizontal snap-scroll of testimonial cards.
9. **Service Area** — radar background, city list, and contact card.
10. **Final CTA** — full-bleed closing call to action.

---

## File structure

```
C:\auto-detailing\
├─ app\
│  ├─ globals.css          # Tailwind layers, design tokens, component primitives
│  ├─ layout.tsx           # Root layout, font loading, metadata
│  └─ page.tsx             # Homepage — composes all sections
├─ components\
│  ├─ Header.tsx           # Sticky glass-blur nav
│  ├─ Hero.tsx             # Cinematic hero with metric strip
│  ├─ TrustMarquee.tsx     # Animated trust strip
│  ├─ Services.tsx         # Editorial service list
│  ├─ BeforeAfter.tsx      # Drag-to-reveal slider
│  ├─ Gallery.tsx          # Bento grid
│  ├─ Experience.tsx       # Why-us + process timeline
│  ├─ Pricing.tsx          # Three-tier pricing
│  ├─ Reviews.tsx          # Snap-scroll testimonials
│  ├─ ServiceArea.tsx      # Service area + contact card
│  ├─ FinalCTA.tsx         # Closing call to action
│  └─ Footer.tsx           # Giant brand lockup + links
├─ config\
│  └─ site.ts              # ★ Single source of truth for all content
├─ public\
│  ├─ brand\
│  │  └─ logo.svg          # Swap with client logo
│  └─ media\
│     ├─ hero\             # hero.mp4 + hero-poster.jpg
│     ├─ gallery\          # 01.jpg … 08.jpg
│     ├─ before-after\     # 01-before.jpg / 01-after.jpg …
│     └─ services\         # optional service imagery
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
├─ postcss.config.mjs
└─ next.config.mjs
```

---

## Where to swap client info

**Everything you need is in `/config/site.ts`.** That file controls:

| Section        | Field in `site.ts`            |
| -------------- | ----------------------------- |
| Logo           | `brand.logoSrc`               |
| Business name  | `brand.name`, `brand.fullName`|
| Tagline        | `brand.tagline`               |
| Phone / email  | `contact.*`                   |
| Booking link   | `contact.bookingUrl`          |
| City / region  | `serviceArea.*`               |
| Cities served  | `serviceArea.cities`          |
| Hero headline  | `hero.headline`, `hero.sub`   |
| Hero video     | `hero.videoSrc` + drop into `public/media/hero/` |
| Metrics        | `hero.metrics`                |
| Trust strip    | `trustStrip`                  |
| Services       | `services[]`                  |
| Packages/price | `packages[]`                  |
| Process steps  | `process[]`                   |
| Before/after   | `beforeAfter[]` + drop images in `public/media/before-after/` |
| Gallery        | `gallery[]` + drop images in `public/media/gallery/` |
| Reviews        | `reviews[]`                   |

### Adding real media

- **Hero video**: drop a looping MP4 at `public/media/hero/hero.mp4` and a poster at `public/media/hero/hero-poster.jpg`. If missing, the hero shows a cinematic graphite/ice gradient fallback.
- **Gallery images**: drop `01.jpg` … `08.jpg` into `public/media/gallery/`.
- **Before/after**: drop paired `01-before.jpg` / `01-after.jpg` (and 02, 03…) into `public/media/before-after/`.
- **Logo**: replace `public/brand/logo.svg`.

Every section gracefully falls back to glossy placeholder gradients until
you drop real assets in — you can develop and demo the site before
photos are ready.

---

## Design system

Defined in `tailwind.config.ts` and `app/globals.css`:

- **Palette**: deep graphite / ink (`#070809`), chrome whites, **electric ice** (`#5AE6FF`) accent
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (labels)
- **Primitives**: `.btn`, `.btn-primary`, `.btn-ghost`, `.card-glass`, `.eyebrow`, `.section-label`, `.display-xl/lg/md`, `.chrome-text`, `.ice-text`
- **Motion**: tasteful entrance reveals via Framer Motion, CSS marquee, hover raises

---

## Reusing this template for a new client

1. Copy the whole `C:\auto-detailing` folder to `C:\<client-name>`.
2. Open `config/site.ts` and replace every value.
3. Drop the client's media into `public/media/**` and `public/brand/logo.svg`.
4. Optionally: tweak the accent color in `tailwind.config.ts` (`ice.*`) to match their brand.
5. `npm install` → `npm run dev` → ship.

No structural code changes required.

---

## License

Template code — use it freely for client work.
