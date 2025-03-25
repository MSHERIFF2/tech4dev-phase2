<script setup>
import logo from '@/assets/lezadaLogo.png'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const userProfile = ref('')
const errorMessage = ref('')
onMounted(
    async () => {
        const token =localStorage.getItem("token")
        if (!token) {
           console.warn("no token found");
            return;
        }
    try{
        const response = await axios.get('http://134.209.223.106/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            },
           
        });
       
        userProfile.value = response.data.data;
      
    }catch (error) {
        errorMessage.value = error.response?.data?.message || "An error occur"
    }
}
) 
</script>
<template>
    <div class="flex gap-x-64  h-123 p-6">
        <div class="text-xl text-gray-600 font-bold font-serif">
                    <RouterLink to="/login"><img :src="logo"/></RouterLink>   
        </div>
        <div class=" font-bold" v-if="userProfile">
        <h1 class="text-bold uppercase text-3xl">Welcome back {{userProfile.user.name}}</h1>
        <p>user ID: {{ userProfile.user.id }}</p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
    </div>
</template>