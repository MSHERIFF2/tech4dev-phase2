<template>
   <AuthLayout>
    <Details/>
   </AuthLayout>
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import Details from '@/components/Details.vue';
export default{
    name: 'SignUp',
    data() {
        return {

        }
    },
    components: {
        AuthLayout, Details
    }
}
</script>
