/**
 * Content domain models.
 *
 * Every marketing/content surface on the platform renders from typed data in
 * `src/data`. Components never hardcode copy — they consume these models.
 */

import type { LucideIcon } from 'lucide-react';

/** A single domain of human life that Go-Bot improves. */
export interface LifeDomain {
	id: string;
	title: string;
	tagline: string;
	description: string;
	icon: LucideIcon;
	/** Accent tint used for the domain card hover state (design-token key). */
	accent: 'orange' | 'amber' | 'warm';
}

/** An industry vertical Go-Bot serves. */
export interface Industry {
	id: string;
	name: string;
	description: string;
	icon: LucideIcon;
	stat: {
		value: string;
		label: string;
	};
}

/** A phase on the public product roadmap. */
export interface RoadmapPhase {
	id: string;
	version: string;
	title: string;
	period: string;
	status: 'shipped' | 'active' | 'planned';
	highlights: string[];
}

/** A physical subsystem of the Go-Bot hardware platform. */
export interface HardwareModule {
	id: string;
	name: string;
	description: string;
	specs: Array<{ label: string; value: string }>;
	/** Anchor position on the hardware explorer figure, in percent. */
	hotspot: { x: number; y: number };
}

/** A layer of the Go-Bot platform architecture. */
export interface ArchitectureLayer {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	icon: LucideIcon;
}

/** A capability of the Go-Bot AI system. */
export interface Capability {
	id: string;
	name: string;
	description: string;
	icon: LucideIcon;
}

/** A top-level navigation entry. */
export interface NavItem {
	label: string;
	href: string;
}
