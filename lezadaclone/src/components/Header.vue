<template>
  <div class="text-center items-center p-12 flex justify-between w-full h-full ">
    <div>
      <h1 class="text-3xl text-gray-900">{{ msg.msg }}</h1>
    </div>

    <div class="w-2/5 flex justify-between p-6">
      <ul v-for="navitem in msg.navbar" :key="navitem" class="flex  justify-center items-center">
        <li class="text-xl text-gray-400 inline-flex w-full justify-center flex items-center">{{ navitem }}
          <menuIcon  class="mt-2"/>
        </li>
        
      </ul>
      <HeaderModal class="hidden"/>
    </div>
    <div class="flex justify-arouund items-center text-black w-1/5 gap-x-4" >
   <searchIcon/>
   <userIcon/>
   <heartIcon/>
   <cartIcon/>
   

    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon, MenuIcon, HeartIcon, CartIcon, UserIcon } from '@/components/Icons/Icons'
import HeaderModal from '@/components/HeaderModal.vue'

const msg = ref({
  msg: 'LEZADA',
  navbar: ['Home', 'Shop', 'Elements', 'Pages', 'Blog'],

})

</script>
