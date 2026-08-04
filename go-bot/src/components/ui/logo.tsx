import { cn } from '@/lib/utils';

export interface LogoProps {
	className?: string;
	/** Rendered size in pixels (square). */
	size?: number;
	/** Fill color; defaults to currentColor so text utilities style it. */
	color?: string;
	title?: string;
}

/**
 * The ENGAGE GLOBAL triple-bar mark — company branding only. Vector
 * recreation of the supplied logo (public/assets/images/logo-mark.png):
 * two inward-tapering bars over a slanted base bar. Go-Bot's chest wears
 * the MANGOBOT mango (see GoBotMark), not this mark.
 */
export function Logo({ className, size = 28, color = 'currentColor', title = 'ENGAGE GLOBAL' }: LogoProps) {
	return (
		<svg
			viewBox="0 0 100 100"
			width={size}
			height={size}
			className={cn('shrink-0', className)}
			role="img"
			aria-label={title}
		>
			<polygon points="8,14 92,14 74,30 26,30" fill={color} />
			<polygon points="8,42 92,42 74,58 26,58" fill={color} />
			<polygon points="26,70 92,70 74,86 8,86" fill={color} />
		</svg>
	);
}
