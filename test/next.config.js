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
        source: '/images/:path*', // 이미지 요청 리라이트 규칙
        destination: 'http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090/images/:path*', // 실제 이미지 서버 URL
      },
      {
        source: '/api/:path*',
        destination: 'http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090/api/:path*', // 실제 API 서버 URL
      },
    ];
  },
});

module.exports = nextConfig;