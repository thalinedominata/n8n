import { ArrowUpRight, GraduationCap, School, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { Tilt } from '@/components/motion/tilt';

const PILLARS = [
	{
		icon: Sparkles,
		title: 'Adaptive AI curriculum',
		line: 'Custom learning journeys tuned to each student’s strengths, passions, and pace.',
	},
	{
		icon: School,
		title: 'K-12 to enterprise',
		line: 'One platform powering schools, students, educators, and global teams.',
	},
	{
		icon: GraduationCap,
		title: 'Bethe1 Academy',
		line: 'Engage’s flagship AI-powered school, redefining education from the ground up.',
	},
];

/**
 * Engage Academy — the education engine behind Go-Bot's tutoring. Bold,
 * short, dark: the platform is the brain, Go-Bot is its presence in the
 * room. Links out to engagework.com/academy.
 */
export function EngageAcademy() {
	return (
		<section id="academy" className="relative isolate overflow-hidden bg-ink py-16 text-ink-inverse">
			<div aria-hidden className="pointer-events-none absolute inset-x-0 top-[-6rem] -z-10 flex justify-center">
				<div className="animate-aura h-80 w-[42rem] rounded-full bg-gobot-500/15 blur-3xl" />
			</div>
			<Container>
				<Reveal className="mx-auto max-w-3xl text-center">
					<p className="text-overline text-gobot-500">Engage Academy</p>
					<h2 className="mt-3 text-display font-bold uppercase leading-none tracking-tight">
						School, reimagined.
					</h2>
					<p className="mt-6 text-body-lg text-ink-inverse/70">
						The world&rsquo;s most advanced learning platform now has a face in the
						room. Engage Academy is the brain. Go-Bot is the tutor at the desk.
					</p>
				</Reveal>

				<RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
					{PILLARS.map((pillar) => (
						<RevealItem key={pillar.title}>
							<Tilt className="h-full">
								<article className="h-full rounded-2xl border border-ink-secondary/40 bg-ink-inverse/5 p-8 text-center">
									<pillar.icon className="mx-auto h-7 w-7 text-gobot-500" aria-hidden />
									<h3 className="mt-4 text-title font-semibold">{pillar.title}</h3>
									<p className="mt-2 text-body text-ink-inverse/70">{pillar.line}</p>
								</article>
							</Tilt>
						</RevealItem>
					))}
				</RevealGroup>

				<Reveal className="mt-12 text-center">
					<a
						href="https://engagework.com/academy"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex min-h-11 items-center justify-center gap-2 rounded-pill bg-gobot-500 px-8 py-3 text-body font-semibold text-ink shadow-glow transition-colors duration-(--duration-fast) hover:bg-gobot-400"
					>
						Visit Engage Academy
						<ArrowUpRight className="h-4 w-4" aria-hidden />
					</a>
				</Reveal>
			</Container>
		</section>
	);
}
