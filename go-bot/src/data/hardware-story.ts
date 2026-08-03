import type { GoBotFigureProps } from '@/components/gobot';

type FigureView = Exclude<GoBotFigureProps['media'], 'film'>;

/** One beat of the guided hardware tour. */
export interface HardwareStoryStep {
	/** Hardware module this beat features — must exist in `hardwareModules`. */
	moduleId: string;
	/** Which prototype render carries the beat. */
	view: FigureView;
	/** Hotspot anchor on that render, in percent of the photo. */
	x: number;
	y: number;
	/** One-line narration for the tour. */
	line: string;
}

/**
 * The guided tour — a curated walk through the anatomy, front to back,
 * ending on the reason he's called wearable. The scroll story renders
 * these beats in order; module names, descriptions, and specs come from
 * `hardwareModules` so the anatomy database stays the single source of
 * truth. Coordinates match the photo hotspots used by the explorer.
 */
export const hardwareStory: HardwareStoryStep[] = [
	{
		moduleId: 'head',
		view: 'front',
		x: 47,
		y: 14,
		line: 'It starts at the top, with the head that sees the room.',
	},
	{
		moduleId: 'eyes',
		view: 'front',
		x: 54,
		y: 23,
		line: 'Eyes that glow, blink, and actually look at you.',
	},
	{
		moduleId: 'speakers',
		view: 'front',
		x: 61,
		y: 30,
		line: 'A voice that comes from somewhere, not everywhere.',
	},
	{
		moduleId: 'chest',
		view: 'front',
		x: 53,
		y: 39,
		line: 'The triple-bar heartbeat: status you can read across the room.',
	},
	{
		moduleId: 'cpu',
		view: 'front',
		x: 46,
		y: 55,
		line: 'The brain lives here: on-device AI, private by default.',
	},
	{
		moduleId: 'feet',
		view: 'front',
		x: 58,
		y: 85,
		line: 'Planted, balanced, and orange, obviously.',
	},
	{
		moduleId: 'battery',
		view: 'back',
		x: 59,
		y: 55,
		line: 'Flip him around. The all-day battery rides low on his back.',
	},
	{
		moduleId: 'backpack',
		view: 'back',
		x: 42,
		y: 42,
		line: 'And the straps are not his. They are yours. Wear him.',
	},
];
