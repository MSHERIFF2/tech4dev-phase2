<script setup>
import { ref } from 'vue';
import imageUrl from '@/assets/menu-element.png'
const items = ref([['Smart Design', 'Collection', 'Jewelry', 'Cosmetics'],
['Swimsuit', 'Special', 'Concept',], ['Decor', 'Creative', 'Perfumes', 'Trending'],
['Essentials', 'Accessories', 'Lookbook', 'Furniture']])

</script>
<template>
    <div class="pt-10 bg-transparent z-50 absolute top-12 left-[5%] w-[90.5%]">
        <div class="flex p-8 bg-white shadow text-gray-900 ml-2 mr-2 justify-between gap-x-4 h-[300px] overflow-clip ">
            <div>
                <h1 class="text-l text-bold">Home Group</h1>
                <ul class="m-2 ml-0 text-left" v-for="item in items[0]" :key="item">
                    <li>{{ item }}</li>
                </ul>
            </div>

            <div>
                <h1 class="text-l text-bold">Home Group</h1>
                <ul class="m-2 ml-0 text-left" v-for="item in items[1]" :key="item">
                    <li>{{ item }}</li>
                </ul>
            </div>
            <div>
                <h1 class="text-l text-bold">Home Group</h1>
                <ul class="m-2 ml-0 text-left" v-for="item in items[2]" :key="item">
                    <li>{{ item }}</li>
                </ul>
            </div>
            <div>
                <h1 class="text-xl text-bold">Home Group</h1>
                <ul class="m-2 ml-0 text-left" v-for="item in items[3]" :key="item">
                    <li>{{ item }}</li>
                </ul>
            </div>
            <div>
                <img :src="imageUrl" alt="" class="bg-cover">
            </div>
        </div>
    </div>
</template>