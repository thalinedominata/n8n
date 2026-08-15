# Contributing

## Workflow

1. Branch from the latest default branch: `<area>/<short-description>`
   (e.g. `feat/hardware-deep-dive`, `fix/navbar-blur`).
2. Develop with `npm run dev` inside `go-bot/`.
3. Before pushing, all four gates must pass:
   ```bash
   npm run typecheck && npm run lint && npm run test && npm run build
   ```
4. Open a PR with a [conventional title](https://www.conventionalcommits.org):
   `feat: …`, `fix: …`, `docs: …`, `refactor: …`, `chore: …`.

## Review checklist

- [ ] No duplicated logic — reusable pieces promoted to `ui/`, `hooks/`, or `lib/`
- [ ] No hardcoded colors, shadows, radii, durations — tokens only
- [ ] Copy lives in `src/data/`, typed by `src/types/`
- [ ] `'use client'` only where interactivity requires it
- [ ] JS-driven animation checks `usePrefersReducedMotion`
- [ ] Interactive elements are keyboard-accessible with visible focus
- [ ] New patterns documented (design system table, or relevant doc)

## What gets rejected

- Architecture shortcuts "to ship faster" — see the one rule in the README
- A second implementation of something that already exists
- Changes to Go-Bot's proportions or behavior timing without a brand decision
  (his constants file is a character bible, not a config)

## Adding content

Life domains, industries, roadmap phases, and hardware modules are data
edits: update the matching file in `src/data/` — the UI, tests, and anchors
follow automatically. Keep `id`s kebab-case and stable.
