<template>
  <div>
        <AuthLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  name: 'AuthView',
  components: {
    AuthLayout
  }
}
</script>
