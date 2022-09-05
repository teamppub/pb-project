/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '',
};

module.exports = nextConfig;
