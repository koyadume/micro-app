import * as MicroAppVueComponents from '@/components'

export default {
   install(app) {
      Object.keys(MicroAppVueComponents).forEach(key => {
         const cmpntName = Object.keys({ [key]: key })[0]
         console.log(cmpntName)

         app.component(cmpntName, MicroAppVueComponents[key])
      })
   }
}