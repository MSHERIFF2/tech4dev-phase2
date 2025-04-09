<script setup>
import { ref } from 'vue';
import imageUrl from '@/assets/megamenu-shop.png'
const items = ref([

  [
    'Left Sidebar',
    'Right Sidebar',
    'No Sidebar',
    'Full Width No Space',
    'Full Width No Sidebar',
    'Full Width Left Sidebar',
    'Full Width Right Sidebar',
  ],



  [
    'Basic',
    'Full Width',
    'Full Width Right Thumb',
    'Sticky Details',
    'Shopping Cart',
    'Wishlist',
    'Compare',

  ],
  [

    'Checkout',
    'Order Tracking',
    'My Account',
    'Login Register',
  ],

])

</script>
<template>
<div class="pt-10 top-12 bg-transparent top-12 z-50 absolute left-[5%] w-[90.5%]">
  <div class="flex p-6 bg-white shadow text-gray-900 ml-2 mr-2 justify-between gap-x-4 h-[350px] overflow-clip">
    <div>
      <h1 class="text-l font-bold ">Group One</h1>
      <ul class="m-2 text-left ml-0" v-for="item in items[0]" :key="item">
        <li>{{ item }}</li>
      </ul>
    </div>

    <div>
      <h1 class="text-l font-bold text-bold">Group Two</h1>
      <ul class="m-2 text-left ml-0" v-for="item in items[1]" :key="item">
        <li>{{ item }}</li>
      </ul>
    </div>
    <div>
      <h1 class="text-l font-bold text-bold">Shop pages</h1>
      <ul class="m-2 text-left ml-0" v-for="item in items[2]" :key="item">
        <li>{{ item }}</li>
      </ul>
    </div>

    <div>
      <img :src="imageUrl" alt="" class="bg-cover">
    </div>
  </div>
</div>
  
</template>