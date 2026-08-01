'use client';

import { Container, SectionHeading, Card } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { lifeDomains } from '@/data/life-domains';
import { cn } from '@/lib/utils';

const accentStyles: Record<string, string> = {
	orange: 'group-hover:border-gobot-300 group-hover:shadow-glow',
	amber: 'group-hover:border-gobot-200 group-hover:shadow-e3',
	warm: 'group-hover:border-border-strong group-hover:shadow-e3',
};

/** The six domains of life Go-Bot improves. */
export function LifeDomains() {
	return (
		<section id="life-domains" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="Life Domains"
					title="Every aspect of life, improved."
					description="Go-Bot isn't a gadget for one job. He's a companion across the whole of daily life — six domains, one warm presence."
				/>

				<RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{lifeDomains.map((domain) => (
						<RevealItem key={domain.id} className="group">
							<Card
								variant="outlined"
								className={cn(
									'h-full bg-surface transition-all duration-(--duration-base)',
									accentStyles[domain.accent],
								)}
							>
								<domain.icon className="h-7 w-7 text-gobot-500" aria-hidden />
								<p className="mt-4 text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-gobot-600">
									{domain.tagline}
								</p>
								<h3 className="mt-1.5 text-title font-semibold">{domain.title}</h3>
								<p className="mt-2 text-caption text-ink-secondary">{domain.description}</p>
							</Card>
						</RevealItem>
					))}
				</RevealGroup>
			</Container>
		</section>
	);
}
