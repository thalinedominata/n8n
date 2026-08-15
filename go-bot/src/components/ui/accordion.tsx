'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

export interface AccordionItem {
	id: string;
	title: string;
	content: string;
}

export interface AccordionProps {
	items: AccordionItem[];
	/** Item id expanded initially. */
	defaultOpenId?: string;
	className?: string;
}

/** Single-open accordion with smooth height animation. Used for FAQs. */
export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
	const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

	return (
		<div className={cn('divide-y divide-border-subtle rounded-xl border border-border-subtle bg-surface', className)}>
			{items.map((item) => {
				const open = item.id === openId;
				return (
					<div key={item.id}>
						<button
							type="button"
							aria-expanded={open}
							onClick={() => setOpenId(open ? null : item.id)}
							className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-body font-medium transition-colors duration-(--duration-fast) hover:text-gobot-600"
						>
							{item.title}
							<ChevronDown
								className={cn(
									'h-4 w-4 shrink-0 text-ink-tertiary transition-transform duration-(--duration-base)',
									open && 'rotate-180',
								)}
								aria-hidden
							/>
						</button>
						<AnimatePresence initial={false}>
							{open ? (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: duration.base, ease: ease.outSoft }}
									className="overflow-hidden"
								>
									<p className="px-6 pb-5 text-caption text-ink-secondary">{item.content}</p>
								</motion.div>
							) : null}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
}
