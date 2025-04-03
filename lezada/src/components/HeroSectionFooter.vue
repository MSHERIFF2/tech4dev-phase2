<script setup>
   
   import { FacebookIcon, IgIcon, XIcon, YouTubeIcon } from './Icons/Icons';

  
</script>

<template>
    <div class="p-16 bg-gray-100 text-gray-600 flex justify-between w-screen">
       <div>
        <div class="w-auto gap-y-4 flex gap-x-8 " >
           
           
           <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200">About Us</RouterLink>
           <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200">Store Location</RouterLink>
           <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200">Contact</RouterLink>
           <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200">Support</RouterLink>
           <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200">Policy</RouterLink>
           <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200">FAQs</RouterLink>
          
          
          
       </div>
        <div class="w-auto flex gap-x-4 mt-8">
            
            <p>&#9400; 2025 <RouterLink to="/" class="font-bold">lezada.</RouterLink> All Right Reserved |<span class="font-bold">(+234)7075721393</span>|contact@lezada.com</p>
          
        </div>
       </div>
        
        
       
        <div class="w-auto  flex gap-x-8 " >
           
            
            <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200" title="twitter"><XIcon/></RouterLink>
            <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200" title="facebook"><FacebookIcon/></RouterLink>
            <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200" title="intagram"><IgIcon/></RouterLink>
            <RouterLink to="#" class="hover:border-b h-6 uppercase transition-all duration-200" title="YouTube"><YouTubeIcon/></RouterLink>
           
           
           
        </div>
      
       
    </div>
</template>