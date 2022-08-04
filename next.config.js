/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['money.imgix.net'],
  },
};

module.exports = nextConfig;
