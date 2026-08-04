import { Footprints, Medal, PenTool, Scissors } from 'lucide-react';
import type { PersonaFeature, SwagLine } from '@/types';

/**
 * Robo-Swag — the wardrobe program. Each line is a designer-collaboration
 * lane; drops land inside a line and every drop ships in two sizes: his
 * and yours. The celebrity wardrobe below is the proof it works on the
 * real prototype.
 */
export const swagLines: SwagLine[] = [
	{
		id: 'atelier-line',
		name: 'The Atelier Line',
		tagline: 'High fashion',
		description:
			'Runway tailoring cut for a robot frame: couture silhouettes, statement coats, and jewelry that reads against a matte shell. Designed with fashion houses, drop by drop.',
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
			'Game-ready kits built with athletes and athletic brands: jerseys, cleats, and full uniforms with real number treatments and team-grade detailing.',
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
			'The fits that actually leave the house: varsity jackets, fleece and cargos, denim, bucket hats, and sneaker rotations for the daily walk.',
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
			'Your design, made real. Commission a one-off fit for your Go-Bot, or bring your own designer and we build it together.',
		icon: PenTool,
		pieces: [
			'Made-to-order fits from your brief',
			'Designer collaborations, credited on the drop',
			'Matching human-size piece included',
		],
	},
];

/**
 * The celebrity wardrobe — the real prototype restyled in the signature
 * looks of the icons who shape culture (formerly the Person-A series).
 * Adding an entry here publishes the next feature; the section renders
 * straight from this list.
 */
