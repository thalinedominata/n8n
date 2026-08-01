'use client';

import { useEffect, useRef } from 'react';

/**
 * Declarative setInterval with an optional randomized delay range.
 *
 * Passing `[min, max]` re-rolls the delay after every tick — used for
 * organic behaviors like Go-Bot's blinking, where a fixed rhythm would
 * read as robotic in the wrong way.
 */
export function useInterval(
	callback: () => void,
	delay: number | [min: number, max: number] | null,
): void {
	const savedCallback = useRef(callback);
	savedCallback.current = callback;

	useEffect(() => {
		if (delay === null) return;

		let timeoutId: ReturnType<typeof setTimeout>;
		const nextDelay = () =>
			typeof delay === 'number' ? delay : delay[0] + Math.random() * (delay[1] - delay[0]);

		const tick = () => {
			savedCallback.current();
			timeoutId = setTimeout(tick, nextDelay());
		};
		timeoutId = setTimeout(tick, nextDelay());

		return () => clearTimeout(timeoutId);
	}, [delay]);
}
