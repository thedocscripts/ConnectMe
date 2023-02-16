/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    
    appDir: true
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', "cdn.discordapp.com"],
  },
}

module.exports = nextConfig
