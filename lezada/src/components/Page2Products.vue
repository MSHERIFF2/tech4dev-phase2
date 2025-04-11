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
            const response = await axios.get('http://134.209.223.106/api/products?page=2', {
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
    
        <div v-for="product in products" :key="product.id" class="w-1/5 p-3  my-4">
            <img :src="product.image" alt="">
            <p>{{ product.name }}</p>
            
            <p>${{ product.price }}</p>
        </div>
  

</template>