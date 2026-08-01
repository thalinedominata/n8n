import type { AiDemoMessage } from '@/types';

/**
 * Scripted conversation for the AI demo section. Mock data only — the live
 * conversational Go-Bot ships in Version 3 (see docs/roadmap.md).
 */
export const aiDemoConversation: AiDemoMessage[] = [
	{
		id: 'm1',
		role: 'visitor',
		text: 'Go-Bot, Mom lands at 6 and I’m stuck at work. Can you get the house ready?',
	},
	{
		id: 'm2',
		role: 'gobot',
		text: 'Already on it. Guest room is warm, the oven preheats at 5:15, and I’ll start the lasagna so dinner’s ready for 6:45.',
	},
	{
		id: 'm3',
		role: 'visitor',
		text: 'Perfect. She uses a cane now — anything we should change?',
	},
	{
		id: 'm4',
		role: 'gobot',
		text: 'I’ve cleared the hallway rug and brightened the stair lights. I’ll walk beside her on the steps and keep an eye out, gently.',
	},
	{
		id: 'm5',
		role: 'visitor',
		text: 'You’re the best. What would we do without you?',
	},
	{
		id: 'm6',
		role: 'gobot',
		text: 'You’d manage — but I’m very glad you don’t have to. See you both at six. 🧡',
	},
];
