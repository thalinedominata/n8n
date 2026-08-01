import type { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center gap-1.5 rounded-pill font-medium uppercase tracking-(--text-overline--letter-spacing) text-overline px-3 py-1',
	{
		variants: {
			variant: {
				orange: 'bg-gobot-50 text-gobot-600',
				neutral: 'bg-surface-sunken text-ink-secondary',
				inverse: 'bg-ink text-ink-inverse',
			},
		},
		defaultVariants: {
			variant: 'orange',
		},
	},
);

export interface BadgeProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeVariants> {}

/** Small label used for section eyebrows, statuses, and tags. */
export function Badge({ className, variant, ...props }: BadgeProps) {
	return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
