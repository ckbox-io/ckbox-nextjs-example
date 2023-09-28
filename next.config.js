/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, options) => {
        if (!options.isServer) {
            config.optimization.splitChunks.cacheGroups = {
                ...config.optimization.splitChunks.cacheGroups,
                ckbox: {
                    test: /@ckbox\//,
                    minChunks: 1,
                    priority: 50
                }
            };
        }

        return config;
    }
};

module.exports = nextConfig;
