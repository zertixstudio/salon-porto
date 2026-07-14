# G Beauty Concept — Website

Premium nail & beauty atelier site for **G Beauty Concept** (Porto, Portugal), built with:

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — custom cream / charcoal / muted-gold palette
- **Lenis** — base smooth scrolling, synced to GSAP's ticker
- **GSAP + ScrollTrigger** — sticky "stacking" hero sequence, scroll reveals, parallax gallery
- **Syne** (display) + **Inter** (body) via `next/font/google`
- Built-in **EN / ES / PT** language switcher (see `lib/translations.ts`)

## 1. Install

```bash
npm install
```

## 2. Add your real media

The layout expects these files (placeholders folders are already created):

| Path | Used for |
|---|---|
| `public/videos/hero-treatment.mp4` | Full-width hero video |
| `public/images/hero-poster.jpg` | Video poster / first frame |
| `public/images/hero-detail.jpg` | Large overlapping hero photo |
| `public/images/hero-detail-2.jpg` | Small overlapping hero photo |
| `public/images/chapter-1.jpg` | "Our Philosophy" panel image |
| `public/images/chapter-2.jpg` | "The Craft" panel image |
| `public/images/gallery-1.jpg` … `gallery-4.jpg` | Gallery grid (parallax) |

Use real, high-resolution photos/video of the salon and treatments — this is what will make the site feel human rather than generic. Keep the hero video under ~15MB and compressed (H.264 mp4) for fast loading.

## 3. Set your real Fresha link

Open `lib/translations.ts` and update:

```ts
export const SITE = {
  ...
  freshaUrl: "https://www.fresha.com/YOUR-REAL-BOOKING-LINK",
};
```

Every "Book Now" button on the site (nav, hero, booking section) points to this single constant.

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 5. Build for production

```bash
npm run build
npm run start
```

Deploy easily to **Vercel** (recommended for Next.js), or any Node host.

## Notes on the design

- **Sticky stack**: Hero → "Our Philosophy" → "The Craft" pin in sequence and are gently scaled/dimmed as the next one covers them (`components/StackPanel.tsx`). Services/Gallery/Booking/Footer scroll normally underneath.
- **Services**: rows alternate sliding in from left/right on scroll (`components/Services.tsx`).
- **Gallery**: each image parallaxes at a different speed, and on mobile responds to device tilt (gyroscope) via `hooks/useGyroscope.ts`. iOS requires a tap to grant motion permission (handled automatically on first touch).
- **Language switcher**: EN/ES/PT, persisted to `localStorage`, in `lib/LanguageContext.tsx` + `lib/translations.ts`. Edit copy there.
- **Reduced motion**: all animations respect `prefers-reduced-motion`.
- Address, hours and phone are pulled from `SITE` in `lib/translations.ts` — update if anything changes.
