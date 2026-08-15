/**
 * Motion tokens — the single source of truth for animation timing.
 *
 * These mirror the CSS custom properties in `src/app/globals.css` and are
 * documented in docs/design-system/motion.md. Never hardcode durations or
 * easings inside a component; import from here.
 */

/** Durations in seconds (Motion/Framer convention). */
export const duration = {
	instant: 0.12,
	fast: 0.2,
	base: 0.35,
	slow: 0.6,
	hero: 0.9,
} as const;

/** Cubic-bezier easing curves. Premium = decisive start, soft landing. */
export const ease = {
	outExpo: [0.16, 1, 0.3, 1],
	outSoft: [0.22, 1, 0.36, 1],
	inOutSmooth: [0.65, 0, 0.35, 1],
} as const;

/** Spring presets for physical, alive-feeling interactions. */
export const spring = {
	/** UI feedback: buttons, toggles, small elements. */
	snappy: { type: 'spring', stiffness: 500, damping: 32, mass: 0.8 },
	/** Cards, panels, medium surfaces. */
	gentle: { type: 'spring', stiffness: 220, damping: 28, mass: 1 },
	/** Go-Bot body language: slow, organic, breathing. */
	organic: { type: 'spring', stiffness: 80, damping: 18, mass: 1.4 },
} as const;

/** Stagger delays for orchestrated group reveals. */
export const stagger = {
	tight: 0.05,
	base: 0.08,
	relaxed: 0.14,
} as const;
