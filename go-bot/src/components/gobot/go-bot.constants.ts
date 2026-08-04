/**
 * Go-Bot character specification — derived from the supplied prototype
 * (publichttps://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_001159_f6d6bbed-7ebc-4a71-a398-5e848dca50b3.png / -back.jpg).
 *
 * These constants are a character bible: they encode the prototype's
 * proportions and the timing of his personality behaviors. Changing them
 * changes who Go-Bot is — treat edits as brand decisions.
 *
 * Canonical proportions (200×250 viewBox, from the prototype):
 *  - Head: 92×80 rounded cube (≈32% of height) with a glossy black visor
 *    and two glowing orange eyes 24px apart.
 *  - Torso: 80×66 rounded shell wearing the mango chest emblem
 *    (the ENGAGE GLOBAL logo), a camera dot beneath it, and the wearable
 *    backpack with its orange spine light (rear).
 *  - Chunky articulated arms with orange hands; short legs with dark boots
 *    on orange soles.
 */

export const PALETTE = {
	/** Matte graphite body panels. */
	shell: '#2b2b30',
	/** Darker joints, boots, and seams. */
	shellDark: '#1d1d22',
	/** Panel seam / outline stroke. */
	seam: '#121216',
	/** Glossy black face visor. */
	visor: '#0c0c10',
	/** Go-Bot orange — eyes, emblem, hands, soles. */
	orange: '#ff6a00',
	/** Warm glow tint behind lit elements. */
	glow: '#ff8a3c',
	/** Soft orange for halos and rings. */
	orangeSoft: '#ffedd5',
	shadow: 'rgba(10, 10, 10, 0.10)',
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
