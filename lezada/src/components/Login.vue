<script setup>
import { ref } from 'vue';

import Layout from './Layout.vue';
import breadCrumb from '@/assets/breadcrumb-bg-2.jpg'
import LoginFooter from './LoginFooter.vue';
import MenuLayout from './menuComponents/MenuLayout.vue';
import axios from 'axios';
import { useRouter } from 'vue-router'



const router = useRouter()

const cEmail = ref('')
const cName = ref('')
const cPassword = ref('')
const cErrorMessage = ref('')
const CSuccessMessage = ref('')
const lEmail = ref('')
const lName = ref('')
const lPassword = ref('')
const lErrorMessage = ref('')
const lSuccessMessage = ref('')


const createUser = async () => {
    try {
        const response = await axios.post('http://134.209.223.106/api/register', {
            email: cEmail.value,
            password: cPassword.value,
            name: cName.value
        })
        if (response.status === 201) {
            cSuccessMessage.value = "Account created successful!"
            cErrorMessage.value = ''
        }
    } catch (error) {
        cErrorMessage.value = error.response?.data?.message || "error in account creation"
        CSuccessMessage.value = ''
    }
}
const login = async () => {
    try {
        const response = await axios.post('http://134.209.223.106/api/login', {
            email: lEmail.value,
            password: lPassword.value
        })
        if (response.status === 201) {
            lSuccessMessage.value = "Account login successful!"
            lErrorMessage.value = ''
        }
        //    console.log(response.data)
        localStorage.setItem("token", response.data.data.token)

        router.push('/dashboard')
    } catch (error) {
        lErrorMessage.value = error.response?.data?.message || "error in account login"
        lSuccessMessage.value = ''
    }
}









</script>

<template>
    <div>
        <Layout>
            
            <div :style="{ backgroundImage: `url(${breadCrumb})` }" class="w-screen bg-auto p-20 gap-y-8">
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
                    <form @submit.prevent="login" class="flex flex-col gap-y-16 text-gray-600 p-8">
                        <input v-model="lEmail" class="border-b  focus:outline-none focus:border-b-2 
                    focus:border-gray-600 border-gray-400 focus:border-gray-600" type="text"
                            placeholder="username or email" required>
                        <input v-model="lPassword" class="border-b  focus:outline-none focus:border-b-2 
                    focus:border-gray-600 border-gray-400 focus:border-gray-600" type="password" placeholder="password"
                            required>
                        <p v-if="lErrorMessage">{{ lErrorMessage }}</p>
                        <p v-if="lSuccessMessage">{{ lSuccessMessage }}</p>
                        <button class="uppercase bg-gray-900 p-2 text-white 
                    text-center w-32 hover:bg-transparent hover:border-1 
                    hover:text-black hover:border-black" type="submit">Login</button>
                        <div class="gap-x-2 flex">
                            <input type="checkbox" class="border">
                            <label>Remember me</label>
                        </div>


                    </form>
                    <a class="p-8" href="#">lost your password? </a>
                </div>
                <div class=" w-2/5 ">
                    <h2 class="text-center font-semibold text-2xl mt-4">Register</h2>
                    <p class="text-center text-gray-400 font-semibold mt-4">If you don't have an account, register now!
                    </p>
                    <form @submit.prevent="createUser" class="flex flex-col gap-y-6 text-gray-600 p-8">
                        <label for="" class="text-xl font-bold">USERNAME <span
                                class="text-red-500 text-xl">*</span></label>
                        <input v-model="cName" class="border-b  focus:outline-none 
                    focus:border-b-2 focus:border-gray-600 border-gray-400 focus:border-gray-600" type="text" required>
                        <label for="" class="text-xl font-bold">EMAIL ADDRESS <span
                                class="text-red-500 text-xl">*</span></label>
                        <input v-model="cEmail" class="border-b  focus:outline-none 
                    focus:border-b-2 focus:border-gray-600 border-gray-400 focus:border-gray-600" type="email"
                            required>
                        <label for="" class="text-xl font-bold">PASSWORD <span class="text-red-500 text-xl">
                                *</span></label>
                        <input v-model="cPassword" class="border-b  focus:outline-none focus:border-b-2 
                    focus:border-gray-600 border-gray-400 focus:border-gray-600" type="password" required>
                        <p v-if="cSuccessMessage">{{ cSuccessMessage }}</p>
                        <p v-if="cErrorMessage">{{ cErrorMessage }}</p>
                        <button type="submit" class="uppercase bg-gray-900 p-2 text-white text-center 
                    w-32 hover:bg-transparent hover:border-1 hover:text-black hover:border-black">Register</button>


                    </form>
                </div>
            </div>
            <template #footer>
                <LoginFooter />
            </template>
        </Layout>


    </div>
</template>