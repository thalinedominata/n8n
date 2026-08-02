'use client';

import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

export interface ModalProps {
	open: boolean;
	onClose: () => void;
	/** Accessible title rendered in the modal header. */
	title: string;
	children: ReactNode;
	className?: string;
}

/**
 * Centered dialog with a blurred backdrop. Closes on backdrop click and
 * Escape; locks page scroll while open.
 */
export function Modal({ open, onClose, title, children, className }: ModalProps) {
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
					className="fixed inset-0 z-100 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-label={title}
						initial={{ opacity: 0, scale: 0.94, y: 16 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96, y: 12 }}
						transition={{ duration: duration.base, ease: ease.outExpo }}
						onClick={(event) => event.stopPropagation()}
						className={cn(
							'max-h-[85svh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-2xl bg-surface p-8 shadow-e4',
							className,
						)}
					>
						<div className="flex items-start justify-between gap-4">
							<h3 className="text-title font-semibold">{title}</h3>
							<button
								type="button"
								onClick={onClose}
								aria-label="Close dialog"
								className="-m-1 rounded-pill p-2.5 text-ink-tertiary transition-colors duration-(--duration-fast) hover:bg-surface-sunken hover:text-ink"
							>
								<X className="h-5 w-5" />
							</button>
						</div>
						<div className="mt-4">{children}</div>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
