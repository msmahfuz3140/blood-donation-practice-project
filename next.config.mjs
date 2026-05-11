/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    domains: ['localhost', '127.0.0.1'],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
