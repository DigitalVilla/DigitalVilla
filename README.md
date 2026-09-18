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
├── hooks/           # reusable hooks (theme, reduced-motion…)
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
- 🗺️ `sitemap.xml` generated at build time from the route and project data
- 🔤 Self-hosted Inter + Geist (latin subset, variable weight, preloaded)
- 🎨 Token-driven design system in OKLCH

## Deployment (S3 + CloudFront)

```bash
pnpm deploy:site     # = pnpm build && scripts/deploy.sh
```

`scripts/deploy.sh` uploads `dist/` with cache headers that match how Vite
names files — hashed `assets/` and `fonts/` for a year, icons for a day, and
`index.html`, `sw.js`, `sitemap.xml`, `robots.txt` as `no-cache` — removes
objects left over from earlier builds, and invalidates CloudFront when a
distribution id is given. Put `S3_BUCKET` (plus optionally
`CLOUDFRONT_DISTRIBUTION_ID` and `AWS_PROFILE`) in `.env`; see `.env.example`.

Because this is a single-page app, unknown paths must serve `index.html`:

- **S3 website hosting:** set the error document to `index.html`.
- **CloudFront with an S3 origin:** add custom error responses mapping 403 and
  404 to `/index.html` with response code 200.

There is intentionally no service worker. `public/sw.js` only retires the
worker earlier builds installed, which is why it must stay `no-cache`. Tabs
left open across a deploy reload themselves once if their chunks are gone
(`src/lib/staleBuild.ts`), so `--delete` in the sync is safe.

### Contact form

The form posts to `VITE_CONTACT_ENDPOINT` when it is set at build time and
otherwise opens the visitor's mail client. `lambda/contact.ts` is a ready-made
AWS Lambda that relays messages through [Resend](https://resend.com):

```bash
pnpm build:lambda                               # → dist-lambda/index.mjs
zip -j dist-lambda/contact.zip dist-lambda/index.mjs

aws lambda create-function --function-name dv-contact --runtime nodejs20.x \
  --handler index.handler --zip-file fileb://dist-lambda/contact.zip \
  --role arn:aws:iam::<account>:role/<basic-lambda-execution-role> \
  --environment "Variables={RESEND_API_KEY=...,CONTACT_TO_EMAIL=...,CONTACT_FROM_EMAIL=...}"

aws lambda create-function-url-config --function-name dv-contact --auth-type NONE \
  --cors "AllowOrigins=https://www.digitalvilla.ca,AllowMethods=POST,AllowHeaders=content-type"
aws lambda add-permission --function-name dv-contact --statement-id public-url \
  --action lambda:InvokeFunctionUrl --principal "*" --function-url-auth-type NONE
```

Put the returned Function URL in `.env` as `VITE_CONTACT_ENDPOINT` and
redeploy the site. Later code changes ship with
`aws lambda update-function-code --function-name dv-contact --zip-file fileb://dist-lambda/contact.zip`.

> The previous React 16 / CRA / SCSS implementation is preserved under
> `.legacy/` for reference.
