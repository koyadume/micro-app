import { ref, watch } from "vue"
// import { useStore } from 'pinia'
import { useStore1 } from '../stores/store1'

export function useHello(cmpnt) {
   const msg1 = ref('World')

   const store1 = useStore1(window.pinia)
   
   function updateMsg() {
      console.log('Triggering update ..')
      
      store1.updateMsg()
   }

   watch(
      () => store1.msg, 
      (newVal, oldVal) => {
         console.log('Triggering watch from : ' + cmpnt)
         console.log(`Old value : ${oldVal}, New Value : ${newVal}`)
         
         msg1.value = 'World 1'
      },
      {
         immediate: false
      }
   )

   return { msg1, updateMsg };
}
