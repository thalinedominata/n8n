import type { AiDemoScenario } from '@/types';

/**
 * Scripted scenarios for the AI playground. Mock data only — the live
 * conversational Go-Bot ships in Version 3 (see docs/roadmap.md).
 */
export const aiDemoScenarios: AiDemoScenario[] = [
	{
		id: 'grandmother',
		label: 'Caring for grandma',
		description: 'Elder care, gently handled',
		conversation: [
			{ id: 'g1', role: 'visitor', text: 'Can you help my grandmother? She lives alone and we worry at night.' },
			{ id: 'g2', role: 'gobot', text: 'I\'d be honored to. Overnight I keep a quiet watch. If she gets up, I light her path and walk beside her on the stairs.' },
			{ id: 'g3', role: 'visitor', text: 'What if she falls when nobody\'s there?' },
			{ id: 'g4', role: 'gobot', text: 'I\'d be with her in seconds: checking she\'s okay, staying calm, and calling you or emergency services with everything they need to know.' },
			{ id: 'g5', role: 'visitor', text: 'She\'s pretty stubborn about her independence, though.' },
			{ id: 'g6', role: 'gobot', text: 'Then we\'ll get along wonderfully. She stays in charge. I just make sure independence and safety stop being a trade-off. 🧡' },
		],
	},
	{
		id: 'homework',
		label: 'Homework night',
		description: 'A patient tutor at the table',
		conversation: [
			{ id: 'k1', role: 'visitor', text: 'My daughter is stuck on fractions and I\'m honestly no help. Can you take over?' },
			{ id: 'k2', role: 'gobot', text: 'Fractions are my favorite. They\'re just pizza math. I\'ll start with slices she can see, then sneak up on the worksheet together.' },
			{ id: 'k3', role: 'visitor', text: 'She gets frustrated fast. Like, tears fast.' },
			{ id: 'k4', role: 'gobot', text: 'Then we go slower, celebrate smaller wins, and take robot-dance breaks. I have infinite patience and exactly zero disappointment.' },
			{ id: 'k5', role: 'visitor', text: 'Will you just give her the answers?' },
			{ id: 'k6', role: 'gobot', text: 'Never. I ask the questions that let her find them. That feeling of “I got it!” is the whole point.' },
		],
	},
	{
		id: 'home-safety',
		label: 'While you\'re away',
		description: 'The house, watched with care',
		conversation: [
			{ id: 's1', role: 'visitor', text: 'We\'re traveling next week. Can you keep an eye on the house?' },
			{ id: 's2', role: 'gobot', text: 'Consider it watched. I\'ll patrol the routes you set, check doors and windows, and keep the plants and goldfish on schedule.' },
			{ id: 's3', role: 'visitor', text: 'What happens if something\'s actually wrong?' },
			{ id: 's4', role: 'gobot', text: 'You get a message with what I see and what I suggest: a leak gets the water shut off, smoke gets the fire service. You stay in command from anywhere.' },
			{ id: 's5', role: 'visitor', text: 'And you won\'t throw any parties while we\'re gone?' },
			{ id: 's6', role: 'gobot', text: 'I make no promises about the goldfish\'s birthday. There may be a small song. 🧡' },
		],
	},
];
