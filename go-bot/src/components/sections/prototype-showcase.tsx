'use client';

import { useState } from 'react';
import { Container, SectionHeading, Chip } from '@/components/ui';
import { Reveal } from '@/components/motion/reveal';
import { GoBotFigure, GoBotViewer, type GoBotFigureProps } from '@/components/gobot';

type ShowcaseMedia = GoBotFigureProps['media'] | '3d' | 'launch';

const VIEWS: Array<{ media: ShowcaseMedia; label: string }> = [
	{ media: '3d', label: 'Interactive 3D' },
	{ media: 'launch', label: 'Launch Film' },
	{ media: 'film', label: 'Say hello' },
	{ media: 'front', label: 'Front' },
	{ media: 'back', label: 'Backpack' },
];

/** Each cut pairs one spoken language with subtitles in the other. */
const LAUNCH_FILMS = {
	en: {
		src: '/assets/video/launch-film.mp4',
		label: 'EN',
		aria: 'Go-Bot launch film: English voice with Arabic subtitles, sound on',
		note: 'Sound on: English voice, Arabic subtitles',
	},
	ar: {
		src: '/assets/video/launch-film-ar.mp4',
		label: 'عربي',
		aria: 'Go-Bot launch film: Gulf Arabic voice with English subtitles, sound on',
		note: 'Sound on: Gulf Arabic voice, English subtitles',
	},
} as const;

type LaunchLang = keyof typeof LAUNCH_FILMS;

/**
 * The prototype gallery — Go-Bot as himself. The interactive 3D view is
 * the AI-reconstructed hero mesh of the real prototype under a next-gen
 * lighting pipeline (see GoBotViewer); film and stills complete the set.
 */
export function PrototypeShowcase() {
	const [media, setMedia] = useState<ShowcaseMedia>('3d');
	const [launchLang, setLaunchLang] = useState<LaunchLang>('en');
	const launchFilm = LAUNCH_FILMS[launchLang];

	return (
		<section id="prototype" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="The Prototype"
					title="This is Go-Bot."
					description="Not a concept sketch. This is the real design: matte graphite, a glowing gaze, the triple-bar heartbeat, and the straps that let you wear him like a backpack. Spin him around."
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
					) : media === 'launch' ? (
						<div>
							<div className="mb-4 flex justify-center gap-2">
								{(Object.keys(LAUNCH_FILMS) as LaunchLang[]).map((lang) => (
									<Chip
										key={lang}
										selected={launchLang === lang}
										onClick={() => setLaunchLang(lang)}
									>
										{LAUNCH_FILMS[lang].label}
									</Chip>
								))}
							</div>
							<div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-sunken shadow-e3">
								<video
									key={launchFilm.src}
									src={launchFilm.src}
									poster="/assets/gobot/go-bot-prototype-front.jpg"
									controls
									playsInline
									preload="none"
									aria-label={launchFilm.aria}
									className="aspect-video w-full object-cover"
								/>
							</div>
						</div>
					) : (
						<GoBotFigure media={media} className="max-h-[32rem] w-full" />
					)}
					<p className="mt-4 text-center text-overline text-ink-tertiary">
						{media === '3d'
							? 'Drag to orbit · Reconstructed from the prototype in full PBR'
							: media === 'launch'
								? launchFilm.note
								: 'Captured on the prototype film set. Every pixel is the real design'}
					</p>
				</Reveal>
			</Container>
		</section>
	);
}
