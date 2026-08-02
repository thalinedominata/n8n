import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import {
	Hero,
	Problem,
	Architecture,
	LifeDomains,
	HardwareExplorer,
	HardwareStory,
	PrototypeShowcase,
	PersonA,
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
				<Architecture />
				<LifeDomains />
				<HardwareExplorer />
				<HardwareStory />
				<PrototypeShowcase />
				<PersonA />
				<Industries />
				<AiDemo />
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
