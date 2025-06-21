import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SITE_URL!,
        pathname: "/**", // for all resources
      },
      {
        protocol: "https",
        hostname: "www.britishdelights.info",
        port: "",
      },

    ],
  },
  productionBrowserSourceMaps: true, // Ensure this is enabled
};

export default nextConfig;
