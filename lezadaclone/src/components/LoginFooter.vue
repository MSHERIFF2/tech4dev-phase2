<script setup>

   import lezadaLogo from '@/assets/lezadaLogo.png'
   import { FacebookIcon, IgIcon, XIcon, YouTubeIcon } from './Icons/Icons';

  
</script>

<template>
    <div class="p-16 bg-gray-100 text-gray-600 flex justify-between w-screen">
        <div class="w-auto">
            <img :src="lezadaLogo" alt="">
            <p>&#9400; LEZADA</p>
            <p>All Right Reserved</p>
        </div>
        <div class="w-auto gap-y-4 flex flex-col" >
           
            <h1 class="font-bold text-xs">ABOUT</h1>
            <RouterLink to="#" class="hover:border-b">About Us</RouterLink>
            <RouterLink to="#" class="hover:border-b">Store Location</RouterLink>
            <RouterLink to="#" class="hover:border-b">Contact</RouterLink>
            <RouterLink to="#" class="hover:border-b">order tracking</RouterLink>
           
           
           
        </div>
        <div class="w-auto gap-y-4 flex flex-col" >
           
            <h1 class="font-bold text-xs">USEFUL LINKS</h1>
            <RouterLink to="#" class="hover:border-b">Returns</RouterLink>
            <RouterLink to="#" class="hover:border-b">Support Policy</RouterLink>
            <RouterLink to="#" class="hover:border-b">Size guide</RouterLink>
            <RouterLink to="#" class="hover:border-b">FAQs</RouterLink>
           
           
           
        </div>
        <div class="w-auto gap-y-4 flex flex-col" >
           
            <h1 class="font-bold text-xs" >FOLLOWS US ON</h1>
            <RouterLink to="#" class="hover:text-black text-gray-400 flex gap-x-2"><XIcon/>twitter</RouterLink>
            <RouterLink to="#" class="hover:text-black text-gray-400 flex gap-x-2"><FacebookIcon/>Facebook</RouterLink>
            <RouterLink to="#" class="hover:text-black text-gray-400 flex gap-x-2"><IgIcon/>Instagram</RouterLink>
            <RouterLink to="#" class="hover:text-black text-gray-400 flex gap-x-2"><YouTubeIcon/>YouTube</RouterLink>
           
           
           
        </div>
        <div class="w-auto gap-y-4 flex flex-col" >
           
           <h1 class="text-3xl font-bold">Subcribe</h1>
           <p class="text-xl">subscribe to our newsletter to receive news on update</p>
           <div class="flex gap-x-auto justify-between border-b mt-8">
            <input type="email" placeholder="Your email address" class="border-none focus:outline-none">
            <span class="text-3xl"> &#8594;</span>
           </div>
           
           
           
           
        </div>
       
    </div>
</template>