# AI Agent Guide

How to extend this platform consistently — written for Claude Code, Codex,
Cursor, and every engineer. Read this before writing code.

## The three laws of this codebase

1. **Data drives everything.** Pages render databases in `src/data/`.
   To add content, edit data — never hardcode copy in a component.
2. **Dependencies point downward.** `app → sections → cards/ui/gobot →
   animations/hooks → types/lib`. A lower layer never imports a higher one.
3. **Tokens, not values.** Colors, shadows, radii, durations, easings come
   from `globals.css` / `src/animations/tokens.ts`. A hardcoded hex or
   millisecond value is a defect.

## Recipes

### Add a life domain
1. Add an entry to `src/data/life-domains.ts` (kebab-case `id`).
2. Optionally add rich content in `src/data/life-domain-details.ts` under
   the same id — the full page lights up automatically.
3. Run `npm run test` — id and cross-reference integrity are enforced.

### Add a capability
1. Add an entry to `src/data/capabilities.ts`: `uses`, `worksFor`,
   `domains` (valid life-domain ids), `industries` (valid industry ids),
   `confidence` (0–100), `hardware` generations, optional `safetyNotes`.
2. It is now searchable at `/capabilities`, in the ⌘K palette, and appears
   on every referenced domain/industry page. No UI work.

### Add an industry
1. Add an entry to `src/data/industries.ts` with `stats`, a `scenario`,
   and optionally a Go-Bot `role`.
2. `/industries/[id]` and the homepage card exist immediately.
3. Reference the industry id from relevant capabilities.

### Add a Go-Bot pose or role
1. Mood: add to `MOODS` in `src/components/gobot/go-bot.moods.ts` and
   express it in `go-bot.tsx`. Role: add a case to `go-bot-role-badge.tsx`.
2. Export a preset in `go-bot.presets.tsx`. Never fork the character.
3. Timing/personality constants are a brand decision — see
   `go-bot.constants.ts` header before touching them.

### Add a UI component
1. Check `src/components/ui` first — extend variants before creating files.
2. New primitive: cva variants, tokens only, keyboard accessible, exported
   from the barrel, documented in `docs/design-system/README.md`.
3. It must have a consumer. Speculative components are rejected.

### Add a page
1. Route in `src/app/`, server component by default.
2. Pass ids (strings) into client sections; client sections look data up
   themselves — never pass icon components across the boundary.
3. `generateStaticParams` for data-driven routes.

## Verification gates (all must pass before commit)

```bash
cd go-bot
npm run typecheck && npm run test && npm run build
```

## Things you must never do

- Duplicate logic that exists in `ui/`, `cards/`, `hooks/`, or `lib/`
- Use `any`, cast with `as` (outside tests), or hardcode design values
- Change Go-Bot's proportions, palette, or behavior timing casually
- Add copy to components instead of `src/data/`
- Skip `usePrefersReducedMotion` in a JS-driven animation loop
