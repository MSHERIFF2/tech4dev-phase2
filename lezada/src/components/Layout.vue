<template>
    <div class="border">
        <NavBar @showMenu="showMenu" @showWishList="displayWishList=true" @showCart="displayCart=true" class="fixed z-40 w-screen bg-white" />
        <div class="relative border">

            <transition>
                <HomeMenu class="fixed" v-if="menuToShow === 'home'"
                    @mouseover="menuToShow === 'home' ? '' : menuToShow = 'home'" @mouseleave="menuToShow = null" />

            </transition>
            <transition>
                <ShopMenu class="fixed" v-if="menuToShow === 'shop'"
                    @mouseover="menuToShow === 'shop' ? '' : menuToShow = 'shop'" @mouseleave="menuToShow = null" />
            </transition>
            <transition>
                <ElementMenu class="fixed" v-if="menuToShow === 'element'"
                    @mouseover="menuToShow === 'element' ? '' : menuToShow = 'element'"
                    @mouseleave="menuToShow = null" />
            </transition>
            <transition>
                <PageMenu class="fixed" v-if="menuToShow === 'page'"
                    @mouseover="menuToShow === 'page' ? '' : menuToShow = 'page'" @mouseleave="menuToShow = null" />
            </transition>
            <transition>
                <BlogMenu class="fixed" v-if="menuToShow === 'blog'"
                    @mouseover="menuToShow === 'blog' ? '' : menuToShow = 'blog'" @mouseleave="menuToShow = null" />
            </transition>


        </div>
        <div class=" inset-0 flex justify-end z-50 fixed top-0 w-full h-full bg-black/20 " v-if="displayWishList" @click.self="displayWishList = false" >
            <transition  name="fade-slide" mode="out-in">
                <Wishlist  v-model="displayWishList"/>

            </transition>
        </div>
        <div class=" flex inset-0 justify-end z-50 fixed top-0 w-full h-full bg-black/20 " v-if="displayCart" @click.self="displayCart = false">
            <transition name="fade-slide" mode="out-in">
                <AddToCart v-model="displayCart" />
               
            </transition>
        </div>

        <div>
            <slot />
        </div>

        <footer>
            <slot name="footer" />
        </footer>






    </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
import NavBar from './navbar/NavBar.vue';

import HomeMenu from './menuComponents/HomeMenu.vue';
import ShopMenu from './menuComponents/ShopMenu.vue';
import PageMenu from './menuComponents/PageMenu.vue';
import ElementMenu from './menuComponents/ElementMenu.vue';
import BlogMenu from './menuComponents/BlogMenu.vue';
import Wishlist from './Wishlist.vue';
import AddToCart from './AddToCart.vue';

const props = defineProps({
    myfooter: {
        type: String
    }
})
const menuToShow = ref(null)


const showMenu = (menu) => {

    menuToShow.value = menu
}
const displayWishList = ref(false)
const displayCart = ref(false)

watch(displayWishList, (val) => {
    if (val) {
        displayCart.value = false
    }
})
watch(displayCart, (val) => {
    if (val) {
        displayWishList.value = false
    }
})
</script>
<style>
.fade-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.fade-slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.fade-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.fade-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
</style>