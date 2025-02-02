<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const message = ref('Welcome to lezada_clone')
</script>
