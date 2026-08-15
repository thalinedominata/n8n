# Design Philosophy

**Minimal. Bright. Premium. Warm.** The Go-Bot platform should feel like an
Apple product photographed in morning light — and then it should look back at
you.

## Principles

### 1. White-first
White is not empty; it is the stage. Generous whitespace gives Go-Bot and the
content room to breathe. Backgrounds alternate only between pure white
(`--color-surface`) and warm off-white (`--color-surface-warm`) — never gray,
never dark, never gradient-heavy.

### 2. Black typography
Text is near-black ink (`--color-ink`) on white. Hierarchy comes from size,
weight, and spacing — not from color. Secondary text steps down to
`--color-ink-secondary`; color in type is reserved for Go-Bot orange moments.

### 3. Orange is Go-Bot's voice
`--color-gobot-500` (#FF6A00) appears wherever Go-Bot "speaks": his eyes, his
chest light, the primary action, an active state, a key phrase. Because it is
scarce, it is meaningful. If a screen is more than ~10% orange, Go-Bot is
shouting — pull back.

### 4. Premium is restraint
Apple-quality means fewer elements, better executed: soft layered shadows
(`--shadow-e*`), generous radii (`--radius-xl`), calm type, decisive motion.
No borders where spacing suffices. No decoration that doesn't communicate.

### 5. Warm, friendly, optimistic
Rounded geometry, warm neutrals (off-whites lean cream, not blue), copy that
smiles. Go-Bot is never sterile, techy-cold, or intimidating. When in doubt,
choose the friendlier option.

### 6. Alive
The site is Go-Bot's presence on the web. He blinks, breathes, watches, and
thinks. Every interaction should quietly reinforce that the visitor is not
looking at a page — they are being welcomed by someone. See
[motion philosophy](motion-philosophy.md).

## Anti-patterns

- Dark sections or dark mode (V1 is bright by identity)
- Gradient text, glassmorphism for its own sake, decorative noise
- Hard borders, sharp corners, pure-gray neutrals
- Orange used for errors/warnings (it belongs to Go-Bot)
- Motion that decorates instead of communicates
