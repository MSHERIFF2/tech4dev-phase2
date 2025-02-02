<template>
  <div class="p-6 bg-gray-500 w-full h-full text-black">
    <h1 class="bg-green-400">{{ message }}</h1>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const message = ref('Welcome to lezada_clone')
</script>
