import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui';
import { Tilt } from '@/components/motion/tilt';
import type { PersonaImage } from '@/types';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
	icon?: LucideIcon;
	title: string;
	description: string;
	/** Lifestyle photo shown above the text; the icon moves inline beside the title. */
	image?: PersonaImage;
	className?: string;
}

/** Standard feature tile: icon, title, short description — or a photo card when an image is provided. */
export function FeatureCard({ icon: Icon, title, description, image, className }: FeatureCardProps) {
	if (image) {
		return (
			<Tilt className="h-full">
			<Card
				variant="outlined"
				padding="none"
				className={cn(
					'h-full overflow-hidden bg-surface hover:border-gobot-300 hover:shadow-glow',
					className,
				)}
			>
				<div className="aspect-[3/2] overflow-hidden">
					<Image
						src={image.src}
						width={image.width}
						height={image.height}
						alt={image.alt}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="p-6">
					<div className="flex items-center gap-2.5">
						{Icon ? <Icon className="h-5 w-5 shrink-0 text-gobot-500" aria-hidden /> : null}
						<h3 className="text-title font-semibold">{title}</h3>
					</div>
					<p className="mt-2 text-caption text-ink-secondary">{description}</p>
				</div>
			</Card>
			</Tilt>
		);
	}

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
