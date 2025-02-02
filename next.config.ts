import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/collections',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
