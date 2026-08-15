import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge conditional class names with Tailwind conflict resolution. */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/** Clamp a number between a minimum and a maximum. */
export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

/** Map a value from one numeric range to another. */
export function mapRange(
	value: number,
	inMin: number,
	inMax: number,
	outMin: number,
	outMax: number,
): number {
	if (inMax === inMin) return outMin;
	const t = (value - inMin) / (inMax - inMin);
	return outMin + t * (outMax - outMin);
}
