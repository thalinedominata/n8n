'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

export interface ProgressProps {
	/** Value from 0 to 100. */
	value: number;
	/** Accessible label describing what the value measures. */
	label: string;
	className?: string;
}

/** Horizontal progress/confidence bar that fills when scrolled into view. */
export function Progress({ value, label, className }: ProgressProps) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-40px' });
	const clamped = Math.min(Math.max(value, 0), 100);

	return (
		<div
			ref={ref}
			role="progressbar"
			aria-label={label}
			aria-valuenow={clamped}
			aria-valuemin={0}
			aria-valuemax={100}
			className={cn('h-1.5 w-full overflow-hidden rounded-pill bg-surface-sunken', className)}
		>
			<motion.div
				className="h-full rounded-pill bg-gobot-500"
				initial={{ width: 0 }}
				animate={{ width: inView ? `${clamped}%` : 0 }}
				transition={{ duration: duration.hero, ease: ease.outExpo }}
			/>
		</div>
	);
}
