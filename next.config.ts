import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/collections/0',
        permanent: true,
      },
      {
        source: '/collections',
        destination: '/collections/0',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
