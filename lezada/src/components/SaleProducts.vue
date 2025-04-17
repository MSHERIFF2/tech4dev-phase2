<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

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
            const response = await axios.get('http://134.209.223.106/api/products?page=12', {
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

   
        <div class="flex flex-wrap gap-x-6">
            <div v-for="product in products" :key="product.id" class="relative w-1/5 p-3  my-4 bg-gray-100">
                <div class="p-6">
                    <img :src="product.image" alt="">
                </div>
                <p>{{ product.name }}</p>
                <p>${{ product.price }}</p>
                <div class="z-50 absolute top-6 left-0 w-full h-full">
                    <div class="w-1/5 h-0.1/5 rounded-[100%] p-4 bg-green-300 text-white justify-center">
                        <p class="text-center">%</p>
                    </div>
                   
                    <div class="w-1/5 h-0.1/5 rounded-[100%] p-4 bg-red-400 text-white justify-center">
                        <p class="text-center">new</p>
                    </div>
                   
                </div>
            </div>


        </div>




</template>