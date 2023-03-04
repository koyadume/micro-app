<template>
  <h3 style="margin-top: 1rem;">{{ msg }}</h3>
  <p>I'm micro app which contains remote components</p>
</template>

<script setup>
   import { ref, onMounted } from 'vue';

   const msg = ref('Micro App')

   onMounted(() => {
      msg.value = 'Micro App (updated)'
   })
</script>

