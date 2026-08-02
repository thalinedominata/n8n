'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { Container, SectionHeading, Chip } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { architectureLayers } from '@/data/architecture';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

/**
 * Interactive architecture explorer: the platform flow from human needs to
 * helpful action. Each stage expands to reveal what powers it.
 */
export function Architecture() {
	const [openId, setOpenId] = useState<string | null>(architectureLayers[0]?.id ?? null);

	return (
		<section id="architecture" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Platform"
					title="From human needs to helpful action."
					description="Life domains define what matters. Capabilities serve them, sensors perceive, the reasoning engine decides, and actions help — one flow, engineered as one system."
				/>

				<Reveal className="mx-auto flex max-w-2xl flex-col items-center">
					{architectureLayers.map((layer, index) => {
						const open = layer.id === openId;
						return (
							<div key={layer.id} className="flex w-full flex-col items-center">
								{index > 0 ? (
									<ArrowDown className="my-2 h-5 w-5 text-gobot-400" aria-hidden />
								) : null}
								<div
									className={cn(
										'w-full rounded-xl border bg-surface transition-[border-color,background-color,box-shadow] duration-(--duration-base)',
										open ? 'border-gobot-300 shadow-e2' : 'border-border-subtle hover:border-border-strong',
									)}
								>
									<button
										type="button"
										aria-expanded={open}
										onClick={() => setOpenId(open ? null : layer.id)}
										className="flex w-full items-center gap-4 px-6 py-4 text-left"
									>
										<span
											className={cn(
												'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-(--duration-base)',
												open ? 'bg-gobot-100' : 'bg-gobot-50',
											)}
										>
											<layer.icon className="h-5 w-5 text-gobot-600" aria-hidden />
										</span>
										<span className="flex-1">
											<span className="block text-body font-semibold">{layer.name}</span>
										</span>
										<span className="font-mono text-overline text-ink-tertiary">0{index + 1}</span>
										<ChevronDown
											className={cn(
												'h-4 w-4 text-ink-tertiary transition-transform duration-(--duration-base)',
												open && 'rotate-180',
											)}
											aria-hidden
										/>
									</button>
									<AnimatePresence initial={false}>
										{open ? (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: duration.base, ease: ease.outSoft }}
												className="overflow-hidden"
											>
												<div className="px-6 pb-5">
													<p className="text-caption text-ink-secondary">{layer.description}</p>
													<div className="mt-4 flex flex-wrap gap-1.5">
														{layer.technologies.map((technology) => (
															<Chip key={technology} readOnly className="px-2.5 py-1 text-overline">
																{technology}
															</Chip>
														))}
													</div>
												</div>
											</motion.div>
										) : null}
									</AnimatePresence>
								</div>
							</div>
						);
					})}
				</Reveal>
			</Container>
		</section>
	);
}
