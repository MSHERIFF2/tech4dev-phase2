<script setup>
import bgImage from '@/assets/hero.jpg'
import {ref} from 'vue'

const showMenuLayout = ref(false)

const showHomeMenu = () => {
    showMenuLayout.value = true
}

import MenuLayout from './menuComponents/MenuLayout.vue';
</script>
<template>
    <div class="px-16 py-6 relative z-10">
        <MenuLayout class="w-[90.5%] z-50 absolute shadow bg-green-400 text-white p-8" @showHomeMenu=showHomeMenu>
        This is a menu layout
    </MenuLayout>
        <div :style="{backgroundImage:`url(${bgImage})`, backgroundSize: cover}" class="h-screen">
            <h1>ACCESSORIES</h1>
        </div>
        
    </div>
   
</template>