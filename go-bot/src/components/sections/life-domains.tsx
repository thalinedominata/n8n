'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { DomainCard } from '@/components/cards';
import { lifeDomains } from '@/data/life-domains';

/** How many domain tiles the homepage shows before handing off to /domains. */
const HOMEPAGE_DOMAINS = 8;

/**
 * The domains of life Go-Bot improves — the homepage shows the first
 * eight and hands off to /domains for the full twenty. Each card links
 * to an immersive domain page.
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
					{lifeDomains.slice(0, HOMEPAGE_DOMAINS).map((domain) => (
						<RevealItem key={domain.id}>
							<DomainCard domain={domain} />
						</RevealItem>
					))}
				</RevealGroup>

				<Reveal className="mt-10 text-center">
					<Link
						href="/domains"
						className="inline-flex items-center gap-1.5 text-body font-medium text-gobot-700 transition-colors duration-(--duration-fast) hover:text-gobot-800"
					>
						Explore all {lifeDomains.length} domains
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Reveal>
			</Container>
		</section>
	);
}
