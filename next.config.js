/** @type {import('next').NextConfig} */
const nextConfig = {}


const withFonts = require('next-fonts');

module.exports = withFonts({
  // Your other Next.js config options here
});
// next.config.js

module.exports = {
  // Disable prefetching in production
  onDemandEntries: false,
};


