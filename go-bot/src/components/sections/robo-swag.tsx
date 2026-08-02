import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { swagLines, swagProof } from '@/data/robo-swag';

/**
 * Robo-Swag — the wardrobe program, staged as a dark editorial lookbook
 * to match Person-A. High-fashion and athletic drops from designer
 * collaborations, every one shipping in twin sizes: his and yours.
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
						and athletic drops that personalize your robot to your liking — and
						every drop ships in two sizes, so the fit is yours as much as his.
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

				<Reveal className="mt-24 text-center">
					<p className="text-overline text-ink-inverse/60">Already on the prototype</p>
					<h3 className="mt-3 text-headline font-semibold">The wardrobe works.</h3>
					<p className="mx-auto mt-4 max-w-xl text-body-lg text-ink-inverse/70">
						These fits were styled onto the real Go-Bot for the Person-A series —
						proof the drops read exactly as designed, from couture to game day.
					</p>
				</Reveal>

				<RevealGroup className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
					{swagProof.map((image) => (
						<RevealItem key={image.src}>
							<div className="aspect-[3/4] overflow-hidden rounded-2xl border border-ink-secondary/40 shadow-e3">
								<Image
									src={image.src}
									width={image.width}
									height={image.height}
									alt={image.alt}
									className="h-full w-full object-cover"
								/>
							</div>
						</RevealItem>
					))}
				</RevealGroup>

				<Reveal className="mt-10 text-center">
					<Link
						href="/person-a"
						className="inline-flex items-center gap-1.5 text-body font-medium text-gobot-500 transition-colors duration-(--duration-fast) hover:text-gobot-400"
					>
						See the full Person-A wardrobe
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Reveal>

				<Reveal className="mt-24 rounded-2xl border border-ink-secondary/40 bg-ink-inverse/5 p-10 text-center">
					<h3 className="text-headline font-semibold">Designers — the mannequin is ready.</h3>
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
