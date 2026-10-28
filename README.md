# Darkinvaderr Gaming

Website for a GTA V modded heists Discord community — built with [Next.js](https://nextjs.org).

Live: https://darkinvaderr.com

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

- `app/page.tsx` — landing page: hero, image carousel (`components/carousel.tsx`), "What We Do" / "Who We Are" sections (`components/info.tsx`), donations (`components/donations.tsx`), with the embedded Stripe payment flow itself in `components/checkout.tsx`
- `app/thehub/page.tsx` — client-only forensic-scanner style image tool
- `app/impressum/page.tsx`, `app/datenschutz/page.tsx` — legal pages, each with their own `title`/`description` and `openGraph`/`twitter` overrides so a shared link previews the actual page instead of the homepage's marketing copy
- `app/error/page.tsx` — client-only error page; since client components can't export `metadata`, its title and `robots: { index: false }` live in the sibling `app/error/layout.tsx` instead
- Page title/description metadata lives in `app/layout.tsx`, kept in sync across the top-level `metadata`, `openGraph`, and `twitter` fields
- `app/sitemap.ts`/`app/robots.ts` generate `sitemap.xml`/`robots.txt` at build time — the sitemap only lists the public pages (home, Impressum, Datenschutz), and `/thehub`/`/error` are excluded from crawling
- `app/manifest.ts` is served at `/manifest.webmanifest` (auto-linked in `<head>` by Next.js) and gives the site a PWA identity — name, theme/background color, and an icon list. `app/icon.tsx` and `app/apple-icon.tsx` generate the actual PNG marks it references (a 512x512 for Chrome's install-prompt and Android adaptive icons, a 180x180 for iOS "Add to Home Screen"), since `favicon.ico` alone doesn't satisfy either

## Accessibility

The homepage includes a "Skip to main content" link and labels every icon-only button (Discord/Twitch/Patreon/YouTube) with a descriptive `aria-label`. Images in `components/info.tsx` use `loading="lazy"` with explicit `width`/`height` to avoid layout shift. The carousel in `components/carousel.tsx` respects `prefers-reduced-motion` by disabling its scroll animation for users who request reduced motion. On `app/thehub/page.tsx`, the file input carries an `aria-label` (it had no accessible name otherwise) and the reveal toggle button exposes its state via `aria-pressed`.

`app/globals.css` also has a `forced-colors: active` block for Windows High Contrast Mode (and other forced-colors user agents), which swaps in a user-chosen system palette rather than just boosting contrast — it pins the focus ring and selection highlight to the `CanvasText`/`Highlight`/`HighlightText` system color keywords so both stay visible under forced colors.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

## License

Apache License 2.0 — see [LICENSE](LICENSE).
