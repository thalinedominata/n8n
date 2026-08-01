'use client';

import { useState } from 'react';
import { Container, SectionHeading, Chip } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { GoBot3D } from '@/components/gobot/go-bot-3d';
import type { GoBotMood } from '@/components/gobot';

const SHOWCASE_MOODS: Array<{ mood: GoBotMood; label: string }> = [
	{ mood: 'idle', label: 'Idle' },
	{ mood: 'thinking', label: 'Thinking' },
	{ mood: 'listening', label: 'Listening' },
	{ mood: 'talking', label: 'Talking' },
	{ mood: 'happy', label: 'Happy' },
	{ mood: 'scanning', label: 'Scanning' },
	{ mood: 'charging', label: 'Charging' },
	{ mood: 'walking', label: 'Walking' },
];

/**
 * Version 2 flagship: Go-Bot in three dimensions, driven by the same mood
 * engine as the SVG character. Drag to orbit; pick a mood and watch the
 * one behavior state machine express itself in a second renderer.
 */
export function GoBot3DShowcase() {
	const [mood, setMood] = useState<GoBotMood>('idle');

	return (
		<section id="gobot-3d" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="Version 2 Preview"
					title="Meet him in three dimensions."
					description="The same Go-Bot — same proportions, same personality, same mood engine — now with depth. Drag to look around him; pick a mood and watch him live it."
				/>

				<div className="mb-8 flex flex-wrap justify-center gap-2">
					{SHOWCASE_MOODS.map((entry) => (
						<Chip
							key={entry.mood}
							selected={mood === entry.mood}
							onClick={() => setMood(entry.mood)}
						>
							{entry.label}
						</Chip>
					))}
				</div>

				<Reveal className="mx-auto max-w-3xl">
					<div className="h-[26rem] overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-e3 sm:h-[30rem]">
						<GoBot3D mood={mood} className="h-full w-full" />
					</div>
					<p className="mt-4 text-center text-overline text-ink-tertiary">
						Drag to orbit · Built with React Three Fiber · glTF prototype swaps in without code changes
					</p>
				</Reveal>
			</Container>
		</section>
	);
}
