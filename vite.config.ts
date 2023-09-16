import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
