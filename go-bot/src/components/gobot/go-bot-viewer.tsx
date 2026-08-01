'use client';

import { useEffect, useState } from 'react';
import { GOBOT_MODEL_URL } from './go-bot-model.constants';
import { cn } from '@/lib/utils';

/**
 * Interactive 3D Go-Bot — the AI-reconstructed hero mesh of the real
 * prototype (see go-bot-model.constants.ts for asset provenance), staged
 * with a next-gen rendering pipeline:
 *
 *  - Neutral studio environment lighting (image-based lighting)
 *  - ACES filmic tone mapping — the color pipeline console titles use
 *  - Soft grounded contact shadow
 *  - Slow auto-orbit; drag to inspect, scroll disabled from hijacking
 *
 * The engine (@google/model-viewer) loads lazily on mount so it never
 * enters the initial bundle; the front render poster shows until the
 * mesh streams in.
 */
export function GoBotViewer({ className }: { className?: string }) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let cancelled = false;
		import('@google/model-viewer').then(() => {
			if (!cancelled) setReady(true);
		});
		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<div className={cn('relative', className)}>
			{ready ? (
				<model-viewer
					src={GOBOT_MODEL_URL}
					poster="/assets/gobot/go-bot-front.jpg"
					alt="Interactive 3D model of Go-Bot"
					camera-controls
					auto-rotate
					auto-rotate-delay="2500"
					rotation-per-second="12deg"
					shadow-intensity="1"
					shadow-softness="0.9"
					environment-image="neutral"
					tone-mapping="aces"
					exposure="0.95"
					camera-orbit="12deg 82deg 105%"
					field-of-view="26deg"
					interaction-prompt="none"
					style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
				/>
			) : (
				/* Poster stands in while the engine chunk loads */
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src="/assets/gobot/go-bot-front.jpg"
					alt="Go-Bot, front view"
					className="h-full w-full object-contain"
				/>
			)}
		</div>
	);
}
