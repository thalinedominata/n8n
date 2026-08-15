'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { useMotionValue, useSpring, type MotionValue } from 'motion/react';
import { clamp } from '@/lib/utils';

export interface PointerOffset {
	/** Horizontal offset from the element center, normalized to [-1, 1]. */
	x: MotionValue<number>;
	/** Vertical offset from the element center, normalized to [-1, 1]. */
	y: MotionValue<number>;
}

/**
 * Tracks the pointer relative to an element's center as smoothed,
 * normalized motion values. Powers Go-Bot's gaze tracking.
 *
 * Values spring toward the pointer rather than snapping, which is what
 * makes the gaze feel alive instead of mechanical.
 */
export function usePointerOffset<T extends HTMLElement>(
	targetRef: RefObject<T | null>,
	{ stiffness = 120, damping = 20 }: { stiffness?: number; damping?: number } = {},
): PointerOffset {
	const rawX = useMotionValue(0);
	const rawY = useMotionValue(0);
	const x = useSpring(rawX, { stiffness, damping });
	const y = useSpring(rawY, { stiffness, damping });
	const frame = useRef(0);

	useEffect(() => {
		function onPointerMove(event: PointerEvent) {
			cancelAnimationFrame(frame.current);
			frame.current = requestAnimationFrame(() => {
				const el = targetRef.current;
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const cx = rect.left + rect.width / 2;
				const cy = rect.top + rect.height / 2;
				// Normalize against a viewport-scaled radius so the gaze responds
				// to the whole page, not only the area over the element.
				const radius = Math.max(window.innerWidth, window.innerHeight) / 2;
				rawX.set(clamp((event.clientX - cx) / radius, -1, 1));
				rawY.set(clamp((event.clientY - cy) / radius, -1, 1));
			});
		}

		window.addEventListener('pointermove', onPointerMove, { passive: true });
		return () => {
			window.removeEventListener('pointermove', onPointerMove);
			cancelAnimationFrame(frame.current);
		};
	}, [targetRef, rawX, rawY]);

	return { x, y };
}
