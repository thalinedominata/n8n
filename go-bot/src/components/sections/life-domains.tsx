'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container, SectionHeading, Card } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { lifeDomains } from '@/data/life-domains';

/**
 * The twenty domains of life Go-Bot improves. Each card links to an
 * immersive domain page (placeholder in V1, full experience in V2).
 */
export function LifeDomains() {
	return (
		<section id="life-domains" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="Life Domains"
					title="Every aspect of life, improved."
					description="Go-Bot isn't a gadget for one job. He's a companion across the whole of daily life — twenty domains, one warm presence."
				/>

				<RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{lifeDomains.map((domain) => (
						<RevealItem key={domain.id} className="group">
							<Link href={`/domains/${domain.id}`} className="block h-full">
								<Card
									variant="outlined"
									padding="md"
									className="h-full bg-surface group-hover:border-gobot-300 group-hover:shadow-e2"
								>
									<div className="flex items-start justify-between">
										<domain.icon className="h-6 w-6 text-gobot-500" aria-hidden />
										<ArrowUpRight className="h-4 w-4 text-ink-tertiary opacity-0 transition-opacity duration-(--duration-fast) group-hover:opacity-100" />
									</div>
									<h3 className="mt-4 text-body font-semibold">{domain.title}</h3>
									<p className="mt-1 text-caption text-ink-secondary">{domain.tagline}</p>
								</Card>
							</Link>
						</RevealItem>
					))}
				</RevealGroup>
			</Container>
		</section>
	);
}
