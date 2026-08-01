'use client';

/**
 * 3D Go-Bot stage — Version 2 groundwork.
 *
 * React Three Fiber scene reserved for the full 3D Go-Bot model. In V1 the
 * character is the animated SVG (src/components/gobot); this canvas ships
 * behind a dynamic import so three.js never loads until a page opts in.
 *
 * Planned V2 pipeline: glTF prototype export → drei useGLTF → animation
 * mixer driving the same behavior state machine (idle/blink/gaze/think)
 * the SVG character uses today.
 */

import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export function GoBotCanvas() {
	return (
		<Canvas camera={{ position: [0, 0.6, 3.2], fov: 40 }} dpr={[1, 2]}>
			<ambientLight intensity={0.9} />
			<directionalLight position={[3, 4, 5]} intensity={1.1} />
			<Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
				{/* Placeholder volume matching Go-Bot's canonical silhouette. */}
				<mesh>
					<capsuleGeometry args={[0.55, 0.7, 8, 24]} />
					<meshStandardMaterial color="#ffffff" roughness={0.25} metalness={0.05} />
				</mesh>
				<mesh position={[0, 0.35, 0.42]}>
					<sphereGeometry args={[0.16, 24, 24]} />
					<meshStandardMaterial color="#ff6a00" emissive="#ff6a00" emissiveIntensity={0.4} />
				</mesh>
			</Float>
		</Canvas>
	);
}
