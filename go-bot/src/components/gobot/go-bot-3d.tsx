'use client';

import dynamic from 'next/dynamic';
import { GoBot } from './go-bot';
import type { GoBotMood } from './go-bot.moods';

/**
 * Lazy 3D Go-Bot. three.js (~hundreds of KB) loads only when this
 * component actually mounts; until then the SVG character stands in, so
 * Go-Bot is never absent and the initial bundle never pays for 3D.
 */
const LazyCanvas = dynamic(
	() => import('@/three/go-bot-canvas').then((module) => module.GoBotCanvas),
	{
		ssr: false,
		loading: () => (
			<div className="flex h-full w-full items-center justify-center">
				<GoBot size={220} label="Go-Bot, warming up his third dimension" />
			</div>
		),
	},
);

export interface GoBot3DProps {
	mood?: GoBotMood;
	className?: string;
}

export function GoBot3D({ mood = 'idle', className }: GoBot3DProps) {
	return (
		<div className={className}>
			<LazyCanvas mood={mood} />
		</div>
	);
}
