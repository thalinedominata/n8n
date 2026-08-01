import {
	Stethoscope,
	School,
	Building2,
	ShoppingBag,
	Plane,
	Factory,
} from 'lucide-react';
import type { Industry } from '@/types';

export const industries: Industry[] = [
	{
		id: 'healthcare',
		name: 'Healthcare',
		description:
			'Patient companionship, mobility assistance, and continuous monitoring that extends the reach of care teams.',
		icon: Stethoscope,
		stat: { value: '24/7', label: 'patient presence' },
	},
	{
		id: 'education',
		name: 'Education',
		description:
			'Personalized tutoring at classroom scale, with a companion that adapts to every learning style.',
		icon: School,
		stat: { value: '1:1', label: 'adaptive tutoring' },
	},
	{
		id: 'hospitality',
		name: 'Hospitality',
		description:
			'Concierge intelligence that greets, guides, and delights guests in any language, at any hour.',
		icon: Building2,
		stat: { value: '40+', label: 'languages spoken' },
	},
	{
		id: 'retail',
		name: 'Retail',
		description:
			'In-store guidance and inventory awareness that turns browsing into effortless discovery.',
		icon: ShoppingBag,
		stat: { value: '3×', label: 'faster assistance' },
	},
	{
		id: 'travel',
		name: 'Travel & Mobility',
		description:
			'Wayfinding, translation, and assistance for travelers — from terminals to city streets.',
		icon: Plane,
		stat: { value: '100%', label: 'journey coverage' },
	},
	{
		id: 'industrial',
		name: 'Industrial',
		description:
			'Safety monitoring and hands-free guidance for teams working in demanding environments.',
		icon: Factory,
		stat: { value: '0', label: 'missed safety checks' },
	},
];
