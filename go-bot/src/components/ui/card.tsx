import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
	'rounded-xl bg-surface-raised transition-all duration-(--duration-base) ease-(--ease-out-soft)',
	{
		variants: {
			variant: {
				elevated: 'shadow-e2 hover:shadow-e3 hover:-translate-y-1',
				outlined: 'border border-border-subtle hover:border-border-strong hover:shadow-e1',
				soft: 'bg-surface-warm',
			},
			padding: {
				none: '',
				md: 'p-6',
				lg: 'p-8',
			},
		},
		defaultVariants: {
			variant: 'elevated',
			padding: 'lg',
		},
	},
);

export interface CardProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {}

/** Surface primitive for all card-like content. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, variant, padding, ...props }, ref) => (
		<div ref={ref} className={cn(cardVariants({ variant, padding }), className)} {...props} />
	),
);
Card.displayName = 'Card';

export { cardVariants };
