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
     <div class="bg-transparent">
        <div class="flex flex-wrap gap-x-6">
            <div v-for="product in products" :key="product.id" class="w-1/5 p-3  my-4 bg-gray-100">
           <div class="p-6">
            <img :src="product.image" alt="">
           </div> 
            <p>{{ product.name }}</p>
            <p>${{ product.price }}</p>
        </div>
        
        </div>
        </div>
  

  

</template>