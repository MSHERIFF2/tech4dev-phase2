<script setup>
import {ref} from 'vue'
import logo from '@/assets/lezadaLogo.png'
import { SearchIcon, UserIcon, HeartIcon, CartIcon, MenuIcon } from '../Icons/Icons'
const Home = ref('Home')
const Shop= ref('Shop')
const Element = ref('Elements')
const Page = ref('Pages')
const Blog = ref('Blog')
const showMenu = ref('false')

const emit = defineEmits(['showHomeMenu', 'hideHomeMenu'])
const showHomeMenu = () => {
emit('showHomeMenu', showMenu.value=true)
}
const hideHomeMenu = () => {
emit('hideHomeMenu', showMenu.value=false)
}
</script>

<template>
<div class="flex justify-between p-6 items-center">
<div class="text-xl text-gray-600 font-bold font-serif">
    <img :src="logo"/>
</div>
<div class="flex items-center gap-x-16 ">
    <div class="flex gap-x2 text-l font-semibold text-gray-400 justify-between  items-center">
       <div class="hover:underline hover:text-gray-900 cursor-pointer" @mouseover="showHomeMenu" @mouseleave="hideHomeMenu">
        {{ Home }}
       </div> 
        <MenuIcon class=" text-xs text-gray-400 mt-2 mx-1"/>
    </div>
    <div class="flex gap-x2 text-l font-semibold text-gray-400 justify-between  items-center">
        <div class="hover:underline hover:text-gray-900 cursor-pointer">
        {{ Shop }}
        </div>
        <MenuIcon class=" text-xs text-gray-400 mt-2 mx-1"/>
    </div>
    <div class="flex gap-x2 text-l font-semibold text-gray-400 justify-between  items-center">
        <div class="hover:underline hover:text-gray-900 cursor-pointer">
        {{ Element }}
        </div>
        <MenuIcon class=" text-xs text-gray-400 mt-2 mx-1"/>
    </div>
    <div class="flex gap-x2 text-l font-semibold text-gray-400 justify-between  items-center">
        <div class="hover:underline hover:text-gray-900 cursor-pointer">
        {{ Page }}
        </div>
        <MenuIcon class=" text-xs text-gray-400 mt-2 mx-1"/>
    </div>
    <div class="flex gap-x2 text-l font-semibold text-gray-400 justify-between  items-center">
        <div class="hover:underline hover:text-gray-900 cursor-pointer">
        {{ Blog }}
        </div>
        <MenuIcon class=" text-xs text-gray-400 mt-2 mx-1"/>
    </div>
   
    
   
   
</div>
<div class="flex justify-between  items-cener gap-x-6 ">
    <SearchIcon class="cursor-pointer"/>
    <UserIcon class="cursor-pointer"/>
    <HeartIcon class="cursor-pointer"/>
    <CartIcon class="cursor-pointer"/>
</div>
</div>
</template>