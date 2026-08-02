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
			'equalizer — when the music plays, his face is the waveform. Shown as ' +
			'a concept for musician partnerships.',
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
		id: 'bad-bunny-drops',
		name: 'Bad Bunny',
		title: 'The Suit · The Coat · The Fit',
		description:
			'Three drops, one wardrobe: the powder-blue tailoring that reads clean ' +
			'against the matte shell, the faux-fur coat that doubles his silhouette, ' +
			'and the everyday fleece-and-cargos that actually leave the house. Shown ' +
			'as a concept for musician partnerships.',
		fit: [
			'The Suit — powder-blue two-piece, cream polo, shades on the visor, loafers',
			'The Coat — oversized faux-fur, white tank, silver cross chain, amber aviators',
			'The Fit — fleece and cargos, bucket hat, gold rope, white high-tops',
		],
		images: [
			{
				src: '/assets/gobot/persona/bad-bunny-the-suit.jpg',
				width: 376,
				height: 504,
				alt: 'The Suit — Go-Bot styled after Bad Bunny in a powder-blue tailored suit, cream polo, black shades, and cream loafers',
			},
			{
				src: '/assets/gobot/persona/bad-bunny-the-coat.jpg',
				width: 376,
				height: 504,
				alt: 'The Coat — Go-Bot styled after Bad Bunny in an oversized cream faux-fur coat, white tank, silver cross chain, and amber aviators',
			},
			{
				src: '/assets/gobot/persona/bad-bunny-the-fit.jpg',
				width: 376,
				height: 504,
				alt: 'The Fit — Go-Bot styled after Bad Bunny in a brown fleece sweatshirt, tan cargo trousers, bucket hat, gold rope chain, and white high-tops',
			},
		],
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
			'A tribute to the greatest to ever do it — game-ready in the KING-BOT 23, ' +
			'ball on the hip, sleeve on the shooting arm. Four quarters of battery ' +
			'left and he wants all of them. Shown as a concept for potential ' +
			'athlete-licensing partnerships.',
		fit: [
			'Royal-blue KING-BOT 23 jersey with red-and-white stitched trim',
			'Matching shorts with striped side panels',
			'White compression sleeve on the shooting arm, sweat wristband on the other',
			'Regulation leather basketball, carried like it lives there',
			'Signature orange sneakers, hardwood-ready',
		],
		images: [{
			src: '/assets/gobot/persona/lebron-the-king.jpg',
			width: 1200,
			height: 896,
			alt: 'The King — Go-Bot styled after LeBron James in a blue KING-BOT 23 basketball jersey, white arm sleeve, holding a basketball',
		}],
	},
	{
		id: 'brady-bot',
		name: 'Tom Brady',
		title: 'Brady Bot',
		description:
			'A tribute to the GOAT of the gridiron — shown twice, because he always ' +
			'had two modes: calm on the sideline with the helmet under his arm, and ' +
			'apocalyptic in the pocket with the ball cocked back. Shown as a concept ' +
			'for potential athlete-licensing partnerships.',
		fit: [
			'Pristine white shell — the home colorway',
			'Navy BRADY-BOT 12 jersey with silver shoulder yokes and red piping',
			'Orange triple-bar mark on the helmet and both sleeves',
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
				alt: 'Brady Bot — white-shelled Go-Bot in a navy BRADY-BOT 12 jersey with orange triple-bar marks, holding a silver helmet under one arm and a football in the other hand',
			},
			{
				src: '/assets/gobot/persona/brady-bot-gameday.jpg',
				width: 1200,
				height: 896,
				alt: 'Brady Bot in full gear — white-shelled Go-Bot in the navy BRADY-BOT 12 jersey, silver helmet with the triple-bar mark and red facemask, cocking a football back to throw',
			},
		],
	},
	{
		id: 'iron-bot',
		name: 'Licensing Concept',
		title: 'Iron-Bot',
		description:
			'A superhero homage with a Go-Bot twist: crimson-and-gold plating over ' +
			'his own shell, his own visor instead of a faceplate, and his triple-bar ' +
			'heartbeat burning white-hot as the power core. Shown as a concept for ' +
			'potential character-licensing partnerships.',
		fit: [
			'Crimson armor plating with polished gold accent panels',
			'Triple-bar emblem glowing white as the chest core',
			'Armored gauntlets, repulsor charged in the raised palm',
			'His own head and visor — no faceplate needed',
			'Signature orange boots, because heroes land on their feet',
		],
		images: [{
			src: '/assets/gobot/persona/iron-bot.jpg',
			width: 1290,
			height: 2304,
			alt: 'Iron-Bot — Go-Bot in crimson and gold superhero armor with a glowing triple-bar chest core and a glowing repulsor in his raised palm',
		}],
	},
	{
		id: 'speed-bot-7',
		name: 'iShowSpeed',
		title: 'Speed-BOT-7',
		description:
			'A tribute to the most electric streamer alive — freeform twists to the ' +
			'sky, the number 7 on his chest, boot on the ball, arms out to the whole ' +
			'stadium. Shown as a concept for creator partnerships.',
		fit: [
			'Wild crown of black freeform twists — the signature',
			'Crimson kit with gold trim, the number 7, and the orange triple-bar crest on the chest',
			'Green shorts with a gold 7 on the leg',
			'White socks into the signature orange boots',
			'Match ball underfoot, celebration mode permanently on',
		],
		images: [{
			src: '/assets/gobot/persona/speed-bot-7.jpg',
			width: 1200,
			height: 896,
			alt: 'Speed-BOT-7 — Go-Bot with wild black freeform twists in a red number 7 soccer kit with the orange triple-bar crest and green shorts, one boot on a soccer ball, arms spread wide',
		}],
	},
];
