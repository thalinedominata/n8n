import { Ear, Eye, MessageCircleHeart, Move3d, Puzzle, Lightbulb } from 'lucide-react';
import type { Capability } from '@/types';

export const capabilities: Capability[] = [
	{
		id: 'see',
		name: 'Sees & understands',
		description: 'Recognizes people, objects, and context in real time.',
		icon: Eye,
	},
	{
		id: 'listen',
		name: 'Listens naturally',
		description: 'Understands conversational speech from across the room.',
		icon: Ear,
	},
	{
		id: 'converse',
		name: 'Converses warmly',
		description: 'Speaks with personality, empathy, and perfect patience.',
		icon: MessageCircleHeart,
	},
	{
		id: 'move',
		name: 'Moves gracefully',
		description: 'Navigates human spaces with smooth, safe motion.',
		icon: Move3d,
	},
	{
		id: 'solve',
		name: 'Solves problems',
		description: 'Plans multi-step tasks and adapts when things change.',
		icon: Puzzle,
	},
	{
		id: 'learn',
		name: 'Learns you',
		description: 'Adapts to routines and preferences, becoming more helpful daily.',
		icon: Lightbulb,
	},
];
