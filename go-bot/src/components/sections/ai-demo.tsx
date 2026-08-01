'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Container, SectionHeading, Logo } from '@/components/ui';
import { aiDemoConversation } from '@/data/ai-demo';
import { usePrefersReducedMotion } from '@/hooks';
import { duration, ease } from '@/animations/tokens';
import { cn } from '@/lib/utils';

const TYPING_MS = 1100;
const READING_MS = 900;

/**
 * Scripted conversation with Go-Bot. Messages play in sequence with a
 * typing indicator when the section scrolls into view — mock data only;
 * the live conversational Go-Bot arrives in Version 3.
 */
export function AiDemo() {
	const stageRef = useRef<HTMLDivElement>(null);
	const inView = useInView(stageRef, { once: true, margin: '-120px' });
	const reducedMotion = usePrefersReducedMotion();

	const [visibleCount, setVisibleCount] = useState(0);
	const [isTyping, setIsTyping] = useState(false);

	useEffect(() => {
		if (!inView) return;
		if (reducedMotion) {
			setVisibleCount(aiDemoConversation.length);
			return;
		}
		if (visibleCount >= aiDemoConversation.length) return;

		const next = aiDemoConversation[visibleCount];
		const isGobotTurn = next?.role === 'gobot';
		const typingTimer = setTimeout(() => setIsTyping(isGobotTurn), READING_MS);
		const revealTimer = setTimeout(
			() => {
				setIsTyping(false);
				setVisibleCount((count) => count + 1);
			},
			READING_MS + (isGobotTurn ? TYPING_MS : 300),
		);
		return () => {
			clearTimeout(typingTimer);
			clearTimeout(revealTimer);
		};
	}, [inView, reducedMotion, visibleCount]);

	return (
		<section id="ai-demo" className="bg-surface-warm py-28">
			<Container>
				<SectionHeading
					eyebrow="AI Demo"
					title="Talk to him like family."
					description="A glimpse of everyday conversation with Go-Bot. This preview is scripted — the live conversational Go-Bot arrives in Version 3."
				/>

				<div
					ref={stageRef}
					className="mx-auto max-w-2xl rounded-2xl border border-border-subtle bg-surface p-6 shadow-e3 sm:p-8"
				>
					<div className="flex items-center gap-3 border-b border-border-subtle pb-4">
						<span className="flex h-9 w-9 items-center justify-center rounded-pill bg-gobot-500 text-white">
							<Logo size={16} color="#ffffff" title="Go-Bot" />
						</span>
						<div>
							<p className="text-caption font-semibold">Go-Bot</p>
							<p className="flex items-center gap-1.5 text-overline text-success">
								<span className="h-1.5 w-1.5 rounded-pill bg-success" />
								Home · Listening
							</p>
						</div>
					</div>

					<div className="flex min-h-80 flex-col justify-end gap-3 py-6" aria-live="polite">
						<AnimatePresence initial={false}>
							{aiDemoConversation.slice(0, visibleCount).map((message) => (
								<motion.div
									key={message.id}
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
									aria-label="Go-Bot is typing"
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
			</Container>
		</section>
	);
}
