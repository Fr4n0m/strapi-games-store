/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'gaming-cdn.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.hobbyconsolas.com',
			},
			{
				protocol: 'https',
				hostname: 'i.blogs.es',
			},
			{
				protocol: 'https',
				hostname: 'i0.wp.com',
			},
			{
				protocol: 'https',
				hostname: 'media.tycsports.com',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
			},
		],
	},
};

export default nextConfig;
