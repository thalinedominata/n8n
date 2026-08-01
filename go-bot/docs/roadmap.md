# Platform Roadmap

The public-facing summary renders from `src/data/roadmap.ts`; this document
is the engineering view.

## Version 1 — Foundation *(current)*

- [x] Enterprise repository architecture & documentation
- [x] Design system (tokens, primitives, motion vocabulary)
- [x] Animated Go-Bot character (breathing, blinking, gaze, thinking)
- [x] Prototype asset integration — character rebuilt to the supplied
      prototype (graphite shell, glowing eyes, chest emblem, backpack)
- [x] Homepage: Hero, Problem, Architecture, Life Domains (20 domains with
      placeholder pages), Hardware Explorer (anatomy modals), Industries,
      AI Demo (scripted), Roadmap, Footer
- [ ] Vercel deployment + analytics

## Version 2 — Immersion

- Full 3D Go-Bot (glTF prototype → R3F stage in `src/three/`, driven by the
  same behavior state machine as the SVG character)
- GSAP ScrollTrigger deep-dives: pinned hardware exploded view, scroll-scrubbed
  architecture story
- Immersive per-domain experiences (replacing the V1 domain placeholders)
- Additional primitives as sections need them: Tabs, Accordion, Search,
  Command Palette
- Capability demo interactions; localization (i18n layer); a11y audit pass

## Version 3 — Intelligence

- Conversational Go-Bot on the web (streaming AI chat with character animation)
- Developer portal under `app/(developers)`; public API + reference in
  `docs/developer/api/`
- CMS migration for `src/data/` content

## Version 4 — Platform

- Owner dashboard (`app/(dashboard)`) with auth
- Skill marketplace; fleet management for enterprise
- Workspace package extraction (`@gobot/ui`, `@gobot/motion`, `@gobot/types`)

## Engineering invariants across all versions

1. The dependency rule (layers point downward) never breaks.
2. Design tokens remain the single styling source of truth.
3. Go-Bot's character constants stay canon across SVG, 3D, and video.
4. Every version ships with its documentation.
