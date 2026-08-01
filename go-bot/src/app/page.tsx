import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import {
	Hero,
	Problem,
	Architecture,
	LifeDomains,
	HardwareExplorer,
	PrototypeShowcase,
	Industries,
	AiDemo,
	Roadmap,
} from '@/components/sections';

/** Version 1 homepage — the complete Go-Bot story in eight movements. */
export default function HomePage() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Problem />
				<Architecture />
				<LifeDomains />
				<HardwareExplorer />
				<PrototypeShowcase />
				<Industries />
				<AiDemo />
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
