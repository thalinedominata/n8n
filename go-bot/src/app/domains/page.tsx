import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container, SectionHeading } from '@/components/ui';
import { RevealGroup, RevealItem } from '@/components/motion/reveal';
import { DomainCard } from '@/components/cards';
import { lifeDomains } from '@/data/life-domains';

export const metadata: Metadata = {
	title: 'Life Domains',
	description:
		'The twenty domains of daily life Go-Bot improves, from health and safety to travel, faith, fitness, and play.',
};

/** The full life-domain index — every domain, each linking to its page. */
export default function DomainsPage() {
	return (
		<>
			<Navbar />
			<main id="main-content" className="pb-28 pt-36">
				<Container>
					<SectionHeading
						eyebrow="Life Domains"
						title="All twenty, one companion."
						description="Every domain links to its full experience: capabilities, sensors, stories, and what's next."
					/>
					<RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{lifeDomains.map((domain) => (
							<RevealItem key={domain.id}>
								<DomainCard domain={domain} />
							</RevealItem>
						))}
					</RevealGroup>
				</Container>
			</main>
			<Footer />
		</>
	);
}
