/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
          hostname: 'books.google.com'
      },
    ]
  },
}

module.exports = nextConfig
