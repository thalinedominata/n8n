import type { DetailedHTMLProps, HTMLAttributes } from 'react';

/** JSX typing for the <model-viewer> custom element (@google/model-viewer). */
declare global {
	namespace React {
		namespace JSX {
			interface IntrinsicElements {
				'model-viewer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
					src?: string;
					poster?: string;
					alt?: string;
					'camera-controls'?: boolean;
					'auto-rotate'?: boolean;
					'auto-rotate-delay'?: number | string;
					'rotation-per-second'?: string;
					'shadow-intensity'?: number | string;
					'shadow-softness'?: number | string;
					'environment-image'?: string;
					'tone-mapping'?: string;
					exposure?: number | string;
					'camera-orbit'?: string;
					'field-of-view'?: string;
					'interaction-prompt'?: string;
					'disable-tap'?: boolean;
					loading?: string;
					reveal?: string;
				};
			}
		}
	}
}

export {};
