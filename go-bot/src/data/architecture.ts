import { Brain, Cpu, Radio, ShieldCheck } from 'lucide-react';
import type { ArchitectureLayer } from '@/types';

export const architectureLayers: ArchitectureLayer[] = [
	{
		id: 'intelligence',
		name: 'Intelligence Layer',
		description:
			'Multimodal AI that perceives, reasons, and converses — tuned for warmth, safety, and usefulness.',
		technologies: ['Multimodal perception', 'Conversational reasoning', 'Continuous learning'],
		icon: Brain,
	},
	{
		id: 'embodiment',
		name: 'Embodiment Layer',
		description:
			'Real-time motion control that translates intent into smooth, human-safe physical expression.',
		technologies: ['Compliant actuation', 'Gesture synthesis', 'Balance & navigation'],
		icon: Cpu,
	},
	{
		id: 'connection',
		name: 'Connection Layer',
		description:
			'A secure fabric linking Go-Bot to your home, devices, and the ENGAGE GLOBAL cloud.',
		technologies: ['Smart-home protocols', 'Companion apps', 'Over-the-air updates'],
		icon: Radio,
	},
	{
		id: 'trust',
		name: 'Trust Layer',
		description:
			'Privacy and safety engineered into every level — on-device processing, transparent controls, hard guarantees.',
		technologies: ['On-device first', 'Explainable actions', 'Physical safety limits'],
		icon: ShieldCheck,
	},
];
