import { resolve } from "path";
import { defineConfig } from "vite";

import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'
import virtual from "@rollup/plugin-virtual";

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
         plugins: [
            replace({
               'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
               preventAssignment: true
            }),
         ]
      }
   },
   plugins: [
      vue(),
      {
         ...virtual({
            'vue': `
               export const ref = Vue.ref
               export const onMounted = Vue.onMounted
               export const openBlock = Vue.openBlock
               export const createElementBlock = Vue.createElementBlock
               export const toDisplayString = Vue.toDisplayString
               export const createElementVNode = Vue.createElementVNode
               export const Fragment = Vue.Fragment
            `
         }),
         enforce: 'pre'
      }
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