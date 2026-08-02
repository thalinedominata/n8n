'use client';

import { useRef, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CarouselProps {
	children: ReactNode;
	/** Accessible label for the scroll region. */
	label: string;
	className?: string;
}

/**
 * Horizontal scroll-snap carousel with previous/next controls. Children
 * define their own widths (e.g. `w-80 shrink-0 snap-start`).
 */
export function Carousel({ children, label, className }: CarouselProps) {
	const trackRef = useRef<HTMLDivElement>(null);

	const scrollBy = (direction: 1 | -1) => {
		const track = trackRef.current;
		if (!track) return;
		track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
	};

	return (
		<div className={cn('relative', className)}>
			<div
				ref={trackRef}
				role="region"
				aria-label={label}
				tabIndex={0}
				className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				{children}
			</div>
			<div className="mt-4 flex justify-end gap-2">
				<button
					type="button"
					onClick={() => scrollBy(-1)}
					aria-label="Previous"
					className="rounded-pill border border-border-strong p-3 text-ink-secondary transition-[border-color,color] duration-(--duration-fast) hover:border-ink hover:text-ink"
				>
					<ChevronLeft className="h-4 w-4" />
				</button>
				<button
					type="button"
					onClick={() => scrollBy(1)}
					aria-label="Next"
					className="rounded-pill border border-border-strong p-3 text-ink-secondary transition-[border-color,color] duration-(--duration-fast) hover:border-ink hover:text-ink"
				>
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
