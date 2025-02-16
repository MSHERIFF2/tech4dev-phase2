<template>
    <div class="flex flex-col">
        <div>
            <Header @showModal="showModal" @hideModal="hideModal" @showPageMenu="showPageMenu"
                @hidePageMenu="hidePageMenu" @showBlogMenu="showBlogMenu" @hideBlogMenu="hideBlogMenu" />
        </div>
        <div class="p-16">
            <Transition name="slide">
                <div class="z-50 fixed top-32 shadow shadow-xl bg-white w-[90%] transition  -transition-x-1/2" v-if="activeMenu">
                              <component :is="activeMenu"/>                  
                </div>
            </Transition>

            <div class="bg-cover bg-center h-screen p-6 z-10" :style="{ backgroundImage: `url(${hero})` }">
                <h1>ACCESORIES</h1>
                <p class="text-3xl w-12">Bottle Grinder Small 2-Piece</p>
            </div>
        </div>

    </div>

</template>
<script setup>
import { ref, computed } from 'vue';
import hero from '@/assets/hero.jpg';
import Modal from './Modal.vue';
import Header from './Header.vue';
import PageMenu from './PageMenu.vue'
import BlogMenu from './BlogMenu.vue';

const show = ref(false)
const pageMenu = ref(false)
const blogMenu = ref(false)
const activeMenu = computed(() => {
    if (show.value) return Modal
    if (pageMenu.value) return PageMenu
    if (blogMenu.value) return BlogMenu
    return null;
})
const showModal = () =>{
    show.value = true
}
const hideModal = () =>{
    show.value = false
}
const showPageMenu = () =>{
    pageMenu.value = true
}
const hidePageMenu = () =>{
    pageMenu.value = false
}
const showBlogMenu = () =>{
    blogMenu.value = true
}
const hideBlogMenu = () =>{
    blogMenu.value = false
}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(50px);
    opacity: 0
}
</style>