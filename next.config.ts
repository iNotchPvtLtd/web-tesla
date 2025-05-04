import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ['digitalassets.tesla.com'],
  },
};

export default nextConfig;
