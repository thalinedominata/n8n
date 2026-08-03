'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, Chip, Button, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { GoBotFigure } from '@/components/gobot';
import { hardwareModules } from '@/data/hardware';
import { hardwareStory } from '@/data/hardware-story';
import { cn } from '@/lib/utils';

const modulesById = new Map(hardwareModules.map((module) => [module.id, module]));

/**
 * The guided tour — a button-driven walk through Go-Bot's anatomy.
 * Previous/Next (and the beat rail) advance the beats in `hardwareStory`:
 * the highlight ring glides across the real prototype renders, flipping
 * to the back view for the finale, while the spec card narrates. The
 * page itself never hijacks scroll.
 */
export function HardwareStory() {
	const [active, setActive] = useState(0);

	const step = hardwareStory[active] ?? hardwareStory[0];
	if (!step) return null;
	const module = modulesById.get(step.moduleId);
	if (!module) return null;

	const last = hardwareStory.length - 1;

	return (
		<section id="hardware-story" className="overflow-hidden bg-surface py-28">
			<Container>
				<SectionHeading
					eyebrow="The Guided Tour"
					title="Walk the anatomy, beat by beat."
					description="Eight stops through what he's made of."
				/>

				<div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					{/* The figure: front/back renders stacked, crossfading per beat */}
					<Reveal className="relative mx-auto w-full max-w-sm">
						<div className="relative">
							<GoBotFigure
								media="front"
								className={cn(
									'w-full transition-opacity duration-500',
									step.view === 'front' ? 'opacity-100' : 'opacity-0',
								)}
							/>
							<GoBotFigure
								media="back"
								className={cn(
									'absolute inset-0 w-full transition-opacity duration-500',
									step.view === 'back' ? 'opacity-100' : 'opacity-0',
								)}
							/>

							{/* Highlight ring riding the active hotspot */}
							<span
								aria-hidden
								className="absolute z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gobot-500 bg-gobot-500/20 transition-[left,top,opacity] duration-500"
								style={{ left: `${step.x}%`, top: `${step.y}%` }}
							>
								<span className="absolute inset-0 animate-ping rounded-full border border-gobot-500" />
							</span>
						</div>

						{/* Controls live right under the figure: previous/next + jump-anywhere beat rail */}
						<div className="mt-6 flex flex-wrap items-center justify-center gap-4">
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => setActive(Math.max(0, active - 1))}
									disabled={active === 0}
									aria-label="Previous stop"
								>
									<ChevronLeft className="h-4 w-4" aria-hidden />
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setActive(Math.min(last, active + 1))}
									disabled={active === last}
									aria-label="Next stop"
								>
									<ChevronRight className="h-4 w-4" aria-hidden />
								</Button>
							</div>
							<div className="flex flex-wrap justify-center gap-2">
								{hardwareStory.map((beat, index) => (
									<Chip key={beat.moduleId} selected={index === active} onClick={() => setActive(index)}>
										{String(index + 1).padStart(2, '0')}
									</Chip>
								))}
							</div>
						</div>
					</Reveal>

					{/* The narration card */}
					<Reveal>
						<p className="text-overline text-ink-tertiary">
							{String(active + 1).padStart(2, '0')} / {String(hardwareStory.length).padStart(2, '0')}
							{' · '}
							{step.view === 'front' ? 'Front' : 'Back'}
						</p>
						<h3 className="mt-3 text-title font-semibold">{module.name}</h3>
						<p className="mt-3 max-w-xl text-body-lg text-ink-secondary">{module.description}</p>
						<p className="mt-4 max-w-xl text-body italic text-gobot-700">{step.line}</p>

						<dl className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
							{module.specs.slice(0, 4).map((spec) => (
								<div
									key={spec.label}
									className="rounded-xl border border-border-subtle bg-surface-warm px-4 py-3"
								>
									<dt className="text-caption text-ink-tertiary">{spec.label}</dt>
									<dd className="mt-1 text-body font-medium">{spec.value}</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</Container>
		</section>
	);
}
