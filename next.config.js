/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'medium.com',
            'cdn-images-1.medium.com'
        ]
    },
    webpack: (config, { isServer }) => {
        // This tells Webpack to ignore 'fs' when bundling for the client/browser
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
            };
        }
        return config;
    },
}

module.exports = nextConfig