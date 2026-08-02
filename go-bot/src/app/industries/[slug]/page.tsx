import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { IndustryExperience } from '@/components/sections/industry-experience';
import { industries } from '@/data/industries';

interface IndustryPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return industries.map((industry) => ({ slug: industry.id }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
	const { slug } = await params;
	const industry = industries.find((entry) => entry.id === slug);
	if (!industry) return {};
	return {
		title: `Go-Bot for ${industry.name}`,
		description: industry.description,
	};
}

/** Industry-transformed experience — the whole page reconfigures per vertical. */
export default async function IndustryPage({ params }: IndustryPageProps) {
	const { slug } = await params;
	if (!industries.some((entry) => entry.id === slug)) notFound();

	return (
		<>
			<Navbar />
			<main id="main-content">
				<IndustryExperience industryId={slug} />
			</main>
			<Footer />
		</>
	);
}
