/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:3000/:path*", // 実際のAPIサーバーのURLに置き換えてください
      },
    ];
  },
};
