# Motion Philosophy

**Motion is Go-Bot's body language.** The site doesn't animate to impress; it
moves because it is alive. Every animation answers one question: *does this
make the visitor feel that Go-Bot is aware of them?*

## The three laws

1. **Aware, not automatic.** The most important motion responds to the
   visitor: Go-Bot's gaze follows the pointer, hotspots acknowledge hover,
   content greets you as you arrive at it (scroll reveals). Ambient loops
   (breathing, chest light) exist so stillness never reads as "off".

2. **Calm, decisive, soft-landing.** Entrances start fast and settle gently —
   `--ease-out-expo` / `--ease-out-soft`. Nothing bounces frantically; nothing
   crawls. Go-Bot is relaxed and confident, and so is the interface.

3. **Respectful.** Motion never blocks reading, never loops distractively in
   text areas, and fully honors `prefers-reduced-motion` — both in CSS
   (global media query) and JS (`usePrefersReducedMotion`). Reduced-motion
   visitors get a warm, static Go-Bot — never a broken one.

## Timing vocabulary

| Token | Value | Used for |
| --- | --- | --- |
| `instant` | 120ms | Micro feedback (press, toggle) |
| `fast` | 200ms | Hover states, small transitions |
| `base` | 350ms | Cards, panels, standard transitions |
| `slow` | 600ms | Section reveals |
| `hero` | 900ms | Hero entrances, cinematic moments |

Springs: `snappy` (buttons) · `gentle` (cards) · `organic` (Go-Bot's body).
Source of truth: `src/animations/tokens.ts` + `globals.css`.

## Tool decision table

| Need | Tool |
| --- | --- |
| Ambient loop (pulse, float) | CSS keyframes in `globals.css` |
| Entrance / hover / layout transitions | Motion variants (`animations/variants.ts`) |
| Pointer-coupled values (gaze) | Motion values + springs (`usePointerOffset`) |
| Scroll-scrubbed choreography, pinning | GSAP + ScrollTrigger (`animations/gsap.ts`) |
| Page scroll feel | Lenis (`SmoothScrollProvider`) |

One vocabulary, many tools: all of them consume the same timing tokens.

## Go-Bot's idle behavior spec

| Behavior | Timing | Feel |
| --- | --- | --- |
| Breathing | 4.2s cycle, 4px bob, 1.2% squash | Calm, always present |
| Blinking | Random 2.6–6.8s gaps, 130ms close, 22% double-blink | Organic, never metronomic |
| Gaze | Springs at stiffness 120, ±7px eye travel, ±3° head tilt | Soft pursuit, not a stare |
| Thinking | Every 9–18s, 2.6s hold, glance up + 3 thought dots | Curious, has an inner life |

These constants are the character bible (`go-bot.constants.ts`). Tuning them
changes Go-Bot's personality — treat changes like a brand decision, not a
style tweak.

## Choreography rules

- Group reveals stagger at 80ms (`stagger.base`); never reveal a wall at once.
- Reveals fire once (`inViewOnce`) — scrolling back up doesn't replay the show.
- Transforms and opacity only; never animate layout properties on scroll.
- Every interactive element gives feedback within 120ms.
