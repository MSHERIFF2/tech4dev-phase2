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
import NewProducts from './NewProducts.vue';
import PopularProducts from './PopularProducts.vue';
import SaleProducts from './SaleProducts.vue';


const menuToShow = ref(null)
const showProduct = ref(false)
const whichToShow =ref(null)
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
                <HomeMenu class="fixed" v-if="menuToShow === 'home'" @mouseenter="menuToShow === 'home' ? '' : menuToShow ='home'" @mouseleave="menuToShow = null" />
                 
            </transition>
            <Transition>
                <ShopMenu class="fixed" v-if="menuToShow === 'shop'"@mouseenter="menuToShow === 'shop' ? '' : menuToShow ='shop'" @mouseleave="menuToShow = null" />
            </Transition>
            <Transition>
                <ElementMenu class="fixed" v-if="menuToShow === 'element'"@mouseenter="menuToShow === 'element' ? '' : menuToShow ='element'" @mouseleave="menuToShow = null" />
            </Transition>
            <Transition>
                <PageMenu class="fixed" v-if="menuToShow === 'page'"@mouseenter="menuToShow === 'page' ? '' : menuToShow ='page'" @mouseleave="menuToShow = null" />
            </Transition>
            <Transition>
                <BlogMenu class="fixed" v-if="menuToShow === 'blog'"@mouseenter="menuToShow === 'blog' ? '' : menuToShow ='blog'" @mouseleave="menuToShow = null" />
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
            <RouterLink to="#" class="text-6xl font-light text-gray-200 hover:text-black" @mouseover='showProduct=true;  whichToShow = "New"' @mouseenter="showProduct=true; whichToShow = 'New'" @mouseleave="showProduct=false">New</RouterLink>
            <RouterLink to="#" class="text-6xl font-light text-gray-200 hover:text-black" @mouseover='showProduct=true; whichToShow = "popular"' @mouseenter="showProduct=true; whichToShow = 'popular'" @mouseleave="showProduct=false">Popular</RouterLink>
            <RouterLink to="#" class="text-6xl font-light text-gray-200 hover:text-black"@mouseover='showProduct=true; whichToShow = "sale"' @mouseenter="showProduct=true; whichToShow = 'sale'" @mouseleave="showProduct=false">Sale</RouterLink>
        </div>
        <div class="flex flex-wrap gap-x-8 justify-space   p-3 " v-if="showProduct !== true">
            <Products />
        </div>
        <div class="flex flex-wrap gap-x-8 justify-space   p-3" v-if="whichToShow==='New' && showProduct">
            <NewProducts />
        </div>
        <div class="flex flex-wrap gap-x-8 justify-space   p-3" v-if="showProduct && whichToShow==='popular'">
            <PopularProducts />
        </div>
        <div class="flex flex-wrap gap-x-8 justify-space   p-3" v-if="showProduct && whichToShow==='sale'">
            <SaleProducts />
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