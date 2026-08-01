# Deployment (Vercel)

The platform deploys to Vercel as a standard Next.js app. Everything is
statically prerendered — no server runtime, no environment variables
required for V1.

## One-time setup

1. In Vercel, **Add New Project** and import the GitHub repository.
2. Set **Root Directory** to `go-bot/` (the platform is a self-contained
   workspace inside the repo; this setting is the only special step).
3. Framework preset: **Next.js** (auto-detected). Build command and output
   directory stay at their defaults (`next build` / `.next`).
4. Node.js version: **20.x** (matches `engines` in package.json).
5. Deploy. Every push to the production branch redeploys; every other
   branch gets a preview URL automatically.

`vercel.json` in this directory adds security headers and immutable
caching for `/assets` — it is picked up automatically.

## After transfer to a dedicated repository

When the `go-bot/` contents move to their own repo, delete the Root
Directory override (set it back to the repo root). Nothing else changes.

## Checklist before going live

- [ ] `npm run typecheck && npm run test && npm run build` green locally
- [ ] Custom domain attached and `siteConfig.url` updated to match
- [ ] Open Graph image added (`public/assets/images/og.png` + metadata)
- [ ] Analytics decision made (Vercel Analytics is a one-line opt-in)
