/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Menonaktifkan pemeriksaan ESLint selama build
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
