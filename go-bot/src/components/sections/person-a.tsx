import Image from 'next/image';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';
import { personaFeatures } from '@/data/persona';

/**
 * Person-A — the celebrity Go-Bot gallery, rendered as an inverted
 * (ink-on-ink) editorial spread inspired by music one-sheets: oversized
 * title treatment, feature number, and the styled prototype render as
 * the artwork. Content comes entirely from `src/data/persona.ts` — add
 * an entry there to publish the next feature.
 */
export function PersonA() {
	return (
		<section id="person-a" className="relative isolate overflow-hidden bg-ink py-28 text-ink-inverse">
			{/* Breathing orange aura behind the gallery heading */}
			<div aria-hidden className="pointer-events-none absolute inset-x-0 top-[-6rem] -z-10 flex justify-center">
				<div className="animate-aura h-80 w-[42rem] rounded-full bg-gobot-500/15 blur-3xl" />
			</div>
			<Container>
				<Reveal className="mx-auto max-w-2xl text-center">
					<p className="text-overline text-gobot-500">Person-A</p>
					<h2 className="mt-3 text-headline font-semibold">Celebrity Go-Bots.</h2>
					<p className="mt-4 text-body-lg text-ink-inverse/70">
						Go-Bot doesn&rsquo;t just live in homes — he lives in culture. Person-A
						restyles the real prototype in the signature look of the icons who
						shape it, one feature at a time.
					</p>
				</Reveal>

				{personaFeatures.map((feature, index) => (
					<Reveal key={feature.id} className="mt-20">
						<article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
							<div
								className={cn(
									'grid gap-4',
									feature.images.length === 2 && 'grid-cols-2',
									feature.images.length >= 3 && 'grid-cols-3',
									index % 2 === 1 && 'lg:order-last',
								)}
							>
								{feature.images.map((image) => (
									<div
										key={image.src}
										className="overflow-hidden rounded-2xl border border-ink-secondary/40 shadow-e3"
									>
										<Image
											src={image.src}
											width={image.width}
											height={image.height}
											alt={image.alt}
											className="h-full w-full object-cover"
										/>
									</div>
								))}
							</div>

							<div>
								<p className="text-overline text-ink-inverse/60">
									Feature {String(index + 1).padStart(3, '0')} · {feature.name}
								</p>
								<h3 className="mt-4 text-display font-bold uppercase leading-none tracking-tight">
									{feature.title}
								</h3>
								<p className="mt-6 max-w-xl text-body-lg text-ink-inverse/70">
									{feature.description}
								</p>
								<ul className="mt-8 space-y-3">
									{feature.fit.map((line) => (
										<li key={line} className="flex items-start gap-3 text-body">
											<span
												aria-hidden
												className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gobot-500"
											/>
											{line}
										</li>
									))}
								</ul>
							</div>
						</article>
					</Reveal>
				))}

				<Reveal className="mt-16">
					<p className="text-center text-overline text-ink-inverse/60">
						More features docking soon · Person-A is an ENGAGE GLOBAL tribute series
					</p>
				</Reveal>
			</Container>
		</section>
	);
}
