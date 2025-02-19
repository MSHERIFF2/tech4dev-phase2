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
import {ref, computed} from 'vue'
const data = ref({
    email: "",
    password: "",
    error: null,

})
  const handleLogin = async () => {
    try{
        await authService.login({
            email: data.email.value, 
            password: data.password.value
        })
        $router.push("/dashboard")

    }catch (err){
        data.error.value = "Invalid credentials"
    }
};
</script>