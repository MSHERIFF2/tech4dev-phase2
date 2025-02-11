<script setup>
import { ref } from 'vue';
const arrayz = ref(['Decor', 'Creative', 'Perform', 'Trending']);
</script>
<template>
<div v-for="item in arrayz" :key="item" class="flex justify-between  w-full h-auto -z-40 bg-gray-100 m-6 p-3">
    <div>{{item}}</div>
    <div>{{item}}</div>
    <div>{{item}}</div>
    <div>{{item}}</div>
</div>
</template>