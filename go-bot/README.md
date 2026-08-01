# Go-Bot Platform

**The digital platform for Go-Bot — the wearable humanoid robot by ENGAGE GLOBAL.**

> Mission: Create intelligent robotic companions that improve every aspect of human life.

This repository is not a website. It is the foundation of Go-Bot's complete
digital platform — built to scale for years of development and, eventually,
beyond one million lines of code. Version 1 ships the public homepage; the
architecture ships the next decade.

## Quick start

```bash
cd go-bot
npm install
npm run dev        # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run typecheck` | Strict TypeScript check |
| `npm run test` | Run unit tests (Vitest) |
| `npm run lint` | Lint |

## Technology

Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS 4 · Motion
(Framer Motion) · GSAP · shadcn/ui patterns ·
Lucide · Lenis · Vercel

## Repository map

```
go-bot/
├── docs/                  Documentation (architecture, design system, brand, …)
├── public/assets/         Static assets (images, video, gobot character assets)
├── src/
│   ├── app/               Next.js App Router (application shell & routes)
│   ├── components/
│   │   ├── ui/            Reusable design-system primitives (Button, Card, …)
│   │   ├── gobot/         The animated Go-Bot character
│   │   ├── sections/      Homepage sections (Hero … Roadmap)
│   │   ├── layout/        Navbar, Footer
│   │   └── motion/        Motion wrappers (Reveal, SmoothScrollProvider)
│   ├── animations/        Motion tokens, shared variants, GSAP setup
│   ├── hooks/             Reusable React hooks
│   ├── types/             Shared TypeScript models
│   ├── data/              Typed content (life domains, industries, roadmap, …)
│   ├── lib/               Utilities
│   ├── config/            Site configuration
│   └── app/globals.css    Design tokens (single source of truth)
└── tests/                 Unit tests
```

Full details: [docs/architecture/folder-structure.md](docs/architecture/folder-structure.md)

## Documentation

| Document | What it covers |
| --- | --- |
| [Mission & Vision](docs/mission-vision.md) | Why Go-Bot exists |
| [Architecture](docs/architecture/overview.md) | System design & principles |
| [Folder Structure](docs/architecture/folder-structure.md) | Where everything lives and why |
| [Coding Standards](docs/standards/coding-standards.md) | How we write code |
| [Naming Conventions](docs/standards/naming-conventions.md) | How we name things |
| [Design Philosophy](docs/design/design-philosophy.md) | Minimal, bright, premium |
| [Motion Philosophy](docs/design/motion-philosophy.md) | Why the site feels alive |
| [Brand Guidelines](docs/brand/guidelines.md) | Voice, color, character |
| [Design System](docs/design-system/README.md) | Tokens & components |
| [Contributing](docs/contributing.md) | Workflow & review rules |
| [Roadmap](docs/roadmap.md) | Where the platform goes next |

## The one rule

**Never sacrifice architecture for speed.** Everything reusable lives in a
shared layer; nothing is duplicated; every token, timing, and color has one
source of truth. If a shortcut violates that, the shortcut loses.
