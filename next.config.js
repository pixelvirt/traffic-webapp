/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.migmawei.ca',
        port: '',
        pathname: '/system/wp-content/uploads/2017/04/**',
      },
    ],
  },
}

module.exports = nextConfig
