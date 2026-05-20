import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/notes/most-men-dont-miss-the-sport",
        destination: "/essays/most-men-dont-miss-the-sport",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
