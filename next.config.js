/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/amplia-site',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/trilhas/',
        destination: '/trilhas/NascidosVivos',
        permanent: true,
      },
      {
        source: '/',
        destination: '/mapa',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
