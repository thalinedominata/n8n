'use client';

import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import { GoBotModel } from './go-bot-model';
import type { GoBotMood } from '@/components/gobot/go-bot.moods';
import { usePrefersReducedMotion } from '@/hooks';

export interface GoBotCanvasProps {
	mood?: GoBotMood;
	className?: string;
}

/**
 * The 3D Go-Bot stage: white-studio lighting, soft contact shadow, and
 * gentle orbit (rotate only — no zoom, no pan). Under reduced motion the
 * frame loop idles and Go-Bot holds a friendly static pose.
 *
 * Heavy by nature — always load through the GoBot3D dynamic wrapper
 * (src/components/gobot/go-bot-3d.tsx), never import directly in a page.
 */
export function GoBotCanvas({ mood = 'idle', className }: GoBotCanvasProps) {
	const reducedMotion = usePrefersReducedMotion();
	const animate = !reducedMotion;

	return (
		<Canvas
			className={className}
			shadows
			dpr={[1, 2]}
			frameloop={animate ? 'always' : 'demand'}
			camera={{ position: [0.4, 1.5, 3.6], fov: 34 }}
		>
			{/* White-first studio: bright, warm, shadow-soft */}
			<ambientLight intensity={0.85} />
			<directionalLight position={[3, 5, 4]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} />
			<directionalLight position={[-4, 2, -2]} intensity={0.35} />

			<GoBotModel mood={mood} animate={animate} />
			<ContactShadows position={[0, 0.01, 0]} opacity={0.35} scale={5} blur={2.4} far={2} />

			<OrbitControls
				target={[0, 1.15, 0]}
				enableZoom={false}
				enablePan={false}
				enableDamping
				dampingFactor={0.08}
				minPolarAngle={Math.PI / 2.6}
				maxPolarAngle={Math.PI / 1.9}
				minAzimuthAngle={-1}
				maxAzimuthAngle={1}
			/>
		</Canvas>
	);
}
