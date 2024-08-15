/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dreamslab.dev',
      },
    ],
  },
}

export default nextConfig
