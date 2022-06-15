import App1Home from '@/components/App1Home.vue'
import { App, Plugin } from 'vue';

const MicroAppPlugin: Plugin = {
   install: (app: App, options: any) => {
      // console.log(app)

      app.component(App1Home.name, App1Home)

      window.mcContext.router.addRoute({
         path: '/micro-apps/app1',
         component: App1Home
      })

      console.log('Micro script completed.')
   }
}

export {
   MicroAppPlugin
}

