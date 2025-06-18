// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teamwebdevelopers.com',
        pathname: '/MilitaryPCS/public/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;