import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
	icon?: LucideIcon;
	title: string;
	description: string;
	className?: string;
}

/** Standard feature tile: icon, title, short description. */
export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
	return (
		<Card
			variant="outlined"
			padding="lg"
			className={cn('h-full bg-surface hover:border-gobot-300 hover:shadow-glow', className)}
		>
			{Icon ? <Icon className="h-7 w-7 text-gobot-500" aria-hidden /> : null}
			<h3 className={cn('text-title font-semibold', Icon && 'mt-4')}>{title}</h3>
			<p className="mt-2 text-caption text-ink-secondary">{description}</p>
		</Card>
	);
}
