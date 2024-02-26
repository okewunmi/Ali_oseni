/** @type {import('next').NextConfig} */
const nextConfig = {}


const withFonts = require('next-fonts');

module.exports = withFonts({
  // Your other Next.js config options here
});
module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  webpack(config) {
    if (!config.optimization.prefetch) {
      config.optimization.prefetch = void 0;
    }
    return config; 
  }
};
