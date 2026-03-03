import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mindmegette.hu',
      },
      {
        protocol: 'https',
        hostname: 'www.cottagedelight.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.falatozz.hu',
      },
      {
        protocol: 'https',
        hostname: 'thegreekfoodie.com',
      },
    ],
  },
};

export default nextConfig;
