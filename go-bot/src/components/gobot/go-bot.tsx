'use client';

import { useRef, useState } from 'react';
import { motion, useTransform } from 'motion/react';
import { useInterval, usePointerOffset, usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/lib/utils';
import { BLINK, BREATH, GAZE, THINK, PALETTE } from './go-bot.constants';
import { MOODS, type GoBotMood, type GoBotRole } from './go-bot.moods';
import { GoBotRoleBadge } from './go-bot-role-badge';
import { MARK_LEAF_D, MARK_MANGO_D } from '@/components/ui/go-bot-logo-paths';

/**
 * The MANGOBOT mango, scaled onto the chest. The mark's own coordinate space
 * is the 512-box from MARK_VIEWBOX; this transform lands it centered in the
 * emblem zone (x 88–112, y ~121–137) that the old three-bar mark occupied.
 */
const CHEST_MANGO_TRANSFORM = 'translate(78.2, 116.4) scale(0.05)';

function ChestMango() {
	return (
		<g transform={CHEST_MANGO_TRANSFORM}>
			<path d={MARK_MANGO_D} fill={PALETTE.orange} fillRule="evenodd" />
			<path d={MARK_LEAF_D} fill={PALETTE.orange} fillRule="evenodd" />
		</g>
	);
}

export interface GoBotProps {
	className?: string;
	/** Rendered width in pixels; height follows the canonical 200:250 proportions. */
	size?: number;
	/** Accessible label announced to screen readers. */
	label?: string;
	/**
	 * Controlled mood. When omitted, Go-Bot runs his autonomous idle life:
	 * mostly `idle`, with occasional `thinking` moments.
	 */
	mood?: GoBotMood;
	/** Optional profession accessory (see go-bot.presets.tsx). */
	role?: GoBotRole;
}

/**
 * Go-Bot — the animated character, faithful to the supplied prototype:
 * graphite shell, glossy black visor with glowing orange eyes, the
 * mango chest emblem, camera dot, orange hands, and boots on orange
 * soles. Proportions live in go-bot.constants.ts; the expression
 * vocabulary lives in go-bot.moods.ts.
 *
 * Always-on idle behaviors (any mood): breathing with a subtle body
 * squash, randomized double-tap blinks, and — when the mood allows —
 * pointer-tracking gaze. Moods layer expression on top: thinking (glance
 * up + thought dots), listening (wide eyes), talking (equalizer emblem),
 * happy (arc eyes), concerned, scanning, charging, walking.
 *
 * All animation pauses under prefers-reduced-motion; Go-Bot holds a
 * friendly static pose in the requested mood.
 */
export function GoBot({
	className,
	size = 320,
	label = 'Go-Bot, your robotic companion',
	mood,
	role,
}: GoBotProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const reducedMotion = usePrefersReducedMotion();
	const pointer = usePointerOffset(rootRef);

	const [isBlinking, setIsBlinking] = useState(false);
	const [autoMood, setAutoMood] = useState<GoBotMood>('idle');

	const animate = !reducedMotion;
	const activeMood: GoBotMood = mood ?? autoMood;
	const cfg = MOODS[activeMood];
	const showDots = animate && cfg.dots;

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
		animate && !cfg.happyArc ? [BLINK.minGapMs, BLINK.maxGapMs] : null,
	);

	// --- Autonomous inner life (only when the mood is not controlled). ---
	useInterval(
		() => {
			setAutoMood('thinking');
			setTimeout(() => setAutoMood('idle'), THINK.holdMs);
		},
		animate && mood === undefined ? [THINK.minGapMs, THINK.maxGapMs] : null,
	);

	// --- Gaze: pointer offset → eye travel and gentle head language. ---
	const eyeX = useTransform(pointer.x, [-1, 1], [-GAZE.eyeTravelX, GAZE.eyeTravelX]);
	const eyeY = useTransform(pointer.y, [-1, 1], [-GAZE.eyeTravelY, GAZE.eyeTravelY]);
	const headX = useTransform(pointer.x, [-1, 1], [-GAZE.headTravelX, GAZE.headTravelX]);
	const headRotate = useTransform(pointer.x, [-1, 1], [-GAZE.headTiltDeg, GAZE.headTiltDeg]);
	const gazeActive = animate && cfg.gaze;

	const eyeOpen = isBlinking ? 0.08 : cfg.eyeOpenness;
	const breathTransition = { duration: BREATH.periodS, repeat: Infinity, ease: 'easeInOut' } as const;
	const legSwing = animate && cfg.walk;

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
				transition={animate ? breathTransition : undefined}
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

				{/* ---------- Thought dots (thinking) ---------- */}
				{[0, 1, 2].map((i) => (
					<motion.circle
						key={i}
						cx={150 + i * 13}
						cy={34 - i * 11}
						r={3 + i * 1.5}
						fill={PALETTE.orange}
						initial={false}
						animate={{
							opacity: showDots ? [0, 1, 1, 0] : 0,
							scale: showDots ? [0.5, 1, 1, 0.5] : 0.5,
						}}
						transition={
							showDots
								? { duration: THINK.holdMs / 1000, delay: i * 0.18, ease: 'easeInOut', repeat: mood ? Infinity : 0 }
								: { duration: 0.2 }
						}
					/>
				))}

				{/* ---------- Charging bolt ---------- */}
				{cfg.bolt ? (
					<motion.path
						d="M 160 96 l -7 12 h 6 l -5 11 l 12 -14 h -6 l 6 -9 z"
						fill={PALETTE.orange}
						animate={animate ? { opacity: [0.4, 1, 0.4] } : undefined}
						transition={animate ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } : undefined}
					/>
				) : null}

				{/* ---------- Ground shadow ---------- */}
				<ellipse cx="100" cy="244" rx="52" ry="6" fill={PALETTE.shadow} />

				{/* ---------- Legs & boots ---------- */}
				<motion.g
					style={{ originX: '83px', originY: '180px' }}
					animate={legSwing ? { rotate: [7, -7, 7] } : { rotate: 0 }}
					transition={legSwing ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
				>
					<rect x="70" y="176" width="26" height="52" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
					<line x1="73" y1="202" x2="93" y2="202" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
					<rect x="62" y="222" width="40" height="18" rx="9" fill={PALETTE.shellDark} />
					<path d="M 62 234 h 40 v 3 a 6 6 0 0 1 -6 6 h -28 a 6 6 0 0 1 -6 -6 z" fill={PALETTE.orange} />
					<path d="M 62 231 a 9 9 0 0 1 9 -9 h 2 v 12 h -11 z" fill={PALETTE.orange} opacity="0.9" />
				</motion.g>
				<motion.g
					style={{ originX: '117px', originY: '180px' }}
					animate={legSwing ? { rotate: [-7, 7, -7] } : { rotate: 0 }}
					transition={legSwing ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
				>
					<rect x="104" y="176" width="26" height="52" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
					<line x1="107" y1="202" x2="127" y2="202" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
					<rect x="98" y="222" width="40" height="18" rx="9" fill={PALETTE.shellDark} />
					<path d="M 98 234 h 40 v 3 a 6 6 0 0 1 -6 6 h -28 a 6 6 0 0 1 -6 -6 z" fill={PALETTE.orange} />
					<path d="M 98 231 a 9 9 0 0 1 9 -9 h 2 v 12 h -11 z" fill={PALETTE.orange} opacity="0.9" />
				</motion.g>

				{/* ---------- Body (breathing squash) ---------- */}
				<motion.g
					style={{ originX: '100px', originY: '176px' }}
					animate={animate ? { scaleY: [1, 1 + BREATH.squash, 1] } : undefined}
					transition={animate ? breathTransition : undefined}
				>
					{/* Backpack silhouette peeking out behind the shoulders */}
					<rect x="54" y="104" width="92" height="60" rx="24" fill={PALETTE.shellDark} />

					{/* Arms with orange hands */}
					<motion.g
						animate={animate ? { rotate: legSwing ? [-6, 6, -6] : [0, 2, 0] } : undefined}
						style={{ originX: '47px', originY: '116px' }}
						transition={
							animate
								? legSwing
									? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
									: breathTransition
								: undefined
						}
					>
						<rect x="34" y="108" width="24" height="62" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
						<line x1="38" y1="140" x2="54" y2="140" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
						<ellipse cx="46" cy="176" rx="9" ry="10" fill={PALETTE.orange} />
					</motion.g>
					<motion.g
						animate={animate ? { rotate: legSwing ? [6, -6, 6] : [0, -2, 0] } : undefined}
						style={{ originX: '153px', originY: '116px' }}
						transition={
							animate
								? legSwing
									? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
									: breathTransition
								: undefined
						}
					>
						<rect x="142" y="108" width="24" height="62" rx="12" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2" />
						<line x1="146" y1="140" x2="162" y2="140" stroke={PALETTE.seam} strokeWidth="2" strokeLinecap="round" />
						<ellipse cx="154" cy="176" rx="9" ry="10" fill={PALETTE.orange} />
					</motion.g>

					{/* Torso shell */}
					<rect x="60" y="102" width="80" height="80" rx="30" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2.5" />

					{/* Chest emblem — the MANGOBOT mango, glowing (his heartbeat) */}
					{cfg.equalizer && animate ? (
						<motion.g
							animate={{ opacity: [0.35, 1, 0.35] }}
							transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
						>
							<ChestMango />
						</motion.g>
					) : (
						<motion.g
							animate={animate ? { opacity: [1, cfg.emblemMin, 1] } : undefined}
							transition={
								animate ? { duration: cfg.emblemPeriod, repeat: Infinity, ease: 'easeInOut' } : undefined
							}
						>
							<ChestMango />
						</motion.g>
					)}

					{/* Role accessory */}
					{role ? <GoBotRoleBadge role={role} /> : null}

					{/* Camera dot */}
					<circle cx="100" cy="156" r="6.5" fill={PALETTE.shellDark} stroke={PALETTE.seam} strokeWidth="1.5" />
					<motion.circle
						cx="100"
						cy="156"
						r="3"
						fill="#3a3a42"
						animate={animate && cfg.sweep ? { fill: ['#3a3a42', PALETTE.orange, '#3a3a42'] } : undefined}
						transition={animate && cfg.sweep ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } : undefined}
					/>
					<circle cx="101.5" cy="154.5" r="1" fill="#8a8a95" />
				</motion.g>

				{/* ---------- Neck ---------- */}
				<rect x="90" y="90" width="20" height="14" rx="6" fill={PALETTE.shellDark} />

				{/* ---------- Head (gaze-driven) ---------- */}
				<motion.g
					style={
						gazeActive
							? { x: headX, rotate: headRotate, originX: '100px', originY: '92px' }
							: { originX: '100px', originY: '92px' }
					}
				>
					{/* Head shell */}
					<rect x="54" y="12" width="92" height="80" rx="32" fill={PALETTE.shell} stroke={PALETTE.seam} strokeWidth="2.5" />
					<circle cx="63" cy="46" r="7" fill="none" stroke={PALETTE.seam} strokeWidth="1.5" opacity="0.7" />
					<circle cx="137" cy="46" r="7" fill="none" stroke={PALETTE.seam} strokeWidth="1.5" opacity="0.7" />

					{/* Glossy visor */}
					<rect x="66" y="28" width="68" height="50" rx="18" fill={PALETTE.visor} />
					<rect x="66" y="28" width="68" height="50" rx="18" fill="url(#gobot-visor-sheen)" />

					{/* Eyes: glow + gaze/glance/sweep + blink + mood shape */}
					<motion.g style={gazeActive ? { x: eyeX, y: eyeY } : undefined}>
						<motion.g
							initial={false}
							animate={
								animate && cfg.sweep
									? { x: [-6, 6, -6], y: 0 }
									: { x: cfg.glance?.x ?? 0, y: cfg.glance?.y ?? 0 }
							}
							transition={
								animate && cfg.sweep
									? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
									: { type: 'spring', stiffness: 120, damping: 16 }
							}
						>
							<circle cx="88" cy="53" r="12" fill="url(#gobot-eye-glow)" />
							<circle cx="112" cy="53" r="12" fill="url(#gobot-eye-glow)" />
							{cfg.happyArc ? (
								<g stroke={PALETTE.orange} strokeWidth="4" strokeLinecap="round" fill="none">
									<path d="M 81 56 Q 88 47 95 56" />
									<path d="M 105 56 Q 112 47 119 56" />
								</g>
							) : (
								<>
									<motion.ellipse
										cx="88" cy="53" rx="5" ry="7.5"
										fill={PALETTE.orange}
										animate={{ scaleY: eyeOpen, scale: cfg.eyeScale }}
										style={{ originX: '88px', originY: '53px' }}
										transition={{ duration: 0.09 }}
									/>
									<motion.ellipse
										cx="112" cy="53" rx="5" ry="7.5"
										fill={PALETTE.orange}
										animate={{ scaleY: eyeOpen, scale: cfg.eyeScale }}
										style={{ originX: '112px', originY: '53px' }}
										transition={{ duration: 0.09 }}
									/>
								</>
							)}
						</motion.g>
					</motion.g>
				</motion.g>
			</motion.svg>
		</div>
	);
}
