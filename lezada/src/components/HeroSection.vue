<script setup>
import bgImage from '@/assets/hero.jpg'
import { ref, watch } from 'vue'
import NavBar from './navbar/NavBar.vue';
import HeroSectionFooter from './HeroSectionFooter.vue';
import Products from './Products.vue';
import HomeMenu from './menuComponents/HomeMenu.vue';
import ShopMenu from './menuComponents/ShopMenu.vue';
import PageMenu from './menuComponents/PageMenu.vue';
import ElementMenu from './menuComponents/ElementMenu.vue';
import BlogMenu from './menuComponents/BlogMenu.vue';
import MenuLayout from './menuComponents/MenuLayout.vue';

const menuToShow = ref(null)
const showMenu = (menu) => {
    menuToShow.value = menu
}

</script>
<template>
    <div class="relative">
        <NavBar
            @showMenu="showMenu"
            class="fixed z-40 w-screen bg-white" />
            <transition>
                <HomeMenu v-if="menuToShow === 'home'" @mouseenter="menuToShow === 'home' ? '' : menuToShow ='home'" @mouseleave="menuToShow = null" />
                 
            </transition>
            <Transition>
                <ShopMenu v-if="menuToShow === 'shop'"@mouseenter="menuToShow === 'shop' ? '' : menuToShow ='shop'" @mouseleave="menuToShow = null" />
            </Transition>
    </div>
       
    <div class="relative z-10 px-16 py-6">
        <div :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }"
            class="relative flex flex-col justify-center h-screen p-16 gap-y-4">
            <h1 class="mx-16 font-bold tracking-widest text-blue-400 text-l">ACCESSORIES</h1>
            <p class="mx-16 text-4xl font-bold text-gray-900">Bottle Grinders,</p>
            <p class="mx-16 text-4xl font-bold text-gray-900">Small, 2-pieces</p>
            <button
                class="w-32 p-2 mx-16 font-bold text-center text-white uppercase bg-gray-600 hover:bg-transparent hover:border-1 hover:text-black hover:border-black">shop
                now</button>
        </div>
        <div class="flex items-center justify-around p-16 bg-white ">
            <RouterLink to="#" class="text-6xl font-light text-gray-200 hover:text-black">New</RouterLink>
            <RouterLink to="#" class="text-6xl font-light text-gray-200 hover:text-black">Popular</RouterLink>
            <RouterLink to="#" class="text-6xl font-light text-gray-200 hover:text-black">Sale</RouterLink>
        </div>
        <div class="flex flex-wrap gap-x-8 justify-space  rounded border p-3">
            <Products />
        </div>
    </div>
    
    <HeroSectionFooter />
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(50px);
}
</style>