'use client';

import { Container, SectionHeading, Card } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { architectureLayers } from '@/data/architecture';

/** The four-layer Go-Bot platform architecture. */
export function Architecture() {
	return (
		<section id="architecture" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Platform"
					title="Four layers. One companion."
					description="Go-Bot is a full-stack platform — intelligence, embodiment, connection, and trust engineered as one system."
				/>

				<RevealGroup className="grid gap-6 md:grid-cols-2">
					{architectureLayers.map((layer, index) => (
						<RevealItem key={layer.id}>
							<Card className="group h-full">
								<div className="flex items-start justify-between">
									<span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gobot-50 transition-colors duration-(--duration-base) group-hover:bg-gobot-100">
										<layer.icon className="h-6 w-6 text-gobot-600" aria-hidden />
									</span>
									<span className="font-mono text-overline text-ink-tertiary">
										0{index + 1}
									</span>
								</div>
								<h3 className="mt-5 text-title font-semibold">{layer.name}</h3>
								<p className="mt-2 text-caption text-ink-secondary">{layer.description}</p>
								<ul className="mt-5 flex flex-wrap gap-2">
									{layer.technologies.map((technology) => (
										<li
											key={technology}
											className="rounded-pill bg-surface-sunken px-3 py-1 text-overline text-ink-secondary"
										>
											{technology}
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
