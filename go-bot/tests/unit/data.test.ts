import { describe, expect, it } from 'vitest';
import { lifeDomains } from '@/data/life-domains';
import { industries } from '@/data/industries';
import { roadmap } from '@/data/roadmap';
import { hardwareModules } from '@/data/hardware';
import { architectureLayers } from '@/data/architecture';
import { capabilities } from '@/data/capabilities';
import { aiDemoScenarios } from '@/data/ai-demo';
import { searchRegistry } from '@/data/search';

describe('content data integrity', () => {
	it.each([
		['life domains', lifeDomains],
		['industries', industries],
		['roadmap', roadmap],
		['hardware modules', hardwareModules],
		['architecture layers', architectureLayers],
		['capabilities', capabilities],
		['ai demo scenarios', aiDemoScenarios],
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

	it('hardware explorer covers the full anatomy within figure bounds', () => {
		// The sixteen parts from the anatomy brief, plus the prototype's chest camera.
		const required = [
			'head', 'eyes', 'display', 'speakers', 'chest', 'battery', 'cpu', 'cooling',
			'arms', 'hands', 'legs', 'feet', 'backpack', 'sensors', 'charging', 'expansion',
		];
		const ids = new Set(hardwareModules.map((module) => module.id));
		for (const id of required) {
			expect(ids.has(id), `missing anatomy module: ${id}`).toBe(true);
		}
		for (const module of hardwareModules) {
			expect(module.hotspot.x).toBeGreaterThanOrEqual(0);
			expect(module.hotspot.x).toBeLessThanOrEqual(100);
			expect(module.hotspot.y).toBeGreaterThanOrEqual(0);
			expect(module.hotspot.y).toBeLessThanOrEqual(100);
		}
	});
});

describe('capability engine integrity', () => {
	const domainIds = new Set(lifeDomains.map((domain) => domain.id));
	const industryIds = new Set(industries.map((industry) => industry.id));

	it('confidence values are percentages', () => {
		for (const capability of capabilities) {
			expect(capability.confidence).toBeGreaterThanOrEqual(0);
			expect(capability.confidence).toBeLessThanOrEqual(100);
		}
	});

	it('domain cross-references resolve to real life domains', () => {
		for (const capability of capabilities) {
			for (const domainId of capability.domains) {
				expect(domainIds.has(domainId), `${capability.id} → ${domainId}`).toBe(true);
			}
		}
	});

	it('industry cross-references resolve to real industries', () => {
		for (const capability of capabilities) {
			for (const industryId of capability.industries) {
				expect(industryIds.has(industryId), `${capability.id} → ${industryId}`).toBe(true);
			}
		}
	});

	it('every capability declares uses, audiences, and hardware', () => {
		for (const capability of capabilities) {
			expect(capability.uses.length).toBeGreaterThan(0);
			expect(capability.worksFor.length).toBeGreaterThan(0);
			expect(capability.hardware.length).toBeGreaterThan(0);
		}
	});
});

describe('experience databases', () => {
	it('industries carry stats and a scenario', () => {
		for (const industry of industries) {
			expect(industry.stats.length).toBeGreaterThanOrEqual(1);
			expect(industry.scenario.points.length).toBeGreaterThanOrEqual(3);
		}
	});

	it('domains with details are fully populated', () => {
		const detailed = lifeDomains.filter((domain) => domain.details);
		expect(detailed.length).toBeGreaterThanOrEqual(6);
		for (const domain of detailed) {
			expect(domain.details?.features.length).toBeGreaterThan(0);
			expect(domain.details?.faq.length).toBeGreaterThan(0);
			expect(domain.details?.roadmap.length).toBeGreaterThan(0);
		}
	});

	it('search registry ids are unique and hrefs resolvable', () => {
		const ids = searchRegistry.map((item) => item.id);
		expect(new Set(ids).size).toBe(ids.length);
		for (const item of searchRegistry) {
			expect(item.href.startsWith('/')).toBe(true);
		}
	});

	it('ai demo scenarios alternate visitor and gobot turns', () => {
		for (const scenario of aiDemoScenarios) {
			expect(scenario.conversation.length).toBeGreaterThanOrEqual(4);
			expect(scenario.conversation[0]?.role).toBe('visitor');
		}
	});
});
