<template>
  <h3 style="margin-top: 1rem;">{{ msg }}</h3>
  <p>I'm a micro app which contains remote components.</p>
</template>

<script>
   export default {
      inheritAttrs: false
   }
</script>

<script setup>
   import { ref, onMounted } from 'vue';

   const msg = ref('Micro App')

   onMounted(() => {
      msg.value = 'Micro App (updated)'
      
      console.log('Msg updated.')
   })
</script>

