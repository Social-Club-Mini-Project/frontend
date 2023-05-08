/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
