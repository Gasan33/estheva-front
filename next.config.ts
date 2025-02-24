import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
        hostname: "api.estheva-clinic.com",
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
      {
        protocol: "https",
        hostname: "cdn.vectorstock.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },

    ]
  }
};

export default nextConfig;
