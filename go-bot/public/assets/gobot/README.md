# Go-Bot character assets

Drop-in point for the supplied Go-Bot prototype assets.

## Expected files

| File | Purpose |
| --- | --- |
| `go-bot-prototype.svg` | Master vector of the prototype (source of truth for proportions) |
| `go-bot-prototype.glb` | 3D model export for the V2 React Three Fiber stage |
| `go-bot-turnaround.png` | Reference turnaround for animators |

## Rules

- **Proportions are canon.** The animated character in
  `src/components/gobot/go-bot.constants.ts` encodes the prototype's
  proportions on a 200×240 canvas. Any new asset must map onto that canvas —
  never stretch or re-proportion Go-Bot.
- **Personality is canon.** Warm, curious, optimistic. Idle behavior timing
  lives in the same constants file and applies to every representation
  (SVG, 3D, video).
- Optimize SVGs with SVGO and glTF with gltf-transform before committing.
