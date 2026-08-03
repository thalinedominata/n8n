'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { Container, SectionHeading, Logo, Chip } from '@/components/ui';
import { GoBotFigure, type GoBotMood } from '@/components/gobot';
import { aiDemoScenarios } from '@/data/ai-demo';
import { usePrefersReducedMotion } from '@/hooks';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

const TYPING_MS = 1100;
const READING_MS = 900;

/**
 * The AI playground: pick a scenario and watch a simulated conversation
 * with Go-Bot — he listens, thinks, talks, and beams beside the chat as
 * the script plays. Mock data only; live conversation ships in Version 3.
 */
export function AiDemo() {
	const stageRef = useRef<HTMLDivElement>(null);
	const inView = useInView(stageRef, { once: true, margin: '-120px' });
	const reducedMotion = usePrefersReducedMotion();

	const [scenarioId, setScenarioId] = useState(aiDemoScenarios[0]?.id ?? '');
	const [visibleCount, setVisibleCount] = useState(0);
	const [isTyping, setIsTyping] = useState(false);
	const [mood, setMood] = useState<GoBotMood>('listening');

	const scenario = aiDemoScenarios.find((entry) => entry.id === scenarioId) ?? aiDemoScenarios[0];
	const conversation = scenario?.conversation ?? [];
	const finished = visibleCount >= conversation.length;

	const restart = (id: string) => {
		setScenarioId(id);
		setVisibleCount(0);
		setIsTyping(false);
		setMood('listening');
	};

	useEffect(() => {
		if (!inView || !scenario) return;
		if (reducedMotion) {
			setVisibleCount(conversation.length);
			setMood('happy');
			return;
		}
		if (finished) {
			setMood('happy');
			return;
		}

		const next = conversation[visibleCount];
		const isGobotTurn = next?.role === 'gobot';
		const typingTimer = setTimeout(() => {
			if (isGobotTurn) {
				setIsTyping(true);
				setMood('thinking');
			}
		}, READING_MS);
		const revealTimer = setTimeout(
			() => {
				setIsTyping(false);
				setMood(isGobotTurn ? 'talking' : 'listening');
				setVisibleCount((count) => count + 1);
			},
			READING_MS + (isGobotTurn ? TYPING_MS : 300),
		);
		return () => {
			clearTimeout(typingTimer);
			clearTimeout(revealTimer);
		};
	}, [inView, reducedMotion, visibleCount, scenario, conversation, finished]);

	return (
		<section id="ai-demo" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="AI Playground"
					title="Ask him anything. Watch him care."
					description="Pick a scenario and watch Go-Bot listen, think, and respond. These previews are scripted; the live conversational Go-Bot arrives in Version 3."
				/>

				{/* Scenario picker */}
				<div className="mb-10 flex flex-wrap justify-center gap-2">
					{aiDemoScenarios.map((entry) => (
						<Chip
							key={entry.id}
							selected={entry.id === scenarioId}
							onClick={() => restart(entry.id)}
						>
							{entry.label}
						</Chip>
					))}
				</div>

				<div
					ref={stageRef}
					className="mx-auto grid max-w-4xl items-end gap-8 lg:grid-cols-[0.4fr_1fr]"
				>
					{/* Go-Bot presides over the conversation; the pill reads out his state */}
					<div className="hidden flex-col items-center gap-3 lg:flex">
						<GoBotFigure media="front" className="w-full max-w-56" />
						<span
							aria-label={`Go-Bot is ${mood}`}
							className="rounded-pill bg-surface px-4 py-1.5 text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-gobot-700 shadow-e1"
						>
							{mood}
						</span>
					</div>

					{/* Conversation stage */}
					<div className="rounded-2xl border border-border-subtle bg-surface p-6 shadow-e3 sm:p-8">
						<div className="flex items-center justify-between border-b border-border-subtle pb-4">
							<div className="flex items-center gap-3">
								<span className="flex h-9 w-9 items-center justify-center rounded-pill bg-gobot-500 text-white">
									<Logo size={16} color="#ffffff" title="Go-Bot" />
								</span>
								<div>
									<p className="text-caption font-semibold">Go-Bot</p>
									<p className="flex items-center gap-1.5 text-overline text-success">
										<span className="h-1.5 w-1.5 rounded-pill bg-success" />
										Home · {scenario?.description}
									</p>
								</div>
							</div>
							<button
								type="button"
								onClick={() => restart(scenarioId)}
								aria-label="Replay conversation"
								className="rounded-pill p-2 text-ink-tertiary transition-colors duration-(--duration-fast) hover:bg-surface-sunken hover:text-ink"
							>
								<RotateCcw className="h-4 w-4" />
							</button>
						</div>

						<div className="flex min-h-80 flex-col justify-end gap-3 py-6" aria-live="polite">
							<AnimatePresence initial={false}>
								{conversation.slice(0, visibleCount).map((message) => (
									<motion.div
										key={`${scenarioId}-${message.id}`}
										initial={{ opacity: 0, y: 14, scale: 0.97 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										transition={{ duration: duration.base, ease: ease.outExpo }}
										className={cn(
											'max-w-[85%] rounded-xl px-4 py-3 text-caption sm:text-body',
											message.role === 'gobot'
												? 'self-start rounded-bl-sm bg-gobot-50 text-ink'
												: 'self-end rounded-br-sm bg-ink text-ink-inverse',
										)}
									>
										{message.text}
									</motion.div>
								))}
								{isTyping ? (
									<motion.div
										key="typing"
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="flex items-center gap-1.5 self-start rounded-xl rounded-bl-sm bg-gobot-50 px-4 py-3"
										aria-label="Go-Bot is thinking"
									>
										{[0, 1, 2].map((i) => (
											<motion.span
												key={i}
												className="h-1.5 w-1.5 rounded-pill bg-gobot-500"
												animate={{ opacity: [0.3, 1, 0.3] }}
												transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
											/>
										))}
									</motion.div>
								) : null}
							</AnimatePresence>
						</div>

						<div className="flex items-center gap-3 rounded-pill border border-border-subtle bg-surface-sunken px-5 py-3 text-caption text-ink-tertiary">
							<Sparkles className="h-4 w-4 text-gobot-500" aria-hidden />
							Live conversation arrives in Version 3
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
