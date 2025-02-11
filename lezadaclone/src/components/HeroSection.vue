<script setup>

import hero from '@/assets/hero.jpg';

</script>
<template>
    <div class="p-6 z-20 relative">
        <div class="bg-cover bg-center h-screen p-6" :style="{ backgroundImage: `url(${hero})` }">
            <h1>ACCESORIES</h1>
            <p class="text-3xl">Bottle Grinder</p>
        </div>
    </div>

</template>