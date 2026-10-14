import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportacion de estatico
  output: "export",
  // NO depender de  optimización de imágenes de Next
  basePath: "/sao-next",
  images: {
      unoptimized: true,
  },
};

export default nextConfig;

