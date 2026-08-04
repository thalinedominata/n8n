import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			// ENGAGE media CDN — hosts the mango-badged robot renders (see
			// public/assets/gobot/README.md for the rebranding provenance).
			{ protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
			{ protocol: 'https', hostname: 'd2ol7oe51mr4n9.cloudfront.net' },
		],
	},
};

export default nextConfig;