export const swagFeatures: PersonaFeature[] = [
	{
		id: 'lil-durk-the-voice',
		name: 'Lil Durk',
		title: 'The Voice',
		description:
			'Feature 001 dresses the prototype for the booth: a royal-blue varsity ' +
			'over stacked cuban links, and a visor that trades his eyes for a live ' +
			'equalizer: when the music plays, his face is the waveform. Shown as ' +
			'a concept for musician partnerships.',
		fit: [
			'All-blue wool varsity with double white shoulder stripes',
			'Honey-blonde dreads under a GO-BOT snapback',
			'Iced-out THE VOICE pendant on layered cuban links',
			'Black bootcut denim breaking over the signature orange feet',
			'Visor equalizer: the eyes become the music',
		],
		images: [
			{
				src: '/assets/gobot/persona/lil-durk-the-voice.jpg',
				width: 1800,
				height: 1350,
				alt: 'The Voice: Go-Bot styled after Lil Durk in a blue varsity jacket, blonde dreadlocks, GO-BOT cap, and an iced-out THE VOICE pendant',
			},
			{
				src: '/assets/gobot/persona/lil-durk-all-black.jpg',
				width: 955,
				height: 720,
				alt: 'The Voice, all-black edition: Go-Bot with long dark hair streaked orange, layered silver chains, a patterned black shirt, leather flares, and white sneakers',
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
			'and the everyday fleece-and-cargos that actually leave the house. Each ' +
			'visor plays its own live equalizer. Shown as a concept for musician ' +
			'partnerships.',
		fit: [
			'The Suit: powder-blue two-piece, cream polo, loafers, spectrum-bar equalizer on the visor',
			'The Coat: oversized faux-fur, white tank, silver cross chain, flowing waveform visor',
			'The Fit: fleece and cargos, bucket hat, gold rope, retro LED-matrix visor',
		],
		images: [
			{
				src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_163518_d15e326e-ca7c-4841-873d-45a7dfd2cbec.png',
				width: 896,
				height: 1200,
				alt: 'The Suit: Go-Bot styled after Bad Bunny in a powder-blue tailored suit and cream polo, his visor playing multicolored spectrum equalizer bars',
			},
			{
				src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_163521_68ad0bb7-cf97-4764-ae6c-6fd702d3c980.png',
				width: 896,
				height: 1200,
				alt: 'The Coat: Go-Bot styled after Bad Bunny in an oversized cream faux-fur coat with a silver cross chain, his visor tracing a multicolored sound waveform',
			},
			{
				src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_163524_8e791ba9-ec03-4658-b315-99d82e13f61c.png',
				width: 896,
				height: 1200,
				alt: 'The Fit: Go-Bot styled after Bad Bunny in a brown fleece sweatshirt, tan cargo trousers, bucket hat, and gold rope chain, his visor showing a retro LED dot-matrix equalizer',
			},
		],
	},
	{
		id: 'mo-bot-uae',
		name: 'United Arab Emirates',
		title: 'Mo-Bot',
		description:
			'A salute to the Emirates: the prototype in ceremonial Gulf dress, ' +
			'gold trim catching the studio light, eyes glowing calm mango orange. ' +
			'Built like Dubai: fifty years ahead of schedule.',
		fit: [
			'Pristine white kandura with the knotted kerkusha collar tassel',
			'White ghutra draped over the shoulders, black double-coiled agal',
			'Sheer black bisht with gold-embroidered trim, worn open',
			'Warm mango-glow eyes beneath the ghutra',
			'Signature orange boots beneath the hem',
		],
		images: [{
			src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_163526_72e9039b-d072-4142-a0f0-c22641b07572.png',
			width: 1200,
			height: 896,
			alt: 'Mo-Bot, the Go-Bot in traditional Emirati attire: white kandura and ghutra, black agal, gold-trimmed black bisht, eyes glowing warm mango orange',
		}],
	},
	{
		id: 'lebron-the-king',
		name: 'LeBron James',
		title: 'The King',
		description:
			'A tribute to the greatest to ever do it: game-ready in the KING-BOT 23, ' +
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
			src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_001328_69beb344-33d2-497a-b7cc-85b21aead967.png',
			width: 1200,
			height: 896,
			alt: 'The King: Go-Bot styled after LeBron James in a blue KING-BOT 23 basketball jersey, white arm sleeve, holding a basketball',
		}],
	},
	{
		id: 'brady-bot',
		name: 'Tom Brady',
		title: 'Brady Bot',
		description:
			'A tribute to the GOAT of the gridiron, shown twice, because he always ' +
			'had two modes: calm on the sideline with the helmet under his arm, and ' +
			'apocalyptic in the pocket with the ball cocked back. Shown as a concept ' +
			'for potential athlete-licensing partnerships.',
		fit: [
			'Pristine white shell: the home colorway',
			'Navy BRADY-BOT 12 jersey with silver shoulder yokes and red piping',
			'Orange mango mark on the helmet and both sleeves',
			'Black long-sleeve base layer under the pads',
			'Silver game pants with a white towel tucked at the waist',
			'White padded quarterback glove; silver helmet, red facemask',
			'Signature orange cleats planted for the throw',
		],
		images: [
			{
				src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_163332_cf520edd-9025-4c0f-9b82-6763996403de.png',
				width: 896,
				height: 1200,
				alt: 'Brady Bot: a white-shelled Go-Bot in a navy BRADY-BOT 12 jersey with orange mango marks, holding a silver helmet under one arm and a football in the other hand',
			},
			{
				src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/hf_20260804_001324_7b8413cc-0ebb-49f3-af93-8188a7eab00b.png',
				width: 1200,
				height: 896,
				alt: 'Brady Bot in full gear: a white-shelled Go-Bot in the navy BRADY-BOT 12 jersey, silver helmet with the mango mark and red facemask, cocking a football back to throw',
			},
		],
	},
	{
		id: 'iron-bot',
		name: 'Licensing Concept',
		title: 'Iron-Bot',
		description:
			'A superhero homage with a Go-Bot twist: crimson-and-gold armor ' +
			'smoothed into his own rounded shell language, his own black visor under ' +
			'a red-and-gold helmet, and the mango mark glowing on his chest ' +
			'as the heartbeat. Shown as a concept for potential character-licensing ' +
			'partnerships.',
		fit: [
			'Rounded matte-crimson shell with polished gold accent bands: his silhouette, not a movie suit',
			'Red-and-gold helmet around the black visor, eyes locked in hero mode',
			'The mango mark glowing on the chest',
			'Armored gauntlets, repulsor charged in the raised palm',
			'Signature orange boots, because heroes land on their feet',
		],
		images: [{
			src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/cbcf38ab-f4f6-48a7-b6a4-1e06bf395a02.png',
			width: 1536,
			height: 2752,
			alt: 'Iron-Bot: Go-Bot in rounded crimson-and-gold armor with a red-and-gold helmet, fierce glowing eyes on a black visor, the glowing mango mark on his chest, and a glowing repulsor in his raised palm',
		}],
	},
	{
		id: 'speed-bot-7',
		name: 'iShowSpeed',
		title: 'Speed-BOT-7',
		description:
			'A tribute to the most electric streamer alive: freeform twists to the ' +
			'sky, the number 7 on his chest, boot on the ball, arms out to the whole ' +
			'stadium. Shown as a concept for creator partnerships.',
		fit: [
			'Wild crown of black freeform twists: the signature',
			'Crimson kit with gold trim, the number 7, and the orange mango crest on the chest',
			'Green shorts with a gold 7 on the leg',
			'White socks into the signature orange boots',
			'Match ball underfoot, celebration mode permanently on',
		],
		images: [{
			src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/3f00334a-2d59-44de-a115-4a156687e7bf.png',
			width: 1200,
			height: 896,
			alt: 'Speed-BOT-7: Go-Bot with wild black freeform twists in a red number 7 soccer kit with the orange mango crest and green shorts, one boot on a soccer ball, arms spread wide',
		}],
	},
];
