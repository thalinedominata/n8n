# Platform Roadmap

The public-facing summary renders from `src/data/roadmap.ts`; this document
is the engineering view. The master plan lives in
[architecture/gxp-platform.md](architecture/gxp-platform.md) — the ten GXP
phases sorted into platform layers.

## Version 1 — Foundation *(current)*

- [x] Enterprise repository architecture & documentation
- [x] Design system (tokens, primitives, motion vocabulary)
- [x] Animated Go-Bot character (breathing, blinking, gaze, thinking)
- [x] Prototype asset integration — character rebuilt to the supplied
      prototype (graphite shell, glowing eyes, chest emblem, backpack)
- [x] Homepage: Hero, Problem, Architecture (interactive flow), Life
      Domains, Hardware Explorer (17-part anatomy), Industries, AI
      Playground (scripted scenarios), Roadmap, Footer
- [x] Complete design-system component set (incl. Tabs, Accordion, Drawer,
      Carousel, Tooltip, Progress, StatCard, Chip, Command Palette)
- [x] Go-Bot component library: 9 moods + 9 role variants as presets
- [x] Capability engine: searchable database at /capabilities with
      cross-references into domains and industries
- [x] Life-domain database: rich schema, all 20 domains fully populated
- [x] Industry engine: transformed experiences at /industries/[slug]
- [x] Vercel deployment configuration (docs/deployment.md; project
      connection and analytics opt-in pending)

## Version 2 — Immersion *(active)*

**Decision: media-first, no 3D model.** Go-Bot exists as prototype
renders and film only — there is no source 3D model to export. The
experimental R3F/three.js layer was removed; `GoBotFigure` (renders +
film) is the character's permanent representation. If interactive 3D is
ever wanted, the path is image-to-3D generation or a commissioned model
— a product decision, not a technical blocker.

- [x] Go-Bot as himself site-wide: hero film loop, prototype gallery,
      photo-based hardware explorer with front/back hotspot views
- [x] Person-A: the celebrity Go-Bot gallery (`src/data/persona.ts`),
      launched with Feature 001 — Lil Durk, "The Voice"
- [ ] More film: mood/expression clips from the same prototype set
      (thinking, walking, head-turn) to extend GoBotFigure
- [x] Guided hardware tour: button-driven beat navigation across the
      prototype renders (`hardware-story.tsx`, beats in
      `src/data/hardware-story.ts`)
- [ ] GSAP scroll-scrubbed architecture narrative
- [ ] Capability demo interactions; localization (i18n layer); a11y audit

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

## Decision log

- **2026-08-02 — Scroll-pinned tour: replaced with buttons.** The GSAP
  pinned version shipped and was reverted same-day — on mobile it held
  the viewport for ~5 screen-heights and read as the page being stuck
  (ENGAGE GLOBAL verdict: "feels sticky"). The tour keeps its beats and
  crossfade but advances by Previous/Next and the beat rail. Scroll
  hijacking is now a pattern we avoid platform-wide.
- **2026-08-01 — 3D wave animation: closed, not shipping.** Auto-rigging
  (Meshy via Higgsfield) was attempted five ways; the best result animates
  but rubber-stretches his rigid shells (soft-blended skin weights).
  A solid robot doesn't stretch — ENGAGE GLOBAL verdict. The wave lives in
  the hero film; the committed static model is the 3D representation.
  Future path if ever wanted: manual rigid-bind rig in Blender (each shell
  panel weighted 100% to one bone), not further auto-rig re-rolls.
