# Brand Guidelines

## Identity

| | |
| --- | --- |
| Company | **ENGAGE GLOBAL** |
| Product | **Go-Bot** (always hyphenated, both capitals) |
| Mission | Create intelligent robotic companions that improve every aspect of human life |
| Personality | Warm · Curious · Optimistic · Capable · Humble |

## Naming

- Prose: **Go-Bot** — never "GoBot", "Gobot", or "the go-bot".
- Go-Bot is **"he"/"him"** in marketing copy — he is a companion, not an "it".
- Code: `GoBot` (components) / `gobot` (paths, tokens). See naming conventions.

## Voice & tone

Go-Bot's brand speaks like Go-Bot acts: warm, clear, quietly confident.

- **Short sentences. Concrete promises.** "He sees, listens, learns, and cares."
- **Optimistic, never hyped.** No "revolutionary", no exclamation-mark stacking.
- **Human benefit before technology.** Specs support the story; they never lead it.
- **Friendly, never cutesy.** One light moment per page is plenty.

## Color

| Role | Token | Value |
| --- | --- | --- |
| Stage | `--color-surface` | `#FFFFFF` |
| Warm stage | `--color-surface-warm` | `#FAF9F7` |
| Ink | `--color-ink` | `#0A0A0A` |
| **Go-Bot Orange** | `--color-gobot-500` | `#FF6A00` |

Orange is Go-Bot's voice: eyes, chest light, primary actions, key highlights.
Keep it scarce (≈5–10% of any screen). Never use it for errors or warnings.

## The logo

The ENGAGE GLOBAL mark is the **triple bar**: two inward-tapering bars over
a slanted base bar (`public/assets/images/logo-mark.png`, vector component
`src/components/ui/logo.tsx`). It is the same emblem Go-Bot wears on his
chest — brand and character are one system. Use it in ink on white, white on
orange, or orange as an accent; never distort or re-proportion the bars.

## Representing Go-Bot

**Go-Bot is always shown 3D-realistic** — the prototype renders
(`public/assets/gobot/go-bot-front.jpg` / `go-bot-back.jpg`) and film
(`go-bot-wave.mp4`), rendered via the `GoBotFigure` component. No 3D
model asset exists — the renders and film ARE the canonical Go-Bot.
The flat vector `GoBot` illustration is NOT a site-surface
representation: it serves only as a loading fallback or when explicitly
instructed (icons, diagrams).

## The character

- **Proportions are canon** — encoded in `go-bot.constants.ts` on a 200×250
  canvas measured from the supplied prototype
  (`public/assets/gobot/go-bot-prototype-front.jpg` / `-back.jpg`). Never
  stretch, recolor, or re-proportion him.
- **His look:** matte graphite shell with darker joints; glossy black visor
  with two glowing orange eyes; the triple-bar chest emblem (lit); a small
  chest camera; soft orange hands; dark boots on orange soles; and the
  carry straps (orange-stitched) over his flush back panel with vent and
  glowing spine light. The straps are for the HUMAN: you wear Go-Bot like
  a backpack — that is the "wearable" in wearable humanoid robot.
- **He is always alive** where he appears: breathing, blinking, watching,
  occasionally thinking. A frozen Go-Bot is off-brand.
- **The site stays white-first.** Go-Bot's graphite body is the dark
  element on the bright stage — dark UI sections remain off-brand.

## Typography

SF Pro Display / system stack. Near-black on white. Tight tracking on
display sizes (−2 to −3%), regular tracking for body. Hierarchy through
scale and weight, not color. Full scale: design-system/typography.

## Imagery & iconography

- Lucide icons at `stroke-width` default, sized 24–28px, ink or orange only.
- Photography (future): bright, natural light, real homes — never dark labs.
