# Folder Structure

Every folder has one responsibility. If a file could live in two places, the
decision table at the bottom resolves it.

```
go-bot/
├── docs/                          # All documentation
│   ├── architecture/              # System design, this file
│   ├── standards/                 # Coding standards, naming conventions
│   ├── design/                    # Design & motion philosophy
│   ├── design-system/             # Token & component reference
│   ├── brand/                     # Brand guidelines
│   ├── hardware/                  # Hardware platform docs
│   ├── industries/                # Industry solution docs
│   ├── life-domains/              # Life domain docs
│   ├── capabilities/              # Capability docs
│   ├── ai/                        # AI system docs
│   └── developer/                 # Developer docs
│       └── api/                   # API reference (future)
│
├── public/
│   └── assets/
│       ├── images/                # Static imagery
│       ├── video/                 # Video assets
│       └── gobot/                 # Go-Bot character assets (prototype drop-in)
│
├── src/
│   ├── app/                       # Next.js App Router — routes, layout, globals.css
│   ├── components/
│   │   ├── ui/                    # Design-system primitives (reusable everywhere)
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/              # Homepage sections
│   │   ├── gobot/                 # The animated character + his spec
│   │   └── motion/                # Motion wrappers (Reveal, SmoothScrollProvider)
│   ├── animations/                # Motion tokens, variants, GSAP registration
│   ├── hooks/                     # Reusable hooks
│   ├── types/                     # Shared TypeScript contracts
│   ├── data/                      # Typed content
│   ├── lib/                       # Pure utilities
│   ├── config/                    # Site configuration
│   └── styles/                    # (Reserved) additional stylesheets as the system grows
│
├── tests/
│   └── unit/                      # Vitest unit tests
│
├── package.json                   # Scripts & dependencies
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # Strict TypeScript configuration
├── postcss.config.mjs             # Tailwind 4 via PostCSS
└── vitest.config.ts               # Test configuration
```

## Decision table

| "Where does X go?" | Answer |
| --- | --- |
| A button/card/badge used on many pages | `components/ui/` |
| A block that exists once per page | `components/sections/` |
| Copy, stats, lists rendered by a section | `data/` |
| An interface shared by data + components | `types/` |
| A duration, easing, or spring | `animations/tokens.ts` (JS) + `globals.css` (CSS) |
| A reusable entrance/hover animation | `animations/variants.ts` |
| Stateful reusable behavior | `hooks/` |
| A pure function with no React | `lib/` |
| Go-Bot's canonical media (film, renders) | `public/assets/{gobot,video}` via `GoBotFigure` |
| Go-Bot's look or personality | `components/gobot/` + `public/assets/gobot/` |

## Rules

- **Barrel exports** (`index.ts`) at every folder boundary; consumers import
  from the folder, not deep paths.
- **No cross-section imports.** Sections share code by promoting it to
  `ui/`, `hooks/`, or `lib/` — never by importing each other.
- **`styles/` is reserved.** Tokens live in `globals.css` today; when the
  token set outgrows one file it splits into `src/styles/` without changing
  any component.
