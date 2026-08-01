import type { Variants } from 'motion/react';
import { duration, ease, stagger } from './tokens';

/**
 * Shared Motion variants.
 *
 * Sections compose these instead of declaring inline animation objects, so
 * the entire site moves with one consistent physical language.
 */

/** Fade + rise: the default entrance for content blocks. */
export const fadeRise: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: duration.slow, ease: ease.outExpo },
	},
};

/** Subtle fade for secondary/supporting content. */
export const fade: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: duration.base, ease: ease.outSoft } },
};

/** Scale-in for cards and media surfaces. */
export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.96 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: duration.slow, ease: ease.outExpo },
	},
};

/** Parent orchestrator: staggers `fadeRise`/`scaleIn` children. */
export const staggerChildren: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: stagger.base, delayChildren: 0.1 } },
};

/** Hero entrance: slower, more cinematic than in-page reveals. */
export const heroReveal: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: duration.hero, ease: ease.outExpo },
	},
};

/** Viewport config shared by all whileInView reveals. */
export const inViewOnce = { once: true, margin: '-80px' } as const;
