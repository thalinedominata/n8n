import { describe, expect, it } from 'vitest';
import { clamp, cn, mapRange } from '@/lib/utils';

describe('cn', () => {
	it('merges conditional class names', () => {
		expect(cn('a', false && 'b', 'c')).toBe('a c');
	});

	it('resolves tailwind conflicts, keeping the last class', () => {
		expect(cn('p-4', 'p-6')).toBe('p-6');
	});
});

describe('clamp', () => {
	it('clamps below the minimum', () => {
		expect(clamp(-2, 0, 1)).toBe(0);
	});

	it('clamps above the maximum', () => {
		expect(clamp(5, 0, 1)).toBe(1);
	});

	it('passes through in-range values', () => {
		expect(clamp(0.5, 0, 1)).toBe(0.5);
	});
});

describe('mapRange', () => {
	it('maps across ranges linearly', () => {
		expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
	});

	it('handles inverted output ranges', () => {
		expect(mapRange(0.25, 0, 1, 10, -10)).toBe(5);
	});

	it('guards against zero-width input ranges', () => {
		expect(mapRange(3, 2, 2, 0, 100)).toBe(0);
	});
});
