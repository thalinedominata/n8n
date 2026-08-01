import {
	HeartPulse,
	Home,
	GraduationCap,
	Briefcase,
	Sparkles,
	Users,
} from 'lucide-react';
import type { LifeDomain } from '@/types';

export const lifeDomains: LifeDomain[] = [
	{
		id: 'health',
		title: 'Health & Wellbeing',
		tagline: 'A companion that watches over you',
		description:
			'Go-Bot monitors vitals, reminds you of medication, encourages movement, and calls for help the moment something feels wrong.',
		icon: HeartPulse,
		accent: 'orange',
	},
	{
		id: 'home',
		title: 'Home & Daily Living',
		tagline: 'Your home, effortlessly handled',
		description:
			'From coordinating smart devices to guiding daily routines, Go-Bot turns household friction into calm, orchestrated flow.',
		icon: Home,
		accent: 'warm',
	},
	{
		id: 'learning',
		title: 'Learning & Growth',
		tagline: 'A patient teacher for every age',
		description:
			'Go-Bot adapts to how you learn — explaining, quizzing, and celebrating progress with infinite patience and zero judgment.',
		icon: GraduationCap,
		accent: 'amber',
	},
	{
		id: 'work',
		title: 'Work & Productivity',
		tagline: 'Focus on what only you can do',
		description:
			'Go-Bot handles scheduling, reminders, and context-switching overhead so your attention stays on meaningful work.',
		icon: Briefcase,
		accent: 'orange',
	},
	{
		id: 'play',
		title: 'Play & Creativity',
		tagline: 'Wonder, on demand',
		description:
			'Stories, games, music, and creative collaboration — Go-Bot brings a spark of joy and imagination to every day.',
		icon: Sparkles,
		accent: 'amber',
	},
	{
		id: 'connection',
		title: 'Connection & Care',
		tagline: 'Nobody navigates life alone',
		description:
			'Go-Bot keeps families connected, supports independent living, and offers warm companionship when it matters most.',
		icon: Users,
		accent: 'warm',
	},
];
