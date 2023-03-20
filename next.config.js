/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    
    appDir: true
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', "cdn.discordapp.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
