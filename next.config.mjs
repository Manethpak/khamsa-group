/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dreamslab.dev',
      },
      {
        protocol: 'https',
        hostname: '**.digitaloceanspaces.com',
      },
    ],
  },
}

export default nextConfig
