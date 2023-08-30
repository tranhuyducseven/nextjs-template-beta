/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
  publicRuntimeConfig: {
    TEAM_NAME: process.env.TEAM_NAME || "UNKNOWN",
    IS_DEV: process.env.NODE_ENV !== "production",
    API_URL: process.env.API_URL || "http://localhost:5000",
  },
});

module.exports = nextConfig;
