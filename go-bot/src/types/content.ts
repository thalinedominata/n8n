/**
 * Content domain models — the schema of the GXP content databases.
 *
 * Every surface on the platform renders from typed data in `src/data`.
 * Components never hardcode copy — they consume these models. When content
 * migrates to a CMS (V3), these interfaces become the CMS schema.
 */

import type { LucideIcon } from 'lucide-react';
import type { GoBotRole } from '@/components/gobot/go-bot.moods';

/** Frequently-asked question entry. */
export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

/** Rich per-domain content; every field is optional so domains fill in incrementally. */
export interface LifeDomainDetails {
	overview: string;
	features: Array<{ title: string; description: string }>;
	sensors: string[];
	aiModels: string[];
	stories: Array<{ id: string; quote: string; author: string }>;
	faq: FaqItem[];
	roadmap: string[];
}

/** A single domain of human life that Go-Bot improves. */
export interface LifeDomain {
	id: string;
	title: string;
	tagline: string;
	description: string;
	icon: LucideIcon;
	/** Accent tint used for the domain card hover state (design-token key). */
	accent: 'orange' | 'amber' | 'warm';
	/** Rich page content — filled in incrementally per domain. */
	details?: LifeDomainDetails;
}

/** An industry vertical Go-Bot serves. */
export interface Industry {
	id: string;
	name: string;
	description: string;
	icon: LucideIcon;
	/** Headline stat (first entry renders on the homepage grid). */
	stats: Array<{ value: string; label: string }>;
	/** Go-Bot role variant embodying this industry (omit for the clean look). */
	role?: GoBotRole;
	/** The industry-transformed experience. */
	scenario: {
		headline: string;
		points: string[];
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

/** A stage of the Go-Bot platform architecture flow. */
export interface ArchitectureLayer {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	icon: LucideIcon;
}

/** Hardware generations a capability can require. */
export type HardwareGeneration = 'gen-1' | 'gen-2' | 'future';

/**
 * A single entry in the capability engine — every function Go-Bot can
 * perform, searchable and cross-referenced against domains and industries.
 */
export interface Capability {
	id: string;
	name: string;
	description: string;
	icon: LucideIcon;
	category: 'safety' | 'health' | 'communication' | 'mobility' | 'cognition' | 'home';
	/** Sensors and systems the capability uses. */
	uses: string[];
	/** Audiences and settings it works for (free-form labels). */
	worksFor: string[];
	/** Life-domain ids this capability serves (validated by tests). */
	domains: string[];
	/** Industry ids this capability serves (validated by tests). */
	industries: string[];
	/** Current confidence, 0–100. */
	confidence: number;
	/** Hardware generations that support it. */
	hardware: HardwareGeneration[];
	safetyNotes?: string;
	/** Featured capabilities appear on the homepage. */
	featured?: boolean;
	/** Optional lifestyle photo shown on the homepage card. */
	image?: PersonaImage;
}

/** A single render in a Person-A feature. */
export interface PersonaImage {
	src: string;
	width: number;
	height: number;
	alt: string;
}

/**
 * A celebrity Go-Bot in the Person-A gallery — the prototype reimagined
 * in a cultural icon's signature look.
 */
export interface PersonaFeature {
	id: string;
	/** The person the feature pays tribute to. */
	name: string;
	/** The feature title, e.g. "The Voice". */
	title: string;
	description: string;
	/** The custom fit — what makes this Go-Bot theirs. */
	fit: string[];
	/** One or more renders; multiple render side by side. */
	images: PersonaImage[];
}

/**
 * A Robo-Swag line — a designer-collaboration wardrobe drop that dresses
 * Go-Bot (and, in twin sizes, his human).
 */
export interface SwagLine {
	id: string;
	name: string;
	/** Short positioning line, e.g. "High fashion". */
	tagline: string;
	description: string;
	icon: LucideIcon;
	/** Example pieces the line ships. */
	pieces: string[];
}

/** A top-level navigation entry. */
export interface NavItem {
	label: string;
	href: string;
}

/** An entry in the global search registry (command palette). */
export interface CommandItem {
	id: string;
	label: string;
	/** Group heading shown above the item, e.g. "Life Domains". */
	group: string;
	href: string;
	keywords?: string;
}

/** One turn in a scripted AI playground conversation. */
export interface AiDemoMessage {
	id: string;
	role: 'visitor' | 'gobot';
	text: string;
}

/** A selectable scenario in the AI playground. */
export interface AiDemoScenario {
	id: string;
	label: string;
	description: string;
	conversation: AiDemoMessage[];
}
