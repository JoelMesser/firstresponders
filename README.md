# First Response Property Solutions — Website

Production marketing site for a 24/7 emergency property restoration company serving
Central Maryland. Built to **drive phone calls and form leads**.

- **Stack:** [Astro](https://astro.build) (static/SSG) + [Tailwind CSS](https://tailwindcss.com)
- **Host:** [Cloudflare Pages](https://pages.cloudflare.com) + one Pages Function for the lead form
- **Lead pipeline:** form → Cloudflare Turnstile (spam) → [Resend](https://resend.com) email

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output -> dist/
pnpm preview      # preview the built site
```

### Local lead-form testing (with the Function)

The form posts to a Cloudflare Pages Function (`functions/api/lead.ts`). To run it
locally you need Wrangler and env vars:

```bash
cp .dev.vars.example .dev.vars   # then fill in real keys
pnpm build
npx wrangler pages dev dist      # serves static + functions together
```

## Deploy (Cloudflare Pages)

- **Build command:** `pnpm build`
- **Build output directory:** `dist`
- Cloudflare auto-detects the `functions/` directory — no extra config needed.
- Set these **environment variables** in *Pages → Settings → Environment variables*:

| Variable                    | Type   | Purpose                                   |
| --------------------------- | ------ | ----------------------------------------- |
| `PUBLIC_TURNSTILE_SITE_KEY` | Public | Turnstile widget site key (build-time)    |
| `TURNSTILE_SECRET_KEY`      | Secret | Turnstile server verification             |
| `RESEND_API_KEY`            | Secret | Resend API key                            |
| `LEAD_TO_EMAIL`             | Secret | Where leads are delivered                 |
| `LEAD_FROM_EMAIL`           | Secret | Verified Resend sender (verified domain)  |

## Where to change things

| What                         | File                                  |
| ---------------------------- | ------------------------------------- |
| **Phone / NAP / nav**        | `src/config/site.ts` (single source)  |
| Services (copy + SEO pages)  | `src/data/services.ts`                |
| Counties (location pages)    | `src/data/counties.ts`                |
| Reviews                      | `src/data/reviews.ts`                 |
| FAQ                          | `src/data/faq.ts`                     |
| Blog posts                   | `src/content/blog/*.md`               |
| Brand colors / fonts         | `tailwind.config.mjs`, `src/styles/tokens.css` |
| Lead email logic             | `functions/api/lead.ts`               |

## Before launch — client TODOs (search the codebase for `TODO(client)`)

1. **Phone number** — `555-555-5555` is a placeholder (and not dialable). Replace with
   the real local **410 / 443 / 240 / 301** number in `src/config/site.ts` (one place).
2. **Production domain** — update `site` in `astro.config.mjs`, the `Sitemap:` line in
   `public/robots.txt`, and `site.url` in `src/config/site.ts`.
3. **Resend** — create an API key and verify a sending domain; set the env vars above.
4. **Turnstile** — create a Turnstile widget; set site + secret keys (defaults are
   Cloudflare's "always passes" TEST keys).
5. **Real content** — replace all placeholder copy, the founder/veteran story (`/about`),
   reviews (don't publish fabricated ones), license numbers & certifications (e.g. IICRC).
6. **Assets** — real logo (`public/logo.svg`), hero photo (slot in `src/components/Hero.astro`),
   OG image (`public/og/default.svg` → a 1200×630 PNG/JPG), favicons.
7. **Legal** — finalize `/privacy` and `/accessibility`.

## SEO included

- Per-page title/description/canonical + Open Graph/Twitter (`src/components/Seo.astro`)
- JSON-LD: `LocalBusiness` (sitewide), `Service`, `FAQPage`, `Article`, `BreadcrumbList`
- `sitemap-index.xml` (auto) + `robots.txt`; semantic headings; self-hosted fonts; no CLS hero
