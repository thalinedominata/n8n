import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui';
import type { LifeDomain } from '@/types';

export interface DomainCardProps {
	domain: LifeDomain;
}

/** Life-domain tile linking to the domain's immersive page. */
export function DomainCard({ domain }: DomainCardProps) {
	return (
		<Link href={`/domains/${domain.id}`} className="group block h-full">
			<Card
				variant="outlined"
				padding="md"
				className="h-full bg-surface group-hover:border-gobot-300 group-hover:shadow-e2"
			>
				<div className="flex items-start justify-between">
					<domain.icon className="h-6 w-6 text-gobot-500" aria-hidden />
					<ArrowUpRight className="h-4 w-4 text-ink-tertiary opacity-0 transition-opacity duration-(--duration-fast) group-hover:opacity-100" />
				</div>
				<h3 className="mt-4 text-body font-semibold">{domain.title}</h3>
				<p className="mt-1 text-caption text-ink-secondary">{domain.tagline}</p>
			</Card>
		</Link>
	);
}
