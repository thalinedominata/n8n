import type { HardwareModule } from '@/types';

export const hardwareModules: HardwareModule[] = [
	{
		id: 'vision',
		name: 'Vision System',
		description:
			'Stereo depth cameras and a 180° field of view give Go-Bot spatial awareness and warm, expressive eye contact.',
		specs: [
			{ label: 'Cameras', value: 'Dual 4K stereo' },
			{ label: 'Field of view', value: '180°' },
			{ label: 'Depth range', value: '0.2 – 10 m' },
		],
		hotspot: { x: 50, y: 12 },
	},
	{
		id: 'voice',
		name: 'Voice & Hearing',
		description:
			'A far-field microphone array and studio-quality speaker make conversation natural from across the room.',
		specs: [
			{ label: 'Microphones', value: '6-mic beamforming array' },
			{ label: 'Wake latency', value: '< 200 ms' },
			{ label: 'Languages', value: '40+' },
		],
		hotspot: { x: 50, y: 26 },
	},
	{
		id: 'core',
		name: 'Compute Core',
		description:
			'On-device neural processing keeps perception private and responses instant — no round-trip required.',
		specs: [
			{ label: 'Neural engine', value: '48 TOPS on-device' },
			{ label: 'Memory', value: '32 GB unified' },
			{ label: 'Privacy', value: 'On-device first' },
		],
		hotspot: { x: 50, y: 48 },
	},
	{
		id: 'arms',
		name: 'Expressive Arms',
		description:
			'Compliant actuators deliver gentle, human-safe motion with the dexterity for everyday assistance.',
		specs: [
			{ label: 'Degrees of freedom', value: '7 per arm' },
			{ label: 'Payload', value: '2.5 kg per arm' },
			{ label: 'Safety', value: 'Force-limited, ISO 15066' },
		],
		hotspot: { x: 22, y: 46 },
	},
	{
		id: 'mobility',
		name: 'Mobility Base',
		description:
			'Omnidirectional wheels and terrain-adaptive suspension let Go-Bot glide smoothly through human spaces.',
		specs: [
			{ label: 'Drive', value: 'Omnidirectional' },
			{ label: 'Top speed', value: '1.8 m/s' },
			{ label: 'Runtime', value: '12 h active use' },
		],
		hotspot: { x: 50, y: 84 },
	},
];
