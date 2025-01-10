<template>
    <AuthLayout>
        <div class=" m-auto p-0 h-full rounded-xl shadow-xl shadow-grey-300">
            <div class="justify-center items-center">
                <h1>Great to have you onboard</h1>
                <p>We just mailed you a confirmation link to josh.bakery@gmail.com. Complete registration by following the link.</p>
            </div>
       <div>
        <router-link to = "/DashBoard" class="bg-green-500 text-white p-3 text-center m-auto">DashBoard</router-link>
       </div>
        
    </div>
    </AuthLayout>
    
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
export default {
    name: 'Onboard',
    components: {AuthLayout}
}
</script>