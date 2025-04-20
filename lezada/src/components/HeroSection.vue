<script setup>
import bgImage from '@/assets/hero.jpg'
import { ref, computed } from 'vue'
import Layout from './Layout.vue';
import HeroSectionFooter from './HeroSectionFooter.vue';
import PopularProducts from './PopularProducts.vue';
import SaleProducts from './SaleProducts.vue';
import Page1Products from './Page1Products.vue';
import Page2Products from './Page2Products.vue';
import Page3Products from './Page3Products.vue';
import Products from './Products.vue';


const categories = ref([
    'New', 'Popular', 'Sale'
])
const CategoryComponent = computed(() => {
    if (whichToShow.value === 'New') return Products
    if (whichToShow.value === 'Popular') return PopularProducts
    if (whichToShow.value === 'Sale') return SaleProducts
    return null
})
const selectCategory = (category) => {
    showProduct.value = true;
    whichToShow.value = category;
    pageToShow.value = null;
};
const pageToShow = ref(null)
const showProduct = ref(false)
const whichToShow = ref(null)
const active = ref(null)
const showPage = (page) => {
    pageToShow.value = page
    showProduct.value = false
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
                    class="w-32 p-2 mx-16 font-bold text-center text-white uppercase bg-gray-600 hover:bg-transparent hover:border-1 hover:text-gray-600 cursor-pointer hover:border-black">shop
                    now</button>
            </div>
            <div class="flex items-center justify-around p-16">
                <p v-for="category in categories" :key="category"
                    class="text-6xl font-light text-gray-200  cursor-pointer"
                    :class="whichToShow === category ? 'text-gray-600' : 'text-gray-200'"
                    @click="selectCategory(category)">{{ category }}</p>

            </div>
            <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 "
                v-if="showProduct !== true && pageToShow === null">
                <Products />
            </div>

            <component :is="CategoryComponent" v-if="showProduct"
                class="flex flex-wrap p-10 bg-transparent mt-[-10px] bg-black gap-x-8" />

            <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === 1">
                <Page1Products />
            </div>
            <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === 2">
                <Page2Products />
            </div>
            <div class="flex flex-wrap gap-x-8 justify-evenly   p-3 " v-if="showProduct !== true && pageToShow === 3">
                <Page3Products />
            </div>

            <div class="flex gap-x-4 cursor-pointer justify-center text-xl">
                <span @click="showPage(1); whichToShow = null"
                    :class="pageToShow === 1 ? 'text-black underline font-bold' : 'text-gray-500'">1</span>
                <span @click="showPage(2); whichToShow = null"
                    :class="pageToShow === 2 ? 'text-black underline font-bold' : 'text-gray-500'">2</span>
                <span @click="showPage(3); whichToShow = null"
                    :class="pageToShow === 3 ? 'text-black underline font-bold' : 'text-gray-500'">3</span>

            </div>
        </div>
        <template #footer>
            <HeroSectionFooter />
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