'use client';

import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

export interface DrawerProps {
	open: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
	className?: string;
}

/**
 * Right-side slide-over panel for rich detail views. Closes on backdrop
 * click and Escape; locks page scroll while open.
 */
export function Drawer({ open, onClose, title, children, className }: DrawerProps) {
	useEffect(() => {
		if (!open) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = previousOverflow;
		};
	}, [open, onClose]);

	return (
		<AnimatePresence>
			{open ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: duration.fast }}
					className="fixed inset-0 z-100 bg-ink/30 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.aside
						role="dialog"
						aria-modal="true"
						aria-label={title}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: duration.slow, ease: ease.outExpo }}
						onClick={(event) => event.stopPropagation()}
						className={cn(
							'absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-surface shadow-e4',
							className,
						)}
					>
						<div className="flex items-start justify-between gap-4 border-b border-border-subtle p-6">
							<h3 className="text-title font-semibold">{title}</h3>
							<button
								type="button"
								onClick={onClose}
								aria-label="Close panel"
								className="rounded-pill p-1.5 text-ink-tertiary transition-colors duration-(--duration-fast) hover:bg-surface-sunken hover:text-ink"
							>
								<X className="h-5 w-5" />
							</button>
						</div>
						<div className="flex-1 overflow-y-auto p-6">{children}</div>
					</motion.aside>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
