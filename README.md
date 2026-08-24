# Darkinvaderr Gaming

Website for a GTA V modded heists Discord community — built with [Next.js](https://nextjs.org).

Live: https://darkinvaderr.com

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

- `app/page.tsx` — landing page: hero, image carousel (`components/carousel.tsx`), "What We Do" / "Who We Are" sections (`components/info.tsx`), donations (`components/donations.tsx`)
- `app/thehub/page.tsx` — client-only forensic-scanner style image tool
- `app/impressum/page.tsx`, `app/datenschutz/page.tsx` — legal pages
- Page title/description metadata lives in `app/layout.tsx`, kept in sync across the top-level `metadata`, `openGraph`, and `twitter` fields

## Accessibility

The homepage includes a "Skip to main content" link and labels every icon-only button (Discord/Twitch/Patreon/YouTube) with a descriptive `aria-label`. Images in `components/info.tsx` use `loading="lazy"` with explicit `width`/`height` to avoid layout shift. The carousel in `components/carousel.tsx` respects `prefers-reduced-motion` by disabling its scroll animation for users who request reduced motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

## License

Apache License 2.0 — see [LICENSE](LICENSE).
