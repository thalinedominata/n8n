'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';
import { usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/lib/utils';
import { duration as durationTokens, ease } from '@/animations/tokens';

export interface AnimatedCounterProps {
	/** Target numeric value. */
	value: number;
	prefix?: string;
	suffix?: string;
	/** Animation length in seconds. */
	duration?: number;
	className?: string;
}

/**
 * Counts up from zero when scrolled into view. Falls back to the static
 * value under reduced motion.
 */
export function AnimatedCounter({
	value,
	prefix = '',
	suffix = '',
	duration = durationTokens.hero,
	className,
}: AnimatedCounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: '-40px' });
	const reducedMotion = usePrefersReducedMotion();
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		if (!inView) return;
		if (reducedMotion) {
			setDisplay(value);
			return;
		}
		const controls = animate(0, value, {
			duration,
			ease: ease.outExpo,
			onUpdate: (latest) => setDisplay(Math.round(latest)),
		});
		return () => controls.stop();
	}, [inView, reducedMotion, value, duration]);

	return (
		<span ref={ref} className={cn('tabular-nums', className)}>
			{prefix}
			{display}
			{suffix}
		</span>
	);
}
