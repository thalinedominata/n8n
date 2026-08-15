'use client';

import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
	/** Tooltip text. */
	content: string;
	children: ReactNode;
	className?: string;
}

/**
 * Lightweight tooltip shown on hover and keyboard focus. CSS-driven — no
 * portal, suitable for short labels; use Modal/Drawer for rich content.
 */
export function Tooltip({ content, children, className }: TooltipProps) {
	const id = useId();
	return (
		<span className={cn('group/tooltip relative inline-flex', className)} aria-describedby={id}>
			{children}
			<span
				id={id}
				role="tooltip"
				className={cn(
					'pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap',
					'rounded-md bg-ink px-2.5 py-1.5 text-overline text-ink-inverse shadow-e2',
					'opacity-0 transition-opacity duration-(--duration-fast)',
					'group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100',
				)}
			>
				{content}
			</span>
		</span>
	);
}
