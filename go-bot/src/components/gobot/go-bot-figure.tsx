'use client';

import Image from 'next/image';
import { useReducedMotion } from 'motion/react';
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
	front: { src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_001153_576f5f61-fb37-4a51-9c2b-1196e71f9eba.png', width: 1000, height: 764 },
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
	const reduceMotion = useReducedMotion();
	const chrome = bare
		? ''
		: 'overflow-hidden rounded-2xl border border-border-subtle bg-surface-sunken shadow-e3';

	if (media === 'film') {
		return (
			<div className={cn(chrome, className)}>
				{/* Honors prefers-reduced-motion: the poster frame holds instead of looping */}
				<video
					src="/assets/video/go-bot-wave.mp4"
					poster="https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_001208_6d1b9633-b599-4412-8f82-0e18f8066ced.png"
					autoPlay={!reduceMotion}
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
				alt={media === 'front' ? 'Go-Bot, front view' : 'Go-Bot, rear view showing the human carry straps'}
				priority={priority}
				className="h-full w-full object-cover"
			/>
		</div>
	);
}
