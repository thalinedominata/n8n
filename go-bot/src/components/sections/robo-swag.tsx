import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { swagFeatures, swagLines } from '@/data/robo-swag';

/**
 * Robo-Swag — the wardrobe program staged as a dark editorial lookbook.
 * Designer-collaboration lines up top, then the celebrity wardrobe: the
 * real prototype restyled in the signature looks of the icons who shape
 * culture (the former Person-A series, now part of Robo-Swag). Content
 * renders straight from `src/data/robo-swag.ts`.
 */
export function RoboSwag() {
	return (
		<section id="robo-swag" className="relative isolate overflow-hidden bg-ink py-28 text-ink-inverse">
			{/* Breathing orange aura behind the lookbook heading */}
			<div aria-hidden className="pointer-events-none absolute inset-x-0 top-[-6rem] -z-10 flex justify-center">
				<div className="animate-aura h-80 w-[42rem] rounded-full bg-gobot-500/15 blur-3xl" />
			</div>
			<Container>
				<Reveal className="mx-auto max-w-2xl text-center">
					<p className="text-overline text-gobot-500">Robo-Swag</p>
					<h2 className="mt-3 text-display font-bold uppercase leading-none tracking-tight">
						Match your Go-Bot.
					</h2>
					<p className="mt-3 text-title font-semibold text-gobot-500">It&rsquo;s your Mini-Me.</p>
					<p className="mt-6 text-body-lg text-ink-inverse/70">
						Where the high fashion lives. We work with designers on high-fashion
						and athletic drops that personalize your robot to your liking. Every
						drop ships in two sizes, so the fit is yours as much as his.
					</p>
				</Reveal>

				<RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2">
					{swagLines.map((line) => (
						<RevealItem key={line.id}>
							<article className="h-full rounded-2xl border border-ink-secondary/40 bg-ink-inverse/5 p-8">
								<div className="flex items-center gap-3">
									<line.icon className="h-6 w-6 text-gobot-500" aria-hidden />
									<p className="text-overline text-ink-inverse/60">{line.tagline}</p>
								</div>
								<h3 className="mt-4 text-title font-semibold">{line.name}</h3>
								<p className="mt-3 text-body text-ink-inverse/70">{line.description}</p>
								<ul className="mt-6 space-y-3">
									{line.pieces.map((piece) => (
										<li key={piece} className="flex items-start gap-3 text-body">
											<span
												aria-hidden
												className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gobot-500"
											/>
											{piece}
										</li>
									))}
								</ul>
							</article>
						</RevealItem>
					))}
				</RevealGroup>

				{/* The celebrity wardrobe — proof the program works on the real prototype */}
				<Reveal className="mx-auto mt-24 max-w-2xl text-center">
					<p className="text-overline text-ink-inverse/60">The wardrobe in the wild</p>
					<h3 className="mt-3 text-headline font-semibold">Celebrity Go-Bots.</h3>
					<p className="mt-4 text-body-lg text-ink-inverse/70">
						Go-Bot lives in culture as much as in homes. Each feature restyles the
						real prototype in the signature look of an icon who shapes it — from
						couture to game day, the drops read exactly as designed.
					</p>
				</Reveal>

				{swagFeatures.map((feature, index) => {
					const multiImage = feature.images.length > 1;

					const textBlock = (
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
						</div>
					);

					const fitList = (
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
					);

					const imageTiles = feature.images.map((image) => (
						<div
							key={image.src}
							className={cn(
								'overflow-hidden rounded-2xl border border-ink-secondary/40 shadow-e3',
								// Extra-tall portraits (like Iron-Bot) shrink to a centered tile
								// instead of towering over the column.
								image.height / image.width > 1.5 && 'mx-auto w-full max-w-sm',
							)}
						>
							<Image
								src={image.src}
								width={image.width}
								height={image.height}
								alt={image.alt}
								className="h-full w-full object-cover"
							/>
						</div>
					));

					// Multi-render features go full-bleed: the renders take the
					// entire container width so each one stays large.
					if (multiImage) {
						return (
							<Reveal key={feature.id} className="mt-20">
								<article>
									<div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
										{textBlock}
										<div className="lg:self-center">{fitList}</div>
									</div>
									<div
										className={cn(
											'mt-10 grid gap-4',
											feature.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3',
										)}
									>
										{imageTiles}
									</div>
								</article>
							</Reveal>
						);
					}

					return (
						<Reveal key={feature.id} className="mt-20">
							<article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
								<div className={cn('grid gap-4', index % 2 === 1 && 'lg:order-last')}>
									{imageTiles}
								</div>
								<div>
									{textBlock}
									{fitList}
								</div>
							</article>
						</Reveal>
					);
				})}

				<Reveal className="mt-16">
					<p className="text-center text-overline text-ink-inverse/60">
						More features docking soon · The celebrity wardrobe is an ENGAGE GLOBAL tribute series
					</p>
				</Reveal>

				<Reveal className="mt-24 rounded-2xl border border-ink-secondary/40 bg-ink-inverse/5 p-10 text-center">
					<h3 className="text-headline font-semibold">Designers, the mannequin is ready.</h3>
					<p className="mx-auto mt-4 max-w-xl text-body-lg text-ink-inverse/70">
						Robo-Swag is a collaboration program. If you design high fashion,
						athletic wear, or streetwear and want your work walking around on a
						robot, we want to build a drop with you.
					</p>
					<a
						href="mailto:hello@engageglobal.com?subject=Robo-Swag%20collaboration"
						className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-pill bg-gobot-500 px-8 py-3 text-body font-semibold text-ink shadow-glow transition-colors duration-(--duration-fast) hover:bg-gobot-400"
					>
						Pitch a drop
						<ArrowRight className="h-4 w-4" aria-hidden />
					</a>
				</Reveal>
			</Container>
		</section>
	);
}
