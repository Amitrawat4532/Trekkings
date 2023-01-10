/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
default-src 'self';
script-src 'self';
child-src example.com;
style-src 'self' example.com;
font-src 'self';  
`;
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig = {
  source: "/:path*",
  // headers: securityHeaders,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
    // loader: "custom",
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
