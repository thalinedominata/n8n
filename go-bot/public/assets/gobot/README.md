# Go-Bot character assets

Canonical reference assets for the Go-Bot character.

## Current files

| File | Purpose |
| --- | --- |
| `go-bot-prototype-front.jpg` | Supplied prototype, front view — source of truth for proportions and materials |
| `go-bot-prototype-back.jpg` | Supplied prototype, rear view — backpack, straps, spine light, vent |
| `../video/go-bot-wave.mp4` | Supplied hero film: Go-Bot waves with happy arc-eyes (canon for the `happy` mood); plays from the hero's Watch Demo button |

The animated character (`src/components/gobot/`) is a vector recreation of
these renders; the brand logo lives at `public/assets/images/logo-mark.png`
with a vector version in `src/components/ui/logo.tsx`.

## Awaited files

| File | Purpose |
| --- | --- |
| `go-bot-prototype.glb` | 3D model export for the V2 React Three Fiber stage |
| `go-bot-turnaround.png` | Full turnaround for animators |

## Rules

- **Proportions are canon.** `src/components/gobot/go-bot.constants.ts`
  encodes the prototype's proportions on a 200×250 canvas. Any new asset
  must map onto that canvas — never stretch or re-proportion Go-Bot.
- **Personality is canon.** Warm, curious, optimistic. Idle behavior timing
  lives in the same constants file and applies to every representation
  (SVG, 3D, video).
- Optimize new SVGs with SVGO and glTF with gltf-transform before committing.
