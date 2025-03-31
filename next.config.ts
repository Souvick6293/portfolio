import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "https://souvick-dev.vercel.app",
  project: "souvick portfolio",

  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});
