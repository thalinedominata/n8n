import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { RoboSwag } from '@/components/sections';

export const metadata: Metadata = {
	title: 'Robo-Swag: Match Your Go-Bot',
	description:
		"The Go-Bot wardrobe program: high-fashion and athletic drops from designer collaborations in twin sizes, plus the celebrity wardrobe — the prototype restyled in the signature looks of the icons who shape culture. Match your Go-Bot. It's your Mini-Me.",
};

/** The Robo-Swag lookbook on its own stage. */
export default function RoboSwagPage() {
	return (
		<>
			<Navbar />
			<main id="main-content" className="pt-16">
				<RoboSwag />
			</main>
			<Footer />
		</>
	);
}
