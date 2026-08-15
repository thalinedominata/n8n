import { Navbar } from '@/components/layout/navbar';
import { Marquee, SectionDivider } from '@/components/ui';
import { Footer } from '@/components/layout/footer';
import {
	Hero,
	Problem,
	Architecture,
	LifeDomains,
	EngageAcademy,
	HardwareExplorer,
	HardwareStory,
	RoboSwagTeaser,
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
				<SectionDivider />
				<LifeDomains />
				<EngageAcademy />
				<HardwareExplorer />
				<SectionDivider />
				<HardwareStory />
				{/* PrototypeShowcase is parked for now — re-add here to restore it. */}
				<RoboSwagTeaser />
				<Industries />
				<SectionDivider />
				<AiDemo />
				<SectionDivider />
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
