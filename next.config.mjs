/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'danphehealth.com',
      },
    ],
  },
};

export default nextConfig;
