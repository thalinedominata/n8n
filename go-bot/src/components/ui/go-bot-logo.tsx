import { cn } from '@/lib/utils';
import {
	LEAF_D,
	LOGO_VIEWBOX,
	MANGO_D,
	MARK_LEAF_D,
	MARK_MANGO_D,
	MARK_VIEWBOX,
	WORDMARK_D,
	WORDMARK_VIEWBOX,
} from './go-bot-logo-paths';

/**
 * Official GO-BOT identity, built on the MANGOBOT brand system: the partner's
 * mango-and-leaf mark with the GO-BOT wordmark set in the same letterforms
 * (traced from MANGOBOT reference art). Gradient colors are sampled from the
 * ENGAGE × MANGOBOT lockup.
 */

function aspect(viewBox: string): number {
	const parts = viewBox.split(' ').map(Number);
	const w = parts[2] ?? 1;
	const h = parts[3] ?? 1;
	return w / h;
}
const LOGO_ASPECT = aspect(LOGO_VIEWBOX);
const WORDMARK_ASPECT = aspect(WORDMARK_VIEWBOX);

const GRADIENT_DEFS = (
	<defs>
		<linearGradient id="gobot-mango-grad" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stopColor="#F3C64B" />
			<stop offset="0.48" stopColor="#F0964B" />
			<stop offset="1" stopColor="#D25578" />
		</linearGradient>
		<linearGradient id="gobot-leaf-grad" x1="0" y1="1" x2="1" y2="0">
			<stop offset="0" stopColor="#2FA96C" />
			<stop offset="1" stopColor="#7ED489" />
		</linearGradient>
	</defs>
);

export interface GoBotLogoProps {
	className?: string;
	/** Rendered height in pixels; width follows the aspect ratio. */
	height?: number;
	/** Fruit gradient + leaf green; otherwise everything is currentColor. */
	gradient?: boolean;
	title?: string;
}

/** Full lockup: mango + leaf + GO-BOT wordmark. */
export function GoBotLogo({ className, height = 48, gradient = false, title = 'GO-BOT' }: GoBotLogoProps) {
	return (
		<svg
			viewBox={LOGO_VIEWBOX}
			height={height}
			width={height * LOGO_ASPECT}
			className={cn('shrink-0', className)}
			fillRule="evenodd"
			clipRule="evenodd"
			role="img"
			aria-label={title}
		>
			{gradient ? GRADIENT_DEFS : null}
			<path fill={gradient ? 'url(#gobot-mango-grad)' : 'currentColor'} d={MANGO_D} />
			<path fill={gradient ? 'url(#gobot-leaf-grad)' : 'currentColor'} d={LEAF_D} />
			<path fill="currentColor" d={WORDMARK_D} />
		</svg>
	);
}

/** Mango-and-leaf mark only, outline closed — for badges, favicons, small spaces. */
export function GoBotMark({ className, height = 32, gradient = false, title = 'GO-BOT mark' }: GoBotLogoProps) {
	return (
		<svg
			viewBox={MARK_VIEWBOX}
			height={height}
			width={height}
			className={cn('shrink-0', className)}
			fillRule="evenodd"
			clipRule="evenodd"
			role="img"
			aria-label={title}
		>
			{gradient ? GRADIENT_DEFS : null}
			<path fill={gradient ? 'url(#gobot-mango-grad)' : 'currentColor'} d={MARK_MANGO_D} />
			<path fill={gradient ? 'url(#gobot-leaf-grad)' : 'currentColor'} d={MARK_LEAF_D} />
		</svg>
	);
}

/** GO-BOT letterforms alone, in currentColor — for the navbar and compact lockups. */
export function GoBotWordmark({ className, height = 14, title = 'GO-BOT' }: Omit<GoBotLogoProps, 'gradient'>) {
	return (
		<svg
			viewBox={WORDMARK_VIEWBOX}
			height={height}
			width={height * WORDMARK_ASPECT}
			className={cn('shrink-0', className)}
			fillRule="evenodd"
			clipRule="evenodd"
			role="img"
			aria-label={title}
		>
			<path fill="currentColor" d={WORDMARK_D} />
		</svg>
	);
}
