'use client';

import { useState } from 'react';
import { Container, SectionHeading, Chip } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { GoBotFigure, type GoBotFigureProps } from '@/components/gobot';

const VIEWS: Array<{ media: GoBotFigureProps['media']; label: string }> = [
	{ media: 'film', label: 'Say hello' },
	{ media: 'front', label: 'Front' },
	{ media: 'back', label: 'Backpack' },
];

/**
 * The prototype gallery — Go-Bot as himself, in 3D-realistic renders and
 * film (brand rule: never the flat cartoon unless instructed). The
 * interactive R3F stage in src/three/ stays wired for the day the glTF
 * export of this prototype lands.
 */
export function GoBot3DShowcase() {
	const [media, setMedia] = useState<GoBotFigureProps['media']>('film');

	return (
		<section id="gobot-3d" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="The Prototype"
					title="This is Go-Bot."
					description="Not a concept sketch — the real design. Matte graphite, a glowing gaze, the triple-bar heartbeat, and the wearable backpack that gives him his name."
				/>

				<div className="mb-8 flex flex-wrap justify-center gap-2">
					{VIEWS.map((entry) => (
						<Chip
							key={entry.media}
							selected={media === entry.media}
							onClick={() => setMedia(entry.media)}
						>
							{entry.label}
						</Chip>
					))}
				</div>

				<Reveal className="mx-auto max-w-3xl">
					<GoBotFigure media={media} className="max-h-[32rem] w-full" />
					<p className="mt-4 text-center text-overline text-ink-tertiary">
						Interactive 3D arrives when the prototype&apos;s model export lands — same views, full orbit
					</p>
				</Reveal>
			</Container>
		</section>
	);
}
