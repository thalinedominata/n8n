import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	[
		'inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap select-none',
		'rounded-pill transition-all duration-(--duration-fast) ease-(--ease-out-soft)',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gobot-500',
		'disabled:pointer-events-none disabled:opacity-40',
		'active:scale-[0.97]',
	],
	{
		variants: {
			variant: {
				primary: 'bg-gobot-500 text-ink-inverse shadow-e2 hover:bg-gobot-600 hover:shadow-glow',
				secondary: 'bg-ink text-ink-inverse hover:bg-ink/85',
				outline:
					'border border-border-strong bg-surface text-ink hover:border-ink hover:shadow-e1',
				ghost: 'text-ink-secondary hover:text-ink hover:bg-surface-sunken',
			},
			size: {
				sm: 'h-9 px-4 text-caption',
				md: 'h-11 px-6 text-body',
				lg: 'h-13 px-8 text-body-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

/**
 * The platform button. All calls to action use this component — never a
 * bare styled `<button>`. See docs/design-system/components.md.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, type = 'button', ...props }, ref) => (
		<button
			ref={ref}
			type={type}
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	),
);
Button.displayName = 'Button';

export { buttonVariants };
