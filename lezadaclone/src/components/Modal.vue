<template>
    <div class="flex justify-between w-[90%]">
        <div v-for="item in arrayz" :key="item" class="flex   justify-between p-3 w-auto">
            <div class="w-1/5 flex flex-col ">{{ item }}</div>
            <!-- <div class="w-1/5 ">{{ item }}</div>
            <div class="w-1/5 ">{{ item }}</div>
            <div class="w-1/5 ">{{ item }}</div> -->
        </div>
        <div>
            <img :src="menuElement"  class="w-[30%]"/>
        </div>
    </div>
</template>
<script setup>
import menuElement from '@/assets/menu-element.png'
import { ref } from 'vue';
const arrayz = ref(['Decor', 'Creative', 'Perform', 'Trending']);
</script>