const { build } = require("esbuild");
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");
const pkg = require("./package.json");

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const config = {
  target: "es2015",
  bundle: true,
  minify: false,
  sourcemap: true,
  entryPoints: ["./src/index.ts"],
  outdir: "dist",
  plugins: [vanillaExtractPlugin()],
  external,
};

Promise.all([
  build({
    ...config,
    format: "cjs",
  }),
  build({
    ...config,
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
  }),
]);
