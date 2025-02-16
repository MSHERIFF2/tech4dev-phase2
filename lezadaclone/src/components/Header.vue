<template>
  <div class="  p-6 flex items-center justify-between w-full h-full  z-20 ">
    <div class=" w-1/5">
      <h1 class="text-4xl text-center text-gray-900">{{ msg.msg }}</h1>
    </div>
    <div class=" flex gap-4">
      <ul class="flex w-full mx-4  gap-4" v-for="navitem in msg.navbar">
        <li @mouseover="showModal" @mouseleave="hideModal" class="flex hover:underline cursor-pointer ">{{ navitem }}
          <MenuIcon class="mt-2" />
        </li>
      </ul>
      <ul class="flex w-full mx-4  gap-4" v-for="menuitem in msg.menubar">
        <li @mouseover="showMenu" @mouseleave="hideMenu" class="flex hover:underline cursor-pointer ">{{ menuitem }}
          <MenuIcon class="mt-2" />
        </li>
      </ul>

      <div class="flex justify-around items-center text-black w-1/5 gap-x-6">
        <SearchIcon />
        <UserIcon />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon, MenuIcon, HeartIcon, CartIcon, UserIcon } from '@/components/Icons/Icons'
import { defineEmits } from 'vue';

const msg = ref({
  msg: 'LEZADA',
  navbar: ['Home', 'Shop', 'Elements',],
  menubar:['Pages', 'Blog'],


})




const emit = defineEmits(['customeEvent'])
const showModal = () => {
  emit('showModal')
}
const hideModal = () => {
  emit('hideModal')
}
</script>
