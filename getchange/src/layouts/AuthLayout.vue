<template>
    <div class="flex">
        <div class=" w-2/5 h-full reltive">
            <div class=" absolute inset-0">
                <img :src="require(`@/assets/images/${images[0]}`)" alt="male-user" >
            </div>       
                 
        </div>
        <div class=" w-3/5 flex justify-center items-center ">
            <div></div>
            <slot />
            <div class="text-gray-700">
                <div>By siging up, you agree to our <a class="text-green-500 font-bold">Terms</a> and Privacy <a class="text-green-500 font-bold">Policy</a></div>
                <div>© 2019 Tinylabs. All rights reserved.</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AuthLayout',
    data() {
        return {
            images: ['male.png', 'female.png']
        }
    }
}
</script>
