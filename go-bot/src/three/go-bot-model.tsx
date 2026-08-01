'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import type { Group, Mesh, MeshStandardMaterial } from 'three';
import { MathUtils } from 'three';
import { MOODS, type GoBotMood } from '@/components/gobot/go-bot.moods';
import { BLINK, BREATH, GAZE, PALETTE } from '@/components/gobot/go-bot.constants';

export interface GoBotModelProps {
	mood?: GoBotMood;
	/** Disable per-frame animation (reduced motion). */
	animate?: boolean;
}

/**
 * The 3D Go-Bot — procedural geometry faithful to the prototype, driven by
 * the SAME character bible as the SVG: MOODS for expression, BREATH/BLINK/
 * GAZE constants for idle life. One behavior state machine, two renderers.
 *
 * Stands ~2.25 units tall on the ground plane; pivot at his feet.
 * When the production glTF prototype lands (public/assets/gobot/), it
 * replaces the geometry here while keeping this exact animation contract.
 */
export function GoBotModel({ mood = 'idle', animate = true }: GoBotModelProps) {
	const cfg = MOODS[mood];

	const root = useRef<Group>(null);
	const head = useRef<Group>(null);
	const eyes = useRef<Group>(null);
	const leftEye = useRef<Mesh>(null);
	const rightEye = useRef<Mesh>(null);
	const leftArm = useRef<Group>(null);
	const rightArm = useRef<Group>(null);
	const leftLeg = useRef<Group>(null);
	const rightLeg = useRef<Group>(null);
	const emblemMats = useRef<Array<MeshStandardMaterial | null>>([null, null, null]);
	const dots = useRef<Group>(null);

	// Randomized blink schedule, same cadence constants as the SVG character.
	const blink = useRef({ nextAt: 2, closedUntil: 0 });

	useFrame((state) => {
		if (!animate || !root.current) return;
		const t = state.clock.elapsedTime;

		// --- Breathing: vertical bob + gentle torso rhythm ---
		const breathPhase = Math.sin((t * Math.PI * 2) / BREATH.periodS);
		root.current.position.y = breathPhase * 0.02;

		// --- Blinking ---
		if (t >= blink.current.nextAt) {
			blink.current.closedUntil = t + BLINK.closeMs / 1000;
			blink.current.nextAt =
				t + BLINK.minGapMs / 1000 + Math.random() * ((BLINK.maxGapMs - BLINK.minGapMs) / 1000);
		}
		const closed = t < blink.current.closedUntil;
		const openTarget = cfg.happyArc ? 0.35 : closed ? 0.08 : cfg.eyeOpenness;
		for (const eye of [leftEye.current, rightEye.current]) {
			if (eye) {
				eye.scale.y = MathUtils.lerp(eye.scale.y, openTarget * 1.6, 0.35);
				eye.scale.x = MathUtils.lerp(eye.scale.x, cfg.eyeScale, 0.2);
				eye.scale.z = eye.scale.x;
			}
		}

		// --- Gaze / glance / sweep ---
		const px = cfg.sweep ? Math.sin(t * 2) * 0.6 : state.pointer.x;
		const py = cfg.sweep ? 0 : state.pointer.y;
		if (head.current) {
			const tiltY = cfg.gaze ? px * (GAZE.headTiltDeg * 4 * Math.PI) / 180 : cfg.sweep ? px * 0.22 : 0;
			const tiltX = cfg.gaze ? -py * 0.1 : 0;
			head.current.rotation.y = MathUtils.lerp(head.current.rotation.y, tiltY, 0.08);
			head.current.rotation.x = MathUtils.lerp(head.current.rotation.x, tiltX, 0.08);
		}
		if (eyes.current) {
			const gx = cfg.glance ? cfg.glance.x * 0.008 : (cfg.gaze || cfg.sweep ? px * 0.05 : 0);
			const gy = cfg.glance ? -cfg.glance.y * 0.008 : (cfg.gaze ? py * 0.035 : 0);
			eyes.current.position.x = MathUtils.lerp(eyes.current.position.x, gx, 0.15);
			eyes.current.position.y = MathUtils.lerp(eyes.current.position.y, 0.4 + gy, 0.15);
		}

		// --- Chest emblem: heartbeat pulse or talking equalizer ---
		emblemMats.current.forEach((material, index) => {
			if (!material) return;
			material.emissiveIntensity = cfg.equalizer
				? 1.2 + Math.sin(t * 8 + index * 1.2) * 1.0
				: 1.4 +
					Math.sin((t * Math.PI * 2) / cfg.emblemPeriod) * (1 - cfg.emblemMin) * 1.2;
		});

		// --- Walking: legs swing, arms counter-swing ---
		const swing = cfg.walk ? Math.sin(t * 7) * 0.45 : 0;
		if (leftLeg.current) leftLeg.current.rotation.x = MathUtils.lerp(leftLeg.current.rotation.x, swing, 0.2);
		if (rightLeg.current) rightLeg.current.rotation.x = MathUtils.lerp(rightLeg.current.rotation.x, -swing, 0.2);
		const armSwing = cfg.walk ? -swing * 0.7 : breathPhase * 0.04;
		if (leftArm.current) leftArm.current.rotation.x = MathUtils.lerp(leftArm.current.rotation.x, armSwing, 0.2);
		if (rightArm.current) rightArm.current.rotation.x = MathUtils.lerp(rightArm.current.rotation.x, -armSwing, 0.2);

		// --- Thought dots: cascade beside the head while thinking ---
		if (dots.current) {
			dots.current.visible = cfg.dots;
			if (cfg.dots) {
				dots.current.children.forEach((dot, index) => {
					dot.position.y = 2.25 + index * 0.16 + Math.sin(t * 3 + index) * 0.03;
					dot.scale.setScalar(0.8 + Math.sin(t * 3 + index) * 0.2);
				});
			}
		}
	});

	return (
		<group ref={root}>
			{/* ---------- Legs & boots (pivot at hips) ---------- */}
			{[-1, 1].map((side) => (
				<group key={`leg-${side}`} ref={side === -1 ? leftLeg : rightLeg} position={[side * 0.17, 0.72, 0]}>
					<RoundedBox args={[0.26, 0.5, 0.28]} radius={0.1} smoothness={4} position={[0, -0.27, 0]} castShadow>
						<meshStandardMaterial color={PALETTE.shell} roughness={0.55} />
					</RoundedBox>
					<RoundedBox args={[0.34, 0.18, 0.44]} radius={0.07} smoothness={4} position={[0, -0.62, 0.05]} castShadow>
						<meshStandardMaterial color={PALETTE.shellDark} roughness={0.6} />
					</RoundedBox>
					{/* Orange sole */}
					<RoundedBox args={[0.34, 0.06, 0.44]} radius={0.028} smoothness={4} position={[0, -0.7, 0.05]} castShadow>
						<meshStandardMaterial color={PALETTE.orange} roughness={0.4} />
					</RoundedBox>
				</group>
			))}

			{/* ---------- Backpack + spine light ---------- */}
			<RoundedBox args={[0.72, 0.62, 0.3]} radius={0.12} smoothness={4} position={[0, 1.08, -0.36]} castShadow>
				<meshStandardMaterial color={PALETTE.shellDark} roughness={0.65} />
			</RoundedBox>
			<RoundedBox args={[0.05, 0.4, 0.04]} radius={0.02} smoothness={4} position={[0, 1.12, -0.52]}>
				<meshStandardMaterial color={PALETTE.orange} emissive={PALETTE.orange} emissiveIntensity={1.6} />
			</RoundedBox>

			{/* ---------- Torso ---------- */}
			<RoundedBox args={[0.82, 0.78, 0.6]} radius={0.22} smoothness={4} position={[0, 1.02, 0]} castShadow>
				<meshStandardMaterial color={PALETTE.shell} roughness={0.5} />
			</RoundedBox>

			{/* Chest emblem — three lit bars (the triple-bar mark) */}
			{[0, 1, 2].map((index) => (
				<RoundedBox
					key={`bar-${index}`}
					args={[0.26 - index * 0.015, 0.05, 0.03]}
					radius={0.012}
					smoothness={2}
					position={[0, 1.22 - index * 0.09, 0.3]}
				>
					<meshStandardMaterial
						ref={(material) => {
							emblemMats.current[index] = material;
						}}
						color={PALETTE.orange}
						emissive={PALETTE.orange}
						emissiveIntensity={1.4}
					/>
				</RoundedBox>
			))}

			{/* Camera dot */}
			<mesh position={[0, 0.9, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
				<cylinderGeometry args={[0.05, 0.05, 0.03, 24]} />
				<meshStandardMaterial color={PALETTE.visor} roughness={0.2} />
			</mesh>

			{/* ---------- Arms & hands (pivot at shoulders) ---------- */}
			{[-1, 1].map((side) => (
				<group key={`arm-${side}`} ref={side === -1 ? leftArm : rightArm} position={[side * 0.53, 1.32, 0]}>
					<RoundedBox args={[0.24, 0.6, 0.26]} radius={0.1} smoothness={4} position={[0, -0.26, 0]} castShadow>
						<meshStandardMaterial color={PALETTE.shell} roughness={0.55} />
					</RoundedBox>
					<mesh position={[0, -0.62, 0]} castShadow>
						<sphereGeometry args={[0.11, 24, 24]} />
						<meshStandardMaterial color={PALETTE.orange} roughness={0.35} />
					</mesh>
				</group>
			))}

			{/* ---------- Neck ---------- */}
			<RoundedBox args={[0.24, 0.14, 0.24]} radius={0.05} smoothness={4} position={[0, 1.47, 0]}>
				<meshStandardMaterial color={PALETTE.shellDark} roughness={0.6} />
			</RoundedBox>

			{/* ---------- Head (pivot at neck) ---------- */}
			<group ref={head} position={[0, 1.52, 0]}>
				<RoundedBox args={[0.92, 0.8, 0.8]} radius={0.28} smoothness={4} position={[0, 0.38, 0]} castShadow>
					<meshStandardMaterial color={PALETTE.shell} roughness={0.5} />
				</RoundedBox>
				{/* Glossy visor */}
				<RoundedBox args={[0.66, 0.48, 0.16]} radius={0.14} smoothness={4} position={[0, 0.4, 0.36]}>
					<meshStandardMaterial color={PALETTE.visor} roughness={0.08} metalness={0.3} />
				</RoundedBox>
				{/* Eyes */}
				<group ref={eyes} position={[0, 0.4, 0]}>
					<mesh ref={leftEye} position={[-0.13, 0, 0.45]} scale={[1, 1.6, 1]}>
						<sphereGeometry args={[0.055, 24, 24]} />
						<meshStandardMaterial color={PALETTE.orange} emissive={PALETTE.orange} emissiveIntensity={2.2} />
					</mesh>
					<mesh ref={rightEye} position={[0.13, 0, 0.45]} scale={[1, 1.6, 1]}>
						<sphereGeometry args={[0.055, 24, 24]} />
						<meshStandardMaterial color={PALETTE.orange} emissive={PALETTE.orange} emissiveIntensity={2.2} />
					</mesh>
				</group>
			</group>

			{/* ---------- Thought dots ---------- */}
			<group ref={dots} position={[0.75, 0, 0]} visible={false}>
				{[0, 1, 2].map((index) => (
					<mesh key={`dot-${index}`} position={[index * 0.1, 2.25 + index * 0.16, 0]}>
						<sphereGeometry args={[0.035 + index * 0.012, 16, 16]} />
						<meshStandardMaterial color={PALETTE.orange} emissive={PALETTE.orange} emissiveIntensity={1.5} />
					</mesh>
				))}
			</group>
		</group>
	);
}
