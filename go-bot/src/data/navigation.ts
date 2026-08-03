import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
	{ label: 'Platform', href: '#architecture' },
	{ label: 'Life Domains', href: '#life-domains' },
	{ label: 'Capabilities', href: '/capabilities' },
	{ label: 'Hardware', href: '#hardware' },
	{ label: 'Person-A', href: '/person-a' },
	{ label: 'Robo-Swag', href: '/robo-swag' },
	{ label: 'Industries', href: '#industries' },
	{ label: 'AI Demo', href: '#ai-demo' },
	{ label: 'Roadmap', href: '#roadmap' },
];

export const footerNavigation: Array<{ heading: string; items: NavItem[] }> = [
	{
		heading: 'Product',
		items: [
			{ label: 'Hardware', href: '#hardware' },
			{ label: 'Platform', href: '#architecture' },
			{ label: 'Roadmap', href: '#roadmap' },
		],
	},
	{
		heading: 'Solutions',
		items: [
			{ label: 'Life Domains', href: '#life-domains' },
			{ label: 'Capabilities', href: '/capabilities' },
			{ label: 'Engage Academy', href: '#academy' },
			{ label: 'Robo-Swag', href: '/robo-swag' },
			{ label: 'Industries', href: '#industries' },
		],
	},
	{
		heading: 'Company',
		items: [
			{ label: 'Mission', href: '#hero' },
			{ label: 'Contact', href: 'mailto:hello@engageglobal.com' },
		],
	},
];
