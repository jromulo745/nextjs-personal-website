/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // disable Strict Mode to disable double rendering
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
