import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface GoBotFigureProps {
	/** Which real-media representation to show. */
	media: 'film' | 'front' | 'back';
	className?: string;
	/** Rendered without the card chrome (border/shadow/rounding). */
	bare?: boolean;
	priority?: boolean;
}

const stills = {
	front: { src: '/assets/gobot/go-bot-front.jpg', width: 1000, height: 764 },
	back: { src: '/assets/gobot/go-bot-back.jpg', width: 1000, height: 738 },
} as const;

/**
 * Go-Bot as himself — the 3D-realistic prototype renders and film.
 *
 * This is the DEFAULT representation of Go-Bot on every surface (brand
 * rule: 3D realistic unless otherwise instructed). The vector <GoBot>
 * remains only as a loading fallback / explicitly-requested illustration.
 */
export function GoBotFigure({ media, className, bare = false, priority = false }: GoBotFigureProps) {
	const chrome = bare
		? ''
		: 'overflow-hidden rounded-2xl border border-border-subtle bg-surface-sunken shadow-e3';

	if (media === 'film') {
		return (
			<div className={cn(chrome, className)}>
				<video
					src="/assets/video/go-bot-wave.mp4"
					poster="/assets/video/go-bot-wave-poster.jpg"
					autoPlay
					muted
					loop
					playsInline
					aria-label="Go-Bot waving hello"
					className="h-full w-full object-cover"
				/>
			</div>
		);
	}

	const still = stills[media];
	return (
		<div className={cn(chrome, className)}>
			<Image
				src={still.src}
				width={still.width}
				height={still.height}
				alt={media === 'front' ? 'Go-Bot, front view' : 'Go-Bot, rear view with harness straps and integrated back panel'}
				priority={priority}
				className="h-full w-full object-cover"
			/>
		</div>
	);
}
