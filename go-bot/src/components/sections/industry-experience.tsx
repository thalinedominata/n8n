'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { Badge, Container, StatCard } from '@/components/ui';
import { CapabilityCard } from '@/components/cards';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/reveal';
import { GoBotFigure } from '@/components/gobot';
import { industries } from '@/data/industries';
import { capabilities } from '@/data/capabilities';
import { heroReveal, staggerChildren } from '@/animations/variants';

/**
 * The industry transformation engine: one component reconfigures the whole
 * experience per industry — role-dressed Go-Bot, tailored scenario, stats,
 * and the capabilities cross-referenced from the capability engine.
 */
export function IndustryExperience({ industryId }: { industryId: string }) {
	const industry = industries.find((entry) => entry.id === industryId);
	if (!industry) return null;

	const relatedCapabilities = capabilities.filter((capability) =>
		capability.industries.includes(industry.id),
	);

	return (
		<>
			{/* Transformed hero */}
			<section className="relative overflow-hidden pb-20 pt-36">
				<div
					aria-hidden
					className="pointer-events-none absolute right-[-10%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-gobot-100/60 blur-3xl"
				/>
				<Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
					<motion.div variants={staggerChildren} initial="hidden" animate="visible">
						<motion.div variants={heroReveal}>
							<Link
								href="/#industries"
								className="mb-8 inline-flex items-center gap-1.5 text-caption font-medium text-ink-secondary transition-colors duration-(--duration-fast) hover:text-ink"
							>
								<ArrowLeft className="h-4 w-4" aria-hidden />
								All industries
							</Link>
						</motion.div>
						<motion.div variants={heroReveal} className="flex items-center gap-3">
							<industry.icon className="h-7 w-7 text-gobot-500" aria-hidden />
							<Badge>Go-Bot for {industry.name}</Badge>
						</motion.div>
						<motion.h1 variants={heroReveal} className="mt-6 text-display font-semibold text-balance">
							{industry.scenario.headline}
						</motion.h1>
						<motion.p variants={heroReveal} className="mt-6 max-w-xl text-body-lg text-ink-secondary text-pretty">
							{industry.description}
						</motion.p>
						<motion.ul variants={heroReveal} className="mt-8 flex flex-col gap-3">
							{industry.scenario.points.map((point) => (
								<li key={point} className="flex items-start gap-3 text-body text-ink-secondary">
									<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-gobot-50">
										<Check className="h-3 w-3 text-gobot-600" aria-hidden />
									</span>
									{point}
								</li>
							))}
						</motion.ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.94 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
						className="flex justify-center"
					>
						<GoBotFigure media="film" className="w-full max-w-md" />
					</motion.div>
				</Container>
			</section>

			{/* Stats */}
			<section className="pb-20">
				<Container>
					<RevealGroup className="grid gap-4 sm:grid-cols-3">
						{industry.stats.map((stat) => (
							<RevealItem key={stat.label}>
								<StatCard value={stat.value} label={stat.label} />
							</RevealItem>
						))}
					</RevealGroup>
				</Container>
			</section>

			{/* Cross-referenced capabilities */}
			{relatedCapabilities.length > 0 ? (
				<section className="bg-surface-warm py-20">
					<Container>
						<Reveal>
							<h2 className="mb-8 text-center text-headline font-semibold">
								What he does in {industry.name.toLowerCase()}
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
		</>
	);
}
