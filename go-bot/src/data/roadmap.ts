import type { RoadmapPhase } from '@/types';

export const roadmap: RoadmapPhase[] = [
	{
		id: 'v1',
		title: 'Foundation',
		period: 'Shipped',
		status: 'shipped',
		highlights: [
			'Digital platform & design system',
			'Go-Bot character & interactive presence',
			'Capability engine & life-domain database',
			'Industry experiences & AI playground',
		],
	},
	{
		id: 'v2',
		title: 'Immersion',
		period: 'Now',
		status: 'active',
		highlights: [
			'Go-Bot as himself: prototype film and renders site-wide',
			'Scroll-driven hardware deep-dives',
			'Interactive capability demos',
			'Localization & accessibility expansion',
		],
	},
	{
		id: 'v3',
		title: 'Intelligence',
		period: 'Soon',
		status: 'planned',
		highlights: [
			'Live conversational Go-Bot on the web',
			'Developer portal & public API docs',
			'Companion app experiences',
			'Community & ecosystem hub',
		],
	},
	{
		id: 'v4',
		title: 'Platform',
		period: 'Future',
		status: 'planned',
		highlights: [
			'Owner dashboard & fleet management',
			'Skill marketplace for Go-Bot',
			'Enterprise deployment tooling',
			'Global launch',
		],
	},
];
