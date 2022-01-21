/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['semmslux.com'],
  },
  env: {
    SiteTitle: 'Semms Luxury',
    SiteDescription: 'Semms Luxury',
    SiteKeywords: 'Semms Luxury', // comma separated
    SiteAuthor: 'Semms Luxury',
  },
}

module.exports = nextConfig
