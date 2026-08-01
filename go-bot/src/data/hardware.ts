import type { HardwareModule } from '@/types';

/**
 * Go-Bot anatomy — hotspot coordinates are percentages over the character
 * figure (200×250 canonical canvas, see go-bot.constants.ts).
 */
export const hardwareModules: HardwareModule[] = [
	{
		id: 'head',
		name: 'Head & Visor',
		description:
			'A rounded graphite shell with a glossy protective visor — impact-resistant, glare-free, and unmistakably friendly.',
		specs: [
			{ label: 'Shell', value: 'Matte polymer composite' },
			{ label: 'Visor', value: 'Optical-grade, anti-glare' },
			{ label: 'Articulation', value: '3-axis neck' },
		],
		hotspot: { x: 50, y: 10 },
	},
	{
		id: 'eyes',
		name: 'Eyes',
		description:
			'Glowing expressive eyes that blink, focus, and make warm contact — the visor face is how Go-Bot shows he’s listening.',
		specs: [
			{ label: 'Display', value: 'Micro-LED expressive array' },
			{ label: 'Expressions', value: '200+ micro-states' },
			{ label: 'Gaze', value: 'Person-aware tracking' },
		],
		hotspot: { x: 59, y: 20 },
	},
	{
		id: 'audio',
		name: 'Microphones & Speakers',
		description:
			'A far-field microphone array and warm full-range speaker make conversation natural from across the room.',
		specs: [
			{ label: 'Microphones', value: '6-mic beamforming array' },
			{ label: 'Wake latency', value: '< 200 ms' },
			{ label: 'Languages', value: '40+' },
		],
		hotspot: { x: 34, y: 22 },
	},
	{
		id: 'chest-light',
		name: 'Chest Emblem',
		description:
			'The triple-bar emblem is Go-Bot’s heartbeat — it breathes with him, pulses when he thinks, and signals his state at a glance.',
		specs: [
			{ label: 'Element', value: 'Edge-lit light guide' },
			{ label: 'States', value: 'Idle · Listening · Thinking · Alert' },
			{ label: 'Brightness', value: 'Ambient-adaptive' },
		],
		hotspot: { x: 50, y: 50 },
	},
	{
		id: 'camera',
		name: 'Camera',
		description:
			'A single chest-mounted depth camera gives Go-Bot spatial understanding — processed on-device, with a physical shutter.',
		specs: [
			{ label: 'Sensor', value: '4K stereo depth' },
			{ label: 'Field of view', value: '150°' },
			{ label: 'Privacy', value: 'Hardware shutter + LED' },
		],
		hotspot: { x: 50, y: 61 },
	},
	{
		id: 'compute',
		name: 'Processor & Cooling',
		description:
			'On-device neural processing keeps perception private and responses instant — cooled silently through the backpack vent.',
		specs: [
			{ label: 'Neural engine', value: '48 TOPS on-device' },
			{ label: 'Memory', value: '32 GB unified' },
			{ label: 'Cooling', value: 'Silent passive hex-vent' },
		],
		hotspot: { x: 36, y: 54 },
	},
	{
		id: 'backpack',
		name: 'Backpack & Battery',
		description:
			'The wearable backpack carries the battery and glowing spine light, straps on with orange-stitched harnesses, and charges over USB-C.',
		specs: [
			{ label: 'Runtime', value: '12 h active use' },
			{ label: 'Charging', value: 'USB-C fast charge' },
			{ label: 'Spine light', value: 'Status + charge indicator' },
		],
		hotspot: { x: 74, y: 46 },
	},
	{
		id: 'arms',
		name: 'Arms & Hands',
		description:
			'Chunky compliant arms with soft orange hands deliver gentle, human-safe motion and everyday dexterity.',
		specs: [
			{ label: 'Degrees of freedom', value: '7 per arm' },
			{ label: 'Payload', value: '2.5 kg per arm' },
			{ label: 'Safety', value: 'Force-limited, ISO 15066' },
		],
		hotspot: { x: 21, y: 56 },
	},
	{
		id: 'expansion',
		name: 'Sensors & Expansion Ports',
		description:
			'Body-wide proximity and balance sensors, plus expansion ports in the backpack for future capability modules.',
		specs: [
			{ label: 'Sensors', value: 'IMU, proximity, terrain' },
			{ label: 'Ports', value: '2× modular expansion' },
			{ label: 'Updates', value: 'Over-the-air' },
		],
		hotspot: { x: 68, y: 71 },
	},
	{
		id: 'legs',
		name: 'Legs & Feet',
		description:
			'Short, stable legs and grippy boots on orange soles let Go-Bot walk human spaces smoothly and safely.',
		specs: [
			{ label: 'Gait', value: 'Dynamic balanced walking' },
			{ label: 'Speed', value: '1.8 m/s' },
			{ label: 'Soles', value: 'High-grip, floor-safe' },
		],
		hotspot: { x: 43, y: 86 },
	},
];
