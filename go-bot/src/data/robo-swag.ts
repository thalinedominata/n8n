import { Footprints, Medal, PenTool, Scissors } from 'lucide-react';
import type { SwagLine } from '@/types';

/**
 * Robo-Swag — the wardrobe program. Each line is a designer-collaboration
 * lane; drops land inside a line and every drop ships in two sizes: his
 * and yours. The Person-A wardrobe is the proof this works on the real
 * prototype.
 */
export const swagLines: SwagLine[] = [
	{
		id: 'atelier-line',
		name: 'The Atelier Line',
		tagline: 'High fashion',
		description:
			'Runway tailoring cut for a robot frame — couture silhouettes, statement coats, and jewelry that reads against a matte shell. Designed with fashion houses, drop by drop.',
		icon: Scissors,
		pieces: [
			'Tailored two-piece suits and overcoats',
			'Statement outerwear and faux fur',
			'Chains, pendants, and eyewear scaled to the visor',
		],
	},
	{
		id: 'court-and-field',
		name: 'Court & Field',
		tagline: 'Athletic drops',
		description:
			'Game-ready kits built with athletes and athletic brands — jerseys, cleats, and full uniforms with real number treatments and team-grade detailing.',
		icon: Medal,
		pieces: [
			'Basketball, football, and soccer kits',
			'Numbered jerseys with custom wordmarks',
			'Performance sneakers over the signature orange feet',
		],
	},
	{
		id: 'street-series',
		name: 'The Street Series',
		tagline: 'Everyday fits',
		description:
			'The fits that actually leave the house — varsity jackets, fleece and cargos, denim, bucket hats, and sneaker rotations for the daily walk.',
		icon: Footprints,
		pieces: [
			'Varsity jackets and hoodies',
			'Denim, cargos, and layered chains',
			'Caps, bucket hats, and hairstyle swaps',
		],
	},
	{
		id: 'one-of-one',
		name: 'One-of-One Commissions',
		tagline: 'Custom',
		description:
			'Your design, made real. Commission a one-off fit for your Go-Bot — or bring your own designer and we build it together.',
		icon: PenTool,
		pieces: [
			'Made-to-order fits from your brief',
			'Designer collaborations, credited on the drop',
			'Matching human-size piece included',
		],
	},
];

/** Wardrobe renders proving the program on the real prototype. */
export const swagProof = [
	{
		src: '/assets/gobot/persona/bad-bunny-the-suit.jpg',
		width: 376,
		height: 504,
		alt: 'Go-Bot in a powder-blue tailored suit with a cream polo and loafers',
	},
	{
		src: '/assets/gobot/persona/bad-bunny-the-coat.jpg',
		width: 376,
		height: 504,
		alt: 'Go-Bot in an oversized cream faux-fur coat with a silver cross chain',
	},
	{
		src: '/assets/gobot/persona/lil-durk-all-black.jpg',
		width: 955,
		height: 720,
		alt: 'Go-Bot in an all-black fit with layered silver chains and white sneakers',
	},
	{
		src: '/assets/gobot/persona/brady-bot-gameday.jpg',
		width: 1200,
		height: 896,
		alt: 'White-shelled Go-Bot in a navy football uniform with helmet, mid-throw',
	},
] as const;
