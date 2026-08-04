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
		images: [
			{
				url: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/35491d06-4431-4d7c-ae22-55ac38b8e99c.png',
				width: 1200,
				height: 630,
				alt: 'Meet Go-Bot, the wearable humanoid robot by MANGOBOT and ENGAGE GLOBAL',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.title,
		description: siteConfig.description,
		images: ['https://d2ol7oe51mr4n9.cloudfront.net/user_3EeYIiYO7La2AjEEpUKVwwXuvj6/35491d06-4431-4d7c-ae22-55ac38b8e99c.png'],
	},
};

export const viewport: Viewport = {
	themeColor: '#0a0a0a',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="preload"
					href="/fonts/monoglyphic-vf.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</head>
			<body>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-pill focus:bg-ink focus:px-5 focus:py-2.5 focus:text-body focus:text-ink-inverse"
				>
					Skip to Content
				</a>
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
				<CommandPalette items={searchRegistry} />
			</body>
		</html>
	);
}
