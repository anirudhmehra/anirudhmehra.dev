# AGENTS.md

This repository is a personal Astro site deployed to Cloudflare Workers static assets.

## Stack

- Astro 5
- Tailwind CSS 4
- pnpm via Corepack
- Cloudflare Workers static assets via `wrangler.jsonc`

## Common Commands

- `corepack pnpm build` - run type checks, Astro build, and Pagefind indexing
- `corepack pnpm lint` - run ESLint
- `corepack pnpm format` - run Prettier
- `corepack pnpm run cf:deploy` - build and deploy to Cloudflare

## Project Notes

- Canonical host is `https://www.anirudhmehra.dev/`.
- Apex-to-www redirects should be handled in Cloudflare Redirect Rules, not with a custom Worker.
- Social links live in `src/constants.ts`.
- Site-wide metadata lives in `src/config.ts` and `src/layouts/Layout.astro`.
- Content pages and writing live under `src/pages/` and `src/data/blog/`.

## Editing Guidance

- Preserve the site's existing writing tone: concise, clear, and personal.
- Prefer small focused changes.
- Avoid introducing SSR or custom Worker code unless it is explicitly required.
