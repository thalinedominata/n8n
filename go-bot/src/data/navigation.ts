import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
	{ label: 'Why Go-Bot', href: '#problem' },
	{ label: 'Platform', href: '#architecture' },
	{ label: 'Life Domains', href: '#life-domains' },
	{ label: 'Hardware', href: '#hardware' },
	{ label: 'Industries', href: '#industries' },
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
