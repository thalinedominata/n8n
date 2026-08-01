import { createElement, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ContainerTag = 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article' | 'aside';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
	/** Render as a different semantic element, e.g. `section` or `footer`. */
	as?: ContainerTag;
	/** Wide is the default page column; narrow is for reading-length prose. */
	width?: 'wide' | 'narrow';
}

/** Page-width layout column. All sections align to this grid. */
export function Container({ as = 'div', width = 'wide', className, ...props }: ContainerProps) {
	return createElement(as, {
		className: cn(
			'mx-auto w-full px-6 sm:px-8',
			width === 'wide' ? 'max-w-6xl' : 'max-w-3xl',
			className,
		),
		...props,
	});
}
