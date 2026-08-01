'use client';

import { AnimatedCounter, Container, SectionHeading, Card } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { industries } from '@/data/industries';

/** Renders a stat value, counting up its leading number when present. */
function StatValue({ value }: { value: string }) {
	const match = /^(\d+)(.*)$/.exec(value);
	if (!match) return <>{value}</>;
	return <AnimatedCounter value={Number(match[1])} suffix={match[2] ?? ''} />;
}

/** Industry verticals Go-Bot serves. */
export function Industries() {
	return (
		<section id="industries" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Industries"
					title="One companion. Every industry."
					description="The same warmth that helps at home transforms how organizations care for the people they serve."
				/>

				<RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{industries.map((industry) => (
						<RevealItem key={industry.id}>
							<Card variant="outlined" className="group h-full">
								<div className="flex items-center justify-between">
									<industry.icon className="h-7 w-7 text-gobot-500" aria-hidden />
									<div className="text-right">
										<p className="text-title font-semibold text-gobot-600">
											<StatValue value={industry.stat.value} />
										</p>
										<p className="text-overline text-ink-tertiary">{industry.stat.label}</p>
									</div>
								</div>
								<h3 className="mt-5 text-title font-semibold">{industry.name}</h3>
								<p className="mt-2 text-caption text-ink-secondary">{industry.description}</p>
							</Card>
						</RevealItem>
					))}
				</RevealGroup>
			</Container>
		</section>
	);
}
