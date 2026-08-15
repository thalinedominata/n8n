'use client';

import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** Selected state for filter chips. */
	selected?: boolean;
	/** Render as a static label instead of an interactive filter. */
	readOnly?: boolean;
}

/** Compact tag: interactive filter chip by default, static label with readOnly. */
export function Chip({ selected = false, readOnly = false, className, ...props }: ChipProps) {
	const base = cn(
		'inline-flex items-center gap-1.5 rounded-pill px-3.5 py-1.5 text-caption font-medium',
		'transition-colors duration-(--duration-fast)',
		selected ? 'bg-ink text-ink-inverse' : 'bg-surface-sunken text-ink-secondary',
		className,
	);

	if (readOnly) {
		return <span className={base}>{props.children}</span>;
	}
	return (
		<button
			type="button"
			aria-pressed={selected}
			className={cn(base, !selected && 'hover:text-ink')}
			{...props}
		/>
	);
}
