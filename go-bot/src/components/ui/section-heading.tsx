'use client';

import { motion } from 'motion/react';
import { Badge } from './badge';
import { fadeRise, staggerChildren, inViewOnce } from '@/animations/variants';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
	eyebrow: string;
	title: string;
	description?: string;
	align?: 'left' | 'center';
	className?: string;
}

/**
 * Standard section header: eyebrow badge, headline, optional description.
 * Reveals with the shared stagger choreography as it scrolls into view.
 */
export function SectionHeading({
	eyebrow,
	title,
	description,
	align = 'center',
	className,
}: SectionHeadingProps) {
	return (
		<motion.header
			variants={staggerChildren}
			initial="hidden"
			whileInView="visible"
			viewport={inViewOnce}
			className={cn(
				'mb-14 flex flex-col gap-4',
				align === 'center' ? 'items-center text-center' : 'items-start text-left',
				className,
			)}
		>
			<motion.div variants={fadeRise}>
				<Badge>{eyebrow}</Badge>
			</motion.div>
			<motion.h2 variants={fadeRise} className="text-display font-bold tracking-tight text-balance">
				{title}
			</motion.h2>
			{description ? (
				<motion.p
					variants={fadeRise}
					className="max-w-2xl text-body-lg text-ink-secondary text-pretty"
				>
					{description}
				</motion.p>
			) : null}
		</motion.header>
	);
}
