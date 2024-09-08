// build.js
const esbuild = require("esbuild");

// Example configuration
esbuild
  .build({
    entryPoints: ["./index.ts"], // Entry point for your application
    bundle: true,
    format: "esm", // Immediately Invoked Function Expression format for browser compatibility
    globalName: "PluginTemplate", // Global variable name for the iife bundle
    outfile: "dist/index.js", // Output file
    platform: "browser", // Target browser environment
    sourcemap: false, // Optional: Generate source maps for debugging
    minify: false, // Optional: Minify the output for production
    target: ["chrome58", "firefox57", "safari11", "edge16"], // Browser compatibility targets
    define: {
      global: "window", // Define 'global' as 'window' for browser compatibility
    },
    external: ["@team-falkor/sdk"],
  })
  .catch(() => process.exit(1));
