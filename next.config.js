/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: [
      '@next-auth/firebase-adapter'
    ],
    appDir: true
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', "cdn.discordapp.com"],
  },
}

module.exports = nextConfig
