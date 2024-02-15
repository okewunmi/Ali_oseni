/** @type {import('next').NextConfig} */
const nextConfig = {}
// next.config.js
//  module.exports={
//   prefetch:false
//  }
// module.exports={
//   fastRefresh:false,
// }
// next.config.js

module.exports = {
  // Prevents reloading of the page when navigating between pages
  useFileSystemPublicRoutes: false,
};
// module.exports = {
//   target: 'serverless',
// };

module.exports = nextConfig
// next.config.js
const withFonts = require('next-fonts');

module.exports = withFonts({
  // Your other Next.js config options here
});
