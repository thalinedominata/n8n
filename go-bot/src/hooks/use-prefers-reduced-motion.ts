'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback: () => void): () => void {
	const mediaQuery = window.matchMedia(QUERY);
	mediaQuery.addEventListener('change', callback);
	return () => mediaQuery.removeEventListener('change', callback);
}

/**
 * Whether the user prefers reduced motion.
 *
 * Every JS-driven animation (Go-Bot idle loops, GSAP timelines) must check
 * this; CSS animations are covered globally in globals.css.
 */
export function usePrefersReducedMotion(): boolean {
	return useSyncExternalStore(
		subscribe,
		() => window.matchMedia(QUERY).matches,
		// On the server assume reduced motion so hydration never flashes movement.
		() => true,
	);
}
