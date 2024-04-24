/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@refinedev/antd"],
  output: 'standalone',
  serverRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_URL_PORT: process.env.NEXT_PUBLIC_API_URL_PORT,
  },
  publicRuntimeConfig:{
    NEXT_PUBLIC_API_URL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_URL_PORT: process.env.NEXT_PUBLIC_API_URL_PORT,
  }
};

export default nextConfig;
