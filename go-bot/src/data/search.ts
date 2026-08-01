import type { CommandItem } from '@/types';
import { mainNavigation } from './navigation';
import { lifeDomains } from './life-domains';
import { industries } from './industries';
import { capabilities } from './capabilities';

/**
 * The global search registry for the command palette (⌘K). Derived from
 * the content databases, so every new domain, industry, or capability is
 * searchable the moment its data entry exists. Plain strings only — safe
 * to pass across the server/client boundary.
 */
export const searchRegistry: CommandItem[] = [
	...mainNavigation.map((item) => ({
		id: `nav-${item.href}`,
		label: item.label,
		group: 'Sections',
		href: item.href.startsWith('#') ? `/${item.href}` : item.href,
	})),
	...lifeDomains.map((domain) => ({
		id: `domain-${domain.id}`,
		label: domain.title,
		group: 'Life Domains',
		href: `/domains/${domain.id}`,
		keywords: `${domain.tagline} ${domain.description}`,
	})),
	...industries.map((industry) => ({
		id: `industry-${industry.id}`,
		label: industry.name,
		group: 'Industries',
		href: `/industries/${industry.id}`,
		keywords: industry.description,
	})),
	...capabilities.map((capability) => ({
		id: `capability-${capability.id}`,
		label: capability.name,
		group: 'Capabilities',
		href: `/capabilities?c=${capability.id}`,
		keywords: `${capability.description} ${capability.uses.join(' ')} ${capability.worksFor.join(' ')}`,
	})),
];
