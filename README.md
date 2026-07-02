# Digital Villa

A premium marketing site for **Digital Villa** — a full-stack software studio
building serverless web & mobile products. Rebuilt as a modern, accessible,
high-performance single-page application.

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 19 + TypeScript (strict)          |
| Build tool     | Vite 7                                  |
| Styling        | TailwindCSS v4 (CSS-first, no SCSS)     |
| Routing        | React Router v7                         |
| Animation      | Framer Motion 12                        |
| Icons          | lucide-react                            |
| Package manager| pnpm                                    |
| Linting        | ESLint 9 (flat config) + Prettier       |

## Getting started

```bash
pnpm install
pnpm dev        # start the dev server
pnpm build      # typecheck + production build
pnpm preview    # preview the production build
pnpm lint       # lint the codebase
```

## Architecture

```
src/
├── app/providers/   # ThemeProvider (dark/light, no-flash)
├── components/
│   ├── ui/          # generic primitives (buttons, cards, text reveals…)
│   ├── layout/      # navbar, footer, root layout, page transitions
│   ├── home/        # home-page sections
│   ├── work/        # portfolio cards
│   ├── process/     # process timeline
│   ├── shared/      # cross-page sections (hero, CTA, marquee)
│   └── seo/         # document-head SEO controller
├── data/            # company content (site, services, projects, process…)
├── hooks/           # reusable hooks (theme, magnetic, scroll-spy…)
├── lib/             # utilities + motion variants/easing
├── pages/           # route-level pages (code-split)
├── styles/          # global stylesheet + design tokens
└── types/           # shared TypeScript types
```

## Features

- 🌗 Dark / light mode with no flash-of-incorrect-theme
- ♿ Accessible: skip links, focus states, reduced-motion support, semantic HTML
- 🚀 Code-split routes, lazy images, GPU-friendly animations
- 🔍 Per-route SEO (title, description, canonical, Open Graph, Twitter, JSON-LD)
- 🎨 Token-driven design system in OKLCH

> The previous React 16 / CRA / SCSS implementation is preserved under
> `.legacy/` for reference.
