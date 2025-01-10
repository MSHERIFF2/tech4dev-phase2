<template>
   <AuthLayout>
    <div class="w-full h-full m-auto">
        <h1>{{msg}}</h1>
        
    </div>
    
   </AuthLayout>
    
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
export default{
    name: 'DashBoard',
    data() {
        return {
            msg: "This is business detail page"
        }
    },
    components: {AuthLayout, }
}
</script>

