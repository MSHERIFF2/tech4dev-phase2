<script setup>
import {ref} from 'vue';

import NavBar from './navbar/NavBar.vue';
import breadCrumb from '@/assets/breadcrumb-bg-2.jpg'
import LoginFooter from './LoginFooter.vue';
import MenuLayout from './menuComponents/MenuLayout.vue';
import axios from 'axios';
import {useRouter} from 'vue-router'



const router = useRouter()
const activeMenu = ref(null)
const email = ref('')
const name = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')


const createUser = async () => {
    try{
        const response = await axios.post('http://134.209.223.106/api/register', {
            email: email.value,
            password: password.value,
            name : name.value
        })
       if (response.status === 201){
        successMessage.value = "Account created successful!"
        errorMessage.value = ''
       }
    }catch(error){
        errorMessage.value = error.response?.data?.message || "error in account creation"
        successMessage.value = ''
    }
}
const login = async () => {
    try{
        const response = await axios.post('http://134.209.223.106/api/login', {
            email: email.value,
            password: password.value
        })
       if (response.status === 201){
        successMessage.value = "Account login successful!"
        errorMessage.value = ''
       }
       localStorage.setItem("token", response.data.token)
       router.push('/dashboard')
    }catch(error){
        errorMessage.value = error.response?.data?.message || "error in account login"
        successMessage.value = ''
    }
}
const toggleMenu = (menu) => {
    activeMenu.value = activeMenu.value === menu ? null : menu
}








</script>

<template>
    <div >
        <Transition>
            <NavBar class="fixed w-screen bg-white " 
            @showShopMenu="toggleMenu('shop')" 
            @hideShopMenu="toggleMenu(null)"
            @showHomeMenu="toggleMenu('home')"
            @hideHomeMenu="toggleMenu(null)"
            />
        </Transition>
        <MenuLayout v-if="activeMenu === 'shop'" class="w-[90.5%] z-50 absolute shadow bg-white text-gray-900 p-8 mt-22 ml-2 mr-2">
        This is a shop menu layout
    </MenuLayout>
        <MenuLayout v-if="activeMenu === 'home'" class="w-[90.5%] z-50 absolute shadow bg-white text-gray-900 p-8 mt-22 ml-2 mr-2">
        This is a Home menu layout
    </MenuLayout>
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
            <div class="bg-gray-100 flex flex-col  sm:w-2/5">
                <h2 class="text-center font-bold text-2xl mt-4">Login</h2>
                <p class="text-center mt-2 text-gray-400 font-semibold mt-4">Greate to have you back!</p> 
                <form @submit.prevent ="login" class="flex flex-col gap-y-16 text-gray-600 p-8">
                    <input v-model="email" class="border-b  focus:outline-none focus:border-b-2 
                    focus:border-gray-600 border-gray-400 focus:border-gray-600" type="text" placeholder="username or email" required>
                    <input v-model = "password"  class="border-b  focus:outline-none focus:border-b-2 
                    focus:border-gray-600 border-gray-400 focus:border-gray-600" type="password" placeholder="password" required>
                    <p v-if="errorMessage">{{ errorMessage }}</p>
                    <p v-if="successMessage">{{ successMessage }}</p>
                    <button class="uppercase bg-gray-900 p-2 text-white 
                    text-center w-32 hover:bg-transparent hover:border-1 
                    hover:text-black hover:border-black" type="submit">Login</button>
                   <div class="gap-x-2 flex">
                    <input  type="checkbox" class="border">
                    <label>Remember me</label>
                   </div>
                   
                    
                </form> 
                <a class="p-8" href="#">lost your password? </a>          
            </div>
            <div class=" w-2/5 ">
                <h2 class="text-center font-semibold text-2xl mt-4">Register</h2>
                <p class="text-center text-gray-400 font-semibold mt-4">If you don't have an account, register now!</p>
                <form @submit.prevent = "createUser" class="flex flex-col gap-y-6 text-gray-600 p-8">
                    <label for="" class="text-xl font-bold">USERNAME <span class="text-red-500 text-xl">*</span></label>
                    <input v-model="name" class="border-b  focus:outline-none 
                    focus:border-b-2 focus:border-gray-600 border-gray-400 focus:border-gray-600" type="text" required>
                    <label for="" class="text-xl font-bold">EMAIL ADDRESS <span class="text-red-500 text-xl">*</span></label>
                    <input v-model="email" class="border-b  focus:outline-none 
                    focus:border-b-2 focus:border-gray-600 border-gray-400 focus:border-gray-600" type="email" required>
                    <label for="" class="text-xl font-bold">PASSWORD <span class="text-red-500 text-xl"> *</span></label>
                    <input v-model="password" class="border-b  focus:outline-none focus:border-b-2 
                    focus:border-gray-600 border-gray-400 focus:border-gray-600" type="password" required>
                   <p v-if="successMessage">{{ successMessage }}</p>
                   <p v-if="errorMessage">{{ errorMessage }}</p>
                    <button type="submit" class="uppercase bg-gray-900 p-2 text-white text-center 
                    w-32 hover:bg-transparent hover:border-1 hover:text-black hover:border-black" >Register</button>
                                  
                    
                </form> 
            </div>
        </div>
        <LoginFooter/>
    </div>
</template>