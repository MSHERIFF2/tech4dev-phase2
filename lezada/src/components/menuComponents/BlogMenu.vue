<script setup>
import { ChevronRight } from '../Icons/Icons';
import { ref } from 'vue';

const items = ref([
   'Standard Layout',
'Grid Layout',
'List Layout',
'Single Post Layout',
])




</script>
<template>
    <div class="pt-10 bg-transparent z-50 absolute top-12 left-[5%] w-[22.5%] mx-[60%] ">
        <div class="p-6 bg-white shadow text-gray-900  h-auto ">
           
                
                <div class="m-2   flex justify-between  items-center " v-for="item in items" :key="item" >
                   <div class="text-left">{{ item }}</div> 
                   <div class="text-gray-300 "><ChevronRight/></div> 
                </div>
            

        </div>
    </div>
</template>