# Marketing site

A statically rendered marketing site for **Slipstream** (a placeholder SaaS
product). Next.js 14 App Router, TypeScript, Tailwind, and `lucide-react`.
No backend, no CMS, no runtime fetching — every word and number lives in one
data module.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static prerender
npm run typecheck
```

## Deploying to Vercel

The repo is deploy-ready with **no configuration**. Vercel detects Next.js and
sets the build command, output directory, and Node version itself.

**Import the repo** at [vercel.com/new](https://vercel.com/new) → pick
`sameersheikh3999/marketing_website` → **Deploy**. Leave every field on its
default; do not set a Root Directory, since the Next.js app is at the repo root.

Or from this directory:

```bash
npx vercel          # first run links the project and deploys a preview
npx vercel --prod   # promote to production
```

Every push to `main` then redeploys production, and every other branch or PR
gets its own preview URL.

### Environment variables

None are required. `getSiteUrl()` in [`src/lib/site-url.ts`](src/lib/site-url.ts)
reads Vercel's built-in `VERCEL_PROJECT_PRODUCTION_URL`, so OG tags,
`robots.txt`, and `sitemap.xml` point at the right origin on the first deploy —
and preview deploys advertise themselves rather than production.

Once a **custom domain** is attached, set this in Vercel → Settings →
Environment Variables (Production only):

```
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

It takes precedence over the Vercel-provided URL. Redeploy for it to take
effect — it is read at build time.

### What is checked at build

`next build` runs `tsc`, so a type error fails the deploy rather than shipping.
All four routes prerender as static (`/`, `/_not-found`, `/robots.txt`,
`/sitemap.xml`), which means Vercel serves them from the CDN with no function
invocations.

Security headers (`X-Content-Type-Options`, `Referrer-Policy`,
`X-Frame-Options`, `Permissions-Policy`) are set in
[`next.config.mjs`](next.config.mjs) rather than `vercel.json`, so they apply to
`next start` and any other host too. There is deliberately no CSP — see the
comment in that file.

## Where the content lives

Everything is in **[`src/data/site.ts`](src/data/site.ts)** — brand, nav, hero,
logos, features, steps, testimonials, pricing tiers, FAQ, CTA, footer. Change
copy or prices there and every section updates; no component edits needed.

Icons are referenced from that file by *name* (`icon: "ShieldCheck"`) and
resolved in [`src/lib/icons.ts`](src/lib/icons.ts). That keeps `site.ts` free of
React imports, and keeps lucide imports explicit and named so the bundler
tree-shakes the rest of the set.

To add an icon: import it in `src/lib/icons.ts`, add it to the `icons` object,
then use the name in `site.ts`. `IconName` is derived from that object, so a
typo is a type error rather than a blank space on the page.

## Design system

Generated from this repo's own toolkit:

```bash
python .claude/skills/ui-ux-pro-max/scripts/search.py \
  "SaaS product marketing landing page modern" \
  --design-system --variance 5 --motion 5 --density 3 -p "Marketing Site"
```

| | |
|---|---|
| Pattern | Hero + Features + CTA, social proof before the CTA |
| Style | Glassmorphism, light mode |
| Type | Plus Jakarta Sans, self-hosted via `next/font` |
| Dials | variance 5 / motion 5 / density 3 (spacious, 24–96px scale) |

Tokens live in [`tailwind.config.ts`](tailwind.config.ts) and are mirrored as
CSS custom properties in [`src/app/globals.css`](src/app/globals.css).

### Colour contrast

Verified against WCAG AA, and worth keeping in mind before recolouring anything:

| Pair | Ratio | |
|---|---|---|
| white on `primary` `#2563EB` | 5.12:1 | pass |
| white on `accent.ink` `#C2410C` | 5.22:1 | pass |
| white on `accent` `#EA580C` | 3.56:1 | **fail — no text on this** |
| `muted.fg` `#475569` on `#F8FAFC` | 7.5:1 | pass |

`accent` (`#EA580C`) is a **graphics-only** colour — underline swashes, icon
glyphs, dots. Anything with text on it uses `accent.ink`.

## Accessibility and motion notes

- Skip link, one `<h1>`, sequential headings, every section labelled.
- Focus rings restyled, never removed. All hit targets ≥ 44px.
- Mobile menu is `aria-expanded` + `aria-controls`, closes on Escape and
  returns focus to the toggle.
- Billing toggle is a real `radiogroup`, not a mystery switch.
- FAQ uses native `<details>` — keyboard, screen reader state, and browser
  find-in-page all work without JS.
- Testimonials are a static grid, deliberately not a carousel: nothing
  auto-rotates, so there is nothing to pause.
- Scroll reveal is IntersectionObserver + CSS. It is skipped under
  `prefers-reduced-motion: reduce` and gated on `html[data-js]`, so blocked
  scripts leave content visible instead of invisible.
- Decorative artwork (the hero product mock, background glows) is
  `aria-hidden`; the numbers it shows are also stated in the copy.

## Replacing the placeholders

1. **Copy and brand** — `src/data/site.ts`.
2. **Colours and type** — `tailwind.config.ts` (re-check the contrast table).
3. **Customer logos** — `LogoStrip` in
   [`src/components/sections.tsx`](src/components/sections.tsx) renders text
   wordmarks. Swap each for `next/image` with explicit `width`/`height`; the row
   height is already reserved, so CLS stays at zero.
4. **Hero visual** — `src/components/hero.tsx` draws a CSS mock. Replace with a
   real screenshot via `next/image` and keep `aria-hidden` unless it carries
   information the copy does not.
5. **CTA destinations** — the `href` values in `site.ts` are `#` anchors.

## Not included

No analytics, cookie banner, contact form, or CMS. There is a single route
(`/`); the footer links to `#` placeholders rather than real About/Blog/Legal
pages.
