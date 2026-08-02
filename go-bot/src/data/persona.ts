import type { PersonaFeature } from '@/types';

/**
 * Person-A — the celebrity Go-Bot gallery. Each entry restyles the real
 * prototype render in an icon's signature look (generated from the hero
 * mesh renders, then art-directed by ENGAGE GLOBAL). Adding an entry here
 * publishes the next feature; the section renders straight from this list.
 */
export const personaFeatures: PersonaFeature[] = [
	{
		id: 'lil-durk-the-voice',
		name: 'Lil Durk',
		title: 'The Voice',
		description:
			'Feature 001 dresses the prototype for the booth: a royal-blue varsity ' +
			'over stacked cuban links, and a visor that trades his eyes for a live ' +
			'equalizer — when the music plays, his face is the waveform.',
		fit: [
			'All-blue wool varsity with double white shoulder stripes',
			'Honey-blonde dreads under a GO-BOT snapback',
			'Iced-out THE VOICE pendant on layered cuban links',
			'Black bootcut denim breaking over the signature orange feet',
			'Visor equalizer — the eyes become the music',
		],
		image: {
			src: '/assets/gobot/persona/lil-durk-the-voice.jpg',
			width: 1800,
			height: 1350,
			alt: 'The Voice — Go-Bot styled after Lil Durk in a blue varsity jacket, blonde dreadlocks, GO-BOT cap, and an iced-out THE VOICE pendant',
		},
	},
];
