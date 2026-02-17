import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.sanity.io"], // Agrega el dominio de la imagen externa
  },
};

export default nextConfig;
