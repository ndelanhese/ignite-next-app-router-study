/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGES_DOMAINS?.split(',') ?? [],
  },
}

module.exports = nextConfig
