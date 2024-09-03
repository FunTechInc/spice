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
         input: {
            client: path.resolve(__dirname, "src/client.js"), // クライアント用のエントリーポイント
            server: path.resolve(__dirname, "src/server.js"), // サーバー用のエントリーポイント
         },
         external: ["react", "gsap", "react-dom"],
         output: [
            {
               dir: path.resolve(__dirname, "build/client"),
               format: "es",
               globals: {
                  react: "React",
                  "react-dom": "ReactDOM",
                  gsap: "gsap",
               },
               banner: `'use client';`,
            },
            {
               dir: path.resolve(__dirname, "build/server"),
               format: "cjs",
               globals: {
                  react: "React",
                  "react-dom": "ReactDOM",
                  gsap: "gsap",
               },
            },
         ],
      },
      sourcemap: true,
   },
});
