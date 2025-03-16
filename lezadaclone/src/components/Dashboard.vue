<script setup>
import logo from '@/assets/lezadaLogo.png'
</script>
<template>
    <div class="flex gap-x-32">
        <div class="text-xl text-gray-600 font-bold font-serif">
 <RouterLink to="/login"><img :src="logo"/></RouterLink>   
</div>
        <h1>This is your dashboard for your product</h1>
    </div>
</template>