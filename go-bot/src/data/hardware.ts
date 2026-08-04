import type { HardwareModule } from '@/types';

/**
 * Go-Bot anatomy — all sixteen clickable parts. Hotspot coordinates are
 * percentages over the character figure (200×250 canonical canvas, see
 * go-bot.constants.ts).
 */
export const hardwareModules: HardwareModule[] = [
	{
		id: 'head',
		name: 'Head',
		description: 'Rounded graphite shell for the visor, cameras, and audio array. Tough and friendly.',
		specs: [
			{ label: 'Shell', value: 'Matte polymer composite' },
			{ label: 'Articulation', value: '3-axis neck' },
			{ label: 'Serviceability', value: 'Tool-free panel access' },
		],
		hotspot: { x: 50, y: 8 },
	},
	{
		id: 'eyes',
		name: 'Eyes',
		description:
			'Glowing expressive eyes that blink, focus, and make warm contact. It\'s how Go-Bot shows he\'s listening.',
		specs: [
			{ label: 'Expressions', value: '200+ micro-states' },
			{ label: 'Gaze', value: 'Person-aware tracking' },
			{ label: 'Blink cadence', value: 'Organic, randomized' },
		],
		hotspot: { x: 60, y: 17 },
	},
	{
		id: 'display',
		name: 'Visor Display',
		description:
			'The glossy visor is a full display surface: captions, translations, diagrams, and gentle status glows.',
		specs: [
			{ label: 'Panel', value: 'Micro-LED, optically bonded' },
			{ label: 'Finish', value: 'Anti-glare optical glass' },
			{ label: 'Modes', value: 'Face · Captions · Content' },
		],
		hotspot: { x: 40, y: 21 },
	},
	{
		id: 'speakers',
		name: 'Speakers & Microphones',
		description:
			'A far-field six-mic array and warm full-range speaker make conversation natural from across the room.',
		specs: [
			{ label: 'Microphones', value: '6-mic beamforming' },
			{ label: 'Wake latency', value: '< 200 ms' },
			{ label: 'Languages', value: '40+' },
		],
		hotspot: { x: 30, y: 12 },
	},
	{
		id: 'chest',
		name: 'Chest & Emblem',
		description:
			'The mango emblem is Go-Bot\'s heartbeat. It breathes with him, pulses when he thinks, and signals state at a glance.',
		specs: [
			{ label: 'Element', value: 'Edge-lit light guide' },
			{ label: 'States', value: 'Idle · Listening · Thinking · Alert' },
			{ label: 'Brightness', value: 'Ambient-adaptive' },
		],
		hotspot: { x: 50, y: 49 },
	},
	{
		id: 'camera',
		name: 'Camera',
		description:
			'A chest-mounted stereo depth camera gives spatial understanding, processed on-device, with a physical shutter.',
		specs: [
			{ label: 'Sensor', value: '4K stereo depth' },
			{ label: 'Field of view', value: '150°' },
			{ label: 'Privacy', value: 'Hardware shutter + LED' },
		],
		hotspot: { x: 50, y: 61 },
	},
	{
		id: 'cpu',
		name: 'CPU & Neural Engine',
		description:
			'On-device AI, instant and private, running BEING by Engage — the brain behind every Go-Bot feature. Your data stays yours.',
		specs: [
			{ label: 'Neural engine', value: '48 TOPS on-device' },
			{ label: 'Memory', value: '32 GB unified' },
			{ label: 'Engine', value: 'BEING by Engage' },
			{ label: 'Privacy', value: 'On-device first' },
		],
		hotspot: { x: 38, y: 53 },
	},
	{
		id: 'cooling',
		name: 'Cooling',
		description:
			'A silent passive hex-vent in the backpack keeps the neural engine at full performance without a whisper.',
		specs: [
			{ label: 'System', value: 'Passive vapor chamber' },
			{ label: 'Vent', value: 'Rear hex grille' },
			{ label: 'Noise', value: '0 dB, no fans' },
		],
		hotspot: { x: 62, y: 53 },
	},
	{
		id: 'arms',
		name: 'Arms',
		description:
			'Chunky compliant arms deliver gentle, human-safe motion with everyday strength.',
		specs: [
			{ label: 'Degrees of freedom', value: '7 per arm' },
			{ label: 'Payload', value: '2.5 kg per arm' },
			{ label: 'Safety', value: 'Force-limited, ISO 15066' },
		],
		hotspot: { x: 21, y: 52 },
	},
	{
		id: 'hands',
		name: 'Hands',
		description:
			'Soft orange hands with adaptive grip: firm enough for a grocery bag, gentle enough for a grandmother\'s arm.',
		specs: [
			{ label: 'Grip', value: 'Adaptive soft-touch' },
			{ label: 'Sensing', value: 'Force + slip detection' },
			{ label: 'Material', value: 'Medical-grade silicone' },
		],
		hotspot: { x: 20, y: 70 },
	},
	{
		id: 'battery',
		name: 'Battery',
		description:
			'A hot-swappable pack in the backpack powers a full active day and charges over USB-C.',
		specs: [
			{ label: 'Runtime', value: '12 h active use' },
			{ label: 'Charging', value: 'USB-C fast charge' },
			{ label: 'Swap', value: 'Hot-swappable pack' },
		],
		hotspot: { x: 74, y: 44 },
	},
	{
		id: 'backpack',
		name: 'Carry Straps',
		description:
			'The straps aren\'t his, they\'re yours. Fold him in, sling him on, and wear Go-Bot like a backpack. That\'s the “wearable” in wearable humanoid robot.',
		specs: [
			{ label: 'Spine light', value: 'Status + charge indicator' },
			{ label: 'Straps', value: 'Human-wearable, quick-release' },
			{ label: 'Carry weight', value: 'Balanced backpack-grade fit' },
		],
		hotspot: { x: 78, y: 56 },
	},
	{
		id: 'sensors',
		name: 'Body Sensors',
		description:
			'Body-wide proximity, balance, and terrain sensing keep every movement aware and predictable.',
		specs: [
			{ label: 'Suite', value: 'IMU · proximity · terrain' },
			{ label: 'Coverage', value: '360° awareness' },
			{ label: 'Rate', value: '1 kHz fusion loop' },
		],
		hotspot: { x: 66, y: 68 },
	},
	{
		id: 'legs',
		name: 'Legs',
		description:
			'Short, stable legs with dynamic balance walk human spaces smoothly: stairs, thresholds, and all.',
		specs: [
			{ label: 'Gait', value: 'Dynamic balanced walking' },
			{ label: 'Speed', value: '1.8 m/s' },
			{ label: 'Stairs', value: 'Standard residential' },
		],
		hotspot: { x: 42, y: 82 },
	},
	{
		id: 'feet',
		name: 'Feet',
		description:
			'Grippy boots on orange soles, with floor-safe tread that never marks and never slips.',
		specs: [
			{ label: 'Soles', value: 'High-grip, non-marking' },
			{ label: 'Sensing', value: 'Ground-contact force' },
			{ label: 'Design', value: 'The signature orange' },
		],
		hotspot: { x: 58, y: 93 },
	},
	{
		id: 'expansion',
		name: 'Expansion Ports',
		description:
			'Two modular bays in the backpack accept future capability hardware: new senses, new skills.',
		specs: [
			{ label: 'Bays', value: '2× modular' },
			{ label: 'Interface', value: 'Power + high-speed data' },
			{ label: 'Updates', value: 'Over-the-air firmware' },
		],
		hotspot: { x: 80, y: 66 },
	},
	{
		id: 'charging',
		name: 'Charging',
		description:
			'USB-C on the backpack plus an optional dock Go-Bot walks himself to when the day winds down.',
		specs: [
			{ label: 'Port', value: 'USB-C PD 3.1' },
			{ label: 'Dock', value: 'Self-docking (optional)' },
			{ label: '0–80%', value: '45 minutes' },
		],
		hotspot: { x: 34, y: 66 },
	},
];
