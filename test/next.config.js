const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['example.com'], 
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090/api/:path*', 
      },
    ];
  },
});