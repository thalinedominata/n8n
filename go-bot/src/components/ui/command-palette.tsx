'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { Search } from 'lucide-react';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';
import type { CommandItem } from '@/types';

export interface CommandPaletteProps {
	items: CommandItem[];
}

/** Event name the navbar (or anything else) dispatches to open the palette. */
export const OPEN_COMMAND_PALETTE_EVENT = 'gxp:open-command-palette';

/**
 * Global ⌘K / Ctrl+K command palette. Mounted once in the root layout;
 * searches everything the platform knows about (sections, domains,
 * industries, capabilities) and navigates on selection.
 */
export function CommandPalette({ items }: CommandPaletteProps) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [highlighted, setHighlighted] = useState(0);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				setOpen((current) => !current);
			}
			if (event.key === 'Escape') setOpen(false);
		};
		const onOpenEvent = () => setOpen(true);
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, onOpenEvent);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, onOpenEvent);
		};
	}, []);

	useEffect(() => {
		if (!open) {
			setQuery('');
			setHighlighted(0);
		}
	}, [open]);

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		const matches = q
			? items.filter((item) =>
					`${item.label} ${item.group} ${item.keywords ?? ''}`.toLowerCase().includes(q),
				)
			: items;
		return matches.slice(0, 12);
	}, [items, query]);

	const select = (item: CommandItem) => {
		setOpen(false);
		router.push(item.href);
	};

	return (
		<AnimatePresence>
			{open ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: duration.fast }}
					className="fixed inset-0 z-100 flex items-start justify-center bg-ink/30 px-4 pt-[15vh] backdrop-blur-sm"
					onClick={() => setOpen(false)}
				>
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-label="Search Go-Bot"
						initial={{ opacity: 0, scale: 0.96, y: -12 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.97, y: -8 }}
						transition={{ duration: duration.base, ease: ease.outExpo }}
						onClick={(event) => event.stopPropagation()}
						className="w-full max-w-xl overflow-hidden rounded-2xl bg-surface shadow-e4"
					>
						<div className="flex items-center gap-3 border-b border-border-subtle px-5">
							<Search className="h-4 w-4 text-ink-tertiary" aria-hidden />
							<input
								autoFocus
								value={query}
								onChange={(event) => {
									setQuery(event.target.value);
									setHighlighted(0);
								}}
								onKeyDown={(event) => {
									if (event.key === 'ArrowDown') {
										event.preventDefault();
										setHighlighted((h) => Math.min(h + 1, results.length - 1));
									}
									if (event.key === 'ArrowUp') {
										event.preventDefault();
										setHighlighted((h) => Math.max(h - 1, 0));
									}
									if (event.key === 'Enter') {
										const item = results[highlighted];
										if (item) select(item);
									}
								}}
								placeholder="Search domains, industries, capabilities…"
								aria-label="Search"
								className="h-13 flex-1 bg-transparent text-body outline-none placeholder:text-ink-tertiary"
							/>
							<kbd className="rounded-md bg-surface-sunken px-2 py-1 text-overline text-ink-tertiary">esc</kbd>
						</div>
						<ul className="max-h-80 overflow-y-auto p-2" role="listbox">
							{results.length === 0 ? (
								<li className="px-4 py-8 text-center text-caption text-ink-tertiary">
									Go-Bot searched everywhere — nothing matches “{query}”.
								</li>
							) : (
								results.map((item, index) => (
									<li key={item.id} role="option" aria-selected={index === highlighted}>
										<button
											type="button"
											onClick={() => select(item)}
											onMouseEnter={() => setHighlighted(index)}
											className={cn(
												'flex w-full items-center justify-between gap-4 rounded-lg px-4 py-2.5 text-left text-caption',
												index === highlighted ? 'bg-gobot-50 text-ink' : 'text-ink-secondary',
											)}
										>
											<span className="font-medium">{item.label}</span>
											<span className="text-overline text-ink-tertiary">{item.group}</span>
										</button>
									</li>
								))
							)}
						</ul>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
