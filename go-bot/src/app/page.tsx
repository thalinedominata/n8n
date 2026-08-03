import { Navbar } from '@/components/layout/navbar';
import { Marquee } from '@/components/ui';
import { Footer } from '@/components/layout/footer';
import {
	Hero,
	Problem,
	Architecture,
	LifeDomains,
	EngageAcademy,
	HardwareExplorer,
	HardwareStory,
	PrototypeShowcase,
	PersonATeaser,
	Industries,
	AiDemo,
	Roadmap,
} from '@/components/sections';

/** The homepage — the complete Go-Bot story, hero to roadmap. */
export default function HomePage() {
	return (
		<>
			<Navbar />
			<main id="main-content">
				<Hero />
				<Problem />
				<Marquee
					items={['He sees', 'He listens', 'He learns', 'He cares', 'Wear him like a backpack']}
				/>
				<Architecture />
				<LifeDomains />
				<EngageAcademy />
				<HardwareExplorer />
				<HardwareStory />
				<PrototypeShowcase />
				<PersonATeaser />
				<Industries />
				<AiDemo />
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
