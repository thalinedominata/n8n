# Coding Standards

## TypeScript

- **Strict mode always.** `strict: true` and `noUncheckedIndexedAccess: true` are non-negotiable.
- **Never `any`.** Use precise types or `unknown` with narrowing.
- **No `as` casting** outside tests. Use type guards and discriminated unions.
- **Interfaces for models, types for unions.** Shared contracts live in `src/types/`.
- **`const` objects + `as const`** over enums.

## React

- **Server components by default.** Add `'use client'` only when the file uses
  state, effects, motion, or browser APIs.
- **One component per file.** Small private subcomponents may live beside their
  parent only if used nowhere else.
- **Props interfaces are exported** and named `<Component>Props`.
- **No prop drilling past two levels** — restructure or use context.
- **Accessibility is required, not optional:** semantic elements, `aria-*` on
  interactive custom controls, focus-visible states on everything focusable.

## Styling

- **Tokens only.** Colors, shadows, radii, durations, and easing come from the
  design tokens in `globals.css`. Hardcoded hex values or ms durations in
  components are review blockers.
- **Tailwind utilities first**; `cva` for variant components; no CSS modules.
- **Class merging** goes through `cn()` — never string concatenation.

## Motion

- **Timing from `animations/tokens.ts`,** variants from `animations/variants.ts`.
- **Every JS-driven loop checks `usePrefersReducedMotion`.**
- **Motion for entrances/interactions, GSAP for scroll choreography** — see the
  decision table in the design-system motion doc.

## Content

- **No copy in components.** All user-facing strings for content surfaces live
  in `src/data/`. (Microcopy that is part of a primitive's behavior — e.g. an
  aria-label default — may live with the component.)

## Imports

Order: external packages → `@/` aliases → relative. Import from folder
barrels (`@/components/ui`), not deep paths.

## Code hygiene

- Comments explain constraints and intent, never restate the code.
- No dead code, no commented-out blocks, no TODOs without an issue link.
- Every module ships with its documentation: public APIs get doc comments.

## Quality gates before merge

```bash
npm run typecheck && npm run lint && npm run test && npm run build
```

All four must pass. No exceptions, no "will fix later".
