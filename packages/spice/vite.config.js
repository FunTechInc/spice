import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
         external: ["react"],
         output: {
            dir: "./build",
            globals: {
               react: "React",
            },
            banner: `'use client';`,
         },
      },
      sourcemap: true,
   },
});
