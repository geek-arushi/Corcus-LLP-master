/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
