import { resolve } from "path";
import { defineConfig } from "vite";

import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'

export default defineConfig({
   build: {
      lib: {
         entry: resolve(__dirname, "src/index.js"),
         name: "MicroAppVueComponents",
         fileName: "vue-components",
         formats: ['es']
      },
      rollupOptions: {
         // make sure to externalize deps that shouldn't be bundled
         // into your library
         external: [
            'vue',
            'pinia'
         ],
         plugins: [
            replace({
               'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
               preventAssignment: true
            })
         ]
      }
   },
   plugins: [
      vue()
   ],
   resolve: {
      alias: {
         "@": resolve(__dirname, "./src"),
      },
   },
   preview: {
      // port: 8091
   }
});
