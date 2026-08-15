import { Hand, HeartHandshake, Layers, Radar, Sparkles } from 'lucide-react';
import type { ArchitectureLayer } from '@/types';

/**
 * The Go-Bot platform flow, top to bottom: human needs in, helpful action
 * out. Rendered as the interactive architecture explorer on the homepage.
 */
export const architectureLayers: ArchitectureLayer[] = [
	{
		id: 'life-domains',
		name: 'Life Domains',
		description:
			'Everything starts with human needs: health, home, learning, safety: twenty domains of daily life that define what Go-Bot is for.',
		technologies: ['20 life domains', 'Human-centered design', 'Owner-defined priorities'],
		icon: HeartHandshake,
	},
	{
		id: 'capability-modules',
		name: 'Capability Modules',
		description:
			'Each domain is served by capabilities like detecting falls, translating live, and guiding navigation. Modular, searchable, and growing toward thousands.',
		technologies: ['Capability engine', 'Confidence scoring', 'Per-generation hardware map'],
		icon: Layers,
	},
	{
		id: 'sensors',
		name: 'Sensors',
		description:
			'Capabilities perceive through the body: stereo vision, lidar, far-field audio, thermal, and balance, fused into one picture of the moment.',
		technologies: ['Lidar + stereo depth', '6-mic array', 'Thermal & air quality', '1 kHz sensor fusion'],
		icon: Radar,
	},
	{
		id: 'reasoning-engine',
		name: 'BEING Reasoning Engine',
		description:
			'BEING by Engage is the premier engine driving every Go-Bot feature and unlocking every capability. It decides what matters and what to do: private by default, explainable always, warm by design.',
		technologies: ['BEING by Engage', '48 TOPS on-device', 'Multi-step planning', 'Explainable actions'],
		icon: Sparkles,
	},
	{
		id: 'actions',
		name: 'Actions',
		description:
			'Reasoning becomes gentle, human-safe motion and speech: a steadying arm, a translated sentence, a calm call for help.',
		technologies: ['Force-limited motion', 'Expressive voice', 'Smart-home control'],
		icon: Hand,
	},
];
