/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '',
};
// module.exports = nextConfig;
