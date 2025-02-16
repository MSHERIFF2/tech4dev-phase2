<template>
    <div v-for="item in arrayz" :key="item" class="flex divide justify-between p-3 w-auto">
        <div class="w-1/5 ">{{ item }}</div>
        <div class="w-1/5 ">{{ item }}</div>
        <div class="w-1/5 ">{{ item }}</div>
        <div class="w-1/5 ">{{ item }}</div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const arrayz = ref(['Decor', 'Creative', 'Perform', 'Trending']);
</script>