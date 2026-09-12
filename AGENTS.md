# AGENTS.md

Landing page de página única para "Isabelle Ebener Nutrição Comportamental", nutricionista
comportamental com atendimento online (Brasil e Europa).

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes with arbitrary brand-color values, no `tailwind.config`) |
| Icons | lucide-react |
| Deployment | Netlify |

## Directory structure

```
├── public
│   ├── favicon.ico                # generated from the square/badge logo
│   ├── apple-touch-icon.png
│   └── images/
│       ├── logo-horizontal.png    # header logo (symbol + "Isabelle Ebener" / "Nutricionista Comportamental")
│       ├── logo-badge.png         # square badge logo, used in the contact section
│       └── pattern.svg            # subtle repeating line-art vegetable pattern, brand accent only
├── src
│   ├── components
│   │   ├── site-header.tsx        # sticky header, mobile nav, and the waLink() wa.me helper
│   │   ├── faq-accordion.tsx      # accessible accordion (useState, aria-expanded)
│   │   └── veggie-icons.tsx       # hand-drawn-style SVG line icons (pumpkin, mushroom, tomato, pea, beet, carrot)
│   ├── routes
│   │   ├── __root.tsx             # HTML shell, page title, meta/OG tags
│   │   └── index.tsx              # the entire one-page site, section by section
│   ├── router.tsx
│   └── styles.css                 # Google Fonts import (Libre Baskerville + Lora), CSS color tokens, focus-visible rules
```

## Conventions and non-obvious decisions

- **Brand name**: every visible instance of the brand name must read "Isabelle Ebener
  Nutrição Comportamental" (or the split "Isabelle Ebener" / "Nutricionista
  Comportamental" as it appears on the logo). Never reintroduce an older/different
  brand name anywhere (title, header, footer, meta tags, copy).
- **Color usage**: `#eae8da` (off-white) is the dominant background almost everywhere.
  `#4c311c` (brown) is for text, headings, borders and the logo — never a full-bleed
  section background. The remaining palette colors (`#ecda5a`, `#b2c442`, `#e48e37`,
  `#913c1f`, `#351935`) are only used as small accents (icon backgrounds/strokes on the
  pillar and service cards). `#e2decb` is used as the one slightly-darker off-white tone
  for alternating section contrast. Don't add saturated full-section backgrounds — this
  was explicitly corrected from an earlier "rainbow" version of the site.
- **No stock photography**: there are no real photos of Isabelle or of food available in
  this repo. The "about" portrait and the service card headers use brand-colored
  placeholders (monogram / line-art icon over a soft tint) instead of hotlinked stock
  images, so nothing depends on an external image URL that could break. If real photos
  become available, drop them into `public/images/` and swap the placeholder `div`s in
  `src/routes/index.tsx` for `img` tags.
- **WhatsApp CTAs**: every CTA that should open WhatsApp uses `waLink(message)` from
  `src/components/site-header.tsx`, which builds a `https://wa.me/<number>?text=...`
  link with a context-specific prefilled message (e.g. mentioning which program the
  visitor is asking about).
- **Instagram/Substack**: true API-based embeds of live posts were intentionally not
  built (no verified oEmbed/API access in this environment). The "Conteúdo vivo" section
  instead links out to the real profile/newsletter URLs the user provided.
- **Fonts**: Libre Baskerville for headings/emphasis (`.font-display`, or the `h1`–`h4`
  selectors in `styles.css`), Lora for body text (the `body` default). Both are loaded
  via a Google Fonts `@import` in `src/styles.css`.
- **Tailwind v4**: there is no `tailwind.config.*` file — Tailwind is configured entirely
  via the `@import "tailwindcss"` directive in `src/styles.css`. Brand colors are applied
  with arbitrary-value utilities (e.g. `bg-[#eae8da]`) rather than theme tokens, since the
  palette is small and section-specific.

## Running locally

```bash
npm install
npm run dev
```
