<template>
   <AuthLayout>
    <Details/>
   </AuthLayout>
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import Details from '@/components/Details.vue';
export default{
    name: 'SignIn',
    data() {
        return {

        }
    },
    components: {
        AuthLayout, Details
    }
}
</script>
