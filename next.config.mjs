/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
        ],
    },
};

export default nextConfig;
