# Go-Bot Design System

Single source of truth: **`src/app/globals.css`** (`@theme` tokens) for CSS,
mirrored by **`src/animations/tokens.ts`** for JS-driven motion. Components
consume tokens — they never restate values.

## Colors

| Group | Tokens | Notes |
| --- | --- | --- |
| Surfaces | `surface` `#FFFFFF` · `surface-warm` `#FAF9F7` · `surface-raised` · `surface-sunken` `#F4F2EF` | White-first; warm neutrals, never blue-gray |
| Ink | `ink` `#0A0A0A` · `ink-secondary` `#52525B` · `ink-tertiary` `#A1A1AA` · `ink-inverse` | All typography |
| Go-Bot Orange | `gobot-50` … `gobot-900`, core `gobot-500` `#FF6A00` | Go-Bot's voice — scarce & meaningful |
| Borders | `border-subtle` `#EEECE8` · `border-strong` `#D6D3CD` | Warm, low-contrast |

Usage: `bg-surface`, `text-ink-secondary`, `bg-gobot-500`, `border-border-subtle`.

## Typography

System stack led by SF Pro Display (`--font-sans`). Roles, not sizes:

| Role | Size / line-height / tracking | Use |
| --- | --- | --- |
| `display-xl` | 72 / 1.05 / −3% | Hero headline (desktop) |
| `display` | 56 / 1.08 / −2.5% | Hero headline (mobile), page titles |
| `headline` | 36 / 1.15 / −2% | Section titles |
| `title` | 24 / 1.3 / −1% | Card titles |
| `body-lg` | 19 / 1.6 | Lead paragraphs |
| `body` | 16 / 1.6 | Default text |
| `caption` | 14 / 1.5 | Card body, meta |
| `overline` | 12 / 1.4 / +12% caps | Eyebrows, labels |

## Spacing

Tailwind's 4px-base scale. Rhythm rules: sections `py-28`, section header to
content `mb-14`, card grids `gap-6`, in-card vertical steps `mt-2/4/5/6`.
Never invent arbitrary pixel values; if a needed step is missing, add a token.

## Elevation & shadows

| Token | Role |
| --- | --- |
| `shadow-e1` | Resting subtlety (inputs, sticky nav) |
| `shadow-e2` | Cards at rest |
| `shadow-e3` | Cards on hover, popovers |
| `shadow-e4` | Modals, hero media |
| `shadow-glow` | Orange emphasis — active/selected Go-Bot moments |

Soft, layered, warm-black (`rgb(10 10 10 / …)`). Elevation communicates
interactivity: things that lift are things you can touch.

## Border radius

`sm` 8 · `md` 12 · `lg` 16 · `xl` 24 · `2xl` 32 · `pill` 9999. Cards use
`xl`, buttons/badges use `pill`, small chips use `md`. Sharp corners don't
exist in this system.

## Motion timing

Durations `instant` 120ms · `fast` 200ms · `base` 350ms · `slow` 600ms ·
`hero` 900ms. Easings `ease-out-expo` · `ease-out-soft` · `ease-in-out-smooth`.
Springs `snappy` / `gentle` / `organic`. Full rationale:
[motion philosophy](../design/motion-philosophy.md).

## Animations

Shared variants in `src/animations/variants.ts`: `fadeRise` (default
entrance), `fade`, `scaleIn`, `staggerChildren` (80ms), `heroReveal`. Ambient
CSS keyframes: `animate-float`, `animate-pulse-soft`. Scroll reveals mount
via `<Reveal>` / `<RevealGroup>` / `<RevealItem>`.

## Icons

Lucide only. 24–28px in feature cards, 16–20px inline. Color: `ink` for
neutral, `gobot-500/600` for Go-Bot moments. Never multi-color icon sets.

## Responsive breakpoints

Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.
Design mobile-first; the page column is `max-w-6xl` (wide) / `max-w-3xl`
(narrow prose) via `<Container>`.

## Components

### Primitives (`src/components/ui`)

| Component | Variants / behavior |
| --- | --- |
| Button | `primary` (orange) · `secondary` (ink) · `outline` · `ghost`; sizes `sm/md/lg` |
| Card | `elevated` · `outlined` · `soft`; padding `none/md/lg` |
| Badge | `orange` · `neutral` · `inverse` |
| Chip | Filter chip (`selected`) or static label (`readOnly`) |
| Container | `wide` · `narrow` page columns |
| Section | Anchor id + vertical rhythm + `default`/`warm` tone |
| SectionHeading | `left`/`center`; eyebrow + title + description, staggered reveal |
| Logo | The triple-bar ENGAGE GLOBAL mark; any size/color |
| Modal | Centered dialog, blurred backdrop, Escape/backdrop close, scroll lock |
| Drawer | Right slide-over for rich detail views; same close semantics |
| Tabs | Sliding active indicator, ARIA tablist |
| Accordion | Single-open, animated height; FAQ standard |
| Carousel | Scroll-snap track + prev/next controls |
| Tooltip | CSS hover/focus tooltip for short labels |
| Progress | In-view animated bar (confidence scores) |
| AnimatedCounter | In-view count-up with prefix/suffix |
| StatCard / StatValue | Counting stat tile; parses "24/7", "95%", "3×" |
| CommandPalette | Global ⌘K search over the content databases |

### Cards (`src/components/cards`)

| Component | Purpose |
| --- | --- |
| FeatureCard | Icon + title + description tile |
| CapabilityCard | Capability engine tile: confidence bar + hardware generations |
| IndustryCard | Industry tile linking to the transformed experience |

### Character (`src/components/gobot`)

| Export | Purpose |
| --- | --- |
| GoBot | The engine: `mood` + `role` props, autonomous idle life by default |
| GoBotIdle/Thinking/Listening/Talking/Happy/Concerned/Scanning/Charging/Walking | Mood presets |
| GoBotHero | Hero-scale preset |
| GoBotMedical/Security/Police/Education/Construction/Firefighter/ChildCare/ElderCare/Developer | Role presets |
| GoBot3D | Lazy-loaded 3D renderer (React Three Fiber) — same mood engine, SVG fallback while loading |

### Composed experiences (`src/components/sections`)

Hero · Problem · Architecture (interactive flow) · LifeDomains ·
HardwareExplorer (16-part anatomy) · Industries · AiDemo (playground) ·
Roadmap (timeline) · CapabilityExplorer · IndustryExperience · DomainDetails.

**Rule:** new UI starts as a variant of an existing primitive. A new
component is added only when no primitive can express it — and it lands in
`ui/` with tokens, variants, and a row in this table.
