import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Badge, Container } from '@/components/ui';
import { GoBotFigure } from '@/components/gobot';
import { DomainDetails } from '@/components/sections/domain-details';
import { lifeDomains } from '@/data/life-domains';

interface DomainPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return lifeDomains.map((domain) => ({ slug: domain.id }));
}

export async function generateMetadata({ params }: DomainPageProps): Promise<Metadata> {
	const { slug } = await params;
	const domain = lifeDomains.find((entry) => entry.id === slug);
	if (!domain) return {};
	return {
		title: domain.title,
		description: domain.description,
	};
}

/**
 * Life-domain experience. The hero renders for every domain; the rich body
 * (DomainDetails) lights up for domains with database details, and others
 * show the coming-soon placeholder note.
 */
export default async function DomainPage({ params }: DomainPageProps) {
	const { slug } = await params;
	const domain = lifeDomains.find((entry) => entry.id === slug);
	if (!domain) notFound();

	return (
		<>
			<Navbar />
			<main id="main-content">
				<section className="relative overflow-hidden pb-16 pt-36">
					<div
						aria-hidden
						className="pointer-events-none absolute right-[-12%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-gobot-100/50 blur-3xl"
					/>
					<Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
						<div>
							<Link
								href="/#life-domains"
								className="inline-flex items-center gap-1.5 text-caption font-medium text-ink-secondary transition-colors duration-(--duration-fast) hover:text-ink"
							>
								<ArrowLeft className="h-4 w-4" aria-hidden />
								All life domains
							</Link>
							<div className="mt-8 flex items-center gap-4">
								<span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gobot-50">
									<domain.icon className="h-7 w-7 text-gobot-600" aria-hidden />
								</span>
								<Badge>{domain.tagline}</Badge>
							</div>
							<h1 className="mt-6 text-display font-semibold text-balance">{domain.title}</h1>
							<p className="mt-6 max-w-xl text-body-lg text-ink-secondary text-pretty">
								{domain.description}
							</p>
							{!domain.details ? (
								<p className="mt-10 inline-flex rounded-pill bg-surface-sunken px-5 py-3 text-caption text-ink-secondary">
									The immersive {domain.title} experience is on the way.
								</p>
							) : null}
						</div>
						<div className="hidden justify-center lg:flex">
							<GoBotFigure media="front" className="w-full max-w-sm" />
						</div>
					</Container>
				</section>

				<DomainDetails domainId={domain.id} />
			</main>
			<Footer />
		</>
	);
}
