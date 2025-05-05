const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

const withPWA = require("next-pwa")({
  dest: "public"
})

const withCloudflare = require("@cloudflare/next-on-pages")

module.exports = withBundleAnalyzer(
  withPWA(
    withCloudflare({
      reactStrictMode: true,
      images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost"
          },
          {
            protocol: "http",
            hostname: "127.0.0.1"
          },
          {
            protocol: "https",
            hostname: "**"
          }
        ]
      },
      experimental: {
        serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
      }
    })
  )
)
