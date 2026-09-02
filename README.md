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
