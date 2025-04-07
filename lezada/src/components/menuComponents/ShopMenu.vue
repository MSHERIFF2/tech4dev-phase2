<script setup>
import { ref } from 'vue';
import imageUrl from '@/assets/megamenu-shop.png'
const items = ref( [
  
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

<div class="flex gap-x-8 justify-between ">    
      <div>
        <h1 class="text-l font-bold text-bold">Group One</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[0]" :key="item" >
            <li>{{item}}</li>
        </ul>
      </div>
       
       <div>
        <h1 class="text-l font-bold text-bold">Group Two</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[1]" :key="item">
            <li>{{item}}</li>
        </ul>
       </div> 
       <div>
        <h1 class="text-l font-bold text-bold">Shop pages</h1>
        <ul class="m-2 text-left ml-0" v-for="item in items[2]" :key="item">
            <li>{{item}}</li>
        </ul>
       </div>
       
       <div>
       <img :src="imageUrl" alt="" class="w-25 h-auto bg-cover">
       </div>

       
   
  
    
</div>
</template>