'use client';

import { AnimatedCounter } from './animated-counter';
import { Card } from './card';
import { cn } from '@/lib/utils';

export interface StatCardProps {
	/** Raw stat value, e.g. "24/7", "3×", "95%". Leading numbers count up. */
	value: string;
	label: string;
	className?: string;
}

/** Renders a stat value, counting up its leading number when present. */
export function StatValue({ value }: { value: string }) {
	const match = /^(\d+)(.*)$/.exec(value);
	if (!match) return <>{value}</>;
	return <AnimatedCounter value={Number(match[1])} suffix={match[2] ?? ''} />;
}

/** Compact stat tile: big counting number over a quiet label. */
export function StatCard({ value, label, className }: StatCardProps) {
	return (
		<Card variant="soft" padding="md" className={cn('text-center', className)}>
			<p className="text-headline font-semibold text-gobot-600">
				<StatValue value={value} />
			</p>
			<p className="mt-1 text-overline uppercase tracking-(--text-overline--letter-spacing) text-ink-secondary">
				{label}
			</p>
		</Card>
	);
}
