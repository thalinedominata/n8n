import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Badge, Container } from '@/components/ui';
import { CapabilityExplorer } from '@/components/sections/capability-explorer';

export const metadata: Metadata = {
	title: 'Capabilities',
	description:
		'Every function Go-Bot can perform — searchable by need, audience, sensor, and hardware generation.',
};

/** The capability engine: the searchable database of everything Go-Bot can do. */
export default function CapabilitiesPage() {
	return (
		<>
			<Navbar />
			<main className="pb-28 pt-36">
				<Container>
					<header className="mb-14 flex flex-col items-center gap-4 text-center">
						<Badge>Capability Engine</Badge>
						<h1 className="text-headline font-semibold text-balance">
							Everything Go-Bot can do. Searchable.
						</h1>
						<p className="max-w-2xl text-body-lg text-ink-secondary text-pretty">
							Every capability is data: what it uses, who it works for, how confident it is,
							and which hardware it needs. This database grows toward thousands of entries.
						</p>
					</header>
					<Suspense>
						<CapabilityExplorer />
					</Suspense>
				</Container>
			</main>
			<Footer />
		</>
	);
}
