'use client';

import { Container, SectionHeading } from '@/components/ui';
import { IndustryCard } from '@/components/cards';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { industries } from '@/data/industries';

/** Industry verticals — each card opens the industry-transformed experience. */
export function Industries() {
	return (
		<section id="industries" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Industries"
					title="One companion. Every industry."
					description="Pick an industry and the whole experience transforms — Go-Bot's role, his capabilities, and the stories he tells."
				/>

				<RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{industries.map((industry) => (
						<RevealItem key={industry.id}>
							<IndustryCard industry={industry} />
						</RevealItem>
					))}
				</RevealGroup>
			</Container>
		</section>
	);
}
