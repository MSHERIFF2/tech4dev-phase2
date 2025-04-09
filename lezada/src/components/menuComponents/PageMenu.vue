<script setup>

import { ref } from 'vue';

const items = ref([
   'About Us',
'About Us Two',
'Contact Us',
'F.A.Q',
'Coming Soon',
'Not Found'])




</script>
<template>
    <div class="pt-10 bg-transparent z-50 absolute top-12 left-[5%] w-[15.5%] mx-[50%] ">
        <div class="flex p-6 bg-white shadow text-gray-900    h-auto ">
            <div>
                <h1 class="text-l text-bold">Group One </h1>
                <ul class="m-2  text-left" v-for="item in items" :key="item">
                    <li>{{ item }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>