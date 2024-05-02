/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                pathname: '**',
            },
        ],
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/:path*', // Proxy to Backend
            },
        ];
    },
};

export default nextConfig;
