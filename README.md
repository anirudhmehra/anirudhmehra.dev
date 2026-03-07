# anirudhmehra.dev

Personal website and blog built with [Astro](https://astro.build/) using the [AstroPaper](https://github.com/satnaing/astro-paper) template as the starting point.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy to Cloudflare Workers

This site is configured for Cloudflare Workers static assets only deployment.

```bash
pnpm cf:deploy
```

Wrangler reads `wrangler.jsonc` and uploads the built `dist/` directory as static assets.

## Notes

- Content lives in `src/data/blog`
- Site configuration lives in `src/config.ts`
- The project started from AstroPaper and has been customized for personal publishing
