/**
 * Go-Bot mood system — the character's expression vocabulary.
 *
 * Every representation of Go-Bot (SVG today, 3D in V2) renders one of these
 * moods. Pages and sections never invent expressions; they pick a mood (or a
 * preset from go-bot.presets.tsx) and the character stays in character.
 */

export type GoBotMood =
	| 'idle'
	| 'thinking'
	| 'listening'
	| 'talking'
	| 'happy'
	| 'concerned'
	| 'scanning'
	| 'charging'
	| 'walking';

/** Profession accessories rendered on the chest/head. */
export type GoBotRole =
	| 'medical'
	| 'security'
	| 'police'
	| 'education'
	| 'construction'
	| 'firefighter'
	| 'childcare'
	| 'eldercare'
	| 'developer';

export interface MoodConfig {
	/** Uniform eye scale (listening leans in). */
	eyeScale: number;
	/** Vertical eye openness, 0–1 (charging is nearly closed). */
	eyeOpenness: number;
	/** Replace eye ellipses with happy arcs (^ ^). */
	happyArc: boolean;
	/** Eyes sweep left–right (scanning). */
	sweep: boolean;
	/** Fixed eye offset overriding gaze (thinking looks up, concerned down). */
	glance?: { x: number; y: number };
	/** Whether eyes track the visitor's pointer. */
	gaze: boolean;
	/** Chest emblem pulse period in seconds. */
	emblemPeriod: number;
	/** Chest emblem minimum opacity during a pulse. */
	emblemMin: number;
	/** Emblem bars animate as a voice equalizer (talking). */
	equalizer: boolean;
	/** Show cascading thought dots. */
	dots: boolean;
	/** Legs swing in a walk cycle. */
	walk: boolean;
	/** Show the charging bolt. */
	bolt: boolean;
}

const base: MoodConfig = {
	eyeScale: 1,
	eyeOpenness: 1,
	happyArc: false,
	sweep: false,
	gaze: true,
	emblemPeriod: 2.1,
	emblemMin: 0.7,
	equalizer: false,
	dots: false,
	walk: false,
	bolt: false,
};

export const MOODS: Record<GoBotMood, MoodConfig> = {
	idle: base,
	thinking: {
		...base,
		gaze: false,
		glance: { x: 5, y: -6 },
		dots: true,
		emblemPeriod: 0.7,
		emblemMin: 0.45,
	},
	listening: { ...base, eyeScale: 1.18, emblemPeriod: 1.1, emblemMin: 0.55 },
	talking: { ...base, equalizer: true },
	happy: { ...base, happyArc: true, emblemPeriod: 1.4, emblemMin: 0.6 },
	concerned: {
		...base,
		eyeOpenness: 0.55,
		gaze: false,
		glance: { x: 0, y: 3 },
		emblemPeriod: 3,
		emblemMin: 0.35,
	},
	scanning: { ...base, sweep: true, gaze: false, emblemPeriod: 1, emblemMin: 0.6 },
	charging: {
		...base,
		eyeOpenness: 0.2,
		gaze: false,
		bolt: true,
		emblemPeriod: 3.4,
		emblemMin: 0.25,
	},
	walking: { ...base, walk: true },
};
