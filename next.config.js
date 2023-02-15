/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [
      ['@lingui/swc-plugin', {}]
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
