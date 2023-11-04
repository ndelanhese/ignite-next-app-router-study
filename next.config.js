const prepareImageRemotePatterns = () => {
  const remotePatterns = []
  process.env.NEXT_PUBLIC_IMAGES_DOMAINS?.split(',').forEach((domain) => {
    remotePatterns.push({
      protocol: 'https',
      hostname: domain,
    })
  })
  return remotePatterns
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: prepareImageRemotePatterns(),
  },
}

module.exports = nextConfig
