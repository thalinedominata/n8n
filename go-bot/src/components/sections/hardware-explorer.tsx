'use client';

import { useState } from 'react';
import { Container, SectionHeading, Modal } from '@/components/ui';
import { GoBot } from '@/components/gobot';
import { Reveal } from '@/components/motion/reveal';
import { hardwareModules } from '@/data/hardware';
import { cn } from '@/lib/utils';

/**
 * Go-Bot anatomy explorer: hotspots on the living figure open a modal with
 * each subsystem's story and specs.
 */
export function HardwareExplorer() {
	const [activeId, setActiveId] = useState<string | null>(null);
	const active = hardwareModules.find((module) => module.id === activeId) ?? null;

	return (
		<section id="hardware" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Hardware Explorer"
					title="Engineered to be gentle. Built to be everywhere."
					description="Tap a point on Go-Bot to explore the anatomy underneath his friendly shell — from the glowing visor to the wearable backpack."
				/>

				<div className="flex flex-col items-center gap-10">
					{/* Figure with hotspots */}
					<Reveal className="relative mx-auto w-fit">
						<GoBot size={320} label="Go-Bot hardware figure" />
						{hardwareModules.map((module) => (
							<button
								key={module.id}
								type="button"
								onClick={() => setActiveId(module.id)}
								aria-label={`Explore ${module.name}`}
								className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border-2 border-gobot-300 bg-surface/90 transition-all duration-(--duration-fast) ease-(--ease-out-soft) hover:scale-110 hover:border-gobot-500 hover:shadow-glow"
								style={{ left: `${module.hotspot.x}%`, top: `${module.hotspot.y}%` }}
							>
								<span className="h-2 w-2 animate-pulse-soft rounded-pill bg-gobot-500" />
							</button>
						))}
					</Reveal>

					{/* Module quick-nav */}
					<nav className="flex max-w-3xl flex-wrap justify-center gap-2" aria-label="Hardware modules">
						{hardwareModules.map((module) => (
							<button
								key={module.id}
								type="button"
								onClick={() => setActiveId(module.id)}
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

				{/* Subsystem modal */}
				<Modal open={active !== null} onClose={() => setActiveId(null)} title={active?.name ?? ''}>
					{active ? (
						<>
							<p className="text-body text-ink-secondary">{active.description}</p>
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
