import { ref } from "vue"
import { defineStore } from 'pinia'

export const useStore1 = defineStore('store1', () => {
   const msg = ref('Hello')

   function updateMsg() {
      // console.log('Triggering update ..')

      msg.value = 'Hello 1'
   }

   return { msg, updateMsg }
})