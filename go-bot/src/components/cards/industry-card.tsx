'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card, StatValue } from '@/components/ui';
import type { Industry } from '@/types';
import { cn } from '@/lib/utils';

export interface IndustryCardProps {
	industry: Industry;
	className?: string;
}

/** Industry tile linking to the industry-transformed experience. */
export function IndustryCard({ industry, className }: IndustryCardProps) {
	const headline = industry.stats[0];
	return (
		<Link href={`/industries/${industry.id}`} className={cn('group block h-full', className)}>
			<Card
				variant="outlined"
				className="h-full bg-surface transition-all duration-(--duration-base) group-hover:border-gobot-300 group-hover:shadow-e2"
			>
				<div className="flex items-center justify-between">
					<industry.icon className="h-7 w-7 text-gobot-500" aria-hidden />
					{headline ? (
						<div className="text-right">
							<p className="text-title font-semibold text-gobot-600">
								<StatValue value={headline.value} />
							</p>
							<p className="text-overline text-ink-tertiary">{headline.label}</p>
						</div>
					) : null}
				</div>
				<h3 className="mt-5 flex items-center gap-1.5 text-title font-semibold">
					{industry.name}
					<ArrowUpRight className="h-4 w-4 text-ink-tertiary opacity-0 transition-opacity duration-(--duration-fast) group-hover:opacity-100" />
				</h3>
				<p className="mt-2 text-caption text-ink-secondary">{industry.description}</p>
			</Card>
		</Link>
	);
}
