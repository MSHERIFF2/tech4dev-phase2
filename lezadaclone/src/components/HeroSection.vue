<script setup>
import bgImage from '@/assets/hero.jpg'
import {ref} from 'vue'
import NavBar from './navbar/NavBar.vue';
import HeroSectionFooter from './HeroSectionFooter.vue';


const showMenuLayout = ref(false)

const showHomeMenu = () => {
    showMenuLayout.value = true
}
const hideHomeMenu = () => {
    showMenuLayout.value = false
}

import MenuLayout from './menuComponents/MenuLayout.vue';
</script>
<template>
 <NavBar  @showHomeMenu='showHomeMenu' @hideHomeMenu="hideHomeMenu" class="fixed z-100 w-screen bg-white" />
    <div class="px-16 py-6 relative z-10">
        <MenuLayout v-if="showMenuLayout" class="w-[90.5%] z-50 absolute shadow bg-white text-gray-900 p-8 mt-22 ml-2 mr-2">
        This is a menu layout
    </MenuLayout>
        <div :style="{backgroundImage:`url(${bgImage})`, backgroundSize: cover}" class="h-screen relative mt-22 p-16 flex flex-col justify-center gap-y-4">
            <h1 class="text-blue-400 font-bold mx-16 text-l tracking-widest">ACCESSORIES</h1>
            <p class="font-bold text-4xl text-gray-900 mx-16">Bottle Grinders,</p>
            <p class="font-bold text-4xl text-gray-900 mx-16">Small, 2-pieces</p>
            <button class="uppercase bg-gray-600 p-2 text-white text-center font-bold w-32 
            hover:bg-transparent hover:border-1 hover:text-black mx-16 hover:border-black">shop now</button>
        </div>
       <div class="flex justify-around items-center p-16 bg-white ">
        <RouterLink to="#" class="text-6xl text-gray-200 hover:text-black font-light">New</RouterLink>
        <RouterLink to="#" class="text-6xl text-gray-200 hover:text-black font-light">Popular</RouterLink>
        <RouterLink to="#" class="text-6xl text-gray-200 hover:text-black font-light">Sale</RouterLink>
       </div>
        
    </div>
   <HeroSectionFooter/>
</template>