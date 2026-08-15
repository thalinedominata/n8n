import type { HTMLAttributes } from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
	/** Anchor id — matches the section's navigation href. */
	id: string;
	/** Background tone; sections alternate default (white) and warm. */
	tone?: 'default' | 'warm';
	/** Set false to manage your own Container inside. */
	contained?: boolean;
}

/** Standard page section: anchor, vertical rhythm, alternating tone. */
export function Section({
	id,
	tone = 'default',
	contained = true,
	className,
	children,
	...props
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn('py-28', tone === 'warm' && 'bg-surface-warm', className)}
			{...props}
		>
			{contained ? <Container>{children}</Container> : children}
		</section>
	);
}
