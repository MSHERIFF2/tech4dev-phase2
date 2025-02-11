<template>
  <div class="  p-6 flex justify-between w-full h-full  z-20 ">
    <div class=" w-1/5">
      <h1 class="text-4xl text-center text-gray-900">{{ msg.msg }}</h1>
    </div>
    <div class=" flex  w-2/5 justify-content">
      <ul class="flex justify-evenly items-center w-full">
        <li @mouseover="changeMenu" v-for="navitem in msg.navbar" class=" flex mx-1 cursor-pointer hover:underline">{{ navitem }} 
          <MenuIcon class="mt-2" />
        </li>
       

      </ul>
    </div>

    <div class="flex justify-around items-center text-black w-1/5 gap-x-6">
      <SearchIcon />
      <UserIcon />
      <HeartIcon />
      <CartIcon />


    </div>
  </div>
  <HeaderModal v-if="show" />

</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon, MenuIcon, HeartIcon, CartIcon, UserIcon } from '@/components/Icons/Icons'
import HeaderModal from '@/components/HeaderModal.vue'

const msg = ref({
  msg: 'LEZADA',
  navbar: ['Home', 'Shop', 'Elements', 'Pages', 'Blog'],
  

})
const show = ref(false)

const changeMenu = () => {
  show.value = !show.value
  
}

</script>
