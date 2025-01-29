import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },

      {
        protocol: "https",
        hostname: "estheva-polyclinic.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },

      {
        protocol: "https",
        hostname: "totallytransformed.co.uk",
        port: "",
      },
      {
        protocol: "https",
        hostname: "skinic.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "erchonia-emea.com",
        port: "",
      },

    ]
  }
};

export default nextConfig;
