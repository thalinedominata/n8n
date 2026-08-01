# Naming Conventions

## Files & folders

| Kind | Convention | Example |
| --- | --- | --- |
| Folders | `kebab-case` | `life-domains/` |
| Components | `kebab-case.tsx` | `hardware-explorer.tsx` |
| Hooks | `use-*.ts` | `use-mouse-position.ts` |
| Data modules | `kebab-case.ts` (plural for collections) | `industries.ts` |
| Constants files | `<subject>.constants.ts` | `go-bot.constants.ts` |
| Tests | `<subject>.test.ts` | `utils.test.ts` |
| Docs | `kebab-case.md` | `motion-philosophy.md` |

## Code symbols

| Kind | Convention | Example |
| --- | --- | --- |
| Components | `PascalCase` | `HardwareExplorer` |
| Props interfaces | `<Component>Props` | `GoBotProps` |
| Hooks | `useCamelCase` | `usePointerOffset` |
| Domain models | `PascalCase` noun | `LifeDomain`, `RoadmapPhase` |
| Collections | `camelCase` plural | `lifeDomains`, `hardwareModules` |
| Constant groups | `SCREAMING_SNAKE` | `BLINK`, `GAZE`, `PALETTE` |
| Event handlers | `on<Event>` (props) / `handle<Event>` (impl) | `onSelect`, `handleSelect` |
| Booleans | `is/has/should` prefix | `isBlinking`, `prefersReducedMotion` |

## Design tokens (CSS)

- Colors: `--color-<group>-<step>` → `--color-gobot-500`
- Semantic colors: `--color-<role>` → `--color-ink-secondary`, `--color-surface-warm`
- Type scale: `--text-<role>` → `--text-headline`
- Shadows: `--shadow-e<level>` (elevation) → `--shadow-e2`
- Motion: `--duration-<speed>`, `--ease-<curve>` → `--duration-base`, `--ease-out-expo`
- Radius: `--radius-<size>` → `--radius-xl`

## Identifiers in data

Content `id` fields are `kebab-case`, stable, and unique — they double as
anchors and analytics keys. Enforced by `tests/unit/data.test.ts`.

## Sections & anchors

Homepage section components export one `PascalCase` component whose root
`<section>` carries a matching kebab-case `id` (`HardwareExplorer` → `#hardware`).

## The character

He is **Go-Bot** in prose, `GoBot` in code, `gobot` in file paths and token
names. Never "GoBot" in user-facing copy; never "go_bot" anywhere.
