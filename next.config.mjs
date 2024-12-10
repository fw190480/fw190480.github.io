/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/rahulkr-dev.github.io/' : '',
  basePath: isProd ? '/rahulkr-dev.github.io/' : '',
  output: 'export'
};

export default nextConfig;
