import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SmoothScrollProvider } from '@/components/motion/smooth-scroll-provider';
import { CommandPalette } from '@/components/ui';
import { searchRegistry } from '@/data/search';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s — ${siteConfig.name}`,
	},
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		siteName: siteConfig.name,
		type: 'website',
	},
};

export const viewport: Viewport = {
	themeColor: '#ffffff',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
				<CommandPalette items={searchRegistry} />
			</body>
		</html>
	);
}
