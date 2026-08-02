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
		images: [
			{
				src: '/assets/gobot/persona/lil-durk-the-voice.jpg',
				width: 1800,
				height: 1350,
				alt: 'The Voice — Go-Bot styled after Lil Durk in a blue varsity jacket, blonde dreadlocks, GO-BOT cap, and an iced-out THE VOICE pendant',
			},
			{
				src: '/assets/gobot/persona/lil-durk-all-black.jpg',
				width: 955,
				height: 720,
				alt: 'The Voice, all-black edition — Go-Bot with long dark hair streaked orange, layered silver chains, a patterned black shirt, leather flares, and white sneakers',
			},
		],
	},
	{
		id: 'bad-bunny-the-suit',
		name: 'Bad Bunny',
		title: 'The Suit',
		description:
			'The cleanest read against a matte black shell. Powder blue photographs ' +
			'beautifully and turns the prototype into the best-dressed robot in the ' +
			'room — down to the loafers.',
		fit: [
			'Powder-blue two-piece tailored suit, woven cotton, working lapels',
			'Cream knit polo, open collar',
			'Black rectangular shades clipped over the visor',
			'Cream leather loafers in place of the orange boots',
		],
		images: [{
			src: '/assets/gobot/persona/bad-bunny-the-suit.jpg',
			width: 376,
			height: 504,
			alt: 'The Suit — Go-Bot styled after Bad Bunny in a powder-blue tailored suit, cream polo, black shades, and cream loafers',
		}],
	},
	{
		id: 'bad-bunny-the-coat',
		name: 'Bad Bunny',
		title: 'The Coat',
		description:
			'The strongest silhouette of the set — the coat doubles his visual mass ' +
			'and the amber aviators let the glowing eyes burn straight through the ' +
			'lens. The shelf hero.',
		fit: [
			'Oversized faux-fur coat, plush pile, shawl collar, mid-calf',
			'Ribbed white tank',
			'Silver curb chain with cross pendant',
			'Tinted amber aviators — the eyes glow warm through the lens',
			'Signature orange boots, front and center',
		],
		images: [{
			src: '/assets/gobot/persona/bad-bunny-the-coat.jpg',
			width: 376,
			height: 504,
			alt: 'The Coat — Go-Bot styled after Bad Bunny in an oversized cream faux-fur coat, white tank, silver cross chain, and amber aviators',
		}],
	},
	{
		id: 'bad-bunny-the-fit',
		name: 'Bad Bunny',
		title: 'The Fit',
		description:
			'The everyday one — the version that actually leaves the house. Fleece, ' +
			'cargos, a bucket hat over the crown, and a gold rope to catch the light.',
		fit: [
			'Oversized fleece sweatshirt, loose cargo trousers with working pockets',
			'Bucket hat, sits over the crown',
			'Gold rope chain',
			'Black shades over the glowing gaze',
			'Plain white leather high-tops, unbranded',
		],
		images: [{
			src: '/assets/gobot/persona/bad-bunny-the-fit.jpg',
			width: 376,
			height: 504,
			alt: 'The Fit — Go-Bot styled after Bad Bunny in a brown fleece sweatshirt, tan cargo trousers, bucket hat, gold rope chain, and white high-tops',
		}],
	},
	{
		id: 'mo-bot-uae',
		name: 'United Arab Emirates',
		title: 'Mo-Bot',
		description:
			'A salute to the Emirates — the prototype in ceremonial Gulf dress, ' +
			'gold trim catching the studio light, eyes glowing calmly through ' +
			'tinted lenses. Built like Dubai: fifty years ahead of schedule.',
		fit: [
			'Pristine white kandura with the knotted kerkusha collar tassel',
			'White ghutra draped over the shoulders, black double-coiled agal',
			'Sheer black bisht with gold-embroidered trim, worn open',
			'Gold-rimmed tinted glasses — the gaze glows through the lens',
			'Signature orange boots beneath the hem',
		],
		images: [{
			src: '/assets/gobot/persona/mo-bot-uae.jpg',
			width: 1800,
			height: 1350,
			alt: 'Mo-Bot — Go-Bot in traditional Emirati attire: white kandura and ghutra, black agal, gold-trimmed black bisht, and tinted glasses',
		}],
	},
	{
		id: 'lebron-the-king',
		name: 'LeBron James',
		title: 'The King',
		description:
			'A tribute to the greatest to ever do it — game-ready in the PHILA 23, ' +
			'ball on the hip, sleeve on the shooting arm. Four quarters of battery ' +
			'left and he wants all of them.',
		fit: [
			'Royal-blue PHILA 23 jersey with red-and-white stitched trim',
			'Matching shorts with striped side panels',
			'White compression sleeve on the shooting arm, sweat wristband on the other',
			'Regulation leather basketball, carried like it lives there',
			'Signature orange sneakers, hardwood-ready',
		],
		images: [{
			src: '/assets/gobot/persona/lebron-the-king.jpg',
			width: 1200,
			height: 896,
			alt: 'The King — Go-Bot styled after LeBron James in a blue PHILA 23 basketball jersey, white arm sleeve, holding a basketball',
		}],
	},
	{
		id: 'brady-bot',
		name: 'Tom Brady',
		title: 'Brady Bot',
		description:
			'A tribute to the GOAT of the gridiron — shown twice, because he always ' +
			'had two modes: calm on the sideline with the helmet under his arm, and ' +
			'apocalyptic in the pocket with the ball cocked back.',
		fit: [
			'Navy 12 jersey with silver shoulder yokes and red piping',
			'Black long-sleeve base layer under the pads',
			'Silver game pants with a white towel tucked at the waist',
			'White padded quarterback glove; silver helmet, red facemask',
			'Signature orange cleats planted for the throw',
		],
		images: [
			{
				src: '/assets/gobot/persona/brady-bot-sideline.jpg',
				width: 1200,
				height: 896,
				alt: 'Brady Bot — Go-Bot in a navy number 12 football uniform holding a silver helmet under one arm and a football in the other hand',
			},
			{
				src: '/assets/gobot/persona/brady-bot-gameday.jpg',
				width: 1200,
				height: 896,
				alt: 'Brady Bot in full gear — Go-Bot wearing the silver helmet with red facemask, eyes glowing through the cage, cocking a football back to throw',
			},
		],
	},
];
