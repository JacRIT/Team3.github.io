import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Team3.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Team3.github.io/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
