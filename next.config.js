/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'services.bhutan.travel',
      },
    ],
  },
};

module.exports = nextConfig;
