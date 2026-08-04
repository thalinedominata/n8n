'use client';

import { Container, SectionHeading, Badge, Card } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { roadmap } from '@/data/roadmap';
import { cn } from '@/lib/utils';

const statusLabel: Record<string, string> = {
	shipped: 'Shipped',
	active: 'In progress',
	planned: 'Planned',
};

/** Timeline of the Go-Bot platform roadmap. */
export function Roadmap() {
	return (
		<section id="roadmap" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Roadmap"
					title="Built for the next decade."
					description="Version 1 is the foundation. Here's where Go-Bot goes from here."
				/>

				<RevealGroup className="relative grid gap-8 lg:grid-cols-4">
					{/* Connecting line (desktop) */}
					<div
						aria-hidden
						className="absolute left-0 right-0 top-5 hidden h-px bg-border-strong lg:block"
					/>

					{roadmap.map((phase) => (
						<RevealItem key={phase.id} className="relative">
							<div
								className={cn(
									'relative z-10 mb-6 hidden h-10 w-10 items-center justify-center rounded-pill border-2 bg-surface lg:flex',
									phase.status === 'active'
										? 'border-gobot-500 shadow-glow'
										: 'border-border-strong',
								)}
							>
								<span
									className={cn(
										'h-3 w-3 rounded-pill',
										phase.status === 'active' ? 'animate-pulse-soft bg-gobot-500' : 'bg-border-strong',
									)}
								/>
							</div>

							<Card
								variant={phase.status === 'active' ? 'elevated' : 'outlined'}
								padding="md"
								className="h-full"
							>
								<div className="flex items-center justify-between gap-2">
									<Badge variant={phase.status === 'active' ? 'orange' : 'neutral'}>
										{statusLabel[phase.status]}
									</Badge>
									<span className="text-overline text-ink-tertiary">{phase.period}</span>
								</div>
								<h3 className="mt-4 text-title font-semibold">{phase.title}</h3>
								<ul className="mt-4 flex flex-col gap-2">
									{phase.highlights.map((highlight) => (
										<li key={highlight} className="flex gap-2 text-caption text-ink-secondary">
											<span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill bg-gobot-400" />
											{highlight}
										</li>
									))}
								</ul>
							</Card>
						</RevealItem>
					))}
				</RevealGroup>
			</Container>
		</section>
	);
}
