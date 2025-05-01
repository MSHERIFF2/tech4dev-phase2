<script setup>

import logo from '@/assets/lezadaLogo.png'
import { SearchIcon, UserIcon, HeartIcon, CartIcon, MenuIcon } from '../Icons/Icons'
import { useStore } from '@/stores/WishStore'

const emit = defineEmits([
    'showMenu', 'showWishList', 'showCart'
])

const showMenu = (menu) => {
    emit('showMenu', menu)
}
const wishList = () => {
    emit('showWishList')
}
const cart = () => {
    emit('showCart')
}
const usestore = useStore()

</script>

<template>
    <div class="flex items-center justify-between p-6">
        <div class="font-serif text-xl font-bold text-gray-600">
            <RouterLink to="/"><img :src="logo" /></RouterLink>
        </div>
        <div class="flex items-center gap-x-16 ">
            <div class="flex items-center justify-between font-semibold text-gray-400 gap-x2 text-l">
                <div class="cursor-pointer hover:underline hover:text-gray-900" @mouseenter="showMenu('home')">
                    Home
                </div>
                <MenuIcon class="mx-1 mt-2 text-xs text-gray-400 " />
            </div>
            <div class="flex items-center justify-between font-semibold text-gray-400 gap-x2 text-l">
                <div class="cursor-pointer hover:underline hover:text-gray-900" @mouseenter="showMenu('shop')"
                    @mouseleave="showMenu(null)">
                    Shop
                </div>
                <MenuIcon class="mx-1 mt-2 text-xs text-gray-400 " />
            </div>
            <div class="flex items-center justify-between font-semibold text-gray-400 gap-x2 text-l">
                <div class="cursor-pointer hover:underline hover:text-gray-900" @mouseenter="showMenu('element')"
                    @mouseleave="showMenu(null)">
                    Element
                </div>
                <MenuIcon class="mx-1 mt-2 text-xs text-gray-400 " />
            </div>
            <div class="flex items-center justify-between font-semibold text-gray-400 gap-x2 text-l">
                <div class="cursor-pointer hover:underline hover:text-gray-900" @mouseenter="showMenu('page')"
                    @mouseleave="showMenu(null)">
                    Page
                </div>
                <MenuIcon class="mx-1 mt-2 text-xs text-gray-400 " />
            </div>
            <div class="flex items-center justify-between font-semibold text-gray-400 gap-x2 text-l">
                <div class="cursor-pointer hover:underline hover:text-gray-900" @mouseenter="showMenu('blog')"
                    @mouseleave="showMenu(null)">
                    Blog
                </div>
                <MenuIcon class="mx-1 mt-2 text-xs text-gray-400 " />
            </div>




        </div>
        <div class="flex justify-between items-cener gap-x-6 ">
            <RouterLink to="/search">
                <SearchIcon class="cursor-pointer" />
            </RouterLink>
            <RouterLink to="/login">
                <UserIcon class="cursor-pointer" />
            </RouterLink>


            <HeartIcon class="cursor-pointer" :class="usestore.active === true ? '' : 'text-red-500'" @click="wishList" />


            <CartIcon class="cursor-pointer" @click="cart" />



        </div>
    </div>
</template>