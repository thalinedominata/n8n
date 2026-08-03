import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { personaFeatures } from '@/data/persona';

/** Which features front the homepage teaser (first render of each). */
const TEASER_IDS = ['lil-durk-the-voice', 'mo-bot-uae', 'speed-bot-7'];

/**
 * Compact homepage hand-off to the full Person-A gallery: the dark band,
 * three renders, one line, one link. The complete experience lives at
 * /person-a.
 */
export function PersonATeaser() {
	const teasers = TEASER_IDS.map((id) => personaFeatures.find((feature) => feature.id === id))
		.filter((feature) => feature !== undefined)
		.map((feature) => ({ id: feature.id, image: feature.images[0], title: feature.title }))
		.filter((entry) => entry.image !== undefined);

	return (
		<section id="person-a" className="relative isolate overflow-hidden bg-ink py-24 text-ink-inverse">
			<div aria-hidden className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 flex justify-center">
				<div className="animate-aura h-72 w-[40rem] rounded-full bg-gobot-500/15 blur-3xl" />
			</div>

			<Container className="text-center">
				<Reveal>
					<p className="text-overline text-gobot-500">Person-A</p>
					<h2 className="mt-3 text-headline font-semibold">Celebrity Go-Bots.</h2>
					<p className="mx-auto mt-4 max-w-2xl text-body-lg text-ink-inverse/70">
						The prototype, restyled in the signature looks of the icons who shape
						culture: musicians, athletes, and a hero or two.
					</p>
				</Reveal>

				<Reveal className="mt-12 grid grid-cols-3 gap-4">
					{teasers.map((entry) => (
						<Link
							key={entry.id}
							href="/person-a"
							aria-label={`${entry.title}: see the full Person-A gallery`}
							className="group overflow-hidden rounded-2xl border border-ink-secondary/40 shadow-e3"
						>
							{entry.image ? (
								<Image
									src={entry.image.src}
									width={entry.image.width}
									height={entry.image.height}
									alt={entry.image.alt}
									className="h-full w-full object-cover transition-transform duration-(--duration-base) group-hover:scale-[1.03]"
								/>
							) : null}
						</Link>
					))}
				</Reveal>

				<Reveal className="mt-10">
					<Link
						href="/person-a"
						className="inline-flex items-center gap-2 rounded-pill bg-gobot-500 px-7 py-3 text-body font-medium text-ink-inverse transition-colors duration-(--duration-fast) hover:bg-gobot-600"
					>
						Meet all {personaFeatures.length} features
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Reveal>
			</Container>
		</section>
	);
}
