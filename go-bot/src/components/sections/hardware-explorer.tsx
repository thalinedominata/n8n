'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container, SectionHeading, Card } from '@/components/ui';
import { GoBot } from '@/components/gobot';
import { Reveal } from '@/components/motion/reveal';
import { hardwareModules } from '@/data/hardware';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

/**
 * Interactive hardware explorer: hotspots on the Go-Bot figure reveal each
 * subsystem's specs. Go-Bot himself stays alive while being inspected.
 */
export function HardwareExplorer() {
	const [activeId, setActiveId] = useState(hardwareModules[0]?.id ?? '');
	const active = hardwareModules.find((module) => module.id === activeId) ?? hardwareModules[0];

	return (
		<section id="hardware" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Hardware Explorer"
					title="Engineered to be gentle. Built to be everywhere."
					description="Tap a point on Go-Bot to explore the subsystem underneath his friendly shell."
				/>

				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Figure with hotspots */}
					<Reveal className="relative mx-auto w-fit">
						<GoBot size={300} label="Go-Bot hardware figure" />
						{hardwareModules.map((module) => (
							<button
								key={module.id}
								type="button"
								onClick={() => setActiveId(module.id)}
								aria-pressed={module.id === activeId}
								aria-label={`Explore ${module.name}`}
								className={cn(
									'absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border-2 transition-all duration-(--duration-fast) ease-(--ease-out-soft)',
									module.id === activeId
										? 'scale-110 border-gobot-500 bg-gobot-500 shadow-glow'
										: 'border-gobot-300 bg-surface/90 hover:scale-110 hover:border-gobot-500',
								)}
								style={{ left: `${module.hotspot.x}%`, top: `${module.hotspot.y}%` }}
							>
								<span
									className={cn(
										'h-2 w-2 rounded-pill',
										module.id === activeId ? 'bg-white' : 'animate-pulse-soft bg-gobot-500',
									)}
								/>
							</button>
						))}
					</Reveal>

					{/* Active module detail */}
					<div className="min-h-72">
						<AnimatePresence mode="wait">
							{active ? (
								<motion.div
									key={active.id}
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -12 }}
									transition={{ duration: duration.base, ease: ease.outExpo }}
								>
									<Card>
										<h3 className="text-title font-semibold">{active.name}</h3>
										<p className="mt-3 text-body text-ink-secondary">{active.description}</p>
										<dl className="mt-6 divide-y divide-border-subtle">
											{active.specs.map((spec) => (
												<div key={spec.label} className="flex items-center justify-between py-3">
													<dt className="text-caption text-ink-secondary">{spec.label}</dt>
													<dd className="text-caption font-semibold">{spec.value}</dd>
												</div>
											))}
										</dl>
									</Card>
								</motion.div>
							) : null}
						</AnimatePresence>

						{/* Module quick-nav */}
						<nav className="mt-6 flex flex-wrap gap-2" aria-label="Hardware modules">
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
				</div>
			</Container>
		</section>
	);
}
