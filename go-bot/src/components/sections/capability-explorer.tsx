'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { Chip, Drawer, Progress } from '@/components/ui';
import { CapabilityCard } from '@/components/cards';
import { capabilities, capabilityCategories } from '@/data/capabilities';
import type { Capability } from '@/types';

const generationLabel: Record<string, string> = {
	'gen-1': 'Gen 1',
	'gen-2': 'Gen 2',
	future: 'Future',
};

/**
 * The capability engine UI: full-text search + category filters over the
 * capability database, with a detail drawer per capability. Deep-linkable
 * via ?c=<capability-id> (used by the command palette).
 */
export function CapabilityExplorer() {
	const searchParams = useSearchParams();
	const [query, setQuery] = useState('');
	const [category, setCategory] = useState<string | null>(null);
	const [selected, setSelected] = useState<Capability | null>(null);

	// Deep link: /capabilities?c=detect-falls opens that capability's drawer.
	useEffect(() => {
		const id = searchParams.get('c');
		if (id) setSelected(capabilities.find((capability) => capability.id === id) ?? null);
	}, [searchParams]);

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		return capabilities.filter((capability) => {
			if (category && capability.category !== category) return false;
			if (!q) return true;
			return `${capability.name} ${capability.description} ${capability.uses.join(' ')} ${capability.worksFor.join(' ')}`
				.toLowerCase()
				.includes(q);
		});
	}, [query, category]);

	return (
		<div>
			{/* Search + filters */}
			<div className="mx-auto mb-10 flex max-w-2xl flex-col gap-4">
				<label className="flex items-center gap-3 rounded-pill border border-border-strong bg-surface px-5 shadow-e1 focus-within:border-gobot-500">
					<Search className="h-4 w-4 text-ink-tertiary" aria-hidden />
					<input
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search capabilities — “falls”, “translate”, “seniors”…"
						aria-label="Search capabilities"
						className="h-12 flex-1 bg-transparent text-body outline-none placeholder:text-ink-tertiary"
					/>
				</label>
				<div className="flex flex-wrap justify-center gap-2">
					<Chip selected={category === null} onClick={() => setCategory(null)}>
						All
					</Chip>
					{capabilityCategories.map((entry) => (
						<Chip
							key={entry}
							selected={category === entry}
							onClick={() => setCategory(category === entry ? null : entry)}
							className="capitalize"
						>
							{entry}
						</Chip>
					))}
				</div>
			</div>

			{/* Results */}
			<p className="mb-6 text-center text-caption text-ink-tertiary" aria-live="polite">
				{results.length} of {capabilities.length} capabilities
			</p>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{results.map((capability) => (
					<CapabilityCard key={capability.id} capability={capability} onSelect={setSelected} />
				))}
			</div>
			{results.length === 0 ? (
				<p className="py-16 text-center text-body text-ink-secondary">
					Go-Bot searched everywhere — nothing matches yet. He&apos;s taking notes for Version 2.
				</p>
			) : null}

			{/* Detail drawer */}
			<Drawer open={selected !== null} onClose={() => setSelected(null)} title={selected?.name ?? ''}>
				{selected ? (
					<div className="flex flex-col gap-6">
						<p className="text-body text-ink-secondary">{selected.description}</p>

						<div>
							<div className="flex items-center justify-between">
								<h4 className="text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-ink-tertiary">
									Confidence
								</h4>
								<span className="text-caption font-semibold text-gobot-600">{selected.confidence}%</span>
							</div>
							<Progress value={selected.confidence} label={`${selected.name} confidence`} className="mt-2" />
						</div>

						<div>
							<h4 className="text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-ink-tertiary">
								Uses
							</h4>
							<div className="mt-2 flex flex-wrap gap-1.5">
								{selected.uses.map((use) => (
									<Chip key={use} readOnly>{use}</Chip>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-ink-tertiary">
								Works for
							</h4>
							<div className="mt-2 flex flex-wrap gap-1.5">
								{selected.worksFor.map((audience) => (
									<Chip key={audience} readOnly>{audience}</Chip>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-ink-tertiary">
								Hardware required
							</h4>
							<div className="mt-2 flex flex-wrap gap-1.5">
								{selected.hardware.map((generation) => (
									<Chip key={generation} readOnly>{generationLabel[generation]}</Chip>
								))}
							</div>
						</div>

						{selected.safetyNotes ? (
							<div className="rounded-xl bg-surface-warm p-4">
								<h4 className="text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-ink-tertiary">
									Safety notes
								</h4>
								<p className="mt-1.5 text-caption text-ink-secondary">{selected.safetyNotes}</p>
							</div>
						) : null}
					</div>
				) : null}
			</Drawer>
		</div>
	);
}
