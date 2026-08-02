'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { lifeDomains } from '@/data/life-domains';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

/**
 * The twenty domains of life Go-Bot improves, condensed to a word grid:
 * every domain fits on screen as a single word, and pressing one reveals
 * its description card with a door into the full domain page.
 */
export function LifeDomains() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const selected = lifeDomains.find((domain) => domain.id === selectedId) ?? null;

	return (
		<section id="life-domains" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="Life Domains"
					title="Every aspect of life, improved."
					description="Twenty domains, one warm presence. Tap a word to see how Go-Bot shows up there."
				/>

				<Reveal className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
					{lifeDomains.map((domain) => {
						const active = domain.id === selectedId;
						return (
							<button
								key={domain.id}
								type="button"
								aria-expanded={active}
								onClick={() => setSelectedId(active ? null : domain.id)}
								className={cn(
									'rounded-pill border px-5 py-2.5 text-body font-semibold transition-colors duration-(--duration-fast)',
									active
										? 'border-gobot-500 bg-gobot-500 text-ink-inverse shadow-glow'
										: 'border-border-strong bg-surface text-ink hover:border-gobot-400 hover:text-gobot-700',
								)}
							>
								{domain.title}
							</button>
						);
					})}
				</Reveal>

				<div aria-live="polite" className="mx-auto mt-8 max-w-2xl">
					<AnimatePresence mode="wait">
						{selected ? (
							<motion.div
								key={selected.id}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: duration.base, ease: ease.outExpo }}
								className="rounded-2xl border border-border-subtle bg-surface p-6 text-center shadow-e2"
							>
								<div className="flex items-center justify-center gap-3">
									<selected.icon className="h-6 w-6 text-gobot-600" aria-hidden />
									<h3 className="text-title font-semibold">{selected.title}</h3>
								</div>
								<p className="mt-1 text-overline text-ink-tertiary">{selected.tagline}</p>
								<p className="mt-3 text-body text-ink-secondary">{selected.description}</p>
								<Link
									href={`/domains/${selected.id}`}
									className="mt-4 inline-flex items-center gap-1.5 text-body font-medium text-gobot-700 transition-colors duration-(--duration-fast) hover:text-gobot-800"
								>
									Enter the {selected.title.toLowerCase()} domain
									<ArrowRight className="h-4 w-4" aria-hidden />
								</Link>
							</motion.div>
						) : (
							<motion.p
								key="hint"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="text-center text-caption text-ink-tertiary"
							>
								Twenty doors into daily life — pick one.
							</motion.p>
						)}
					</AnimatePresence>
				</div>

				<Reveal className="mt-8 text-center">
					<Link
						href="/domains"
						className="inline-flex items-center gap-1.5 text-body font-medium text-gobot-700 transition-colors duration-(--duration-fast) hover:text-gobot-800"
					>
						Browse all {lifeDomains.length} domains
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Reveal>
			</Container>
		</section>
	);
}
