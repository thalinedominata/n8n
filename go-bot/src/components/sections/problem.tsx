'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { FeatureCard } from '@/components/cards';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/reveal';
import { capabilities } from '@/data/capabilities';

/**
 * The problem framing: technology demands attention instead of giving care —
 * answered by the featured capabilities from the capability engine.
 */
export function Problem() {
	const featured = capabilities.filter((capability) => capability.featured).slice(0, 7);

	return (
		<section id="problem" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="Why Go-Bot"
					title="Technology asks for your attention. It should offer you its care."
					description="Screens interrupt. Apps demand. Devices wait to be operated. Go-Bot flips the relationship: a companion that understands your world and acts in it — so life gets lighter, not busier."
				/>

				<RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featured.map((capability) => (
						<RevealItem key={capability.id}>
							<FeatureCard
								icon={capability.icon}
								title={capability.name}
								description={capability.description}
								image={capability.image}
							/>
						</RevealItem>
					))}
				</RevealGroup>

				<Reveal className="mt-10 text-center">
					<Link
						href="/capabilities"
						className="inline-flex items-center gap-1.5 text-body font-medium text-gobot-700 transition-colors duration-(--duration-fast) hover:text-gobot-800"
					>
						Explore all {capabilities.length}+ capabilities
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Reveal>
			</Container>
		</section>
	);
}
