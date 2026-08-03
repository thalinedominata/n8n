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
| — | No 3D model exists; the renders and film above are the canonical Go-Bot. Image-to-3D generation is the future option if interactivity is ever wanted |
| `go-bot-turnaround.png` | Full turnaround for animators |

## Rules

- **Proportions are canon.** `src/components/gobot/go-bot.constants.ts`
  encodes the prototype's proportions on a 200×250 canvas. Any new asset
  must map onto that canvas — never stretch or re-proportion Go-Bot.
- **The bot never changes in generated imagery.** Design, proportions,
  head size, colors, face — all locked to the prototype renders unless a
  change is explicitly requested. He is always backpack-sized and always
  has his backpack straps.
- **Generate fresh, don't stack edits.** Chained image edits degrade the
  bot (heads warp, proportions drift). When a lifestyle scene needs a
  revision, regenerate it in one pass from the prototype reference with
  every requirement baked into the prompt, and verify the bot against the
  front/back renders before publishing.
- **Personality is canon.** Warm, curious, optimistic. Idle behavior timing
  lives in the same constants file and applies to every representation
  (SVG, 3D, video).
- Optimize new SVGs with SVGO and compress new film to faststart MP4 before committing.
