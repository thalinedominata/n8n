'use client';

import type { ReactNode } from 'react';
import { useLenis } from '@/hooks';

/** Mounts Lenis smooth scrolling for the whole app. Used once in the root layout. */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
	useLenis();
	return <>{children}</>;
}
