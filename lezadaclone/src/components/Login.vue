<script setup>
import {ref} from 'vue';
import apiClient from './api';
import NavBar from './navbar/NavBar.vue';
import breadCrumb from '@/assets/breadcrumb-bg-2.jpg'

const data = ref([])
const errorMessage = ref('')

const fetchData = async () => {
    try{
        const response = await apiClient.post('/login')
        data.value = response.stringify(data)

    }catch (error) {
        errorMessage.value = "The end point does not exist"

    }
}



</script>

<template>
    <div >
        <NavBar />
        <div :style="{backgroundImage: `url(${breadCrumb})`}" class="w-screen bg-auto p-20 gap-y-8">
            <h1 class="text-6xl font-bold text-[#333] ml-8">
                Customer Login
            </h1>
            <div class="flex gap-x-6 ml-8 gap-y-8">
                <RouterLink to="/" class="cursor-pointer font-light">Home /</RouterLink>
                <p class="font-light">Customer Login</p>
            </div>
           

        </div>
        <div class="p-16 flex gap-x-16 justify-around">
            <div class="bg-gray-100 flex flex-col  sm:w-2/5 ">
                <h2 class="text-center font-bold text-2xl">Login</h2>
                <p class="text-center mt-2">Greate to have you back!</p> 
                <form class="flex flex-col gap-y-16 text-gray-600 p-8">
                    <input class="border-b  focus:outline-none focus:border-b-2 focus:border-gray-600 border-gray-400 focus:border-gray-600" type="text" placeholder="username or email">
                    <input class="border-b  focus:outline-none focus:border-b-2 focus:border-gray-600 border-gray-400 focus:border-gray-600" type="password" placeholder="password">
                    <button class="uppercase bg-gray-900 p-2 text-white text-center w-32">Login</button>
                   <div class="gap-x-2 flex">
                    <input  type="checkbox" class="border">
                    <label>Remember me</label>
                   </div>
                   
                    
                </form> 
                <a class="p-8" href="#">lost your password? </a>          
            </div>
            <div>
                <h2>Register</h2>
                <p>If you don't have an account, register now!</p>
            </div>
        </div>
    </div>
</template>