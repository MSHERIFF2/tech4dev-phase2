<template>
  <div class="text-center items-center p-12 flex justify-between w-full h-full ">
    <div>
      <h1 class="text-3xl text-gray-900">{{ msg.msg }}</h1>
    </div>
<div class=" flex gap-4">
  <ul  class="flex w-full mx-4  gap-4" v-for="navitem in msg.navbar">
    <li @mouseover="showModal" @mouseleave="hideModal" class="flex hover:underline cursor-pointer " >{{ navitem }} </li>
    <MenuIcon class="mt-2"/>

  </ul>
</div>
   
    <div class="flex justify-arouund items-center text-black w-1/5 gap-x-4" >
   <SearchIcon/>
   <UserIcon/>
   <HeartIcon/>
   <CartIcon/>
   

    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon, MenuIcon, HeartIcon, CartIcon, UserIcon } from '@/components/Icons/Icons'
import { defineEmits } from 'vue';

const msg = ref({
  msg: 'LEZADA',
  navbar: ['Home', 'Shop', 'Elements', 'Pages', 'Blog'],

})

const emit = defineEmits(['customeEvent'])
const showModal = () => {
  emit('showModal')
}
const hideModal = () => {
  emit('hideModal')
}
</script>
