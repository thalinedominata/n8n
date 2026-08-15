'use client';

import { useId, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { spring } from '@/animations/tokens';
import { cn } from '@/lib/utils';

export interface TabItem {
	id: string;
	label: string;
	content: ReactNode;
}

export interface TabsProps {
	items: TabItem[];
	className?: string;
}

/** Accessible tabs with a sliding active indicator. */
export function Tabs({ items, className }: TabsProps) {
	const groupId = useId();
	const [activeId, setActiveId] = useState(items[0]?.id ?? '');
	const active = items.find((item) => item.id === activeId) ?? items[0];

	return (
		<div className={className}>
			<div role="tablist" className="flex flex-wrap gap-1 rounded-pill bg-surface-sunken p-1">
				{items.map((item) => (
					<button
						key={item.id}
						type="button"
						role="tab"
						id={`${groupId}-tab-${item.id}`}
						aria-selected={item.id === activeId}
						aria-controls={`${groupId}-panel-${item.id}`}
						onClick={() => setActiveId(item.id)}
						className={cn(
							'relative rounded-pill px-4 py-1.5 text-caption font-medium transition-colors duration-(--duration-fast)',
							item.id === activeId ? 'text-ink' : 'text-ink-secondary hover:text-ink',
						)}
					>
						{item.id === activeId ? (
							<motion.span
								layoutId={`${groupId}-indicator`}
								transition={spring.snappy}
								className="absolute inset-0 rounded-pill bg-surface shadow-e1"
							/>
						) : null}
						<span className="relative">{item.label}</span>
					</button>
				))}
			</div>
			{active ? (
				<div
					role="tabpanel"
					id={`${groupId}-panel-${active.id}`}
					aria-labelledby={`${groupId}-tab-${active.id}`}
					className="mt-6"
				>
					{active.content}
				</div>
			) : null}
		</div>
	);
}
