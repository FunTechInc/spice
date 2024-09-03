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
         input: path.resolve(__dirname, "src/server.js"),
         external: ["react", "gsap", "react-dom"],
         output: {
            dir: path.resolve(__dirname, "build/server"),
            format: "cjs",
            globals: {
               react: "React",
               "react-dom": "ReactDOM",
               gsap: "gsap",
            },
         },
      },
      sourcemap: true,
   },
});
