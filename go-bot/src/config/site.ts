/** Global site configuration. Single source of truth for identity metadata. */
export const siteConfig = {
	name: 'Go-Bot',
	company: 'ENGAGE GLOBAL',
	title: 'Go-Bot — The wearable humanoid robot',
	description:
		'Go-Bot by ENGAGE GLOBAL — your intelligent companion for every stage of life. A wearable humanoid robot designed to improve every aspect of human life.',
	/** The live production origin (swap when a custom domain is attached). */
	url: 'https://go-bot-platform.vercel.app',
	mission: 'Create intelligent robotic companions that improve every aspect of human life.',
	social: {
		x: 'https://x.com/engageglobal',
		github: 'https://github.com/engage-global',
		linkedin: 'https://linkedin.com/company/engage-global',
	},
} as const;

export type SiteConfig = typeof siteConfig;
