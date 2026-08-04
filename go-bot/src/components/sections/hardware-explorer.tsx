'use client';

import { useState } from 'react';
import { Container, SectionHeading, Modal, Chip } from '@/components/ui';
import { GoBotFigure } from '@/components/gobot';
import { Reveal } from '@/components/motion/reveal';
import { hardwareModules } from '@/data/hardware';
import { cn } from '@/lib/utils';

type FigureView = 'front' | 'back';

/**
 * Hotspot placement on the real prototype renders, per module, as percent
 * of the cropped photo (go-bot-front.jpg / go-bot-back.jpg). Rear-mounted
 * modules live on the back view; selecting one switches the figure.
 */
const PHOTO_HOTSPOTS: Record<string, { view: FigureView; x: number; y: number }> = {
	head: { view: 'front', x: 47, y: 14 },
	eyes: { view: 'front', x: 54, y: 23 },
	display: { view: 'front', x: 46, y: 27 },
	speakers: { view: 'front', x: 61, y: 30 },
	chest: { view: 'front', x: 53, y: 39 },
	camera: { view: 'front', x: 54, y: 46 },
	cpu: { view: 'front', x: 46, y: 55 },
	arms: { view: 'front', x: 37, y: 51 },
	hands: { view: 'front', x: 63, y: 66 },
	legs: { view: 'front', x: 46, y: 74 },
	feet: { view: 'front', x: 58, y: 85 },
	backpack: { view: 'back', x: 42, y: 42 },
	cooling: { view: 'back', x: 50, y: 50 },
	battery: { view: 'back', x: 59, y: 55 },
	charging: { view: 'back', x: 50, y: 57 },
	expansion: { view: 'back', x: 58, y: 45 },
	sensors: { view: 'back', x: 50, y: 70 },
};

/**
 * Go-Bot anatomy explorer on the real prototype renders. Front/back views
 * carry their own hotspots; every part opens a spec modal.
 */
export function HardwareExplorer() {
	const [view, setView] = useState<FigureView>('front');
	const [activeId, setActiveId] = useState<string | null>(null);
	const active = hardwareModules.find((module) => module.id === activeId) ?? null;

	const open = (id: string) => {
		const spot = PHOTO_HOTSPOTS[id];
		if (spot) setView(spot.view);
		setActiveId(id);
	};

	return (
		<section id="hardware" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Hardware Explorer"
					title="Engineered to be gentle. Built to be everywhere."
					description="Tap the anatomy. Flip him around. Yes, you can wear him."
				/>

				<div className="mb-8 flex justify-center gap-2">
					<Chip selected={view === 'front'} onClick={() => setView('front')}>Front</Chip>
					<Chip selected={view === 'back'} onClick={() => setView('back')}>Back</Chip>
				</div>

				<div className="flex flex-col items-center gap-10">
					<Reveal className="relative mx-auto w-full max-w-md">
						<GoBotFigure media={view} className="w-full" />
						{hardwareModules.map((module) => {
							const spot = PHOTO_HOTSPOTS[module.id];
							if (!spot || spot.view !== view) return null;
							return (
								<button
									key={module.id}
									type="button"
									onClick={() => open(module.id)}
									aria-label={`Explore ${module.name}`}
									className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border-2 border-gobot-300 before:absolute before:-inset-2.5 before:content-[''] bg-surface/90 transition-[transform,border-color,box-shadow] duration-(--duration-fast) ease-(--ease-out-soft) hover:scale-110 hover:border-gobot-500 hover:shadow-glow"
									style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
								>
									<span className="h-2 w-2 animate-pulse-soft rounded-pill bg-gobot-500" />
								</button>
							);
						})}
					</Reveal>

					<nav className="flex max-w-3xl flex-wrap justify-center gap-2" aria-label="Hardware modules">
						{hardwareModules.map((module) => (
							<button
								key={module.id}
								type="button"
								onClick={() => open(module.id)}
								className={cn(
									'rounded-pill px-4 py-1.5 text-caption font-medium transition-colors duration-(--duration-fast)',
									module.id === activeId
										? 'bg-ink text-ink-inverse'
										: 'bg-surface-sunken text-ink-secondary hover:text-ink',
								)}
							>
								{module.name}
							</button>
						))}
					</nav>
				</div>

				<Modal open={active !== null} onClose={() => setActiveId(null)} title={active?.name ?? ''}>
					{active ? (
						<>
							<p className="text-body text-ink-secondary">
								{active.description}
								{active.accent ? (
									<>
										{' '}
										<strong className="font-bold text-gobot-600">{active.accent}</strong>
									</>
								) : null}
							</p>
							<dl className="mt-6 divide-y divide-border-subtle">
								{active.specs.map((spec) => (
									<div key={spec.label} className="flex items-center justify-between py-3">
										<dt className="text-caption text-ink-secondary">{spec.label}</dt>
										<dd className="text-caption font-semibold">{spec.value}</dd>
									</div>
								))}
							</dl>
						</>
					) : null}
				</Modal>
			</Container>
		</section>
	);
}
