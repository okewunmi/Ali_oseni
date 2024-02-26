/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental
: {
    
disableOptimizedLoading
: 
true
,
  },
}



module.exports = nextConfig
// next.config.js
const withFonts = require('next-fonts');

module.exports = withFonts({
  // Your other Next.js config options here
});
