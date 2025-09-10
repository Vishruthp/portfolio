import type { NextConfig } from "next";
const repoName = 'portfolio';
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
