<script setup>
import { ref } from 'vue';
const arrayz = ref(['Decor', 'Creative', 'Perform', 'Trending']);
</script>
<template>
<div v-for="item in arrayz" :key="item" class="flex flex-col">
{{item}}
</div>
</template>