'use client';

import type { ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import { fadeRise, staggerChildren, inViewOnce } from '@/animations/variants';
import { cn } from '@/lib/utils';

export interface RevealProps {
	children: ReactNode;
	/** Override the entrance variants (defaults to fadeRise). */
	variants?: Variants;
	className?: string;
	/** Extra delay in seconds before the entrance begins. */
	delay?: number;
}

/** Animates children with the standard entrance when scrolled into view. */
export function Reveal({ children, variants = fadeRise, className, delay }: RevealProps) {
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			whileInView="visible"
			viewport={inViewOnce}
			transition={delay ? { delay } : undefined}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export interface RevealGroupProps {
	children: ReactNode;
	className?: string;
}

/** Staggers the entrances of its Reveal-compatible children. */
export function RevealGroup({ children, className }: RevealGroupProps) {
	return (
		<motion.div
			variants={staggerChildren}
			initial="hidden"
			whileInView="visible"
			viewport={inViewOnce}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
}

/** A child item inside RevealGroup. */
export function RevealItem({ children, variants = fadeRise, className }: RevealProps) {
	return (
		<motion.div variants={variants} className={className}>
			{children}
		</motion.div>
	);
}
