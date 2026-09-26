# First Response Property Solutions — Website

Production marketing site for a property services company (property management
support, inspections, handyman work, and interior/exterior maintenance) serving
Central Maryland. Built to **drive phone calls and form leads**.

- **Stack:** [Astro 5](https://astro.build) (static/SSG) + [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`)
- **Host:** [Cloudflare Pages](https://pages.cloudflare.com) + one Pages Function for the lead form
- **Lead pipeline:** form → Cloudflare Turnstile (spam) → [Resend](https://resend.com) email

> Stack and conventions mirror the sibling `copa/apps/marketing` site: Astro 5, Tailwind v4
> via `@theme` tokens in `src/styles/global.css` (no `tailwind.config`), Content Layer glob
> loader (`src/content.config.ts`), `astro.config.ts` with sitemap `serialize` +
> `trailingSlash: 'always'`, `@cloudflare/workers-types` + `functions/tsconfig.json`,
> `wrangler.toml`, `public/_headers` (CSP/HSTS/cache), `public/_redirects`, `public/llms.txt`.

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
| Brand colors / fonts         | `src/styles/global.css` (`@theme` tokens) |
| Lead email logic             | `functions/api/lead.ts`               |
| Security headers / caching   | `public/_headers`                     |
| Redirects                    | `public/_redirects`                   |
| AI-crawler summary (GEO)     | `public/llms.txt`                     |
| Cloudflare project config    | `wrangler.toml`                       |

## Before launch — client TODOs (search the codebase for `TODO(client)`)

1. **Phone number** — ✅ `317-919-2451` (matches the logo art) in `src/config/site.ts`.
2. **Production domain** — ✅ `frpsmd.com` set in `astro.config.ts`, `public/robots.txt`,
   and `src/config/site.ts`. Still needed: create the `help@` / `leads@` inboxes.
3. **Resend** — create an API key and verify `frpsmd.com` as a sending domain; set the
   env vars above.
4. **Turnstile** — create a Turnstile widget; set site + secret keys (defaults are
   Cloudflare's "always passes" TEST keys).
5. **Real content** — replace all placeholder copy, the founder/veteran story (`/about`),
   reviews (don't publish fabricated ones), and license numbers.
6. **Assets** — ✅ real logo integrated (`public/logo-mark.png` / `logo-full.png` →
   header/footer, favicons, `og-default.png`). ✅ Per-service stock photos installed
   (`public/images/services/` — sources in `public/images/IMAGE-CREDITS.md`); swap in
   real job-site photos when available.
7. **Legal** — finalize `/privacy` and `/accessibility`.

## SEO included

- Per-page title/description/canonical + Open Graph/Twitter (`src/components/Seo.astro`)
- JSON-LD: `LocalBusiness` (sitewide), `Service`, `FAQPage`, `Article`, `BreadcrumbList`
- `sitemap-index.xml` (auto) + `robots.txt`; semantic headings; self-hosted fonts; no CLS hero
