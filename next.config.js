/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'medium.com',
            'cdn-images-1.medium.com'
        ]
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                dns: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
}

module.exports = nextConfig