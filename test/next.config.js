// next.config.js
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090/api/:path*',
      },
      {
        source: '/images/:path*', // 이미지 요청 경로
        destination: 'http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090/images/:path*', // 프록시 서버의 이미지 경로
      },
    ];
  },
});

module.exports = nextConfig;