// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'images.unsplash.com' },
			{ protocol: 'https', hostname: 'picsum.photos' },
		],
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
