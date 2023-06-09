import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({
      include: "**/*.svg",
      exclude: "",
    }),
  ],
  server: {
    port: 3000,
  },
});
