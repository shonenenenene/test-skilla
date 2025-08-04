import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [new URL('https://lk.skilla.ru/**')],
  },
};

export default nextConfig;
