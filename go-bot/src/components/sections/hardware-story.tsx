'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Container, Chip } from '@/components/ui';
import { GoBotFigure } from '@/components/gobot';
import { hardwareModules } from '@/data/hardware';
import { hardwareStory } from '@/data/hardware-story';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const modulesById = new Map(hardwareModules.map((module) => [module.id, module]));

/** Scroll distance per beat, as a fraction of the viewport height. */
const SCROLL_PER_STEP = 0.7;

/**
 * The guided tour — a pinned, scroll-scrubbed walk through Go-Bot's
 * anatomy. The section pins to the viewport and scrolling advances the
 * beats in `hardwareStory`: the highlight ring moves across the real
 * prototype renders (flipping to the back for the finale) while the spec
 * card narrates. Lenis drives native scroll, so ScrollTrigger tracks it
 * without extra wiring.
 *
 * With reduced motion (or before hydration) nothing pins — the beats
 * become a clickable rail instead, so the content is never gated on the
 * scroll effect.
 */
export function HardwareStory() {
	const sectionRef = useRef<HTMLElement>(null);
	const [active, setActive] = useState(0);
	const [pinned, setPinned] = useState(false);

	useGSAP(
		() => {
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
			const section = sectionRef.current;
			if (!section) return;

			setPinned(true);
			const steps = hardwareStory.length;
			ScrollTrigger.create({
				trigger: section,
				start: 'top top',
				end: `+=${Math.round(steps * SCROLL_PER_STEP * 100)}%`,
				pin: true,
				anticipatePin: 1,
				onUpdate: (self) => {
					setActive(Math.min(steps - 1, Math.floor(self.progress * steps)));
				},
			});
		},
		{ scope: sectionRef },
	);

	const step = hardwareStory[active] ?? hardwareStory[0];
	if (!step) return null;
	const module = modulesById.get(step.moduleId);
	if (!module) return null;

	return (
		<section
			id="hardware-story"
			ref={sectionRef}
			className="flex min-h-svh flex-col justify-center overflow-hidden bg-surface py-14"
		>
			<Container>
				<div className="mb-8 text-center">
					<p className="text-overline text-gobot-500">The Guided Tour</p>
					<h2 className="mt-3 text-headline font-semibold">
						{pinned ? 'Keep scrolling — he explains himself.' : 'Walk the anatomy, beat by beat.'}
					</h2>
				</div>

				<div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					{/* The figure: front/back renders stacked, crossfading per beat */}
					<div className="relative mx-auto w-full max-w-sm">
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
								className="absolute z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gobot-500 bg-gobot-500/20 transition-all duration-500"
								style={{ left: `${step.x}%`, top: `${step.y}%` }}
							>
								<span className="absolute inset-0 animate-ping rounded-full border border-gobot-500" />
							</span>
						</div>
					</div>

					{/* The narration card */}
					<div>
						<p className="text-overline text-ink-tertiary">
							{String(active + 1).padStart(2, '0')} / {String(hardwareStory.length).padStart(2, '0')}
							{' · '}
							{step.view === 'front' ? 'Front' : 'Back'}
						</p>
						<h3 className="mt-3 text-title font-semibold">{module.name}</h3>
						<p className="mt-3 max-w-xl text-body-lg text-ink-secondary">{module.description}</p>
						<p className="mt-4 max-w-xl text-body italic text-gobot-600">{step.line}</p>

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

						{/* Beat rail — indicators while pinned, navigation when not */}
						<div className="mt-8 flex flex-wrap gap-2">
							{hardwareStory.map((beat, index) => (
								<Chip
									key={beat.moduleId}
									selected={index === active}
									readOnly={pinned}
									onClick={() => setActive(index)}
								>
									{String(index + 1).padStart(2, '0')}
								</Chip>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
