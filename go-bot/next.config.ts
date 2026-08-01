import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// Three.js and GSAP ship large ESM bundles; keep them out of the server graph.
	transpilePackages: ['three'],
	images: {
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
