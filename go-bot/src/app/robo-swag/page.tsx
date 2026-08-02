import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { RoboSwag } from '@/components/sections';

export const metadata: Metadata = {
	title: 'Robo-Swag — Match Your Go-Bot',
	description:
		'The Go-Bot wardrobe program: high-fashion and athletic drops from designer collaborations, in twin sizes for you and your robot. Match your Go-Bot — it\'s your Mini-Me.',
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
