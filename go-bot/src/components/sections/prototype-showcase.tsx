'use client';

import { useState } from 'react';
import { Container, SectionHeading, Chip } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { GoBotFigure, GoBotViewer, type GoBotFigureProps } from '@/components/gobot';

type ShowcaseMedia = GoBotFigureProps['media'] | '3d';

const VIEWS: Array<{ media: ShowcaseMedia; label: string }> = [
	{ media: '3d', label: 'Interactive 3D' },
	{ media: 'film', label: 'Say hello' },
	{ media: 'front', label: 'Front' },
	{ media: 'back', label: 'Backpack' },
];

/**
 * The prototype gallery — Go-Bot as himself. The interactive 3D view is
 * the AI-reconstructed hero mesh of the real prototype under a next-gen
 * lighting pipeline (see GoBotViewer); film and stills complete the set.
 */
export function PrototypeShowcase() {
	const [media, setMedia] = useState<ShowcaseMedia>('3d');

	return (
		<section id="prototype" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="The Prototype"
					title="This is Go-Bot."
					description="Not a concept sketch — the real design. Matte graphite, a glowing gaze, the triple-bar heartbeat, and the wearable backpack that gives him his name. Spin him around."
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
					{media === '3d' ? (
						<div className="h-[26rem] overflow-hidden rounded-2xl border border-border-subtle bg-surface-sunken shadow-e3 sm:h-[30rem]">
							<GoBotViewer className="h-full w-full" />
						</div>
					) : (
						<GoBotFigure media={media} className="max-h-[32rem] w-full" />
					)}
					<p className="mt-4 text-center text-overline text-ink-tertiary">
						{media === '3d'
							? 'Drag to orbit · Reconstructed from the prototype in full PBR'
							: 'Captured on the prototype film set — every pixel is the real design'}
					</p>
				</Reveal>
			</Container>
		</section>
	);
}
