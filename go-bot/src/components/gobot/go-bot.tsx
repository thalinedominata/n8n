'use client';

import { useRef, useState } from 'react';
import { motion, useTransform } from 'motion/react';
import { useInterval, usePointerOffset, usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/lib/utils';
import { BLINK, BREATH, GAZE, THINK, PALETTE } from './go-bot.constants';

export type GoBotMood = 'idle' | 'thinking';

export interface GoBotProps {
	className?: string;
	/** Rendered width in pixels; height follows the canonical 200:250 proportions. */
	size?: number;
	/** Accessible label announced to screen readers. */
	label?: string;
}

/**
 * Go-Bot — the animated character, faithful to the supplied prototype:
 * graphite shell, glossy black visor with glowing orange eyes, the
 * triple-bar chest emblem, camera dot, orange hands, and boots on orange
 * soles. Proportions and behavior timing live in go-bot.constants.ts.
 *
 * Four idle behaviors make him feel alive and aware of the visitor:
 *
 *  1. Breathing  — a slow vertical bob with subtle squash on the body.
 *  2. Blinking   — randomized double-tap blinks of the glowing eyes.
 *  3. Gaze       — eyes and head softly track the visitor's pointer.
 *  4. Thinking   — an occasional glance up-and-away while thought dots
 *                  cascade beside his head and the chest emblem pulses.
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
			style={{ width: size, height: size * 1.25 }}
			role="img"
			aria-label={label}
		>
			<motion.svg
				viewBox="0 0 200 250"
				className="h-full w-full overflow-visible"
				animate={animate ? { y: [0, -BREATH.bobPx, 0] } : undefined}
				transition={
					animate
						? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' }
						: undefined
				}
			>
				<defs>
					<radialGradient id="gobot-eye-glow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor={PALETTE.glow} stopOpacity="0.55" />
						<stop offset="100%" stopColor={PALETTE.glow} stopOpacity="0" />
					</radialGradient>
					<linearGradient id="gobot-visor-sheen" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
						<stop offset="45%" stopColor="#ffffff" stopOpacity="0.02" />
						<stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
					</linearGradient>
				</defs>

				{/* ---------- Thought dots (thinking state) ---------- */}
				{[0, 1, 2].map((i) => (
					<motion.circle
						key={i}
						cx={150 + i * 13}
						cy={34 - i * 11}
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

				{/* ---------- Ground shadow ---------- */}
				<ellipse cx="100" cy="244" rx="52" ry="6" fill={PALETTE.shadow} />

				{/* ---------- Legs & boots ---------- */}
				<g>
					<rect x="70" y="176" width="26" height="52" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
					<rect x="104" y="176" width="26" height="52" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
					{/* Knee seams */}
					<line x1="73" y1="202" x2="93" y2="202" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
					<line x1="107" y1="202" x2="127" y2="202" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
					{/* Boots on orange soles */}
					<rect x="62" y="222" width="40" height="18" rx="9" fill={PALETTE.shellDark} />
					<rect x="98" y="222" width="40" height="18" rx="9" fill={PALETTE.shellDark} />
					<path d="M 62 234 h 40 v 3 a 6 6 0 0 1 -6 6 h -28 a 6 6 0 0 1 -6 -6 z" fill={PALETTE.orange} />
					<path d="M 98 234 h 40 v 3 a 6 6 0 0 1 -6 6 h -28 a 6 6 0 0 1 -6 -6 z" fill={PALETTE.orange} />
					{/* Orange toe caps */}
					<path d="M 62 231 a 9 9 0 0 1 9 -9 h 2 v 12 h -11 z" fill={PALETTE.orange} opacity="0.9" />
					<path d="M 98 231 a 9 9 0 0 1 9 -9 h 2 v 12 h -11 z" fill={PALETTE.orange} opacity="0.9" />
				</g>

				{/* ---------- Body (breathing squash) ---------- */}
				<motion.g
					style={{ originX: '100px', originY: '176px' }}
					animate={animate ? { scaleY: [1, 1 + BREATH.squash, 1] } : undefined}
					transition={
						animate
							? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' }
							: undefined
					}
				>
					{/* Backpack silhouette peeking out behind the shoulders */}
					<rect x="54" y="104" width="92" height="60" rx="24" fill={PALETTE.shellDark} />

					{/* Arms with orange hands */}
					<motion.g
						animate={animate ? { rotate: [0, 2, 0] } : undefined}
						style={{ originX: '47px', originY: '116px' }}
						transition={animate ? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' } : undefined}
					>
						<rect x="34" y="108" width="24" height="62" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
						<line x1="38" y1="140" x2="54" y2="140" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
						<ellipse cx="46" cy="176" rx="9" ry="10" fill={PALETTE.orange} />
					</motion.g>
					<motion.g
						animate={animate ? { rotate: [0, -2, 0] } : undefined}
						style={{ originX: '153px', originY: '116px' }}
						transition={animate ? { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' } : undefined}
					>
						<rect x="142" y="108" width="24" height="62" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
						<line x1="146" y1="140" x2="162" y2="140" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
						<ellipse cx="154" cy="176" rx="9" ry="10" fill={PALETTE.orange} />
					</motion.g>

					{/* Torso shell */}
					<rect x="60" y="102" width="80" height="80" rx="30" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2.5" />

					{/* Chest emblem — the triple-bar mark, glowing (his heartbeat) */}
					<motion.g
						animate={
							animate
								? { opacity: thinking ? [1, 0.45, 1] : [1, 0.7, 1] }
								: undefined
						}
						transition={
							animate
								? {
										duration: thinking ? 0.7 : BREATH.periodS / 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}
								: undefined
						}
					>
						<polygon points="88,118 112,118 107,123 93,123" fill={PALETTE.orange} />
						<polygon points="88,127 112,127 107,132 93,132" fill={PALETTE.orange} />
						<polygon points="93,136 112,136 107,141 88,141" fill={PALETTE.orange} />
					</motion.g>

					{/* Camera dot */}
					<circle cx="100" cy="156" r="6.5" fill={PALETTE.shellDark} stroke={PALETTE.seam} strokeWidth="1.5" />
					<circle cx="100" cy="156" r="3" fill="#3a3a42" />
					<circle cx="101.5" cy="154.5" r="1" fill="#8a8a95" />
				</motion.g>

				{/* ---------- Neck ---------- */}
				<rect x="90" y="90" width="20" height="14" rx="6" fill={PALETTE.shellDark} />

				{/* ---------- Head (gaze-driven) ---------- */}
				<motion.g style={{ x: headX, rotate: headRotate, originX: '100px', originY: '92px' }}>
					{/* Head shell */}
					<rect x="54" y="12" width="92" height="80" rx="32" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2.5" />
					{/* Side panel seams */}
					<circle cx="63" cy="46" r="7" fill="none" stroke={PALETTE.seam} strokeWidth="1.5" opacity="0.7" />
					<circle cx="137" cy="46" r="7" fill="none" stroke={PALETTE.seam} strokeWidth="1.5" opacity="0.7" />

					{/* Glossy visor */}
					<rect x="66" y="28" width="68" height="50" rx="18" fill={PALETTE.visor} />
					<rect x="66" y="28" width="68" height="50" rx="18" fill="url(#gobot-visor-sheen)" />

					{/* Eyes: glow + gaze travel + blink + thinking glance */}
					<motion.g style={{ x: eyeX, y: eyeY }}>
						<motion.g
							initial={false}
							animate={{
								x: thinking ? THINK.glance.x : 0,
								y: thinking ? THINK.glance.y : 0,
							}}
							transition={{ type: 'spring', stiffness: 120, damping: 16 }}
						>
							<circle cx="88" cy="53" r="12" fill="url(#gobot-eye-glow)" />
							<circle cx="112" cy="53" r="12" fill="url(#gobot-eye-glow)" />
							<motion.ellipse
								cx="88" cy="53" rx="5" ry="7.5"
								fill={PALETTE.orange}
								animate={{ scaleY: isBlinking ? 0.08 : 1 }}
								style={{ originX: '88px', originY: '53px' }}
								transition={{ duration: 0.09 }}
							/>
							<motion.ellipse
								cx="112" cy="53" rx="5" ry="7.5"
								fill={PALETTE.orange}
								animate={{ scaleY: isBlinking ? 0.08 : 1 }}
								style={{ originX: '112px', originY: '53px' }}
								transition={{ duration: 0.09 }}
							/>
						</motion.g>
					</motion.g>
				</motion.g>
			</motion.svg>
		</div>
	);
}
