/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['semmslux.com'],
  },
  env: {
    SiteTitle: 'Semms Luxuries.',
    SiteDescription: 'Semms Luxuries.',
    SiteKeywords: 'Semms Luxury', // comma separated
    SiteAuthor: 'Semms Luxury',
    S_TOKEN: '412eafb22aea4bcba33ab917051e5be7',
    S_DOMAIN: 'semmslux.myshopify.com',
  },
}

module.exports = nextConfig
