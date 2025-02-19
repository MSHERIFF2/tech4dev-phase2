<template>
<div>
    <h2>Login</h2>
    <form @submit.prevent = "handleLogin">
        <input v-model="email" placeholder="email" required/>
        <input v-model="password" placeholder="password" required/>
        <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
</div>
</template>

<script setup>
import { authService } from '@/services/api';
import {ref} from 'vue'
const email = ref("")
const password = ref("")
const error = ref(null)

  const handleLogin = async () => {
    try{
        await authService.login({
            email: email.value, 
            password: password.value
        })
        $router.push("/dashboard")

    }catch (err){
        error.value = "Invalid credentials"
    }
};
</script>