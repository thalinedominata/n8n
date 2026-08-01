import type { GoBotRole } from './go-bot.moods';
import { PALETTE } from './go-bot.constants';

/**
 * Profession accessories, drawn in the character's own vector language.
 * Anchored to the right chest panel (badge) or head (helmet bands).
 * Rendered inside the GoBot SVG — coordinates are on the 200×250 canvas.
 */
export function GoBotRoleBadge({ role }: { role: GoBotRole }) {
	switch (role) {
		case 'medical':
			return (
				<g aria-hidden>
					<rect x="116" y="108" width="16" height="16" rx="4" fill="#ffffff" />
					<rect x="122" y="111" width="4" height="10" rx="1" fill={PALETTE.orange} />
					<rect x="119" y="114" width="10" height="4" rx="1" fill={PALETTE.orange} />
				</g>
			);
		case 'security':
		case 'police':
			return (
				<g aria-hidden>
					<path
						d="M 124 108 l 7 2.5 v 5 c 0 4.5 -3 7.5 -7 9 c -4 -1.5 -7 -4.5 -7 -9 v -5 z"
						fill={role === 'police' ? '#3b6db8' : PALETTE.orange}
						stroke="#ffffff"
						strokeWidth="1.5"
					/>
				</g>
			);
		case 'education':
			return (
				<g aria-hidden>
					<rect x="115" y="110" width="9" height="12" rx="1.5" fill="#ffffff" />
					<rect x="124" y="110" width="9" height="12" rx="1.5" fill={PALETTE.orangeSoft} />
					<line x1="124" y1="110" x2="124" y2="122" stroke={PALETTE.orange} strokeWidth="1.5" />
				</g>
			);
		case 'construction':
			return (
				<g aria-hidden>
					<path d="M 58 22 a 46 24 0 0 1 84 0 l -4 6 a 42 20 0 0 0 -76 0 z" fill="#f5c518" />
					<rect x="94" y="10" width="12" height="8" rx="3" fill="#f5c518" />
				</g>
			);
		case 'firefighter':
			return (
				<g aria-hidden>
					<path d="M 58 22 a 46 24 0 0 1 84 0 l -4 6 a 42 20 0 0 0 -76 0 z" fill="#d64545" />
					<rect x="94" y="10" width="12" height="8" rx="3" fill="#d64545" />
				</g>
			);
		case 'childcare':
			return (
				<g aria-hidden>
					<path
						d="M 124 112 c -2.5 -3 -7.5 -1.5 -7.5 2.2 c 0 2.8 4 5.6 7.5 7.8 c 3.5 -2.2 7.5 -5 7.5 -7.8 c 0 -3.7 -5 -5.2 -7.5 -2.2 z"
						fill="#ffffff"
					/>
				</g>
			);
		case 'eldercare':
			return (
				<g aria-hidden>
					<path
						d="M 124 112 c -2.5 -3 -7.5 -1.5 -7.5 2.2 c 0 2.8 4 5.6 7.5 7.8 c 3.5 -2.2 7.5 -5 7.5 -7.8 c 0 -3.7 -5 -5.2 -7.5 -2.2 z"
						fill="none"
						stroke="#ffffff"
						strokeWidth="2"
					/>
				</g>
			);
		case 'developer':
			return (
				<g aria-hidden stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" fill="none">
					<path d="M 118 112 l -4 5 l 4 5" />
					<path d="M 130 112 l 4 5 l -4 5" />
				</g>
			);
		default:
			return null;
	}
}
