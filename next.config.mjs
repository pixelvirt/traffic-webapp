/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.101.202',
        port: '5001',
        pathname: '/media/violation/**',
      },
    ],
  },
}

export default nextConfig