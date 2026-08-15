'use client';

import type { ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export interface TiltProps {
	children: ReactNode;
	className?: string;
	/** Maximum tilt in degrees at the card edges. */
	max?: number;
}

/**
 * Pointer-tracking 3D tilt: the surface leans toward the cursor on a
 * spring, giving flat cards physical depth. Collapses to a plain div
 * when the visitor prefers reduced motion.
 */
export function Tilt({ children, className, max = 7 }: TiltProps) {
	const reduced = useReducedMotion();
	const rotateX = useMotionValue(0);
	const rotateY = useMotionValue(0);
	const springX = useSpring(rotateX, { stiffness: 260, damping: 20, mass: 0.6 });
	const springY = useSpring(rotateY, { stiffness: 260, damping: 20, mass: 0.6 });

	if (reduced) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
			onPointerMove={(event) => {
				const rect = event.currentTarget.getBoundingClientRect();
				rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * max * 2);
				rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * max * 2);
			}}
			onPointerLeave={() => {
				rotateX.set(0);
				rotateY.set(0);
			}}
		>
			{children}
		</motion.div>
	);
}
