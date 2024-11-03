import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = process.platform === "win32" ? path.resolve("/") : "/";
const external = (id) => !id.startsWith(".") && !id.startsWith(root);

export default defineConfig({
   root: "src",
   plugins: [react()],
   build: {
      lib: {
         entry: path.resolve(__dirname, "src/index.js"),
         name: "spice",
         fileName: "spice",
      },
      rollupOptions: {
         input: path.resolve(__dirname, "src/client.js"),
         external,
         output: {
            dir: path.resolve(__dirname, "build/client"),
            format: "es",
            globals: {
               react: "React",
               "react-dom": "ReactDOM",
               gsap: "gsap",
            },
            banner: `'use client';`,
         },
      },
      sourcemap: true,
   },
});
