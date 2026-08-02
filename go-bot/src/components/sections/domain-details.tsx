'use client';

import Link from 'next/link';
import { Accordion, Carousel, Chip, Container, Tabs, Card } from '@/components/ui';
import { FeatureCard, CapabilityCard } from '@/components/cards';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { lifeDomains } from '@/data/life-domains';
import { capabilities } from '@/data/capabilities';

/**
 * Rich life-domain page body, rendered from the domain database. Domains
 * without `details` show nothing here (the page's placeholder handles it);
 * populating the data file lights this whole page up.
 */
export function DomainDetails({ domainId }: { domainId: string }) {
	const domain = lifeDomains.find((entry) => entry.id === domainId);
	if (!domain?.details) return null;
	const { details } = domain;

	const relatedCapabilities = capabilities.filter((capability) =>
		capability.domains.includes(domain.id),
	);

	return (
		<>
			{/* Overview + systems */}
			<section className="py-20">
				<Container>
					<Reveal>
						<p className="mx-auto max-w-3xl text-center text-body-lg text-ink-secondary text-pretty">
							{details.overview}
						</p>
					</Reveal>

					<Reveal className="mt-14">
						<Tabs
							items={[
								{
									id: 'features',
									label: 'Features',
									content: (
										<div className="grid gap-4 sm:grid-cols-2">
											{details.features.map((feature) => (
												<FeatureCard
													key={feature.title}
													title={feature.title}
													description={feature.description}
												/>
											))}
										</div>
									),
								},
								{
									id: 'sensors',
									label: 'Sensors',
									content: (
										<div className="flex flex-wrap gap-2">
											{details.sensors.map((sensor) => (
												<Chip key={sensor} readOnly>{sensor}</Chip>
											))}
										</div>
									),
								},
								{
									id: 'ai-models',
									label: 'AI Models',
									content: (
										<div className="flex flex-wrap gap-2">
											{details.aiModels.map((model) => (
												<Chip key={model} readOnly>{model}</Chip>
											))}
										</div>
									),
								},
							]}
						/>
					</Reveal>
				</Container>
			</section>

			{/* Capabilities */}
			{relatedCapabilities.length > 0 ? (
				<section className="bg-surface-warm py-20">
					<Container>
						<Reveal>
							<h2 className="mb-8 text-center text-headline font-semibold">
								Capabilities at work
							</h2>
						</Reveal>
						<RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{relatedCapabilities.map((capability) => (
								<RevealItem key={capability.id}>
									<Link href={`/capabilities?c=${capability.id}`} className="block h-full">
										<CapabilityCard capability={capability} />
									</Link>
								</RevealItem>
							))}
						</RevealGroup>
					</Container>
				</section>
			) : null}

			{/* Stories */}
			{details.stories.length > 0 ? (
				<section className="py-20">
					<Container>
						<Reveal>
							<h2 className="mb-8 text-headline font-semibold">Real moments</h2>
						</Reveal>
						<Carousel label={`${domain.title} stories`}>
							{details.stories.map((story) => (
								<Card
									key={story.id}
									variant="soft"
									className="w-[85%] shrink-0 snap-start sm:w-96"
								>
									<p className="text-body text-ink text-pretty">“{story.quote}”</p>
									<p className="mt-4 text-caption font-medium text-gobot-700">{story.author}</p>
								</Card>
							))}
						</Carousel>
					</Container>
				</section>
			) : null}

			{/* FAQ + roadmap */}
			<section className="bg-surface-warm py-20">
				<Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
					<div>
						<Reveal>
							<h2 className="mb-6 text-headline font-semibold">Questions, answered</h2>
						</Reveal>
						<Reveal>
							<Accordion
								items={details.faq.map((entry) => ({
									id: entry.id,
									title: entry.question,
									content: entry.answer,
								}))}
								defaultOpenId={details.faq[0]?.id}
							/>
						</Reveal>
					</div>
					<div>
						<Reveal>
							<h2 className="mb-6 text-headline font-semibold">What&apos;s next</h2>
						</Reveal>
						<RevealGroup className="flex flex-col gap-3">
							{details.roadmap.map((item) => (
								<RevealItem key={item}>
									<div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface p-4 text-caption text-ink-secondary">
										<span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-pill bg-gobot-400" />
										{item}
									</div>
								</RevealItem>
							))}
						</RevealGroup>
					</div>
				</Container>
			</section>
		</>
	);
}
