'use client';

import { useRef, useState } from 'react';
import { motion, useTransform } from 'motion/react';
import { useInterval, usePointerOffset, usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/lib/utils';
import { BLINK, BREATH, GAZE, THINK, PALETTE } from './go-bot.constants';

export type GoBotMood = 'idle' | 'thinking';

export interface GoBotProps {
	className?: string;
	/** Rendered width in pixels; height follows the canonical proportions. */
	size?: number;
	/** Accessible label announced to screen readers. */
	label?: string;
}

/**
 * Go-Bot — the animated character.
 *
 * Faithful to the prototype's proportions (see go-bot.constants.ts) and
 * personality: warm, curious, optimistic. Four idle behaviors make him feel
 * alive and aware of the visitor:
 *
 *  1. Breathing  — a slow vertical bob with subtle squash on the body.
 *  2. Blinking   — randomized double-tap blinks so the rhythm feels organic.
 *  3. Gaze       — eyes and head softly track the visitor's pointer.
 *  4. Thinking   — occasionally he glances up and to the side while three
 *                  thought dots cascade above his antenna.
 *
 * All behaviors pause when the user prefers reduced motion; Go-Bot then
 * holds a friendly static pose.
 */
export function GoBot({ className, size = 320, label = 'Go-Bot, your robotic companion' }: GoBotProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const reducedMotion = usePrefersReducedMotion();
	const pointer = usePointerOffset(rootRef);

	const [isBlinking, setIsBlinking] = useState(false);
	const [mood, setMood] = useState<GoBotMood>('idle');

	const animate = !reducedMotion;
	const thinking = animate && mood === 'thinking';

	// --- Blinking: randomized cadence, occasionally a quick double blink. ---
	useInterval(
		() => {
			setIsBlinking(true);
			setTimeout(() => setIsBlinking(false), BLINK.closeMs);
			if (Math.random() < BLINK.doubleBlinkChance) {
				setTimeout(() => setIsBlinking(true), BLINK.closeMs + 90);
				setTimeout(() => setIsBlinking(false), BLINK.closeMs * 2 + 90);
			}
		},
		animate ? [BLINK.minGapMs, BLINK.maxGapMs] : null,
	);

	// --- Thinking: an occasional moment of visible contemplation. ---
	useInterval(
		() => {
			setMood('thinking');
			setTimeout(() => setMood('idle'), THINK.holdMs);
		},
		animate ? [THINK.minGapMs, THINK.maxGapMs] : null,
	);

	// --- Gaze: pointer offset → eye travel and gentle head language. ---
	const eyeX = useTransform(pointer.x, [-1, 1], [-GAZE.eyeTravelX, GAZE.eyeTravelX]);
	const eyeY = useTransform(pointer.y, [-1, 1], [-GAZE.eyeTravelY, GAZE.eyeTravelY]);
	const headX = useTransform(pointer.x, [-1, 1], [-GAZE.headTravelX, GAZE.headTravelX]);
	const headRotate = useTransform(pointer.x, [-1, 1], [-GAZE.headTiltDeg, GAZE.headTiltDeg]);

	return (
		<div
			ref={rootRef}
			className={cn('relative inline-block select-none', className)}
			style={{ width: size, height: size * 1.2 }}
			role="img"
			aria-label={label}
		>
			<motion.svg
				viewBox="0 0 200 240"
				className="h-full w-full overflow-visible"
				animate={animate ? { y: [0, -BREATH.bobPx, 0] } : undefined}
				transition={
					animate
						? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' }
						: undefined
				}
			>
				{/* ---------- Thought dots (thinking state) ---------- */}
				{[0, 1, 2].map((i) => (
					<motion.circle
						key={i}
						cx={140 + i * 14}
						cy={26 - i * 10}
						r={3 + i * 1.5}
						fill={PALETTE.orange}
						initial={false}
						animate={{
							opacity: thinking ? [0, 1, 1, 0] : 0,
							scale: thinking ? [0.5, 1, 1, 0.5] : 0.5,
						}}
						transition={
							thinking
								? { duration: THINK.holdMs / 1000, delay: i * 0.18, ease: 'easeInOut' }
								: { duration: 0.2 }
						}
					/>
				))}

				{/* ---------- Shadow ---------- */}
				<ellipse cx="100" cy="232" rx="46" ry="7" fill={PALETTE.shadow} />

				{/* ---------- Body (breathing squash) ---------- */}
				<motion.g
					style={{ originX: '100px', originY: '210px' }}
					animate={animate ? { scaleY: [1, 1 + BREATH.squash, 1] } : undefined}
					transition={
						animate
							? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' }
							: undefined
					}
				>
					{/* Arms */}
					<motion.rect
						x="26" y="140" width="18" height="52" rx="9"
						fill={PALETTE.shell}
						stroke={PALETTE.line} strokeWidth="2.5"
						animate={animate ? { rotate: [0, 2.5, 0] } : undefined}
						style={{ originX: '35px', originY: '148px' }}
						transition={animate ? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' } : undefined}
					/>
					<motion.rect
						x="156" y="140" width="18" height="52" rx="9"
						fill={PALETTE.shell}
						stroke={PALETTE.line} strokeWidth="2.5"
						animate={animate ? { rotate: [0, -2.5, 0] } : undefined}
						style={{ originX: '165px', originY: '148px' }}
						transition={animate ? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' } : undefined}
					/>

					{/* Torso */}
					<rect
						x="48" y="128" width="104" height="98" rx="30"
						fill={PALETTE.shell}
						stroke={PALETTE.line} strokeWidth="3"
					/>
					{/* Chest light — Go-Bot's heartbeat */}
					<motion.circle
						cx="100" cy="170" r="11"
						fill={PALETTE.orange}
						animate={animate ? { opacity: [1, 0.55, 1], scale: [1, 1.12, 1] } : undefined}
						style={{ originX: '100px', originY: '170px' }}
						transition={animate ? { duration: BREATH.periodS / 2, repeat: Infinity, ease: 'easeInOut' } : undefined}
					/>
					<circle cx="100" cy="170" r="16" fill="none" stroke={PALETTE.orangeSoft} strokeWidth="3" />
				</motion.g>

				{/* ---------- Head (gaze-driven) ---------- */}
				<motion.g style={{ x: headX, rotate: headRotate, originX: '100px', originY: '120px' }}>
					{/* Antenna */}
					<line x1="100" y1="30" x2="100" y2="14" stroke={PALETTE.line} strokeWidth="3.5" strokeLinecap="round" />
					<motion.circle
						cx="100" cy="10" r="6"
						fill={PALETTE.orange}
						animate={animate ? { scale: thinking ? [1, 1.35, 1] : 1 } : undefined}
						style={{ originX: '100px', originY: '10px' }}
						transition={thinking ? { duration: 0.7, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
					/>

					{/* Head shell */}
					<rect
						x="34" y="30" width="132" height="96" rx="42"
						fill={PALETTE.shell}
						stroke={PALETTE.line} strokeWidth="3"
					/>
					{/* Ears */}
					<rect x="22" y="64" width="12" height="28" rx="6" fill={PALETTE.orange} />
					<rect x="166" y="64" width="12" height="28" rx="6" fill={PALETTE.orange} />

					{/* Visor */}
					<rect x="48" y="46" width="104" height="64" rx="30" fill={PALETTE.visor} />

					{/* Eyes: gaze travel + blink + thinking glance */}
					<motion.g style={{ x: eyeX, y: eyeY }}>
						<motion.g
							initial={false}
							animate={{
								x: thinking ? THINK.glance.x : 0,
								y: thinking ? THINK.glance.y : 0,
							}}
							transition={{ type: 'spring', stiffness: 120, damping: 16 }}
						>
							<motion.rect
								x="70" y="64" width="16" height="26" rx="8"
								fill={PALETTE.orange}
								animate={{ scaleY: isBlinking ? 0.08 : 1 }}
								style={{ originX: '78px', originY: '77px' }}
								transition={{ duration: 0.09 }}
							/>
							<motion.rect
								x="114" y="64" width="16" height="26" rx="8"
								fill={PALETTE.orange}
								animate={{ scaleY: isBlinking ? 0.08 : 1 }}
								style={{ originX: '122px', originY: '77px' }}
								transition={{ duration: 0.09 }}
							/>
						</motion.g>
					</motion.g>

					{/* Mouth: a soft smile that flattens slightly while thinking */}
					<motion.path
						initial={false}
						animate={{ d: thinking ? 'M 90 99 Q 100 100 110 99' : 'M 88 96 Q 100 106 112 96' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						fill="none"
						stroke={PALETTE.orange}
						strokeWidth="3.5"
						strokeLinecap="round"
					/>
				</motion.g>
			</motion.svg>
		</div>
	);
}
