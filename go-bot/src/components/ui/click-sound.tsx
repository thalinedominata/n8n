'use client';

import { useEffect, useRef } from 'react';

/** Anything that reads as pressable gets the click. */
const INTERACTIVE_SELECTOR =
	'a, button, [role="button"], input, select, textarea, summary, label';

/**
 * Global tactile audio feedback: a quick, quiet mechanical click on every
 * tap or click of an interactive element. The sound is synthesized with
 * WebAudio (no asset download) — a 30ms square-wave tick with a low body
 * thump, gained well below speech level. The AudioContext is created
 * lazily inside the first user gesture, which is also what browsers
 * require before audio may play.
 */
export function ClickSound() {
	const contextRef = useRef<AudioContext | null>(null);

	useEffect(() => {
		const onPointerDown = (event: PointerEvent) => {
			const target = event.target;
			if (!(target instanceof Element) || !target.closest(INTERACTIVE_SELECTOR)) return;

			const context = (contextRef.current ??= new AudioContext());
			if (context.state === 'suspended') void context.resume();

			const now = context.currentTime;
			const out = context.createGain();
			out.gain.setValueAtTime(0.07, now);
			out.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
			out.connect(context.destination);

			const tick = context.createOscillator();
			tick.type = 'square';
			tick.frequency.setValueAtTime(2100, now);
			tick.frequency.exponentialRampToValueAtTime(1200, now + 0.03);
			tick.connect(out);
			tick.start(now);
			tick.stop(now + 0.035);

			const thump = context.createOscillator();
			const thumpGain = context.createGain();
			thumpGain.gain.setValueAtTime(0.05, now);
			thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
			thump.type = 'sine';
			thump.frequency.setValueAtTime(320, now);
			thump.connect(thumpGain);
			thumpGain.connect(context.destination);
			thump.start(now);
			thump.stop(now + 0.025);
		};

		document.addEventListener('pointerdown', onPointerDown, { passive: true });
		return () => {
			document.removeEventListener('pointerdown', onPointerDown);
			void contextRef.current?.close();
			contextRef.current = null;
		};
	}, []);

	return null;
}
