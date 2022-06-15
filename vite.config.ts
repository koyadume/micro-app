const path = require("path");

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// export default defineConfig(({ command, mode }) => {

//    console.log(`Comamnd: ${command}, Mode: ${mode}`)

//    const configs = {
//       base: '/micro-apps/app1/',
//       plugins: [vue()],
//       resolve: {
//          alias: {
//             "@": path.resolve(__dirname, "./src")
//          }
//       }
//    }

//    if (mode === 'development') {
//       configs.server = {
//          port: 8081,
//          strictPort: true,
//          fs: {
//             strict: false
//          },
//          hmr: {
//             clientPort: 443,
//             timeout: 3600,
//             path: '/__vite_hmr'
//          },
//          // hmr: false
//       }
//    }

//    return configs
// })

export default defineConfig(({ command, mode }) => {

   console.log(`Comamnd : ${command}, Mode: ${mode}`)

   const configs = {
      build: {
         lib: {
            entry: path.resolve(__dirname, 'src/app1.ts'),
            name: 'micro-app'
         },
         // rollupOptions: {
         //    // make sure to externalize deps that shouldn't be bundled
         //    // into your library
         //    external: ['vue'],
         //    output: {
         //       // Provide global variables to use in the UMD build
         //       // for externalized deps
         //       globals: {
         //          vue: 'Vue'
         //       }
         //    }
         // },
         minify: 'esbuild',
         target: "esnext"
      },
      plugins: [vue()],
      resolve: {
         alias: {
            "@": path.resolve(__dirname, "./src")
         }
      }
   }

   if (mode === 'production') {
      configs.base = '/micro-apps/app1/'
   }

   return configs
})

