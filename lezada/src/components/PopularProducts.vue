<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import {  HeartIcon, Compare, SearchIcon } from './Icons/Icons'

const products = ref([])
const errorMessage = ref('')

onMounted(
    async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            console.warn("no token found");
            return;
        }
      
        try {
            const response = await axios.get('http://134.209.223.106/api/products?page=8', {
                headers: {
                    Authorization: `Bearer ${token}`
                },

            });

            if (response.data.status === 'success') {
                products.value = response.data.data.data;
            }



        } catch (error) {
            errorMessage.value = error.response?.data?.message || "An error occur"
        }
    }
)

</script>

<template>
    <div class="flex flex-wrap gap-x-16 gap-y-4">
            <div v-for="product in products" :key="product.id" class="relative group w-1/5  bg-pink-100">
                <div class="w-full">
                    <img :src="product.image" alt="" class="h-[16em] w-full">
                </div>
                <div class="p-3">
                    <p>{{ product.name }}</p>
                    <p class="font-bold">${{ product.price }}</p>
                </div>
               
                <div class="flex flex-col z-50 absolute top-6 left-0 w-full h-full gap-y-4">
                    <div class="relative w-10 h-10 rounded-[100%] p-2 bg-green-300 text-white mx-1 justify-center">
                        <p class="text-center text-xs  absolute top-3 left-2">-10%</p>
                    </div>
                   
                    <div class=" relative w-10 h-10 rounded-[100%] p-2 bg-red-400 text-white mx-1 justify-center">
                        <p class="text-center text-xs  absolute top-3 left-2">new</p>
                    </div>
                   
                </div>
                <div class="flex flex-col z-70 gap-y-4 justify-center top-4 left-44 invisible  w-full bg-transparent absolute group-hover:visible">
                    <div class="bg-white w-1/5 p-2"><HeartIcon/></div>
                    <div class="bg-white w-1/5 p-2"><Compare class="size-8"/></div>
                    <div class="bg-white w-1/5 p-2"><SearchIcon/></div>
                </div>
            </div>


        </div>

  

</template>