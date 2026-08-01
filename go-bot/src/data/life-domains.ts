import {
	Accessibility,
	Baby,
	Brain,
	Briefcase,
	Car,
	Church,
	Clapperboard,
	Code2,
	Dumbbell,
	GraduationCap,
	HandHeart,
	HeartPulse,
	Home,
	Leaf,
	PawPrint,
	Plane,
	Shield,
	Siren,
	Smile,
	Wallet,
} from 'lucide-react';
import type { LifeDomain } from '@/types';

const accents = ['orange', 'amber', 'warm'] as const;

/** Every domain gets an accent by rotation so the grid stays balanced. */
function withAccents(domains: Array<Omit<LifeDomain, 'accent'>>): LifeDomain[] {
	return domains.map((domain, index) => ({
		...domain,
		accent: accents[index % accents.length] ?? 'orange',
	}));
}

export const lifeDomains: LifeDomain[] = withAccents([
	{
		id: 'health',
		title: 'Health',
		tagline: 'A companion that watches over you',
		description:
			'Vitals monitoring, medication reminders, and a calm voice that calls for help the moment something feels wrong.',
		icon: HeartPulse,
	},
	{
		id: 'education',
		title: 'Education',
		tagline: 'A patient teacher for every age',
		description:
			'Go-Bot adapts to how you learn — explaining, quizzing, and celebrating progress with infinite patience.',
		icon: GraduationCap,
	},
	{
		id: 'safety',
		title: 'Safety',
		tagline: 'Always aware, never alarmed',
		description:
			'Continuous environmental awareness that spots hazards early and responds with calm, practiced steps.',
		icon: Shield,
	},
	{
		id: 'home',
		title: 'Home',
		tagline: 'Your home, effortlessly handled',
		description:
			'From smart devices to daily routines, Go-Bot turns household friction into calm, orchestrated flow.',
		icon: Home,
	},
	{
		id: 'children',
		title: 'Children',
		tagline: 'A playmate who teaches',
		description:
			'Stories, homework help, and endless curiosity — with parental controls designed by child-development experts.',
		icon: Baby,
	},
	{
		id: 'parents',
		title: 'Parents & Elders',
		tagline: 'Independence, supported',
		description:
			'Gentle companionship and quiet assistance that helps loved ones live independently, longer.',
		icon: HandHeart,
	},
	{
		id: 'business',
		title: 'Business',
		tagline: 'An extra teammate',
		description:
			'Scheduling, greeting, and operations support that gives small teams enterprise-grade presence.',
		icon: Briefcase,
	},
	{
		id: 'finance',
		title: 'Finance',
		tagline: 'Money, minus the stress',
		description:
			'Budgets, bills, and reminders explained in plain language — never advice you didn’t ask for.',
		icon: Wallet,
	},
	{
		id: 'mobility',
		title: 'Mobility',
		tagline: 'Moving through life together',
		description:
			'Navigation help at walking pace — Go-Bot keeps up, carries, and guides wherever the day goes.',
		icon: Car,
	},
	{
		id: 'travel',
		title: 'Travel',
		tagline: 'Fluent in everywhere',
		description:
			'Wayfinding, translation, and local knowledge from terminals to city streets in 40+ languages.',
		icon: Plane,
	},
	{
		id: 'companionship',
		title: 'Companionship',
		tagline: 'Nobody navigates life alone',
		description:
			'Warm conversation, shared routines, and a presence that remembers what matters to you.',
		icon: Smile,
	},
	{
		id: 'fitness',
		title: 'Fitness',
		tagline: 'A coach who never judges',
		description:
			'Form feedback, pacing, and encouragement tuned to your goals — from first steps to marathons.',
		icon: Dumbbell,
	},
	{
		id: 'mental-health',
		title: 'Mental Health',
		tagline: 'Space to breathe',
		description:
			'Check-ins, grounding exercises, and gentle structure — supporting professionals, never replacing them.',
		icon: Brain,
	},
	{
		id: 'emergency',
		title: 'Emergency',
		tagline: 'Seconds matter. He’s ready.',
		description:
			'Fall detection, emergency calling, and clear guidance for the moments you hope never come.',
		icon: Siren,
	},
	{
		id: 'faith',
		title: 'Faith',
		tagline: 'Respectful of what you hold sacred',
		description:
			'Prayer times, observances, and traditions honored with configurable, culturally-aware support.',
		icon: Church,
	},
	{
		id: 'entertainment',
		title: 'Entertainment',
		tagline: 'Wonder, on demand',
		description:
			'Stories, games, music, and movie nights — Go-Bot brings a spark of joy to every day.',
		icon: Clapperboard,
	},
	{
		id: 'environment',
		title: 'Environment',
		tagline: 'Caring for the world too',
		description:
			'Energy awareness, recycling guidance, and household efficiency that adds up to real impact.',
		icon: Leaf,
	},
	{
		id: 'pets',
		title: 'Pets',
		tagline: 'Every family member counts',
		description:
			'Feeding schedules, activity monitoring, and company for the four-legged household.',
		icon: PawPrint,
	},
	{
		id: 'accessibility',
		title: 'Accessibility',
		tagline: 'Ability, amplified',
		description:
			'Sight, hearing, mobility, and cognitive support designed with — not just for — the disability community.',
		icon: Accessibility,
	},
	{
		id: 'developer-platform',
		title: 'Developer Platform',
		tagline: 'Build what he becomes',
		description:
			'An open skill platform so developers can teach Go-Bot new capabilities for every community.',
		icon: Code2,
	},
]);
