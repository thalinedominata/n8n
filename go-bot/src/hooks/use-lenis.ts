'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

/**
 * Initializes Lenis smooth scrolling for the page.
 *
 * Mounted once by SmoothScrollProvider in the root layout. Disabled
 * automatically when the user prefers reduced motion.
 */
export function useLenis(): void {
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) return;

		const lenis = new Lenis({
			lerp: 0.12,
			smoothWheel: true,
		});

		let frame: number;
		const raf = (time: number) => {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		};
		frame = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(frame);
			lenis.destroy();
		};
	}, [prefersReducedMotion]);
}
