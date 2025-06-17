/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
  },
  experimental: {
    scrollRestoration: true
  }
};

export default nextConfig;
