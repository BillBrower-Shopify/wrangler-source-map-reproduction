/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  assetsBuildDirectory: 'public/build',
  cacheDirectory: "./node_modules/.cache/remix",
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*", "**/*.test.{js,jsx,ts,tsx}"],
  postcss: true,
  publicPath: "http://127.0.0.1:8083/build",
  serverModuleFormat: "cjs",
  tailwind: true,
};
