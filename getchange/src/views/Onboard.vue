<template>
    <OnboardLayout>
        <div class=" m-auto p-12 h-full rounded-xl shadow-xl shadow-grey-300 justify-center items-center">
            <div class=" my-6 mx-6 text-center">
                <h1 class="text-blue-900 font-bold ">Great to have you onboard</h1>
                <p>We just mailed you a confirmation link to josh.bakery@gmail.com. Complete registration by following the link.</p>
            </div>
       <div class="my-6 mx-6">
        <router-link to = "/DashBoard" class=" rounded-xl flex w-2/5 bg-green-500 text-white p-3 text-center m-auto">DashBoard</router-link>
       </div>
        
    </div>
    </OnboardLayout>
    
</template>
<script>
import OnboardLayout from '@/layouts/OnboardLayout.vue';

export default {
    name: 'Onboard',
    components: {OnboardLayout}
}
</script>