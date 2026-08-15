import { cn } from '@/lib/utils';

export interface MarqueeProps {
	/** Statements to scroll; each is separated by an orange dot. */
	items: string[];
	className?: string;
}

/**
 * Kinetic brand ribbon — bold orange statements scrolling across a black
 * band. The track holds two copies of the list (the second aria-hidden)
 * and translates by half its width, so the loop is seamless. Motion
 * collapses to a static frame under prefers-reduced-motion.
 */
export function Marquee({ items, className }: MarqueeProps) {
	return (
		<div aria-label={items.join('. ')} className={cn('overflow-hidden bg-ink py-5', className)}>
			<div className="flex w-max animate-marquee">
				{[0, 1].map((copy) => (
					<ul key={copy} aria-hidden={copy === 1 || undefined} className="flex items-center">
						{items.map((item) => (
							<li
								key={item}
								className="flex items-center whitespace-nowrap text-title font-bold uppercase tracking-tight text-gobot-500"
							>
								<span className="px-8">{item}</span>
								<span aria-hidden className="h-2 w-2 rounded-full bg-gobot-500/70" />
							</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
}
