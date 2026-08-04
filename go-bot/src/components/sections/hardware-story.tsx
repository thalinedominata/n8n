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
 * Previous/Next (and the beat rail) dock under the section heading and
 * advance the beats in `hardwareStory`: the highlight ring glides across
 * the real prototype renders, flipping to the back view for the finale,
 * while a popup card next to the ring narrates the stop. On smaller
 * screens the popup docks right under the figure so the story never
 * lands below the fold. The page itself never hijacks scroll.
 */
export function HardwareStory() {
	const [active, setActive] = useState(0);

	const step = hardwareStory[active] ?? hardwareStory[0];
	if (!step) return null;
	const module = modulesById.get(step.moduleId);
	if (!module) return null;

	const last = hardwareStory.length - 1;
	// Popup sits beside the ring, flipped to whichever side has room, and
	// vertically clamped so it stays over the figure.
	const popupOnLeft = step.x >= 50;
	const popupTop = `${Math.min(68, Math.max(24, step.y))}%`;

	const narration = (
		<>
			<p className="text-overline text-ink-tertiary">
				{String(active + 1).padStart(2, '0')} / {String(hardwareStory.length).padStart(2, '0')}
				{' · '}
				{step.view === 'front' ? 'Front' : 'Back'}
			</p>
			<h3 className="mt-2 text-title font-semibold">{module.name}</h3>
			<p className="mt-2 text-body text-ink-secondary">
				{module.description}
				{module.accent ? (
					<>
						{' '}
						<strong className="font-bold text-gobot-600">{module.accent}</strong>
					</>
				) : null}
			</p>
			{step.line ? <p className="mt-3 text-body font-bold italic text-gobot-700">{step.line}</p> : null}

			<dl className="mt-4 grid grid-cols-2 gap-2">
				{module.specs.slice(0, 4).map((spec) => (
					<div
						key={spec.label}
						className="rounded-xl border border-border-subtle bg-surface-warm px-3 py-2"
					>
						<dt className="text-caption text-ink-tertiary">{spec.label}</dt>
						<dd className="mt-0.5 text-body font-medium">{spec.value}</dd>
					</div>
				))}
			</dl>
		</>
	);

	return (
		<section id="hardware-story" className="overflow-hidden bg-surface py-14">
			<Container>
				<SectionHeading
					eyebrow="The Guided Tour"
					title="Walk the anatomy, beat by beat."
					description="Eight stops through what he's made of."
					className="mb-3 gap-2"
				/>

				{/* Controls dock right under the heading: previous/next + jump-anywhere beat rail */}
				<div className="mb-4 flex flex-wrap items-center justify-center gap-2">
					<div className="flex gap-1.5">
						<Button
							variant="outline"
							size="sm"
							onClick={() => setActive(Math.max(0, active - 1))}
							disabled={active === 0}
							aria-label="Previous stop"
						>
							<ChevronLeft className="h-3.5 w-3.5" aria-hidden />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => setActive(Math.min(last, active + 1))}
							disabled={active === last}
							aria-label="Next stop"
						>
							<ChevronRight className="h-3.5 w-3.5" aria-hidden />
						</Button>
					</div>
					<div className="flex flex-wrap justify-center gap-1.5">
						{hardwareStory.map((beat, index) => (
							<Chip
								key={beat.moduleId}
								selected={index === active}
								onClick={() => setActive(index)}
								className="px-2.5 py-1"
							>
								{String(index + 1).padStart(2, '0')}
							</Chip>
						))}
					</div>
				</div>

				<Reveal className="relative mx-auto w-full max-w-sm">
					<div className="relative">
						{/* The figure: front/back renders stacked, crossfading per beat */}
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

						{/* The popup narration card, anchored beside the ring (large screens) */}
						<div
							key={active}
							role="status"
							className={cn(
								'animate-pop-in pointer-events-none absolute z-20 hidden w-80 rounded-2xl border border-border-subtle bg-surface p-5 shadow-e3 lg:block',
							)}
							style={
								popupOnLeft
									? { right: `calc(${100 - step.x}% + 2.5rem)`, top: popupTop }
									: { left: `calc(${step.x}% + 2.5rem)`, top: popupTop }
							}
						>
							{narration}
						</div>
					</div>

					{/* Below lg the popup docks here, right under the figure */}
					<div
						key={`flow-${active}`}
						role="status"
						className="animate-pop-in-flow mt-6 rounded-2xl border border-border-subtle bg-surface p-5 shadow-e3 lg:hidden"
					>
						{narration}
					</div>
				</Reveal>
			</Container>
		</section>
	);
}
