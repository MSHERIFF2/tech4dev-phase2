<template>
    <div>
        <NavBar @showMenu="showMenu" class="fixed z-40 w-screen bg-white" />
        <div class="relative">

            <transition>
                <HomeMenu class="fixed" v-if="menuToShow === 'home'"
                    @mouseover="menuToShow === 'home' ? '' : menuToShow = 'home'" @mouseleave="menuToShow = null" />

            </transition>
            <Transition>
                <ShopMenu class="fixed" v-if="menuToShow === 'shop'"
                    @mouseover="menuToShow === 'shop' ? '' : menuToShow = 'shop'" @mouseleave="menuToShow = null" />
            </Transition>
            <Transition>
                <ElementMenu class="fixed" v-if="menuToShow === 'element'"
                    @mouseover="menuToShow === 'element' ? '' : menuToShow = 'element'"
                    @mouseleave="menuToShow = null" />
            </Transition>
            <Transition>
                <PageMenu class="fixed" v-if="menuToShow === 'page'"
                    @mouseover="menuToShow === 'page' ? '' : menuToShow = 'page'" @mouseleave="menuToShow = null" />
            </Transition>
            <Transition>
                <BlogMenu class="fixed" v-if="menuToShow === 'blog'"
                    @mouseover="menuToShow === 'blog' ? '' : menuToShow = 'blog'" @mouseleave="menuToShow = null" />
            </Transition>
        </div>
        <div>
            <slot />
        </div>

        <footer>
            <slot name="footer" />>
        </footer>

    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import NavBar from './navbar/NavBar.vue';

import HomeMenu from './menuComponents/HomeMenu.vue';
import ShopMenu from './menuComponents/ShopMenu.vue';
import PageMenu from './menuComponents/PageMenu.vue';
import ElementMenu from './menuComponents/ElementMenu.vue';
import BlogMenu from './menuComponents/BlogMenu.vue';

const props = defineProps({
    myfooter: {
        type: String
    }
})
const menuToShow = ref(null)
const showMenu = (menu) => {
    menuToShow.value = menu
}
</script>
