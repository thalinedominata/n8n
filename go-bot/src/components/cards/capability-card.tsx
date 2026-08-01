'use client';

import { Card, Chip, Progress } from '@/components/ui';
import type { Capability } from '@/types';
import { cn } from '@/lib/utils';

const generationLabel: Record<string, string> = {
	'gen-1': 'Gen 1',
	'gen-2': 'Gen 2',
	future: 'Future',
};

export interface CapabilityCardProps {
	capability: Capability;
	/** When provided the card becomes a button opening the detail view. */
	onSelect?: (capability: Capability) => void;
	className?: string;
}

/** Capability engine tile: icon, name, confidence bar, hardware generations. */
export function CapabilityCard({ capability, onSelect, className }: CapabilityCardProps) {
	const body = (
		<>
			<div className="flex items-start justify-between gap-3">
				<capability.icon className="h-6 w-6 text-gobot-500" aria-hidden />
				<span className="text-overline text-ink-tertiary uppercase tracking-(--text-overline--letter-spacing)">
					{capability.category}
				</span>
			</div>
			<h3 className="mt-3 text-body font-semibold">{capability.name}</h3>
			<p className="mt-1.5 line-clamp-3 text-caption text-ink-secondary">{capability.description}</p>
			<div className="mt-4 flex items-center gap-3">
				<Progress value={capability.confidence} label={`${capability.name} confidence`} className="flex-1" />
				<span className="text-caption font-semibold text-gobot-600">{capability.confidence}%</span>
			</div>
			<div className="mt-3 flex flex-wrap gap-1.5">
				{capability.hardware.map((generation) => (
					<Chip key={generation} readOnly className="px-2.5 py-0.5 text-overline">
						{generationLabel[generation]}
					</Chip>
				))}
			</div>
		</>
	);

	const cardClass = cn('h-full text-left', className);

	if (onSelect) {
		return (
			<Card
				variant="outlined"
				padding="md"
				className={cn(cardClass, 'w-full cursor-pointer bg-surface hover:border-gobot-300')}
				role="button"
				tabIndex={0}
				onClick={() => onSelect(capability)}
				onKeyDown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						onSelect(capability);
					}
				}}
			>
				{body}
			</Card>
		);
	}
	return (
		<Card variant="outlined" padding="md" className={cn(cardClass, 'bg-surface')}>
			{body}
		</Card>
	);
}
