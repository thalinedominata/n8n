import {
	Stethoscope,
	School,
	Building2,
	ShoppingBag,
	Plane,
	Factory,
} from 'lucide-react';
import type { Industry } from '@/types';

/**
 * Industry database. Each entry powers a transformed experience at
 * /industries/[id]: themed hero, role-dressed Go-Bot, tailored scenario,
 * stats, and the capabilities cross-referenced from the capability engine.
 */
export const industries: Industry[] = [
	{
		id: 'healthcare',
		name: 'Healthcare',
		description:
			'Patient companionship, mobility assistance, and continuous monitoring that extends the reach of care teams.',
		icon: Stethoscope,
		role: 'medical',
		stats: [
			{ value: '24/7', label: 'patient presence' },
			{ value: '95%', label: 'fall-detection confidence' },
			{ value: '40+', label: 'languages at the bedside' },
		],
		scenario: {
			headline: 'A companion on every ward',
			points: [
				'Sits with patients between rounds for conversation, orientation, and reassurance',
				'Detects falls and distress instantly and briefs the care team with context',
				'Walks patients to imaging, therapy, and discharge at their own pace',
				'Reminds, observes, and reports medication adherence, but never dispenses',
			],
		},
	},
	{
		id: 'education',
		name: 'Education',
		description:
			'Personalized tutoring at classroom scale, with a companion that adapts to every learning style.',
		icon: School,
		role: 'education',
		stats: [
			{ value: '1:1', label: 'adaptive tutoring' },
			{ value: '200+', label: 'expression micro-states' },
			{ value: '0', label: 'students left behind' },
		],
		scenario: {
			headline: 'Every classroom gets a teaching assistant',
			points: [
				'Explains any concept three different ways until it clicks',
				'Runs small-group practice while the teacher leads instruction',
				'Reads aloud, captions, and translates for inclusive classrooms',
				'Celebrates progress with the patience only a robot can afford',
			],
		},
	},
	{
		id: 'hospitality',
		name: 'Hospitality',
		description:
			'Concierge intelligence that greets, guides, and delights guests in any language, at any hour.',
		icon: Building2,
		stats: [
			{ value: '40+', label: 'languages spoken' },
			{ value: '24/7', label: 'lobby presence' },
			{ value: '3×', label: 'faster guest requests' },
		],
		scenario: {
			headline: 'The concierge who never clocks out',
			points: [
				'Greets arrivals by name and walks them to their room',
				'Answers every question: restaurants, checkout, the nearest pharmacy',
				'Delivers amenities and handles late-night requests with a smile',
				'Guides evacuations calmly if the night ever goes wrong',
			],
		},
	},
	{
		id: 'retail',
		name: 'Retail',
		description:
			'In-store guidance and inventory awareness that turns browsing into effortless discovery.',
		icon: ShoppingBag,
		stats: [
			{ value: '3×', label: 'faster assistance' },
			{ value: '100%', label: 'aisle coverage' },
			{ value: '40+', label: 'languages on the floor' },
		],
		scenario: {
			headline: 'Every shopper gets a personal guide',
			points: [
				'Leads customers straight to the product they described',
				'Answers comparison questions with honest, stocked-today knowledge',
				'Carries baskets and heavy items to the counter or the car',
				'Spots spills and hazards before anyone slips',
			],
		},
	},
	{
		id: 'travel',
		name: 'Travel & Mobility',
		description:
			'Wayfinding, translation, and assistance for travelers, from terminals to city streets.',
		icon: Plane,
		stats: [
			{ value: '100%', label: 'journey coverage' },
			{ value: '40+', label: 'languages en route' },
			{ value: '12', label: 'hours of runtime' },
		],
		scenario: {
			headline: 'The terminal finally makes sense',
			points: [
				'Walks travelers gate-to-gate at their pace, luggage in hand',
				'Translates announcements and conversations in real time',
				'Assists reduced-mobility passengers through every transition',
				'Keeps anxious first-time flyers calm and informed',
			],
		},
	},
	{
		id: 'industrial',
		name: 'Industrial',
		description:
			'Safety monitoring and hands-free guidance for teams working in demanding environments.',
		icon: Factory,
		role: 'construction',
		stats: [
			{ value: '0', label: 'missed safety checks' },
			{ value: '95%', label: 'fall-detection confidence' },
			{ value: '24/7', label: 'site watch' },
		],
		scenario: {
			headline: 'A safety officer on every site',
			points: [
				'Walks the site continuously and flags hazards before they become incidents',
				'Detects falls and man-down events and raises the alarm instantly',
				'Guides evacuation drills and real responses with practiced calm',
				'Fetches tools and materials so hands stay on the work',
			],
		},
	},
];
