'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GSAP setup — register plugins exactly once, on the client.
 *
 * GSAP is reserved for scroll-choreographed sequences (pinning, scrubbing,
 * timeline orchestration). Simple entrances use Motion variants instead —
 * see docs/design-system/motion.md for the decision table.
 */
let registered = false;

export function getGsap(): typeof gsap {
	if (!registered && typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
		registered = true;
	}
	return gsap;
}

export { ScrollTrigger };
