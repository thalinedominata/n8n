'use client';

import { Container, SectionHeading, Card } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { capabilities } from '@/data/capabilities';

/**
 * The problem framing: technology demands attention instead of giving care —
 * and the capabilities that make Go-Bot the answer.
 */
export function Problem() {
	return (
		<section id="problem" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="Why Go-Bot"
					title="Technology asks for your attention. It should offer you its care."
					description="Screens interrupt. Apps demand. Devices wait to be operated. Go-Bot flips the relationship: a companion that understands your world and acts in it — so life gets lighter, not busier."
				/>

				<RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{capabilities.map((capability) => (
						<RevealItem key={capability.id}>
							<Card variant="outlined" padding="lg" className="h-full bg-surface">
								<capability.icon className="h-7 w-7 text-gobot-500" aria-hidden />
								<h3 className="mt-4 text-title font-semibold">{capability.name}</h3>
								<p className="mt-2 text-caption text-ink-secondary">{capability.description}</p>
							</Card>
						</RevealItem>
					))}
				</RevealGroup>
			</Container>
		</section>
	);
}
