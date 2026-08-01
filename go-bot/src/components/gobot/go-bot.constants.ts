/**
 * Go-Bot character specification.
 *
 * These constants encode the prototype's canonical proportions and the
 * timing of his personality behaviors. Treat them as a character bible:
 * changing them changes who Go-Bot is. When the production prototype asset
 * lands (see public/assets/gobot/README.md), its measurements map onto the
 * same 200×240 canvas so every consumer stays unchanged.
 *
 * Canonical proportions (200×240 viewBox):
 *  - Head: 132×96 — deliberately large (≈40% of height) for warmth.
 *  - Visor: 104×64, eyes 16×26 with 44px between centers.
 *  - Body: 104×98, chest light centered at (100, 170).
 *  - Antenna tip at (100, 10) — his "idea light".
 */

export const PALETTE = {
	shell: '#ffffff',
	line: '#0a0a0a',
	visor: '#141414',
	orange: '#ff6a00',
	orangeSoft: '#ffedd5',
	shadow: 'rgba(10, 10, 10, 0.08)',
} as const;

/** Breathing: slow and calm — Go-Bot is relaxed, never frantic. */
export const BREATH = {
	periodS: 4.2,
	bobPx: 4,
	squash: 0.012,
} as const;

/** Blinking: humanlike randomized cadence with occasional double blinks. */
export const BLINK = {
	minGapMs: 2600,
	maxGapMs: 6800,
	closeMs: 130,
	doubleBlinkChance: 0.22,
} as const;

/** Gaze tracking: soft pursuit of the pointer, never a hard stare. */
export const GAZE = {
	eyeTravelX: 7,
	eyeTravelY: 5,
	headTravelX: 4,
	headTiltDeg: 3,
} as const;

/** Thinking: an occasional glance up-and-away with thought dots. */
export const THINK = {
	minGapMs: 9000,
	maxGapMs: 18000,
	holdMs: 2600,
	glance: { x: 5, y: -6 },
} as const;
