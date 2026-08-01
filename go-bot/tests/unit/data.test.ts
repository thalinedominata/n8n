import { describe, expect, it } from 'vitest';
import { lifeDomains } from '@/data/life-domains';
import { industries } from '@/data/industries';
import { roadmap } from '@/data/roadmap';
import { hardwareModules } from '@/data/hardware';
import { architectureLayers } from '@/data/architecture';
import { capabilities } from '@/data/capabilities';

describe('content data integrity', () => {
	it.each([
		['life domains', lifeDomains],
		['industries', industries],
		['roadmap', roadmap],
		['hardware modules', hardwareModules],
		['architecture layers', architectureLayers],
		['capabilities', capabilities],
	] as const)('%s have unique, kebab-case ids', (_name, items) => {
		const ids = items.map((item) => item.id);
		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) {
			expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
		}
	});

	it('exactly one roadmap phase is active', () => {
		expect(roadmap.filter((phase) => phase.status === 'active')).toHaveLength(1);
	});

	it('hardware hotspots stay within the figure bounds', () => {
		for (const module of hardwareModules) {
			expect(module.hotspot.x).toBeGreaterThanOrEqual(0);
			expect(module.hotspot.x).toBeLessThanOrEqual(100);
			expect(module.hotspot.y).toBeGreaterThanOrEqual(0);
			expect(module.hotspot.y).toBeLessThanOrEqual(100);
		}
	});
});
