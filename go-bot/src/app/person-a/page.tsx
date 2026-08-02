import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PersonA } from '@/components/sections';

export const metadata: Metadata = {
	title: 'Person-A — Celebrity Go-Bots',
	description:
		'The celebrity Go-Bot gallery: the real prototype restyled in the signature looks of the icons who shape culture — musicians, athletes, and licensing concepts.',
};

/** The full Person-A gallery on its own stage. */
export default function PersonAPage() {
	return (
		<>
			<Navbar />
			<main id="main-content" className="pt-16">
				<PersonA />
			</main>
			<Footer />
		</>
	);
}
