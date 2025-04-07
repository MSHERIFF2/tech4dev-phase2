<script setup>
import { ref } from 'vue';
import imageUrl from '@/assets/menu-element.png'
const items = ref([['Smart Design', 'Collection', 'Jewelry', 'Cosmetics'],
    ['Swimsuit', 'Special', 'Concept',], ['Decor','Creative','Perfumes', 'Trending'],
    ['Essentials', 'Accessories', 'Lookbook', 'Furniture']])

</script>
<template>
<div class="flex gap-x-4 justify-between ">    
      <div>
        <h1 class="text-l text-bold">Home Group</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[0]" :key="item" >
            <li>{{item}}</li>
        </ul>
      </div>
       
       <div>
        <h1 class="text-l text-bold">Home Group</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[1]" :key="item">
            <li>{{item}}</li>
        </ul>
       </div> 
       <div>
        <h1 class="text-l text-bold">Home Group</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[2]" :key="item">
            <li>{{item}}</li>
        </ul>
       </div>
       <div>
        <h1 class="text-xl text-bold">Home Group</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[3]" :key="item">
            <li>{{item}}</li>
        </ul>
       </div>
       <div>
       <img :src="imageUrl" alt="" class="w-32 bg-cover">
       </div>

       
   
  
    
</div>
</template>