<script setup>
import bgImage from '@/assets/hero.jpg'
import { ref} from 'vue'
import Layout from './Layout.vue';
import HeroSectionFooter from './HeroSectionFooter.vue';
import PopularProducts from './PopularProducts.vue';
import SaleProducts from './SaleProducts.vue';
import Page1Products from './Page1Products.vue';
import Page2Products from './Page2Products.vue';
import Page3Products from './Page3Products.vue';
import Products from './Products.vue';



const pageToShow = ref(null)
const showProduct = ref(false)
const whichToShow = ref(null)

const showPage = (page) => {
    pageToShow.value = page
}

</script>
<template>
    <Layout>
        

   <div class="relative z-10 px-16 py-6">
       <div :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }"
           class="relative flex flex-col justify-center h-screen p-16 gap-y-4">
           <h1 class="mx-16 font-bold tracking-widest text-blue-400 text-l">ACCESSORIES</h1>
           <p class="mx-16 text-4xl font-bold text-gray-900">Bottle Grinders,</p>
           <p class="mx-16 text-4xl font-bold text-gray-900">Small, 2-pieces</p>
           <button
               class="w-32 p-2 mx-16 font-bold text-center text-white uppercase bg-gray-600 hover:bg-transparent hover:border-1 hover:text-black cursor-pointer hover:border-black">shop
               now</button>
       </div>
       <div class="flex items-center justify-around p-4 ">
           <p class="text-6xl font-light text-gray-200 hover:text-black cursor-pointer"
               @click="showProduct = true; whichToShow = 'New'">New</p>
           <p class="text-6xl font-light text-gray-200 hover:text-black cursor-pointer"
               @click="showProduct = true; whichToShow = 'popular'" >Popular</p>
           <p class="text-6xl font-light text-gray-200 hover:text-black cursor-pointer"
               @click="showProduct = true; whichToShow = 'sale'" >Sale</p>
       </div>
       <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === null">
           <Products />
       </div>

       <div class="flex flex-wrap p-10 bg-transparent mt-[-10px] bg-black gap-x-8 justify-evenly" v-if="whichToShow === 'New' && showProduct" @mouseenter="showProduct = true">
           <Products />

       </div>

       <div class="flex flex-wrap p-10 bg-transparent mt-[-10px] bg-black gap-x-8 justify-evenly" v-if="showProduct && whichToShow === 'popular'" @mouseenter="showProduct = true" >
           <PopularProducts />
       </div>
       <div class="flex flex-wrap p-10 bg-transparent mt-[-10px] bg-black gap-x-8 justify-evenly" v-if="showProduct && whichToShow === 'sale'" @mouseenter="showProduct = true" >
           <SaleProducts />
       </div>
       <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === 1">
           <Page1Products />
       </div>
       <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === 2">
           <Page2Products />
       </div>
       <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === 3">
           <Page3Products />
       </div>

       <div class="flex gap-x-4 cursor-pointer">
           <span @click="showPage(1)">1</span>
           <span @click="showPage(2)">2</span>
           <span @click="showPage(3)">3</span>

       </div>
   </div>
   <template #footer>
    <HeroSectionFooter/>
   </template>
    </Layout>
    

   
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