import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other config options go here...

  eslint: {
    ignoreDuringBuilds: true, // <-- Now correctly placed inside nextConfig
  },
};

export default nextConfig;
