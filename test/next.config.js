// next.config.js
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  // 기존 설정
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090/api/:path*',
      },
    ];
  },
});
module.exports = nextConfig;